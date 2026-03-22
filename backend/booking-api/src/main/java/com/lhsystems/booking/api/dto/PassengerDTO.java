package com.lhsystems.booking.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record PassengerDTO(
        @JsonProperty("uNumber") @NotBlank @Pattern(regexp = "^U[0-9]{4,}$", message = "Must start with U followed by at least 4 digits") String userNumber,
        @NotBlank @Size(min = 1, max = 50) String firstName,
        @NotBlank @Size(min = 1, max = 50) String lastName,
        @NotBlank @Email String email,
        @NotBlank String phoneNumber) {
}
