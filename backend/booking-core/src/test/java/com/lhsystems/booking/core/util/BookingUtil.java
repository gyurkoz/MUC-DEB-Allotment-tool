package com.lhsystems.booking.core.util;

import com.lhsystems.booking.api.dto.BookingResponseDTO;
import com.lhsystems.booking.api.dto.PassengerDTO;
import com.lhsystems.booking.persistence.entity.Booking;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import com.lhsystems.booking.persistence.entity.PassengerDetails;
import java.time.Instant;
import java.time.LocalDateTime;

public final class BookingUtil {

    public static final String BOOKING_ID = "test-booking-id";
    public static final String PNR = "ABCDEF";
    public static final Long USER_ID = 1L;

    private BookingUtil() {}

    public static Booking createEntity() {
        var booking = new Booking();
        booking.setId(BOOKING_ID);
        booking.setUserId(USER_ID);
        booking.setPnr(PNR);
        booking.setStatus(BookingStatus.CONFIRMED);
        booking.setFlightId(FlightUtil.FLIGHT_ID);
        booking.setFlightNumber(FlightUtil.FLIGHT_NUMBER);
        booking.setMarketingAirline(FlightUtil.AIRLINE);
        booking.setDepartureAirport(FlightUtil.DEPARTURE);
        booking.setArrivalAirport(FlightUtil.ARRIVAL);
        booking.setDepartureTime(LocalDateTime.now().plusDays(30));
        booking.setArrivalTime(LocalDateTime.now().plusDays(30).plusMinutes(90));
        booking.setTravelTimeMinutes(FlightUtil.TRAVEL_TIME);
        booking.setStops(0);
        booking.setPriceAmount(FlightUtil.PRICE);
        booking.setPriceCurrency(FlightUtil.CURRENCY);
        booking.setPassenger(createPassengerDetails());
        booking.setCreatedAt(Instant.now());
        return booking;
    }

    public static PassengerDetails createPassengerDetails() {
        var passenger = new PassengerDetails();
        passenger.setUserNumber("U12345");
        passenger.setFirstName("John");
        passenger.setLastName("Doe");
        passenger.setEmail("john@test.com");
        passenger.setPhoneNumber("+49123456789");
        return passenger;
    }

    public static PassengerDTO createPassengerDto() {
        return new PassengerDTO("U12345", "John", "Doe", "john@test.com", "+49123456789");
    }

    public static BookingResponseDTO createResponseDto() {
        return new BookingResponseDTO(
                BOOKING_ID,
                PNR,
                "CONFIRMED",
                FlightUtil.createDto(),
                createPassengerDto(),
                Instant.now(),
                true);
    }

    public static Booking createEntityWithDeparture(LocalDateTime departureTime) {
        var booking = createEntity();
        booking.setDepartureTime(departureTime);
        booking.setArrivalTime(departureTime.plusMinutes(90));
        return booking;
    }
}
