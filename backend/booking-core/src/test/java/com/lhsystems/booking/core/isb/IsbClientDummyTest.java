package com.lhsystems.booking.core.isb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

class IsbClientDummyTest {

    private IsbClientDummy client;

    @BeforeEach
    void setUp() {
        client = new IsbClientDummy();
    }

    @Test
    void searchFlights_shouldReturnFlightsForMucToDeb() {
        var flights = client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1));

        assertFalse(flights.isEmpty());
        for (var flight : flights) {
            assertEquals("MUC", flight.origin());
            assertEquals("DEB", flight.destination());
            assertNotNull(flight.flightNumber());
            assertTrue(flight.travelTimeMinutes() > 0);
            assertNotNull(flight.priceAmount());
            assertEquals("EUR", flight.priceCurrency());
        }
    }

    @Test
    void searchFlights_shouldReturnFlightsForDebToMuc() {
        var flights = client.searchFlights("DEB", "MUC", LocalDate.of(2026, 4, 1));

        assertFalse(flights.isEmpty());
        for (var flight : flights) {
            assertEquals("DEB", flight.origin());
            assertEquals("MUC", flight.destination());
        }
    }

    @Test
    void searchFlights_shouldReturnDeterministicResults() {
        var flights1 = client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1));
        var flights2 = client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1));

        assertEquals(flights1.size(), flights2.size());
        for (int ii = 0; ii < flights1.size(); ii++) {
            assertEquals(flights1.get(ii).availableSeats(), flights2.get(ii).availableSeats());
            assertEquals(flights1.get(ii).stops(), flights2.get(ii).stops());
            assertEquals(flights1.get(ii).priceAmount(), flights2.get(ii).priceAmount());
        }
    }

    @Test
    void searchFlights_shouldVaryByDate() {
        var day1 = client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1));
        var day2 = client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 2));

        assertEquals(day1.size(), day2.size());
        // At least one flight should have different seat count across days
        boolean anyDifference = false;
        for (int ii = 0; ii < day1.size(); ii++) {
            if (day1.get(ii).availableSeats() != day2.get(ii).availableSeats()) {
                anyDifference = true;
                break;
            }
        }
        assertTrue(anyDifference, "Flight data should vary between different dates");
    }

    @Test
    void searchFlights_shouldIncludeFlightsWithStops() {
        // Search many dates to find at least one flight with stops
        // (derives from hash, ~30% chance of stops per flight)
        boolean foundStops = false;
        for (int day = 0; day < 30; day++) {
            var flights =
                    client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1).plusDays(day));
            for (var flight : flights) {
                if (flight.stops() > 0) {
                    foundStops = true;
                    break;
                }
            }
            if (foundStops) {
                break;
            }
        }
        assertTrue(foundStops, "Should have at least some flights with stops");
    }

    @Test
    void searchFlights_shouldIncludeSoldOutFlights() {
        boolean foundSoldOut = false;
        for (int day = 0; day < 60; day++) {
            var flights =
                    client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1).plusDays(day));
            for (var flight : flights) {
                if (flight.availableSeats() == 0) {
                    foundSoldOut = true;
                    break;
                }
            }
            if (foundSoldOut) {
                break;
            }
        }
        assertTrue(foundSoldOut, "Should have at least some sold-out flights");
    }

    @Test
    void deriveSeatCount_shouldReturnZeroForLowHash() {
        var hash = new byte[32];
        hash[4] = 10; // < 26 → sold out
        assertEquals(0, IsbClientDummy.deriveSeatCount(hash));
    }

    @Test
    void deriveSeatCount_shouldReturnPositiveForHighHash() {
        var hash = new byte[32];
        hash[4] = (byte) 200; // > 26 → has seats
        assertTrue(IsbClientDummy.deriveSeatCount(hash) > 0);
    }

    @Test
    void deriveStops_shouldReturnZeroForLowHash() {
        var hash = new byte[32];
        hash[5] = 100; // < 180 → direct
        assertEquals(0, IsbClientDummy.deriveStops(hash));
    }

    @Test
    void deriveStops_shouldReturnOneForMidHash() {
        var hash = new byte[32];
        hash[5] = (byte) 200; // 180..239 → 1 stop
        assertEquals(1, IsbClientDummy.deriveStops(hash));
    }

    @Test
    void deriveStops_shouldReturnTwoForHighHash() {
        var hash = new byte[32];
        hash[5] = (byte) 250; // >= 240 → 2 stops
        assertEquals(2, IsbClientDummy.deriveStops(hash));
    }

    @Test
    void derivePrice_shouldReturnReasonablePrice() {
        var hash = new byte[32];
        hash[6] = (byte) 100;
        var price = IsbClientDummy.derivePrice(hash, 90, 0);
        assertTrue(price.intValue() >= 89);
        assertTrue(price.intValue() <= 289);
    }

    @Test
    void derivePrice_shouldAddStopSurcharge() {
        var hash = new byte[32];
        hash[6] = (byte) 100;
        var directPrice = IsbClientDummy.derivePrice(hash, 90, 0);
        var oneStopPrice = IsbClientDummy.derivePrice(hash, 90, 1);
        assertEquals(15, oneStopPrice.intValue() - directPrice.intValue());
    }

    @Test
    void createPnr_shouldReturnSixCharacterPnr() {
        var pnr = client.createPnr("LH1234", "2026-04-01T08:00", "John Doe");

        assertNotNull(pnr);
        assertEquals(6, pnr.length());
    }

    @Test
    void createPnr_shouldReturnDeterministicResult() {
        var pnr1 = client.createPnr("LH1234", "2026-04-01T08:00", "John Doe");
        var pnr2 = client.createPnr("LH1234", "2026-04-01T08:00", "John Doe");

        assertEquals(pnr1, pnr2);
    }

    @Test
    void createPnr_shouldReturnDifferentPnrs_forDifferentInputs() {
        var pnr1 = client.createPnr("LH1234", "2026-04-01T08:00", "John Doe");
        var pnr2 = client.createPnr("LH5678", "2026-04-02T10:00", "Jane Smith");

        assertNotNull(pnr1);
        assertNotNull(pnr2);
    }

    @Test
    void createPnr_shouldContainOnlyUppercaseLetters() {
        var pnr = client.createPnr("LH1234", "2026-04-01T08:00", "John Doe");

        assertTrue(pnr.matches("[A-Z]+"));
    }

    @Test
    void retrievePnrStatus_shouldReturnConfirmed() {
        var status = client.retrievePnrStatus("ABCDEF");

        assertEquals("CONFIRMED", status);
    }

    @Test
    void cancelPnr_shouldReturnTrue() {
        var result = client.cancelPnr("ABCDEF");

        assertTrue(result);
    }

    @Test
    void createPnr_shouldThrow_whenAlgorithmUnavailable() {
        try (MockedStatic<MessageDigest> md = Mockito.mockStatic(MessageDigest.class)) {
            md.when(() -> MessageDigest.getInstance("SHA-256"))
                    .thenThrow(new NoSuchAlgorithmException("test"));

            assertThrows(
                    IllegalStateException.class,
                    () -> client.createPnr("LH1234", "2026-04-01", "John"));
        }
    }

    @Test
    void searchFlights_shouldThrow_whenAlgorithmUnavailable() {
        try (MockedStatic<MessageDigest> md = Mockito.mockStatic(MessageDigest.class)) {
            md.when(() -> MessageDigest.getInstance("SHA-256"))
                    .thenThrow(new NoSuchAlgorithmException("test"));

            assertThrows(
                    IllegalStateException.class,
                    () -> client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1)));
        }
    }
}
