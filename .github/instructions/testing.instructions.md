---
description: 'Testing standards for unit tests (Vitest) and E2E tests (Playwright) in the GST project'
applyTo: '**/*.test.ts, **/*.test.tsx, **/*.spec.ts'
---

# Testing Standards

## Unit Testing with Vitest

### Test Structure

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  beforeEach(() => {
    // Setup before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Cleanup after each test
    vi.restoreAllMocks();
  });

  it('should render with props', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    render(<MyComponent onAction={onAction} />);

    await user.click(screen.getByRole('button'));
    expect(onAction).toHaveBeenCalledOnce();
  });

  it('should handle async operations', async () => {
    render(<MyComponent />);

    await waitFor(() => {
      expect(screen.getByText('Loaded')).toBeInTheDocument();
    });
  });
});
```

### Testing Library Query Priority

**Prefer (in order):**

1. `getByRole` - Best for accessibility
2. `getByLabelText` - Good for form fields
3. `getByPlaceholderText` - Forms without labels
4. `getByText` - Non-interactive elements
5. `getByTestId` - Last resort

```typescript
// ✅ Preferred: Accessible queries
screen.getByRole('button', { name: 'Submit' });
screen.getByLabelText('Email address');

// ❌ Avoid: Implementation details
screen.getByClassName('btn-primary');
container.querySelector('.submit-button');
```

### Mocking Patterns

```typescript
// Mock module
vi.mock('./api/client', () => ({
  fetchUser: vi.fn(),
}));

// Mock implementation
import { fetchUser } from './api/client';
vi.mocked(fetchUser).mockResolvedValue({ id: 1, name: 'Test' });

// Mock timers
vi.useFakeTimers();
// ... test code
vi.runAllTimers();
vi.useRealTimers();

// Spy on function
const spy = vi.spyOn(console, 'error');
// ... test code
expect(spy).toHaveBeenCalledWith('Error message');
spy.mockRestore();
```

### Async Testing

```typescript
// ✅ Use waitFor for async updates
await waitFor(() => {
  expect(screen.getByText('Success')).toBeInTheDocument();
});

// ✅ Use findBy queries (built-in waitFor)
const element = await screen.findByText('Success');

// ❌ Avoid: Manual delays
await new Promise((resolve) => setTimeout(resolve, 1000));
```

### Best Practices

- One `describe` block per component/function
- Use descriptive test names: "should [expected behavior] when [condition]"
- Test user behavior, not implementation details
- Clear all mocks in `beforeEach` to avoid test pollution
- Prefer `userEvent` over `fireEvent` for realistic interactions
- Use `screen` queries instead of destructured `render()`
- Test error states and edge cases

## E2E Testing with Playwright

### Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('User Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should login successfully', async ({ page }) => {
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('wrong@example.com');
    await page.getByLabel('Password').fill('wrong');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});
```

### Selector Best Practices

```typescript
// ✅ Preferred: Role-based (accessible)
page.getByRole('button', { name: 'Submit' });
page.getByRole('textbox', { name: 'Email' });

// ✅ Good: Labels and text
page.getByLabel('Username');
page.getByText('Welcome back');
page.getByPlaceholder('Enter email');

// ✅ Acceptable: Test IDs for dynamic content
page.getByTestId('user-profile');

// ❌ Avoid: CSS selectors (brittle)
page.locator('.btn-primary');
page.locator('#submit-btn');
```

### Common Patterns

```typescript
// Wait for navigation
await page.getByRole('link', { name: 'Dashboard' }).click();
await page.waitForURL('**/dashboard');

// Handle dialogs
page.on('dialog', (dialog) => dialog.accept());
await page.getByRole('button', { name: 'Delete' }).click();

// Upload file
await page.getByLabel('Upload').setInputFiles('path/to/file.pdf');

// Check element state
await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
await expect(page.getByText('Success')).toBeVisible();

// Screenshot on failure
test('should display dashboard', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Auto-screenshot on failure (Playwright does this by default)
});
```

### PWA Testing Patterns

```typescript
// Service worker registration
test('should register service worker', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const swRegistered = await page.evaluate(async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      return registration !== null;
    }
    return false;
  });

  expect(swRegistered).toBe(true);
});

// Offline functionality
test('should work offline', async ({ page, context }) => {
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');

  await context.setOffline(true);
  await page.reload();

  await expect(page.getByRole('heading')).toBeVisible();

  await context.setOffline(false);
});
```

### Best Practices

- Group related tests with `test.describe()`
- Use `test.beforeEach()` for common setup
- Prefer `getByRole` for accessibility-first testing
- Wait for navigation with `page.waitForURL()`
- Test real user workflows end-to-end
- Include PWA-specific tests in `e2e/pwa.spec.ts`
- Use page object pattern for complex flows
- Let Playwright auto-capture screenshots on failure

### No File Operations in E2E Tests or Scripts

**Never use Python, Bash, shell scripts, or any external process to read/write files as part of E2E test execution.** File system operations (e.g., writing test output to files, reading fixtures from disk via scripts, piping results through `tee`, `>`, `>>`) require user approval in CI/GitHub environments, which **blocks the test process and causes failures**.

**Rules:**

- **No `tee`, `>`, `>>` redirects** in test commands — let Playwright/Vitest handle output natively
- **No Python/Bash helper scripts** to parse, transform, or write test results to disk
- **No `fs.writeFileSync` / `fs.readFileSync`** in test code for output capture — use Playwright's built-in reporters instead
- **No `child_process.exec`** or shell commands within test files for file I/O
- Use **Playwright's built-in reporters** (`html`, `json`, `junit`) for test output — they write to configured paths without requiring approval
- Use **Playwright fixtures and test artifacts** (screenshots, traces, videos) via built-in config — these are handled natively

```bash
# ❌ Wrong: File redirection blocks CI (requires approval)
npx playwright test 2>&1 | tee /tmp/results.txt
python3 parse_results.py > output.json

# ❌ Wrong: Shell script wrapper for test output
bash run-and-capture.sh

# ✅ Correct: Let Playwright handle output natively
npx playwright test --reporter=html
npx playwright test --reporter=json

# ✅ Correct: Use built-in Playwright config for artifacts
# (configured in playwright.config.ts — outputDir, reporter, use.trace, etc.)
npx playwright test
```

## Coverage & Quality

- **Target:** 80%+ code coverage for critical paths
- Focus on business logic and user workflows
- Test edge cases and error conditions
- Don't chase 100% coverage - prioritize meaningful tests
- Use coverage reports to find untested code: `coverage/index.html`

## Running Tests

### Vitest Commands (NOT Jest!)

**⚠️ This project uses Vitest, not Jest. Don't use `jest` commands!**

```bash
# ✅ Correct: Vitest
npm test
npm run test:watch

# ❌ Wrong: Jest (don't use these)
jest
npm run jest
```

### Run All Tests

```bash
npm test                    # Run all unit tests once
npm run test:watch          # Watch mode (auto re-run on changes)
npm run test:coverage       # Run with coverage report
npm run test:ui             # Visual UI mode in browser
```

### Run Specific File

```bash
# Single file
npm test src/components/MyComponent.test.tsx

# Multiple files
npm test src/components/Button.test.tsx src/components/Input.test.tsx

# Watch mode for specific file
npm run test:watch src/components/MyComponent.test.tsx
```

### Run Tests in Directory

```bash
# All tests in folder
npm test src/components/

# Nested folders
npm test src/components/forms/

# Watch mode for directory
npm run test:watch src/components/
```

### Run Tests by Pattern

```bash
# Match filename pattern
npm test Button              # Matches *Button*.test.tsx
npm test "User|Auth"         # Matches *User*.test.tsx or *Auth*.test.tsx

# Test name pattern (with -t flag)
npm test -- -t="should render"
npm test -- -t="MyComponent"

# Specific file + test name filter
npm test Button.test.tsx -- -t="should handle click"
```

### Run Changed Tests

```bash
# Only tests for changed files
npm test -- --changed

# Tests related to specific file
npm test -- --related src/components/MyComponent.tsx

# Watch mode (auto-detects changes)
npm run test:watch
```

### Common Vitest CLI Flags

```bash
# Verbose output (show all test names)
npm test -- --reporter=verbose

# Run sequentially (not parallel)
npm test -- --no-threads

# Update snapshots
npm test -- -u

# Bail on first failure
npm test -- --bail=1

# Custom timeout (in ms)
npm test -- --testTimeout=10000
```

### Playwright (E2E tests)

```bash
# Run all E2E tests
npm run test:e2e            # Headless mode
npm run test:e2e:ui         # Interactive UI mode
npm run test:e2e -- --headed  # With visible browser

# Specific file or pattern
npx playwright test e2e/login.spec.ts
npx playwright test --grep "user login"

# Debug mode
npx playwright test --debug
```

### CI/CD

```bash
npm run ci:full             # All checks (lint + test + build + E2E)
```

### Tips for Vitest

- **No `--` separator needed for file paths**: `npm test path/to/file.test.tsx`
- **Use `--` for flags**: `npm test -- -t="test name"` or `npm test -- --reporter=verbose`
- **Watch mode is your friend**: Auto-runs tests on file changes
- **Coverage HTML report**: Open `coverage/index.html` in browser after running `npm run test:coverage`

## Quick Reference

- Vitest docs: <https://vitest.dev/>
- Testing Library: <https://testing-library.com/react>
- Playwright: <https://playwright.dev/>
- Coverage reports: `coverage/index.html`
- E2E reports: `playwright-report/index.html`
