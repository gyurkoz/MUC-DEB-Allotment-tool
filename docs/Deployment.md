# Deployment

## Docker Compose (Recommended)

The full stack is orchestrated via `docker-compose.yml`:

```bash
# Start all services
docker compose up -d

# Start with Mailpit for email preview
docker compose --profile dev up -d

# Stop all services
docker compose down

# Stop and remove volumes
docker compose down -v
```

### Services

| Service    | Image                | Internal Port | External Port | Description |
| ---------- | -------------------- | ------------- | ------------- | ----------- |
| `frontend` | Custom (Node 22 + nginx) | 80       | **3000**      | React SPA  |
| `backend`  | Custom (Temurin 21)  | 8080          | **8080**      | Spring Boot API |
| `database` | `mariadb:latest`     | 3306          | **3307**      | MariaDB database |
| `mailpit`  | `axllent/mailpit:latest` | 1025/8025 | **1025/8025** | Dev mail server (requires `--profile dev`) |

### Service Dependencies

```
frontend → backend (waits for healthy)
backend  → database (waits for healthy)
```

### Health Checks

- **Backend:** `wget --spider http://localhost:8080/actuator/health` (30s start period, 10s interval)
- **Database:** `mariadb-admin ping -h localhost` (10s start period, 10s interval)

## Environment Variables

### Backend

| Variable                    | Default / Required     | Description |
| --------------------------- | ---------------------- | ----------- |
| `SPRING_PROFILES_ACTIVE`    | `docker`               | Active Spring profile |
| `SPRING_DATASOURCE_URL`     | —                      | JDBC connection URL |
| `SPRING_DATASOURCE_USERNAME`| `booking`              | Database username |
| `SPRING_DATASOURCE_PASSWORD`| `booking`              | Database password |
| `JWT_SECRET`                | **Required** (min 48 chars) | JWT signing secret (HS384) |
| `MAIL_HOST`                 | `mailpit`              | SMTP host |
| `MAIL_PORT`                 | `1025`                 | SMTP port |
| `MAIL_USERNAME`             | *(empty)*              | SMTP username |
| `MAIL_PASSWORD`             | *(empty)*              | SMTP password |
| `ISB_RESERVATION_ENDPOINT`  | Test URL               | ISB Reservation SOAP endpoint |
| `ISB_AUTH_ENDPOINT`         | Test URL               | ISB Auth SOAP endpoint |

### Frontend Build Args

| Variable         | Default      | Description |
| ---------------- | ------------ | ----------- |
| `NPM_AUTH_TOKEN` | —            | Private npm registry auth token |
| `DEFAULT_THEME`  | `lufthansa`  | Customer theme (default/lufthansa) |

### Frontend Runtime

| Variable            | Default              | Description |
| ------------------- | -------------------- | ----------- |
| `VITE_API_BASE_URL` | *(empty, uses proxy)* | Backend API base URL |

### Database

| Variable                | Value          | Description |
| ----------------------- | -------------- | ----------- |
| `MARIADB_ROOT_PASSWORD` | `rootpassword` | Root password |
| `MARIADB_DATABASE`      | `booking`      | Database name |
| `MARIADB_USER`          | `booking`      | Application user |
| `MARIADB_PASSWORD`      | `booking`      | Application password |

### Override with .env File

Create a `.env` file in the project root to override defaults:

```bash
JWT_SECRET=my-production-jwt-secret-at-least-48-characters-long
MAIL_HOST=smtp.example.com
MAIL_PORT=587
NPM_AUTH_TOKEN=your-npm-token
```

Or pass inline:

```bash
JWT_SECRET=my-secret... docker compose up -d
```

## Spring Profiles

| Profile       | Database                          | ISB Client | Liquibase | Mail Host  |
| ------------- | --------------------------------- | ---------- | --------- | ---------- |
| `default`     | MariaDB (production)              | Real SOAP  | Enabled   | Configured |
| `dev`         | MariaDB (`localhost:3307`)        | Dummy      | Enabled (`dev` context) | `localhost:1025` |
| `docker`      | MariaDB (`database:3306`)         | Dummy      | Enabled (`docker` context) | `mailpit:1025` |
| `codespaces`  | MariaDB (`database:3306`)         | Dummy      | Enabled (`dev` context)    | `mailpit:1025` |
| `test`        | H2 in-memory (MariaDB mode)       | —          | Disabled  | `localhost:1025` |

## GitHub Codespaces

The project includes a `.devcontainer/` configuration for development in GitHub Codespaces:

| File | Purpose |
| ---- | ------- |
| `.devcontainer/devcontainer.json` | Dev container with Java 21 + Node 22 + Docker-in-Docker |
| `.devcontainer/docker-compose.yml` | MariaDB + Mailpit services for Codespaces |
| `.devcontainer/post-create.sh` | Bootstrap script (npm ci + mvnw package) |

**Codespaces profile features:**
- CORS allows `https://*.app.github.dev` origin patterns
- Port forwarding: frontend (3000), backend (8080), database (3307), Mailpit (8025)
- Requires `NPM_AUTH_TOKEN` Codespace secret for private npm registry

See the `codespaces` Spring profile in `application-codespaces.properties`.

## Docker Images

### Backend Dockerfile

Multi-stage build:
1. **Build stage** (`eclipse-temurin:21-jdk-alpine`): Runs `mvnw package` (skips tests and quality checks)
2. **Runtime stage** (`eclipse-temurin:21-jre-alpine`): Copies the executable JAR, runs as non-root `appuser`

### Frontend Dockerfile

Multi-stage build:
1. **Build stage** (`node:22-alpine`): Installs dependencies, generates API hooks, builds with Vite
2. **Serve stage** (`nginx:alpine`): Serves static files with custom nginx config (API proxy)

## Data Persistence

Database data is stored in a Docker named volume: `mariadb-data`

- Survives `docker compose down`
- Destroyed by `docker compose down -v`

## Proxy Configuration

The Docker build supports HTTP/HTTPS proxy via build args:

| Build Arg     | Default |
| ------------- | ------- |
| `HTTP_PROXY`  | `http://proxy.lsy.bud.dlh.de:3128` |
| `HTTPS_PROXY` | `http://proxy.lsy.bud.dlh.de:3128` |
| `NO_PROXY`    | `localhost,127.0.0.1` |
