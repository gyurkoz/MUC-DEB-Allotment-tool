package com.lhsystems.booking.api.dto;

import java.time.LocalDateTime;

public record FlightDTO(
        String id,
        String flightNumber,
        String marketingAirline,
        String departureAirport,
        String arrivalAirport,
        LocalDateTime departureTime,
        LocalDateTime arrivalTime,
        Integer travelTimeMinutes,
        Integer stops,
        Integer availableSeats,
        PriceDTO price,
        String status) {}
