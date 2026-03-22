package com.lhsystems.booking.core.service;

import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.core.isb.FlightAvailability;
import com.lhsystems.booking.core.isb.IsbClient;
import com.lhsystems.booking.core.mapper.FlightMapper;
import com.lhsystems.booking.persistence.entity.Flight;
import com.lhsystems.booking.persistence.entity.FlightStatus;
import com.lhsystems.booking.persistence.repository.FlightRepository;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

public class FlightService {

    private static final Logger LOG = LoggerFactory.getLogger(FlightService.class);

    private final FlightRepository flightRepository;
    private final FlightMapper flightMapper;
    private final IsbClient isbClient;

    public FlightService(
            FlightRepository flightRepository, FlightMapper flightMapper, IsbClient isbClient) {
        this.flightRepository = flightRepository;
        this.flightMapper = flightMapper;
        this.isbClient = isbClient;
    }

    @Transactional
    public List<FlightDTO> findFlights(String direction, LocalDate dateFrom, LocalDate dateTo) {
        var airports = direction.split("-");
        if (airports.length != 2) {
            throw new IllegalArgumentException("Invalid direction format: " + direction);
        }
        var departure = airports[0];
        var arrival = airports[1];

        var allFlights = new ArrayList<Flight>();
        for (var date = dateFrom; !date.isAfter(dateTo); date = date.plusDays(1)) {
            var availabilities = isbClient.searchFlights(departure, arrival, date);
            var flights = cacheFlights(availabilities);
            allFlights.addAll(flights);
        }

        LOG.info(
                "Found {} flights for {} from {} to {}",
                allFlights.size(),
                direction,
                dateFrom,
                dateTo);

        return allFlights.stream().map(flightMapper::toDto).toList();
    }

    private List<Flight> cacheFlights(List<FlightAvailability> availabilities) {
        if (availabilities.isEmpty()) {
            return List.of();
        }

        // Build IDs and fetch all existing flights in a single query
        var ids = availabilities.stream().map(this::buildFlightId).toList();
        Map<String, Flight> existingMap =
                flightRepository.findAllById(ids).stream()
                        .collect(Collectors.toMap(Flight::getId, Function.identity()));

        var toSave = new ArrayList<Flight>();
        for (var avail : availabilities) {
            var flightId = buildFlightId(avail);
            var flight = existingMap.getOrDefault(flightId, new Flight());

            flight.setId(flightId);
            flight.setFlightNumber(avail.flightNumber());
            flight.setMarketingAirline(avail.marketingAirline());
            flight.setDepartureAirport(avail.origin());
            flight.setArrivalAirport(avail.destination());
            flight.setDepartureTime(avail.departureTime());
            flight.setArrivalTime(avail.arrivalTime());
            flight.setTravelTimeMinutes(avail.travelTimeMinutes());
            flight.setStops(avail.stops());
            flight.setStopoverAirport(avail.stopoverAirport());
            flight.setAvailableSeats(avail.availableSeats());
            flight.setPriceAmount(avail.priceAmount());
            flight.setPriceCurrency(avail.priceCurrency());
            flight.setStatus(
                    avail.availableSeats() > 0 ? FlightStatus.AVAILABLE : FlightStatus.SOLD_OUT);
            flight.setCachedAt(Instant.now());
            toSave.add(flight);
        }
        return flightRepository.saveAll(toSave);
    }

    private String buildFlightId(FlightAvailability avail) {
        return avail.flightNumber()
                + "_"
                + avail.departureTime().toLocalDate().toString().replace("-", "");
    }
}
