package com.lhsystems.booking.core.isb;

import com.lhsystems.booking.core.exception.GdsException;
import java.math.BigDecimal;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Pattern;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

/**
 * Real ISB SOAP client following the legacy GST integration pattern. Communicates with the ISB
 * (Integrated Service Bridge) middleware which proxies requests to the Amadeus GDS.
 *
 * <p>Authentication flow: requestSession → SOAP call → releaseSession
 *
 * <p>HTTP headers injected: x-isb-sessionId, x-isb-applicationId, x-isb-clientId, x-isb-customerId,
 * x-isb-traceId, x-isb-businessId, x-isb-timeStamp
 */

@Service
@Profile("isb")

public class IsbSoapClient implements IsbClient {

    private static final Logger LOG = LoggerFactory.getLogger(IsbSoapClient.class);
    private static final Duration TIMEOUT = Duration.ofSeconds(30);
    private static final String APPLICATION_ID = "MUCDEB";
    private static final String CLIENT_ID = "mucdeb-booking";
    private static final String BUSINESS_ID = "MUCDEB";
    private static final String CUSTOMER_ID = "LH";
    private static final String TRACE_PREFIX = "http-mucdeb-";
    private static final DateTimeFormatter TIMESTAMP_FMT =
            DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
    private static final Pattern SESSION_PATTERN = Pattern.compile("<sessionId>(.*?)</sessionId>");
    private static final Pattern FAULT_PATTERN =
            Pattern.compile("<faultstring>(.*?)</faultstring>");
    private static final Pattern LEG_PATTERN =
            Pattern.compile("<legAvailability>(.*?)</legAvailability>", Pattern.DOTALL);
    private static final Pattern PNR_PATTERN =
            Pattern.compile("<recordLocator>(.*?)</recordLocator>");
    private static final Pattern STATUS_PATTERN = Pattern.compile("<status>(.*?)</status>");
    private static final Map<String, Pattern> TAG_PATTERN_CACHE = new ConcurrentHashMap<>();

    private final IsbConfig config;
    private final HttpClient httpClient;

    public IsbSoapClient(IsbConfig config) {
        this.config = config;
        this.httpClient = HttpClient.newBuilder().connectTimeout(TIMEOUT).build();
    }

    @Override
    public List<FlightAvailability> searchFlights(
            String origin, String destination, LocalDate date) {
        LOG.info("[ISB] Searching flights {} -> {} on {}", origin, destination, date);
        var traceId = TRACE_PREFIX + UUID.randomUUID();
        String sessionId = null;

        try {
            sessionId = requestSession(traceId);
            var soapBody = buildAvailabilityRequest(origin, destination, date, CUSTOMER_ID);
            var response =
                    callReservationService(sessionId, traceId, soapBody, "getFlightAvailabiliy");
            return parseAvailabilityResponse(response);
        } catch (GdsException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new GdsException("Flight search failed: " + ex.getMessage(), ex);
        } finally {
            releaseSession(traceId, sessionId);
        }
    }

    @Override
    public String createPnr(String flightNumber, String departureTime, String passengerName) {
        LOG.info("[ISB] Creating PNR for flight {}", flightNumber);
        var traceId = TRACE_PREFIX + UUID.randomUUID();
        String sessionId = null;

        try {
            sessionId = requestSession(traceId);
            var soapBody = buildCreatePnrRequest(flightNumber, departureTime, passengerName);
            var response = callReservationService(sessionId, traceId, soapBody, "createPnr");
            return parsePnrResponse(response);
        } catch (GdsException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new GdsException("PNR creation failed: " + ex.getMessage(), ex);
        } finally {
            releaseSession(traceId, sessionId);
        }
    }

    @Override
    public String retrievePnrStatus(String pnr) {
        LOG.info("[ISB] Retrieving PNR status for {}", pnr);
        var traceId = TRACE_PREFIX + UUID.randomUUID();
        String sessionId = null;

        try {
            sessionId = requestSession(traceId);
            var soapBody = buildRetrievePnrRequest(pnr);
            var response = callReservationService(sessionId, traceId, soapBody, "retrievePnr");
            return parsePnrStatusResponse(response);
        } catch (GdsException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new GdsException("PNR status retrieval failed: " + ex.getMessage(), ex);
        } finally {
            releaseSession(traceId, sessionId);
        }
    }

    @Override
    public boolean cancelPnr(String pnr) {
        LOG.info("[ISB] Cancelling PNR {}", pnr);
        var traceId = TRACE_PREFIX + UUID.randomUUID();
        String sessionId = null;

        try {
            sessionId = requestSession(traceId);
            var soapBody = buildCancelPnrRequest(pnr);
            var response = callReservationService(sessionId, traceId, soapBody, "cancelPnr");
            return !response.contains("faultstring");
        } catch (GdsException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new GdsException("PNR cancellation failed: " + ex.getMessage(), ex);
        } finally {
            releaseSession(traceId, sessionId);
        }
    }

    private String requestSession(String traceId) {
        var soapEnvelope =
                "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
                        + " xmlns:auth=\"http://www.lhsystems.com/isb/auth/1.1.0\">"
                        + "<soapenv:Header/>"
                        + "<soapenv:Body>"
                        + "<auth:requestSession>"
                        + "<auth:applicationId>"
                        + APPLICATION_ID
                        + "</auth:applicationId>"
                        + "<auth:clientId>"
                        + CLIENT_ID
                        + "</auth:clientId>"
                        + "</auth:requestSession>"
                        + "</soapenv:Body>"
                        + "</soapenv:Envelope>";

        try {
            var request =
                    HttpRequest.newBuilder()
                            .uri(URI.create(config.authEndpoint()))
                            .header("Content-Type", "text/xml; charset=utf-8")
                            .header("SOAPAction", "requestSession")
                            .timeout(TIMEOUT)
                            .POST(HttpRequest.BodyPublishers.ofString(soapEnvelope))
                            .build();

            var response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() != 200) {
                throw new GdsException("Auth service returned HTTP " + response.statusCode());
            }

            var body = response.body();
            var matcher = SESSION_PATTERN.matcher(body);
            if (matcher.find()) {
                var sessionId = matcher.group(1);
                LOG.debug("[ISB] Session acquired: {}", sessionId);
                return sessionId;
            }
            throw new GdsException("No sessionId in auth response");
        } catch (GdsException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new GdsException("Failed to request ISB session: " + ex.getMessage(), ex);
        }
    }

    private void releaseSession(String traceId, String sessionId) {
        if (sessionId == null) {
            return;
        }
        try {
            var soapEnvelope =
                    "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
                            + " xmlns:auth=\"http://www.lhsystems.com/isb/auth/1.1.0\">"
                            + "<soapenv:Header/>"
                            + "<soapenv:Body>"
                            + "<auth:releaseSession>"
                            + "<auth:sessionId>"
                            + sessionId
                            + "</auth:sessionId>"
                            + "</auth:releaseSession>"
                            + "</soapenv:Body>"
                            + "</soapenv:Envelope>";

            var request =
                    HttpRequest.newBuilder()
                            .uri(URI.create(config.authEndpoint()))
                            .header("Content-Type", "text/xml; charset=utf-8")
                            .header("SOAPAction", "releaseSession")
                            .timeout(TIMEOUT)
                            .POST(HttpRequest.BodyPublishers.ofString(soapEnvelope))
                            .build();

            httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            LOG.debug("[ISB] Session released: {}", sessionId);
        } catch (Exception ex) {
            LOG.warn("[ISB] Failed to release session {}: {}", sessionId, ex.getMessage());
        }
    }

    private String callReservationService(
            String sessionId, String traceId, String soapBody, String soapAction) {
        var now = LocalDateTime.now().format(TIMESTAMP_FMT);
        try {
            var request =
                    HttpRequest.newBuilder()
                            .uri(URI.create(config.reservationEndpoint()))
                            .header("Content-Type", "text/xml; charset=utf-8")
                            .header("SOAPAction", soapAction)
                            .header("x-isb-sessionId", sessionId)
                            .header("x-isb-applicationId", APPLICATION_ID)
                            .header("x-isb-clientId", CLIENT_ID)
                            .header("x-isb-customerId", CUSTOMER_ID)
                            .header("x-isb-traceId", traceId)
                            .header("x-isb-businessId", BUSINESS_ID)
                            .header("x-isb-timeStamp", now)
                            .timeout(TIMEOUT)
                            .POST(HttpRequest.BodyPublishers.ofString(soapBody))
                            .build();

            var response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() != 200) {
                throw new GdsException("ISB returned HTTP " + response.statusCode());
            }

            var body = response.body();
            var faultMatcher = FAULT_PATTERN.matcher(body);
            if (faultMatcher.find()) {
                throw new GdsException("ISB SOAP fault: " + faultMatcher.group(1));
            }
            return body;
        } catch (GdsException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new GdsException("ISB reservation call failed: " + ex.getMessage(), ex);
        }
    }

    private String buildAvailabilityRequest(
            String origin, String destination, LocalDate date, String airlineCode) {
        return "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
                + " xmlns:res=\"http://www.lhsystems.com/isb/reservation/4.0.0\">"
                + "<soapenv:Header/>"
                + "<soapenv:Body>"
                + "<res:getFlightAvailabiliy>"
                + "<res:flightAvailabilityParam>"
                + "<res:airlineCode>"
                + escapeXml(airlineCode)
                + "</res:airlineCode>"
                + "<res:origin>"
                + escapeXml(origin)
                + "</res:origin>"
                + "<res:destination>"
                + escapeXml(destination)
                + "</res:destination>"
                + "<res:timeOfService>"
                + date
                + "T00:00:00</res:timeOfService>"
                + "<res:groupSearch>true</res:groupSearch>"
                + "<res:numberOfRoutings>10</res:numberOfRoutings>"
                + "<res:flexibleNumberOfDays>0</res:flexibleNumberOfDays>"
                + "<res:passengerTypes>ADT</res:passengerTypes>"
                + "</res:flightAvailabilityParam>"
                + "<res:numPages>1</res:numPages>"
                + "</res:getFlightAvailabiliy>"
                + "</soapenv:Body>"
                + "</soapenv:Envelope>";
    }

    private String buildCreatePnrRequest(
            String flightNumber, String departureTime, String passengerName) {
        return "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
                + " xmlns:res=\"http://www.lhsystems.com/isb/reservation/4.0.0\">"
                + "<soapenv:Header/>"
                + "<soapenv:Body>"
                + "<res:createPnr>"
                + "<res:pnr>"
                + "<res:flightNumber>"
                + escapeXml(flightNumber)
                + "</res:flightNumber>"
                + "<res:departureTime>"
                + escapeXml(departureTime)
                + "</res:departureTime>"
                + "<res:passengerName>"
                + escapeXml(passengerName)
                + "</res:passengerName>"
                + "</res:pnr>"
                + "</res:createPnr>"
                + "</soapenv:Body>"
                + "</soapenv:Envelope>";
    }

    private String buildRetrievePnrRequest(String pnr) {
        return "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
                + " xmlns:res=\"http://www.lhsystems.com/isb/reservation/4.0.0\">"
                + "<soapenv:Header/>"
                + "<soapenv:Body>"
                + "<res:retrievePnr>"
                + "<res:pnrNumber>"
                + escapeXml(pnr)
                + "</res:pnrNumber>"
                + "</res:retrievePnr>"
                + "</soapenv:Body>"
                + "</soapenv:Envelope>";
    }

    private String buildCancelPnrRequest(String pnr) {
        return "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
                + " xmlns:res=\"http://www.lhsystems.com/isb/reservation/4.0.0\">"
                + "<soapenv:Header/>"
                + "<soapenv:Body>"
                + "<res:cancelPnr>"
                + "<res:pnrNumber>"
                + escapeXml(pnr)
                + "</res:pnrNumber>"
                + "</res:cancelPnr>"
                + "</soapenv:Body>"
                + "</soapenv:Envelope>";
    }

    @SuppressWarnings("PMD.AvoidInstantiatingObjectsInLoops")
    private List<FlightAvailability> parseAvailabilityResponse(String xml) {
        // Parse the ISB SOAP XML response for flight availability legs.
        // Uses simple regex extraction matching the ISB response schema.
        var flights = new ArrayList<FlightAvailability>();
        var legMatcher = LEG_PATTERN.matcher(xml);

        while (legMatcher.find()) {
            var leg = legMatcher.group(1);
            var departure = LocalDateTime.parse(extractXmlValue(leg, "departure"));
            var arrival = LocalDateTime.parse(extractXmlValue(leg, "arrival"));
            var travelMinutes = (int) java.time.Duration.between(departure, arrival).toMinutes();

            flights.add(
                    new FlightAvailability(
                            extractXmlValue(leg, "flightNumber"),
                            extractXmlValue(leg, "airlineCode"),
                            extractXmlValue(leg, "origin"),
                            extractXmlValue(leg, "destination"),
                            departure,
                            arrival,
                            travelMinutes,
                            Integer.parseInt(extractXmlValueOrDefault(leg, "numberOfStops", "0")),
                            extractXmlValueOrDefault(leg, "stopoverAirport", null),
                            Integer.parseInt(extractXmlValueOrDefault(leg, "numberOfSeats", "0")),
                            new BigDecimal(extractXmlValueOrDefault(leg, "price", "0")),
                            extractXmlValueOrDefault(leg, "currency", "EUR")));
        }
        return flights;
    }

    private String parsePnrResponse(String xml) {
        var matcher = PNR_PATTERN.matcher(xml);
        if (matcher.find()) {
            return matcher.group(1);
        }
        throw new GdsException("No PNR in ISB response");
    }

    private String parsePnrStatusResponse(String xml) {
        var matcher = STATUS_PATTERN.matcher(xml);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "CONFIRMED";
    }

    private String extractXmlValue(String xml, String tag) {
        var pattern =
                TAG_PATTERN_CACHE.computeIfAbsent(
                        tag, t -> Pattern.compile("<" + t + ">(.*?)</" + t + ">"));
        var matcher = pattern.matcher(xml);
        if (matcher.find()) {
            return matcher.group(1);
        }
        throw new GdsException("Missing XML element: " + tag);
    }

    private String extractXmlValueOrDefault(String xml, String tag, String defaultValue) {
        var pattern =
                TAG_PATTERN_CACHE.computeIfAbsent(
                        tag, t -> Pattern.compile("<" + t + ">(.*?)</" + t + ">"));
        var matcher = pattern.matcher(xml);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return defaultValue;
    }

    private static String escapeXml(String input) {
        if (input == null) {
            return "";
        }
        return input.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&apos;");
    }
}
