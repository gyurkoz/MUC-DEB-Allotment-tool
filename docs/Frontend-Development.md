# Frontend Development

## Tech Stack

| Library               | Version | Purpose |
| --------------------- | ------- | ------- |
| React                 | 19.2    | UI framework (with React Compiler) |
| TypeScript            | 5.9     | Type safety |
| Vite                  | 7.3     | Build tool & dev server |
| Netline UI            | 8.0     | Component library (Material UI v8-based) |
| MUI Icons Material    | 7.3     | Icon library |
| TanStack Query        | 5.90    | Server state management |
| Orval                 | 7.13    | API hook generation from OpenAPI |
| React Hook Form       | 7.69    | Form state management |
| Zod                   | 4.2     | Schema validation |
| FullCalendar          | 6.1     | Flight calendar view |
| React Router DOM      | 7.11    | Client-side routing |
| Axios                 | 1.13    | HTTP client |

### Dev Dependencies

| Library               | Version | Purpose |
| --------------------- | ------- | ------- |
| Vitest                | 4.0     | Unit testing |
| Playwright            | 1.57    | E2E testing |
| Testing Library React | 16.3    | React component testing |
| Testing Library User Event | 14.6 | User interaction simulation |
| ESLint                | 9.39    | Linting |
| Prettier              | 3.7     | Code formatting |

## Project Structure

```
frontend/
├── src/
│   ├── api/                    # Orval-generated TanStack Query hooks + Zod schemas
│   ├── features/               # Feature modules (page-level components)
│   │   ├── auth/               # Login page + form + schema
│   │   ├── flight-search/      # Calendar view, direction toggle, flight cards
│   │   ├── flight-select/      # Flight list + list items for a selected date
│   │   ├── passenger-data/     # Passenger form, flight summary, schema
│   │   ├── confirmation/       # Booking confirmation with PNR display
│   │   └── booking-status/     # Public status page, booking details, cancellation dialog
│   ├── components/             # Shared components
│   │   ├── AirlineLogo.tsx     # Airline logo image
│   │   ├── AppBar.tsx          # App header bar with navigation + logout
│   │   ├── AppLayout.tsx       # Main layout wrapper
│   │   ├── AppTitle.tsx        # Application title component
│   │   ├── BaseFooterBar.tsx   # Footer bar for page actions
│   │   ├── BookingStepper.tsx  # Booking flow step indicator
│   │   ├── FlightDetailCard.tsx # Flight details card
│   │   ├── FlightScheduleRow.tsx # Flight schedule row
│   │   ├── FlightTimeline.tsx  # Visual flight timeline
│   │   ├── LoadingOverlay.tsx  # Loading spinner overlay
│   │   ├── PhoneCountryCodeSelect.tsx # Country code dropdown with flags
│   │   ├── ProtectedRoute.tsx  # Auth-guarded route wrapper
│   │   ├── SeatsBadge.tsx      # Color-coded available seats badge
│   │   ├── StatusBadge.tsx     # Booking/flight status chip
│   │   ├── StopoverDetailDialog.tsx # Stopover details dialog
│   │   ├── StopsIndicator.tsx  # Visual stops indicator
│   │   ├── StyledDialog.tsx    # Themed dialog wrapper
│   │   └── Timeline/          # Timeline sub-components
│   ├── context/                # React contexts (AuthContext, ThemeContext)
│   ├── hooks/                  # Custom hooks (useAuth)
│   ├── lib/                    # Library wrappers (axios instance)
│   ├── models/                 # TypeScript type definitions
│   ├── provider/               # App-level providers
│   ├── theme/                  # Netline UI theme configuration
│   ├── consts/                 # Application constants
│   │   ├── countries.consts.ts # Country data (ISO codes, names, phone prefixes, flag paths)
│   │   ├── routes.ts           # Route path constants
│   │   ├── theme.consts.ts     # Theme constants
│   │   ├── themeMode.ts        # Theme mode definitions
│   │   └── ui.consts.ts        # UI constants (flag styles, autocomplete props)
│   ├── utils/                  # Helper functions
│   ├── App.tsx                 # Root component with routing
│   └── main.tsx                # Application entry point
├── __tests__/
│   ├── unit/                   # Vitest unit tests
│   └── e2e/                    # Playwright E2E tests
├── customer-config/            # Customer-specific theming
│   ├── config.schema.json      # Theme config JSON schema
│   ├── default/                # Default theme assets
│   └── lufthansa/              # Lufthansa-branded theme assets
├── public/                     # Static assets
│   ├── assets/flags/           # 256 country flag SVGs
│   └── fonts/                  # Custom fonts
├── orval.config.ts             # Orval code generation config
├── vite.config.ts              # Vite build config
├── vitest.config.ts            # Vitest test config
├── playwright.config.ts        # Playwright E2E config
├── tsconfig.json               # TypeScript config
└── eslint.config.js            # ESLint flat config
```

## Development Commands

```bash
cd frontend

# Install dependencies (also runs api:generate via postinstall)
npm install

# Start dev server (http://localhost:3000, proxies /api to backend)
npm run dev

# Run unit tests
npm run test

# Run unit tests in watch mode
npm run test:watch

# Run unit tests with coverage
npm run test:coverage

# Run E2E tests (headless)
npm run test:e2e

# Run E2E tests with visible browser
npm run test:e2e:headed

# Run E2E tests with Playwright UI
npm run test:e2e:ui

# TypeScript type check
npm run typecheck

# ESLint check
npm run lint

# ESLint auto-fix
npm run lint:fix

# Full CI check (typecheck + lint + test:coverage + build + e2e)
npm run ci:full

# Build for production
npm run build

# Preview production build
npm run preview

# Regenerate API hooks from OpenAPI spec
npm run api:generate
```

## API Hook Generation (Orval)

The frontend uses [Orval](https://orval.dev/) to generate TanStack Query hooks and Zod validation schemas from the `openapi.yml` specification.

**Configuration:** `orval.config.ts`

**Generated output:** `src/api/`

**Workflow:**
1. Backend team updates `openapi.yml`
2. Run `npm run api:generate` (or `npm install` which triggers it via `postinstall`)
3. Generated hooks are immediately usable in React components

**Example usage:**

```typescript
import { useGetFlights } from '../api/generated';

function FlightList() {
  const { data: flights } = useGetFlights({
    direction: 'MUC-DEB',
    dateFrom: '2026-03-22',
    dateTo: '2026-03-28',
  });
  // ...
}
```

## Customer Theming

The application supports customer-specific theming via `customer-config/`:

- **default** — Default theme
- **lufthansa** — Lufthansa-branded theme

The active theme is set via the `DEFAULT_THEME` environment variable (build-time) or can be toggled at runtime via `ThemeContext`.

## Docker Build

```dockerfile
FROM node:22-alpine AS build
# Installs dependencies, runs Orval generation, builds with Vite
FROM nginx:alpine
# Serves built SPA with custom nginx.conf
```

The frontend Docker image:
- Uses Node.js 22 for the build stage
- Requires `NPM_AUTH_TOKEN` build arg for private npm registry access
- Accepts `DEFAULT_THEME` build arg (defaults to `lufthansa`)
- Serves the static SPA via nginx on port 80
- nginx proxies `/api` requests to the backend container
