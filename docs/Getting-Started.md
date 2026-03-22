# Getting Started

## Prerequisites

| Tool             | Version | Required For      |
| ---------------- | ------- | ----------------- |
| Docker & Compose | Latest  | All (quickest)    |
| JDK              | 21+     | Backend dev       |
| Maven            | 3.9+    | Backend dev (or use `./mvnw`) |
| Node.js          | 22+     | Frontend dev      |
| npm              | 10+     | Frontend dev      |

## Docker Compose (Quickest)

Start the full stack with one command:

```bash
cd MUC-DEB-Booking-tool
docker compose up -d
```

This starts:

| Service    | URL                                  |
| ---------- | ------------------------------------ |
| Frontend   | http://localhost:3000                 |
| Backend    | http://localhost:8080                 |
| Swagger UI | http://localhost:8080/swagger-ui.html |
| MariaDB    | `localhost:3307`                     |

**Login credentials:** `admin` / `admin`

To also start Mailpit (email preview):

```bash
docker compose --profile dev up -d
```

Mailpit UI: http://localhost:8025

## Local Development

### 1. Start the Database

```bash
docker compose up -d database
```

MariaDB will be available on `localhost:3307` (mapped from container port 3306).

### 2. Start the Backend

```bash
cd backend
./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=dev
```

The backend starts on http://localhost:8080 with:
- Swagger UI at http://localhost:8080/swagger-ui.html
- Actuator health at http://localhost:8080/actuator/health
- All actuator endpoints exposed (dev profile)

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend starts on http://localhost:3000 and proxies `/api` requests to the backend.

## Booking Flow

1. **Login** → Enter admin credentials (`admin` / `admin`)
2. **Search** → View flight availability on the calendar, toggle MUC→DEB or DEB→MUC direction
3. **Select** → Click a date, pick a flight from the list
4. **Book** → Enter passenger details (U-Number, first name, last name, email, phone)
5. **Confirm** → See PNR record locator and booking confirmation
6. **Status** → Share the public booking link (no auth required) or cancel via email verification

## Stopping Services

```bash
# Stop all containers
docker compose down

# Stop and remove volumes (database data)
docker compose down -v
```

## GitHub Codespaces

The project includes a `.devcontainer/` configuration for instant cloud-based development:

1. Open the repository in GitHub Codespaces
2. The dev container auto-configures: Java 21 + Node 22 + Docker-in-Docker
3. MariaDB and Mailpit start automatically via Docker Compose
4. `post-create.sh` installs frontend dependencies and builds the backend
5. Start the backend: `cd backend && ./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=codespaces`
6. Start the frontend: `cd frontend && npm run dev`

The Codespaces ports are automatically forwarded. The `codespaces` Spring profile configures CORS to allow `https://*.app.github.dev` origins.
