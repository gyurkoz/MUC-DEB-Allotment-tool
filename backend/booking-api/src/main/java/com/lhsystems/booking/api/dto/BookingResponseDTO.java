package com.lhsystems.booking.api.dto;

import java.time.Instant;

public record BookingResponseDTO(
        String bookingId,
        String pnr,
        String status,
        FlightDTO flight,
        PassengerDTO passenger,
        Instant createdAt,
        Boolean cancellable) {}
