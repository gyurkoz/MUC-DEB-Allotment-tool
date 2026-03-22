package com.lhsystems.booking.core.util;

import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.api.dto.PriceDTO;
import com.lhsystems.booking.persistence.entity.Flight;
import com.lhsystems.booking.persistence.entity.FlightStatus;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;

public final class FlightUtil {

    public static final String FLIGHT_ID = "LH1234_20260401";
    public static final String FLIGHT_NUMBER = "LH1234";
    public static final String AIRLINE = "LH";
    public static final String DEPARTURE = "MUC";
    public static final String ARRIVAL = "DEB";
    public static final LocalDateTime DEPARTURE_TIME = LocalDateTime.of(2026, 4, 1, 8, 0);
    public static final LocalDateTime ARRIVAL_TIME = LocalDateTime.of(2026, 4, 1, 9, 30);
    public static final int TRAVEL_TIME = 90;
    public static final int SEATS = 150;
    public static final BigDecimal PRICE = new BigDecimal("149.00");
    public static final String CURRENCY = "EUR";

    private FlightUtil() {}

    public static Flight createEntity() {
        var flight = new Flight();
        flight.setId(FLIGHT_ID);
        flight.setFlightNumber(FLIGHT_NUMBER);
        flight.setMarketingAirline(AIRLINE);
        flight.setDepartureAirport(DEPARTURE);
        flight.setArrivalAirport(ARRIVAL);
        flight.setDepartureTime(DEPARTURE_TIME);
        flight.setArrivalTime(ARRIVAL_TIME);
        flight.setTravelTimeMinutes(TRAVEL_TIME);
        flight.setStops(0);
        flight.setAvailableSeats(SEATS);
        flight.setPriceAmount(PRICE);
        flight.setPriceCurrency(CURRENCY);
        flight.setStatus(FlightStatus.AVAILABLE);
        flight.setCachedAt(Instant.now());
        return flight;
    }

    public static FlightDTO createDto() {
        return new FlightDTO(
                FLIGHT_ID,
                FLIGHT_NUMBER,
                AIRLINE,
                DEPARTURE,
                ARRIVAL,
                DEPARTURE_TIME,
                ARRIVAL_TIME,
                TRAVEL_TIME,
                0,
                SEATS,
                new PriceDTO(PRICE, CURRENCY),
                "AVAILABLE");
    }
}
