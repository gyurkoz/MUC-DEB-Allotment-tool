---
description: 'GitHub workflow and repository management instructions for the GST backend project'
applyTo: '.github/**/*.yml, .github/**/*.yaml'
---

# GitHub Instructions — GST Backend

## Repository Information

- **Repository**: `lsy-gst/group-sales-tool-core` (group-sales-tool-core)
- **Default branch**: `main`
- **Project board**: <https://github.com/orgs/lsy-gst/projects/4>
- **Organization**: `lsy-gst`

## Branch Strategy

### Branch Naming Convention

Use the following pattern: `{type}/{issue-number}-{short-description}`

| Type | Purpose | Example |
| --- | --- | --- |
| `feat/` | New domain service or feature | `feat/12-contract-management` |
| `fix/` | Bug fixes | `fix/23-null-pointer-in-mapper` |
| `refactor/` | Code restructuring | `refactor/15-extract-base-service` |
| `docs/` | Documentation changes | `docs/8-add-api-docs` |
| `test/` | Test additions or fixes | `test/19-contract-integration-tests` |
| `chore/` | Build, CI, dependency updates | `chore/25-update-spring-boot` |
| `migrate/` | Legacy GST migration tasks | `migrate/30-customer-type-service` |

### Creating a Branch

```bash
# Always branch from main
git checkout main
git pull origin main

# Create feature branch linked to issue
git checkout -b feat/12-contract-management

# Create migration branch
git checkout -b migrate/30-customer-type-service
```

### Branch Rules

1. **Never push directly to `main`** — always use pull requests
2. **Keep branches short-lived** — merge within 1-2 days
3. **One service per branch** — don't mix multiple domain services
4. **Rebase on main** before creating PR: `git rebase origin/main`

## Commit Conventions

### Conventional Commits Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types

| Type | Purpose | Example |
| --- | --- | --- |
| `feat` | New feature/endpoint | `feat(contract): add GET /contracts endpoint` |
| `fix` | Bug fix | `fix(mapper): handle null createdDate` |
| `refactor` | Code restructuring | `refactor(service): extract base CRUD service` |
| `test` | Test additions/fixes | `test(contract): add integration tests for CRUD` |
| `docs` | Documentation | `docs(api): update openapi.yaml with contract endpoints` |
| `chore` | Build/CI/tooling | `chore(deps): update Spring Boot to 3.5.8` |
| `perf` | Performance improvement | `perf(query): optimize contract search with pagination` |
| `ci` | CI/CD changes | `ci: add Trivy scan to build pipeline` |
| `style` | Code formatting | `style: apply checkstyle rules to contract package` |
| `migrate` | Legacy migration | `migrate(customer-type): port service from legacy GST` |

### Scopes

Use the domain service name or module as scope:

- `contract`, `user`, `offer`, `reservation`, `deadline`, `email`
- `masterdata`, `customer-type`, `customer-category`, `availability`
- `correspondence`, `template`, `translation`, `exchange-rate`
- `api`, `core`, `persistence`, `web` (for cross-cutting changes)
- `deps`, `ci`, `docker` (for infrastructure changes)

### Commit Examples

```bash
# Feature commits
git commit -m "feat(contract): add Contract entity and repository"
git commit -m "feat(contract): add ContractDTO with validation"
git commit -m "feat(contract): implement ContractService CRUD operations"
git commit -m "feat(contract): add ContractController REST endpoints"

# Test commits
git commit -m "test(contract): add ContractServiceTest with full coverage"
git commit -m "test(contract): add ContractControllerIT integration tests"

# Migration commits
git commit -m "migrate(customer-type): port CustomerType entity from legacy GST"
git commit -m "feat(persistence): add JPA entity for contract table"

# Fix commits
git commit -m "fix(contract): handle duplicate contract number with 409 response"
git commit -m "fix(mapper): prevent NPE when optional fields are null"

# Documentation commits
git commit -m "docs(contract): add contract endpoints to openapi.yaml"
git commit -m "docs: update migration progress in README"
```

## Pull Requests

### Creating a Pull Request

1. **Push your branch** to the remote:

   ```bash
   git push origin feat/12-contract-management
   ```

2. **Create PR via GitHub CLI**:

   ```bash
   gh pr create \
     --title "feat(contract): implement Contract Management service" \
     --body "## Summary
   Implements the Contract Management domain service migrated from the legacy GST.

   ## Changes
   - Added Contract entity, repository, service, controller
   - Created JPA entity for contract table
   - Added unit tests (100% coverage)
   - Added integration tests with Testcontainers
   - Updated openapi.yaml

   ## Migration Notes
   Migrated from \`es.scheller.air.service.contractmanagement\` in legacy GST.

   Closes #12" \
     --assignee @me \
     --label "migration,feature" \
     --project "lsy-gst/4"
   ```

3. **Or create via GitHub web UI** with the PR template below.

### PR Template

```markdown
## Summary

Brief description of what this PR does.

## Type of Change

- [ ] 🆕 New feature (domain service, endpoint)
- [ ] 🐛 Bug fix
- [ ] ♻️ Refactor
- [ ] 🔄 Legacy migration
- [ ] 📝 Documentation
- [ ] 🧪 Tests
- [ ] 🔧 Build/CI

## Changes

- List specific changes made
- Include new files, modified files
- Note any database migration changes

## Migration Context (if applicable)

- **Legacy service**: `es.scheller.air.service.{name}`
- **Legacy tables**: List tables migrated
- **API compatibility**: Note any differences from legacy API

## Testing

- [ ] Unit tests pass (`./mvnw test`)
- [ ] Integration tests pass (`./mvnw verify`)
- [ ] Checkstyle passes (`./mvnw checkstyle:check`)
- [ ] SpotBugs passes (`./mvnw spotbugs:check`)
- [ ] Coverage meets thresholds (100% line/method/class)
- [ ] OpenAPI spec updated

## Checklist

- [ ] Code follows project conventions
- [ ] Javadoc added for public APIs
- [ ] JPA entity matches MariaDB schema (`ddl-auto=validate` passes)
- [ ] No hardcoded values (use configuration)
- [ ] Error responses use ErrorDTO
- [ ] HTTP status codes are appropriate
```

### PR Review Process

1. **Automated checks** must pass (CI build, tests, coverage, quality)
2. **At least one reviewer** must approve
3. **Squash and merge** to keep main history clean
4. **Delete branch** after merge

### PR Size Guidelines

| Label | Lines Changed | Guidance |
| --- | --- | --- |
| `size/XS` | < 10 | Trivial fix, merge quickly |
| `size/S` | < 100 | Standard feature, one reviewer |
| `size/M` | < 500 | Full domain service, thorough review |
| `size/L` | < 1000 | Complex migration, multiple reviewers |
| `size/XL` | 1000+ | Split into smaller PRs if possible |

## Issues

### Issue Types

| Label | Purpose | Template |
| --- | --- | --- |
| `migration` | Migrating a service from legacy GST | Migration Issue |
| `feature` | New feature not in legacy | Feature Issue |
| `bug` | Bug in existing code | Bug Report |
| `enhancement` | Improvement to existing code | Enhancement |
| `documentation` | Documentation updates | Documentation |
| `test` | Test improvements | Testing |
| `infrastructure` | CI/CD, Docker, deploy | Infrastructure |

### Creating Issues

#### Via GitHub CLI

```bash
# Create a migration issue
gh issue create \
  --title "migrate: Port CustomerType service from legacy GST" \
  --body "## Migration Task

**Legacy Service:** \`es.scheller.air.service.customertype\`
**Legacy Tables:** \`customergrouptype\`
**Priority:** Medium
**Complexity:** ⭐ Low

## Requirements
- [ ] Create CustomerType entity
- [ ] Create CustomerTypeDTO
- [ ] Create CustomerTypeRepository
- [ ] Create CustomerTypeMapper
- [ ] Create CustomerTypeService
- [ ] Create CustomerTypeController
- [ ] Create JPA entity matching existing MariaDB table
- [ ] Write unit tests (100% coverage)
- [ ] Write integration tests
- [ ] Update openapi.yaml

## Legacy Reference
- API: \`CustomerTypeFunctionality\` interface
- Provider: \`CustomerTypeProviderImpl\`
- Database: \`customergrouptype\` table

## Acceptance Criteria
- All CRUD operations work
- API matches expected contract from GST UI
- 100% test coverage
- Passes all quality checks" \
  --label "migration" \
  --project "lsy-gst/4"
```

#### Via GitHub Web UI

Navigate to <https://github.com/lsy-gst/group-sales-tool-core/issues/new> and use the appropriate template.

### Issue Labels

#### Priority Labels

| Label | Color | Meaning |
| --- | --- | --- |
| `priority/critical` | 🔴 | Blocking other work |
| `priority/high` | 🟠 | Important, address soon |
| `priority/medium` | 🟡 | Standard priority |
| `priority/low` | 🟢 | Nice to have |

#### Status Labels

| Label | Meaning |
| --- | --- |
| `status/ready` | Ready to be worked on |
| `status/in-progress` | Currently being worked on |
| `status/review` | In code review |
| `status/blocked` | Blocked by dependency |

#### Domain Labels

| Label | Service Domain |
| --- | --- |
| `domain/contract` | Contract Management |
| `domain/user` | User Management |
| `domain/offer` | Offer/Pricing |
| `domain/reservation` | Reservations |
| `domain/masterdata` | Master Data |
| `domain/availability` | Availability |
| `domain/correspondence` | Correspondence |
| `domain/deadline` | Deadlines |

### Linking Issues to PRs

Always reference issues in PR descriptions and commits:

```bash
# In commit message
git commit -m "feat(contract): add Contract entity

Refs #12"

# In PR description — auto-closes the issue on merge
# Use: "Closes #12", "Fixes #12", or "Resolves #12"
```

## GitHub Projects Board

### Board URL

<https://github.com/orgs/lsy-gst/projects/4>

### Board Columns

| Column | Purpose |
| --- | --- |
| **Backlog** | Issues identified but not yet prioritized |
| **Ready** | Prioritized and ready to start |
| **In Progress** | Currently being worked on |
| **In Review** | PR created, awaiting review |
| **Done** | Merged to main |

### Moving Issues on the Board

```bash
# Via GitHub CLI (requires project item ID)
gh project item-edit --project-id PROJECT_ID --id ITEM_ID --field-id STATUS_FIELD_ID --single-select-option-id OPTION_ID

# Or use the web UI to drag issues between columns
```

### Sprint Planning

1. Move issues from **Backlog** to **Ready** at sprint start
2. Assign issues to developers
3. Add sprint milestone
4. Track progress daily on the board

## GitHub Actions CI/CD

### Automated Pipeline

Every push/PR to `main` triggers:

1. **Hadolint** — Dockerfile linting
2. **Maven verify** — Build, test, quality checks
3. **JaCoCo report** — Coverage uploaded to GitHub Pages
4. **Docker image** — Built and scanned with Trivy (main branch only)

### Manual Triggers

```bash
# Trigger a manual build
gh workflow run build.yml

# Trigger Docker image build with custom tag
gh workflow run image_build.yml -f tag=v1.0.0
```

### Viewing CI Results

```bash
# List recent workflow runs
gh run list --limit 5

# View specific run details
gh run view <run-id>

# View failed step logs
gh run view <run-id> --log-failed
```

## GitHub CLI Reference

### Installation

```bash
# Install GitHub CLI
brew install gh      # macOS
sudo apt install gh  # Ubuntu/Debian

# Authenticate
gh auth login
```

### Common Commands

```bash
# Repository
gh repo view lsy-gst/group-sales-tool-core
gh repo clone lsy-gst/group-sales-tool-core

# Issues
gh issue list
gh issue create
gh issue view 12
gh issue close 12

# Pull Requests
gh pr list
gh pr create
gh pr view 42
gh pr merge 42 --squash --delete-branch
gh pr checks 42

# Workflows
gh run list
gh run view <id>

# Projects
gh project list --owner lsy-gst
gh project item-list 4 --owner lsy-gst
```

## Security

### Secrets Management

- **Never commit credentials** to the repository
- Use **GitHub Secrets** for CI/CD tokens
- Store database credentials in **environment-specific configs**
- Use **`.gitignore`** for local config files

### Required Secrets

| Secret | Purpose |
| --- | --- |
| `GITHUB_TOKEN` | Auto-provided by GitHub Actions |
| `GHCR_TOKEN` | GitHub Container Registry push |
| `WIKI_SYNC_PAT` | Wiki sync — pushes docs to the GitHub Wiki (requires `contents: write` on the `.wiki` repo) |

## Best Practices

1. **Small, focused PRs** — One domain service per PR
2. **Descriptive commit messages** — Use conventional commits
3. **Link everything** — Issues ↔ PRs ↔ Board ↔ Commits
4. **Automate quality** — Let CI enforce standards
5. **Review promptly** — Don't let PRs sit for more than 24 hours
6. **Clean up branches** — Delete after merge
7. **Milestone tracking** — Group related issues into milestones
8. **Documentation** — Update docs alongside code changes
