---
description: 'Code review guidelines and standards for the GST project'
applyTo: '**/*.ts, **/*.tsx, **/*.js, **/*.jsx, **/*.test.*, **/*.spec.*'
---

# Code Review Guidelines

## Review Criteria

When reviewing code changes, evaluate against these standards:

### 1. Language-Specific Instructions

- **For `.ts`, `.tsx` files:** Apply standards from `.github/instructions/typescript-react.instructions.md`
- **For `.js`, `.jsx` files:** Apply standards from `.github/instructions/javascript-react.instructions.md`
- **For test files:** Apply standards from `.github/instructions/testing.instructions.md`

### 2. React 19 Patterns

- Verify proper use of React 19 features (see `.github/skills/react-19/SKILL.md`)
- Check React Compiler compatibility (avoid unnecessary memoization)
- Validate concurrent features usage
- Ensure proper use of hooks and component lifecycle

#### React Compiler Compliance

React Compiler is enabled - it auto-optimizes rendering. Check for:

**❌ Unnecessary memoization (remove):**

```typescript
// ❌ Remove - React Compiler handles this
const memoizedValue = useMemo(() => expensiveCalc(data), [data]);
const memoizedFn = useCallback(() => handleClick(id), [id]);
export default memo(MyComponent);

// ✅ Correct - write clean code, compiler optimizes
const value = expensiveCalc(data);
const handleClick = () => {
  /* ... */
};
export function MyComponent() {
  /* ... */
}
```

**When manual memoization IS appropriate:**

- Profiling shows actual performance bottleneck
- Third-party lib requires stable reference (e.g., React Query `queryFn`)
- Millions of records or image processing

#### React 19.2 Hooks

**Verify correct hook usage:**

| Hook               | Use Case                                                                  | ❌ Avoid                                   |
| ------------------ | ------------------------------------------------------------------------- | ------------------------------------------ |
| `useEffectEvent()` | Callbacks in effects that need fresh values but shouldn't trigger re-runs | `useCallback` for effect callbacks         |
| `use(promise)`     | Suspense-based async data                                                 | `useEffect` + `useState` for data fetching |
| `use(context)`     | Reading context                                                           | `useContext(MyContext)`                    |
| `useOptimistic()`  | Instant UI updates during mutations                                       | Manual optimistic state                    |
| `useActionState()` | Form state with pending states                                            | Manual form state management               |
| `useTransition()`  | Non-urgent updates                                                        | Blocking state updates                     |

**Example - `useEffectEvent` for effect callbacks:**

```typescript
// ❌ Wrong: onExpired in deps causes effect re-runs
useEffect(() => {
  const interval = setInterval(() => {
    if (isExpired) onExpired();
  }, 1000);
  return () => clearInterval(interval);
}, [isExpired, onExpired]); // onExpired shouldn't restart interval

// ✅ Correct: useEffectEvent for stable callback
const handleExpired = useEffectEvent(() => {
  if (onExpired) onExpired();
});

useEffect(() => {
  const interval = setInterval(() => {
    if (isExpired) handleExpired();
  }, 1000);
  return () => clearInterval(interval);
}, [isExpired]); // onExpired not needed in deps
```

#### React 19 Patterns to Verify

- **`ref` as prop**: No `forwardRef` needed - verify components accept `ref` directly
- **Context shorthand**: Use `<MyContext value={...}>` not `<MyContext.Provider value={...}>`
- **`use()` for context**: Prefer `use(MyContext)` over `useContext(MyContext)` in new code
- **Suspense boundaries**: Verify proper error boundaries around Suspense
- **Concurrent features**: `useTransition` for non-blocking updates

### 3. TypeScript Best Practices

- Verify patterns from `.github/skills/typescript-best-practices/SKILL.md`
- Check type safety (no `any` without justification)
- Validate async/await patterns
- Ensure immutability in state updates
- Verify proper use of interfaces and types

### 4. Netline UI Compliance

- Verify `@lsy-netline/netline-ui` imports (not raw `@mui/*`)
- Check theme-aware styling (`sx` prop, `useTheme()`)
- Validate accessibility (ARIA labels, keyboard navigation)
- Ensure consistent component usage patterns

### 5. API & Form Patterns

- API calls use `api-orchestrator` (TanStack Query + Orval)
- Forms use `form-orchestrator` (React Hook Form + Zod)
- No ServiceFactory or DynamicForm usage
- Proper error handling and loading states
- **No redundant API calls** (see section below)

### 5a. Redundant API Call Detection

Actively check for redundant, duplicate, or unnecessary API calls. These waste bandwidth, degrade performance, and can cause UI flickering or race conditions.

#### Common Redundant Call Patterns

**❌ Same query called multiple times in a component tree:**

```typescript
// ❌ Parent and child both fetch the same data independently
function ParentComponent() {
  const { data: flights } = useGetFlights(); // call #1
  return <ChildComponent />;
}
function ChildComponent() {
  const { data: flights } = useGetFlights(); // call #2 — redundant
  return <div>{flights?.length}</div>;
}

// ✅ Fetch once in parent, pass via props or context
function ParentComponent() {
  const { data: flights } = useGetFlights();
  return <ChildComponent flights={flights} />;
}
// ✅ OR rely on TanStack Query's built-in deduplication (same queryKey)
//    but consolidate when the component tree makes it clearly redundant
```

**❌ Fetching data already available from a parent query:**

```typescript
// ❌ Fetching a single item when the list is already loaded
const { data: bookings } = useGetBookings(); // already has all bookings
const { data: booking } = useGetBooking(bookingId); // redundant if bookingId is in bookings

// ✅ Derive from existing data
const booking = bookings?.find((b) => b.id === bookingId);
```

**❌ Re-fetching after mutation instead of using cache invalidation:**

```typescript
// ❌ Manual refetch after mutation
const { mutate } = useUpdateBooking();
const { refetch } = useGetBookings();

const handleUpdate = (data: Booking) => {
  mutate(data, {
    onSuccess: () => {
      refetch(); // forces immediate network request
      refetch(); // sometimes called twice by accident
    },
  });
};

// ✅ Use query invalidation — TanStack Query deduplicates & batches
const queryClient = useQueryClient();
const { mutate } = useUpdateBooking({
  mutation: {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getGetBookingsQueryKey() });
    },
  },
});
```

**❌ Queries that fire on every render due to unstable parameters:**

```typescript
// ❌ New object reference on each render triggers refetch
const { data } = useGetFlights({ filters: { origin: 'FRA', dest: 'JFK' } });

// ✅ Extract to a constant or let React Compiler auto-stabilize
const filters = { origin: 'FRA', dest: 'JFK' };
const { data } = useGetFlights({ filters });
// React Compiler auto-stabilizes object references in most cases.
// If queries still fire unexpectedly, verify in React DevTools
// and consider extracting the object to module scope or a ref.
```

**❌ Unconditionally enabled queries that should be conditional:**

```typescript
// ❌ Fires immediately even when userId is undefined
const { data: profile } = useGetUserProfile(userId);

// ✅ Only fetch when userId is available
const { data: profile } = useGetUserProfile(userId, {
  query: { enabled: !!userId },
});
```

**❌ Polling or refetchInterval without need:**

```typescript
// ❌ Polling every 5s for data that rarely changes
const { data } = useGetAirports({ query: { refetchInterval: 5000 } });

// ✅ Use staleTime for infrequently changing data
const { data } = useGetAirports({ query: { staleTime: 5 * 60 * 1000 } });
```

**❌ Duplicate calls from useEffect:**

```typescript
// ❌ useEffect triggers a manual fetch alongside TanStack Query
const { data } = useGetFlights();
useEffect(() => {
  fetchFlights(); // manual duplicate call
}, []);

// ✅ Let TanStack Query handle the lifecycle — remove the useEffect
const { data } = useGetFlights();
```

#### Review Checklist for Redundant API Calls

When reviewing, check for:

- [ ] **Duplicate query hooks** — same Orval hook called in multiple sibling/nested components without necessity
- [ ] **Derivable data** — fetching a subset when the superset is already cached
- [ ] **Manual refetch vs invalidation** — prefer `queryClient.invalidateQueries()` over `.refetch()`
- [ ] **Missing `enabled` flag** — queries that fire before their parameters are ready
- [ ] **Unstable query parameters** — object/array references that change on every render
- [ ] **Unnecessary polling** — `refetchInterval` or `refetchOnWindowFocus` for static data
- [ ] **useEffect + manual fetch** — duplicating what TanStack Query already does
- [ ] **Waterfall requests** — sequential fetches that could be parallelized with `useQueries`
- [ ] **Missing `staleTime`** — frequently accessed data refetching on every mount

#### Verification Steps

```bash
# Search for duplicate Orval hook usage across components
grep -rn "useGet\|useCreate\|useUpdate\|useDelete" src/ --include="*.tsx" --include="*.ts" | \
  awk -F: '{print $3}' | sort | uniq -c | sort -rn | head -20

# Check for manual fetch/axios calls that bypass Orval
grep -rn "fetch(\|axios\.\|\.get(\|\.post(" src/ --include="*.tsx" --include="*.ts" | \
  grep -v "node_modules\|api/generated\|api/client\|.test.\|.spec."

# Find refetch() calls that might be redundant
grep -rn "\.refetch()" src/ --include="*.tsx" --include="*.ts"

# Find useEffect + fetch patterns
grep -A5 "useEffect" src/ --include="*.tsx" --include="*.ts" | grep -B3 "fetch\|axios\|get("
```

### 6. Import Path Standards

- **Prefer aliased imports** over relative paths for internal modules
- Use `@/components/*`, `@/utils/*`, `@/models/*`, etc.
- Avoid relative imports like `../` or `../../` except for same-directory imports
- Exception: `src/utils/customerConfigLoader.build.ts` (build-time Node.js context)

**Examples:**

```typescript
// ✅ Good: Aliased imports
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import type { User } from '@/models/User';

// ❌ Bad: Relative imports for internal modules
import { Button } from '../../components/Button';
import { useAuth } from '../../../hooks/useAuth';
```

### 7. Translation Completeness

- **Verify all translation keys exist in all languages** in `src/mocks/data/db/translations.json`
- Check that every `t('key')` has entries for both `EN` and `DE` languages
- Ensure translation IDs are sequential and properly formatted
- Validate translation key naming follows convention (underscored in DB, dotted in code)

**Verification steps:**

```bash
# Check for used translations in code
grep -r "t('" src/

# Verify in translations.json
cat src/mocks/data/db/translations.json | jq '.[] | select(.Key | startswith("accountDetails"))'
```

**Common issues:**

- Missing translation in one language (e.g., only EN, no DE)
- Typo in translation key usage
- Hardcoded strings instead of translation keys
- Translation key used in code but not defined in mockDB

## Test Coverage Analysis

**For every code change, analyze test coverage:**

### 1. Impact Assessment

- Does this change add/modify functionality?
- Are there existing tests for this code?
- What test coverage is needed (unit, integration, E2E)?

### 2. Missing or Inadequate Tests

If tests are missing or insufficient, provide:

#### Specific Test File Suggestions

- Provide complete file path: `src/components/MyComponent.test.tsx`
- Suggest appropriate test location based on file being tested

#### Complete, Working Test Code

Follow `.github/instructions/testing.instructions.md` standards:

- Uses Vitest syntax (NOT Jest)
- Follows Testing Library best practices (getByRole, userEvent)
- Includes beforeEach/afterEach cleanup
- Tests user behavior, not implementation
- Handles async operations correctly (waitFor, findBy)
- Has meaningful test names

#### Explanation of Coverage

Document what the test covers:

- Core functionality
- Edge cases
- User scenarios
- Error states
- Accessibility requirements

#### Test Quality Checklist

Verify each test includes:

- ✅ User interaction handling
- ✅ Event callback verification
- ✅ Accessibility-first selectors
- ✅ Proper cleanup
- ✅ Isolated test environment
- ✅ Meaningful assertions

### 3. Verification Recommendation

When suggesting tests, include:

```markdown
**Recommended verification steps:**

1. Run: `npm test src/components/MyComponent.test.tsx`
2. Verify test passes with correct implementation
3. Verify test fails when functionality is broken
4. Check coverage: `npm run test:coverage`
```

## Review Deliverables

Every code review should include:

### 1. Code Quality Assessment

Based on language-specific instructions:

- Adherence to TypeScript/JavaScript standards
- Proper React patterns
- Netline UI compliance
- Code organization and maintainability

### 2. Test Coverage Analysis

Identify and address:

- Missing tests
- Inadequate test coverage
- Test quality issues
- Edge cases not covered

### 3. Actionable Suggestions

Provide specific fixes with:

- Code examples
- Clear explanations
- Before/after comparisons
- Links to relevant documentation

### 4. Test Suggestions

Include complete, ready-to-use test code:

- Full test file content
- Proper imports and setup
- All necessary test cases
- Clear test descriptions

## Review Process

### Before Review

1. Ensure all files compile without errors
2. Run all tests: `npm test`
3. Check for linting issues: `npm run lint`
4. Verify build succeeds: `npm run build`

### During Review

1. Read through changes systematically
2. Check against review criteria
3. Test functionality locally if possible
4. Verify test coverage
5. Look for potential edge cases

### After Review

1. Provide constructive feedback
2. Suggest improvements with examples
3. Verify suggested tests are complete
4. Follow up on critical issues

## Common Review Issues

### Code Quality

- ❌ Using `any` type without justification
- ❌ Missing error handling
- ❌ Inconsistent naming conventions
- ❌ Deeply nested logic
- ❌ Unused imports or variables
- ❌ Relative imports instead of aliased paths (`@/`)
- ❌ Missing translations in one or more languages

### Testing

- ❌ Missing tests for new functionality
- ❌ Tests that test implementation details
- ❌ Incomplete test coverage
- ❌ Tests without proper cleanup
- ❌ Brittle tests dependent on timing

### API Calls

- ❌ Duplicate query hooks fetching the same data in parent and child components
- ❌ Fetching a single item when the full list is already cached
- ❌ Manual `.refetch()` instead of `queryClient.invalidateQueries()`
- ❌ Queries without `enabled` flag firing before parameters are ready
- ❌ `useEffect` + manual fetch duplicating TanStack Query behavior
- ❌ Unnecessary `refetchInterval` or polling for static/rarely-changing data
- ❌ Waterfall requests that could be parallelized with `useQueries`
- ❌ Missing `staleTime` causing refetches on every component mount
- ❌ Unstable query parameters (new object refs every render) causing extra fetches
- ❌ Manual `fetch`/`axios` calls bypassing Orval-generated hooks

### React Patterns

- ❌ Unnecessary memoization (with React Compiler) - `useMemo`, `useCallback`, `memo()` without profiled need
- ❌ `useCallback` for effect callbacks - use `useEffectEvent` instead (React 19.2)
- ❌ `useContext(MyContext)` - prefer `use(MyContext)` in new code
- ❌ `<Context.Provider>` - use `<Context value={}>` shorthand
- ❌ `forwardRef` wrapper - React 19 accepts `ref` as prop directly
- ❌ Missing dependency arrays in hooks
- ❌ Improper state updates (mutating state)
- ❌ Memory leaks from uncleared effects
- ❌ Prop drilling instead of context
- ❌ `useEffect` + `useState` for data fetching - use `use(promise)` with Suspense

### Accessibility

- ❌ Missing ARIA labels
- ❌ Poor keyboard navigation
- ❌ Insufficient color contrast
- ❌ Missing alt text on images
- ❌ Form inputs without labels

## Best Practices

### Constructive Feedback

- Be specific and actionable
- Provide examples, not just criticism
- Focus on the code, not the person
- Explain the "why" behind suggestions
- Acknowledge good practices

### Prioritization

**Critical (must fix):**

- Security vulnerabilities
- Breaking changes
- Data loss risks
- Accessibility violations

**Important (should fix):**

- Performance issues
- Redundant or duplicate API calls
- Missing tests
- Type safety problems
- Code maintainability

**Nice to have (consider):**

- Code style improvements
- Refactoring opportunities
- Documentation enhancements
- Additional test coverage

### Communication

- Use clear, concise language
- Ask questions when unclear
- Suggest rather than demand
- Offer to pair program on complex issues
- Follow up on discussions

## Resources

- [TypeScript/React Standards](typescript-react.instructions.md)
- [JavaScript/React Standards](javascript-react.instructions.md)
- [Testing Standards](testing.instructions.md)
- [Documentation Standards](documentation.instructions.md)
- [React 19 Skill](.github/skills/react-19/SKILL.md)
- [TypeScript Best Practices](.github/skills/typescript-best-practices/SKILL.md)
