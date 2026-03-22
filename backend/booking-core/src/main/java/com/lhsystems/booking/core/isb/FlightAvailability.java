package com.lhsystems.booking.core.isb;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Represents a single flight availability result from the ISB/GDS. Mirrors the key fields from the
 * ISB {@code LegAvailability} response.
 */

public record FlightAvailability(
        String flightNumber,
        String marketingAirline,
        String origin,
        String destination,
        LocalDateTime departureTime,
        LocalDateTime arrivalTime,
        int travelTimeMinutes,
        int stops,
        int availableSeats,
        BigDecimal priceAmount,
        String priceCurrency) {}
