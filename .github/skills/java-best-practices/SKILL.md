---
name: java-best-practices
description: Java 21 best practices and coding standards for the GST backend project
---

# Java 21 Best Practices Skill

## Java 21 Language Features

### Records

Use records for DTOs, value objects, and any immutable data carriers:

```java
// ✅ DTO as record
public record ContractDTO(
    Long id,
    @NotBlank String contractNumber,
    @NotNull ContractStatus status,
    Instant createdDate
) { }

// ✅ Value object as record
public record DateRange(LocalDate from, LocalDate to) {
    public DateRange {
        if (from.isAfter(to)) {
            throw new IllegalArgumentException("from must be before to");
        }
    }
}

// ✅ Query result as record
public record ContractSummary(Long id, String contractNumber, long offerCount) { }
```

**Rules:**
- ✅ Use records for DTOs, query results, configuration keys
- ❌ Do NOT use records for JPA entities (need mutability, proxy)
- ✅ Use compact constructors for validation
- ✅ Records with Jakarta validation annotations work correctly

### Sealed Classes

Use sealed classes for closed type hierarchies:

```java
// ✅ Exception hierarchy
public abstract sealed class BusinessException extends RuntimeException
    permits IdNotFoundException, DuplicateEntityException, ValidationException {
    
    protected BusinessException(String message) {
        super(message);
    }
}

public final class IdNotFoundException extends BusinessException {
    private final Long id;
    public IdNotFoundException(Long id) {
        super("Entity with id " + id + " not found");
        this.id = id;
    }
    public Long getId() { return id; }
}
```

### Pattern Matching

```java
// ✅ Pattern matching for instanceof
if (exception instanceof IdNotFoundException e) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(new ErrorDTO(e.getId().toString(), e.getMessage(), null, null));
}

// ✅ Switch with pattern matching
return switch (status) {
    case "DRAFT" -> ContractStatus.DRAFT;
    case "ACTIVE" -> ContractStatus.ACTIVE;
    case "CLOSED" -> ContractStatus.CLOSED;
    default -> throw new IllegalArgumentException("Unknown status: " + status);
};
```

### Text Blocks

```java
// ✅ Multi-line SQL
@Query("""
    SELECT c FROM Contract c
    WHERE c.status = :status
    AND c.createdDate >= :fromDate
    ORDER BY c.createdDate DESC
    """)
List<Contract> findByStatusAndCreatedDateAfter(
    @Param("status") String status,
    @Param("fromDate") Instant fromDate
);
```

### `var` (Local Variable Type Inference)

```java
// ✅ Good: Type is clear from the right side
var entity = new Contract();
var contracts = repository.findAll();
var dto = mapper.toDto(entity);
var result = service.findById(id);

// ❌ Bad: Type is not clear
var x = process(data);  // What type is this?
var value = getValue();  // Ambiguous
```

### Stream API

```java
// ✅ Collection processing with streams
public List<ContractDTO> findAll() {
    return repository.findAll().stream()
        .map(mapper::toDto)
        .toList();
}

// ✅ Filtering and mapping
public List<ContractDTO> findActive() {
    return repository.findAll().stream()
        .filter(c -> "ACTIVE".equals(c.getStatus()))
        .map(mapper::toDto)
        .sorted(Comparator.comparing(ContractDTO::createdDate).reversed())
        .toList();
}

// ❌ Avoid imperative loops for simple transformations
List<ContractDTO> result = new ArrayList<>();
for (Contract c : repository.findAll()) {
    result.add(mapper.toDto(c));
}
```

### Optional

```java
// ✅ Proper Optional usage
public ContractDTO findById(Long id) {
    return repository.findById(id)
        .map(mapper::toDto)
        .orElseThrow(() -> new IdNotFoundException(id));
}

// ✅ Optional with default
public String getDisplayName(Long id) {
    return repository.findById(id)
        .map(Contract::getCustomerName)
        .orElse("Unknown");
}

// ❌ Never use Optional for fields, parameters, or collections
public class Contract {
    private Optional<String> description;  // ❌ WRONG
}

public void process(Optional<String> filter) {  // ❌ WRONG
}
```

## Spring Boot Conventions

### Constructor Injection

```java
// ✅ Always use constructor injection
@Service
public class ContractService {
    private final ContractRepository repository;
    private final ContractMapper mapper;

    public ContractService(ContractRepository repository, ContractMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
}

// ❌ Never use field injection
@Service
public class ContractService {
    @Autowired  // ❌ WRONG
    private ContractRepository repository;
}
```

### ResponseEntity

```java
// ✅ Always wrap responses
@GetMapping
public ResponseEntity<List<ContractDTO>> findAll() {
    return ResponseEntity.ok(service.findAll());
}

@PostMapping
public ResponseEntity<ContractDTO> create(@Valid @RequestBody ContractDTO dto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(dto));
}

@DeleteMapping("/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)
public void deleteById(@PathVariable Long id) {
    service.deleteById(id);
}

// ❌ Don't return raw objects from controllers
@GetMapping
public List<ContractDTO> findAll() {  // ❌ Missing ResponseEntity
    return service.findAll();
}
```

### Validation

```java
// ✅ Request validation
@PostMapping
public ResponseEntity<ContractDTO> create(@Valid @RequestBody ContractDTO dto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(dto));
}

// ✅ Path variable validation
@GetMapping("/{id}")
public ResponseEntity<ContractDTO> findById(@PathVariable @Positive Long id) {
    return ResponseEntity.ok(service.findById(id));
}

// ✅ Custom validation in compact record constructor
public record DateRangeDTO(
    @NotNull LocalDate from,
    @NotNull LocalDate to
) {
    public DateRangeDTO {
        if (from != null && to != null && from.isAfter(to)) {
            throw new IllegalArgumentException("from must be before to");
        }
    }
}
```

## Code Style

### Naming Conventions

| Element | Convention | Example |
| --- | --- | --- |
| Classes | PascalCase | `ContractService` |
| Methods | camelCase | `findById` |
| Constants | UPPER_SNAKE | `MAX_RETRIES` |
| Packages | lowercase | `core.service` |
| Variables | camelCase | `contractNumber` |
| DTOs | `*DTO` suffix | `ContractDTO` |
| Entities | Plain name | `Contract` |
| Tests | `*Test` / `*IT` | `ContractServiceTest` |

### Javadoc Standards

```java
/**
 * Service for managing contracts.
 * Provides CRUD operations and business rule enforcement.
 */
@Service
public class ContractService {

    /**
     * Finds all contracts.
     *
     * @return list of all contracts as DTOs
     */
    public List<ContractDTO> findAll() { /* ... */ }

    /**
     * Finds a contract by its unique identifier.
     *
     * @param id the contract ID
     * @return the contract DTO
     * @throws IdNotFoundException if no contract exists with the given ID
     */
    public ContractDTO findById(Long id) { /* ... */ }
}
```

**Rules:**
- Javadoc on all public classes and methods
- Include `@param`, `@return`, `@throws` tags
- Focus on the "why" — don't state the obvious
- No `@author` tags (use git blame)

### Error Handling

```java
// ✅ Custom exceptions with meaningful messages
throw new IdNotFoundException(42L);  // "Entity with id 42 not found"
throw new DuplicateEntityException("contract", "ABC123");  // "contract with key ABC123 already exists"

// ✅ Catch specific exceptions
try {
    repository.save(entity);
} catch (DataIntegrityViolationException e) {
    throw new DuplicateEntityException("contract", entity.getContractNumber());
}

// ❌ Never catch generic Exception
try {
    repository.save(entity);
} catch (Exception e) {  // ❌ TOO BROAD
    throw new RuntimeException(e);
}

// ❌ Never swallow exceptions
try {
    repository.save(entity);
} catch (DataIntegrityViolationException e) {
    // ❌ Silently ignored
}
```

## Checkstyle Rules

The project enforces Checkstyle (`.settings/checkstyle.xml`). Common violations:

| Rule | Fix |
| --- | --- |
| `MissingJavadocMethod` | Add Javadoc to all public methods |
| `LineLength` (120 chars) | Break long lines |
| `UnusedImports` | Remove unused imports |
| `FinalParameters` | Add `final` to method parameters |
| `HiddenField` | Rename constructor params vs fields |
| `MagicNumber` | Extract constants |

## SpotBugs / FindSecBugs

Common issues to avoid:

| Bug Pattern | Fix |
| --- | --- |
| `NP_NULL_ON_SOME_METHOD` | Add null checks or use Optional |
| `SQL_INJECTION` | Use parameterized queries |
| `XSS` | Sanitize output |
| `HARD_CODE_PASSWORD` | Use environment variables |
| `EI_EXPOSE_REP` | Return defensive copies |
| `URF_UNREAD_FIELD` | Remove unused fields |

## Related Skills

- `spring-boot-architecture` — Module structure and patterns
- `testing-standards` — Testing conventions
- `database-migration` — Shared MariaDB and JPA entity patterns
