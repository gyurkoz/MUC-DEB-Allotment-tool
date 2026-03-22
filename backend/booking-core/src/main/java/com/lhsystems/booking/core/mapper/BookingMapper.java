package com.lhsystems.booking.core.mapper;

import com.lhsystems.booking.api.dto.BookingResponseDTO;
import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.api.dto.PassengerDTO;
import com.lhsystems.booking.api.dto.PriceDTO;
import com.lhsystems.booking.persistence.entity.Booking;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import org.springframework.stereotype.Service;

@Service

public class BookingMapper {

    public BookingResponseDTO toDto(Booking entity) {
        var flight =
                new FlightDTO(
                        entity.getFlightId(),
                        entity.getFlightNumber(),
                        entity.getMarketingAirline(),
                        entity.getDepartureAirport(),
                        entity.getArrivalAirport(),
                        entity.getDepartureTime(),
                        entity.getArrivalTime(),
                        entity.getTravelTimeMinutes(),
                        entity.getStops(),
                        null,
                        null,
                        new PriceDTO(entity.getPriceAmount(), entity.getPriceCurrency()),
                        null);

        var passenger =
                new PassengerDTO(
                        entity.getPassenger().getUserNumber(),
                        entity.getPassenger().getFirstName(),
                        entity.getPassenger().getLastName(),
                        entity.getPassenger().getEmail(),
                        entity.getPassenger().getPhoneNumber());

        boolean cancellable = isCancellable(entity);

        return new BookingResponseDTO(
                entity.getId(),
                entity.getPnr(),
                entity.getStatus().name(),
                flight,
                passenger,
                entity.getCreatedAt(),
                cancellable);
    }

    private boolean isCancellable(Booking entity) {
        boolean activeStatus =
                entity.getStatus() == BookingStatus.CONFIRMED
                        || entity.getStatus() == BookingStatus.PENDING;
        boolean departureInFuture =
                entity.getDepartureTime() != null
                        && entity.getDepartureTime()
                                .isAfter(LocalDateTime.now().plus(24, ChronoUnit.HOURS));
        return activeStatus && departureInFuture;
    }
}
