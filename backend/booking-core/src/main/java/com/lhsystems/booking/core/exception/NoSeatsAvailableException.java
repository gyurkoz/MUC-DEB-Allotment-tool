package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class NoSeatsAvailableException extends BaseException {

    public NoSeatsAvailableException(String flightId) {
        super("No seats available on flight: " + flightId, HttpStatus.CONFLICT);
    }
}
