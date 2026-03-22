package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class CancellationNotAllowedException extends BaseException {

    public CancellationNotAllowedException(String reason) {
        super("Cancellation not allowed: " + reason, HttpStatus.BAD_REQUEST);
    }
}
