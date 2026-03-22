---
description: "Java and Spring Boot coding standards for the GST backend project"
applyTo: "**/*.java"
---

# Java & Spring Boot Guidelines

## Core Skills References

When working with Java and Spring Boot code, follow patterns from these comprehensive skill guides:

- **Spring Boot Architecture**: See `.github/skills/spring-boot-architecture/SKILL.md` for layered architecture patterns
- **Java Best Practices**: See `.github/skills/java-best-practices/SKILL.md` for Java 21 features and conventions
- **Database Migration**: See `.github/skills/database-migration` — Shared MariaDB and JPA entity patterns

## Java 21 Features

**Use modern Java features where appropriate:**

| Feature          | When to Use                        | Example                                              |
| ---------------- | ---------------------------------- | ---------------------------------------------------- |
| Records          | DTOs, value objects                | `public record ContractDTO(Long id, String name) {}` |
| Sealed classes   | Restricted type hierarchies        | `sealed interface Event permits Created, Updated`    |
| Pattern matching | Type checks and casting            | `if (obj instanceof Contract c) { ... }`             |
| Text blocks      | Multi-line strings, JPQL           | `"""SELECT c FROM Contract c"""`                     |
| `var`            | Local variables with obvious types | `var contracts = repository.findAll();`              |
| Stream API       | Collection processing              | `list.stream().filter(...).map(...).toList()`        |

## Module Conventions

### API Module (`template-application-api`)

**DTOs are always Java records with Jakarta validation:**

```java
public record ContractDTO(
    Long id,

    @NotBlank(message = "Contract number is required")
    @Size(max = 50, message = "Contract number must not exceed 50 characters")
    String contractNumber,

    @NotBlank(message = "Customer name is required")
    @Size(max = 200, message = "Customer name must not exceed 200 characters")
    String customerName,

    @NotNull(message = "Customer type ID is required")
    Long customerTypeId,

    @NotNull(message = "Status is required")
    String status,

    Instant createdDate
) {}
```

**Rules:**

- One record per DTO file
- Jakarta validation on all input fields
- Meaningful validation messages
- No business logic in DTOs

### Persistence Module (`template-application-persistence`)

**Entity conventions:**

```java
@Entity
@Table(name = "Contract")  // Exact legacy MariaDB table name
@EntityListeners(AuditingEntityListener.class)
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // MariaDB AUTO_INCREMENT
    @Column(name = "Id")
    private Long id;

    @Column(name = "ContractNumber", nullable = false, length = 50, unique = true)
    private String contractNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_CustomerTypeId", nullable = false)
    private CustomerType customerType;

    @CreatedDate
    @Column(name = "CreatedDate", nullable = false, updatable = false)
    private Instant createdDate;

    protected Contract() { }

    // Public constructor for required fields
    public Contract(String contractNumber, CustomerType customerType) {
        this.contractNumber = contractNumber;
        this.customerType = customerType;
    }

    // Getters and setters...
}
```

**Rules:**

- Protected no-arg constructor for JPA
- `LAZY` fetch for all `@ManyToOne` / `@OneToMany`
- `GenerationType.IDENTITY` for MariaDB AUTO_INCREMENT (not SEQUENCE)
- PascalCase for table and column names matching legacy MariaDB exactly
- `@CreatedDate` for audit fields

**Repository conventions:**

```java
public interface ContractRepository extends JpaRepository<Contract, Long> {

    Optional<Contract> findByContractNumber(String contractNumber);

    List<Contract> findByStatusOrderByCreatedDateDesc(String status);

    boolean existsByContractNumber(String contractNumber);

    @Query("""
        SELECT c FROM Contract c
        JOIN FETCH c.customerType
        WHERE c.status = :status
        """)
    List<Contract> findByStatusWithCustomerType(@Param("status") String status);
}
```

**Rules:**

- Extend `JpaRepository<Entity, Long>`
- `Optional<T>` for single-entity lookups
- Use Spring Data query derivation where possible
- JPQL `@Query` with text blocks for complex queries
- `JOIN FETCH` to avoid N+1 problems

### Core Module (`template-application-core`)

**Mapper conventions:**

```java
@Service
public class ContractMapper {

    public ContractDTO toDto(Contract entity) {
        return new ContractDTO(
            entity.getId(),
            entity.getContractNumber(),
            entity.getCustomerName(),
            entity.getCustomerType().getId(),
            entity.getStatus(),
            entity.getCreatedDate()
        );
    }

    public Contract toEntity(ContractDTO dto, CustomerType customerType) {
        var contract = new Contract(dto.contractNumber(), customerType);
        contract.setCustomerName(dto.customerName());
        contract.setStatus(dto.status());
        return contract;
    }

    public void updateEntity(Contract entity, ContractDTO dto, CustomerType customerType) {
        entity.setContractNumber(dto.contractNumber());
        entity.setCustomerName(dto.customerName());
        entity.setCustomerType(customerType);
        entity.setStatus(dto.status());
    }
}
```

**Rules:**

- `@Service` annotation (manual mapping, no MapStruct)
- `toDto()` for entity → DTO
- `toEntity()` for DTO → new entity
- `updateEntity()` for DTO → existing entity

**Service conventions:**

```java
@Service
public class ContractService {

    private final ContractRepository contractRepository;
    private final CustomerTypeRepository customerTypeRepository;
    private final ContractMapper contractMapper;

    // Constructor injection (no @Autowired)
    public ContractService(ContractRepository contractRepository,
                           CustomerTypeRepository customerTypeRepository,
                           ContractMapper contractMapper) {
        this.contractRepository = contractRepository;
        this.customerTypeRepository = customerTypeRepository;
        this.contractMapper = contractMapper;
    }

    public List<ContractDTO> findAll() {
        return contractRepository.findAll().stream()
            .map(contractMapper::toDto)
            .toList();
    }

    public ContractDTO findById(Long id) {
        return contractRepository.findById(id)
            .map(contractMapper::toDto)
            .orElseThrow(() -> new IdNotFoundException("Contract", id));
    }

    public ContractDTO create(ContractDTO dto) {
        if (contractRepository.existsByContractNumber(dto.contractNumber())) {
            throw new DuplicateContractNumberException(dto.contractNumber());
        }
        var customerType = customerTypeRepository.findById(dto.customerTypeId())
            .orElseThrow(() -> new IdNotFoundException("CustomerType", dto.customerTypeId()));
        var entity = contractMapper.toEntity(dto, customerType);
        var saved = contractRepository.save(entity);
        return contractMapper.toDto(saved);
    }

    public ContractDTO update(Long id, ContractDTO dto) {
        var entity = contractRepository.findById(id)
            .orElseThrow(() -> new IdNotFoundException("Contract", id));
        var customerType = customerTypeRepository.findById(dto.customerTypeId())
            .orElseThrow(() -> new IdNotFoundException("CustomerType", dto.customerTypeId()));
        contractMapper.updateEntity(entity, dto, customerType);
        var saved = contractRepository.save(entity);
        return contractMapper.toDto(saved);
    }

    public void delete(Long id) {
        if (!contractRepository.existsById(id)) {
            throw new IdNotFoundException("Contract", id);
        }
        contractRepository.deleteById(id);
    }
}
```

**Rules:**

- Constructor injection only (no `@Autowired`)
- Return DTOs, not entities
- Throw custom exceptions extending `BaseException`
- Use `Optional.orElseThrow()` for not-found cases
- Validate business rules before persistence operations

### Web Module (`template-application-web`)

**Controller conventions:**

```java
@RestController
@RequestMapping("/contracts")
@Tag(name = "Contracts", description = "Contract management endpoints")
public class ContractController {

    private final ContractService contractService;

    public ContractController(ContractService contractService) {
        this.contractService = contractService;
    }

    @GetMapping
    @Operation(summary = "Get all contracts")
    public ResponseEntity<List<ContractDTO>> findAll() {
        return ResponseEntity.ok(contractService.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get contract by ID")
    public ResponseEntity<ContractDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(contractService.findById(id));
    }

    @PostMapping
    @Operation(summary = "Create a new contract")
    public ResponseEntity<ContractDTO> create(@Valid @RequestBody ContractDTO dto) {
        var created = contractService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing contract")
    public ResponseEntity<ContractDTO> update(@PathVariable Long id,
                                               @Valid @RequestBody ContractDTO dto) {
        return ResponseEntity.ok(contractService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a contract")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        contractService.delete(id);
    }
}
```

**Rules:**

- `@RestController` with `@RequestMapping` base path
- OpenAPI `@Tag` and `@Operation` annotations
- Return `ResponseEntity` with proper HTTP status codes
- `@Valid` on `@RequestBody` for validation
- Constructor injection

**Exception handler conventions:**

```java
@ControllerAdvice
public class ContractExceptionHandler {

    @ExceptionHandler(DuplicateContractNumberException.class)
    public ResponseEntity<ErrorDTO> handleDuplicateContractNumber(
            DuplicateContractNumberException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
            .body(new ErrorDTO(ex.getMessage()));
    }
}
```

## Code Quality Standards

### Naming Conventions

| Type         | Convention                               | Example                                       |
| ------------ | ---------------------------------------- | --------------------------------------------- |
| Classes      | PascalCase                               | `ContractService`                             |
| Methods      | camelCase                                | `findByContractNumber()`                      |
| Constants    | UPPER_SNAKE_CASE                         | `MAX_CONTRACT_LENGTH`                         |
| Variables    | camelCase                                | `contractNumber`                              |
| Packages     | lowercase                                | `com.lhsystems.groupsalestool`                |
| Test classes | `*Test` / `*IT`                          | `ContractServiceTest`                         |
| Test methods | `should_expectedBehavior_when_condition` | `should_throwException_when_contractNotFound` |

### Anti-Patterns to Avoid

```java
// ❌ Avoid: Field injection
@Autowired
private ContractRepository repository;

// ✅ Preferred: Constructor injection
private final ContractRepository repository;

// ❌ Avoid: Returning entities from controllers
@GetMapping("/{id}")
public Contract findById(@PathVariable Long id) { ... }

// ✅ Preferred: Return DTOs
@GetMapping("/{id}")
public ResponseEntity<ContractDTO> findById(@PathVariable Long id) { ... }

// ❌ Avoid: Catching generic exceptions
try { ... } catch (Exception e) { ... }

// ✅ Preferred: Catch specific exceptions
try { ... } catch (DataIntegrityViolationException e) { ... }

// ❌ Avoid: Using Optional.get()
var contract = repository.findById(id).get();

// ✅ Preferred: Use orElseThrow
var contract = repository.findById(id)
    .orElseThrow(() -> new IdNotFoundException("Contract", id));

// ❌ Avoid: Nullable return types
public Contract findById(Long id) { return null; }

// ✅ Preferred: Use Optional
public Optional<Contract> findById(Long id) { ... }

// ❌ Avoid: Imperative collection processing
List<ContractDTO> result = new ArrayList<>();
for (Contract c : contracts) {
    result.add(mapper.toDto(c));
}

// ✅ Preferred: Stream API
var result = contracts.stream()
    .map(mapper::toDto)
    .toList();
```

### Checkstyle Rules

This project enforces Checkstyle 13.2.0. Key rules:

- **Line length:** Maximum 120 characters
- **Indentation:** 4 spaces (no tabs)
- **Imports:** No wildcard imports, organized order
- **Javadoc:** Required on public API classes and methods
- **Naming:** Follow standard Java conventions
- **Braces:** Always required for control statements

### SpotBugs / FindSecBugs

The project runs SpotBugs 4.9.8 with FindSecBugs plugin. Common flags:

- `NP_NULL_ON_SOME_PATH` — Possible null dereference
- `EI_EXPOSE_REP` — Mutable internal representation exposed
- `SQL_INJECTION` — SQL injection vulnerability
- `HARD_CODE_PASSWORD` — Hardcoded credentials

**Fix common issues:**

```java
// ❌ EI_EXPOSE_REP: Returning mutable list
public List<Deadline> getDeadlines() {
    return deadlines;
}

// ✅ Return unmodifiable copy
public List<Deadline> getDeadlines() {
    return Collections.unmodifiableList(deadlines);
}
```

## Logging

Use SLF4J with parameterized messages:

```java
private static final Logger log = LoggerFactory.getLogger(ContractService.class);

// ✅ Parameterized logging (no string concatenation)
log.info("Creating contract with number: {}", contractNumber);
log.error("Failed to find contract with id: {}", id, exception);

// ❌ Avoid: String concatenation in log
log.info("Creating contract with number: " + contractNumber);
```

## Related Instructions

- **Testing:** `.github/instructions/testing-standards.instructions.md`
- **Code Review:** `.github/instructions/code-review.instructions.md`
- **Documentation:** `.github/instructions/documentation.instructions.md`
