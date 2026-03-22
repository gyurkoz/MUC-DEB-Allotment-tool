package com.lhsystems.booking.core.service;

import com.lhsystems.booking.api.dto.BookingRequestDTO;
import com.lhsystems.booking.api.dto.BookingResponseDTO;
import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.exception.BookingAlreadyCancelledException;
import com.lhsystems.booking.core.exception.BookingNotFoundException;
import com.lhsystems.booking.core.exception.CancellationNotAllowedException;
import com.lhsystems.booking.core.exception.EmailVerificationException;
import com.lhsystems.booking.core.exception.FlightNotFoundException;
import com.lhsystems.booking.core.exception.NoSeatsAvailableException;
import com.lhsystems.booking.core.isb.IsbClient;
import com.lhsystems.booking.core.mapper.BookingMapper;
import com.lhsystems.booking.persistence.entity.Booking;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import com.lhsystems.booking.persistence.entity.PassengerDetails;
import com.lhsystems.booking.persistence.repository.BookingRepository;
import com.lhsystems.booking.persistence.repository.FlightRepository;
import com.lhsystems.booking.persistence.repository.UserRepository;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

public class BookingService {

    private static final Logger LOG = LoggerFactory.getLogger(BookingService.class);

    private final BookingRepository bookingRepository;
    private final FlightRepository flightRepository;
    private final UserRepository userRepository;
    private final IsbClient isbClient;
    private final BookingMapper bookingMapper;
    private final EmailService emailService;

    public BookingService(
            BookingRepository bookingRepository,
            FlightRepository flightRepository,
            UserRepository userRepository,
            IsbClient isbClient,
            BookingMapper bookingMapper,
            EmailService emailService) {
        this.bookingRepository = bookingRepository;
        this.flightRepository = flightRepository;
        this.userRepository = userRepository;
        this.isbClient = isbClient;
        this.bookingMapper = bookingMapper;
        this.emailService = emailService;
    }

    @Transactional
    public BookingResponseDTO createBooking(BookingRequestDTO request, String username) {
        var user =
                userRepository
                        .findByUsername(username)
                        .orElseThrow(
                                () -> new AuthenticationException("User not found: " + username));
        var userId = user.getId();

        var flight =
                flightRepository
                        .findByIdForUpdate(request.flightId())
                        .orElseThrow(() -> new FlightNotFoundException(request.flightId()));

        if (flight.getAvailableSeats() <= 0) {
            throw new NoSeatsAvailableException(request.flightId());
        }

        var passengerName = request.passenger().firstName() + " " + request.passenger().lastName();
        var pnr =
                isbClient.createPnr(
                        flight.getFlightNumber(),
                        flight.getDepartureTime().toString(),
                        passengerName);

        var booking = new Booking();
        booking.setId(UUID.randomUUID().toString());
        booking.setUserId(userId);
        booking.setPnr(pnr);
        booking.setStatus(BookingStatus.CONFIRMED);
        booking.setFlightId(flight.getId());
        booking.setFlightNumber(flight.getFlightNumber());
        booking.setMarketingAirline(flight.getMarketingAirline());
        booking.setDepartureAirport(flight.getDepartureAirport());
        booking.setArrivalAirport(flight.getArrivalAirport());
        booking.setDepartureTime(flight.getDepartureTime());
        booking.setArrivalTime(flight.getArrivalTime());
        booking.setTravelTimeMinutes(flight.getTravelTimeMinutes());
        booking.setStops(flight.getStops());
        booking.setPriceAmount(flight.getPriceAmount());
        booking.setPriceCurrency(flight.getPriceCurrency());

        var passenger = new PassengerDetails();
        passenger.setUserNumber(request.passenger().userNumber());
        passenger.setFirstName(request.passenger().firstName());
        passenger.setLastName(request.passenger().lastName());
        passenger.setEmail(request.passenger().email());
        passenger.setPhoneNumber(request.passenger().phoneNumber());
        booking.setPassenger(passenger);

        flight.setAvailableSeats(flight.getAvailableSeats() - 1);
        flightRepository.save(flight);

        var saved = bookingRepository.save(booking);
        emailService.sendBookingConfirmation(saved);
        return bookingMapper.toDto(saved);
    }

    public BookingResponseDTO getBooking(String bookingId) {
        var booking =
                bookingRepository
                        .findById(bookingId)
                        .orElseThrow(() -> new BookingNotFoundException(bookingId));
        return bookingMapper.toDto(booking);
    }

    @Transactional
    public BookingResponseDTO cancelBooking(String bookingId, String email) {
        var booking =
                bookingRepository
                        .findById(bookingId)
                        .orElseThrow(() -> new BookingNotFoundException(bookingId));

        if (!booking.getPassenger().getEmail().equalsIgnoreCase(email)) {
            throw new EmailVerificationException();
        }

        if (booking.getStatus() == BookingStatus.CANCELLED) {
            throw new BookingAlreadyCancelledException();
        }

        if (booking.getStatus() != BookingStatus.CONFIRMED
                && booking.getStatus() != BookingStatus.PENDING) {
            throw new CancellationNotAllowedException(
                    "Booking in status " + booking.getStatus() + " cannot be cancelled");
        }

        boolean departureInFuture =
                booking.getDepartureTime() != null
                        && booking.getDepartureTime()
                                .isAfter(LocalDateTime.now().plus(24, ChronoUnit.HOURS));
        if (!departureInFuture) {
            throw new CancellationNotAllowedException("Cannot cancel within 24 hours of departure");
        }

        isbClient.cancelPnr(booking.getPnr());
        booking.setStatus(BookingStatus.CANCELLED);

        var saved = bookingRepository.save(booking);
        emailService.sendBookingCancellation(saved);
        return bookingMapper.toDto(saved);
    }
}
