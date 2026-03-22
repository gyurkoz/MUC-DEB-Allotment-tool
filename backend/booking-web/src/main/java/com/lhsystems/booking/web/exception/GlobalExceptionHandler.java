package com.lhsystems.booking.web.exception;

import com.lhsystems.booking.api.dto.ErrorDTO;
import com.lhsystems.booking.core.exception.BaseException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import java.time.Instant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

@RestControllerAdvice

public class GlobalExceptionHandler {

    private static final Logger LOG = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorDTO> handleBaseException(
            BaseException ex, HttpServletRequest request) {
        var error =
                new ErrorDTO(
                        ex.getHttpStatus().name(),
                        ex.getMessage(),
                        Instant.now(),
                        request.getRequestURI());
        return ResponseEntity.status(ex.getHttpStatus()).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorDTO> handleValidation(
            MethodArgumentNotValidException ex, HttpServletRequest request) {
        var message =
                ex.getBindingResult().getFieldErrors().stream()
                        .map(fe -> fe.getField() + ": " + fe.getDefaultMessage())
                        .reduce((a, b) -> a + "; " + b)
                        .orElse("Validation failed");
        var error = new ErrorDTO("BAD_REQUEST", message, Instant.now(), request.getRequestURI());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<ErrorDTO> handleMissingParam(
            MissingServletRequestParameterException ex, HttpServletRequest request) {
        var error =
                new ErrorDTO(
                        "BAD_REQUEST", ex.getMessage(), Instant.now(), request.getRequestURI());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorDTO> handleConstraintViolation(
            ConstraintViolationException ex, HttpServletRequest request) {
        var message =
                ex.getConstraintViolations().stream()
                        .map(ConstraintViolation::getMessage)
                        .reduce((a, b) -> a + "; " + b)
                        .orElse("Validation failed");
        var error = new ErrorDTO("BAD_REQUEST", message, Instant.now(), request.getRequestURI());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorDTO> handleResponseStatusException(
            ResponseStatusException ex, HttpServletRequest request) {
        var status = HttpStatus.valueOf(ex.getStatusCode().value());
        var error =
                new ErrorDTO(status.name(), ex.getReason(), Instant.now(), request.getRequestURI());
        return ResponseEntity.status(status).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDTO> handleGenericException(
            Exception ex, HttpServletRequest request) {
        LOG.error("Unhandled exception", ex);
        var error =
                new ErrorDTO(
                        "INTERNAL_SERVER_ERROR",
                        "An internal error occurred",
                        Instant.now(),
                        request.getRequestURI());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
