package com.lhsystems.booking.api.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BookingRequestDTO(
        @NotBlank String flightId, @NotNull @Valid PassengerDTO passenger) {}
