package com.lhsystems.booking.core.isb;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.lhsystems.booking.core.exception.GdsException;
import java.time.LocalDate;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class IsbSoapClientTest {

    private IsbSoapClient client;

    @BeforeEach
    void setUp() {
        var config =
                new IsbConfig(
                        "https://isb-test.example.com/IsbReservationService.4.0.0/",
                        "https://isb-test.example.com/IsbAuthService.1.1.0/");
        client = new IsbSoapClient(config);
    }

    @Test
    void constructor_shouldCreateClient() {
        assertNotNull(client);
    }

    @Test
    void searchFlights_shouldThrowGdsException_whenIsbUnavailable() {
        assertThrows(
                GdsException.class,
                () -> client.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1)));
    }

    @Test
    void createPnr_shouldThrowGdsException_whenIsbUnavailable() {
        assertThrows(
                GdsException.class,
                () -> client.createPnr("LH1234", "2026-04-01T08:00", "John Doe"));
    }

    @Test
    void retrievePnrStatus_shouldThrowGdsException_whenIsbUnavailable() {
        assertThrows(GdsException.class, () -> client.retrievePnrStatus("ABCDEF"));
    }

    @Test
    void cancelPnr_shouldThrowGdsException_whenIsbUnavailable() {
        assertThrows(GdsException.class, () -> client.cancelPnr("ABCDEF"));
    }
}
