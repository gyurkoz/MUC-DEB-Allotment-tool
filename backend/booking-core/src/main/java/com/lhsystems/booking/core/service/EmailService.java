package com.lhsystems.booking.core.service;

import com.lhsystems.booking.persistence.entity.Booking;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service

public class EmailService {

    private static final Logger LOG = LoggerFactory.getLogger(EmailService.class);
    private static final String FROM_ADDRESS = "noreply@mucdeb-booking.local";

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    public EmailService(JavaMailSender mailSender, TemplateEngine templateEngine) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
    }

    public void sendBookingConfirmation(Booking booking) {
        var context = new Context();
        context.setVariable("booking", booking);
        var html = templateEngine.process("email/booking-confirmation", context);
        sendEmail(
                booking.getPassenger().getEmail(),
                "Booking Confirmation - " + booking.getPnr(),
                html);
    }

    public void sendBookingCancellation(Booking booking) {
        var context = new Context();
        context.setVariable("booking", booking);
        var html = templateEngine.process("email/booking-cancellation", context);
        sendEmail(
                booking.getPassenger().getEmail(), "Booking Cancelled - " + booking.getPnr(), html);
    }

    public void sendStatusChange(Booking booking, String oldStatus) {
        var context = new Context();
        context.setVariable("booking", booking);
        context.setVariable("oldStatus", oldStatus);
        var html = templateEngine.process("email/status-change", context);
        sendEmail(
                booking.getPassenger().getEmail(),
                "Booking Status Update - " + booking.getPnr(),
                html);
    }

    private void sendEmail(String to, String subject, String htmlContent) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            var helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(FROM_ADDRESS);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlContent, true);
            mailSender.send(message);
            LOG.info("Email sent to {} with subject: {}", to, subject);
        } catch (MessagingException | MailException ex) {
            LOG.error(
                    "Failed to send email to {} with subject '{}': {}",
                    to,
                    subject,
                    ex.getMessage(),
                    ex);
        }
    }
}
