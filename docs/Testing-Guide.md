# Testing Guide

## Overview

| Layer        | Framework           | Location | Naming |
| ------------ | ------------------- | -------- | ------ |
| Backend Unit | JUnit 5 + Mockito   | `booking-core/src/test/`, `booking-web/src/test/` | `*Test.java` |
| Backend Integration | Testcontainers / H2 | `booking-web/src/test/` | `*IT.java` |
| Frontend Unit | Vitest + Testing Library | `frontend/__tests__/unit/` | `*.test.ts(x)` |
| Frontend E2E | Playwright          | `frontend/__tests__/e2e/` | `*.spec.ts` |

## Backend Unit Tests

### Location and Structure

```
booking-core/src/test/java/com/lhsystems/booking/core/
├── service/
│   ├── AuthServiceTest.java
│   ├── BookingServiceTest.java
│   ├── EmailServiceTest.java
│   ├── FlightServiceTest.java
│   ├── JwtServiceTest.java
│   └── PnrStatusSchedulerTest.java
├── mapper/
│   ├── BookingMapperTest.java
│   ├── FlightMapperTest.java
│   └── UserMapperTest.java
├── isb/
│   ├── FlightAvailabilityTest.java
│   ├── IsbClientDummyTest.java
│   ├── IsbConfigTest.java
│   └── IsbSoapClientTest.java
└── util/
    ├── BookingUtil.java          # Test fixtures
    └── FlightUtil.java           # Test fixtures

booking-web/src/test/java/com/lhsystems/booking/
├── BaseIntegrationTest.java      # Shared integration test base class
└── web/
    ├── controller/
    │   ├── AuthControllerTest.java
    │   ├── BookingControllerTest.java
    │   ├── BookingFlowIT.java        # Integration test
    │   └── FlightControllerTest.java
    ├── configuration/
    │   └── CorsConfigTest.java
    └── exception/
        └── GlobalExceptionHandlerTest.java
```

### Running Backend Tests

```bash
cd backend

# Run all unit tests
./mvnw test

# Run a specific test class
./mvnw test -pl booking-core -Dtest=BookingServiceTest

# Run with verbose output
./mvnw test -B -V -ntp

# Full verify (tests + JaCoCo + Checkstyle + SpotBugs)
./mvnw verify -B -V -ntp
```

### Coverage Requirements (JaCoCo)

| Counter    | Minimum | Scope |
| ---------- | ------- | ----- |
| LINE       | 100%    | Per class |
| METHOD     | 100%    | Per class |
| CLASS      | 100%    | Per class |
| BRANCH     | 85%     | Per class |
| COMPLEXITY | Max 30  | Per class |

**Excluded from coverage:**
- `BookingApplication` (main class)
- `JpaConfiguration`
- `core.exception.*` (exception classes)
- `IsbSoapClient` (SOAP client)

### Test Conventions

- Use **constructor injection** with Mockito `@Mock` and `@InjectMocks`
- Follow **Arrange-Act-Assert** pattern
- Test fixture classes (`*Util.java`) provide reusable test data
- **Test naming**: Descriptive method names (e.g. `createBooking_shouldThrow_whenNoSeatsAvailable`)

## Backend Integration Tests

### Location

```
booking-web/src/test/java/com/lhsystems/booking/web/controller/
└── BookingFlowIT.java
```

### Test Profile

Integration tests use the `test` profile which configures:
- **H2 in-memory database** with MariaDB compatibility mode
- **Liquibase disabled** — schema created via `ddl-auto=create-drop`
- **Separate JWT secret** for test isolation

```properties
# application-test.properties
spring.datasource.url=jdbc:h2:mem:testdb;MODE=MariaDB
spring.jpa.hibernate.ddl-auto=create-drop
spring.liquibase.enabled=false
```

### Running Integration Tests

```bash
cd backend

# Run integration tests only
./mvnw failsafe:integration-test

# Run all (unit + integration)
./mvnw verify
```

## Frontend Unit Tests

### Framework

- **Vitest v4** with jsdom environment
- **Testing Library React** 16.3 for React component testing
- **@testing-library/user-event** 14.6 for user interaction simulation

### Test Files

```
frontend/__tests__/unit/
├── components/
│   └── StatusBadge.test.tsx
└── features/
    ├── auth/
    │   └── LoginForm.test.tsx
    ├── booking-status/
    │   └── BookingStatusPage.test.tsx
    ├── confirmation/
    │   └── BookingConfirmation.test.tsx
    ├── flight-search/
    │   ├── DirectionSelector.test.tsx
    │   └── FlightCard.test.tsx
    ├── flight-select/
    │   └── FlightList.test.tsx
    └── passenger-data/
        └── PassengerForm.test.tsx
```

### Running Frontend Unit Tests

```bash
cd frontend

# Run all unit tests
npm run test

# Watch mode
npm run test:watch

# With coverage report
npm run test:coverage
```

## Frontend E2E Tests

### Framework

- **Playwright v1.57** with Chromium

### Prerequisites

The E2E tests require both frontend and backend running:

```bash
# Start database
docker compose up -d database

# Start backend
cd backend
./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=dev -DskipTests &

# Playwright starts the frontend dev server automatically
```

### Playwright Configuration

The Playwright config (`frontend/playwright.config.ts`) automatically starts the Vite dev server:

```typescript
webServer: {
  command: 'npm run dev',
  port: 3000,
  reuseExistingServer: !process.env.CI,
}
```

### Running E2E Tests

```bash
cd frontend

# Run all E2E tests (headless)
npm run test:e2e

# Run with visible browser
npm run test:e2e:headed

# Run with Playwright interactive UI
npm run test:e2e:ui
```

### Test Files

```
frontend/__tests__/e2e/
└── booking-flow.spec.ts    # Full booking flow E2E (both MUC-DEB and DEB-MUC)
```

### Test Scenarios

**Booking Flow (Both Directions):**
1. Login with admin credentials
2. Navigate to flight selection for a specific date
3. Select the first available flight
4. Fill passenger details (U-Number, name, email, phone)
5. Submit booking
6. Verify confirmation page shows a 6-character PNR
7. Verify public booking status page loads
8. Cancel the booking via email verification

**Login Tests:**
- Invalid credentials show error message
- Successful login redirects to search page

**Flight Search Tests:**
- Direction selector and calendar are visible
- Direction toggle works between MUC-DEB and DEB-MUC

### Test Results

Playwright stores test results in `frontend/test-results/`.

## CI Test Execution

Tests run automatically in the [CI/CD pipeline](CI-CD-Pipeline):
- **Frontend job:** `npm run typecheck` → `npm run lint` → `npm run test:coverage` → `npm run build`
- **Backend job:** `./mvnw verify` (includes unit tests, JaCoCo, Checkstyle, SpotBugs)
- **Playwright E2E** (separate workflow): Full-stack tests with a real MariaDB container, triggered on push/PR to `main`/`develop`
