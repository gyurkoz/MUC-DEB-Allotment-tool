# ISB Integration

## Overview

The **ISB (Integrated Service Bridge)** is the interface to the **Amadeus GDS** (Global Distribution System) for PNR (Passenger Name Record) operations. The backend communicates with ISB via SOAP web services.

## Client Interface

All ISB operations are defined in the `IsbClient` interface (`booking-core`):

```java
public interface IsbClient {
    List<FlightAvailability> searchFlights(String origin, String destination, LocalDate date);
    String createPnr(String flightNumber, String departureTime, String passengerName);
    String retrievePnrStatus(String pnr);
    boolean cancelPnr(String pnr);
}
```

## Implementations

### IsbClientDummy (Development)

Used in `dev` and `docker` profiles. Generates mock data:
- `searchFlights()` — Returns mock flight availability
- `createPnr()` — Generates a random 6-character alphanumeric PNR
- `retrievePnrStatus()` — Returns `CONFIRMED` for all PNRs
- `cancelPnr()` — Always returns `true`

### IsbSoapClient (Production)

Used when the `default` profile is active (production). Connects to real Amadeus ISB endpoints via SOAP.

**Configuration properties:**

| Property                   | Description |
| -------------------------- | ----------- |
| `isb.reservation-endpoint` | ISB Reservation SOAP service URL |
| `isb.auth-endpoint`        | ISB Authentication SOAP service URL |

**Environment variables:**

```properties
ISB_RESERVATION_ENDPOINT=https://isb.example.com/IsbReservationService.4.0.0/
ISB_AUTH_ENDPOINT=https://isb.example.com/IsbAuthService.1.1.0/
```

## PNR Operations

### Create PNR

During booking creation (`BookingService.createBooking()`):
1. Flight is locked with pessimistic write lock
2. Available seats are verified
3. `isbClient.createPnr()` is called with flight number, departure time, and passenger name
4. Returns a 6-character PNR record locator (e.g. `ABC123`)
5. If ISB fails, a `GdsException` (HTTP 502) is thrown

### Cancel PNR

During booking cancellation (`BookingService.cancelBooking()`):
1. Business rules are validated (email match, status, 24h rule)
2. `isbClient.cancelPnr()` is called with the booking's PNR
3. If ISB fails, a `GdsException` (HTTP 502) is thrown
4. On success, seats are restored to the flight

### Check PNR Status (Scheduled)

The `PnrStatusScheduler` runs a background job:

| Property                  | Default    | Description |
| ------------------------- | ---------- | ----------- |
| `pnr.check.interval-ms`  | `3600000`  | Check interval (default: 1 hour) |

**Flow:**
1. Queries all bookings with status `CONFIRMED` or `PENDING`
2. For each booking, calls `isbClient.retrievePnrStatus(pnr)`
3. If the returned status differs from the stored status, updates the booking
4. Sends a status change email to the passenger
5. Logs warnings for unknown status values, errors for ISB failures

## Error Handling

| Exception      | HTTP Status | When |
| -------------- | ----------- | ---- |
| `GdsException` | 502         | ISB communication failure, timeout, or SOAP fault |

The `GdsException` extends `BaseException` and is caught by `GlobalExceptionHandler`, returning a standardized error response to the client.

## Configuration Selection

The `IsbConfig` class selects the ISB client implementation based on Spring profile configuration. In dev/docker profiles, the dummy client is auto-configured. In production, the SOAP client requires valid ISB endpoint URLs.
