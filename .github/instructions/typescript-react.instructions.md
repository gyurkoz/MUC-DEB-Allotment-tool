---
description: 'TypeScript and React 19 coding standards for the GST project with Netline UI components'
applyTo: '**/*.ts, **/*.tsx'
---

# TypeScript & React 19 Guidelines

## Core Skills References

When working with TypeScript and React code, follow patterns from these comprehensive skill guides:

- **React 19 Patterns**: See `.github/skills/react-19/SKILL.md` for detailed React 19.2 patterns including:
  - `use()` hook for promises and context
  - `useOptimistic()` for instant UI updates
  - `useActionState()` for form state management
  - `useTransition()` for non-urgent updates
  - `useEffectEvent()` for stable event callbacks (React 19.2)
  - `ref` as prop (no `forwardRef` needed)
  - Context shorthand syntax

- **TypeScript Best Practices**: See `.github/skills/typescript-best-practices/SKILL.md` for:
  - Component structure and organization
  - Naming conventions
  - DRY principles
  - Error handling patterns
  - Async/await best practices
  - Null/undefined handling
  - Immutability patterns
  - Custom hooks best practices

## React Compiler

**React Compiler is enabled by default** in this project, providing automatic memoization and optimization.

- **Avoid unnecessary memoization**: Don't add `useMemo`, `useCallback`, or `React.memo` unless profiling shows real performance issues
- **Write clean code first**: The compiler optimizes automatically
- **When to still use manual memoization**:
  - Extremely expensive calculations (verified by profiling)
  - Third-party libraries requiring stable references
  - Effect dependencies where function identity matters

## TypeScript Configuration

- Use strict mode enabled (`strict: true` in tsconfig.json)
- Explicit return types for all functions
- Use TypeScript interfaces over types for extensibility
- Prefer type inference where possible but be explicit in public APIs
- Avoid `any` - use `unknown` and type guards instead

## Component Best Practices

- Keep components under 200 lines
- Extract complex logic into custom hooks
- Use functional components exclusively
- Props interfaces with `ComponentNameProps` naming pattern
- Explicit return types for functions

## Import Organization

**Always use `@/` path alias for internal project modules** (except same-directory imports):

```typescript
// 1. External libraries
import { FC, useState } from 'react';

// 2. Netline UI components
import { Button, TextField, Box } from '@lsy-netline/netline-ui';

// 3. Internal modules (use @/ alias)
import { MyModel } from '@/models';
import { useCustomHook } from '@/hooks';

// 4. Same-directory relative imports (only exception)
import './styles.css';
import { helperFunction } from './utils';
```

**Note:** The `@/` alias maps to the `src/` directory (configured in `tsconfig.json`).

## Naming Conventions

- Components: PascalCase (`MyComponent.tsx`)
- Hooks: camelCase with `use` prefix (`useMyHook.ts`)
- Utilities: camelCase (`myUtility.ts`)
- Constants: UPPER_SNAKE_CASE
- Interfaces: PascalCase with `Props` suffix for component props

## Code Quality Standards

### Accessibility Best Practices

**Always use descriptive, context-aware alt text for images:**

```typescript
// ❌ Avoid: Generic alt text
<LogoImage src={logoPath} alt="Logo" />

// ✅ Preferred: Context-aware alt text
<LogoImage src={logoPath} alt={`${THEME_CONFIGS[themeMode].displayName} logo`} />
```

**Ensure all interactive elements have proper labels:**

```typescript
// ❌ Avoid: Icon buttons without labels
<IconButton onClick={handleClick}>
  <Language />
</IconButton>

// ✅ Preferred: Proper aria-label
<IconButton onClick={handleClick} aria-label="Language selector">
  <Language />
</IconButton>
```

### Internationalization (i18n)

**All user-facing text must use i18n, including error messages:**

```typescript
// ❌ Avoid: Hardcoded error messages
<Typography color="white">Failed to load carousel slides</Typography>

// ✅ Preferred: Use translation keys
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<Typography color="white">{t('errors.carouselLoadFailed')}</Typography>
```

### Netline UI Styling Patterns

**Always use `sx` prop or `styled()` components, never inline `style`:**

```typescript
// ❌ Avoid: Inline style attribute
<div
  style={{
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: isActive ? 'blue' : 'gray',
  }}
/>

// ✅ Preferred: Use Box with sx prop
<Box
  sx={{
    width: 24,
    height: 24,
    borderRadius: '50%',
    bgcolor: isActive ? 'primary.main' : 'grey.300',
  }}
/>
```

### Constants and Magic Numbers

**Extract repeated values and magic numbers to constants:**

```typescript
// ❌ Avoid: Magic numbers scattered in code
const FormContainer = styled('div')({
  width: '48rem', // 768px
  height: '100vh',
  gap: '2rem', // 32px
  padding: '2.5rem', // 40px
});

// ✅ Preferred: Extract to constants file
// consts/layoutConstants.ts
export const LOGIN_LAYOUT = {
  formWidth: '48rem',
  formPadding: '2.5rem',
  formGap: '2rem',
  logoHeight: '0.875rem',
} as const;

// Component file
const FormContainer = styled('div')({
  width: LOGIN_LAYOUT.formWidth,
  height: '100vh',
  gap: LOGIN_LAYOUT.formGap,
  padding: LOGIN_LAYOUT.formPadding,
});
```

### Component Functionality

**Avoid non-functional UI elements (buttons without handlers):**

```typescript
// ❌ Avoid: Button that does nothing
<IconButton aria-label="Language selector">
  <Language />
</IconButton>

// ✅ Option 1: Implement functionality
<LanguageSwitcher />

// ✅ Option 2: Remove or comment out if not ready
{/* TODO: Implement language switcher
<IconButton onClick={handleLanguageChange} aria-label="Language selector">
  <Language />
</IconButton>
*/}
```

### Effect Cleanup and Documentation

**Document useEffect cleanup and intervals:**

```typescript
// ❌ Avoid: Uncommented magic numbers
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, [slides]);

// ✅ Preferred: Document intent and extract constants
useEffect(() => {
  if (!slides || slides.length <= 1) return;

  // Auto-advance carousel every 5 seconds
  const CAROUSEL_INTERVAL_MS = 5000;
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, CAROUSEL_INTERVAL_MS);

  return () => clearInterval(interval); // Cleanup on unmount
}, [slides]);
```

### Mock Data Organization

**Extract large mock data to separate files:**

```typescript
// ❌ Avoid: 100+ lines of mock data in handlers file
export const handlers = [
  http.get('/api/carousel/slides', () => {
    const mockData = {
      en: [
        {
          /* 50 lines */
        },
        {
          /* 50 lines */
        },
        // ...
      ],
      de: [
        /* another 100 lines */
      ],
    };
    return HttpResponse.json(mockData);
  }),
];

// ✅ Preferred: Extract to separate file
// mocks/data/carouselSlides.ts
export const mockCarouselSlides = {
  /* ... */
};

// mocks/handlers.ts
import { mockCarouselSlides } from './data/carouselSlides';

export const handlers = [
  http.get('/api/carousel/slides', ({ request }) => {
    const url = new URL(request.url);
    const language = url.searchParams.get('language') || 'en';
    return HttpResponse.json(mockCarouselSlides[language]);
  }),
];
```

### Type Safety

**Always import and use proper types:**

```typescript
// ❌ Avoid: Missing type imports
export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json(); // Untyped
    // ...
  }),
];

// ✅ Preferred: Import and use types
import type { AuthResponse, LoginDto } from '../api/models';

export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as LoginDto;
    const response: AuthResponse = {
      /* ... */
    };
    return HttpResponse.json(response);
  }),
];
```

### Testing Requirements

**Every new component must have unit tests:**

```typescript
// When you create a new component like LoginCarousel.tsx,
// also create LoginCarousel.test.tsx with comprehensive coverage:

describe('LoginCarousel', () => {
  it('displays loading state while fetching slides', () => {
    /* ... */
  });
  it('displays error message when slides fail to load', () => {
    /* ... */
  });
  it('renders slides with correct content', () => {
    /* ... */
  });
  it('displays navigation dots for each slide', () => {
    /* ... */
  });
  it('auto-advances slides after interval', () => {
    /* ... */
  });
  it('fetches slides for the correct language', () => {
    /* ... */
  });
});
```

**Test coverage checklist for new components:**

- ✅ Loading states
- ✅ Error states
- ✅ User interactions
- ✅ Data fetching with correct parameters
- ✅ Accessibility features
- ✅ Edge cases (empty data, single item, etc.)

## Required Verification (TypeScript Files)

**After making changes to `.ts` or `.tsx` files, ALWAYS run:**

1. **TypeScript compilation check:**

   ```bash
   npm run typecheck
   ```

   This runs `tsc -b --noEmit` to verify type safety without emitting files.

2. **ESLint with auto-fix:**

   ```bash
   npm run lint:fix
   ```

   This runs `eslint . --fix` to automatically fix style issues.

3. **Fix any errors before committing** - do not disable rules or use `@ts-ignore` without strong justification.

## Quick Reference

- React 19 patterns → `.github/skills/react-19/SKILL.md`
- TypeScript best practices → `.github/skills/typescript-best-practices/SKILL.md`
- Netline UI components → `.github/skills/netline-ui-v8/SKILL.md`
