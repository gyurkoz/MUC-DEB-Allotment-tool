# Email Notifications

## Overview

The application sends HTML emails to passengers at key booking lifecycle events using **Spring Mail** with **Thymeleaf** templates.

## Email Types

| Event               | Template                        | Subject Format |
| ------------------- | ------------------------------- | -------------- |
| Booking confirmed   | `email/booking-confirmation`    | `Booking Confirmation - {PNR}` |
| Booking cancelled   | `email/booking-cancellation`    | `Booking Cancelled - {PNR}` |
| Status change       | `email/status-change`           | `Booking Status Update - {PNR}` |

## Configuration

| Property               | Default     | Description |
| ---------------------- | ----------- | ----------- |
| `spring.mail.host`     | `localhost` | SMTP server hostname |
| `spring.mail.port`     | `1025`      | SMTP server port |
| `spring.mail.username` | *(empty)*   | SMTP authentication username |
| `spring.mail.password` | *(empty)*   | SMTP authentication password |

**Sender address:** `noreply@mucdeb-booking.local`

## Mail Server by Profile

| Profile   | Mail Host  | Port | Description |
| --------- | ---------- | ---- | ----------- |
| `dev`     | `localhost`| 1025 | Local Mailpit (start with `--profile dev`) |
| `docker`  | `mailpit`  | 1025 | Docker Compose Mailpit container |
| `default` | Configured | —    | Production SMTP server |

## Development with Mailpit

[Mailpit](https://mailpit.axllent.org/) is included in Docker Compose as a development mail server. Start it with the `dev` profile:

```bash
docker compose --profile dev up -d
```

- **SMTP:** `localhost:1025` (receives all emails)
- **Web UI:** http://localhost:8025 (view sent emails)

All emails sent by the application in dev/docker mode are captured by Mailpit and viewable in the web UI. No real emails are sent.

## Template Variables

### Booking Confirmation / Cancellation

| Variable    | Type    | Description |
| ----------- | ------- | ----------- |
| `booking`   | Booking | Full booking entity with passenger, flight details, PNR |

### Status Change

| Variable    | Type    | Description |
| ----------- | ------- | ----------- |
| `booking`   | Booking | Updated booking entity |
| `oldStatus` | String  | Previous status value |

## Error Handling

Email sending failures are **logged but do not fail the booking operation**. The `EmailService` catches `MessagingException` and `MailException`, logs the error, and continues. This ensures booking creation/cancellation succeeds even if the mail server is unavailable.

## Implementation

The `EmailService` (`booking-core`) uses:
- `JavaMailSender` for SMTP delivery
- `MimeMessageHelper` for HTML content with UTF-8 encoding
- `TemplateEngine` (Thymeleaf) for template rendering

Templates are located in `booking-core/src/main/resources/templates/email/`.
