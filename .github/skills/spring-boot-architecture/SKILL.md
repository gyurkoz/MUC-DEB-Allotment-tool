---
name: spring-boot-architecture
description: Spring Boot 3.5 layered architecture patterns for the GST backend multi-module Maven project
---

# Spring Boot Architecture Skill

## Multi-Module Maven Structure

The GST backend follows a strict layered architecture enforced via Maven modules:

```
template-application-web          → REST API layer (Controllers, Exception Handlers)
  └── template-application-core   → Business Logic layer (Services, Mappers)
        ├── template-application-api         → Contract layer (DTOs, Request/Response)
        └── template-application-persistence → Data Access layer (Entities, Repositories)
```

### Module Responsibilities

| Module          | Contains                                         | Depends On                             | Key Annotations                        |
| --------------- | ------------------------------------------------ | -------------------------------------- | -------------------------------------- |
| **api**         | DTOs, request/response records                   | Spring Validation only                 | `@NotBlank`, `@Size`, `@Valid`         |
| **persistence** | JPA entities, repositories, Liquibase changelogs | Spring Data JPA, DB driver, Liquibase  | `@Entity`, `@Repository`, `@Table`     |
| **core**        | Services, mappers, exceptions                    | api + persistence                      | `@Service`                             |
| **web**         | Controllers, exception handlers, config          | core (transitively: api + persistence) | `@RestController`, `@ControllerAdvice` |

### Dependency Rules

- ❌ **api** must NOT depend on core, persistence, or web
- ❌ **persistence** must NOT depend on core or web
- ❌ **core** must NOT depend on web
- ✅ **core** can depend on api and persistence
- ✅ **web** can depend on core (and transitively on api + persistence)

## Package Naming

Base package: `com.lhsystems.groupsalestool.templateapp`

```
com.lhsystems.groupsalestool.templateapp
├── api
│   └── dto
│       ├── ExampleDTO.java          # Java record
│       └── ErrorDTO.java            # Standard error response
├── core
│   ├── exception
│   │   ├── BaseException.java       # Abstract base
│   │   └── IdNotFoundException.java # 404 exception
│   ├── mapper
│   │   └── ExampleMapper.java       # Entity ↔ DTO mapping
│   └── service
│       └── ExampleService.java      # Business logic
├── persistence
│   ├── configuration
│   │   └── JpaConfiguration.java    # @EnableJpaAuditing
│   ├── entity
│   │   └── Example.java             # JPA entity
│   └── repository
│       └── ExampleRepository.java   # Spring Data repository
└── web
    ├── configuration
    │   ├── DebugHeaderFilter.java
    │   └── DebugLoggingTurboFilter.java
    ├── controller
    │   └── ExampleController.java   # REST endpoints
    ├── exception
    │   └── ExampleExceptionHandler.java # @ControllerAdvice
    └── metrics
        └── ExceptionMetrics.java    # Micrometer metrics
```

## DTO Pattern (API Module)

Always use Java records with Jakarta validation:

```java
package com.lhsystems.groupsalestool.templateapp.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.Instant;

/**
 * Data transfer object for Contract.
 *
 * @param id            unique identifier
 * @param contractNumber  the contract number
 * @param customerName  name of the customer
 * @param status        current contract status
 * @param createdDate   creation timestamp
 */
public record ContractDTO(
    Long id,
    @NotBlank @Size(min = 1, max = 20) String contractNumber,
    @NotBlank @Size(min = 1, max = 100) String customerName,
    @NotNull String status,
    Instant createdDate
) { }
```

**Rules:**

- Always use `record` keyword
- Add `@NotBlank`, `@NotNull`, `@Size` etc. for validation
- Include Javadoc with `@param` for each field
- Never add methods that mutate state
- Use `Instant` for timestamps (not `LocalDateTime`)

## Entity Pattern (Persistence Module)

```java
package com.lhsystems.groupsalestool.templateapp.persistence.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "Contract")  // Exact legacy MariaDB table name
@EntityListeners(AuditingEntityListener.class)
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // MariaDB AUTO_INCREMENT
    @Column(name = "Id")
    private Long id;

    @Column(name = "ContractNumber", nullable = false, unique = true, length = 20)
    private String contractNumber;

    @Column(name = "CustomerName", nullable = false, length = 100)
    private String customerName;

    @Column(nullable = false)
    private String status;

    @CreatedDate
    @Column(name = "CreatedDate", nullable = false, updatable = false)
    private Instant createdDate;

    // Default constructor required by JPA
    protected Contract() { }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getContractNumber() { return contractNumber; }
    public void setContractNumber(String contractNumber) { this.contractNumber = contractNumber; }
    // ... etc.

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contract contract = (Contract) o;
        return Objects.equals(id, contract.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
```

**Rules:**

- `@Entity` and `@Table` with exact legacy MariaDB table name
- Use `GenerationType.IDENTITY` for MariaDB AUTO_INCREMENT
- Use `@Column(name = "...")` matching exact legacy column names (PascalCase)
- Use `@CreatedDate` with `AuditingEntityListener`
- Implement `equals`, `hashCode` based on `id`
- Protected no-arg constructor for JPA

## Service Pattern (Core Module)

```java
package com.lhsystems.groupsalestool.templateapp.core.service;

import com.lhsystems.groupsalestool.templateapp.api.dto.ContractDTO;
import com.lhsystems.groupsalestool.templateapp.core.exception.IdNotFoundException;
import com.lhsystems.groupsalestool.templateapp.core.mapper.ContractMapper;
import com.lhsystems.groupsalestool.templateapp.persistence.repository.ContractRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContractService {

    private final ContractRepository repository;
    private final ContractMapper mapper;

    // Constructor injection — NO @Autowired
    public ContractService(ContractRepository repository, ContractMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<ContractDTO> findAll() {
        return repository.findAll().stream()
            .map(mapper::toDto)
            .toList();
    }

    public ContractDTO findById(Long id) {
        return repository.findById(id)
            .map(mapper::toDto)
            .orElseThrow(() -> new IdNotFoundException(id));
    }

    public ContractDTO create(ContractDTO dto) {
        var entity = mapper.toEntity(dto);
        return mapper.toDto(repository.save(entity));
    }

    public ContractDTO update(ContractDTO dto) {
        if (!repository.existsById(dto.id())) {
            throw new IdNotFoundException(dto.id());
        }
        var entity = mapper.toEntity(dto);
        return mapper.toDto(repository.save(entity));
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
```

**Rules:**

- Constructor injection only — `final` fields, no `@Autowired`
- Use `Optional` chaining with `orElseThrow`
- Use Stream API for collection processing
- Throw custom exceptions extending `BaseException`
- Use `var` for local variables with clear types

## Controller Pattern (Web Module)

```java
package com.lhsystems.groupsalestool.templateapp.web.controller;

import com.lhsystems.groupsalestool.templateapp.api.dto.ContractDTO;
import com.lhsystems.groupsalestool.templateapp.core.service.ContractService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/contracts")
@Tag(name = "Contract", description = "Contract management endpoints")
public class ContractController {

    private final ContractService service;

    public ContractController(ContractService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Get all contracts")
    public ResponseEntity<List<ContractDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get contract by ID")
    @ApiResponse(responseCode = "200", description = "Contract found")
    @ApiResponse(responseCode = "404", description = "Contract not found")
    public ResponseEntity<ContractDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @Operation(summary = "Create a new contract")
    @ApiResponse(responseCode = "201", description = "Contract created")
    public ResponseEntity<ContractDTO> create(@Valid @RequestBody ContractDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(dto));
    }

    @PutMapping
    @Operation(summary = "Update an existing contract")
    public ResponseEntity<ContractDTO> update(@Valid @RequestBody ContractDTO dto) {
        return ResponseEntity.ok(service.update(dto));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete contract by ID")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        service.deleteById(id);
    }
}
```

**Rules:**

- `@RestController` + `@RequestMapping` with plural noun
- `ResponseEntity` for all methods (except `@ResponseStatus` for void)
- `@Valid` on `@RequestBody` parameters
- OpenAPI annotations (`@Operation`, `@Tag`, `@ApiResponse`)
- Constructor injection

## Liquibase Baseline Strategy

The new backend connects to the **same MariaDB database** (`ubboew`) as the legacy GST system.
Tables already exist — Liquibase manages the schema via a **baseline changelog** generated from the existing database.

```properties
# All profiles (except openapi)
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.jpa.hibernate.ddl-auto=validate
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml
```

**How it works:**

1. `liquibase generate-changelog` captures the existing `ubboew` schema as a baseline
2. Existing environments run `changelog-sync` to mark baseline as already applied
3. Test environments (Testcontainers) — Liquibase applies the full changelog to create the schema
4. Future schema changes go through proper Liquibase changelogs with rollback support
5. `ddl-auto=validate` catches any entity/schema mismatches at startup

See `database-migration` skill for detailed Liquibase setup and JPA entity patterns.

## Exception Handling Pattern

```java
// Base exception (existing)
public abstract class BaseException extends RuntimeException {
    protected BaseException(String message) {
        super(message);
    }
}

// Specific exception
public class IdNotFoundException extends BaseException {
    private final Long id;

    public IdNotFoundException(Long id) {
        super("Entity with id " + id + " not found");
        this.id = id;
    }

    public Long getId() { return id; }
}

// Exception handler (@ControllerAdvice)
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<ErrorDTO> handleIdNotFound(IdNotFoundException ex) {
        var error = new ErrorDTO(ex.getId().toString(), ex.getMessage(), null, null);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorDTO> handleValidation(MethodArgumentNotValidException ex) {
        var details = ex.getBindingResult().getFieldErrors().stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .toList();
        var error = new ErrorDTO("validation", "Validation failed", details, null);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
```

## Spring Profiles

| Profile   | Database                    | DDL         | Use Case                |
| --------- | --------------------------- | ----------- | ----------------------- |
| `default` | MariaDB (shared `ubboew`)   | validate    | Production              |
| `dev`     | MariaDB (Docker, localhost) | validate    | Local development       |
| `docker`  | MariaDB (Docker Compose)    | validate    | Docker environment      |
| `openapi` | H2                          | create-drop | OpenAPI spec generation |
| `test`    | MariaDB (Testcontainers)    | validate    | Integration testing     |

## Related Skills

- `java-best-practices` — Java 21 language features
- `testing-standards` — JUnit 5, Mockito, Testcontainers patterns
- `database-migration` — Liquibase baseline strategy, shared MariaDB, and JPA entity design
- `legacy-gst-analysis` — Understanding the legacy system being migrated
