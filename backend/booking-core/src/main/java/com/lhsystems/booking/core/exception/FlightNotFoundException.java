package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class FlightNotFoundException extends BaseException {

    public FlightNotFoundException(String flightId) {
        super("Flight not found: " + flightId, HttpStatus.NOT_FOUND);
    }
}
