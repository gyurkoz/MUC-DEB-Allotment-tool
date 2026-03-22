---
name: testing-standards
description: Testing standards for the GST backend — JUnit 5, Mockito, Testcontainers, JaCoCo coverage requirements
---

# Testing Standards Skill

## Coverage Requirements

The project enforces strict JaCoCo coverage thresholds:

| Metric                     | Threshold | Scope                       |
| -------------------------- | --------- | --------------------------- |
| **Line coverage**          | 100%      | Unit tests (per class)      |
| **Method coverage**        | 100%      | Unit tests (per class)      |
| **Class coverage**         | 100%      | Unit tests (per class)      |
| **Branch coverage**        | 85%       | Unit tests (per class)      |
| **Line coverage (bundle)** | 90%       | Integration tests (overall) |
| **Complexity**             | max 30    | Per class                   |

### Excluded from Coverage

- `TemplateApplication` (main class)
- `JpaConfiguration` (JPA config)
- `core.exception.*` (exception classes)

## Test Organization

### Naming Conventions

| Test Type        | Suffix       | Plugin   | Location                         |
| ---------------- | ------------ | -------- | -------------------------------- |
| Unit test        | `*Test.java` | Surefire | `src/test/java/`                 |
| Integration test | `*IT.java`   | Failsafe | `src/test/java/`                 |
| Test fixture     | `*Util.java` | —        | `src/test/java/` in same package |

### Directory Structure

```
template-application-core/src/test/java/com/.../
├── core/
│   ├── mapper/
│   │   └── ExampleMapperTest.java
│   └── service/
│       └── ExampleServiceTest.java
└── util/
    └── ExampleUtil.java

template-application-web/src/test/java/com/.../
├── web/
│   ├── controller/
│   │   └── ExampleControllerIT.java
│   └── exception/
│       └── ExampleExceptionHandlerIT.java
└── BaseIntegrationTest.java
```

## Unit Testing Patterns

### Service Test

```java
package com.lhsystems.groupsalestool.templateapp.core.service;

import com.lhsystems.groupsalestool.templateapp.api.dto.ContractDTO;
import com.lhsystems.groupsalestool.templateapp.core.exception.IdNotFoundException;
import com.lhsystems.groupsalestool.templateapp.core.mapper.ContractMapper;
import com.lhsystems.groupsalestool.templateapp.persistence.entity.Contract;
import com.lhsystems.groupsalestool.templateapp.persistence.repository.ContractRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ContractServiceTest {

    @Mock
    private ContractRepository repository;

    @Mock
    private ContractMapper mapper;

    @InjectMocks
    private ContractService service;

    @Test
    void findAll_shouldReturnMappedDtos() {
        // Arrange
        var entity = ContractUtil.createEntity();
        var dto = ContractUtil.createDto();
        when(repository.findAll()).thenReturn(List.of(entity));
        when(mapper.toDto(entity)).thenReturn(dto);

        // Act
        var result = service.findAll();

        // Assert
        assertThat(result).hasSize(1).containsExactly(dto);
        verify(repository).findAll();
        verify(mapper).toDto(entity);
    }

    @Test
    void findAll_whenEmpty_shouldReturnEmptyList() {
        when(repository.findAll()).thenReturn(List.of());

        var result = service.findAll();

        assertThat(result).isEmpty();
    }

    @Test
    void findById_whenExists_shouldReturnDto() {
        var entity = ContractUtil.createEntity();
        var dto = ContractUtil.createDto();
        when(repository.findById(1L)).thenReturn(Optional.of(entity));
        when(mapper.toDto(entity)).thenReturn(dto);

        var result = service.findById(1L);

        assertThat(result).isEqualTo(dto);
    }

    @Test
    void findById_whenNotExists_shouldThrowIdNotFoundException() {
        when(repository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> service.findById(99L))
            .isInstanceOf(IdNotFoundException.class)
            .hasMessageContaining("99");
    }

    @Test
    void create_shouldSaveAndReturnDto() {
        var inputDto = ContractUtil.createDto();
        var entity = ContractUtil.createEntity();
        var savedEntity = ContractUtil.createEntity();
        var resultDto = ContractUtil.createDto();

        when(mapper.toEntity(inputDto)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(savedEntity);
        when(mapper.toDto(savedEntity)).thenReturn(resultDto);

        var result = service.create(inputDto);

        assertThat(result).isEqualTo(resultDto);
        verify(repository).save(entity);
    }

    @Test
    void update_whenExists_shouldUpdateAndReturnDto() {
        var dto = ContractUtil.createDto();
        var entity = ContractUtil.createEntity();
        when(repository.existsById(dto.id())).thenReturn(true);
        when(mapper.toEntity(dto)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(mapper.toDto(entity)).thenReturn(dto);

        var result = service.update(dto);

        assertThat(result).isEqualTo(dto);
    }

    @Test
    void update_whenNotExists_shouldThrowIdNotFoundException() {
        var dto = ContractUtil.createDto();
        when(repository.existsById(dto.id())).thenReturn(false);

        assertThatThrownBy(() -> service.update(dto))
            .isInstanceOf(IdNotFoundException.class);
    }

    @Test
    void deleteById_shouldCallRepository() {
        service.deleteById(1L);

        verify(repository).deleteById(1L);
    }
}
```

### Mapper Test

```java
@ExtendWith(MockitoExtension.class)
class ContractMapperTest {

    private ContractMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new ContractMapper();
    }

    @Test
    void toDto_shouldMapAllFields() {
        var entity = ContractUtil.createEntity();

        var result = mapper.toDto(entity);

        assertThat(result.id()).isEqualTo(entity.getId());
        assertThat(result.contractNumber()).isEqualTo(entity.getContractNumber());
        assertThat(result.customerName()).isEqualTo(entity.getCustomerName());
        assertThat(result.status()).isEqualTo(entity.getStatus());
        assertThat(result.createdDate()).isEqualTo(entity.getCreatedDate());
    }

    @Test
    void toEntity_shouldMapAllFields() {
        var dto = ContractUtil.createDto();

        var result = mapper.toEntity(dto);

        assertThat(result.getId()).isEqualTo(dto.id());
        assertThat(result.getContractNumber()).isEqualTo(dto.contractNumber());
        assertThat(result.getCustomerName()).isEqualTo(dto.customerName());
        assertThat(result.getStatus()).isEqualTo(dto.status());
    }
}
```

### Test Fixture Utility

```java
package com.lhsystems.groupsalestool.templateapp.util;

import com.lhsystems.groupsalestool.templateapp.api.dto.ContractDTO;
import com.lhsystems.groupsalestool.templateapp.persistence.entity.Contract;
import java.time.Instant;

/**
 * Test fixture utility for Contract tests.
 */
public final class ContractUtil {

    private static final Long DEFAULT_ID = 1L;
    private static final String DEFAULT_CONTRACT_NUMBER = "C-001";
    private static final String DEFAULT_CUSTOMER_NAME = "Test Customer";
    private static final String DEFAULT_STATUS = "DRAFT";
    private static final Instant DEFAULT_CREATED_DATE = Instant.parse("2026-01-01T00:00:00Z");

    private ContractUtil() {
        // Utility class — prevent instantiation
    }

    public static Contract createEntity() {
        var entity = new Contract();
        entity.setId(DEFAULT_ID);
        entity.setContractNumber(DEFAULT_CONTRACT_NUMBER);
        entity.setCustomerName(DEFAULT_CUSTOMER_NAME);
        entity.setStatus(DEFAULT_STATUS);
        entity.setCreatedDate(DEFAULT_CREATED_DATE);
        return entity;
    }

    public static ContractDTO createDto() {
        return new ContractDTO(
            DEFAULT_ID,
            DEFAULT_CONTRACT_NUMBER,
            DEFAULT_CUSTOMER_NAME,
            DEFAULT_STATUS,
            DEFAULT_CREATED_DATE
        );
    }

    public static Contract createEntity(Long id, String contractNumber) {
        var entity = createEntity();
        entity.setId(id);
        entity.setContractNumber(contractNumber);
        return entity;
    }
}
```

## Integration Testing Patterns

### Base Integration Test

```java
package com.lhsystems.groupsalestool.templateapp;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.MariaDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

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

    @Autowired
    protected TestRestTemplate restTemplate;
}
```

### Controller Integration Test

```java
class ContractControllerIT extends BaseIntegrationTest {

    @Test
    void findAll_shouldReturnOk() {
        var response = restTemplate.getForEntity("/contracts", ContractDTO[].class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();
    }

    @Test
    void create_shouldReturn201() {
        var dto = new ContractDTO(null, "C-NEW", "New Customer", "DRAFT", null);

        var response = restTemplate.postForEntity("/contracts", dto, ContractDTO.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().id()).isNotNull();
        assertThat(response.getBody().contractNumber()).isEqualTo("C-NEW");
    }

    @Test
    void findById_whenNotExists_shouldReturn404() {
        var response = restTemplate.getForEntity("/contracts/99999", ErrorDTO.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    void create_withInvalidData_shouldReturn400() {
        var dto = new ContractDTO(null, "", "", null, null);  // Missing required fields

        var response = restTemplate.postForEntity("/contracts", dto, ErrorDTO.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }
}
```

### Slice Test (Controller Only)

```java
@WebMvcTest(ContractController.class)
class ContractControllerSliceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContractService service;

    @Test
    void findAll_shouldReturnOkWithJsonArray() throws Exception {
        when(service.findAll()).thenReturn(List.of(ContractUtil.createDto()));

        mockMvc.perform(get("/contracts"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$[0].contractNumber").value("C-001"));
    }

    @Test
    void create_withInvalidBody_shouldReturn400() throws Exception {
        var invalidJson = """
            {"contractNumber": "", "customerName": ""}
            """;

        mockMvc.perform(post("/contracts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidJson))
            .andExpect(status().isBadRequest());
    }
}
```

## Test Best Practices

### DO ✅

- Test behavior, not implementation details
- Use AssertJ fluent assertions (`assertThat`)
- Use meaningful test names that describe scenarios
- Test both happy path and error cases
- Use `@ExtendWith(MockitoExtension.class)` for unit tests
- Create test fixture utilities (`*Util` classes)
- Test all validation constraints
- Test edge cases (null, empty, boundary values)

### DON'T ❌

- Don't test trivial getters/setters individually
- Don't use `Thread.sleep()` in tests
- Don't share mutable state between tests
- Don't ignore test failures with `@Disabled`
- Don't use H2 for integration tests (use Testcontainers)
- Don't test implementation internals (which methods are called)
- Don't write tests just for coverage — make them meaningful

## Running Tests

```bash
# All tests (unit + integration)
./mvnw verify -B -V -ntp

# Unit tests only
./mvnw test

# Integration tests only
./mvnw failsafe:integration-test

# Single test class
./mvnw test -Dtest=ContractServiceTest

# Single test method
./mvnw test -Dtest="ContractServiceTest#findById_whenExists_shouldReturnDto"

# With coverage report
./mvnw verify
# Report at: template-application-jacoco-report/target/site/jacoco-aggregate/index.html
```

## Related Skills

- `spring-boot-architecture` — Module structure
- `java-best-practices` — Java 21 patterns used in tests
- `database-migration` — Liquibase baseline strategy and database setup for integration tests
