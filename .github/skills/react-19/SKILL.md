---
name: react-19
description: Modern React 19 development with concurrent features, React Compiler auto-optimization, server components, form actions, and advanced hooks patterns (useActionState, useFormStatus, useOptimistic, useEffectEvent, use). Optimized for Vite and TypeScript with React 19.2 features.
---

# React 19 Development

React 19 introduces powerful new features for building modern web applications with
enhanced server capabilities, improved form handling, automatic memoization via React
Compiler, concurrent rendering, and React 19.2 enhancements including `useEffectEvent`,
`Activity` component, and `cache()` for server-side optimization.

## When to Use This Skill

Use this skill when you need to:

- Build React 19/19.2 applications with TypeScript
- Implement server components and server actions
- Use React 19 hooks (useActionState, useFormStatus, useOptimistic)
- Use React 19.2 hooks (useEffectEvent for stable callbacks)
- Work with React Compiler for automatic optimization
- Use modern Context patterns with `use()` hook (not `useContext`)
- Implement concurrent rendering and Suspense
- Create components with Vite for fast development
- Optimize performance without manual memoization

## Prerequisites

- React 19.0 or higher (React 19.2 recommended for latest features)
- Node.js 18+ (for development)
- TypeScript 5+ for type safety
- Vite 6+ for build tooling
- Modern browser with ES6+ support
- React Compiler enabled (automatic in most modern setups)

## Core Capabilities

### 1. React 19.2 New Features ⭐

#### React Compiler (Auto-Optimization)

**IMPORTANT**: React Compiler automatically memoizes components and optimizes rendering.
You DON'T need `useMemo`, `useCallback`, or `React.memo` in most cases!

✅ **Correct (React Compiler handles optimization):**

```typescript
'use client';

interface Item {
  id: string;
  name: string;
  active: boolean;
}

// Mock expensive calculation
function complexCalculation(data: number[]): number {
  return data.reduce((a, b) => a + b, 0);
}

function MyComponent({ items }: { items: Item[] }) {
  // React Compiler automatically memoizes this
  const expensiveValue = complexCalculation([1, 2, 3]);
  
  // React Compiler automatically stabilizes this function reference
  const handleClick = (id: string): void => {
    console.log(id, expensiveValue);
  };
  
  // Automatically optimized - no useMemo needed!
  const filteredItems = items.filter(item => item.active);
  
  return (
    <div>
      {filteredItems.map(item => (
        <button key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
```

❌ **Incorrect (Premature manual optimization):**

```typescript
import { useMemo, useCallback, memo } from 'react';

interface Item {
  id: string;
  name: string;
  active: boolean;
}

function MyComponent({ items }: { items: Item[] }) {
  // ❌ Don't use useMemo - React Compiler handles this
  const filteredItems = useMemo(
    () => items.filter(item => item.active),
    [items]
  );

  // ❌ Don't use useCallback - React Compiler handles this
  const handleClick = useCallback((id: string) => {
    console.log(id);
  }, []);

  return <div>...</div>;
}

// ❌ Don't use memo() - React Compiler handles this
export default memo(MyComponent);
```

**When you STILL need manual memoization:**

1. Extremely expensive calculations (millions of records, image processing)
2. Third-party libraries requiring stable references
3. Effect dependencies where function identity matters
4. Performance profiling reveals actual bottlenecks

**Golden Rule**: Write clean code first, add memoization only when profiling shows real performance issues.

#### useEffectEvent (Stable Event Callbacks)

Use for callbacks that should NOT trigger effect re-runs:

```typescript
'use client';
import { useEffect } from 'react';
import { useEffectEvent } from 'react';

// Mock analytics
const analytics = {
  track: (event: string, data: Record<string, string>) => {
    console.log(event, data);
  },
};

interface Props {
  userId: string;
  pageUrl: string;
}

export function AnalyticsTracker({ userId, pageUrl }: Props) {
  // Event callback with fresh data but doesn't trigger re-runs
  const logPageView = useEffectEvent(() => {
    analytics.track('page_view', { userId, pageUrl });
  });

  useEffect(() => {
    logPageView();
  }, [pageUrl]); // Only re-run when pageUrl changes, not userId
}
```

**When to use**: Event handlers inside effects, callbacks that need fresh data but
shouldn't trigger re-runs. Prefer `useEffectEvent` over `useCallback` for effect
callbacks.

#### Activity Component (Built-in Loading UI)

Built-in loading UI without manual Suspense wrapper:

```typescript
import { Activity } from 'react';

export default async function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Activity>
        <DashboardContent />
      </Activity>
    </div>
  );
}
```

#### cache() (Server-Side Caching)

Memoize expensive server-side operations:

```typescript
import { cache } from 'react';
import 'server-only';

interface User {
  id: string;
  name: string;
  email: string;
}

// Mock database
const db = {
  users: {
    findUnique: async ({ where }: { where: { id: string } }) => 
      ({ id: where.id, name: 'John Doe', email: 'john@example.com' })
  }
};

export const getUserData = cache(async (userId: string): Promise<User | null> => {
  const user = await db.users.findUnique({ where: { id: userId } });
  return user;
});

// Called multiple times in same request, only runs once
const data1 = await getUserData('123');
const data2 = await getUserData('123'); // Cached!
```

### 2. React 19 Context Patterns

#### Use Shorthand Syntax (React 19)

✅ **Correct (React 19 shorthand):**

```typescript
<MyContext value={someValue}>
  <ChildComponents />
</MyContext>
```

❌ **Incorrect (Old pattern):**

```typescript
<MyContext.Provider value={someValue}>
  <ChildComponents />
</MyContext.Provider>
```

#### Use `use()` Hook Instead of `useContext()`

✅ **Correct (React 19):**

```typescript
import { use } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const value = use(MyContext);
  return <div>{value}</div>;
}
```

❌ **Incorrect (Old pattern):**

```typescript
import { useContext } from 'react';

function MyComponent() {
  const value = useContext(MyContext); // Don't use this
  return <div>{value}</div>;
}
```

### 3. React 19 Form Features

#### Server Actions and Forms

```typescript
// Server action
'use server';

interface FormActionResult {
  success: boolean;
  message: string;
}

async function updateUser(formData: FormData): Promise<FormActionResult> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // Database update logic
  await db.users.update({ name, email });

  return { success: true, message: 'User updated successfully' };
}

// Client component with form
function UserForm({ user }: { user: User }) {
  const [state, formAction, isPending] = useActionState(updateUser, null);

  return (
    <form action={formAction}>
      <input name="name" defaultValue={user.name} />
      <input name="email" defaultValue={user.email} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Updating...' : 'Update'}
      </button>
      {state?.message && <p>{state.message}</p>}
    </form>
  );
}
```

#### useFormStatus Hook

```typescript
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
```

#### useOptimistic Hook

```typescript
import { useOptimistic } from 'react';

interface Todo {
  id: number;
  text: string;
  status?: 'pending' | 'completed';
}

// Mock API function
const addTodo = async (text: string): Promise<void> => {
  await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify({ text })
  });
};

function TodoList({ todos }: { todos: Todo[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: string) => [
      ...state,
      { id: Date.now(), text: newTodo, status: 'pending' as const }
    ]
  );

  const submitNewTodo = async (formData: FormData): Promise<void> => {
    const text = formData.get('todo') as string;
    addOptimisticTodo(text);
    await addTodo(text);
  };

  return (
    <div>
      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} style={{ opacity: todo.status === 'pending' ? 0.5 : 1 }}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form action={submitNewTodo}>
        <input name="todo" />
        <SubmitButton />
      </form>
    </div>
  );
}
```

### 4. TypeScript Component Patterns

#### Functional Component with Props Interface

```typescript
import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 5. Custom Hooks Patterns

#### API Data Fetching Hook

```typescript
import { useState, useEffect } from 'react';

interface UseApiDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useApiData<T>(url: string): UseApiDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
interface User {
  id: string;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error } = useApiData<User>(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;

  return <div>{user.name}</div>;
}
```

### 6. Context API with React 19 Patterns

```typescript
import { createContext, use, useState, FC, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider using React 19 shorthand syntax
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (credentials: { email: string; password: string }): Promise<void> => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    const userData = await response.json();
    setUser(userData);
  };

  const logout = (): void => {
    setUser(null);
  };

  // ✅ Use shorthand syntax (no .Provider)
  return (
    <AuthContext value={{ user, login, logout }}>
      {children}
    </AuthContext>
  );
};

// ✅ Use use() hook instead of useContext()
export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Usage
function Header() {
  const { user, logout } = useAuth(); // Using use() hook via custom hook
  
  return (
    <header>
      {user ? (
        <div>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>Please log in</div>
      )}
    </header>
  );
}
```

### 7. ViewTransition + Suspense Pattern (React 19)

**Important**: When using `ViewTransition` with Suspense boundaries, wrap ALL children
in Suspense to prevent hydration errors.

✅ **Correct (All content in Suspense):**

```typescript
import { ViewTransition, Suspense, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ViewTransition>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </ViewTransition>
  );
}
```

❌ **Incorrect (Mixed Suspense/non-Suspense causes hydration error):**

```typescript
<ViewTransition>
  <Suspense fallback={<HeaderSkeleton />}>
    <Header />
  </Suspense>
  {children} {/* NOT in Suspense - causes hydration error! */}
</ViewTransition>
```

**Why**: ViewTransition applies styles during hydration that weren't in server HTML
when content reveals from non-Suspense children, causing React to detect a mismatch.

## Guidelines

1. **Use TypeScript for all components** - Define proper interfaces for props and state
2. **Trust React Compiler** - It automatically optimizes; avoid premature manual memoization
3. **Use `use()` hook for Context** - Replace `useContext()` with React 19's `use()` hook
4. **Use Context shorthand syntax** - `<Context value={...}>` not `<Context.Provider value={...}>`
5. **Prefer `useEffectEvent` for stable callbacks** - Better than `useCallback` for effect callbacks
6. **Keep components small** - Single responsibility principle; components under 200 lines
7. **Extract custom hooks** - Reuse stateful logic across components
8. **Avoid `any` type** - Use specific types and interfaces
9. **Handle loading and error states** - Always show feedback for async operations
10. **Use server actions for forms** - Leverage React 19's built-in form handling
11. **Wrap ViewTransition children in Suspense** - Prevent hydration errors
12. **Profile before optimizing** - Add manual memoization only when profiling shows bottlenecks

## Common Patterns

### Error Boundary

```typescript
import { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div>
          <h2>Something went wrong</h2>
          <details>{this.state.error?.message}</details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Code Splitting with Lazy Loading

```typescript
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const DataGrid = lazy(() => import('./components/DataGrid'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminDashboard />
    </Suspense>
  );
}
```

### Suspense for Data Fetching

```typescript
import { Suspense } from 'react';

interface User {
  id: number;
  name: string;
}

// Mock fetch function
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  return response.json();
};

// Async component (React 19 feature)
async function UserList() {
  const users: User[] = await fetchUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<div>Loading users...</div>}>
        <UserList />
      </Suspense>
    </div>
  );
}
```

## Key Rules

1. **Context Shorthand**: Always use `<Context value={...}>` instead of `<Context.Provider value={...}>`
2. **use() Hook**: Always use `use(Context)` instead of `useContext(Context)`
3. **No useMemo**: React Compiler automatically memoizes expensive computations
4. **No useCallback**: React Compiler automatically stabilizes function references (except for `useEffectEvent` cases)
5. **No memo()**: React Compiler automatically optimizes component re-renders
6. **Trust the Compiler**: Let React Compiler handle optimization instead of manual patterns
7. **ViewTransition + Suspense**: When using ViewTransition with Suspense, ensure all children are within Suspense boundaries
8. **useEffectEvent**: Use for callbacks in effects that need fresh data but shouldn't trigger re-runs

## Anti-Patterns to Avoid

❌ **Don't use manual memoization without profiling**
❌ **Don't use `useContext()` - use `use()` instead**
❌ **Don't use `Context.Provider` - use shorthand syntax**
❌ **Don't mix Suspense and non-Suspense children in ViewTransition**
❌ **Don't use `useCallback` for effect callbacks - use `useEffectEvent`**
❌ **Don't wrap everything in `memo()` - React Compiler handles it**

## Limitations

- Server components require a framework with server-side rendering (Next.js, Remix)
- React Compiler is very effective but may not optimize all edge cases
- Some third-party libraries may not be fully compatible with React 19 yet
- Vite PWA requires specific configuration for offline support
- `useEffectEvent` is React 19.2+ feature
- `Activity` component is React 19.2+ feature

## Common Imports Cheatsheet

```typescript
// React 19/19.2
import { 
  Suspense, 
  use,                    // ✅ Use instead of useContext
  useOptimistic, 
  useFormStatus,
  useActionState,
  lazy,
  startTransition
} from 'react';

// React 19.2 specific
import { Activity } from 'react';           // Loading component
import { useEffectEvent } from 'react';     // Stable callbacks
import { cache } from 'react';              // Server-side caching

// React DOM
import { useFormStatus } from 'react-dom';

// ⚠️ Only use when profiling shows bottlenecks
import { useMemo, useCallback, memo } from 'react';

// TypeScript
import type { FC, ReactNode } from 'react';
```

## Dependencies

```bash
# Core dependencies
npm install react@19 react-dom@19

# TypeScript types
npm install --save-dev @types/react @types/react-dom typescript

# Build tool
npm install --save-dev vite @vitejs/plugin-react

# State management (optional)
npm install zustand jotai

# Routing
npm install react-router-dom

# Data fetching
npm install @tanstack/react-query

# Testing
npm install --save-dev vitest @testing-library/react @testing-library/user-event
npm install --save-dev @playwright/test
```

## Recommended File Structure

```plaintext
src/
  components/       # Reusable UI components
  pages/           # Route-level page components
  hooks/           # Custom hooks
  contexts/        # Context providers
  types/           # TypeScript interfaces/types
  lib/             # Utility functions
  assets/          # Static assets
  test/            # Test utilities and setup
```

## Related Skills

- `webapp-testing` - E2E testing with Playwright
- `typescript-patterns` - Advanced TypeScript patterns
- `vite-config` - Vite configuration and optimization
- `component-design` - Component architecture patterns
