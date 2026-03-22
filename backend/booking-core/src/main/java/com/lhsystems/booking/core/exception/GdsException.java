package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class GdsException extends BaseException {

    public GdsException(String message) {
        super("GDS communication error: " + message, HttpStatus.BAD_GATEWAY);
    }

    public GdsException(String message, Throwable cause) {
        super("GDS communication error: " + message, HttpStatus.BAD_GATEWAY, cause);
    }
}
