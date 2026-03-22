package com.lhsystems.booking.core.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.lhsystems.booking.core.isb.IsbClient;
import com.lhsystems.booking.core.util.BookingUtil;
import com.lhsystems.booking.persistence.entity.Booking;
import com.lhsystems.booking.persistence.entity.BookingStatus;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)

class PnrStatusSchedulerTest {

    @Mock private com.lhsystems.booking.persistence.repository.BookingRepository bookingRepository;

    @Mock private IsbClient isbClient;

    @Mock private EmailService emailService;

    @InjectMocks private PnrStatusScheduler scheduler;

    @Test
    void checkPnrStatuses_shouldProcessActiveBookings() {
        var booking = BookingUtil.createEntity();
        booking.setStatus(BookingStatus.CONFIRMED);
        var activeStatuses = List.of(BookingStatus.CONFIRMED, BookingStatus.PENDING);
        when(bookingRepository.findByStatusIn(activeStatuses)).thenReturn(List.of(booking));
        when(isbClient.retrievePnrStatus(BookingUtil.PNR)).thenReturn("CONFIRMED");

        scheduler.checkPnrStatuses();

        verify(isbClient).retrievePnrStatus(BookingUtil.PNR);
        // Status unchanged, no email sent
        verify(emailService, never()).sendStatusChange(any(Booking.class), any());
    }

    @Test
    void checkPnrStatuses_shouldSendEmail_whenStatusChanges() {
        var booking = BookingUtil.createEntity();
        booking.setStatus(BookingStatus.CONFIRMED);
        var activeStatuses = List.of(BookingStatus.CONFIRMED, BookingStatus.PENDING);
        when(bookingRepository.findByStatusIn(activeStatuses)).thenReturn(List.of(booking));
        when(isbClient.retrievePnrStatus(BookingUtil.PNR)).thenReturn("REJECTED");

        scheduler.checkPnrStatuses();

        assertEquals(BookingStatus.REJECTED, booking.getStatus());
        verify(bookingRepository).save(booking);
        verify(emailService).sendStatusChange(booking, "CONFIRMED");
    }

    @Test
    void checkPnrStatuses_shouldContinue_whenOneBookingFails() {
        var booking1 = BookingUtil.createEntity();
        booking1.setId("booking-1");
        booking1.setPnr("PNR001");
        booking1.setStatus(BookingStatus.CONFIRMED);

        var booking2 = BookingUtil.createEntity();
        booking2.setId("booking-2");
        booking2.setPnr("PNR002");
        booking2.setStatus(BookingStatus.PENDING);

        var activeStatuses = List.of(BookingStatus.CONFIRMED, BookingStatus.PENDING);
        when(bookingRepository.findByStatusIn(activeStatuses))
                .thenReturn(List.of(booking1, booking2));
        when(isbClient.retrievePnrStatus("PNR001")).thenThrow(new RuntimeException("ISB error"));
        when(isbClient.retrievePnrStatus("PNR002")).thenReturn("PENDING");

        scheduler.checkPnrStatuses();

        // booking2 was still processed despite booking1 failure
        verify(isbClient).retrievePnrStatus("PNR002");
    }

    @Test
    void checkPnrStatuses_shouldHandleUnknownStatus() {
        var booking = BookingUtil.createEntity();
        booking.setStatus(BookingStatus.CONFIRMED);
        var activeStatuses = List.of(BookingStatus.CONFIRMED, BookingStatus.PENDING);
        when(bookingRepository.findByStatusIn(activeStatuses)).thenReturn(List.of(booking));
        when(isbClient.retrievePnrStatus(BookingUtil.PNR)).thenReturn("UNKNOWN_STATUS");

        // Should not throw — IllegalArgumentException is caught
        scheduler.checkPnrStatuses();

        // Status should remain unchanged
        assertEquals(BookingStatus.CONFIRMED, booking.getStatus());
        verify(bookingRepository, never()).save(any(Booking.class));
    }
}
