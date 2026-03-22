package com.lhsystems.booking.core.mapper;

import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.api.dto.PriceDTO;
import com.lhsystems.booking.persistence.entity.Flight;
import org.springframework.stereotype.Service;

@Service

public class FlightMapper {

    public FlightDTO toDto(Flight entity) {
        return new FlightDTO(
                entity.getId(),
                entity.getFlightNumber(),
                entity.getMarketingAirline(),
                entity.getDepartureAirport(),
                entity.getArrivalAirport(),
                entity.getDepartureTime(),
                entity.getArrivalTime(),
                entity.getTravelTimeMinutes(),
                entity.getStops(),
                entity.getStopoverAirport(),
                entity.getAvailableSeats(),
                new PriceDTO(entity.getPriceAmount(), entity.getPriceCurrency()),
                entity.getStatus().name());
    }
}
