---
name: github-project-management
description: GitHub CLI, Project Board management, issue/PR automation, and workflow patterns for the GST backend project
---

# GitHub Project Management Skill

## Repository Information

- **Organization:** `lsy-gst`
- **Backend Repository:** `lsy-gst/group-sales-tool-core`
- **Frontend Repository:** `lsy-gst/gst-webui`
- **Project Board:** `https://github.com/orgs/lsy-gst/projects/4`

## GitHub CLI (gh) Commands

### Issue Management

```bash
# Create a migration issue
gh issue create \
  --repo lsy-gst/group-sales-tool-core \
  --title "feat(contract): Migrate ContractService from legacy GST" \
  --body "$(cat <<'EOF'
## Migration Task

**Legacy Service:** `ContractServiceImpl.java`
**Legacy Module:** `es.scheller.air.service.contract.business`
**Complexity:** ⭐⭐⭐

### Scope
- [ ] Create `ContractDTO` record in api module
- [ ] Create `Contract` JPA entity in persistence module
- [ ] Create JPA entity for `contract` table (matching MariaDB schema)
- [ ] Create `ContractRepository` in persistence module
- [ ] Create `ContractMapper` in core module
- [ ] Create `ContractService` in core module
- [ ] Create `ContractController` in web module
- [ ] Create `ContractExceptionHandler` in web module
- [ ] Write unit tests (100% coverage)
- [ ] Write integration tests with Testcontainers
- [ ] Update `openapi.yaml`

### Acceptance Criteria
- All CRUD operations functional
- 100% line/method/class coverage, 85% branch coverage
- Checkstyle + SpotBugs pass
- OpenAPI spec matches implementation
- Legacy parity verified against old GST
EOF
)" \
  --label "migration,backend,feat" \
  --milestone "Phase 3: Core Domain" \
  --assignee "@me"

# List migration issues
gh issue list --repo lsy-gst/group-sales-tool-core --label "migration" --state open

# Close issue with comment
gh issue close 42 --repo lsy-gst/group-sales-tool-core \
  --comment "Completed in PR #55. All tests pass, 100% coverage achieved."

# Add issue to project board
gh project item-add 4 --owner lsy-gst --url "https://github.com/lsy-gst/group-sales-tool-core/issues/42"
```

### Pull Request Management

```bash
# Create a PR
gh pr create \
  --repo lsy-gst/group-sales-tool-core \
  --title "feat(contract): Migrate ContractService from legacy GST" \
  --body "$(cat <<'EOF'
## Summary
Migrates the ContractService from the legacy GST system to Spring Boot.

Closes #42

## Changes
- Added `ContractDTO` record with Jakarta validation
- Added `Contract` JPA entity with audit fields
- JPA entity matches MariaDB schema
- Added `ContractMapper`, `ContractService`, `ContractController`
- Added `ContractExceptionHandler`
- Full test coverage (unit + integration)

## Checklist
- [x] `./mvnw verify` passes
- [x] JaCoCo coverage meets thresholds
- [x] Checkstyle passes
- [x] SpotBugs passes
- [x] OpenAPI spec updated
- [x] Unit tests added
- [x] Integration tests added
- [x] JPA entity validated against MariaDB schema
EOF
)" \
  --base main \
  --head feat/42-migrate-contract-service \
  --label "migration,backend" \
  --reviewer "team-lead"

# List open PRs
gh pr list --repo lsy-gst/group-sales-tool-core --state open

# Check PR status
gh pr checks 55 --repo lsy-gst/group-sales-tool-core

# Merge PR (squash)
gh pr merge 55 --repo lsy-gst/group-sales-tool-core --squash --delete-branch
```

### Label Management

```bash
# Create labels for migration tracking
gh label create "migration" --repo lsy-gst/group-sales-tool-core --color "0075ca" --description "Legacy GST migration task"
gh label create "phase/1-foundation" --repo lsy-gst/group-sales-tool-core --color "e4e669" --description "Phase 1: Foundation & Infrastructure"
gh label create "phase/2-reference" --repo lsy-gst/group-sales-tool-core --color "d4c5f9" --description "Phase 2: Reference Data Services"
gh label create "phase/3-core" --repo lsy-gst/group-sales-tool-core --color "f9d0c4" --description "Phase 3: Core Domain Services"
gh label create "phase/4-business" --repo lsy-gst/group-sales-tool-core --color "c2e0c6" --description "Phase 4: Business Logic Services"
gh label create "phase/5-external" --repo lsy-gst/group-sales-tool-core --color "bfd4f2" --description "Phase 5: External Integrations"
gh label create "phase/6-utilities" --repo lsy-gst/group-sales-tool-core --color "fef2c0" --description "Phase 6: Utility Services"
gh label create "complexity/low" --repo lsy-gst/group-sales-tool-core --color "0e8a16" --description "⭐ Low complexity"
gh label create "complexity/medium" --repo lsy-gst/group-sales-tool-core --color "fbca04" --description "⭐⭐ Medium complexity"
gh label create "complexity/high" --repo lsy-gst/group-sales-tool-core --color "d93f0b" --description "⭐⭐⭐ High complexity"
gh label create "backend" --repo lsy-gst/group-sales-tool-core --color "1d76db" --description "Backend (Spring Boot)"
gh label create "database" --repo lsy-gst/group-sales-tool-core --color "5319e7" --description "Database schema changes"
gh label create "api" --repo lsy-gst/group-sales-tool-core --color "006b75" --description "REST API changes"
gh label create "size/XS" --repo lsy-gst/group-sales-tool-core --color "3CBF00" --description "<10 lines changed"
gh label create "size/S" --repo lsy-gst/group-sales-tool-core --color "5D9801" --description "<100 lines changed"
gh label create "size/M" --repo lsy-gst/group-sales-tool-core --color "7F7203" --description "<500 lines changed"
gh label create "size/L" --repo lsy-gst/group-sales-tool-core --color "A14C05" --description "<1000 lines changed"
gh label create "size/XL" --repo lsy-gst/group-sales-tool-core --color "C32607" --description "1000+ lines changed"
```

### Milestone Management

```bash
# Create migration milestones
gh api repos/lsy-gst/group-sales-tool-core/milestones \
  --method POST \
  -f title="Phase 1: Foundation & Infrastructure" \
  -f description="Project setup, CI/CD, base architecture, Example service cleanup" \
  -f due_on="2026-03-31T23:59:59Z"

gh api repos/lsy-gst/group-sales-tool-core/milestones \
  --method POST \
  -f title="Phase 2: Reference Data Services" \
  -f description="CustomerType, ExchangeRate, Translation, Availability" \
  -f due_on="2026-05-31T23:59:59Z"

gh api repos/lsy-gst/group-sales-tool-core/milestones \
  --method POST \
  -f title="Phase 3: Core Domain Services" \
  -f description="Contract, User, MasterData, Dashboard" \
  -f due_on="2026-07-31T23:59:59Z"

gh api repos/lsy-gst/group-sales-tool-core/milestones \
  --method POST \
  -f title="Phase 4: Business Logic Services" \
  -f description="Offer, Pricing, Reservation, Deadline" \
  -f due_on="2026-10-31T23:59:59Z"

gh api repos/lsy-gst/group-sales-tool-core/milestones \
  --method POST \
  -f title="Phase 5: External Integrations" \
  -f description="PNR, Queue, Notification, Payment" \
  -f due_on="2026-12-31T23:59:59Z"

gh api repos/lsy-gst/group-sales-tool-core/milestones \
  --method POST \
  -f title="Phase 6: Utility Services" \
  -f description="Logging, Scheduling, Reporting" \
  -f due_on="2027-02-28T23:59:59Z"
```

## GitHub Projects v2 GraphQL

### Query Project Board

```bash
# Get project ID and field IDs
gh api graphql -f query='
{
  organization(login: "lsy-gst") {
    projectV2(number: 4) {
      id
      title
      fields(first: 20) {
        nodes {
          ... on ProjectV2Field {
            id
            name
          }
          ... on ProjectV2SingleSelectField {
            id
            name
            options {
              id
              name
            }
          }
          ... on ProjectV2IterationField {
            id
            name
            configuration {
              iterations {
                id
                title
                startDate
                duration
              }
            }
          }
        }
      }
    }
  }
}'
```

### Update Item Status

```bash
# Move item to "In Progress"
gh api graphql -f query='
mutation {
  updateProjectV2ItemFieldValue(
    input: {
      projectId: "PROJECT_NODE_ID"
      itemId: "ITEM_NODE_ID"
      fieldId: "STATUS_FIELD_ID"
      value: { singleSelectOptionId: "IN_PROGRESS_OPTION_ID" }
    }
  ) {
    projectV2Item { id }
  }
}'
```

### Query Items by Status

```bash
gh api graphql -f query='
{
  organization(login: "lsy-gst") {
    projectV2(number: 4) {
      items(first: 100) {
        nodes {
          id
          content {
            ... on Issue {
              number
              title
              state
              labels(first: 5) {
                nodes { name }
              }
            }
            ... on PullRequest {
              number
              title
              state
            }
          }
          fieldValues(first: 10) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                field { ... on ProjectV2SingleSelectField { name } }
                name
              }
              ... on ProjectV2ItemFieldTextValue {
                field { ... on ProjectV2Field { name } }
                text
              }
            }
          }
        }
      }
    }
  }
}'
```

## Branch Strategy

### Branch Naming

```
{type}/{issue-number}-{short-description}
```

| Type       | Purpose             | Example                             |
| ---------- | ------------------- | ----------------------------------- |
| `feat`     | New feature/service | `feat/42-migrate-contract-service`  |
| `fix`      | Bug fix             | `fix/58-null-check-contract-mapper` |
| `refactor` | Code refactoring    | `refactor/61-extract-base-service`  |
| `chore`    | Maintenance, deps   | `chore/70-update-spring-boot`       |
| `docs`     | Documentation       | `docs/75-add-api-docs`              |
| `test`     | Test improvements   | `test/80-add-contract-it`           |
| `ci`       | CI/CD changes       | `ci/85-add-sonar-scan`              |

### Create Branch from Issue

```bash
# Create feature branch from issue
gh issue develop 42 --repo lsy-gst/group-sales-tool-core --name feat/42-migrate-contract-service --base main
```

## Conventional Commits

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types and Scopes

| Type       | When to Use                             |
| ---------- | --------------------------------------- |
| `feat`     | New feature or domain service           |
| `fix`      | Bug fix                                 |
| `refactor` | Code restructuring (no behavior change) |
| `test`     | Adding or fixing tests                  |
| `docs`     | Documentation changes                   |
| `chore`    | Build, CI, dependency updates           |
| `perf`     | Performance improvement                 |
| `ci`       | CI/CD pipeline changes                  |

| Scope          | Module/Domain                           |
| -------------- | --------------------------------------- |
| `api`          | template-application-api module         |
| `core`         | template-application-core module        |
| `persistence`  | template-application-persistence module |
| `web`          | template-application-web module         |
| `contract`     | Contract domain                         |
| `user`         | User management domain                  |
| `offer`        | Offer/pricing domain                    |
| `reservation`  | Reservation domain                      |
| `customer`     | Customer type/category domain           |
| `exchange`     | Exchange rate domain                    |
| `availability` | Availability domain                     |
| `deps`         | Dependency updates                      |

### Examples

```bash
git commit -m "feat(contract): add ContractDTO and Contract entity"
git commit -m "feat(persistence): add JPA entity for contract table"
git commit -m "test(contract): add ContractService unit tests"
git commit -m "fix(contract): handle null customer type in mapper"
git commit -m "docs(api): update openapi.yaml with contract endpoints"
git commit -m "chore(deps): update Spring Boot to 3.5.x"
git commit -m "ci: add SonarQube analysis step"
```

## Wiki Sync Workflow

```yaml
name: Wiki Sync
on:
  push:
    branches: [main]
    paths: ["docs/**"]
jobs:
  sync-wiki:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Sync Documents to Wiki
        env:
          GH_PAT: ${{ secrets.WIKI_SYNC_PAT }}
        run: |
          REPO_WIKI="github.com/${{ github.repository }}.wiki.git"
          git clone "https://x-access-token:${GH_PAT}@${REPO_WIKI}" temp_wiki
          cp -R docs/* temp_wiki/
          cd temp_wiki
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git commit -m "docs: automated sync from repository" || exit 0
          git push
```

## Best Practices

1. **Link issues to PRs** — Always use `Closes #N` in PR description
2. **Use milestones** — Assign every migration issue to a phase milestone
3. **Label consistently** — Apply migration, phase, complexity, and size labels
4. **Squash merge** — Keep main branch history clean
5. **Delete branches** — Remove merged feature branches automatically
6. **Review required** — At least one approval before merging
7. **CI must pass** — Never merge with failing checks
8. **Project board** — Keep items updated (Backlog → In Progress → In Review → Done)

## Related Skills

- `migration-planning` — How to plan and sequence migration tasks
- `spring-boot-architecture` — Understanding the target architecture
- `legacy-gst-analysis` — Analysing what needs to be migrated
