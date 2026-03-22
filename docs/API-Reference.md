# API Reference

Full OpenAPI specification: [`openapi.yml`](../openapi.yml)

Swagger UI: http://localhost:8080/swagger-ui.html (when backend is running)

OpenAPI JSON: http://localhost:8080/api-docs

## Authentication

Protected endpoints require a JWT token in the `Authorization` header:

```
Authorization: Bearer <token>
```

Obtain a token via `POST /api/login`. Tokens are valid for **24 hours** and use HS384 signing.

## Endpoints

### POST /api/login

Authenticate and receive a JWT token. **Public** — no authentication required.

**Request:**

```json
{
  "username": "admin",
  "password": "admin"
}
```

**Response (200):**

```json
{
  "token": "eyJhbGciOiJIUzM4NCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@mucdeb-booking.local"
  }
}
```

**Errors:**

| Status | Description |
| ------ | ----------- |
| 401    | Invalid username or password |

---

### GET /api/flights

Search available flights by direction and date range. **Public** — no authentication required.

**Query Parameters:**

| Name      | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| direction | string | Yes      | `MUC-DEB` or `DEB-MUC`              |
| dateFrom  | date   | Yes      | Start date (ISO 8601, e.g. `2026-03-22`) |
| dateTo    | date   | Yes      | End date (ISO 8601, e.g. `2026-03-28`)   |

**Validation:**
- `direction` must match pattern `^(MUC-DEB|DEB-MUC)$`
- `dateFrom` must not be after `dateTo`

**Response (200):** Array of `FlightDTO`

```json
[
  {
    "id": "LH1234_20260322",
    "flightNumber": "LH1234",
    "marketingAirline": "LH",
    "departureAirport": "MUC",
    "arrivalAirport": "DEB",
    "departureTime": "2026-03-22T08:00:00",
    "arrivalTime": "2026-03-22T09:30:00",
    "travelTimeMinutes": 90,
    "stops": 0,
    "availableSeats": 12,
    "price": {
      "amount": 149.00,
      "currency": "EUR"
    },
    "status": "AVAILABLE"
  }
]
```

**Flight Status Values:** `AVAILABLE`, `SOLD_OUT`, `FLIGHT_CANCELLED`, `DELAYED`

**Errors:**

| Status | Description |
| ------ | ----------- |
| 400    | Invalid direction, missing parameters, or dateFrom after dateTo |

---

### POST /api/booking

Create a new booking. **Requires authentication** (Bearer token).

**Request:**

```json
{
  "flightId": "LH1234_20260322",
  "passenger": {
    "uNumber": "U1234567",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phoneNumber": "+49123456789"
  }
}
```

**Validation:**
- `flightId`: Required, non-blank
- `uNumber`: Must match `^U[0-9]{7}$` (U followed by exactly 7 digits)
- `firstName`, `lastName`: Required, 1–50 characters
- `email`: Required, valid email format
- `phoneNumber`: Required, non-blank

**Response (201):** `BookingResponseDTO`

```json
{
  "bookingId": "123e4567-e89b-12d3-a456-426614174000",
  "pnr": "ABC123",
  "status": "CONFIRMED",
  "flight": { "..." },
  "passenger": { "..." },
  "createdAt": "2026-03-22T10:30:00Z",
  "cancellable": true
}
```

**Booking Status Values:** `CONFIRMED`, `PENDING`, `CANCELLED`, `REJECTED`, `FLIGHT_CANCELLED`, `FLIGHT_DELAYED`

**Errors:**

| Status | Description |
| ------ | ----------- |
| 400    | Validation error (invalid passenger data, missing fields) |
| 401    | Missing or invalid JWT token |
| 404    | Flight not found |
| 409    | No seats available on the selected flight |
| 502    | GDS/ISB communication error during PNR creation |

---

### GET /api/booking/{bookingId}

Get booking details and status. **Public** — no authentication required (the UUID booking ID acts as an unguessable secret).

**Path Parameters:**

| Name      | Type | Description |
| --------- | ---- | ----------- |
| bookingId | UUID | Booking identifier |

**Response (200):** `BookingResponseDTO`

**Errors:**

| Status | Description |
| ------ | ----------- |
| 404    | Booking not found |

---

### POST /api/booking/{bookingId}/cancel

Cancel a booking. **Public** — requires email verification instead of JWT.

**Path Parameters:**

| Name      | Type | Description |
| --------- | ---- | ----------- |
| bookingId | UUID | Booking identifier |

**Query Parameters:**

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| email | string | Yes      | Passenger email for verification (must match booking) |

**Business Rules:**
- Email must match the passenger's email (case-insensitive)
- Booking must be in `CONFIRMED` or `PENDING` status
- Cancellation must be at least **24 hours before departure**
- On success, booking seats are restored to the flight and ISB cancellation is triggered

**Response (200):** `BookingResponseDTO` with `status: "CANCELLED"`

**Errors:**

| Status | Description |
| ------ | ----------- |
| 400    | Cancellation not allowed (within 24h of departure, wrong status) |
| 403    | Email does not match passenger email |
| 404    | Booking not found |
| 409    | Booking already cancelled |
| 502    | GDS/ISB communication error during PNR cancellation |

---

## Error Response Format

All errors follow a consistent structure:

```json
{
  "error": "NOT_FOUND",
  "message": "Booking not found: 123e4567-e89b-12d3-a456-426614174000",
  "timestamp": "2026-03-22T12:00:00Z",
  "path": "/api/booking/123e4567-e89b-12d3-a456-426614174000"
}
```

## Schemas

### FlightDTO

| Field             | Type     | Description |
| ----------------- | -------- | ----------- |
| id                | string   | Unique flight ID (e.g. `LH1234_20260322`) |
| flightNumber      | string   | Airline flight number |
| marketingAirline  | string   | Marketing carrier code |
| departureAirport  | string   | IATA departure airport code |
| arrivalAirport    | string   | IATA arrival airport code |
| departureTime     | datetime | Local departure time |
| arrivalTime       | datetime | Local arrival time |
| travelTimeMinutes | integer  | Flight duration in minutes |
| stops             | integer  | Number of stops |
| availableSeats    | integer  | Remaining seat count |
| price             | PriceDTO | Ticket price |
| status            | string   | Flight status enum |

### PassengerDTO

| Field       | Type   | Validation | Description |
| ----------- | ------ | ---------- | ----------- |
| uNumber     | string | `^U[0-9]{7}$` | Employee U-Number |
| firstName   | string | 1–50 chars | Passenger first name |
| lastName    | string | 1–50 chars | Passenger last name |
| email       | string | Valid email | Contact email |
| phoneNumber | string | Non-blank  | Contact phone |

### PriceDTO

| Field    | Type   | Description |
| -------- | ------ | ----------- |
| amount   | number | Price amount |
| currency | string | Currency code (e.g. `EUR`) |

### BookingResponseDTO

| Field       | Type         | Description |
| ----------- | ------------ | ----------- |
| bookingId   | UUID string  | Unique booking identifier |
| pnr         | string       | Amadeus PNR record locator (6 chars) |
| status      | string       | Booking status enum |
| flight      | FlightDTO    | Flight details |
| passenger   | PassengerDTO | Passenger details |
| createdAt   | ISO instant  | Booking creation timestamp |
| cancellable | boolean      | Whether cancellation is allowed |

### ErrorDTO

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| error     | string   | Error code (e.g. `NOT_FOUND`) |
| message   | string   | Human-readable error message |
| timestamp | datetime | Error timestamp |
| path      | string   | Request URI that caused the error |
