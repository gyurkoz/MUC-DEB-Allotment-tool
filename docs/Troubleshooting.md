# Troubleshooting

## Common Issues

### Backend won't start — "JWT_SECRET" error

**Symptom:** Application fails to start with missing `jwt.secret` property.

**Fix:** The `JWT_SECRET` environment variable is required. Use the `dev` profile which provides a built-in dev secret:

```bash
./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=dev
```

Or set it explicitly:

```bash
JWT_SECRET=my-long-secret-at-least-48-characters-for-hs384 ./mvnw spring-boot:run -pl booking-web
```

---

### Database connection refused on port 3306

**Symptom:** `Connection refused` when backend tries to connect to MariaDB.

**Fix:** The Docker Compose database is exposed on port **3307** (not 3306). The `dev` profile is pre-configured for `localhost:3307`:

```bash
# Start database first
docker compose up -d database

# Then start backend with dev profile
./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=dev
```

---

### Frontend shows "Network Error" on API calls

**Symptom:** Axios errors when calling backend from frontend dev server.

**Fix:** Ensure the backend is running on http://localhost:8080. The Vite dev server proxies `/api` requests to the backend. Check:
1. Backend is running: `curl http://localhost:8080/actuator/health`
2. CORS is configured for `localhost:3000` and `localhost:5173`
3. For Codespaces, the `codespaces` profile adds `https://*.app.github.dev` origin patterns

---

### `npm install` fails — npm registry auth

**Symptom:** 401 errors during `npm install` for `@lsy-netline` packages.

**Fix:** Set `NPM_AUTH_TOKEN` for the private npm registry:

```bash
NPM_AUTH_TOKEN=your-token npm install
```

Or add to `.npmrc`:

```
//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}
```

---

### Orval generation fails — openapi.yml not found

**Symptom:** `npm run api:generate` fails to find the OpenAPI spec.

**Fix:** Ensure `openapi.yml` exists in the project root. The Orval config (`frontend/orval.config.ts`) expects it at `../openapi.yml` relative to the frontend directory.

---

### JaCoCo coverage check fails

**Symptom:** Build fails with "Coverage checks have not been met" during `./mvnw verify`.

**Fix:** The project requires 100% line/method/class coverage and 85% branch coverage per class. Add tests for uncovered code. Check the coverage report:

```bash
# After running tests
open booking-core/target/site/jacoco-unit-test-report/index.html
```

**Excluded classes** (don't need tests): `BookingApplication`, `JpaConfiguration`, `core.exception.*`, `IsbSoapClient`

---

### Checkstyle violations

**Symptom:** Build fails during `validate` phase with Checkstyle errors.

**Fix:** Follow the coding style defined in `backend/.settings/checkstyle.xml`. Common issues:
- Missing Javadoc on public methods
- Line length exceeds limit
- Import order incorrect
- Missing whitespace around operators

Run standalone check: `./mvnw checkstyle:check`

---

### Docker Compose build fails — proxy errors

**Symptom:** Maven or npm can't download dependencies during Docker build.

**Fix:** The Dockerfiles are configured for the corporate proxy. If you're not behind the proxy, override:

```bash
HTTP_PROXY="" HTTPS_PROXY="" docker compose build
```

---

### Mailpit not starting

**Symptom:** Mailpit container doesn't start with `docker compose up -d`.

**Fix:** Mailpit is behind a Docker Compose profile. Start with:

```bash
docker compose --profile dev up -d
```

---

### E2E tests fail — backend not running

**Symptom:** Playwright tests fail with connection errors.

**Fix:** E2E tests require both database and backend running:

```bash
# Terminal 1
docker compose up -d database

# Terminal 2
cd backend
./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=dev -DskipTests

# Terminal 3 (after backend starts)
cd frontend
npm run test:e2e
```

Playwright starts the frontend dev server automatically.

---

### Booking cancellation returns 400 — "Cannot cancel within 24 hours"

**Symptom:** Cancellation fails even though the flight hasn't departed.

**Explanation:** Cancellations must be at least **24 hours before departure**. This is a business rule, not a bug. If the departure time is within 24 hours from now, cancellation is blocked.

---

### CORS errors in GitHub Codespaces

**Symptom:** API calls from the Codespaces port-forwarded frontend are blocked by CORS.

**Fix:** Ensure the backend is running with the `codespaces` profile (`SPRING_PROFILES_ACTIVE=codespaces`). This profile adds `https://*.app.github.dev` as an allowed origin pattern via `cors.allowed-origin-patterns`. The `.devcontainer/devcontainer.json` sets this automatically.

---

### Flag images not loading on nested routes

**Symptom:** Country flag images in the phone country code select are broken (404) on pages like `/book/LH1234_20260322`.

**Fix:** Flag paths must be absolute (`/assets/flags/xx.svg`), not relative (`./assets/flags/xx.svg`). If using relative paths, the browser resolves them relative to the current URL path segment (e.g., `/book/LH1234_20260322/assets/flags/xx.svg` — 404).

---

## Useful URLs (Local Development)

| Service         | URL |
| --------------- | --- |
| Frontend        | http://localhost:3000 |
| Backend API     | http://localhost:8080 |
| Swagger UI      | http://localhost:8080/swagger-ui.html |
| OpenAPI JSON    | http://localhost:8080/api-docs |
| Actuator Health | http://localhost:8080/actuator/health |
| Mailpit UI      | http://localhost:8025 |
| MariaDB         | `localhost:3307` (user: `booking`, password: `booking`) |
