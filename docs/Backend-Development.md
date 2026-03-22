# Backend Development

## Module Structure

The backend is a **Spring Boot 3.5.7 + Java 21** multi-module Maven project.

```
backend/
├── pom.xml                    # Parent POM (shared plugins, properties)
├── booking-api/               # DTOs — Java records with Jakarta validation
├── booking-core/              # Business logic — services, mappers, ISB client
├── booking-persistence/       # Data layer — JPA entities, repositories, Liquibase
├── booking-web/               # Web layer — controllers, security, config
└── booking-jacoco-report/     # Aggregated JaCoCo coverage report
```

### Dependency Graph

```
booking-web → booking-core → booking-api
                           → booking-persistence
```

## Package Structure

```
com.lhsystems.booking
├── api.dto                 # DTOs (Java records)
├── core
│   ├── exception           # Custom exceptions extending BaseException
│   ├── isb                 # ISB/Amadeus GDS client
│   ├── mapper              # Entity ↔ DTO manual mappers
│   └── service             # Business services
├── persistence
│   ├── configuration       # JPA configuration
│   ├── entity              # JPA entities + enums
│   └── repository          # Spring Data JPA repositories
└── web
    ├── configuration       # Security, CORS, JWT filter
    ├── controller          # REST controllers
    └── exception           # Global exception handler
```

## Naming Conventions

| Type              | Pattern             | Example                  |
| ----------------- | ------------------- | ------------------------ |
| DTO               | `*DTO` (record)     | `BookingResponseDTO`     |
| Entity            | Plain name          | `Booking`                |
| Enum              | Plain name          | `BookingStatus`          |
| Repository        | `*Repository`       | `BookingRepository`      |
| Service           | `*Service`          | `BookingService`         |
| Mapper            | `*Mapper`           | `BookingMapper`          |
| Controller        | `*Controller`       | `BookingController`      |
| Exception         | Descriptive name    | `NoSeatsAvailableException` |
| Unit Test         | `*Test`             | `BookingServiceTest`     |
| Integration Test  | `*IT`               | `BookingFlowIT`          |
| Test Fixture      | `*Util`             | `BookingUtil`            |

## Java Conventions

- **Java 21 features**: Records for DTOs, `var` for local variables, pattern matching where appropriate
- **Constructor injection**: No `@Autowired` — all dependencies via constructor
- **Manual mappers**: `@Service` classes, no MapStruct
- **ResponseEntity**: Controllers always return `ResponseEntity<T>` with explicit HTTP status
- **Custom exceptions**: All extend `BaseException` which carries an HTTP status; caught by `GlobalExceptionHandler`
- **Streams**: Prefer Stream API over imperative loops for collection processing

## Build Commands

```bash
cd backend

# Full build with all checks (unit tests, JaCoCo, Checkstyle, SpotBugs)
./mvnw verify -B -V -ntp

# Package without tests
./mvnw package -DskipTests

# Unit tests only
./mvnw test

# Run application (dev profile, local MariaDB on port 3307)
./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=dev

# Code style check only
./mvnw checkstyle:check

# Bug detection only
./mvnw spotbugs:check
```

## Quality Tools

### JaCoCo Coverage

Coverage is enforced at the `CLASS` level with these thresholds:

| Counter    | Requirement |
| ---------- | ----------- |
| LINE       | 100%        |
| METHOD     | 100%        |
| CLASS      | 100%        |
| BRANCH     | 85%         |
| COMPLEXITY | Max 30      |

**Excluded from coverage:**
- `BookingApplication` (main class)
- `JpaConfiguration`
- All classes in `core.exception` package
- `IsbSoapClient` (SOAP client, tested via integration)

### Checkstyle

Version: **10.20.2** (via maven-checkstyle-plugin **3.6.0**)

Configuration: `backend/.settings/checkstyle.xml`

Runs during the `validate` phase. Includes test sources.

### SpotBugs + FindSecBugs

- SpotBugs **4.9.8** with effort set to `Max`
- FindSecBugs **1.14.0** for security vulnerability detection
- Exclusion filter: `backend/.settings/spotbugs-exclude.xml`
- Runs during the `compile` phase

## Adding a New Feature

1. **API module**: Create DTO as Java record in `booking-api/src/main/java/.../api/dto/`
2. **Persistence module**: Create JPA entity and repository in `booking-persistence/`
3. **Core module**: Create mapper and service in `booking-core/`
4. **Web module**: Create controller in `booking-web/`, add endpoint to `SecurityConfig`
5. **Tests**: Write unit tests (`*Test.java`) and integration tests (`*IT.java`)
6. **OpenAPI**: Update `openapi.yml` with new endpoint schemas
7. **Frontend**: Regenerate Orval hooks (`cd frontend && npm run api:generate`)

## Spring Profiles

| Profile      | Database                          | ISB Client | Description            |
| ------------ | --------------------------------- | ---------- | ---------------------- |
| `default`    | MariaDB (production)              | Real       | Production             |
| `dev`        | MariaDB (localhost:3307)          | Dummy      | Local development      |
| `docker`     | MariaDB (container `database:3306`) | Dummy    | Docker Compose         |
| `codespaces` | MariaDB (container `database:3306`) | Dummy    | GitHub Codespaces      |
| `test`       | H2 in-memory (MariaDB mode)       | —          | Unit/integration tests |

See [Deployment](Deployment) for environment variables per profile.

## Actuator Endpoints

| Endpoint                    | Dev Profile | Production |
| --------------------------- | ----------- | ---------- |
| `/actuator/health`          | ✅ (details) | ✅          |
| `/actuator/info`            | ✅           | ✅          |
| `/actuator/metrics`         | ✅           | ✅          |
| `/actuator/prometheus`      | ✅           | ✅          |
| All others                  | ✅           | ❌          |
