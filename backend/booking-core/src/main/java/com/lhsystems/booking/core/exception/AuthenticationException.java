package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class AuthenticationException extends BaseException {

    public AuthenticationException() {
        super("Invalid username or password", HttpStatus.UNAUTHORIZED);
    }

    public AuthenticationException(String message) {
        super(message, HttpStatus.UNAUTHORIZED);
    }
}
