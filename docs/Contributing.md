# Contributing

## Development Workflow

1. Create a feature branch from `develop`: `git checkout -b feature/my-feature develop`
2. Make changes following the conventions below
3. Ensure all checks pass: `./mvnw verify` (backend), `npm run ci:full` (frontend)
4. Commit using [Conventional Commits](#commit-conventions)
5. Push and open a Pull Request to `develop`
6. After review and CI pass, merge via squash merge

## Commit Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>
```

### Types

| Type       | Description |
| ---------- | ----------- |
| `feat`     | New feature |
| `fix`      | Bug fix |
| `docs`     | Documentation only |
| `style`    | Formatting, missing semicolons (no logic change) |
| `refactor` | Code restructuring (no feature or fix) |
| `test`     | Adding or updating tests |
| `chore`    | Build process, tooling, dependencies |
| `ci`       | CI/CD configuration |

### Scopes

| Scope      | Description |
| ---------- | ----------- |
| `api`      | booking-api module (DTOs) |
| `core`     | booking-core module (services, mappers) |
| `persist`  | booking-persistence module (entities, repos) |
| `web`      | booking-web module (controllers, config) |
| `frontend` | Frontend application |
| `docker`   | Docker configuration |
| `deps`     | Dependency updates |

### Examples

```
feat(core): add PNR status scheduler for hourly GDS checks
fix(web): return 409 instead of 400 for already cancelled bookings
docs: update API reference with cancellation business rules
test(core): add unit tests for EmailService
chore(deps): update Spring Boot to 3.5.7
```

## Backend Code Style

- **Java 21** — Use records, `var`, sealed classes, pattern matching
- **Constructor injection** — No `@Autowired` on fields
- **Manual mappers** — `@Service` classes, no MapStruct
- **100% test coverage** — Line, method, class (JaCoCo)
- **Checkstyle** — Configuration at `backend/.settings/checkstyle.xml`
- **SpotBugs** — Configuration at `backend/.settings/spotbugs-exclude.xml`

## Frontend Code Style

- **TypeScript strict mode** — No `any` types
- **ESLint** — Flat config at `frontend/eslint.config.js`
- **Prettier** — Auto-formatting
- **React 19 patterns** — Functional components, hooks, React Compiler
- **Netline UI v8** — Use component library for all UI elements

## Adding a New Backend Feature

1. **DTO** → `booking-api/src/main/java/.../api/dto/` (Java record)
2. **Entity + Repo** → `booking-persistence/src/main/java/.../persistence/`
3. **Mapper + Service** → `booking-core/src/main/java/.../core/`
4. **Controller** → `booking-web/src/main/java/.../web/controller/`
5. **Security** → Update `SecurityConfig` endpoint rules
6. **Tests** → Unit tests (`*Test.java`), integration tests (`*IT.java`)
7. **OpenAPI** → Update `openapi.yml`
8. **Frontend** → Run `npm run api:generate` to generate hooks

## Adding a New Frontend Feature

1. **Feature module** → `frontend/src/features/my-feature/`
2. **Route** → Add to `App.tsx` routing
3. **API hooks** → Generated from `openapi.yml` via Orval
4. **Tests** → Unit test in `__tests__/unit/`, E2E in `__tests__/e2e/`

## Branch Strategy

| Branch    | Purpose |
| --------- | ------- |
| `main`    | Production-ready code |
| `develop` | Integration branch for features |
| `feature/*` | Feature branches |
| `fix/*`   | Bug fix branches |

## Pull Request Checklist

- [ ] Code follows project conventions
- [ ] All tests pass (`./mvnw verify` / `npm run ci:full`)
- [ ] New code has unit tests with 100% coverage
- [ ] `openapi.yml` updated if API changed
- [ ] Documentation updated if behavior changed
- [ ] Conventional commit message format used
