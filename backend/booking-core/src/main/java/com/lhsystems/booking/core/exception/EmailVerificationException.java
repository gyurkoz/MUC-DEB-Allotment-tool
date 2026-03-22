package com.lhsystems.booking.core.exception;

import org.springframework.http.HttpStatus;

public class EmailVerificationException extends BaseException {

    public EmailVerificationException() {
        super("Email does not match booking passenger", HttpStatus.FORBIDDEN);
    }
}
