---
name: legacy-gst-analysis
description: Guide for analyzing the legacy OSGi-based GST system to support migration to the new Spring Boot backend
---

# Legacy GST Analysis Skill

## Legacy System Overview

The legacy GST is an OSGi-based Java application located at `/gst_OLD/`. It uses a modular architecture where each domain service has 4 sub-modules:

```
es.scheller.air.service.{name}.api/        → Service interface (contract)
es.scheller.air.service.{name}.business/    → Business logic implementation
es.scheller.air.service.{name}.command/     → OSGi command bindings
es.scheller.air.service.{name}.provider/    → Data access (MyBatis)
```

## Module Pattern

### API Module (`.api`)

Contains the service interface (`*Functionality.java`) that defines all operations:

```
es.scheller.air.service.contractmanagement.api/
└── src/es.scheller.air.service.contractmanagement.api/
    └── api/
        ├── ContractFunctionality.java      # Main service interface
        ├── dto/                             # Data transfer objects
        │   ├── ContractDTO.java
        │   ├── ContractFilter.java
        │   └── ContractStatus.java
        └── exception/
            └── ContractNotFoundException.java
```

**How to analyze:**

1. Read `*Functionality.java` — this is the contract
2. Count methods to estimate complexity
3. Identify input/output types (DTOs)
4. Note any special patterns (filters, pagination, batch operations)

### Business Module (`.business`)

Contains the business logic implementation:

```
es.scheller.air.service.contractmanagement.business/
└── src/.../business/
    └── ContractBusinessLogic.java
```

**How to analyze:**

1. Read `*BusinessLogic.java`
2. Identify validation rules
3. Note business calculations
4. Find state machine transitions (especially for Contract status)
5. Identify dependencies on other services

### Provider Module (`.provider`)

Contains data access using MyBatis:

```
es.scheller.air.service.contractmanagement.provider/
└── src/.../provider/
    ├── ContractProviderImpl.java           # Data access implementation
    ├── mapper/
    │   └── ContractMapper.xml              # MyBatis SQL mappings
    └── sql/
        └── ContractMapper.java             # MyBatis mapper interface
```

**How to analyze:**

1. Read `*ProviderImpl.java` — understand data access patterns
2. Read `*Mapper.xml` — understand SQL queries and table structure
3. Identify table names, column names, relationships
4. Note any complex queries (joins, aggregations)
5. Check for stored procedures or triggers

### Command Module (`.command`)

Contains OSGi command handlers (REST-like endpoints for OSGi):

```
es.scheller.air.service.contractmanagement.command/
└── src/.../command/
    └── ContractCommands.java
```

**How to analyze:** These define the "API" exposed to the UI. Map these to REST endpoints.

## Service Inventory

### Critical Services (⭐⭐⭐)

| Service             | Tables    | Methods | Migration Priority |
| ------------------- | --------- | ------- | ------------------ |
| Contract Management | 37        | 200+    | Phase 3            |
| User Management     | 15        | 100+    | Phase 2            |
| Offer/Pricing       | DTOs only | 70+     | Phase 5            |
| Reservation         | —         | 30+     | Phase 5            |

### High Priority Services (⭐⭐)

| Service        | Tables | Methods | Migration Priority |
| -------------- | ------ | ------- | ------------------ |
| Deadline       | 1      | 40+     | Phase 3            |
| Master Data    | 6      | 110+    | Phase 2            |
| Correspondence | 2      | 30+     | Phase 4            |
| Email          | —      | 20+     | Phase 4            |
| Templates      | 2      | 20+     | Phase 4            |
| CRM            | —      | 7       | Phase 5            |
| Payment        | DTOs   | 4       | Phase 5            |
| PNR Sync       | —      | 2       | Phase 5            |

### Low Priority Services (⭐)

| Service                 | Tables | Methods | Migration Priority |
| ----------------------- | ------ | ------- | ------------------ |
| Translation             | 1      | 15+     | Phase 1            |
| Customer Type           | 1      | 10+     | Phase 1            |
| Customer Category       | 1      | 12+     | Phase 1            |
| Availability            | 1      | 10+     | Phase 1            |
| Exchange Rate           | 1      | 5       | Phase 1            |
| Dashboard Preferences   | 2      | 8       | Phase 2            |
| Pricing Response        | 1      | 3       | Phase 6            |
| Internal Messages       | 2      | 15+     | Phase 3            |
| SFTP                    | —      | 4       | Phase 4            |
| Spreadsheet             | —      | 3       | Phase 6            |
| Log Nightly Maintenance | —      | 10      | Phase 6            |

## Analysis Process

### Step 1: Read the Service Interface

```bash
# Find the main interface
find /gst_OLD/es.scheller.air.service.{name}.api -name "*Functionality.java"

# Count methods
grep -c "public\|void\|List\|Optional" <file>
```

### Step 2: Map DTOs

For each DTO in the legacy system:

| Legacy DTO       | New Record              | Fields                   | Validation       |
| ---------------- | ----------------------- | ------------------------ | ---------------- |
| `ContractDTO`    | `ContractDTO`           | id, number, name, status | @NotBlank, @Size |
| `ContractFilter` | `ContractSearchRequest` | status, dateFrom, dateTo | @Valid           |

### Step 3: Map Operations to REST Endpoints

| Legacy Method          | HTTP Method | Path                         | Notes            |
| ---------------------- | ----------- | ---------------------------- | ---------------- |
| `findAll()`            | `GET`       | `/contracts`                 | Add pagination   |
| `findById(id)`         | `GET`       | `/contracts/{id}`            | 404 if not found |
| `create(dto)`          | `POST`      | `/contracts`                 | 201 on success   |
| `update(dto)`          | `PUT`       | `/contracts`                 | 404 if not found |
| `delete(id)`           | `DELETE`    | `/contracts/{id}`            | 204 no content   |
| `findByFilter(filter)` | `GET`       | `/contracts?status=X&from=Y` | Query params     |

### Step 4: Identify Database Schema

From MyBatis mapper XMLs, extract:

```sql
-- Legacy table structure
CREATE TABLE contract (
    Id BIGINT PRIMARY KEY AUTO_INCREMENT,
    ContractNumber VARCHAR(20) NOT NULL,
    CustomerName VARCHAR(100) NOT NULL,
    Status VARCHAR(50) NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Map to new JPA entity with `@Column` annotations matching legacy names:

```java
@Entity
@Table(name = "contract")  // Exact legacy table name
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // AUTO_INCREMENT
    @Column(name = "Id")
    private Long id;

    @Column(name = "ContractNumber", nullable = false, unique = true, length = 20)
    private String contractNumber;
    // Map all columns with exact legacy names
}
```

### Step 5: Identify Dependencies

```
Contract Management
  ├── depends on: Customer Type, Customer Category, Master Data
  ├── depends on: User Management (created by)
  └── depended by: Deadline, Correspondence, Offer
```

### Step 6: Identify External Integrations

| Integration     | Type       | Legacy                                                                                           | New                   |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------ | --------------------- |
| PNR/Reservation | SOAP (ISB) | ISB client                                                                                       | REST/SOAP adapter     |
| CRM             | REST       | Custom HTTP                                                                                      | Spring WebClient      |
| Email           | SMTP       | javax.mail                                                                                       | Spring Mail           |
| SFTP            | SFTP       | JSch (`com.jcraft:jsch`, unmaintained — use `com.github.mwiede:jsch` fork if interim use needed) | Spring Integration    |
| Queue           | JMS        | ActiveMQ                                                                                         | Spring JMS / RabbitMQ |

## Data Access Patterns

### Shared MariaDB — Liquibase Baseline Strategy

The new backend connects to the **same MariaDB database** (`ubboew`) as the legacy system. Liquibase manages the schema via a **baseline changelog** generated from the existing database:

- Baseline changelog generated with `liquibase generate-changelog`
- Existing environments use `changelog-sync` (baseline marked as already applied)
- Test environments — Liquibase applies the full changelog to bootstrap Testcontainers
- `ddl-auto=validate` — Hibernate validates entities against the schema
- Column names are PascalCase — map with `@Column(name = "...")`
- Use `GenerationType.IDENTITY` for AUTO_INCREMENT columns
- Future schema changes go through proper Liquibase changelogs

### Simple Table Access

For tables with straightforward schema (CustomerType, ExchangeRate, etc.):

1. Inspect the legacy table: `DESCRIBE tablename`
2. Create JPA entity with `@Column` annotations matching exact column names
3. Validate with `ddl-auto=validate` at startup

### Complex Table Access

For tables with relationships (Contract, with 37 related tables):

1. Identify foreign key relationships
2. Create entities in dependency order
3. Use `@ManyToOne(fetch = LAZY)` with `@JoinColumn` matching legacy FK column names
4. Handle archive tables (create as separate entities or use soft delete)

### Data Type Mapping

| Legacy (MariaDB)       | JPA Java Type | Notes                                  |
| ---------------------- | ------------- | -------------------------------------- |
| `INT` / `BIGINT`       | `Long`        |                                        |
| `VARCHAR(n)`           | `String`      | Match length in `@Column`              |
| `DATETIME`             | `Instant`     | Or `LocalDateTime` if no timezone      |
| `TINYINT(1)` (boolean) | `Boolean`     |                                        |
| `TEXT`                 | `String`      |                                        |
| `DECIMAL(p,s)`         | `BigDecimal`  |                                        |
| `AUTO_INCREMENT`       | `Long`        | `@GeneratedValue(strategy = IDENTITY)` |

## Common Pitfalls

1. **Don't copy legacy code verbatim** — adapt to Spring Boot patterns
2. **Don't ignore the business logic** — read `*BusinessLogic.java` carefully
3. **Don't forget archive tables** — decide whether to keep or use soft delete
4. **Don't miss external integrations** — these need separate adapters
5. **Don't assume column names** — check MyBatis mapper XMLs
6. **Don't skip validation rules** — they may be in business logic, not DTOs

## Related Skills

- `spring-boot-architecture` — Target architecture patterns
- `database-migration` — Liquibase baseline strategy, shared MariaDB, and JPA entity patterns
- `migration-planning` — Phase planning and issue creation
