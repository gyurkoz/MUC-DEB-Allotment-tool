---
name: openapi-specialist
description: OpenAPI specification management, backward compatibility enforcement, and API contract validation for the GST backend running in parallel with the legacy GST system
---

# OpenAPI Specialist Skill

## Context: Parallel Operation

The **old GST** and **new GST** will run in parallel during the migration period. This means:

1. **The new backend MUST NOT break existing API contracts** consumed by the old GST frontend
2. **The new backend MUST implement the API contract** expected by the new GST UI (`/GST-UI/openapi.yaml`)
3. **Endpoints migrated from the old GST must maintain behavioral parity** — same request/response semantics
4. **New endpoints may be added freely**, but existing ones must not change in breaking ways

## OpenAPI Spec Locations

| File                                  | Purpose                                                          | Owner    |
| ------------------------------------- | ---------------------------------------------------------------- | -------- |
| `/group-sales-tool-core/openapi.yaml` | Backend API spec (auto-generated via `./mvnw verify -Popenapi`)  | Backend  |
| `/GST-UI/openapi.yaml`                | Frontend-expected API spec (consumed by Orval to generate hooks) | Frontend |

The backend spec **must be a superset** of what the frontend spec expects. Every endpoint, schema, and status code in the frontend spec must exist in the backend spec.

## Backward Compatibility Rules

### NEVER Break (❌ Forbidden Changes)

| Change                          | Why It Breaks                                      |
| ------------------------------- | -------------------------------------------------- |
| Remove an endpoint              | Old GST / new UI calls will fail with 404          |
| Remove a response field         | Clients parsing that field will get null/undefined |
| Change a field type             | `string` → `integer` causes deserialization errors |
| Make an optional field required | Old clients not sending the field get 400          |
| Change an endpoint path         | All clients must update their URLs                 |
| Change HTTP method              | `GET` → `POST` breaks all clients                  |
| Remove an enum value            | Clients using that value get validation errors     |
| Change response status code     | Clients checking status code will misroute         |
| Rename a field                  | Same as removing + adding — breaks deserialization |

### SAFE Changes (✅ Non-Breaking)

| Change                           | Why It's Safe                             |
| -------------------------------- | ----------------------------------------- |
| Add a new endpoint               | Existing clients don't call it            |
| Add an optional response field   | Clients ignore unknown fields             |
| Add an optional request field    | Old clients just don't send it            |
| Add a new enum value             | Old clients never send the new value      |
| Widen a type (`int` → `long`)    | Existing values still parse correctly     |
| Add a new tag                    | No impact on behavior                     |
| Add new response status code     | Clients should handle unexpected statuses |
| Deprecate (but keep) an endpoint | Warning only, no breakage                 |

### CAUTION Changes (⚠️ Requires Coordination)

| Change                             | Mitigation                                                             |
| ---------------------------------- | ---------------------------------------------------------------------- |
| Change validation rules (stricter) | May reject previously valid payloads — add custom error messages       |
| Add a required request field       | Version the endpoint (`/v2/resource`) or make it optional with default |
| Change pagination defaults         | May return different page sizes — document clearly                     |
| Change sort order                  | Clients relying on specific order may break — add explicit sort param  |

## Compatibility Verification Process

### Step 1: Diff Backend vs Frontend Spec

```bash
# Generate the current backend spec
cd /group-sales-tool-core
./mvnw verify -Popenapi

# Compare endpoint paths
diff <(grep -E '^\s{2}/[a-z]' openapi.yaml | sort) \
     <(grep -E '^\s{2}/[a-z]' /GST-UI/openapi.yaml | sort)

# Compare schema names
diff <(grep -E '^\s{4}[A-Z]' openapi.yaml | sort) \
     <(grep -E '^\s{4}[A-Z]' /GST-UI/openapi.yaml | sort)
```

### Step 2: Validate No Breaking Changes

```bash
# Install openapi-diff (if available)
# npm install -g openapi-diff

# Compare old vs new backend spec
# openapi-diff /path/to/old-openapi.yaml /path/to/new-openapi.yaml

# Manual check: list removed paths
comm -23 \
  <(grep -E '^\s{2}/[a-z]' old-openapi.yaml | sort) \
  <(grep -E '^\s{2}/[a-z]' openapi.yaml | sort)
```

### Step 3: Verify Schema Compatibility

For each DTO, verify:

```bash
# Check that response fields in the frontend spec exist in backend spec
# Extract schema fields from frontend spec
python3 -c "
import yaml, sys, json

with open('/GST-UI/openapi.yaml') as f:
    ui_spec = yaml.safe_load(f)

with open('/group-sales-tool-core/openapi.yaml') as f:
    be_spec = yaml.safe_load(f)

ui_schemas = ui_spec.get('components', {}).get('schemas', {})
be_schemas = be_spec.get('components', {}).get('schemas', {})

for name, schema in ui_schemas.items():
    if name in be_schemas:
        ui_fields = set(schema.get('properties', {}).keys())
        be_fields = set(be_schemas[name].get('properties', {}).keys())
        missing = ui_fields - be_fields
        if missing:
            print(f'⚠️  {name}: missing fields in backend: {missing}')
    else:
        print(f'❌ {name}: schema not found in backend spec')
"
```

### Step 4: Verify Legacy Endpoint Parity

When migrating a legacy service, verify the new endpoint preserves the old behavior:

```bash
# 1. Start the new backend
cd /group-sales-tool-core
./mvnw spring-boot:run -pl template-application-web -Pdev &

# 2. Call the endpoint with the same payload the old GST would use
curl -s http://localhost:8080/{endpoint} | jq .

# 3. Compare response structure with what the old GST returns
# Check: same field names, same types, same nesting
```

## OpenAPI Annotations in Controllers

### Required Annotations

Every controller must have:

```java
@RestController
@RequestMapping("/customer-types")
@Tag(name = "Customer Types", description = "Customer type management")
public class CustomerTypeController {

    @GetMapping
    @Operation(
        summary = "Get all customer types",
        description = "Returns a list of all customer types. Supports pagination.",
        operationId = "getCustomerTypes"
    )
    @ApiResponse(responseCode = "200", description = "Successfully retrieved list",
        content = @Content(schema = @Schema(implementation = CustomerTypeDTO.class)))
    public ResponseEntity<List<CustomerTypeDTO>> findAll() { ... }

    @GetMapping("/{id}")
    @Operation(summary = "Get customer type by ID", operationId = "getCustomerTypeById")
    @ApiResponse(responseCode = "200", description = "Customer type found")
    @ApiResponse(responseCode = "404", description = "Customer type not found",
        content = @Content(schema = @Schema(implementation = ErrorDTO.class)))
    public ResponseEntity<CustomerTypeDTO> findById(@PathVariable Long id) { ... }

    @PostMapping
    @Operation(summary = "Create a new customer type", operationId = "createCustomerType")
    @ApiResponse(responseCode = "201", description = "Customer type created")
    @ApiResponse(responseCode = "400", description = "Invalid input",
        content = @Content(schema = @Schema(implementation = ErrorDTO.class)))
    @ApiResponse(responseCode = "409", description = "Customer type already exists",
        content = @Content(schema = @Schema(implementation = ErrorDTO.class)))
    public ResponseEntity<CustomerTypeDTO> create(@Valid @RequestBody CustomerTypeDTO dto) { ... }
}
```

### OperationId Convention

The `operationId` is used by Orval in the frontend to generate hook names. Follow these conventions:

**IMPORTANT:** The `operationId` values **must exactly match** what the frontend defines in `/GST-UI/openapi.yaml`. Orval generates TanStack Query hooks from these — any mismatch breaks the frontend.

| HTTP Method  | Pattern             | Example               | Frontend Hook            |
| ------------ | ------------------- | --------------------- | ------------------------ |
| GET (list)   | `get{Resources}`    | `getCustomerTypes`    | `useGetCustomerTypes`    |
| GET (single) | `get{Resource}ById` | `getCustomerTypeById` | `useGetCustomerTypeById` |
| POST         | `create{Resource}`  | `createCustomerType`  | `useCreateCustomerType`  |
| PUT          | `update{Resource}`  | `updateCustomerType`  | `useUpdateCustomerType`  |
| DELETE       | `delete{Resource}`  | `deleteCustomerType`  | `useDeleteCustomerType`  |
| GET (search) | `search{Resources}` | `searchFlights`       | `useSearchFlights`       |
| PUT (upsert) | `upsert{Resource}`  | `upsertExchangeRate`  | `useUpsertExchangeRate`  |

> **Always check** `/GST-UI/openapi.yaml` for the exact `operationId` before adding a new endpoint. The frontend spec is the source of truth.

### Base Path

The frontend expects all endpoints under `/api/v1`. Each controller defines its own base path via `@RequestMapping`:

```java
@RestController
@RequestMapping("/api/v1/customer-types")
public class CustomerTypeController { ... }
```

> **Note:** Do NOT use `server.servlet.context-path=/api/v1`. The context path would affect
> Actuator, Swagger UI, and health endpoints. Use per-controller `@RequestMapping` instead.

## Frontend API Endpoints (GST UI)

The GST UI currently expects these endpoint groups:

| Tag        | Base Path     | Endpoints                                            | Status   |
| ---------- | ------------- | ---------------------------------------------------- | -------- |
| Auth       | `/auth`       | login, refresh, profile                              | Required |
| Users      | `/users`      | internal CRUD                                        | Required |
| Customers  | `/customers`  | customer CRUD                                        | Required |
| Profile    | `/profile`    | status, GDS, payments                                | Required |
| Conditions | `/conditions` | SSR, influence, common                               | Required |
| MasterData | `/masterdata` | countries, GDS, languages, types, categories         | Required |
| Flights    | `/flights`    | search                                               | Required |
| Offer      | `/offer`      | search, filter, create/confirm booking, manual offer | Required |
| Health     | `/health`     | ping, liveness, readiness                            | Required |
| Carousel   | `/carousel`   | slides                                               | Required |
| Content    | `/content`    | about, terms, contact                                | Required |
| Config     | `/config`     | registration, flight-search                          | Required |

### Priority Alignment

When deciding migration order, prioritize endpoints the UI already consumes:

1. **Health** — needed for monitoring, simplest to implement
2. **Auth** — needed for any authenticated endpoint
3. **MasterData** — reference data consumed by many UI features
4. **Config** — registration and flight-search configuration
5. **Customers** — customer management
6. **Flights/Offer** — core business functionality

## Spec Generation

### Auto-Generate from Controllers

```bash
# Generate openapi.yaml from SpringDoc annotations
cd /group-sales-tool-core
./mvnw verify -Popenapi

# The spec is output to openapi.yaml at the project root
```

### Manual Spec Updates

When auto-generation doesn't capture everything (e.g., custom examples, descriptions):

```yaml
# Add to openapi.yaml manually (or via @Schema annotations)
components:
  schemas:
    CustomerTypeDTO:
      type: object
      required:
        - name
      properties:
        id:
          type: integer
          format: int64
          description: Unique identifier
          example: 1
        name:
          type: string
          description: Customer type name
          example: "Corporate"
          minLength: 1
          maxLength: 100
        description:
          type: string
          description: Optional description
          example: "Corporate customer group"
        active:
          type: boolean
          description: Whether this type is active
          default: true
        createdDate:
          type: string
          format: date-time
          description: Creation timestamp
```

## Versioning Strategy

If a breaking change is unavoidable:

1. **Create a new versioned endpoint**: `/api/v2/resource`
2. **Keep the old endpoint working**: `/api/v1/resource` must continue to function via its `@RequestMapping`
3. **Deprecate the old endpoint**: Add `@Deprecated` and `deprecated: true` in OpenAPI
4. **Set a sunset date**: Document when the old endpoint will be removed
5. **Coordinate with frontend**: Ensure the UI team migrates to v2

```java
// Old endpoint (keep working, mark deprecated)
@Deprecated
@GetMapping("/api/v1/customer-types")
@Operation(summary = "Get all customer types", deprecated = true,
    description = "Deprecated: Use /api/v2/customer-types instead")
public ResponseEntity<List<CustomerTypeDTO>> findAllV1() { ... }

// New endpoint
@GetMapping("/api/v2/customer-types")
@Operation(summary = "Get all customer types with pagination")
public ResponseEntity<Page<CustomerTypeDTO>> findAllV2(Pageable pageable) { ... }
```

## Backward Compatibility Checklist

Before every PR that changes API endpoints:

- [ ] No endpoints removed from `openapi.yaml`
- [ ] No response fields removed from schemas
- [ ] No field types changed (especially string↔number)
- [ ] No optional fields made required
- [ ] No enum values removed
- [ ] New `operationId` values follow naming convention
- [ ] Frontend spec (`/GST-UI/openapi.yaml`) is still satisfied
- [ ] Auto-generated spec matches manual spec edits
- [ ] All new endpoints have proper `@ApiResponse` annotations
- [ ] Error responses use `ErrorDTO` schema

## Related Skills

- `spring-boot-architecture` — Controller and module patterns
- `java-best-practices` — Annotation conventions
- `migration-planning` — Endpoint migration priority
- `github-project-management` — API change coordination
