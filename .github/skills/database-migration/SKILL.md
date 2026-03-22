---
name: database-migration
description: Shared MariaDB patterns, Liquibase baseline strategy, JPA entity design, and legacy schema conventions for the GST backend
---

# Database, Liquibase & JPA Entity Design Skill

## Shared MariaDB Strategy

The new GST backend connects to the **same MariaDB database** (`ubboew`) as the legacy OSGi-based GST system. Tables already exist — Liquibase manages the schema via a **baseline changelog** generated from the existing database.

### Key Facts

- **Database:** MariaDB (`ubboew`) — shared with legacy GST
- **Driver:** `org.mariadb.jdbc:mariadb-java-client`
- **Liquibase:** Enabled — baseline changelog generated from existing schema via `generateChangeLog`
- **DDL strategy:** `spring.jpa.hibernate.ddl-auto=validate` — JPA validates entities against existing schema at startup
- **ID generation:** `@GeneratedValue(strategy = GenerationType.IDENTITY)` — uses MariaDB `AUTO_INCREMENT`
- **Existing environments:** `changelog-sync` marks baseline as already applied (no DDL re-execution)
- **Test environments:** Liquibase applies the full changelog to bootstrap the schema in Testcontainers

### Liquibase Baseline Strategy

The project uses `liquibase generate-changelog` to capture the existing `ubboew` schema as a versioned baseline:

```
1. Generate baseline     →  liquibase generate-changelog (from live ubboew)
2. Sync existing envs    →  liquibase changelog-sync (marks baseline as "already applied")
3. Validate always       →  ddl-auto=validate (Hibernate never modifies schema)
4. New changes via LB    →  proper changelogs for any future schema changes
```

**Generating the baseline:**

```bash
# Generate baseline changelog from running ubboew database
liquibase --url="jdbc:mariadb://localhost:3306/ubbo" \
          --username=ubbo --password=ubbo \
          --changeLogFile=src/main/resources/db/changelog/db.changelog-baseline.xml \
          generate-changelog

# Verify by applying to a fresh MariaDB container
docker run --rm -d --name lb-verify -p 3307:3306 \
  -e MARIADB_ROOT_PASSWORD=root -e MARIADB_DATABASE=ubbo \
  -e MARIADB_USER=ubbo -e MARIADB_PASSWORD=ubbo mariadb:11

liquibase --url="jdbc:mariadb://localhost:3307/ubbo" \
          --username=ubbo --password=ubbo \
          --changeLogFile=src/main/resources/db/changelog/db.changelog-baseline.xml \
          update

# On existing environments (dev, prod), mark baseline as already applied
liquibase changelog-sync
```

### Changelog Structure

```
template-application-persistence/src/main/resources/
├── db/
│   └── changelog/
│       ├── db.changelog-master.xml        # Root — includes baseline + future changes
│       ├── db.changelog-baseline.xml      # Generated from existing ubboew schema
│       └── changes/                       # Future incremental changelogs
│           └── 001-add-new-column.xml
├── persistence-*.properties               # Profile-specific DB config

template-application-persistence/src/main/java/com/.../persistence/
├── configuration/
│   └── JpaConfiguration.java             # @EnableJpaAuditing
├── entity/
│   ├── CustomerType.java                 # JPA entity matching legacy table
│   └── ...
└── repository/
    ├── CustomerTypeRepository.java       # Spring Data JPA repository
    └── ...
```

**Root changelog (`db.changelog-master.xml`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
                   http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-latest.xsd">

    <include file="db/changelog/db.changelog-baseline.xml"/>
    <!-- Future changelogs added here -->
    <!-- <include file="db/changelog/changes/001-add-new-column.xml"/> -->
</databaseChangeLog>
```

### Connection Configuration

```properties
# Default profile (production) — shared MariaDB
spring.datasource.url=jdbc:mariadb://localhost:3306/ubboew
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect

# Liquibase — baseline changelog
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml
```

## Legacy Table Schema Conventions

The legacy MariaDB uses PascalCase naming. JPA `@Column` annotations **must map to the exact legacy column names**.

### Column Name Mapping

| Legacy MariaDB Column | JPA Field        | JPA Annotation                              |
| --------------------- | ---------------- | ------------------------------------------- |
| `Id`                  | `id`             | `@Id` (no `@Column` needed if name matches) |
| `ContractNumber`      | `contractNumber` | `@Column(name = "ContractNumber")`          |
| `CustomerName`        | `customerName`   | `@Column(name = "CustomerName")`            |
| `CreatedDate`         | `createdDate`    | `@Column(name = "CreatedDate")`             |
| `IsActive`            | `isActive`       | `@Column(name = "IsActive")`                |
| `FK_CustomerTypeId`   | `customerTypeId` | `@JoinColumn(name = "FK_CustomerTypeId")`   |

### Data Type Mapping

| MariaDB Type     | JPA Java Type | Notes                                  |
| ---------------- | ------------- | -------------------------------------- |
| `INT`            | `Integer`     |                                        |
| `BIGINT`         | `Long`        |                                        |
| `VARCHAR(n)`     | `String`      | Match exact length in `@Column`        |
| `CHAR(n)`        | `String`      |                                        |
| `TEXT`           | `String`      |                                        |
| `DATETIME`       | `Instant`     | Or `LocalDateTime` if no timezone      |
| `DATE`           | `LocalDate`   |                                        |
| `TIME`           | `LocalTime`   |                                        |
| `TINYINT(1)`     | `Boolean`     |                                        |
| `DECIMAL(p,s)`   | `BigDecimal`  |                                        |
| `BLOB`           | `byte[]`      | `@Lob` annotation                      |
| `AUTO_INCREMENT` | `Long`        | `@GeneratedValue(strategy = IDENTITY)` |

## JPA Entity Design

### Basic Entity (matching legacy table)

```java
@Entity
@Table(name = "customergrouptype")  // Exact legacy table name
@EntityListeners(AuditingEntityListener.class)
public class CustomerType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // MariaDB AUTO_INCREMENT
    @Column(name = "Id")
    private Long id;

    @Column(name = "Name", nullable = false, length = 100)
    private String name;

    @Column(name = "Description", length = 255)
    private String description;

    @Column(name = "IsActive", nullable = false)
    private Boolean active = true;

    @CreatedDate
    @Column(name = "CreatedDate", nullable = false, updatable = false)
    private Instant createdDate;

    protected CustomerType() { }

    // Getters and setters...
}
```

### Entity with Relationships

```java
@Entity
@Table(name = "Contract")
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name = "ContractNumber", nullable = false, unique = true, length = 20)
    private String contractNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_CustomerTypeId", nullable = false)
    private CustomerType customerType;

    @OneToMany(mappedBy = "contract", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Deadline> deadlines = new ArrayList<>();

    // Use LAZY loading by default for relationships
}
```

### Repository with Custom Queries

```java
public interface ContractRepository extends JpaRepository<Contract, Long> {

    List<Contract> findByStatus(String status);

    Optional<Contract> findByContractNumber(String contractNumber);

    @Query("""
        SELECT c FROM Contract c
        WHERE c.status = :status
        AND c.createdDate >= :fromDate
        ORDER BY c.createdDate DESC
        """)
    Page<Contract> findByStatusAndCreatedDateAfter(
        @Param("status") String status,
        @Param("fromDate") Instant fromDate,
        Pageable pageable
    );

    boolean existsByContractNumber(String contractNumber);
}
```

## Schema Discovery Workflow

Before creating a JPA entity, inspect the legacy table:

```bash
# Describe the table structure
docker exec ubbo-mariadb mariadb -uubbo -pubbo ubbo -e 'DESCRIBE customergrouptype;'

# Show CREATE TABLE (includes indexes, FKs, engine)
docker exec ubbo-mariadb mariadb -uubbo -pubbo ubbo -e 'SHOW CREATE TABLE customergrouptype\G'

# Check foreign keys referencing this table
docker exec ubbo-mariadb mariadb -uubbo -pubbo ubbo -e "
SELECT TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME = 'customergrouptype'
  AND TABLE_SCHEMA = 'ubbo';"

# Sample data
docker exec ubbo-mariadb mariadb -uubbo -pubbo ubbo -e 'SELECT * FROM customergrouptype LIMIT 5;'
```

## Integration Test Schema Loading

With Liquibase enabled, Testcontainers starts an **empty** MariaDB and Spring Boot auto-applies the changelog to create the full schema. No `withInitScript` needed.

```java
@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public abstract class BaseIntegrationTest {

    @Container
    static MariaDBContainer<?> mariadb = new MariaDBContainer<>("mariadb:11")
        .withDatabaseName("ubboew")
        .withUsername("test")
        .withPassword("test");
        // No withInitScript — Liquibase applies the baseline changelog automatically

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mariadb::getJdbcUrl);
        registry.add("spring.datasource.username", mariadb::getUsername);
        registry.add("spring.datasource.password", mariadb::getPassword);
    }
}
```

Test data is loaded per test class using `@Sql`:

```java
@Sql("/db/testdata/customer-types.sql")
class CustomerTypeControllerIT extends BaseIntegrationTest { ... }
```

## Rules

1. **Match legacy table/column names exactly** — use `@Table(name = "...")` and `@Column(name = "...")`
2. **Use `GenerationType.IDENTITY`** for MariaDB AUTO_INCREMENT columns (not SEQUENCE)
3. **Use `ddl-auto=validate`** — never `create`, `update`, or `create-drop` for production/dev/test
4. **Use Liquibase baseline approach** — `generateChangeLog` captures existing schema; `changelog-sync` on existing environments
5. **Future schema changes via Liquibase** — never modify existing tables outside of changelogs
6. **No direct DDL on shared DB** — during parallel operation, coordinate schema changes with the legacy team
7. **Inspect before coding** — always `DESCRIBE` the table before writing the JPA entity
8. **LAZY fetch** for all `@ManyToOne` / `@OneToMany` relationships
9. **Use `@CreatedDate`** with `AuditingEntityListener` for audit fields

## Related Skills

- `spring-boot-architecture` — How entities fit in the layered architecture
- `legacy-gst-analysis` — Understanding legacy schema to migrate
- `java-best-practices` — Java 21 patterns in entities
