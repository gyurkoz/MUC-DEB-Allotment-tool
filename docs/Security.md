# Security

## Authentication Model

The application uses **JWT (JSON Web Token)** for authentication with stateless session management.

### JWT Configuration

| Property        | Value | Description |
| --------------- | ----- | ----------- |
| Algorithm       | HS384 | HMAC-SHA384 signing |
| Expiration      | 24h   | Token validity period (86,400,000 ms) |
| Library         | JJWT 0.12.6 | `io.jsonwebtoken` |
| Secret          | `jwt.secret` property | Minimum 48 characters for HS384 |

### Authentication Flow

```
Client                      Backend
   │                           │
   │  POST /api/login          │
   │  { username, password }   │
   │──────────────────────────▶│
   │                           │  Verify BCrypt password hash
   │◀── { token, user } ──────│
   │                           │
   │  GET /api/booking         │
   │  Authorization: Bearer <token>
   │──────────────────────────▶│
   │                           │  JwtAuthFilter extracts & validates token
   │                           │  Sets SecurityContext authentication
   │◀── Response ──────────────│
```

## Endpoint Authorization

| Endpoint                        | Method | Auth Required | Description |
| ------------------------------- | ------ | ------------- | ----------- |
| `/api/login`                    | POST   | No            | Authentication |
| `/api/flights`                  | GET    | No            | Public flight search |
| `/api/booking`                  | POST   | **Yes** (Bearer) | Create booking |
| `/api/booking/{bookingId}`      | GET    | No            | Public status (UUID as secret) |
| `/api/booking/{bookingId}/cancel` | POST | No            | Email verification instead |
| `/actuator/**`                  | GET    | No            | Health/metrics endpoints |
| `/swagger-ui/**`                | GET    | No            | API documentation |
| `/api-docs/**`                  | GET    | No            | OpenAPI JSON |
| All other endpoints             | *      | **Yes**       | Default: authenticated |

### Public Endpoint Rationale

- **Flight search** (`GET /api/flights`): Allows unauthenticated flight browsing
- **Booking status** (`GET /api/booking/{id}`): The UUID booking ID is an unguessable secret, allowing passengers to check status via a shared link without authentication
- **Booking cancellation** (`POST /api/booking/{id}/cancel`): Uses email verification (must match the passenger's email) instead of JWT auth, enabling cancellation via emailed links

## CORS Configuration

Configured in `CorsConfig.java`:

| Setting                  | Value |
| ------------------------ | ----- |
| Allowed Origins          | `http://localhost:3000`, `http://localhost:5173` (configurable via `cors.allowed-origins`) |
| Allowed Origin Patterns  | Configurable via `cors.allowed-origin-patterns` (supports wildcards like `https://*.app.github.dev`) |
| Allowed Methods          | GET, POST, PUT, DELETE, OPTIONS |
| Allowed Headers          | Authorization, Content-Type, Accept |
| Allow Credentials        | true |

The `codespaces` profile adds `https://*.app.github.dev` as an allowed origin pattern for GitHub Codespaces port-forwarded URLs.

## Password Hashing

User passwords are hashed with **BCrypt** (`BCryptPasswordEncoder`). The admin seed user's password is pre-hashed in the Liquibase changelog.

## Security Filters

The `JwtAuthFilter` runs before `UsernamePasswordAuthenticationFilter` in the Spring Security filter chain:

1. Extracts JWT from `Authorization: Bearer <token>` header
2. Validates token signature and expiration via `JwtService`
3. Sets `UsernamePasswordAuthenticationToken` in the `SecurityContext`
4. If no valid token is present, the request proceeds unauthenticated

## Session Management

Sessions are fully **stateless** (`SessionCreationPolicy.STATELESS`). No server-side session store is used. CSRF protection is disabled since the API is stateless and uses JWT.
