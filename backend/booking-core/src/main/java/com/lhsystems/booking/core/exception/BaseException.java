package com.lhsystems.booking.core.exception;

import java.util.Objects;
import org.springframework.http.HttpStatus;

public class BaseException extends RuntimeException {

    private final String message;
    private final HttpStatus httpStatus;

    public BaseException(String message, HttpStatus httpStatus) {
        super(message);
        this.message = message;
        this.httpStatus = httpStatus;
    }

    public BaseException(String message, HttpStatus httpStatus, Throwable cause) {
        super(message, cause);
        this.message = message;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    @Override
    public boolean equals(Object ob) {
        if (this == ob) {
            return true;
        }
        if (ob == null || getClass() != ob.getClass()) {
            return false;
        }
        BaseException that = (BaseException) ob;
        if (!Objects.equals(message, that.message)) {
            return false;
        }
        return httpStatus == that.httpStatus;
    }

    @Override
    public int hashCode() {
        int result = message != null ? message.hashCode() : 0;
        result = 31 * result + (httpStatus != null ? httpStatus.hashCode() : 0);
        return result;
    }
}
