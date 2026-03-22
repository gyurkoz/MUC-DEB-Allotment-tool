package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class BookingAlreadyCancelledException extends BaseException {

    public BookingAlreadyCancelledException() {
        super("Booking already cancelled", HttpStatus.CONFLICT);
    }
}
