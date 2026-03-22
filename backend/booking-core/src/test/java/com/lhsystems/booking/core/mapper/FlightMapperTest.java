package com.lhsystems.booking.core.mapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.lhsystems.booking.core.util.FlightUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FlightMapperTest {

    private FlightMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new FlightMapper();
    }

    @Test
    void toDto_shouldMapAllFields() {
        var entity = FlightUtil.createEntity();

        var dto = mapper.toDto(entity);

        assertNotNull(dto);
        assertEquals(FlightUtil.FLIGHT_ID, dto.id());
        assertEquals(FlightUtil.FLIGHT_NUMBER, dto.flightNumber());
        assertEquals(FlightUtil.AIRLINE, dto.marketingAirline());
        assertEquals(FlightUtil.DEPARTURE, dto.departureAirport());
        assertEquals(FlightUtil.ARRIVAL, dto.arrivalAirport());
        assertEquals(FlightUtil.DEPARTURE_TIME, dto.departureTime());
        assertEquals(FlightUtil.ARRIVAL_TIME, dto.arrivalTime());
        assertEquals(FlightUtil.TRAVEL_TIME, dto.travelTimeMinutes());
        assertEquals(0, dto.stops());
        assertEquals(FlightUtil.SEATS, dto.availableSeats());
        assertEquals("AVAILABLE", dto.status());
    }

    @Test
    void toDto_shouldMapPrice() {
        var entity = FlightUtil.createEntity();

        var dto = mapper.toDto(entity);

        assertNotNull(dto.price());
        assertEquals(FlightUtil.PRICE, dto.price().amount());
        assertEquals(FlightUtil.CURRENCY, dto.price().currency());
    }
}
