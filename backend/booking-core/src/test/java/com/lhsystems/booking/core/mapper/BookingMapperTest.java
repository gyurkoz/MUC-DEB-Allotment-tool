package com.lhsystems.booking.core.mapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.lhsystems.booking.core.util.BookingUtil;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import java.time.LocalDateTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BookingMapperTest {

    private BookingMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new BookingMapper();
    }

    @Test
    void toDto_shouldMapAllFields() {
        var entity = BookingUtil.createEntity();

        var dto = mapper.toDto(entity);

        assertNotNull(dto);
        assertEquals(BookingUtil.BOOKING_ID, dto.bookingId());
        assertEquals(BookingUtil.PNR, dto.pnr());
        assertEquals("CONFIRMED", dto.status());
        assertNotNull(dto.flight());
        assertNotNull(dto.passenger());
        assertNotNull(dto.createdAt());
    }

    @Test
    void toDto_shouldMapPassengerFields() {
        var entity = BookingUtil.createEntity();

        var dto = mapper.toDto(entity);

        assertEquals("U12345", dto.passenger().userNumber());
        assertEquals("John", dto.passenger().firstName());
        assertEquals("Doe", dto.passenger().lastName());
        assertEquals("john@test.com", dto.passenger().email());
        assertEquals("+49123456789", dto.passenger().phoneNumber());
    }

    @Test
    void toDto_shouldMapFlightFields() {
        var entity = BookingUtil.createEntity();

        var dto = mapper.toDto(entity);

        assertNotNull(dto.flight());
        assertEquals(entity.getFlightNumber(), dto.flight().flightNumber());
        assertEquals(entity.getDepartureAirport(), dto.flight().departureAirport());
        assertEquals(entity.getArrivalAirport(), dto.flight().arrivalAirport());
        assertNull(dto.flight().availableSeats());
    }

    @Test
    void toDto_shouldSetCancellableTrue_whenConfirmedAndFutureDeparture() {
        var entity = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));

        var dto = mapper.toDto(entity);

        assertTrue(dto.cancellable());
    }

    @Test
    void toDto_shouldSetCancellableFalse_whenLessThan24h() {
        var entity = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusHours(12));

        var dto = mapper.toDto(entity);

        assertFalse(dto.cancellable());
    }

    @Test
    void toDto_shouldSetCancellableFalse_whenCancelled() {
        var entity = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));
        entity.setStatus(BookingStatus.CANCELLED);

        var dto = mapper.toDto(entity);

        assertFalse(dto.cancellable());
    }

    @Test
    void toDto_shouldSetCancellableFalse_whenDepartureNull() {
        var entity = BookingUtil.createEntity();
        entity.setDepartureTime(null);

        var dto = mapper.toDto(entity);

        assertFalse(dto.cancellable());
    }

    @Test
    void toDto_shouldSetCancellableTrue_whenPendingAndFuture() {
        var entity = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));
        entity.setStatus(BookingStatus.PENDING);

        var dto = mapper.toDto(entity);

        assertTrue(dto.cancellable());
    }
}
