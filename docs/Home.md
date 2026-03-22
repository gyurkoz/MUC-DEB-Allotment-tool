# MUC–DEB Allotment Tool

Welcome to the **MUC–DEB Allotment Tool** documentation — a flight booking application for Munich (MUC) ↔ Debrecen (DEB) routes.

## Overview

The MUC–DEB Allotment Tool enables authorized airline staff to search for flights, create bookings with PNR generation via the ISB/Amadeus GDS, and manage booking lifecycle (confirmation, status tracking, cancellation). Passengers receive email notifications at each stage.

| Component  | Technology              | Port |
| ---------- | ----------------------- | ---- |
| Frontend   | React 19, Vite, TypeScript | 3000 |
| Backend    | Spring Boot 3.5, Java 21   | 8080 |
| Database   | MariaDB (Liquibase)         | 3307 |
| Mail (dev) | Mailpit                     | 8025 |

## Quick Links

| Topic | Description |
| ----- | ----------- |
| [Getting Started](Getting-Started) | Set up and run the application locally |
| [Architecture Overview](Architecture-Overview) | System architecture, modules, and data flow |
| [API Reference](API-Reference) | REST endpoints, request/response schemas |
| [Backend Development](Backend-Development) | Backend module structure, conventions, build commands |
| [Frontend Development](Frontend-Development) | Frontend stack, feature modules, Orval API generation |
| [Database Schema](Database-Schema) | Tables, Liquibase changelogs, seed data |
| [Security](Security) | JWT authentication, CORS, endpoint authorization |
| [ISB Integration](ISB-Integration) | ISB/Amadeus GDS client for PNR operations |
| [Email Notifications](Email-Notifications) | Thymeleaf-based booking email system |
| [Testing Guide](Testing-Guide) | Unit tests, integration tests, E2E tests |
| [CI/CD Pipeline](CI-CD-Pipeline) | GitHub Actions workflows (CI, Pages, E2E, Wiki sync) |
| [Deployment](Deployment) | Docker Compose, environment variables, Spring profiles |
| [Contributing](Contributing) | Development workflow, code style, commit conventions |
| [Troubleshooting](Troubleshooting) | Common issues and solutions |

## Tech Stack Summary

### Backend

- **Java 21** (Eclipse Temurin)
- **Spring Boot 3.5.7** — Web, Data JPA, Validation, Actuator, Mail, Security
- **MariaDB** — Relational database with Liquibase schema management
- **SpringDoc OpenAPI 2.8.14** — Swagger UI and API documentation
- **Thymeleaf** — HTML email templates
- **JJWT 0.12.6** — JWT token generation and validation
- **JaCoCo 0.8.14** — Code coverage (100% line/method/class, 85% branch)
- **Checkstyle 10.20.2** + SpotBugs 4.9.8 + FindSecBugs 1.14.0 — Code quality

### Frontend

- **React 19.2** with React Compiler
- **TypeScript 5.9**, **Vite 7.3**
- **Netline UI v8** (Material UI v8-based component library)
- **TanStack Query v5** — Server state management
- **Orval v7** — API hook generation from OpenAPI spec
- **React Hook Form v7** + **Zod v4** — Form handling and validation
- **FullCalendar v6** — Flight calendar view
- **Vitest v4** — Unit tests
- **Playwright v1.57** — E2E tests
