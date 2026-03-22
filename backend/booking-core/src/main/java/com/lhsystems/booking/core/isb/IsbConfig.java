package com.lhsystems.booking.core.isb;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "isb")

public record IsbConfig(String reservationEndpoint, String authEndpoint) {}
