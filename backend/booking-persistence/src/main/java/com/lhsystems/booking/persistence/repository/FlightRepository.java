package com.lhsystems.booking.persistence.repository;

import com.lhsystems.booking.persistence.entity.Flight;
import jakarta.persistence.LockModeType;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FlightRepository extends JpaRepository<Flight, String> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT f FROM Flight f WHERE f.id = :id")
    Optional<Flight> findByIdForUpdate(@Param("id") String id);

    List<Flight> findByDepartureAirportAndArrivalAirportAndDepartureTimeBetween(
            String departureAirport, String arrivalAirport, LocalDateTime from, LocalDateTime to);
}
