package com.lhsystems.booking.core.service;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.lhsystems.booking.core.util.BookingUtil;
import jakarta.mail.MessagingException;
import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@ExtendWith(MockitoExtension.class)

class EmailServiceTest {

    @Mock private JavaMailSender mailSender;

    @Mock private TemplateEngine templateEngine;

    @InjectMocks private EmailService emailService;

    @Test
    void sendBookingConfirmation_shouldSendEmail() {
        var booking = BookingUtil.createEntity();
        var mimeMessage = new MimeMessage((Session) null);
        when(mailSender.createMimeMessage()).thenReturn(mimeMessage);
        when(templateEngine.process(eq("email/booking-confirmation"), any(Context.class)))
                .thenReturn("<html>Confirmed</html>");

        emailService.sendBookingConfirmation(booking);

        verify(mailSender).send(mimeMessage);
    }

    @Test
    void sendBookingCancellation_shouldSendEmail() {
        var booking = BookingUtil.createEntity();
        var mimeMessage = new MimeMessage((Session) null);
        when(mailSender.createMimeMessage()).thenReturn(mimeMessage);
        when(templateEngine.process(eq("email/booking-cancellation"), any(Context.class)))
                .thenReturn("<html>Cancelled</html>");

        emailService.sendBookingCancellation(booking);

        verify(mailSender).send(mimeMessage);
    }

    @Test
    void sendStatusChange_shouldSendEmail() {
        var booking = BookingUtil.createEntity();
        var mimeMessage = new MimeMessage((Session) null);
        when(mailSender.createMimeMessage()).thenReturn(mimeMessage);
        when(templateEngine.process(eq("email/status-change"), any(Context.class)))
                .thenReturn("<html>Status Changed</html>");

        emailService.sendStatusChange(booking, "PENDING");

        verify(mailSender).send(mimeMessage);
    }

    @Test
    void sendBookingConfirmation_shouldCatchMessagingException() throws Exception {
        var mimeMessage = mock(MimeMessage.class);
        when(mailSender.createMimeMessage()).thenReturn(mimeMessage);
        when(templateEngine.process(eq("email/booking-confirmation"), any(Context.class)))
                .thenReturn("<html>Confirmed</html>");
        doThrow(new MessagingException("test error")).when(mimeMessage).setContent(any());

        emailService.sendBookingConfirmation(BookingUtil.createEntity());

        verify(mailSender, never()).send(any(MimeMessage.class));
    }
}
