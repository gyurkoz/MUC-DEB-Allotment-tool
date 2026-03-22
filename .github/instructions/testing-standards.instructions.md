---
description: "Testing standards for unit tests (JUnit 5 + Mockito) and integration tests (Testcontainers) in the GST backend project"
applyTo: "**/*Test.java, **/*IT.java"
---

# Testing Standards

## Core Skills Reference

For comprehensive testing patterns and examples, see `.github/skills/testing-standards/SKILL.md`.

## Coverage Requirements

| Metric                | Threshold      | Enforced By |
| --------------------- | -------------- | ----------- |
| Line coverage         | 100%           | JaCoCo      |
| Method coverage       | 100%           | JaCoCo      |
| Class coverage        | 100%           | JaCoCo      |
| Branch coverage       | 85%            | JaCoCo      |
| Cyclomatic complexity | ≤30 per method | JaCoCo      |

Excluded from coverage: Application main class, JPA configuration, base exception classes.

## Unit Testing with JUnit 5 + Mockito

### Test Structure

```java
@ExtendWith(MockitoExtension.class)
class ContractServiceTest {

    @Mock
    private ContractRepository contractRepository;

    @Mock
    private CustomerTypeRepository customerTypeRepository;

    @Mock
    private ContractMapper contractMapper;

    @InjectMocks
    private ContractService contractService;

    @Test
    void should_returnAllContracts_when_contractsExist() {
        // given
        var entity = ContractUtil.createContract();
        var dto = ContractUtil.createContractDTO();
        when(contractRepository.findAll()).thenReturn(List.of(entity));
        when(contractMapper.toDto(entity)).thenReturn(dto);

        // when
        var result = contractService.findAll();

        // then
        assertThat(result).hasSize(1);
        assertThat(result.getFirst()).isEqualTo(dto);
        verify(contractRepository).findAll();
        verify(contractMapper).toDto(entity);
    }

    @Test
    void should_throwIdNotFoundException_when_contractNotFound() {
        // given
        when(contractRepository.findById(99L)).thenReturn(Optional.empty());

        // when / then
        assertThatThrownBy(() -> contractService.findById(99L))
            .isInstanceOf(IdNotFoundException.class)
            .hasMessageContaining("Contract")
            .hasMessageContaining("99");
    }
}
```

### Naming Conventions

Test methods follow the pattern: `should_expectedBehavior_when_condition`

```java
// ✅ Good test names
void should_returnContract_when_validIdProvided()
void should_throwException_when_contractNumberDuplicate()
void should_createContract_when_validDtoProvided()
void should_returnEmptyList_when_noContractsExist()
void should_deleteContract_when_contractExists()

// ❌ Bad test names
void testFindById()
void test1()
void contractCreation()
```

### Test Fixture Utilities

Create `*Util` classes in the test source tree for reusable test data:

```java
public final class ContractUtil {

    public static final Long DEFAULT_ID = 1L;
    public static final String DEFAULT_CONTRACT_NUMBER = "GST-2025-001";
    public static final String DEFAULT_CUSTOMER_NAME = "Test Customer";

    private ContractUtil() { }

    public static Contract createContract() {
        var contract = new Contract(DEFAULT_CONTRACT_NUMBER,
            CustomerTypeUtil.createCustomerType());
        contract.setId(DEFAULT_ID);
        contract.setCustomerName(DEFAULT_CUSTOMER_NAME);
        contract.setStatus("ACTIVE");
        return contract;
    }

    public static ContractDTO createContractDTO() {
        return new ContractDTO(
            DEFAULT_ID,
            DEFAULT_CONTRACT_NUMBER,
            DEFAULT_CUSTOMER_NAME,
            CustomerTypeUtil.DEFAULT_ID,
            "ACTIVE",
            Instant.now()
        );
    }

    public static ContractDTO createContractDTOWithoutId() {
        return new ContractDTO(
            null,
            DEFAULT_CONTRACT_NUMBER,
            DEFAULT_CUSTOMER_NAME,
            CustomerTypeUtil.DEFAULT_ID,
            "ACTIVE",
            null
        );
    }
}
```

### Mocking Patterns

```java
// ✅ Use @Mock and @InjectMocks
@Mock
private ContractRepository contractRepository;
@InjectMocks
private ContractService contractService;

// ✅ Verify interactions
verify(contractRepository).save(any(Contract.class));
verify(contractRepository, never()).deleteById(anyLong());
verify(contractMapper, times(2)).toDto(any(Contract.class));

// ✅ Argument captors for complex verification
@Captor
private ArgumentCaptor<Contract> contractCaptor;

@Test
void should_setFieldsCorrectly_when_creating() {
    // ...
    verify(contractRepository).save(contractCaptor.capture());
    var saved = contractCaptor.getValue();
    assertThat(saved.getContractNumber()).isEqualTo("GST-2025-001");
}

// ❌ Avoid: Mockito.mock() in test body (use @Mock annotation)
var repo = Mockito.mock(ContractRepository.class);

// ❌ Avoid: Unnecessary stubbing
when(repo.findById(1L)).thenReturn(Optional.of(entity)); // never called
```

### Mapper Testing

```java
class ContractMapperTest {

    private final ContractMapper contractMapper = new ContractMapper();

    @Test
    void should_mapEntityToDto() {
        // given
        var entity = ContractUtil.createContract();

        // when
        var dto = contractMapper.toDto(entity);

        // then
        assertThat(dto.id()).isEqualTo(entity.getId());
        assertThat(dto.contractNumber()).isEqualTo(entity.getContractNumber());
        assertThat(dto.customerName()).isEqualTo(entity.getCustomerName());
    }

    @Test
    void should_mapDtoToEntity() {
        // given
        var dto = ContractUtil.createContractDTOWithoutId();
        var customerType = CustomerTypeUtil.createCustomerType();

        // when
        var entity = contractMapper.toEntity(dto, customerType);

        // then
        assertThat(entity.getContractNumber()).isEqualTo(dto.contractNumber());
        assertThat(entity.getCustomerType()).isEqualTo(customerType);
    }
}
```

## Integration Testing with Testcontainers

### Base Integration Test

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
@ActiveProfiles("test")
abstract class BaseIntegrationTest {

    @Container
    static final MariaDBContainer<?> MARIADB =
        new MariaDBContainer<>("mariadb:11")
            .withDatabaseName("ubboew");
            // No withInitScript — Liquibase applies baseline changelog automatically

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", MARIADB::getJdbcUrl);
        registry.add("spring.datasource.username", MARIADB::getUsername);
        registry.add("spring.datasource.password", MARIADB::getPassword);
    }

    @Autowired
    protected TestRestTemplate restTemplate;
}
```

### Controller Integration Test

```java
class ContractControllerIT extends BaseIntegrationTest {

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private CustomerTypeRepository customerTypeRepository;

    @BeforeEach
    void setUp() {
        contractRepository.deleteAll();
    }

    @Test
    void should_returnAllContracts_when_getRequest() {
        // given
        var customerType = customerTypeRepository.save(
            CustomerTypeUtil.createCustomerType());
        var contract = new Contract("GST-2025-001", customerType);
        contract.setCustomerName("Test Customer");
        contract.setStatus("ACTIVE");
        contractRepository.save(contract);

        // when
        var response = restTemplate.getForEntity("/contracts", ContractDTO[].class);

        // then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).hasSize(1);
        assertThat(response.getBody()[0].contractNumber()).isEqualTo("GST-2025-001");
    }

    @Test
    void should_return201_when_createValidContract() {
        // given
        var customerType = customerTypeRepository.save(
            CustomerTypeUtil.createCustomerType());
        var dto = new ContractDTO(null, "GST-2025-002", "New Customer",
            customerType.getId(), "DRAFT", null);

        // when
        var response = restTemplate.postForEntity("/contracts", dto, ContractDTO.class);

        // then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().id()).isNotNull();
        assertThat(response.getBody().contractNumber()).isEqualTo("GST-2025-002");
    }

    @Test
    void should_return404_when_contractNotFound() {
        // when
        var response = restTemplate.getForEntity("/contracts/999", ErrorDTO.class);

        // then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    void should_return400_when_invalidDto() {
        // given
        var dto = new ContractDTO(null, "", "", null, null, null);

        // when
        var response = restTemplate.postForEntity("/contracts", dto, ErrorDTO.class);

        // then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }
}
```

### Slice Tests (Controller Only)

```java
@WebMvcTest(ContractController.class)
class ContractControllerSliceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContractService contractService;

    @Test
    void should_return200_when_getAllContracts() throws Exception {
        when(contractService.findAll()).thenReturn(List.of(ContractUtil.createContractDTO()));

        mockMvc.perform(get("/contracts")
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(1)))
            .andExpect(jsonPath("$[0].contractNumber").value("GST-2025-001"));
    }

    @Test
    void should_return404_when_contractNotFound() throws Exception {
        when(contractService.findById(99L))
            .thenThrow(new IdNotFoundException("Contract", 99L));

        mockMvc.perform(get("/contracts/99")
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isNotFound());
    }
}
```

## Best Practices

### Do's

- **One test method = one assertion focus** (related assertions are fine)
- **Use given/when/then** structure (AAA pattern)
- **Test all paths**: happy path, error cases, edge cases, boundary values
- **Use `assertThat()`** from AssertJ (not JUnit `assertEquals`)
- **Isolate tests**: No shared mutable state, clean up in `@BeforeEach`
- **Descriptive test names**: Explain expected behavior and conditions
- **Use test fixtures** (`*Util` classes) for consistent test data

### Don'ts

- **Don't test implementation details**: Test behavior, not how
- **Don't use `@Autowired` on test fields** in unit tests (use `@Mock` / `@InjectMocks`)
- **Don't ignore test failures**: Fix the code or fix the test
- **Don't mock entities in integration tests**: Use real database state
- **Don't use `Thread.sleep()`**: Use `Awaitility` for async assertions
- **Don't write tests that depend on execution order**
- **Don't use wildcard imports in test files**

### Test Organization

```
src/test/java/com/lhsystems/groupsalestool/templateapp/
├── core/
│   ├── mapper/
│   │   └── ContractMapperTest.java
│   └── service/
│       └── ContractServiceTest.java
├── web/
│   ├── controller/
│   │   ├── ContractControllerIT.java    # Full integration test
│   │   └── ContractControllerSliceTest.java  # Slice test
│   └── exception/
│       └── ContractExceptionHandlerTest.java
└── util/
    ├── ContractUtil.java
    └── CustomerTypeUtil.java
```

## Related Instructions

- **Java Standards:** `.github/instructions/java-spring-boot.instructions.md`
- **Code Review:** `.github/instructions/code-review.instructions.md`
