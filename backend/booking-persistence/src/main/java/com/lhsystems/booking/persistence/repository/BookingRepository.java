package com.lhsystems.booking.persistence.repository;

import com.lhsystems.booking.persistence.entity.Booking;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, String> {

    List<Booking> findByStatusIn(List<BookingStatus> statuses);
}
