package com.lhsystems.booking.api.dto;

import java.math.BigDecimal;

public record PriceDTO(BigDecimal amount, String currency) {}
