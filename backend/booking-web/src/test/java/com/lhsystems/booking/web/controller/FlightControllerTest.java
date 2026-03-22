package com.lhsystems.booking.web.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.api.dto.PriceDTO;
import com.lhsystems.booking.core.service.FlightService;
import com.lhsystems.booking.core.service.JwtService;
import com.lhsystems.booking.web.configuration.SecurityConfig;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(FlightController.class)
@Import(SecurityConfig.class)

class FlightControllerTest {

    private static final String AUTH_HEADER = "Bearer test-token";

    @Autowired private MockMvc mockMvc;

    @MockitoBean private FlightService flightService;

    @MockitoBean private JwtService jwtService;

    @BeforeEach
    void setUpAuth() {
        when(jwtService.isTokenValid("test-token")).thenReturn(true);
        when(jwtService.extractUsername("test-token")).thenReturn("admin");
    }

    @Test
    void getFlights_shouldReturn200_whenValidParams() throws Exception {
        var dto =
                new FlightDTO(
                        "LH1234_20260401",
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
                        new PriceDTO(new BigDecimal("149.00"), "EUR"),
                        "AVAILABLE");
        when(flightService.findFlights(eq("MUC-DEB"), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(List.of(dto));

        mockMvc.perform(
                        get("/api/flights")
                                .header("Authorization", AUTH_HEADER)
                                .param("direction", "MUC-DEB")
                                .param("dateFrom", "2026-04-01")
                                .param("dateTo", "2026-04-02"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].flightNumber").value("LH1234"));
    }

    @Test
    void getFlights_shouldReturn200_withoutAuthHeader() throws Exception {
        when(flightService.findFlights(eq("MUC-DEB"), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(List.of());

        mockMvc.perform(
                        get("/api/flights")
                                .param("direction", "MUC-DEB")
                                .param("dateFrom", "2026-04-01")
                                .param("dateTo", "2026-04-02"))
                .andExpect(status().isOk());
    }

    @Test
    void getFlights_shouldReturnBadRequest_whenMissingParams() throws Exception {
        mockMvc.perform(get("/api/flights").header("Authorization", AUTH_HEADER))
                .andExpect(status().isBadRequest());
    }

    @Test
    void getFlights_shouldReturn200_whenTokenInvalid() throws Exception {
        when(flightService.findFlights(eq("MUC-DEB"), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(List.of());

        mockMvc.perform(
                        get("/api/flights")
                                .header("Authorization", "Bearer bad-token")
                                .param("direction", "MUC-DEB")
                                .param("dateFrom", "2026-04-01")
                                .param("dateTo", "2026-04-02"))
                .andExpect(status().isOk());
    }

    @Test
    void getFlights_shouldReturn200_whenNotBearerScheme() throws Exception {
        when(flightService.findFlights(eq("MUC-DEB"), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(List.of());

        mockMvc.perform(
                        get("/api/flights")
                                .header("Authorization", "Basic dXNlcjpwYXNz")
                                .param("direction", "MUC-DEB")
                                .param("dateFrom", "2026-04-01")
                                .param("dateTo", "2026-04-02"))
                .andExpect(status().isOk());
    }

    @Test
    void getFlights_shouldReturnBadRequest_whenDateFromAfterDateTo() throws Exception {
        mockMvc.perform(
                        get("/api/flights")
                                .header("Authorization", AUTH_HEADER)
                                .param("direction", "MUC-DEB")
                                .param("dateFrom", "2026-04-05")
                                .param("dateTo", "2026-04-01"))
                .andExpect(status().isBadRequest());
    }
}
