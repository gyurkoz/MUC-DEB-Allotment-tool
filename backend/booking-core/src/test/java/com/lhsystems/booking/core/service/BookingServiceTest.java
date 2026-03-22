package com.lhsystems.booking.core.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.lhsystems.booking.api.dto.BookingRequestDTO;
import com.lhsystems.booking.api.dto.PassengerDTO;
import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.exception.BookingAlreadyCancelledException;
import com.lhsystems.booking.core.exception.BookingNotFoundException;
import com.lhsystems.booking.core.exception.CancellationNotAllowedException;
import com.lhsystems.booking.core.exception.EmailVerificationException;
import com.lhsystems.booking.core.exception.FlightNotFoundException;
import com.lhsystems.booking.core.exception.NoSeatsAvailableException;
import com.lhsystems.booking.core.isb.IsbClient;
import com.lhsystems.booking.core.mapper.BookingMapper;
import com.lhsystems.booking.core.util.BookingUtil;
import com.lhsystems.booking.core.util.FlightUtil;
import com.lhsystems.booking.persistence.entity.Booking;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import com.lhsystems.booking.persistence.entity.User;
import com.lhsystems.booking.persistence.repository.BookingRepository;
import com.lhsystems.booking.persistence.repository.FlightRepository;
import com.lhsystems.booking.persistence.repository.UserRepository;
import java.time.LocalDateTime;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)

class BookingServiceTest {

    @Mock private BookingRepository bookingRepository;

    @Mock private FlightRepository flightRepository;

    @Mock private UserRepository userRepository;

    @Mock private IsbClient isbClient;

    @Mock private BookingMapper bookingMapper;

    @Mock private EmailService emailService;

    @InjectMocks private BookingService bookingService;

    @Test
    void createBooking_shouldReturnResponse_whenValid() {
        var flight = FlightUtil.createEntity();
        stubUserLookup();
        when(flightRepository.findByIdForUpdate(FlightUtil.FLIGHT_ID))
                .thenReturn(Optional.of(flight));
        when(isbClient.createPnr(anyString(), anyString(), anyString())).thenReturn("ABCDEF");
        when(bookingRepository.save(any(Booking.class))).thenAnswer(inv -> inv.getArgument(0));
        when(bookingMapper.toDto(any(Booking.class))).thenReturn(BookingUtil.createResponseDto());
        doNothing().when(emailService).sendBookingConfirmation(any(Booking.class));

        var result = bookingService.createBooking(createBookingRequest(), "admin");

        assertNotNull(result);
        assertEquals("CONFIRMED", result.status());
        verify(flightRepository).save(flight);
        verify(bookingRepository).save(any(Booking.class));
        verify(emailService).sendBookingConfirmation(any(Booking.class));
    }

    @Test
    void createBooking_shouldDecrementSeats() {
        var flight = FlightUtil.createEntity();
        final int initialSeats = flight.getAvailableSeats();
        stubUserLookup();
        when(flightRepository.findByIdForUpdate(FlightUtil.FLIGHT_ID))
                .thenReturn(Optional.of(flight));
        when(isbClient.createPnr(anyString(), anyString(), anyString())).thenReturn("ABCDEF");
        when(bookingRepository.save(any(Booking.class))).thenAnswer(inv -> inv.getArgument(0));
        when(bookingMapper.toDto(any(Booking.class))).thenReturn(BookingUtil.createResponseDto());

        bookingService.createBooking(createBookingRequest(), "admin");

        assertEquals(initialSeats - 1, flight.getAvailableSeats());
    }

    @Test
    void createBooking_shouldThrow_whenFlightNotFound() {
        var request = createBookingRequest();
        stubUserLookup();
        when(flightRepository.findByIdForUpdate(FlightUtil.FLIGHT_ID)).thenReturn(Optional.empty());

        assertThrows(
                FlightNotFoundException.class,
                () -> bookingService.createBooking(request, "admin"));
    }

    @Test
    void createBooking_shouldThrow_whenNoSeatsAvailable() {
        var flight = FlightUtil.createEntity();
        flight.setAvailableSeats(0);
        var request = createBookingRequest();

        stubUserLookup();
        when(flightRepository.findByIdForUpdate(FlightUtil.FLIGHT_ID))
                .thenReturn(Optional.of(flight));

        assertThrows(
                NoSeatsAvailableException.class,
                () -> bookingService.createBooking(request, "admin"));
    }

    @Test
    void getBooking_shouldReturnDto_whenExists() {
        var booking = BookingUtil.createEntity();
        var responseDto = BookingUtil.createResponseDto();
        when(bookingRepository.findById(BookingUtil.BOOKING_ID)).thenReturn(Optional.of(booking));
        when(bookingMapper.toDto(booking)).thenReturn(responseDto);

        var result = bookingService.getBooking(BookingUtil.BOOKING_ID);

        assertEquals(responseDto, result);
    }

    @Test
    void getBooking_shouldThrow_whenNotFound() {
        when(bookingRepository.findById("nonexistent")).thenReturn(Optional.empty());

        assertThrows(
                BookingNotFoundException.class, () -> bookingService.getBooking("nonexistent"));
    }

    @Test
    void cancelBooking_shouldSucceed_whenValidAndOver24h() {
        var booking = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));
        var responseDto = BookingUtil.createResponseDto();

        when(bookingRepository.findById(BookingUtil.BOOKING_ID)).thenReturn(Optional.of(booking));
        when(isbClient.cancelPnr(BookingUtil.PNR)).thenReturn(true);
        when(bookingRepository.save(any(Booking.class))).thenAnswer(inv -> inv.getArgument(0));
        when(bookingMapper.toDto(any(Booking.class))).thenReturn(responseDto);

        var result = bookingService.cancelBooking(BookingUtil.BOOKING_ID, "john@test.com");

        assertNotNull(result);
        assertEquals(BookingStatus.CANCELLED, booking.getStatus());
        verify(isbClient).cancelPnr(BookingUtil.PNR);
        verify(emailService).sendBookingCancellation(any(Booking.class));
    }

    @Test
    void cancelBooking_shouldThrow_whenEmailMismatch() {
        var booking = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));
        when(bookingRepository.findById(BookingUtil.BOOKING_ID)).thenReturn(Optional.of(booking));

        assertThrows(
                EmailVerificationException.class,
                () -> bookingService.cancelBooking(BookingUtil.BOOKING_ID, "wrong@test.com"));
    }

    @Test
    void cancelBooking_shouldThrow_whenLessThan24hBeforeDeparture() {
        var booking = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusHours(12));
        when(bookingRepository.findById(BookingUtil.BOOKING_ID)).thenReturn(Optional.of(booking));

        assertThrows(
                CancellationNotAllowedException.class,
                () -> bookingService.cancelBooking(BookingUtil.BOOKING_ID, "john@test.com"));
    }

    @Test
    void cancelBooking_shouldThrow_whenAlreadyCancelled() {
        var booking = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));
        booking.setStatus(BookingStatus.CANCELLED);
        when(bookingRepository.findById(BookingUtil.BOOKING_ID)).thenReturn(Optional.of(booking));

        assertThrows(
                BookingAlreadyCancelledException.class,
                () -> bookingService.cancelBooking(BookingUtil.BOOKING_ID, "john@test.com"));
    }

    @Test
    void cancelBooking_shouldThrow_whenStatusRejected() {
        var booking = BookingUtil.createEntityWithDeparture(LocalDateTime.now().plusDays(3));
        booking.setStatus(BookingStatus.REJECTED);
        when(bookingRepository.findById(BookingUtil.BOOKING_ID)).thenReturn(Optional.of(booking));

        assertThrows(
                CancellationNotAllowedException.class,
                () -> bookingService.cancelBooking(BookingUtil.BOOKING_ID, "john@test.com"));
    }

    @Test
    void cancelBooking_shouldThrow_whenBookingNotFound() {
        when(bookingRepository.findById("nonexistent")).thenReturn(Optional.empty());

        assertThrows(
                BookingNotFoundException.class,
                () -> bookingService.cancelBooking("nonexistent", "john@test.com"));
        verify(isbClient, never()).cancelPnr(anyString());
    }

    private BookingRequestDTO createBookingRequest() {
        return new BookingRequestDTO(
                FlightUtil.FLIGHT_ID,
                new PassengerDTO("U1234567", "John", "Doe", "john@test.com", "+49123456789"));
    }

    @Test
    void createBooking_shouldThrow_whenUserNotFound() {
        var request = createBookingRequest();
        when(userRepository.findByUsername("unknown")).thenReturn(Optional.empty());

        assertThrows(
                AuthenticationException.class,
                () -> bookingService.createBooking(request, "unknown"));
    }

    private void stubUserLookup() {
        var user = new User();
        user.setId(1L);
        user.setUsername("admin");
        when(userRepository.findByUsername("admin")).thenReturn(Optional.of(user));
    }
}
