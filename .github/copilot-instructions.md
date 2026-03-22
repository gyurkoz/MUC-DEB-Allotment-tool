# GST Backend — GitHub Copilot Instructions

## Terminology (Prompt Keywords)

When these terms appear in user prompts, they refer to the following:

| Term                             | Meaning                                                                            |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| **old GST**, **legacy GST**      | The legacy OSGi-based GST system at `/gst_OLD/` in the workspace                   |
| **new backend**, **GST backend** | This Spring Boot project (`group-sales-tool-core`)                                 |
| **new UI**, **GST UI**           | The React 19 frontend at `/GST-UI/` in the workspace                               |
| **template app**                 | The Spring Boot template this project was scaffolded from (the `Example*` classes) |
| **tracker**                      | The GitHub Projects board at <https://github.com/orgs/lsy-gst/projects/4>          |
| **docs**, **documentation**      | The project documentation in the `/docs/` directory                                |
| **openapi**, **API spec**        | The OpenAPI specification at `openapi.yaml`                                        |

## Project Overview

This is the **new GST (Group Sales Tool) backend**, a **Spring Boot 3.5 + Java 21** multi-module Maven application that replaces the legacy OSGi-based GST system. It is built from a template application and is being extended to implement all GST business domains.

**Tech Stack:**

- ☕ Java 21 (Temurin)
- 🍃 Spring Boot 3.5.7
- ☁️ Spring Data JPA + MariaDB (shared with legacy GST)
- 🔄 Liquibase (baseline changelog generated from existing MariaDB schema)
- 📖 SpringDoc OpenAPI (Swagger UI)
- ✅ JUnit 5 + Mockito + Testcontainers
- 📊 JaCoCo for coverage (100% line/method/class required)
- 🔍 Checkstyle + SpotBugs + FindSecBugs for quality
- 🐳 Docker for containerization
- 📈 Micrometer + Prometheus for metrics

## Architecture

### Multi-Module Structure

```
group-sales-tool-core/
├── template-application-api/          # DTOs, request/response records
├── template-application-core/         # Business logic, services, mappers
├── template-application-persistence/  # JPA entities, repositories
├── template-application-web/          # REST controllers, exception handlers, config
└── template-application-jacoco-report/ # Aggregated coverage reports
```

### Dependency Graph

```
template-application-web
  └── template-application-core
        ├── template-application-api
        └── template-application-persistence
```

### Package Naming Convention

```
com.lhsystems.groupsalestool.templateapp
├── api.dto          → DTOs (Java records with Jakarta validation)
├── core
│   ├── exception    → Custom exceptions (BaseException, IdNotFoundException)
│   ├── mapper       → Entity ↔ DTO mappers (@Service, manual mapping)
│   └── service      → Business services (@Service)
├── persistence
│   ├── configuration → JPA configuration
│   ├── entity        → JPA entities
│   └── repository    → Spring Data JPA repositories
└── web
    ├── configuration → Filters, logging config
    ├── controller    → REST controllers (@RestController)
    ├── exception     → Exception handlers (@ControllerAdvice)
    └── metrics       → Micrometer metrics
```

## Key Conventions

### Java Code Style

- **Java 21 features**: Use records, sealed classes, pattern matching, text blocks where appropriate
- **DTOs**: Always Java records with Jakarta validation annotations
- **Entities**: Standard JPA classes with `@Entity`, use `@CreatedDate` for audit fields
- **Mappers**: Manual mapping in `@Service` classes (no MapStruct)
- **Services**: `@Service` annotated, constructor injection (no `@Autowired`)
- **Controllers**: `@RestController`, return `ResponseEntity` with proper HTTP status codes
- **Repositories**: Extend `JpaRepository<Entity, Long>`
- **Exceptions**: Extend `BaseException`, caught by `@ControllerAdvice` handlers

### Naming Patterns

| Type              | Pattern             | Example                    |
| ----------------- | ------------------- | -------------------------- |
| DTO               | `*DTO` (record)     | `ContractDTO`              |
| Entity            | Plain name          | `Contract`                 |
| Repository        | `*Repository`       | `ContractRepository`       |
| Service           | `*Service`          | `ContractService`          |
| Controller        | `*Controller`       | `ContractController`       |
| Exception Handler | `*ExceptionHandler` | `ContractExceptionHandler` |
| Mapper            | `*Mapper`           | `ContractMapper`           |
| Unit Test         | `*Test`             | `ContractServiceTest`      |
| Integration Test  | `*IT`               | `ContractControllerIT`     |
| Test Fixture      | `*Util`             | `ContractUtil`             |

### REST API Conventions

- Base path: `/{resource}` (e.g., `/contracts`, `/users`, `/offers`)
- Use plural nouns for collections
- Standard CRUD: `GET /`, `GET /{id}`, `POST /`, `PUT /`, `DELETE /{id}`
- Always return `ErrorDTO` for error responses
- Use proper HTTP status codes (200, 201, 204, 400, 404, 409, 500)
- Document all endpoints in `openapi.yaml`

### Database Conventions

- The new backend **shares the same MariaDB database** (`ubboew`) as the legacy GST system
- Tables and columns use the legacy naming convention (PascalCase, e.g., `ContractNumber`)
- JPA `@Column(name = "...")` annotations must match the existing MariaDB column names exactly
- **Liquibase baseline strategy** — schema captured via `generateChangeLog`; `changelog-sync` on existing environments
- **`ddl-auto=validate`** — Hibernate validates entities against existing schema
- Use `@GeneratedValue(strategy = GenerationType.IDENTITY)` for AUTO_INCREMENT columns

### Testing Standards

- **Unit tests** (`*Test.java`): JUnit 5 + Mockito, run with Surefire
- **Integration tests** (`*IT.java`): Testcontainers + MariaDB, run with Failsafe
- **Coverage**: 100% line/method/class, 85% branch, max 30 complexity
- **Excluded from coverage**: Application main class, JPA config, base exceptions
- **Test fixtures**: `*Util` classes in test source tree
- **Slice tests**: `@WebMvcTest` for controller-only testing

## Development Guidelines

### Adding a New Domain Service

When migrating a service from the legacy GST:

1. **API module**: Create DTOs as Java records in `api.dto`
2. **Persistence module**: Create entity in `persistence.entity` matching existing MariaDB table schema exactly
3. **Persistence module**: Create repository in `persistence.repository`
4. **Core module**: Create mapper in `core.mapper`, service in `core.service`
5. **Web module**: Create controller in `web.controller`, exception handler in `web.exception`
6. **Web module**: Add OpenAPI annotations to controller
7. **Tests**: Write unit tests for service + mapper, integration tests for controller
8. **OpenAPI**: Update `openapi.yaml` with new endpoints

### Spring Profiles

| Profile   | Database                    | DDL Strategy | Purpose                 |
| --------- | --------------------------- | ------------ | ----------------------- |
| `default` | MariaDB (shared `ubboew`)   | validate     | Production              |
| `dev`     | MariaDB (Docker, localhost) | validate     | Local development       |
| `docker`  | MariaDB (Docker Compose)    | validate     | Docker development      |
| `openapi` | H2 in-memory                | create-drop  | OpenAPI spec generation |
| `test`    | MariaDB (Testcontainers)    | validate     | Integration testing     |

### Build & Run Commands

```bash
# Build
./mvnw verify -B -V -ntp              # Full build with tests
./mvnw package -DskipTests            # Package without tests

# Run
./mvnw spring-boot:run -pl template-application-web -Pdev  # Run with local MariaDB
docker compose up                      # Run with Docker MariaDB

# Quality
./mvnw checkstyle:check               # Check code style
./mvnw spotbugs:check                  # Check for bugs
./mvnw verify                         # Run all checks + tests

# OpenAPI
./mvnw verify -Popenapi               # Generate openapi.yaml
```

### CI/CD Pipeline

The project uses GitHub Actions (`.github/workflows/build.yml`):

1. Checkout → JDK 21 setup → Hadolint (Dockerfile lint)
2. `mvn verify` (build + test + quality checks)
3. Upload JAR artifact + JaCoCo report
4. On `main`: trigger Docker image build + deploy coverage report

## Migration Context

This backend is being built to replace the legacy GST system. The legacy system has:

- **23 business services** (contract management, availability, offers, reservations, etc.)
- **~80+ database tables** (MariaDB with MyBatis)
- **OSGi modular architecture** with `.api`/`.business`/`.provider`/`.command` layers
- **SOAP integrations** for PNR/reservation operations
- **Queue-based** PNR sync (ActiveMQ/MQSeries)

The new backend will:

- Use Spring Boot with clean layered architecture
- **Connect to the same MariaDB database** (`ubboew`) as the legacy system
- Use Liquibase baseline changelog generated from the existing schema
- Use JPA with `ddl-auto=validate` to read/write existing tables
- Expose RESTful APIs consumed by the GST UI (React 19)
- **Maintain strict backward compatibility** (see below)
- Be deployed as Docker containers

### Parallel Operation & Backward Compatibility

**The old GST and new GST run in parallel during the migration period.** The GST UI (`/GST-UI/`) already defines the API contract via its `openapi.yaml` (7,800+ lines, 142 operationIds — draft spec, ~28 actively consumed by the UI). The new backend MUST be a superset of what the frontend expects.

**Mandatory rules:**

- **NEVER** remove or rename existing endpoint paths
- **NEVER** change `operationId` values — the frontend uses Orval to generate TanStack Query hooks from them
- **NEVER** remove required fields from response DTOs
- **NEVER** change field types or nullability in ways that break the frontend
- **SAFE**: Adding new optional fields, new endpoints, new query parameters
- **CAUTION**: Adding new required request fields (may break existing callers)

**Verification**: Always compare the backend-generated `openapi.yaml` against the frontend's `openapi.yaml` to detect breaking changes. See `.github/skills/openapi-specialist/SKILL.md` for the full verification process.

## Dependencies

**Core:**

- `spring-boot-starter-web` — REST API framework
- `spring-boot-starter-data-jpa` — Database access
- `spring-boot-starter-validation` — Jakarta Bean Validation
- `spring-boot-starter-actuator` — Health & metrics endpoints

**Database:**

- `org.mariadb.jdbc:mariadb-java-client` — MariaDB driver (production & development)
- `org.liquibase:liquibase-core` — Liquibase schema management (baseline changelog)
- `h2` — OpenAPI spec generation profile only

**Documentation:**

- `springdoc-openapi-starter-webmvc-ui` — Swagger UI + OpenAPI

**Quality:**

- `checkstyle` — Code style enforcement
- `spotbugs-maven-plugin` — Bug detection
- `findsecbugs-plugin` — Security bug detection
- `jacoco-maven-plugin` — Code coverage

**Testing:**

- `spring-boot-starter-test` — JUnit 5 + Mockito
- `testcontainers` + `org.testcontainers:mariadb` — MariaDB containers for integration tests
- `micrometer-registry-prometheus` — Metrics

## AI Assistant Guidelines

When helping with this project:

1. **Always use Java 21** — Use records, sealed classes, pattern matching where appropriate
2. **Follow layered architecture** — API → Core → Persistence, Web depends on Core
3. **Write tests** — Unit tests (100% coverage) and integration tests (Testcontainers)
4. **Use Liquibase baseline strategy** — Baseline changelog generated from existing MariaDB; `changelog-sync` on existing environments; `ddl-auto=validate`
5. **Follow naming conventions** — DTOs, entities, services, controllers all follow patterns
6. **Document APIs** — Use OpenAPI/SpringDoc annotations on all endpoints
7. **Handle errors properly** — Custom exceptions + `@ControllerAdvice`
8. **Consider migration context** — Reference legacy GST when implementing domain services
9. **Check the UI** — Verify what the GST UI expects from API endpoints
10. **Enforce backward compatibility** — Old and new GST run in parallel; never break existing API contracts (see `openapi-specialist` skill)
11. **Use Conventional Commits** — Format: `<type>(<scope>): <subject>`

When generating code, prefer:

- Java records for DTOs over traditional POJOs
- Constructor injection over field injection
- `Optional` return types from repositories for single-entity lookups
- Stream API over imperative loops for collection processing
- `ResponseEntity` over raw return values in controllers
- Testcontainers MariaDB over H2 for integration tests
- Meaningful test names that describe behavior

## Scripts Reference

```bash
./mvnw verify -B -V -ntp     # Full CI build
./mvnw test                   # Unit tests only
./mvnw failsafe:integration-test  # Integration tests only
docker compose up -d          # Start MariaDB
docker compose down           # Stop MariaDB
```

## Related Projects

- **GST UI** (`/GST-UI/`): React 19 frontend consuming this API
- **Legacy GST** (`/gst_OLD/`): The system being migrated
- **GitHub Project**: <https://github.com/orgs/lsy-gst/projects/4>
