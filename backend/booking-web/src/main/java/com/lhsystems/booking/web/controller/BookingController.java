package com.lhsystems.booking.web.controller;

import com.lhsystems.booking.api.dto.BookingRequestDTO;
import com.lhsystems.booking.api.dto.BookingResponseDTO;
import com.lhsystems.booking.core.service.BookingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Tag(name = "bookings", description = "Booking management")

public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/booking")
    @Operation(summary = "Create a new booking", operationId = "createBooking")
    public ResponseEntity<BookingResponseDTO> createBooking(
            @Valid @RequestBody BookingRequestDTO request, Authentication authentication) {
        var username = authentication.getName();
        var response = bookingService.createBooking(request, username);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/booking/{bookingId}")
    @Operation(summary = "Get booking details and status", operationId = "getBooking")
    public ResponseEntity<BookingResponseDTO> getBooking(@PathVariable String bookingId) {
        var response = bookingService.getBooking(bookingId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/booking/{bookingId}/cancel")
    @Operation(summary = "Cancel a booking", operationId = "cancelBooking")
    public ResponseEntity<BookingResponseDTO> cancelBooking(
            @PathVariable String bookingId, @RequestParam String email) {
        var response = bookingService.cancelBooking(bookingId, email);
        return ResponseEntity.ok(response);
    }
}
