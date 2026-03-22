package com.lhsystems.booking.core.isb;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class IsbConfigTest {

    @Test
    void shouldStoreEndpoints() {
        var config = new IsbConfig("https://res.example.com", "https://auth.example.com");

        assertEquals("https://res.example.com", config.reservationEndpoint());
        assertEquals("https://auth.example.com", config.authEndpoint());
    }
}
