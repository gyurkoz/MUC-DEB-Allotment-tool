package com.lhsystems.booking.core.isb;

import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("!isb")

public class IsbClientDummy implements IsbClient {

    private static final Logger LOG = LoggerFactory.getLogger(IsbClientDummy.class);
    private static final String PNR_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int PNR_LENGTH = 6;

    private static final List<FlightTemplate> MUC_TO_DEB =
            List.of(
                    new FlightTemplate("LH1234", LocalTime.of(6, 15), 85, "LH"),
                    new FlightTemplate("LH1236", LocalTime.of(8, 0), 90, "LH"),
                    new FlightTemplate("EW2440", LocalTime.of(10, 30), 95, "EW"),
                    new FlightTemplate("LH1238", LocalTime.of(12, 0), 90, "LH"),
                    new FlightTemplate("EW2442", LocalTime.of(14, 45), 100, "EW"),
                    new FlightTemplate("LH1240", LocalTime.of(16, 30), 90, "LH"),
                    new FlightTemplate("LH1242", LocalTime.of(19, 0), 85, "LH"));

    private static final List<FlightTemplate> DEB_TO_MUC =
            List.of(
                    new FlightTemplate("LH1235", LocalTime.of(7, 0), 85, "LH"),
                    new FlightTemplate("EW2441", LocalTime.of(9, 15), 100, "EW"),
                    new FlightTemplate("LH1237", LocalTime.of(11, 30), 90, "LH"),
                    new FlightTemplate("LH1239", LocalTime.of(13, 45), 90, "LH"),
                    new FlightTemplate("EW2443", LocalTime.of(15, 30), 95, "EW"),
                    new FlightTemplate("LH1241", LocalTime.of(17, 45), 90, "LH"),
                    new FlightTemplate("LH1243", LocalTime.of(20, 15), 85, "LH"));

    @Override
    public List<FlightAvailability> searchFlights(
            String origin, String destination, LocalDate date) {
        LOG.info("[ISB-DUMMY] Searching flights {} -> {} on {}", origin, destination, date);
        var templates = "MUC".equals(origin) ? MUC_TO_DEB : DEB_TO_MUC;
        var results = new ArrayList<FlightAvailability>();

        for (var tmpl : templates) {
            var seed = tmpl.flightNumber() + date.toString();
            var hash = sha256(seed);

            // Derive realistic values from deterministic hash
            int seats = deriveSeatCount(hash);
            int stops = deriveStops(hash);
            BigDecimal price = derivePrice(hash, tmpl.baseMinutes(), stops);
            int actualMinutes = tmpl.baseMinutes() + (stops > 0 ? stops * 45 : 0);
            var departureTime = LocalDateTime.of(date, tmpl.time());

            results.add(
                    new FlightAvailability(
                            tmpl.flightNumber(),
                            tmpl.airline(),
                            origin,
                            destination,
                            departureTime,
                            departureTime.plusMinutes(actualMinutes),
                            actualMinutes,
                            stops,
                            seats,
                            price,
                            "EUR"));
        }

        LOG.info(
                "[ISB-DUMMY] Found {} flights for {} -> {} on {}",
                results.size(),
                origin,
                destination,
                date);
        return results;
    }

    @Override
    public String createPnr(String flightNumber, String departureTime, String passengerName) {
        var pnr = generateDeterministicPnr(flightNumber + departureTime + passengerName);
        LOG.info(
                "[ISB-DUMMY] Created PNR {} for flight {} passenger {}",
                pnr,
                flightNumber,
                passengerName);
        return pnr;
    }

    @Override
    public String retrievePnrStatus(String pnr) {
        LOG.info("[ISB-DUMMY] Retrieved PNR status for {}: CONFIRMED", pnr);
        return "CONFIRMED";
    }

    @Override
    public boolean cancelPnr(String pnr) {
        LOG.info("[ISB-DUMMY] Cancelled PNR {}", pnr);
        return true;
    }

    static int deriveSeatCount(byte[] hash) {
        // Use hash byte to produce 0..180 range, with ~10% chance of 0 (sold out)
        int raw = Byte.toUnsignedInt(hash[4]);
        if (raw < 26) {
            return 0; // ~10% sold out
        }
        return 5 + (raw % 176); // 5..180
    }

    static int deriveStops(byte[] hash) {
        int raw = Byte.toUnsignedInt(hash[5]);
        if (raw < 180) {
            return 0; // ~70% direct
        }
        if (raw < 240) {
            return 1; // ~24% one stop
        }
        return 2; // ~6% two stops
    }

    static BigDecimal derivePrice(byte[] hash, int baseMinutes, int stops) {
        // Base price 89..349 EUR, influenced by hash + travel time + stops
        int raw = Byte.toUnsignedInt(hash[6]);
        int base = 89 + (raw % 200);
        int stopSurcharge = stops * 15;
        return new BigDecimal(base + stopSurcharge);
    }

    private String generateDeterministicPnr(String seed) {
        var hash = sha256(seed);
        var sb = new StringBuilder(PNR_LENGTH);
        for (int ii = 0; ii < PNR_LENGTH; ii++) {
            int index = Byte.toUnsignedInt(hash[ii]) % PNR_CHARS.length();
            sb.append(PNR_CHARS.charAt(index));
        }
        return sb.toString();
    }

    private static byte[] sha256(String input) {
        try {
            var digest = MessageDigest.getInstance("SHA-256");
            return digest.digest(input.getBytes(StandardCharsets.UTF_8));
        } catch (NoSuchAlgorithmException ex) {
            throw new IllegalStateException("SHA-256 not available", ex);
        }
    }

    private record FlightTemplate(
            String flightNumber, LocalTime time, int baseMinutes, String airline) {}
}
