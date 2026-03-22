---
name: test-awareness
description: >
  Lightweight test organization knowledge for code reviewers.
  Covers test locations, frameworks, coverage expectations, and when to delegate to @tester agent.
---

# Test Awareness Skill

## Purpose

Provides basic test organization knowledge for code review and verification.
**NOT** for writing complex tests - use @tester agent for test implementation, debugging, and optimization.

## Test Organization

### Unit Tests (Vitest + Testing Library)

**Location:** `src/**/*.test.tsx` or `src/**/*.test.ts`

**Framework:** Vitest with React Testing Library

**Coverage Target:** >80% for new code

**Run Command:** `npm test`

**What to test:**

- Component rendering with different props
- User interactions (clicks, input changes)
- Conditional rendering logic
- Error states
- Accessibility (ARIA attributes, labels)

**Example file structure:**

```
src/
  components/
    UserForm.tsx
    UserForm.test.tsx  ← Unit test here
  utils/
    validation.ts
    validation.test.ts ← Unit test here
```

### E2E Tests (Playwright)

**Location:** `e2e/**/*.spec.ts`

**Framework:** Playwright

**Focus:** Real user workflows, not implementation details

**Run Command:** `npm run test:e2e`

**What to test:**

- Complete user journeys (login → navigate → action → verify)
- Form submissions
- Navigation flows
- Data persistence
- Cross-browser compatibility

**Example file structure:**

```
e2e/
  login.spec.ts
  user-management.spec.ts
  theme-switching.spec.ts
```

### PWA Tests (Playwright)

**Location:** `e2e/pwa.spec.ts`

**Focus:** Progressive Web App functionality

**Run Command:** `npm run test:e2e:pwa`

**What to test:**

- Offline behavior
- Service worker registration
- Manifest correctness
- Install prompt
- Cache strategies

## Test Quality Checklist

When reviewing test coverage:

- [ ] **Tests exist** for new features/components
- [ ] **Tests updated** for changed behavior
- [ ] **No implementation details** - Test user-visible behavior only
- [ ] **Accessibility selectors** - Use `getByRole`, `getByLabelText` over `getByTestId`
- [ ] **Proper isolation** - Tests don't depend on each other
- [ ] **Meaningful assertions** - Clear expectations, not just "no error"
- [ ] **Edge cases** covered (empty states, error states, loading states)

## Test Impact Assessment

**Low Risk (🟢):**

- Documentation changes
- Type-only changes
- Style updates (no logic change)

**Medium Risk (🟡):**

- Logic changes in well-tested code
- New optional features
- Refactoring with same behavior

**High Risk (🔴):**

- Core functionality changes
- API/data model changes
- State management changes
- Authentication/authorization changes

## When to Delegate to @tester Agent

**Delegate for:**

- ✅ Writing complex test suites
- ✅ Debugging flaky tests
- ✅ Test coverage optimization
- ✅ Playwright page object patterns
- ✅ Advanced mocking strategies
- ✅ Performance testing
- ✅ Visual regression tests

**Keep in review:**

- ✅ Verifying tests exist
- ✅ Running existing tests
- ✅ Identifying missing coverage
- ✅ Assessing test impact

## Testing Best Practices (Quick Reference)

**Do:**

- ✅ Test user behavior, not implementation
- ✅ Use descriptive test names (`it('should show error when email is invalid')`)
- ✅ Follow AAA pattern (Arrange, Act, Assert)
- ✅ Keep tests focused (one behavior per test)
- ✅ Use Testing Library queries by priority (role > label > placeholder > testId)

**Don't:**

- ❌ Test internal state or private methods
- ❌ Use generic test names (`it('works')`)
- ❌ Create test interdependencies
- ❌ Mock everything (test real integrations when possible)
- ❌ Ignore failing tests

## Test Commands Reference

```bash
# Unit tests
npm test                    # Run all unit tests
npm run test:watch          # Watch mode for TDD
npm run test:coverage       # Generate coverage report

# E2E tests
npm run test:e2e            # Run standard E2E tests
npm run test:e2e:ui         # Interactive E2E test UI
npm run test:e2e:pwa        # Run PWA-specific tests

# Full CI pipeline
npm run ci:full             # Typecheck + lint + tests + E2E
```

## Common Test Patterns

### Component Test Pattern

```typescript
// Basic structure (inline for reference only)
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ComponentName', () => {
  it('should render with correct props', () => {
    render(<ComponentName title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### E2E Test Pattern

```typescript
// Basic structure (inline for reference only)
import { test, expect } from '@playwright/test';

test('user can complete workflow', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('/dashboard');
});
```

**For complete patterns and implementation, use @tester agent.**
