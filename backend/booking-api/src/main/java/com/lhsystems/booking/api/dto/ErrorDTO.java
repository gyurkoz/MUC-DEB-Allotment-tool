package com.lhsystems.booking.api.dto;

import java.time.Instant;

public record ErrorDTO(String error, String message, Instant timestamp, String path) {}
