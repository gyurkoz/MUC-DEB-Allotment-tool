---
name: migration-planning
description: Phase planning methodology, dependency analysis, effort estimation, and sequencing for migrating legacy GST services to the new Spring Boot backend
---

# Migration Planning Skill

## Migration Phases Overview

The legacy GST system has 23+ business services organized into 6 migration phases based on dependencies and complexity.

### Phase 1: Foundation & Infrastructure

**Goal:** Project scaffolding, CI/CD, architecture validation

| Task                        | Description                                         | Effort |
| --------------------------- | --------------------------------------------------- | ------ |
| Remove Example CRUD         | Clean up template app Example classes               | 1 day  |
| Configure CI/CD             | GitHub Actions, JaCoCo, quality gates               | 2 days |
| Setup Docker Compose        | MariaDB connection, dev profile                     | 1 day  |
| Generate Liquibase baseline | `liquibase generate-changelog` from existing ubboew | 2 days |
| Define base architecture    | Base exception, error handling, logging             | 3 days |
| OpenAPI spec structure      | Define API versioning, error schema                 | 1 day  |

### Phase 2: Reference Data Services (⭐ Low Complexity)

**Goal:** Simple CRUD services with no domain logic — validate architecture patterns

| Service                 | Legacy Module                              | Tables | Methods | Effort |
| ----------------------- | ------------------------------------------ | ------ | ------- | ------ |
| CustomerTypeService     | `es.scheller.air.service.customertype`     | 1      | ~10     | 2 days |
| CustomerCategoryService | `es.scheller.air.service.customercategory` | 1      | ~8      | 2 days |
| ExchangeRateService     | `es.scheller.air.service.exchangerate`     | 2      | ~15     | 3 days |
| TranslationService      | `es.scheller.air.service.translation`      | 1      | ~12     | 2 days |
| AvailabilityService     | `es.scheller.air.service.availability`     | 3      | ~20     | 3 days |
| PricingResponseService  | `es.scheller.air.service.pricingresponse`  | 1      | ~8      | 2 days |

**Dependency:** None (standalone reference data)

### Phase 3: Core Domain Services (⭐⭐ Medium Complexity)

**Goal:** Core business entities with moderate domain logic

| Service                    | Legacy Module                                     | Tables | Methods | Effort  |
| -------------------------- | ------------------------------------------------- | ------ | ------- | ------- |
| UserManagementService      | `es.scheller.air.service.usermanagement`          | 5+     | ~40     | 5 days  |
| MasterDataService          | `es.scheller.air.service.masterdata`              | 10+    | ~50     | 7 days  |
| ContractManagementService  | `es.scheller.air.service.contractmanagement`      | 8+     | ~60     | 10 days |
| DashboardPreferenceService | `es.scheller.air.service.dashboarduserpreference` | 2      | ~20     | 3 days  |

**Dependency:** Phase 2 reference data

### Phase 4: Business Logic Services (⭐⭐⭐ High Complexity)

**Goal:** Complex business rules, calculations, multi-entity operations

| Service                | Legacy Module                             | Tables | Methods | Effort  |
| ---------------------- | ----------------------------------------- | ------ | ------- | ------- |
| OfferService           | `es.scheller.air.service.offer`           | 5+     | ~70     | 10 days |
| ReservationService     | `es.scheller.air.service.reservation`     | 4+     | ~30     | 7 days  |
| DeadlineService        | `es.scheller.air.service.deadline`        | 2      | ~20     | 4 days  |
| CorrespondenceService  | `es.scheller.air.service.correspondence`  | 2      | ~15     | 3 days  |
| MessageInternalService | `es.scheller.air.service.messageinternal` | 2      | ~15     | 3 days  |

**Dependency:** Phase 3 contract/user services

### Phase 5: External Integrations (⭐⭐⭐ High Complexity)

**Goal:** External system integrations (PNR, queues, notifications)

| Service          | Legacy Module                       | Tables | Methods | Effort  |
| ---------------- | ----------------------------------- | ------ | ------- | ------- |
| PnrSyncService   | `es.scheller.air.service.pnrsync`   | 3+     | ~30     | 10 days |
| EmailService     | `es.scheller.air.service.email`     | —      | ~15     | 5 days  |
| TemplatesService | `es.scheller.air.service.templates` | 2      | ~20     | 5 days  |
| PaymentService   | `es.scheller.air.service.payment`   | 3+     | ~25     | 7 days  |
| CrmService       | `es.scheller.air.service.crm`       | —      | ~20     | 7 days  |

**Dependency:** Phase 4 reservation/offer services

### Phase 6: Utility Services (⭐ Low Complexity)

**Goal:** Supporting services, reporting, scheduling

| Service                      | Legacy Module                                   | Tables | Methods | Effort |
| ---------------------------- | ----------------------------------------------- | ------ | ------- | ------ |
| LogNightlyMaintenanceService | `es.scheller.air.service.lognightlymaintenance` | 1      | ~10     | 2 days |
| SftpService                  | `es.scheller.air.service.sftp`                  | —      | ~15     | 3 days |
| SpreadsheetService           | `es.scheller.air.service.spreadsheet`           | —      | ~10     | 2 days |

**Dependency:** All domain services

## Dependency Graph

```
Phase 1: Foundation
    │
    ▼
Phase 2: Reference Data ──────────────────────────┐
    │                                               │
    ▼                                               │
Phase 3: Core Domain                                │
    │                                               │
    ▼                                               │
Phase 4: Business Logic ◄──────────────────────────┘
    │
    ▼
Phase 5: External Integrations
    │
    ▼
Phase 6: Utility Services
```

## Service Dependency Analysis

When planning migration order within a phase, analyze dependencies:

### Step 1: Identify Entity References

```bash
# In the legacy codebase, find which entities reference others
grep -r "import.*\.entity\." gst_OLD/ --include="*.java" | sort | uniq
grep -r "@ManyToOne\|@OneToMany\|@ManyToMany" gst_OLD/ --include="*.java"
```

### Step 2: Map Foreign Keys

```bash
# In the legacy database, find foreign key relationships
# Query from the legacy MariaDB
SELECT
    TABLE_NAME,
    COLUMN_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME IS NOT NULL
    AND TABLE_SCHEMA = 'ubbo'
ORDER BY TABLE_NAME;
```

### Step 3: Build Dependency Matrix

| Service                   | Depends On             | Depended By                                           |
| ------------------------- | ---------------------- | ----------------------------------------------------- |
| CustomerTypeService       | (none)                 | ContractManagementService, OfferService               |
| ExchangeRateService       | (none)                 | OfferService                                          |
| UserManagementService     | (none)                 | ContractManagementService, DashboardPreferenceService |
| ContractManagementService | CustomerType, User     | OfferService, ReservationService, DeadlineService     |
| OfferService              | Contract, ExchangeRate | ReservationService                                    |
| ReservationService        | Offer, Contract        | PnrSyncService                                        |

### Step 4: Determine Migration Order

Within each phase, migrate in dependency order:

1. Services with **no dependencies** first
2. Services that **other services depend on** before those dependents
3. Services with **external dependencies** last

## Effort Estimation

### Estimation Formula

For each service, estimate effort based on:

```
Base effort (days) =
    Tables × 1.0
  + Methods ÷ 10
  + Complexity multiplier
  + Test effort (≈ 40% of dev time)
```

### Complexity Multipliers

| Complexity  | Multiplier | Characteristics                                                      |
| ----------- | ---------- | -------------------------------------------------------------------- |
| ⭐ Low      | ×1.0       | Simple CRUD, no business logic                                       |
| ⭐⭐ Medium | ×1.5       | Moderate business rules, 2-3 entity relationships                    |
| ⭐⭐⭐ High | ×2.0       | Complex calculations, external integrations, 4+ entity relationships |

### Example Estimation

**ContractService:**

- Tables: 8 → 8.0 days
- Methods: 60 → 6.0 days
- Complexity: ⭐⭐ → ×1.5
- Subtotal: (8.0 + 6.0) × 1.5 = 21.0 days
- Test effort: 21.0 × 0.4 = 8.4 days
- **Total: ~29 days (round to 30)**

> **Note:** These are rough estimates. Actual effort depends on domain complexity discovery during legacy analysis.

## Migration Task Template

### Issue Creation Checklist

For each service migration, create a GitHub issue with:

1. **Title:** `feat({scope}): Migrate {ServiceName} from legacy GST`
2. **Labels:** `migration`, `phase/{N}-{name}`, `complexity/{level}`, `backend`
3. **Milestone:** Phase milestone
4. **Body:** Standardized template (see below)

### Issue Body Template

```markdown
## Migration Task: {ServiceName}

**Legacy Service:** `{LegacyClassName}.java`
**Legacy Module:** `es.scheller.air.service.{domain}.business`
**Phase:** {N} - {PhaseName}
**Complexity:** {⭐/⭐⭐/⭐⭐⭐}
**Estimated Effort:** {X} days

### Legacy Analysis

- **Tables:** {list of legacy tables}
- **Key Methods:** {list of important methods}
- **Dependencies:** {list of dependent services}
- **External Integrations:** {any external systems}

### Migration Scope

#### API Module (`template-application-api`)

- [ ] Create `{Entity}DTO` record with Jakarta validation
- [ ] Create request/response records if needed

#### Persistence Module (`template-application-persistence`)

- [ ] Create `{Entity}` JPA entity (matching existing MariaDB table schema)
- [ ] Create `{Entity}Repository`

#### Core Module (`template-application-core`)

- [ ] Create `{Entity}Mapper` service
- [ ] Create `{Entity}Service` with business logic
- [ ] Create custom exceptions if needed

#### Web Module (`template-application-web`)

- [ ] Create `{Entity}Controller` with REST endpoints
- [ ] Create `{Entity}ExceptionHandler`
- [ ] Add OpenAPI annotations

#### Testing

- [ ] Unit tests for `{Entity}Service` (100% coverage)
- [ ] Unit tests for `{Entity}Mapper`
- [ ] Integration tests for `{Entity}Controller`
- [ ] Test fixture utility class

#### Documentation

- [ ] Update `openapi.yaml`
- [ ] Update migration progress in `docs/`
- [ ] Add API usage examples

### Acceptance Criteria

- [ ] All CRUD operations are functional
- [ ] `./mvnw verify` passes (all quality gates)
- [ ] 100% line/method/class coverage, 85% branch
- [ ] Legacy behavior parity verified
- [ ] PR reviewed and approved

### Legacy Reference

<!-- Link to relevant legacy code files -->

- `gst_OLD/{module}/src/.../business/{ServiceImpl}.java`
- `gst_OLD/{module}/src/.../api/{ServiceApi}.java`
- `gst_OLD/{module}/src/.../provider/{DaoProvider}.java`
```

## Progress Tracking

### Migration Dashboard

Track progress in `docs/migration/migration-progress.md`:

```markdown
# Migration Progress

| Phase             | Services   | Completed | In Progress | Remaining |
| ----------------- | ---------- | --------- | ----------- | --------- |
| 1. Foundation     | 5 tasks    | 5         | 0           | 0         |
| 2. Reference Data | 6 services | 2         | 1           | 3         |
| 3. Core Domain    | 4 services | 0         | 0           | 4         |
| 4. Business Logic | 5 services | 0         | 0           | 5         |
| 5. External       | 5 services | 0         | 0           | 5         |
| 6. Utilities      | 3 services | 0         | 0           | 3         |

**Overall:** 7/28 services migrated (25%)

### Detailed Status

#### Phase 2: Reference Data

| Service                 | Status         | PR  | Coverage | Notes                  |
| ----------------------- | -------------- | --- | -------- | ---------------------- |
| CustomerTypeService     | ✅ Done        | #12 | 100%     |                        |
| CustomerCategoryService | ✅ Done        | #15 | 100%     |                        |
| ExchangeRateService     | 🔄 In Progress | #18 | -        | Multi-currency support |
| TranslationService      | ⬜ Not Started | -   | -        |                        |
| AvailabilityService     | ⬜ Not Started | -   | -        |                        |
| PricingResponseService  | ⬜ Not Started | -   | -        |                        |
```

## Risk Assessment

### Common Migration Risks

| Risk                      | Impact | Mitigation                                   |
| ------------------------- | ------ | -------------------------------------------- |
| Legacy code undocumented  | High   | Thorough legacy analysis before coding       |
| Hidden dependencies       | High   | Full FK analysis, integration testing        |
| Data type incompatibility | Medium | Explicit type mapping, data validation       |
| Business logic ambiguity  | High   | Compare with UI behavior, ask domain experts |
| Performance regression    | Medium | Load testing after migration                 |
| Missing edge cases        | Medium | Comprehensive test coverage (100%)           |

### Mitigation Strategies

1. **Always analyze legacy code first** — Never assume behavior from method names
2. **Write tests before migration** — TDD ensures feature parity
3. **Migrate in small batches** — One service per PR, easy to review and rollback
4. **Validate with the UI** — Test migrated endpoints against GST-UI
5. **Keep legacy running** — Run both systems in parallel during migration

## Related Skills

- `legacy-gst-analysis` — How to analyze legacy services
- `spring-boot-architecture` — Target architecture patterns
- `database-migration` — Liquibase baseline strategy, shared MariaDB, and JPA entity patterns
- `github-project-management` — Issue/PR management
