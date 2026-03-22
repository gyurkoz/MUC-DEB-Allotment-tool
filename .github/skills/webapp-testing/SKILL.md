---
name: webapp-testing
description: Advanced Playwright automation for PWA testing, visual regression, accessibility, and network mocking
---

# Web Application Testing (Advanced Patterns)

This skill provides advanced Playwright automation patterns for comprehensive web application testing beyond basic E2E scenarios.

## When to Use This Skill

Use this skill for **advanced testing scenarios**:

- PWA features (service worker, offline, install prompt)
- Visual regression testing
- Accessibility audits (a11y)
- Network interception and mocking
- Performance testing
- Complex authentication flows

**For basic E2E patterns**, see `.github/instructions/testing.instructions.md`

## PWA-Specific Testing

### Service Worker Registration

```javascript
import { test, expect } from '@playwright/test';

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
```

### Cache Storage Verification

```javascript
test('should cache static assets', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  
  const cachedAssets = await page.evaluate(async () => {
    const cacheNames = await caches.keys();
    const cache = await caches.open(cacheNames[0]);
    const requests = await cache.keys();
    return requests.map(req => req.url);
  });
  
  expect(cachedAssets.some(url => url.includes('index.html'))).toBe(true);
  expect(cachedAssets.some(url => url.includes('.js'))).toBe(true);
  expect(cachedAssets.some(url => url.includes('.css'))).toBe(true);
});
```

### Install Prompt

```javascript
test('should show install prompt', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  const installPromptShown = await page.evaluate(() => {
    return new Promise((resolve) => {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        resolve(true);
      });
      setTimeout(() => resolve(false), 2000);
    });
  });
  
  expect(installPromptShown).toBe(true);
});
```

### Push Notifications

```javascript
test('should request notification permission', async ({ page, context }) => {
  await context.grantPermissions(['notifications']);
  await page.goto('http://localhost:5173');
  
  await page.click('button:has-text("Enable Notifications")');
  
  const permission = await page.evaluate(() => Notification.permission);
  expect(permission).toBe('granted');
});
```

## Accessibility Testing

```javascript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('should be keyboard navigable', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  await page.keyboard.press('Tab');
  const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
  expect(['BUTTON', 'A', 'INPUT']).toContain(firstFocused);
  
  await page.keyboard.press('Enter');
  // Verify action occurred
});
```

## Visual Regression Testing

```javascript
import { test, expect } from '@playwright/test';

test('should match screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  
  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixels: 100,
  });
});

test('should match component screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173/components');
  
  const button = page.locator('button').first();
  await expect(button).toHaveScreenshot('primary-button.png');
});
```

## Network Interception

```javascript
test('should handle API errors gracefully', async ({ page }) => {
  await page.route('**/api/users', (route) => {
    route.fulfill({
      status: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    });
  });
  
  await page.goto('http://localhost:5173/users');
  
  await expect(page.locator('text=Failed to load users')).toBeVisible();
});

test('should handle slow network', async ({ page }) => {
  await page.route('**/api/data', async (route) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await route.continue();
  });
  
  await page.goto('http://localhost:5173');
  
  await expect(page.locator('[role="progressbar"]')).toBeVisible();
});

test('should mock API response', async ({ page }) => {
  await page.route('**/api/users', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, name: 'Test User' },
        { id: 2, name: 'Mock User' }
      ]),
    });
  });
  
  await page.goto('http://localhost:5173/users');
  
  await expect(page.getByText('Test User')).toBeVisible();
  await expect(page.getByText('Mock User')).toBeVisible();
});
```

## Best Practices

1. **PWA Testing:**
   - Test service worker registration and updates
   - Verify offline functionality with `context.setOffline(true)`
   - Check cache storage contents
   - Test install prompt behavior

2. **Accessibility:**
   - Use axe-core for automated scanning
   - Test keyboard navigation (Tab, Enter, Space)
   - Verify screen reader announcements
   - Check WCAG 2.1 AA compliance

3. **Visual Regression:**
   - Wait for `networkidle` before screenshots
   - Set `maxDiffPixels` tolerance
   - Baseline images in version control
   - Run in consistent environment (Docker/CI)

4. **Network Mocking:**
   - Test error states (4xx, 5xx)
   - Test loading states (slow network)
   - Mock authentication responses
   - Verify retry logic

## Related Resources

- Basic E2E patterns → `.github/instructions/testing.instructions.md`
- Playwright docs → <https://playwright.dev/>
- axe-core → <https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright>
- PWA testing → <https://web.dev/testing-pwa/>
