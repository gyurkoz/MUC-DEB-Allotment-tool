package com.lhsystems.booking.core.service;

import com.lhsystems.booking.core.isb.IsbClient;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import com.lhsystems.booking.persistence.repository.BookingRepository;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

public class PnrStatusScheduler {

    private static final Logger LOG = LoggerFactory.getLogger(PnrStatusScheduler.class);

    private final BookingRepository bookingRepository;
    private final IsbClient isbClient;
    private final EmailService emailService;

    public PnrStatusScheduler(
            BookingRepository bookingRepository, IsbClient isbClient, EmailService emailService) {
        this.bookingRepository = bookingRepository;
        this.isbClient = isbClient;
        this.emailService = emailService;
    }

    @Transactional
    @Scheduled(fixedRateString = "${pnr.check.interval-ms:3600000}")
    public void checkPnrStatuses() {
        LOG.info("Starting PNR status check");
        var activeStatuses = List.of(BookingStatus.CONFIRMED, BookingStatus.PENDING);
        var bookings = bookingRepository.findByStatusIn(activeStatuses);

        for (var booking : bookings) {
            try {
                var pnrStatus = isbClient.retrievePnrStatus(booking.getPnr());
                var newStatus = BookingStatus.valueOf(pnrStatus);

                if (newStatus != booking.getStatus()) {
                    final var oldStatus = booking.getStatus().name();
                    booking.setStatus(newStatus);
                    bookingRepository.save(booking);
                    emailService.sendStatusChange(booking, oldStatus);
                    LOG.info(
                            "Booking {} status changed from {} to {}",
                            booking.getId(),
                            oldStatus,
                            newStatus);
                }
            } catch (IllegalArgumentException ex) {
                LOG.warn("Unknown PNR status for booking {}: {}", booking.getId(), ex.getMessage());
            } catch (Exception ex) {
                LOG.error("Error processing booking {}: {}", booking.getId(), ex.getMessage(), ex);
            }
        }
        LOG.info("PNR status check completed for {} bookings", bookings.size());
    }
}
