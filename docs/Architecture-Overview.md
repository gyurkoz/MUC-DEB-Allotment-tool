# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Docker Compose                       │
│                                                          │
│  ┌──────────────┐     ┌──────────────────┐              │
│  │   Frontend   │────▶│     Backend      │              │
│  │  React 19    │     │  Spring Boot 3.5 │              │
│  │  Vite 7      │     │  Java 21         │              │
│  │  Port 3000   │     │  Port 8080       │              │
│  └──────────────┘     └──────┬───────────┘              │
│                              │                           │
│                    ┌─────────┼─────────┐                │
│                    │         │         │                 │
│              ┌─────▼───┐ ┌──▼────┐ ┌──▼──────┐         │
│              │ MariaDB  │ │ ISB   │ │ Mailpit │         │
│              │ Port 3307│ │Client │ │ Port1025│         │
│              └──────────┘ └───────┘ └─────────┘         │
└─────────────────────────────────────────────────────────┘
```

The **ISB (Integrated Service Bridge)** client communicates with the Amadeus GDS via SOAP for PNR creation, status retrieval, and cancellation. In development mode, a dummy implementation generates mock PNRs.

## Backend Module Structure

The backend is a multi-module Maven project:

```
backend/
├── booking-api/             # DTOs (Java records with Jakarta validation)
│   └── com.lhsystems.booking.api.dto
│       ├── BookingRequestDTO     # flightId + PassengerDTO
│       ├── BookingResponseDTO    # bookingId, pnr, status, flight, passenger, cancellable
│       ├── FlightDTO             # Flight data with price and status
│       ├── PassengerDTO          # uNumber, name, email, phone
│       ├── PriceDTO              # amount + currency
│       ├── LoginRequestDTO       # username + password
│       ├── LoginResponseDTO      # JWT token + UserDTO
│       ├── UserDTO               # id, username, email
│       └── ErrorDTO              # error, message, timestamp, path
│
├── booking-core/            # Business logic
│   ├── com.lhsystems.booking.core.service
│   │   ├── AuthService           # Login, password verification
│   │   ├── BookingService        # Create, get, cancel bookings
│   │   ├── FlightService         # Search flights by direction + date range
│   │   ├── JwtService            # JWT generation, validation, claim extraction
│   │   ├── EmailService          # Thymeleaf HTML email sending
│   │   └── PnrStatusScheduler   # Hourly PNR status check via ISB
│   ├── com.lhsystems.booking.core.mapper
│   │   ├── BookingMapper         # Booking entity ↔ BookingResponseDTO
│   │   ├── FlightMapper          # Flight entity ↔ FlightDTO
│   │   └── UserMapper            # User entity ↔ UserDTO
│   ├── com.lhsystems.booking.core.isb
│   │   ├── IsbClient (interface) # GDS operations contract
│   │   ├── IsbClientDummy        # Mock implementation for dev
│   │   ├── IsbSoapClient         # Real SOAP implementation
│   │   ├── IsbConfig             # Configuration for client selection
│   │   └── FlightAvailability    # ISB flight search result
│   └── com.lhsystems.booking.core.exception
│       ├── BaseException               # Abstract base with HTTP status
│       ├── AuthenticationException     # 401
│       ├── BookingNotFoundException    # 404
│       ├── FlightNotFoundException     # 404
│       ├── NoSeatsAvailableException   # 409
│       ├── BookingAlreadyCancelledException # 409
│       ├── CancellationNotAllowedException  # 400
│       ├── EmailVerificationException       # 403
│       └── GdsException                     # 502
│
├── booking-persistence/     # Data layer
│   ├── com.lhsystems.booking.persistence.entity
│   │   ├── Booking               # JPA entity with embedded PassengerDetails
│   │   ├── BookingStatus (enum)  # CONFIRMED, PENDING, CANCELLED, REJECTED, FLIGHT_CANCELLED, FLIGHT_DELAYED
│   │   ├── Flight                # JPA entity with price and seat count
│   │   ├── FlightStatus (enum)  # AVAILABLE, SOLD_OUT, FLIGHT_CANCELLED, DELAYED
│   │   ├── PassengerDetails      # Embeddable passenger info
│   │   └── User                  # JPA entity for credentials
│   ├── com.lhsystems.booking.persistence.repository
│   │   ├── BookingRepository     # JPA repo + findByStatusIn()
│   │   ├── FlightRepository      # JPA repo + findByIdForUpdate() (pessimistic lock)
│   │   └── UserRepository        # JPA repo + findByUsername()
│   └── com.lhsystems.booking.persistence.configuration
│       └── JpaConfiguration      # JPA auditing, etc.
│
├── booking-web/             # Web layer (Spring Boot application)
│   ├── com.lhsystems.booking
│   │   └── BookingApplication    # @SpringBootApplication main class
│   ├── com.lhsystems.booking.web.controller
│   │   ├── AuthController        # POST /api/login
│   │   ├── BookingController     # POST /api/booking, GET /api/booking/{id}, POST /api/booking/{id}/cancel
│   │   └── FlightController      # GET /api/flights
│   ├── com.lhsystems.booking.web.configuration
│   │   ├── SecurityConfig        # Spring Security filter chain, endpoint rules
│   │   ├── JwtAuthFilter         # JWT token extraction and validation filter
│   │   └── CorsConfig            # CORS allowed origins
│   └── com.lhsystems.booking.web.exception
│       └── GlobalExceptionHandler  # @RestControllerAdvice error handling
│
└── booking-jacoco-report/   # Aggregated coverage report module
```

### Module Dependency Graph

```
booking-web
  └── booking-core
        ├── booking-api
        └── booking-persistence
```

## Frontend Structure

```
frontend/src/
├── api/                     # Orval-generated TanStack Query hooks + Zod schemas
├── features/
│   ├── auth/                # Login page, form, schema
│   ├── flight-search/       # Calendar view, direction toggle, flight cards
│   ├── flight-select/       # Date-specific flight list + list items
│   ├── passenger-data/      # Passenger form (with PhoneCountryCodeSelect), flight summary
│   ├── confirmation/        # Booking confirmation with PNR display
│   └── booking-status/      # Public status page, booking details, cancellation dialog
├── components/              # Shared components
│   ├── AppBar.tsx           # Header bar with title navigation + logout
│   ├── AppLayout.tsx        # Main layout wrapper
│   ├── BookingStepper.tsx   # Booking flow step indicator
│   ├── FlightDetailCard.tsx # Flight details card
│   ├── FlightTimeline.tsx   # Visual flight timeline
│   ├── PhoneCountryCodeSelect.tsx # Country code dropdown with flag icons
│   ├── ProtectedRoute.tsx   # Auth-guarded route wrapper
│   ├── SeatsBadge.tsx       # Color-coded available seats badge
│   ├── StatusBadge.tsx      # Booking/flight status chip
│   └── ...                  # AirlineLogo, LoadingOverlay, StyledDialog, etc.
├── context/                 # AuthContext, ThemeContext
├── hooks/                   # useAuth, custom hooks
├── lib/                     # Utility libraries (axios instance)
├── models/                  # TypeScript type definitions
├── provider/                # App-level providers
├── theme/                   # Netline UI theme configuration
├── consts/                  # Application constants (routes, countries, theme, UI)
└── utils/                   # Helper functions
```

## Data Flow

### Booking Creation

```
Frontend                    Backend                     Database / ISB
   │                           │                           │
   │  POST /api/booking        │                           │
   │──────────────────────────▶│                           │
   │                           │  findByIdForUpdate()      │
   │                           │──────────────────────────▶│ (pessimistic lock)
   │                           │◀──── Flight entity ───────│
   │                           │                           │
   │                           │  Check available seats    │
   │                           │  Create PNR (ISB/GDS) ───▶│ ISB SOAP
   │                           │◀──── PNR record locator ──│
   │                           │                           │
   │                           │  Save booking ───────────▶│ DB
   │                           │  Decrement flight seats ─▶│ DB
   │                           │  Send confirmation email  │
   │                           │                           │
   │◀── BookingResponseDTO ────│                           │
```

### PNR Status Check (Scheduled)

The `PnrStatusScheduler` runs hourly (configurable via `pnr.check.interval-ms`) and queries ISB for status updates on all CONFIRMED/PENDING bookings. When a status changes, the booking is updated and a notification email is sent to the passenger.

```
PnrStatusScheduler              ISB Client           Database
   │                               │                    │
   │  Find active bookings         │                    │
   │───────────────────────────────────────────────────▶│
   │◀──── List<Booking> ───────────────────────────────│
   │                               │                    │
   │  For each booking:            │                    │
   │  retrievePnrStatus(pnr) ────▶│                    │
   │◀──── status string ─────────│                    │
   │                               │                    │
   │  If status changed:           │                    │
   │  Update booking ─────────────────────────────────▶│
   │  Send status change email     │                    │
```
