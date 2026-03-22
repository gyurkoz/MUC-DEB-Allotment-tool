# TypeScript Best Practices Skill

Comprehensive TypeScript and React coding patterns for clean, maintainable code.

## Component Structure

**Organization pattern** - Keep files predictable and easy to navigate:

```typescript
// ✅ Good structure
// 1. Imports (grouped)
import { useState } from 'react';
import { Box, Button } from '@lsy-netline/netline-ui';
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/utils/date';
import type { User } from '@/models/User';

// 2. Types/Interfaces
interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
}

// 3. Component
export function UserCard({ user, onEdit }: UserCardProps) {
  // 3a. Hooks
  const { isAdmin } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // 3b. Derived values
  const formattedDate = formatDate(user.createdAt);
  
  // 3c. Event handlers
  const handleEditClick = () => {
    setIsEditing(true);
    onEdit(user.id);
  };
  
  // 3d. Render
  return (
    <Box sx={{ p: 2 }}>
      <Typography>{user.name}</Typography>
      <Typography variant="caption">{formattedDate}</Typography>
      {isAdmin && (
        <Button onClick={handleEditClick}>Edit</Button>
      )}
    </Box>
  );
}

// 4. Sub-components (if needed)
function UserAvatar({ src }: { src: string }) {
  return <Avatar src={src} />;
}
```

**Size limits:**

- Components: < 200 lines
- Functions: < 50 lines
- Hooks: < 100 lines

**When to extract:**

- Complex logic → custom hooks
- Repeated JSX → sub-components
- Business logic → utility functions
- Types → separate model files

## Naming Conventions

**Be explicit and consistent:**

```typescript
// ❌ Bad: Vague, abbreviated
function handle() { }
const usrDat = [];
const loading = true;

// ✅ Good: Clear, explicit
function handleUserLogin() { }
const userData = [];
const isLoading = true;
```

**Naming patterns:**

- **Boolean prefixes**: `isLoading`, `hasError`, `canSubmit`, `shouldRender`
- **Event handlers**: `handleClick`, `onSubmit`, `handleChange`, `onUserDelete`
- **Components**: PascalCase, descriptive (`UserProfileCard` not `UPC`)
- **Hooks**: `use` prefix (`useUserData`, `useFormValidation`)
- **Constants**: SCREAMING_SNAKE_CASE for true constants (`MAX_RETRIES`, `API_BASE_URL`)

## DRY (Don't Repeat Yourself)

**Extract repeated patterns:**

```typescript
// ❌ Repetitive
function UserList() {
  return (
    <>
      <Box sx={{ p: 2, border: '1px solid', borderRadius: 1 }}>
        <Typography>User 1</Typography>
      </Box>
      <Box sx={{ p: 2, border: '1px solid', borderRadius: 1 }}>
        <Typography>User 2</Typography>
      </Box>
      <Box sx={{ p: 2, border: '1px solid', borderRadius: 1 }}>
        <Typography>User 3</Typography>
      </Box>
    </>
  );
}

// ✅ Extract component
function UserCard({ name }: { name: string }) {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderRadius: 1 }}>
      <Typography>{name}</Typography>
    </Box>
  );
}

function UserList({ users }: { users: User[] }) {
  return (
    <>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </>
  );
}
```

**Rule of Three**: Extract abstraction when you see the same pattern **3+ times**.

## Error Handling

**Never swallow errors - always log context and propagate:**

```typescript
// ❌ Silent failure - lost context!
function fetchUser(id: string) {
  try {
    return api.getUser(id);
  } catch {
    return null; // What went wrong? Why?
  }
}

// ✅ Explicit error handling with context
async function fetchUser(id: string): Promise<User> {
  try {
    return await api.getUser(id);
  } catch (error) {
    console.error('Failed to fetch user:', { id, error });
    throw new Error(`User fetch failed: ${error.message}`);
  }
}
```

**UI error handling pattern:**

```typescript
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    fetchUser(userId)
      .then(setUser)
      .catch(err => {
        setError(err.message);
        console.error('UserProfile error:', err);
      })
      .finally(() => setIsLoading(false));
  }, [userId]);

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!user) return <Alert severity="info">User not found</Alert>;
  
  return <UserCard user={user} />;
}
```

**Best practices:**

- Always log errors with context (what operation, what data)
- Propagate errors up (throw) unless you can meaningfully handle them
- Display user-friendly error messages in UI
- Never use empty catch blocks

## Comments: When and How

**Document "why", not "what":**

```typescript
// ❌ Obvious comments (remove these)
// Set loading to true
setLoading(true);

// Get user name
const name = user.name;

// Loop through items
items.forEach(item => { /* ... */ });

// ✅ Useful comments (keep these)
// Workaround: API returns null instead of [] for empty lists (TICKET-123)
const items = response.data || [];

// Edge case: Safari requires explicit width for flex children
<Box sx={{ width: '100%', display: 'flex' }}>

// Performance: Memoize expensive calculation (handles 10k+ records)
const sortedData = useMemo(() => sortLargeDataset(rawData), [rawData]);

// Security: Hash must be SHA-256 to match backend implementation
const hash = await crypto.subtle.digest('SHA-256', buffer);
```

**Complex business logic deserves explanation:**

```typescript
/**
 * Calculates final booking price with all adjustments applied.
 * 
 * Formula:
 * 1. Base price from product catalog
 * 2. Apply user tier discount (10-30% based on loyalty level)
 * 3. Apply seasonal promotions (if active)
 * 4. Add taxes (VAT rate varies by country)
 * 5. Convert to user's preferred currency
 * 
 * @param booking - Booking details with product and user info
 * @returns Final price in user's currency
 */
function calculateFinalPrice(booking: Booking): Price {
  const basePrice = booking.product.price;
  const discount = getUserDiscount(booking.user);
  const promotion = getActivePromotion(booking.product.id);
  const tax = calculateTax(basePrice, booking.user.country);
  
  const finalAmount = (basePrice * (1 - discount) - promotion) * (1 + tax);
  
  return convertCurrency(finalAmount, booking.user.preferredCurrency);
}
```

**When to comment:**

- Workarounds for bugs/limitations (include ticket number)
- Non-obvious browser/platform-specific fixes
- Complex algorithms or business logic
- Performance optimizations that look "wrong"
- Security considerations
- TODOs with context (what, why, when)

## Avoid Premature Abstraction

**Extract only when you have 3+ similar uses:**

```typescript
// ❌ Over-engineered for single use
interface GenericDataFetcherConfig<T> {
  endpoint: string;
  transform: (data: unknown) => T;
  cache: boolean;
  retry: number;
  onError?: (error: Error) => void;
  debounce?: number;
}

function useGenericDataFetcher<T>(config: GenericDataFetcherConfig<T>) {
  // 50+ lines of complex logic
  // Used in ONE place
}

// ✅ Simple, clear, direct (YAGNI - You Ain't Gonna Need It)
function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => api.getUsers(),
  });
}

function useBookings() {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: () => api.getBookings(),
  });
}

// ✅ Extract abstraction AFTER 3+ similar patterns exist
// Now we see: useUsers, useBookings, useFlights all follow same pattern
function useApiQuery<T>(key: string, fetcher: () => Promise<T>) {
  return useQuery({
    queryKey: [key],
    queryFn: fetcher,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

**YAGNI Principle** (You Ain't Gonna Need It):

- Don't build abstractions "just in case"
- Wait until you have real duplication (3+ times)
- Simple duplication is often better than wrong abstraction
- Refactor when patterns emerge, not before

**Signs of premature abstraction:**

- Generic names: `BaseComponent`, `GenericHandler`, `CommonUtil`
- Many configuration options used nowhere
- More time spent on abstraction than solving actual problem
- Hard to understand without reading implementation

## Type Safety

**Leverage TypeScript's power:**

```typescript
// ❌ Any types defeat the purpose
function processData(data: any): any {
  return data.map((item: any) => item.value);
}

// ✅ Explicit types catch errors early
interface DataItem {
  id: string;
  value: number;
  label: string;
}

function processData(data: DataItem[]): number[] {
  return data.map(item => item.value);
}

// ✅ Use discriminated unions for state
type LoadingState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function UserList() {
  const [state, setState] = useState<LoadingState<User[]>>({ status: 'idle' });
  
  // TypeScript knows what properties are available
  if (state.status === 'success') {
    return <div>{state.data.length} users</div>; // ✅ data exists here
  }
}
```

**Avoid type assertions unless necessary:**

```typescript
// ❌ Lying to TypeScript
const user = data as User; // What if data isn't a User?

// ✅ Runtime validation
function isUser(data: unknown): data is User {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'name' in data
  );
}

const data = await response.json();
if (isUser(data)) {
  // TypeScript knows data is User here
  console.log(data.name);
}
```

## Async/Await Patterns

**Prefer async/await over promise chains:**

```typescript
// ❌ Promise chain - harder to read, error-prone
function loadUserData(userId: string) {
  return fetchUser(userId)
    .then(user => fetchUserPosts(user.id))
    .then(posts => fetchPostComments(posts[0].id))
    .then(comments => ({ comments }))
    .catch(error => {
      console.error(error);
      throw error;
    });
}

// ✅ Async/await - sequential, clear flow
async function loadUserData(userId: string) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    return { comments };
  } catch (error) {
    console.error('Failed to load user data:', { userId, error });
    throw error;
  }
}
```

**Parallel execution with Promise.all:**

```typescript
// ❌ Sequential - slow (3 seconds total if each takes 1s)
async function loadDashboard() {
  const users = await fetchUsers();      // 1s
  const bookings = await fetchBookings(); // 1s
  const flights = await fetchFlights();   // 1s
  return { users, bookings, flights };
}

// ✅ Parallel - fast (1 second total, all run simultaneously)
async function loadDashboard() {
  const [users, bookings, flights] = await Promise.all([
    fetchUsers(),
    fetchBookings(),
    fetchFlights(),
  ]);
  return { users, bookings, flights };
}

// ✅ Handle individual failures with Promise.allSettled
async function loadDashboardSafe() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchBookings(),
    fetchFlights(),
  ]);

  return {
    users: results[0].status === 'fulfilled' ? results[0].value : [],
    bookings: results[1].status === 'fulfilled' ? results[1].value : [],
    flights: results[2].status === 'fulfilled' ? results[2].value : [],
  };
}
```

**Avoid async in useEffect without cleanup:**

```typescript
// ❌ Memory leak risk - component might unmount before fetch completes
useEffect(() => {
  async function loadData() {
    const data = await fetchData();
    setData(data); // Component might be unmounted!
  }
  loadData();
}, []);

// ✅ Cleanup with abort controller
useEffect(() => {
  const controller = new AbortController();
  
  async function loadData() {
    try {
      const data = await fetchData({ signal: controller.signal });
      setData(data);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Fetch failed:', error);
      }
    }
  }
  
  loadData();
  
  return () => controller.abort();
}, []);

// ✅ Or use a mounted flag
useEffect(() => {
  let isMounted = true;
  
  async function loadData() {
    const data = await fetchData();
    if (isMounted) {
      setData(data);
    }
  }
  
  loadData();
  
  return () => { isMounted = false; };
}, []);
```

## Null/Undefined Handling

**Use optional chaining and nullish coalescing:**

```typescript
// ❌ Verbose null checks
function getUserCity(user: User | null) {
  if (user && user.address && user.address.city) {
    return user.address.city;
  }
  return 'Unknown';
}

// ✅ Optional chaining (?.)
function getUserCity(user: User | null) {
  return user?.address?.city ?? 'Unknown';
}

// ❌ Wrong: || returns first falsy value (0, '', false)
const count = options.count || 10; // count=0 becomes 10!
const name = user.name || 'Guest'; // name='' becomes 'Guest'

// ✅ Right: ?? only checks null/undefined
const count = options.count ?? 10; // count=0 stays 0
const name = user.name ?? 'Guest'; // name='' stays ''
```

**Type guards for narrowing:**

```typescript
// ✅ Type guard function
function isNonNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

// Usage in array filtering
const users: (User | null)[] = [user1, null, user2, undefined, user3];
const validUsers: User[] = users.filter(isNonNull); // Type-safe!

// ✅ Early return pattern
function processUser(user: User | null) {
  if (!user) {
    console.warn('No user provided');
    return;
  }
  
  // TypeScript knows user is non-null here
  console.log(user.name);
  console.log(user.email);
}
```

**Handle null in React components:**

```typescript
// ✅ Early return pattern
function UserProfile({ user }: { user: User | null }) {
  if (!user) {
    return <Alert severity="info">No user selected</Alert>;
  }
  
  // user is non-null from here
  return (
    <Box>
      <Typography>{user.name}</Typography>
      <Typography>{user.email}</Typography>
    </Box>
  );
}

// ✅ Optional chaining in JSX
function UserCard({ user }: { user?: User }) {
  return (
    <Box>
      <Typography>{user?.name ?? 'Anonymous'}</Typography>
      {user?.avatar && <Avatar src={user.avatar} />}
    </Box>
  );
}
```

## Immutability Patterns

**State updates must be immutable in React:**

```typescript
// ❌ Mutating state directly - React won't re-render!
const [user, setUser] = useState({ name: 'John', age: 30 });

function updateAge() {
  user.age = 31; // WRONG - mutation!
  setUser(user); // React won't detect change
}

// ✅ Create new object with spread operator
function updateAge() {
  setUser({ ...user, age: 31 }); // New object, React re-renders
}

// ✅ Nested object updates
const [user, setUser] = useState({
  name: 'John',
  address: { city: 'Berlin', zip: '10115' }
});

function updateCity(newCity: string) {
  setUser({
    ...user,
    address: { ...user.address, city: newCity }
  });
}
```

**Array immutable operations:**

```typescript
const [items, setItems] = useState<Item[]>([]);

// ❌ Array mutations - React won't re-render
items.push(newItem);        // WRONG
items[0] = updatedItem;     // WRONG
items.sort();               // WRONG

// ✅ Immutable array operations
setItems([...items, newItem]);              // Add
setItems(items.filter(item => item.id !== id)); // Remove
setItems(items.map(item => 
  item.id === id ? updatedItem : item       // Update
));
setItems([...items].sort());                // Sort (creates copy first)

// ✅ Add at start
setItems([newItem, ...items]);

// ✅ Insert at index
const index = 2;
setItems([
  ...items.slice(0, index),
  newItem,
  ...items.slice(index)
]);
```

**Immer library for complex updates:**

```typescript
import { produce } from 'immer';

// Without Immer - verbose
const [data, setData] = useState(complexNestedObject);
setData({
  ...data,
  user: {
    ...data.user,
    profile: {
      ...data.user.profile,
      settings: {
        ...data.user.profile.settings,
        theme: 'dark'
      }
    }
  }
});

// With Immer - write "mutating" code, Immer handles immutability
setData(produce(draft => {
  draft.user.profile.settings.theme = 'dark';
}));
```

## Custom Hooks Best Practices

**When to create a custom hook:**

```typescript
// ✅ Extract repeated logic
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('lang', 'en');
  // ...
}
```

**Return value patterns:**

```typescript
// ✅ Object return - named properties (flexible, extensible)
function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // More properties can be added without breaking consumers
  return { user, isLoading, setUser, login, logout };
}

// Usage
const { user, login } = useAuth(); // Pick what you need

// ✅ Array return - positional (like useState)
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  
  return [value, toggle] as const;
}

// Usage
const [isOpen, toggleOpen] = useToggle(); // Rename easily
```

**Dependency arrays - critical for correctness:**

```typescript
// ❌ Missing dependencies - stale closure bug
function useUserData(userId: string) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setData);
  }, []); // WRONG - userId missing, won't refetch on change
  
  return data;
}

// ✅ Include all dependencies
function useUserData(userId: string) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setData);
  }, [userId]); // Correct - refetches when userId changes
  
  return data;
}

// ✅ Memoize callbacks to avoid infinite loops
function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]); // Both value and delay are dependencies
  
  return debouncedValue;
}
```

**Naming and organization:**

```typescript
// ✅ Always prefix with "use"
function useWindowSize() { /* ... */ }
function useIntersectionObserver() { /* ... */ }

// ❌ Not a hook - don't use "use" prefix
function formatCurrency() { /* ... */ }  // Regular utility

// ✅ One hook per file for reusability
// File: hooks/useAuth.ts
export function useAuth() { /* ... */ }

// File: hooks/useDebounce.ts
export function useDebounce<T>() { /* ... */ }
```

## Summary

**Core principles:**

1. **Single Responsibility**: One function/component = one thing
2. **Explicit over Clever**: Clear code beats clever code
3. **Small Functions**: < 50 lines, extract when larger
4. **DRY with Judgment**: Extract at 3+ uses, not before
5. **Error Transparency**: Log context, propagate errors
6. **Comment "Why"**: Explain decisions, not mechanics
7. **Type Safety**: Use TypeScript's power, avoid `any`
8. **YAGNI**: Build what you need now, not what you might need
9. **Async Best Practices**: Use async/await, handle cleanup, parallel when possible
10. **Null Safety**: Optional chaining (`?.`), nullish coalescing (`??`), type guards
11. **Immutability**: Never mutate state/props, use spread operator, consider Immer
12. **Custom Hooks**: Extract reusable logic, name with `use`, manage dependencies

**Quick checklist:**

- [ ] Function < 50 lines?
- [ ] Component < 200 lines?
- [ ] Clear, explicit names?
- [ ] Errors logged with context?
- [ ] Comments explain "why" not "what"?
- [ ] No premature abstractions?
- [ ] Type-safe (no `any`)?
- [ ] Async cleanup handled (AbortController/mounted flag)?
- [ ] Using `?.` and `??` for null handling?
- [ ] State updates immutable (spread operator)?
- [ ] Custom hooks follow rules (name, dependencies)?
- [ ] Easy to review and understand?
