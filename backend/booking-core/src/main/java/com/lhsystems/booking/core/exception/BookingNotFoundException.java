package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class BookingNotFoundException extends BaseException {

    public BookingNotFoundException(String bookingId) {
        super("Booking not found: " + bookingId, HttpStatus.NOT_FOUND);
    }
}
