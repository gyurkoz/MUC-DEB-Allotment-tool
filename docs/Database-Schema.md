# Database Schema

## Overview

The application uses **MariaDB** with **Liquibase** for schema management. The schema is created via versioned changelogs and seed data is applied using Liquibase contexts.

## Liquibase Changelogs

Changelogs are located in `booking-persistence/src/main/resources/liquibase/`:

| Changelog | Description |
| --------- | ----------- |
| `changelog-root.xml` | Root changelog — includes all child changelogs in order |
| `changelog-001-create-users.xml` | Creates the `users` table |
| `changelog-002-create-bookings.xml` | Creates the `bookings` table with embedded passenger details |
| `changelog-003-create-flights.xml` | Creates the `flights` table  |
| `changelog-004-seed-admin-user.xml` | Seeds the default admin user |

**Execution order** is controlled by `changelog-root.xml` which includes each file sequentially.

## Tables

### users

| Column        | Type         | Constraints      | Description |
| ------------- | ------------ | ---------------- | ----------- |
| id            | BIGINT       | PK, AUTO_INCREMENT | User ID |
| username      | VARCHAR(50)  | UNIQUE, NOT NULL | Login username |
| password_hash | VARCHAR(255) | NOT NULL         | BCrypt-hashed password |
| email         | VARCHAR(100) | NOT NULL         | User email address |

### flights

| Column             | Type         | Constraints      | Description |
| ------------------ | ------------ | ---------------- | ----------- |
| id                 | VARCHAR(50)  | PK               | Flight ID (e.g. `LH1234_20260322`) |
| flight_number      | VARCHAR(10)  | NOT NULL         | Airline flight number |
| marketing_airline  | VARCHAR(5)   | NOT NULL         | Marketing carrier code |
| departure_airport  | VARCHAR(5)   | NOT NULL         | IATA departure code |
| arrival_airport    | VARCHAR(5)   | NOT NULL         | IATA arrival code |
| departure_time     | DATETIME     | NOT NULL         | Scheduled departure |
| arrival_time       | DATETIME     | NOT NULL         | Scheduled arrival |
| travel_time_minutes| INT          |                  | Flight duration |
| stops              | INT          |                  | Number of stops |
| available_seats    | INT          | NOT NULL         | Remaining seat count |
| price_amount       | DECIMAL      |                  | Ticket price |
| price_currency     | VARCHAR(5)   |                  | Currency code |
| status             | VARCHAR(20)  | NOT NULL         | Flight status enum |

### bookings

| Column             | Type         | Constraints      | Description |
| ------------------ | ------------ | ---------------- | ----------- |
| id                 | VARCHAR(36)  | PK               | UUID booking identifier |
| user_id            | BIGINT       | FK → users.id    | Booking creator |
| pnr                | VARCHAR(10)  |                  | Amadeus PNR record locator |
| status             | VARCHAR(30)  | NOT NULL         | Booking status enum |
| flight_id          | VARCHAR(50)  |                  | Original flight ID |
| flight_number      | VARCHAR(10)  |                  | Denormalized flight number |
| marketing_airline  | VARCHAR(5)   |                  | Denormalized carrier |
| departure_airport  | VARCHAR(5)   |                  | Denormalized departure |
| arrival_airport    | VARCHAR(5)   |                  | Denormalized arrival |
| departure_time     | DATETIME     |                  | Denormalized departure time |
| arrival_time       | DATETIME     |                  | Denormalized arrival time |
| travel_time_minutes| INT          |                  | Denormalized duration |
| stops              | INT          |                  | Denormalized stops |
| price_amount       | DECIMAL      |                  | Denormalized price |
| price_currency     | VARCHAR(5)   |                  | Denormalized currency |
| passenger_user_number | VARCHAR(20) |               | Passenger U-Number |
| passenger_first_name  | VARCHAR(50) |               | Passenger first name |
| passenger_last_name   | VARCHAR(50) |               | Passenger last name |
| passenger_email       | VARCHAR(100)|               | Passenger email |
| passenger_phone_number| VARCHAR(30) |               | Passenger phone |
| created_at         | TIMESTAMP    |                  | Booking creation time |

> **Note:** Flight data is denormalized into the bookings table to preserve historical booking details even if flight data changes.

## Enums

### BookingStatus

| Value              | Description |
| ------------------ | ----------- |
| `CONFIRMED`        | Booking confirmed with PNR |
| `PENDING`          | Awaiting GDS confirmation |
| `CANCELLED`        | Cancelled by passenger |
| `REJECTED`         | Rejected by GDS |
| `FLIGHT_CANCELLED` | Flight was cancelled |
| `FLIGHT_DELAYED`   | Flight was delayed |

### FlightStatus

| Value              | Description |
| ------------------ | ----------- |
| `AVAILABLE`        | Seats available for booking |
| `SOLD_OUT`         | No seats remaining |
| `FLIGHT_CANCELLED` | Flight cancelled by airline |
| `DELAYED`          | Flight departure delayed |

## Seed Data

### Admin User (changelog-004)

A default admin user is seeded for development:
- **Username:** `admin`
- **Password:** `admin` (BCrypt-hashed)
- **Email:** `admin@mucdeb-booking.local`

### Liquibase Contexts

Data seeding is controlled by Liquibase contexts:

| Context  | Description |
| -------- | ----------- |
| `dev`    | Activated in dev profile — seeds development data |
| `docker` | Activated in docker profile — seeds data for Docker environment |

## Database Access by Profile

| Profile      | JDBC URL                                    | DDL Strategy |
| ------------ | ------------------------------------------- | ------------ |
| `dev`        | `jdbc:mariadb://127.0.0.1:3307/booking`    | Liquibase managed |
| `docker`     | `jdbc:mariadb://database:3306/booking`      | Liquibase managed |
| `codespaces` | `jdbc:mariadb://database:3306/booking`      | Liquibase managed |
| `test`       | `jdbc:h2:mem:testdb;MODE=MariaDB`           | `create-drop` (Liquibase disabled) |

## Concurrency Control

The `FlightRepository` uses `findByIdForUpdate()` with a **pessimistic write lock** (`@Lock(LockModeType.PESSIMISTIC_WRITE)`) to prevent race conditions when decrementing available seats during concurrent booking creation.
