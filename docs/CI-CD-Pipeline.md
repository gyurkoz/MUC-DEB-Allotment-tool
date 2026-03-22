# CI/CD Pipeline

## Overview

The project uses **GitHub Actions** for continuous integration, deployment, and documentation sync. Workflows are defined in `.github/workflows/`.

## Workflows

| Workflow | File | Trigger | Purpose |
| -------- | ---- | ------- | ------- |
| CI | `ci.yml` | PR to `main`/`develop` | Full quality gate (lint, tests, build, Docker) |
| GitHub Pages | `github-pages.yml` | Push to `develop` | Deploy frontend to GitHub Pages |
| Playwright E2E | `playwright.yml` | Push/PR to `main`/`develop` | Full-stack E2E with database |
| Docs → Wiki Sync | `sync-docs-to-wiki.yml` | Push to `main`/`develop` (docs/** changed) | Sync `docs/` to GitHub Wiki |

## CI Workflow (`ci.yml`)

### Trigger

| Event          | Branches |
| -------------- | -------- |
| `pull_request` | `main`, `develop` |

### Jobs

#### 1. Frontend (`frontend`)

**Runner:** `ubuntu-latest` (timeout: 30 min)
**Working directory:** `frontend/`

| Step | Command |
| ---- | ------- |
| Checkout | `actions/checkout@v4` |
| Setup Node.js 22 | `actions/setup-node@v4` with npm cache |
| Install dependencies | `npm ci` (includes Orval API generation via `postinstall`) |
| TypeScript check | `npm run typecheck` |
| Lint | `npm run lint` |
| Unit tests + coverage | `npm run test:coverage` |
| Build | `npm run build` |
| Upload test results | On failure — test results + coverage |
| Upload coverage report | Always — coverage artifacts |
| Comment coverage on PR | Adds/updates coverage table comment |

#### 2. Backend (`backend`)

**Runner:** `ubuntu-latest` (timeout: 30 min)
**Working directory:** `backend/`

| Step | Command |
| ---- | ------- |
| Checkout | `actions/checkout@v4` |
| Setup JDK 21 (Temurin) | `actions/setup-java@v4` with Maven cache |
| Full verify | `./mvnw verify -B -V -ntp` |
| Upload JaCoCo reports | Always — coverage artifacts |

The `verify` phase runs:
- Checkstyle code style check
- SpotBugs + FindSecBugs analysis
- Unit tests (Surefire)
- JaCoCo coverage check (100% line/method/class, 85% branch)

#### 3. Docker Integration (`docker`)

**Runner:** `ubuntu-latest` (timeout: 15 min)
**Depends on:** `frontend` + `backend` (runs only after both pass)

| Step | Command |
| ---- | ------- |
| Checkout | `actions/checkout@v4` |
| Build images | `docker compose build` |
| Start stack | `docker compose up -d` (with CI JWT secret) |
| Health check | Poll `http://localhost:8080/actuator/health` (up to 30 retries) |
| Verify frontend | `curl http://localhost:3000` — expects HTTP 200 |
| Teardown | `docker compose down` (always) |

### Pipeline Flow

```
┌──────────────────┐     ┌──────────────────┐
│   Frontend       │     │   Backend        │
│                  │     │                  │
│ npm ci           │     │ mvnw verify      │
│ typecheck        │     │ (checkstyle,     │
│ lint             │     │  spotbugs,       │
│ test:coverage    │     │  tests,          │
│ build            │     │  jacoco)         │
│ coverage comment │     │                  │
└────────┬─────────┘     └────────┬─────────┘
         │                        │
         └───────────┬────────────┘
                     ▼
          ┌────────────────────┐
          │  Docker Integration│
          │                    │
          │  compose build     │
          │  compose up        │
          │  backend health    │
          │  frontend verify   │
          │  compose down      │
          └────────────────────┘
```

## Playwright E2E Workflow (`playwright.yml`)

Full-stack E2E testing with real database:

1. Starts MariaDB via Docker (health-checked)
2. Builds and starts the Spring Boot backend (dev profile)
3. Runs Playwright tests against the full stack
4. Supports manual dispatch with test suite selection (`all`, `booking-flow`, or custom grep pattern)

## GitHub Pages Workflow (`github-pages.yml`)

Deploys the frontend to GitHub Pages on push to `develop`:

1. Builds frontend with Vite
2. Deploys to GitHub Pages via `actions/deploy-pages`

## Docs → Wiki Sync (`sync-docs-to-wiki.yml`)

Automatically syncs `docs/*.md` files to the GitHub Wiki when documentation changes are pushed to `main` or `develop`.

## Required Checks

For a PR to be mergeable, all three CI jobs must pass:

1. Frontend compiles, passes lint, and all unit tests with coverage
2. Backend passes all quality checks and unit tests with 100% coverage
3. Docker stack builds and starts successfully with healthy backend and frontend
