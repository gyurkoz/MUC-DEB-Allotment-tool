---
description: 'JavaScript and React 19 coding standards for .js and .jsx files in the GST project'
applyTo: '**/*.js, **/*.jsx'
---

# JavaScript & React 19 Guidelines

## Core Skills References

When working with JavaScript and React code, follow patterns from these comprehensive skill guides:

- **React 19 Patterns**: See `.github/skills/react-19/SKILL.md` for detailed React 19.2 patterns including:
  - `use()` hook for promises and context
  - `useOptimistic()` for instant UI updates
  - `useActionState()` for form state management
  - `useTransition()` for non-urgent updates
  - `useEffectEvent()` for stable event callbacks (React 19.2)
  - `ref` as prop (no `forwardRef` needed)
  - Context shorthand syntax

- **Best Practices**: See `.github/skills/typescript-best-practices/SKILL.md` for:
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

## Component Best Practices

- Keep components under 200 lines
- Extract complex logic into custom hooks
- Use functional components exclusively
- Use PropTypes for runtime type checking (or migrate to TypeScript)
- Explicit function documentation with JSDoc

## Import Organization

**Always use `@/` path alias for internal project modules** (except same-directory imports):

```javascript
// 1. External libraries
import { useState } from 'react';

// 2. Netline UI components
import { Button, TextField, Box } from '@lsy-netline/netline-ui';

// 3. Internal modules (use @/ alias)
import { MyProvider } from '@/provider';
import { myUtility } from '@/utils';

// 4. Same-directory relative imports (only exception)
import './styles.css';
import { helperFunction } from './helpers';
```

**Note:** The `@/` alias maps to the `src/` directory (configured in `tsconfig.json`).

## Naming Conventions

- Components: PascalCase (`MyComponent.jsx`)
- Hooks: camelCase with `use` prefix (`useMyHook.js`)
- Utilities: camelCase (`myUtility.js`)
- Constants: UPPER_SNAKE_CASE

## Error Handling

- Handle async errors with try-catch
- Provide meaningful error messages
- Log errors with context
- Never swallow errors silently

## Required Verification (JavaScript Files)

**After making changes to `.js` or `.jsx` files, ALWAYS run:**

```bash
npm run lint:fix
```

This runs `eslint . --fix` to automatically fix style issues.

**Fix any errors before committing** - do not disable rules without strong justification.

## Quick Reference

- React 19 patterns → `.github/skills/react-19/SKILL.md`
- Best practices → `.github/skills/typescript-best-practices/SKILL.md`
- Netline UI components → `.github/skills/netline-ui-v8/SKILL.md`
