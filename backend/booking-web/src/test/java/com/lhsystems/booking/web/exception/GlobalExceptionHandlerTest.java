package com.lhsystems.booking.web.exception;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.exception.BookingAlreadyCancelledException;
import com.lhsystems.booking.core.exception.BookingNotFoundException;
import com.lhsystems.booking.core.exception.CancellationNotAllowedException;
import com.lhsystems.booking.core.exception.EmailVerificationException;
import com.lhsystems.booking.core.exception.FlightNotFoundException;
import com.lhsystems.booking.core.exception.GdsException;
import com.lhsystems.booking.core.exception.NoSeatsAvailableException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.server.ResponseStatusException;

class GlobalExceptionHandlerTest {

    private GlobalExceptionHandler handler;
    private HttpServletRequest request;

    @BeforeEach
    void setUp() {
        handler = new GlobalExceptionHandler();
        request = mock(HttpServletRequest.class);
        when(request.getRequestURI()).thenReturn("/api/test");
    }

    @Test
    void handleBaseException_shouldReturn404_forBookingNotFound() {
        var ex = new BookingNotFoundException("123");

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Booking not found: 123", response.getBody().message());
        assertEquals("/api/test", response.getBody().path());
    }

    @Test
    void handleBaseException_shouldReturn404_forFlightNotFound() {
        var ex = new FlightNotFoundException("FL001");

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void handleBaseException_shouldReturn401_forAuthException() {
        var ex = new AuthenticationException();

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    void handleBaseException_shouldReturn409_forNoSeats() {
        var ex = new NoSeatsAvailableException("FL001");

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
    }

    @Test
    void handleBaseException_shouldReturn409_forAlreadyCancelled() {
        var ex = new BookingAlreadyCancelledException();

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
    }

    @Test
    void handleBaseException_shouldReturn400_forCancellationNotAllowed() {
        var ex = new CancellationNotAllowedException("test reason");

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    @Test
    void handleBaseException_shouldReturn403_forEmailVerification() {
        var ex = new EmailVerificationException();

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    void handleBaseException_shouldReturn502_forGdsException() {
        var ex = new GdsException("timeout");

        var response = handler.handleBaseException(ex, request);

        assertEquals(HttpStatus.BAD_GATEWAY, response.getStatusCode());
    }

    @Test
    void handleValidation_shouldReturn400() {
        var fieldError = new FieldError("dto", "username", "must not be blank");
        var bindingResult = mock(BindingResult.class);
        when(bindingResult.getFieldErrors()).thenReturn(List.of(fieldError));
        var ex = mock(MethodArgumentNotValidException.class);
        when(ex.getBindingResult()).thenReturn(bindingResult);

        var response = handler.handleValidation(ex, request);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("username: must not be blank", response.getBody().message());
    }

    @Test
    void handleGenericException_shouldReturn500() {
        var ex = new RuntimeException("unexpected");

        var response = handler.handleGenericException(ex, request);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("An internal error occurred", response.getBody().message());
    }

    @Test
    void handleMissingParam_shouldReturn400() {
        var ex = new MissingServletRequestParameterException("direction", "String");

        var response = handler.handleMissingParam(ex, request);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
    }

    @SuppressWarnings("unchecked")
    @Test
    void handleConstraintViolation_shouldReturn400() {
        ConstraintViolation<?> violation1 = mock(ConstraintViolation.class);
        when(violation1.getMessage()).thenReturn("Direction must be MUC-DEB or DEB-MUC");
        ConstraintViolation<?> violation2 = mock(ConstraintViolation.class);
        when(violation2.getMessage()).thenReturn("Date must be in the future");
        Set<ConstraintViolation<?>> violations = Set.of(violation1, violation2);
        var ex = new ConstraintViolationException(violations);

        var response = handler.handleConstraintViolation(ex, request);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
    }

    @Test
    void handleBaseException_shouldIncludeTimestamp() {
        var ex = new BookingNotFoundException("123");

        var response = handler.handleBaseException(ex, request);

        assertNotNull(response.getBody());
        assertNotNull(response.getBody().timestamp());
    }

    @Test
    void handleResponseStatusException_shouldReturnMatchingStatus() {
        var ex = new ResponseStatusException(HttpStatus.FORBIDDEN, "Access denied");

        var response = handler.handleResponseStatusException(ex, request);

        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Access denied", response.getBody().message());
    }
}
