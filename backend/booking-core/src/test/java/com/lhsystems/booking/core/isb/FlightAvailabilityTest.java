package com.lhsystems.booking.core.isb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;

class FlightAvailabilityTest {

    @Test
    void shouldCreateRecord() {
        var avail =
                new FlightAvailability(
                        "LH1234",
                        "LH",
                        "MUC",
                        "DEB",
                        LocalDateTime.of(2026, 4, 1, 8, 0),
                        LocalDateTime.of(2026, 4, 1, 9, 30),
                        90,
                        0,
                        null,
                        150,
                        new BigDecimal("149.00"),
                        "EUR");

        assertNotNull(avail);
        assertEquals("LH1234", avail.flightNumber());
        assertEquals("LH", avail.marketingAirline());
        assertEquals("MUC", avail.origin());
        assertEquals("DEB", avail.destination());
        assertEquals(90, avail.travelTimeMinutes());
        assertEquals(0, avail.stops());
        assertEquals(150, avail.availableSeats());
        assertEquals(new BigDecimal("149.00"), avail.priceAmount());
        assertEquals("EUR", avail.priceCurrency());
    }
}
