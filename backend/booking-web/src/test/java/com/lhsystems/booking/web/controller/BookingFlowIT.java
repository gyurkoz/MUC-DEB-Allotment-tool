package com.lhsystems.booking.web.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.lhsystems.booking.BaseIntegrationTest;
import com.lhsystems.booking.api.dto.BookingRequestDTO;
import com.lhsystems.booking.api.dto.BookingResponseDTO;
import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.api.dto.LoginRequestDTO;
import com.lhsystems.booking.api.dto.LoginResponseDTO;
import com.lhsystems.booking.api.dto.PassengerDTO;
import com.lhsystems.booking.core.service.EmailService;
import com.lhsystems.booking.persistence.entity.User;
import com.lhsystems.booking.persistence.repository.UserRepository;
import java.time.LocalDate;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

class BookingFlowIT extends BaseIntegrationTest {

    @MockitoBean
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void seedAdminUser() {
        if (userRepository.findByUsername("admin").isEmpty()) {
            var admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("password"));
            admin.setEmail("admin@mucdeb-booking.local");
            userRepository.save(admin);
        }
    }

    @Test
    void fullBookingFlow_shouldCompleteSuccessfully() {
        // Step 1: Login as admin
        var loginRequest = new LoginRequestDTO("admin", "password");
        var loginResponse = restTemplate.postForEntity("/api/login", loginRequest, LoginResponseDTO.class);
        assertEquals(HttpStatus.OK, loginResponse.getStatusCode());
        assertNotNull(loginResponse.getBody());
        var token = loginResponse.getBody().token();
        assertNotNull(token);

        // Step 2: Get flights for MUC-DEB (pick a date well in future)
        var headers = new HttpHeaders();
        headers.setBearerAuth(token);
        var futureDate = LocalDate.now().plusDays(5);
        var flightsResponse = restTemplate.exchange(
                "/api/flights?direction=MUC-DEB"
                        + "&dateFrom="
                        + futureDate
                        + "&dateTo="
                        + futureDate,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                new ParameterizedTypeReference<java.util.List<FlightDTO>>() {
                });
        assertEquals(HttpStatus.OK, flightsResponse.getStatusCode());
        assertNotNull(flightsResponse.getBody());
        assertFalse(flightsResponse.getBody().isEmpty());

        var flightId = flightsResponse.getBody().get(0).id();

        // Step 3: Create a booking
        var passenger = new PassengerDTO("U1234567", "John", "Doe", "john@test.com", "+49123456789");
        var bookingRequest = new BookingRequestDTO(flightId, passenger);
        var bookingEntity = new HttpEntity<>(bookingRequest, headers);
        var bookingResponse = restTemplate.postForEntity("/api/booking", bookingEntity,
                BookingResponseDTO.class);
        assertEquals(HttpStatus.CREATED, bookingResponse.getStatusCode());
        assertNotNull(bookingResponse.getBody());
        var bookingId = bookingResponse.getBody().bookingId();
        assertNotNull(bookingId);
        assertEquals("CONFIRMED", bookingResponse.getBody().status());

        // Step 4: Get booking status (public endpoint, no auth)
        var getResponse = restTemplate.getForEntity("/api/booking/" + bookingId, BookingResponseDTO.class);
        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertNotNull(getResponse.getBody());
        assertEquals("CONFIRMED", getResponse.getBody().status());

        // Step 5: Cancel the booking
        var cancelResponse = restTemplate.postForEntity(
                "/api/booking/" + bookingId + "/cancel?email=john@test.com",
                null,
                BookingResponseDTO.class);
        assertEquals(HttpStatus.OK, cancelResponse.getStatusCode());
        assertNotNull(cancelResponse.getBody());
        assertEquals("CANCELLED", cancelResponse.getBody().status());

        // Step 6: Verify cancellation
        var verifyResponse = restTemplate.getForEntity("/api/booking/" + bookingId, BookingResponseDTO.class);
        assertEquals(HttpStatus.OK, verifyResponse.getStatusCode());
        assertNotNull(verifyResponse.getBody());
        assertEquals("CANCELLED", verifyResponse.getBody().status());
    }
}
