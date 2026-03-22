---
name: github-specialist
description: GitHub Project tracker, Wiki sync, and Workflow automation.
---

# GitHub Specialist Specification

## GitHub Project v2 GraphQL Example

To update a project item status, the agent should use a mutation like this:

```graphql
mutation {
  updateProjectV2ItemFieldValue(
    input: {
      projectId: "PROJECT_ID"
      itemId: "ITEM_ID"
      fieldId: "STATUS_FIELD_ID"
      value: { singleSelectOptionId: "DONE_OPTION_ID" }
    }
  ) { projectV2Item { id } }
}
```

## Wiki Automation Pattern

The documentation-sync.yml workflow must clone the .wiki.git repository and push
the docs/ folder content.

## Definition of Done (DoD) Checklist for Agents

- [ ] Imports are from @lsy-netline/* packages.
- [ ] No manual axios.get - only Orval hooks.
- [ ] Every new form field has a Zod validation rule.
- [ ] npm run typecheck passes without warnings.

## Wiki Sync Workflow

**File:** `.github/workflows/documentation-sync.yml`

```yaml
name: Wiki Sync
on:
  push:
    branches: [main]
    paths: ['docs/**']
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

## GitHub Actions Examples

### Auto-assign Issues

```yaml
name: Auto Assign
on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]

jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/auto-assign-action@v1
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          add-reviewers: true
          add-assignees: true
          reviewers: ["team-lead", "senior-dev"]
```

### Label PR by Size

```yaml
name: PR Size Labeler
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  size-label:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: codelytv/pr-size-labeler@v1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          xs_label: 'size/XS'
          xs_max_size: 10
          s_label: 'size/S'
          s_max_size: 100
          m_label: 'size/M'
          m_max_size: 500
          l_label: 'size/L'
          l_max_size: 1000
          xl_label: 'size/XL'
```

### Auto-close Stale Issues

```yaml
name: Close Stale Issues
on:
  schedule:
    - cron: '0 0 * * *'  # Run daily

jobs:
  stale:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/stale@v9
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          stale-issue-message: 'This issue is stale. It will be closed in 7 days.'
          close-issue-message: 'Closed due to inactivity.'
          days-before-stale: 60
          days-before-close: 7
          stale-issue-label: 'stale'
          exempt-issue-labels: 'pinned,security'
```

## Issue Automation with GraphQL

### Create Issue with Project Assignment

```graphql
mutation CreateIssueWithProject {
  createIssue(
    input: {
      repositoryId: "REPO_ID"
      title: "Bug: Login form validation"
      body: "Description of the bug..."
      labelIds: ["LABEL_ID_BUG"]
    }
  ) {
    issue {
      id
      number
    }
  }
  
  addProjectV2ItemById(
    input: {
      projectId: "PROJECT_ID"
      contentId: "ISSUE_NODE_ID"
    }
  ) {
    item {
      id
    }
  }
}
```

### Update Issue Status in Project

```graphql
mutation UpdateIssueStatus {
  updateProjectV2ItemFieldValue(
    input: {
      projectId: "PROJECT_ID"
      itemId: "ITEM_ID"
      fieldId: "STATUS_FIELD_ID"
      value: { 
        singleSelectOptionId: "IN_PROGRESS_OPTION_ID" 
      }
    }
  ) {
    projectV2Item {
      id
      fieldValues(first: 10) {
        nodes {
          ... on ProjectV2ItemFieldSingleSelectValue {
            name
          }
        }
      }
    }
  }
}
```

### Query Project Items with Status

```graphql
query GetProjectItems {
  node(id: "PROJECT_ID") {
    ... on ProjectV2 {
      items(first: 100) {
        nodes {
          id
          content {
            ... on Issue {
              number
              title
              state
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
                field {
                  ... on ProjectV2SingleSelectField {
                    name
                  }
                }
                name
              }
            }
          }
        }
      }
    }
  }
}
```

## GitHub API Authentication

### Using Personal Access Token (PAT)

```typescript
import { Octokit } from '@octokit/rest';

async function createGitHubIssue() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  // Create an issue
  const { data: issue } = await octokit.rest.issues.create({
    owner: 'lsy-netline',
    repo: 'netline-ui',
    title: 'Feature request: Dark mode support',
    body: 'It would be great to have dark mode...',
    labels: ['enhancement'],
  });

  console.log(`Created issue #${issue.number}`);
}
```

### Using GitHub App Authentication

```typescript
import { App } from '@octokit/app';

async function setupGitHubApp() {
  const app = new App({
    appId: process.env.GITHUB_APP_ID!,
    privateKey: process.env.GITHUB_PRIVATE_KEY!,
  });

  // Get installation octokit
  const octokit = await app.getInstallationOctokit(
    parseInt(process.env.GITHUB_INSTALLATION_ID!)
  );

  // Now use octokit to interact with GitHub API
  const { data: repos } = await octokit.rest.repos.listForOrg({
    org: 'lsy-netline',
  });
  
  return repos;
}
```

## Best Practices

1. **Use GraphQL for Projects v2** - More powerful and flexible than REST
2. **Store secrets securely** - Use GitHub Secrets, never commit tokens
3. **Rate limit awareness** - Implement exponential backoff for API calls
4. **Use GitHub Apps** - More secure than PATs for automation
5. **Automate documentation** - Keep wiki in sync with docs/ folder
6. **Label consistently** - Use label automation for better organization
7. **Close stale issues** - Keep issue tracker clean and manageable

## Related Skills

- `api-orchestrator` - Similar patterns for API integration and error handling
- `webapp-testing` - Testing GitHub Actions workflows locally
- `react-19` - Building GitHub-integrated dashboards with React
