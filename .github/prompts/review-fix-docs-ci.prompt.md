---
agent: 'agent'
description: 'Run a full review → fix → docs/tracker → CI workflow for all uncommitted frontend changes'
tools: ['read', 'search', 'edit', 'problems', 'githubRepo']
model: 'GPT-5.4'
---

# Review, Fix, Document, and Validate Uncommitted Changes

## Inputs

- `${input:repoRoot:Repository root (absolute path):/home/devel/projects/GST-UI}`
- `${input:iterationLimit:Maximum review/fix rounds:3}`
- `${input:trackerMode:Tracker update mode (auto|github|report-only):auto}`
- `${input:ciCommand:Full CI command or task:npm run ci:full}`

## Goal

Run a complete multi-agent workflow against **all uncommitted changed files** in the target frontend repository.

Use these agents exactly as follows:

- **Review and gap discovery:** `@trial-llm-code-reviewer`
- **Implementation and fixes:** `@GST-frontend-developer`

The workflow must:

1. review all uncommitted changed files comprehensively
2. fix all valid findings
3. iterate review/fix until the review is clean or the iteration limit is reached
4. review documentation and tracker impact comprehensively
5. implement the required docs and tracker updates
6. run full CI while skipping E2E tests
7. fix any remaining findings from CI
8. end with a verified summary of what changed, what passed, and what remains blocked

## Scope

### Files to include

Treat the working set as:

- all **staged** files
- all **unstaged** files
- any directly affected support files that must change to keep the implementation correct, including:
  - tests
  - docs under `docs/`
  - prompt/agent/config files under `.github/` when relevant
  - translations
  - API contracts such as `openapi.yaml`

### Files to exclude

Do not spend time reviewing or editing:

- generated output unless it is committed source of truth
- deleted files unless the deletion itself needs review commentary
- unrelated files with no impact on the current changes

## Required behavior

- **Do not stop after one pass.** Continue until the review is clean, CI is green, or a real blocker remains.
- **Do not skip docs/tracker work.** If code changes alter behavior, UX, workflows, architecture, testing, configuration, prompts, or agent setup, update documentation and tracker status accordingly.
- **Do not hide unresolved issues.** If something cannot be fixed, say exactly what remains and why.
- **Always prefer repo conventions** from `copilot-instructions.md`, instruction files, and relevant skills over generic advice.
- **Use the exact named agents above** for their assigned phases.

## Workflow

### Phase 1 — Gather context

1. Identify all uncommitted changed files in `${repoRoot}`.
2. Read the relevant files fully enough to understand the intent and the surrounding context.
3. Summarize the change set in a few bullets before starting the first review.
4. If there are no uncommitted changes, stop and report that there is nothing to review.

### Phase 2 — Comprehensive code review

Invoke `@trial-llm-code-reviewer` to review the full changed-file set comprehensively.

The review request must explicitly ask for:

- critical issues
- important issues
- suggestions
- missing tests
- translation/i18n validation where relevant
- accessibility issues
- docs gaps caused by the changes
- tracker / project-board update needs caused by the changes
- any CI risks likely to fail later

Capture the consolidated review output as the authoritative finding list for the round.

### Phase 3 — Fix the findings

Invoke `@GST-frontend-developer` to fix all valid findings from the previous review round.

Implementation requirements:

- make the smallest correct set of changes
- preserve existing patterns and public APIs unless a change is required
- add or update tests when behavior changes
- update translations when new user-facing strings are introduced
- update API contracts and mock data when code depends on them

### Phase 4 — Iterate review and fix

Repeat **Phase 2** and **Phase 3** until one of the following is true:

- the reviewer reports no actionable findings
- `${input:iterationLimit}` rounds have been completed
- a real blocker prevents further progress

If the iteration limit is reached, stop the loop and clearly list:

- what is still open
- why it remains open
- what should happen next

### Phase 5 — Documentation and tracker follow-through

Invoke `@technical-documentation-updater` again, this time focused specifically on reviewing documentation and tracker completeness comprehensively.

Require it to evaluate:

- whether `/docs` needs updates comprehensively
- whether README, feature docs, testing docs, architecture docs, or GitHub config docs are now stale
- whether tracker/project-board status, notes, acceptance criteria, or rollout notes should be updated
- whether a validation or migration note is needed

Then invoke `@technical-documentation-updater` to update the documentation comprehensively and invoke `@GST-frontend-developer` to implement any required non-documentation follow-up changes, including tracker-related project updates when applicable.

### Tracker handling rules

- If tracker/project-board update tooling is available, update the tracker directly.
- If direct tracker updates are not possible, create a **tracker-ready update summary** in the final response and, when appropriate, place supporting documentation in the repo.
- Never silently skip tracker updates.

### Phase 6 — Run full CI

Run `${input:ciCommand}` for the target repo, but skip running E2E tests.

If `${input:ciCommand}` normally includes E2E coverage, run the equivalent non-E2E validation steps instead and state explicitly which E2E checks were skipped.

Capture:

- failing command or step
- file paths
- error messages
- lint/typecheck/test/build failures

### Phase 7 — Fix CI findings

Invoke `@GST-frontend-developer` to fix all actionable CI failures.

Then re-run the same non-E2E validation scope until one of these is true:

- CI passes cleanly
- a non-actionable external blocker remains
- a genuine unresolved issue must be escalated

## Final output

End with a concise but complete report containing:

### Summary

- repo reviewed
- number of changed files reviewed
- number of review/fix rounds completed
- whether docs were updated
- whether tracker updates were applied or prepared
- final CI result

### Files changed

List the files changed during the workflow with a short reason for each.

### Review outcome

List:

- critical issues fixed
- important issues fixed
- suggestions adopted
- findings intentionally not applied, with reasons

### Documentation and tracker outcome

List:

- docs updated
- tracker items updated, or tracker-ready notes prepared
- any follow-up documentation still recommended

### Validation

Include:

- which checks ran
- confirmation that E2E tests were intentionally skipped
- whether `${input:ciCommand}` passed
- any remaining warnings or blockers

### Unresolved items

If anything remains unresolved, include a short blocker list with next actions.

## Example invocation

- `/review-fix-docs-ci`
- `/review-fix-docs-ci repoRoot=/home/devel/projects/GST-UI`
- `/review-fix-docs-ci repoRoot=/home/devel/projects/GST-UI iterationLimit=2 trackerMode=report-only`
