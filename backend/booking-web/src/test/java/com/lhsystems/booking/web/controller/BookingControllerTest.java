package com.lhsystems.booking.web.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.lhsystems.booking.api.dto.BookingResponseDTO;
import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.api.dto.PassengerDTO;
import com.lhsystems.booking.api.dto.PriceDTO;
import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.exception.BookingNotFoundException;
import com.lhsystems.booking.core.service.BookingService;
import com.lhsystems.booking.core.service.JwtService;
import com.lhsystems.booking.web.configuration.SecurityConfig;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(BookingController.class)
@Import(SecurityConfig.class)

class BookingControllerTest {

    private static final String AUTH_HEADER = "Bearer test-token";

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private BookingService bookingService;

    @MockitoBean
    private JwtService jwtService;

    @BeforeEach
    void setUpAuth() {
        when(jwtService.isTokenValid("test-token")).thenReturn(true);
        when(jwtService.extractUsername("test-token")).thenReturn("admin");
    }

    @Test
    void createBooking_shouldReturn201_whenValid() throws Exception {
        when(bookingService.createBooking(any(), eq("admin"))).thenReturn(createBookingResponse());

        mockMvc.perform(
                post("/api/booking")
                        .header("Authorization", AUTH_HEADER)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                        {
                                                      "flightId": "LH1234_20260401",
                                                      "passenger": {
                                          "uNumber": "U1234567",
                                          "firstName": "John",
                                          "lastName": "Doe",
                                          "email": "john@test.com",
                                          "phoneNumber": "+49123456789"
                                                      }
                                        }
                                        """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.bookingId").value("test-booking-id"))
                .andExpect(jsonPath("$.pnr").value("ABCDEF"));
    }

    @Test
    void createBooking_shouldReturn400_whenPassengerMissing() throws Exception {
        mockMvc.perform(
                post("/api/booking")
                        .header("Authorization", AUTH_HEADER)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                        {
                                                      "flightId": "LH1234_20260401"
                                        }
                                        """))
                .andExpect(status().isBadRequest());
    }

    @Test
    void getBooking_shouldReturn200_whenExists() throws Exception {
        when(bookingService.getBooking("test-booking-id")).thenReturn(createBookingResponse());

        mockMvc.perform(get("/api/booking/test-booking-id"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookingId").value("test-booking-id"));
    }

    @Test
    void getBooking_shouldReturn404_whenNotFound() throws Exception {
        when(bookingService.getBooking("nonexistent"))
                .thenThrow(new BookingNotFoundException("nonexistent"));

        mockMvc.perform(get("/api/booking/nonexistent")).andExpect(status().isNotFound());
    }

    @Test
    void cancelBooking_shouldReturn200_whenValid() throws Exception {
        when(bookingService.cancelBooking("test-booking-id", "john@test.com"))
                .thenReturn(createBookingResponse());

        mockMvc.perform(post("/api/booking/test-booking-id/cancel").param("email", "john@test.com"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookingId").value("test-booking-id"));
    }

    @Test
    void cancelBooking_shouldReturnBadRequest_whenEmailMissing() throws Exception {
        mockMvc.perform(post("/api/booking/test-booking-id/cancel"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void createBooking_shouldReturnError_whenUserNotInRepo() throws Exception {
        when(bookingService.createBooking(any(), eq("admin")))
                .thenThrow(new AuthenticationException("User not found: admin"));

        mockMvc.perform(
                post("/api/booking")
                        .header("Authorization", AUTH_HEADER)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                        {
                                                      "flightId": "LH1234_20260401",
                                                      "passenger": {
                                          "uNumber": "U1234567",
                                          "firstName": "John",
                                          "lastName": "Doe",
                                          "email": "john@test.com",
                                          "phoneNumber": "+49123456789"
                                                      }
                                        }
                                        """))
                .andExpect(status().isUnauthorized());
    }

    private BookingResponseDTO createBookingResponse() {
        var flight = new FlightDTO(
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
                new PriceDTO(new BigDecimal("149.00"), "EUR"),
                null);
        var passenger = new PassengerDTO("U1234567", "John", "Doe", "john@test.com", "+49123456789");
        return new BookingResponseDTO(
                "test-booking-id", "ABCDEF", "CONFIRMED", flight, passenger, Instant.now(), true);
    }
}
