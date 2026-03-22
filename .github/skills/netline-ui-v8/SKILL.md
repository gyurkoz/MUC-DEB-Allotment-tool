---
name: netline-ui-v8
description: >
  Netline UI v8.0.0-rc.2 component library built on Material UI v8. Complete guide for using core components,
  DataGrid (Community/Pro/Premium), styling with sx prop, theming, and specialized column types
  (StatusChip, DayPattern, MultiSelect).
---

# Netline UI v8 Component Library

Netline UI is a comprehensive Material UI v8-based component library providing enterprise-ready React components
with enhanced features for data grids, date pickers, and custom form controls.

## Local documentation (source of truth)

This repository includes an offline copy of the Netline UI v8.0.0-rc.2 documentation.

- Entry point: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/index.md`
- If you need authoritative details (props, behavior, caveats, examples), consult the relevant markdown page under:
  `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/**`.

**Rule:** When you mention a specific Netline UI component/utility API (props, return types, edge cases),
prefer the local docs over memory, and reference the file in your answer
(example: `... (see .github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/PageFrame.md)`).

## Fenced code blocks in the offline docs (validation contract)

This repo includes tooling to validate fenced code blocks in the offline docs at scale.

- Contract + how-to: `docs/NETLINE_DOC_SNIPPETS_VALIDATION.md`
- TypeScript check: `node scripts/check-netline-doc-snippets.mjs`
- Optional equivalence verification (best-effort) against upstream Storybook sources:
  `node scripts/verify-netline-doc-snippets-storybook.mjs --storybookRoot ~/projects/netline-ui`

Important: snippet validation is **harnessed** (ambient stubs + normalization) so the goal is
“docs fences are structurally/type-wise coherent”, not “every fence is a standalone app example”.

## Netline UI-first policy (components + utilities)

When implementing UI in this codebase, **use Netline UI packages whenever they provide an equivalent**,
and only fall back to raw MUI when Netline UI does not expose what you need.

### Import preference order

1. **Core components & styling**: `@lsy-netline/netline-ui`
2. **DataGrid**:
   - community: `@lsy-netline/netline-ui-data-grid`
   - pro: `@lsy-netline/netline-ui-data-grid-pro`
   - premium: `@lsy-netline/netline-ui-data-grid-premium`
3. **Pickers**:
   - standard: `@lsy-netline/netline-ui-pickers`
   - pro: `@lsy-netline/netline-ui-pickers-pro`
4. **Utilities / helpers**: `@lsy-netline/netline-ui-utils`
   (and documented helpers like Logger/ServiceFactory)
5. **Icons**: `@mui/icons-material` (OK to use directly)
6. **Fallback only**: `@mui/material`, `@mui/x-*`
   (use only if Netline UI doesn't offer/re-export the needed feature)

### Practical rules of thumb

- **Do not** import MUI core components directly (e.g. `@mui/material/Button`) if the same component exists in `@lsy-netline/netline-ui`.
- Prefer Netline UI layout primitives (e.g. `PageFrame`, `AppHeader`, `Sidebar`) over custom layouts when they fit.
- For tables:
  - Prefer Netline UI **DataGrid** packages.
  - Prefer Netline UI column creators / cell type helpers when available
    (see `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/datagrid/*`).
- For date/time inputs:
  - Prefer Netline UI **Pickers** packages and their documented adapter patterns
    (see `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/pickers/*`).
- For shared non-visual helpers (logging, service creation): prefer Netline UI documented utilities.
  See `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/utils/Logger.md` and
  `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/utils/ServiceFactory.md`.

## ⚠️ Deprecated Components

The following Netline UI components are **deprecated** and should NOT be used in new code:

| Deprecated Component | Replacement                               | Notes                                                                                                                                            |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Select`             | `SingleSelectField` or `MultiSelectField` | `SingleSelectField` is built on `Autocomplete` and provides better UX (type-ahead, filtering). Use `MultiSelectField` for multi-value selection. |

**Migration example:**

```typescript
// ❌ DEPRECATED - Do not use
import { Select, MenuItem } from '@lsy-netline/netline-ui';

<Select label="Label" value={value} onChange={onChange}>
  <MenuItem value="1">Item 1</MenuItem>
  <MenuItem value="2">Item 2</MenuItem>
</Select>

// ✅ PREFERRED - Use SingleSelectField
import { SingleSelectField } from '@lsy-netline/netline-ui';

const options = [
  { id: 1, label: 'Item 1', value: '1' },
  { id: 2, label: 'Item 2', value: '2' },
];

<SingleSelectField
  options={options}
  value={selectedOption}
  onChange={handleChange}
  TextFieldProps={{ label: 'Label' }}
/>
```

For more details, see:

- `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/SingleSelectField.md`
- `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/MultiSelectField.md`

## Docs navigation quick map

Use the category folders below to find the authoritative page fast:

- Getting started: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/getting-started/*`
- Theming: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/theming/*`
- Layout: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/layout/*`
- Navigation (PageFrame/AppHeader/Sidebar):
  `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/*`
- Inputs (SelectField, MultiSelectField, DayPatternField, etc.):
  `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/*`
- Feedback (Snackbar/Alert/etc.): `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/feedback/*`
- DataGrid: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/datagrid/*`
- Pickers: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/pickers/*`
- Utilities (Logger, ServiceFactory, transitions, modal):
  `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/utils/*`

## What “use the docs” means in practice

1. Start at `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/index.md` to locate the component.
2. Open the specific markdown page for the component or feature.
3. Implement using the Netline UI package shown in the docs.
4. Only if the docs explicitly point you to underlying MUI behavior (or Netline UI lacks the feature)
   should you use MUI directly.

## Decision tree (Netline UI-first)

Use this as a fast “what should I reach for?” guide.
Always prefer the Netline UI component/util documented in the local v8.0.0-rc.2 docs.

### 1) Are you building app layout / navigation?

- Full application frame (header + sidebar + content)
  - Use `PageFrame` + `AppHeader` + `Sidebar`.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/PageFrame.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/AppHeader.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/Sidebar.md`
- App bar variants
  - Use `AppBar` or `NetlineAppBar`.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/AppBar.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/NetlineAppBar.md`
- Tabs
  - Use `Tabs` + `Tab`.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/Tabs.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/Tab.md`

### 2) Are you collecting user input (forms)?

- Basic text input
  - Use Netline UI `TextField`.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/TextField.md`
- Single select / multi select
  - **⚠️ ALWAYS prefer `SingleSelectField` or `MultiSelectField`** (the `Select` component is deprecated).
  - `SingleSelectField` is a wrapper around `Autocomplete` providing better UX and flexibility.
  - `MultiSelectField` is for multi-value selection.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/SingleSelectField.md` (preferred for single selection)
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/MultiSelectField.md` (preferred for multi selection)
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/SelectField.md` (legacy, avoid if possible)
  - **❌ Do NOT use**: `Select` - it is deprecated. See `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/Select.md`
- Day-of-week selection
  - Use `DayPatternField`.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/DayPatternField.md`
- Checkbox / radio groups
  - Use `CheckboxGroupField`, `RadioGroupField`.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/CheckboxGroupField.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/RadioGroupField.md`
- Complex, configuration-driven forms
  - Use `DynamicForm` (instead of rolling your own form renderer).
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/DynamicForm.md`

### 3) Are you showing dates / times?

- Use Netline UI pickers (and follow the adapter setup from the docs).
- Docs:
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/pickers/DatePicker.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/pickers/DateTimePicker.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/pickers/DateRangePicker.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/pickers/TimePicker.md`

### 4) Are you displaying tabular data?

- “Grid” experience (sorting/filtering/pagination/selection)
  - Use Netline UI DataGrid packages.
  - Start here:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/datagrid/DataGrid.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/datagrid/DataGridCellTypes.md`
  - If you need PRO/PREMIUM features, follow the corresponding docs pages in `docs/v8.0.0-rc2/datagrid/`.
- Simple HTML-table style
  - Use Netline UI `Table` components.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/data-display/Table.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/data-display/TableCell.md`

### 5) Are you giving feedback / showing overlays?

- Basic feedback
  - Use `Alert`, `Snackbar`, progress, skeleton.
  - Docs:
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/feedback/Alert.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/feedback/Snackbar.md`
    - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/feedback/CircularProgress.md`
- Toast notifications (standardized snackbars)
  - Use the documented Toast Notifications integration.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/ToastNotifications.md`
- Dialogs
  - Use Netline UI `Dialog` patterns.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/Dialog.md`

### 6) Is it an authentication or entry screen?

- Login screens
  - Prefer the Netline UI Login component/pattern.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/Login.md`

### 7) Is it an empty/error state?

- Error / no-data states
  - Prefer the Netline UI Error State component/pattern.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/ErrorState.md`

### 8) Is it compliance / legal UI?

- Cookie consent / cookie banner
  - Prefer the documented Cookie Banner component/pattern.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/CookieBanner.md`

### 9) Do you need typed service access or non-visual utilities?

- Typed API services
  - Prefer Netline UI Service Factory utilities.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/utils/ServiceFactory.md`
- Logging
  - Prefer Netline UI Logger utilities.
  - Docs: `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/utils/Logger.md`

### Fallback rule

If you cannot find a Netline UI solution in the local docs, you may fall back to MUI.
When you do, explicitly note why Netline UI was not sufficient.

## When to Use This Skill

Use this skill when you need to:

- Work with Netline UI v8.0.0-rc.2 components
- Implement DataGrid (Community, Pro, or Premium editions)
- Use specialized column types (StatusChip, DayPattern, MultiSelect, etc.)
- Implement DatePickers with localization
- Style components with Material UI's sx prop
- Create themed applications with Netline UI
- Build forms with Netline UI form controls
- Implement AppBar, PageFrame, and navigation components

## Prerequisites

- Dependencies are already pinned in `package.json` for this template.
- Runtime context:
  - React 19 + TypeScript 5
  - Vite SPA (no server components / server actions)

## Repo-specific reference implementations

Before inventing new patterns, look at the existing, working examples in this repo:

- App shell providers (ThemeProvider + LocalizationProvider): `src/App.tsx`
- Theme switching and theme models: `src/context/ThemeContext.tsx`, `src/theme/*`
- DataGrid usage (Community/Pro/Premium):
  `src/components/DataGridComponent.tsx`, `src/models/DataGrid.types.ts`
- Pickers usage: `src/components/DatePickers.tsx`
- Netline UI examples gallery: `src/components/*`

## Quick Start: Core Patterns (Most Common Use Cases)

The following patterns cover 80% of typical Netline UI usage. These are complete, copy-paste ready examples.

### Pattern 1: Basic Form with TextField and Button

```typescript
import { TextField, Button, Box } from '@lsy-netline/netline-ui';
import { useState, type FormEvent } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle login logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        p: 3,
      }}
    >
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
        fullWidth
      />
      <Button variant="contained" type="submit" fullWidth>
        Login
      </Button>
    </Box>
  );
}
```

### Pattern 2: Simple DataGrid

```typescript
import { DataGrid } from '@lsy-netline/netline-ui-data-grid';
import type { GridColDef, GridRowsProp } from '@lsy-netline/netline-ui-data-grid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

function UserList() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 130 },
  ];

  const rows: GridRowsProp = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
```

**With loading state:**

```typescript
import { DataGrid } from '@lsy-netline/netline-ui-data-grid';
import { CircularProgress, Box } from '@lsy-netline/netline-ui';

function UserListWithLoading({ users, isLoading }: { users: User[]; isLoading: boolean }) {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, flex: 1 },
    { field: 'email', headerName: 'Email', width: 200, flex: 1 },
  ];

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={400}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={users} columns={columns} />
    </div>
  );
}
```

### Pattern 3: DatePicker with Localization

```typescript
import { DatePicker } from '@lsy-netline/netline-ui-pickers';
import { LocalizationProvider } from '@lsy-netline/netline-ui-pickers';
import { AdapterDayjs } from '@lsy-netline/netline-ui-pickers/AdapterDayjs';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
    </LocalizationProvider>
  );
}
```

**With validation and helper text:**

```typescript
import { DatePicker } from '@lsy-netline/netline-ui-pickers';
import { LocalizationProvider } from '@lsy-netline/netline-ui-pickers';
import { AdapterDayjs } from '@lsy-netline/netline-ui-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';

function DateRangeSelector() {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex', gap: 16 }}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          maxDate={endDate || undefined}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          minDate={startDate || undefined}
          disabled={!startDate}
        />
      </div>
    </LocalizationProvider>
  );
}
```

### Pattern 4: Component Styling with sx Prop

The `sx` prop is the primary way to style Netline UI components. It provides type-safe, theme-aware styling.

```typescript
import { Box, Typography, Button, Card } from '@lsy-netline/netline-ui';
import { useTheme } from '@lsy-netline/netline-ui';

function StyledCard() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        // Spacing
        p: 3, // padding: theme.spacing(3)
        m: 2, // margin: theme.spacing(2)

        // Border
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,

        // Background & shadows
        bgcolor: 'background.paper',
        boxShadow: 2,

        // Hover effects
        '&:hover': {
          boxShadow: 4,
          transform: 'translateY(-2px)',
        },

        // Transitions
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: 'primary.main',
          fontWeight: 600,
        }}
      >
        Card Title
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mb: 3,
        }}
      >
        Card content goes here. Use theme tokens for consistency.
      </Typography>

      <Button
        variant="contained"
        sx={{
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        Action
      </Button>
    </Card>
  );
}
```

**Responsive styling with sx:**

```typescript
import { Box, Typography } from '@lsy-netline/netline-ui';

function ResponsiveLayout() {
  return (
    <Box
      sx={{
        // Mobile first
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,

        // Tablet and up
        [theme => theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
          p: 3,
        },

        // Desktop and up
        [theme => theme.breakpoints.up('md')]: {
          gap: 4,
          p: 4,
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: 200,
          bgcolor: 'primary.light',
          borderRadius: 1,
        }}
      >
        <Typography>Content 1</Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 200,
          bgcolor: 'secondary.light',
          borderRadius: 1,
        }}
      >
        <Typography>Content 2</Typography>
      </Box>
    </Box>
  );
}
```

**Common sx prop patterns:**

```typescript
// Flexbox layouts
sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}

// Grid layouts
sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}

// Spacing shortcuts
sx={{ p: 2, px: 3, py: 1, m: 2, mb: 3 }} // padding, margin

// Colors from theme
sx={{ color: 'primary.main', bgcolor: 'background.default' }}

// Conditional styling
sx={{ opacity: isDisabled ? 0.5 : 1, cursor: isDisabled ? 'not-allowed' : 'pointer' }}

// Pseudo-selectors
sx={{ '&:hover': { bgcolor: 'action.hover' }, '&:focus': { outline: '2px solid' } }}
```

## Implementation checklist (fast + reliable)

1. Find the relevant doc page under `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/`.
2. Prefer `@lsy-netline/*` imports; use `@mui/*` only as a documented fallback.
3. Mirror the provider/theming setup used in `src/App.tsx`.
4. Add/adjust tests when behavior changes (Vitest unit tests and/or Playwright E2E).

## Anti-hallucination checklist

- Only mention a Netline UI component/utility if it is present in the local docs
  (`.github/skills/netline-ui-v8/docs/v8.0.0-rc2/**`) or already imported/used in this repo.
- If there is no doc page for a feature, say so explicitly and justify the fallback
  (e.g. why `@mui/*` is necessary).
- When unsure about props/behavior, prefer citing the exact doc file path over guessing.

## How to find the doc fast

- Start in the most likely folder: `navigation/`, `inputs/`, `others/`, `utils/`.
- Search by filename (component name) inside `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/`.

## Testing expectations

If UI behavior changes, add or update tests:

- Unit/integration: Vitest (`src/**/*.test.tsx`)
- End-to-end: Playwright (`e2e/**/*.spec.ts`)

See: `.github/instructions/testing.instructions.md`.

### Unit Testing Patterns

#### Testing Netline UI Components with Vitest

```typescript
// src/components/UserCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider, createTheme } from '@lsy-netline/netline-ui';
import type { ReactElement } from 'react';
import type { User } from '@/models/User';

// Mock component for testing
function UserCard({
  user,
  onEdit
}: {
  user: User;
  onEdit?: (id: string) => void;
}) {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
    </div>
  );
}

const theme = createTheme();

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
}

describe('UserCard', () => {
  const mockUser: User = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
  };

  it('should render user information', () => {
    renderWithTheme(<UserCard user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('should call onEdit when edit button is clicked', () => {
    const handleEdit = vi.fn<[string], void>();
    renderWithTheme(<UserCard user={mockUser} onEdit={handleEdit} />);

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    expect(handleEdit).toHaveBeenCalledWith('1');
    expect(handleEdit).toHaveBeenCalledTimes(1);
  });

  it('should toggle expanded state on button click', () => {
    renderWithTheme(<UserCard user={mockUser} />);

    const expandButton = screen.getByRole('button', { name: /expand/i });

    // Initially collapsed
    expect(screen.queryByText(/additional details/i)).not.toBeInTheDocument();

    // Expand
    fireEvent.click(expandButton);
    expect(screen.getByText(/additional details/i)).toBeInTheDocument();
    expect(expandButton).toHaveTextContent('Collapse');

    // Collapse again
    fireEvent.click(expandButton);
    expect(screen.queryByText(/additional details/i)).not.toBeInTheDocument();
    expect(expandButton).toHaveTextContent('Expand');
  });
});
```

#### Testing DataGrid Components

```typescript
// src/components/UserDataGrid.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@lsy-netline/netline-ui';
import type { ReactElement } from 'react';
import UserDataGrid from './UserDataGrid';
import type { UserRow } from '@/models/User';

const theme = createTheme();

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
}

describe('UserDataGrid', () => {
  const mockUsers: UserRow[] = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
  ];

  it('should render all rows with correct data', () => {
    renderWithTheme(<UserDataGrid rows={mockUsers} />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
  });

  it('should display all required column headers', () => {
    renderWithTheme(<UserDataGrid rows={mockUsers} />);

    const nameHeader = screen.getByRole('columnheader', { name: /name/i });
    const roleHeader = screen.getByRole('columnheader', { name: /role/i });

    expect(nameHeader).toBeInTheDocument();
    expect(roleHeader).toBeInTheDocument();
  });

  it('should display "no rows" message when data is empty', () => {
    renderWithTheme(<UserDataGrid rows={[]} />);

    expect(screen.getByText(/no rows/i)).toBeInTheDocument();
  });

  it('should render correct number of rows', () => {
    renderWithTheme(<UserDataGrid rows={mockUsers} />);

    const rows = screen.getAllByRole('row');
    // +1 for header row
    expect(rows).toHaveLength(mockUsers.length + 1);
  });
});
```

#### Testing Form Components

```typescript
// src/components/LoginForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider, createTheme } from '@lsy-netline/netline-ui';
import type { ReactElement } from 'react';
import LoginForm from './LoginForm';
import type { LoginCredentials } from '@/models/Auth';

const theme = createTheme();

function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
}

describe('LoginForm', () => {
  it('should submit form with valid credentials', async () => {
    const handleSubmit = vi.fn<[LoginCredentials], Promise<void>>();

    renderWithTheme(<LoginForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it('should display validation errors for empty fields', async () => {
    renderWithTheme(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it('should disable submit button while submitting', async () => {
    const handleSubmit = vi.fn<[LoginCredentials], Promise<void>>(
      () => new Promise(resolve => setTimeout(resolve, 100))
    );

    renderWithTheme(<LoginForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i }) as HTMLButtonElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(submitButton.disabled).toBe(true);

    await waitFor(() => {
      expect(submitButton.disabled).toBe(false);
    });
  });
});
```

### E2E Testing Patterns

#### Testing Navigation and User Flows

```typescript
// e2e/user-management.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to user list and view details', async ({ page }) => {
    // Navigate to users page
    await page.click('text=Users');
    await expect(page).toHaveURL('/users');

    // Wait for data grid to load
    const dataGrid = page.locator('.MuiDataGrid-root');
    await expect(dataGrid).toBeVisible();

    // Wait for rows to appear
    await expect(page.locator('.MuiDataGrid-row')).toHaveCount(5, { timeout: 5000 });

    // Click on first user row
    const firstRow = page.locator('.MuiDataGrid-row').first();
    await firstRow.click();

    // Verify user details modal opens
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText('User Details');
  });

  test('should filter users by role', async ({ page }) => {
    await page.goto('/users');

    // Wait for initial load
    await expect(page.locator('.MuiDataGrid-root')).toBeVisible();

    // Open filter menu
    const filterButton = page.locator('[aria-label="Filter"]');
    await filterButton.click();

    // Select "Admin" role filter
    await page.click('text=Role');
    const roleSelect = page.locator('[name="role"]');
    await roleSelect.selectOption('Admin');

    const applyButton = page.locator('button:has-text("Apply")');
    await applyButton.click();

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Verify only admin users are shown
    const rows = page.locator('.MuiDataGrid-row');
    await expect(rows).toHaveCount(2);

    const firstRowRole = rows.first().locator('[data-field="role"]');
    await expect(firstRowRole).toContainText('Admin');
  });

  test('should handle navigation with keyboard', async ({ page }) => {
    await page.goto('/users');

    // Focus on first data grid row
    const firstRow = page.locator('.MuiDataGrid-row').first();
    await firstRow.focus();

    // Navigate with arrow keys
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    // Verify dialog opened
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
  });
});
```

#### Testing Forms and Input Validation

```typescript
// e2e/create-user.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Create User Form', () => {
  test('should create new user successfully', async ({ page }) => {
    await page.goto('/users/new');

    // Fill form
    await page.fill('[name="name"]', 'Jane Doe');
    await page.fill('[name="email"]', 'jane@example.com');
    await page.selectOption('[name="role"]', 'User');

    // Submit form
    await page.click('button[type="submit"]');

    // Verify success message
    await expect(page.locator('.MuiAlert-standardSuccess')).toBeVisible();
    await expect(page.locator('.MuiAlert-standardSuccess')).toContainText('User created successfully');

    // Verify redirect to user list
    await expect(page).toHaveURL('/users');
  });

  test('should display validation errors', async ({ page }) => {
    await page.goto('/users/new');

    // Submit empty form
    await page.click('button[type="submit"]');

    // Verify error messages
    await expect(page.locator('text=Name is required')).toBeVisible();
    await expect(page.locator('text=Email is required')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/users/new');

    await page.fill('[name="email"]', 'invalid-email');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid email format')).toBeVisible();
  });
});
```

#### Testing DataGrid Interactions

```typescript
// e2e/datagrid-interactions.spec.ts
import { test, expect } from '@playwright/test';

test.describe('DataGrid Interactions', () => {
  test('should sort column by clicking header', async ({ page }) => {
    await page.goto('/users');

    // Get first row name before sorting
    const firstRowBefore = await page.locator('.MuiDataGrid-row:first-child [data-field="name"]').textContent();

    // Click name column header to sort
    await page.click('[data-field="name"] .MuiDataGrid-columnHeaderTitle');

    // Wait for sort to complete
    await page.waitForTimeout(500);

    // Verify order changed
    const firstRowAfter = await page.locator('.MuiDataGrid-row:first-child [data-field="name"]').textContent();
    expect(firstRowBefore).not.toBe(firstRowAfter);
  });

  test('should select multiple rows with checkboxes', async ({ page }) => {
    await page.goto('/users');

    // Select first two rows
    await page.click('.MuiDataGrid-row:nth-child(1) .MuiCheckbox-root');
    await page.click('.MuiDataGrid-row:nth-child(2) .MuiCheckbox-root');

    // Verify selection count
    await expect(page.locator('text=2 rows selected')).toBeVisible();
  });

  test('should paginate through results', async ({ page }) => {
    await page.goto('/users');

    // Get first row on page 1
    const firstRowPage1 = await page.locator('.MuiDataGrid-row:first-child').textContent();

    // Go to page 2
    await page.click('[aria-label="Go to next page"]');
    await page.waitForTimeout(500);

    // Get first row on page 2
    const firstRowPage2 = await page.locator('.MuiDataGrid-row:first-child').textContent();

    // Verify different data
    expect(firstRowPage1).not.toBe(firstRowPage2);
  });
});
```

#### Testing Theme Switching

```typescript
// e2e/theme.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Theme Switching', () => {
  test('should switch between themes', async ({ page }) => {
    await page.goto('/');

    // Get initial background color
    const initialBg = await page.locator('body').evaluate((el) => window.getComputedStyle(el).backgroundColor);

    // Open theme switcher
    await page.click('[aria-label="Change theme"]');

    // Select different theme
    await page.click('text=Eurowings');

    // Wait for theme to apply
    await page.waitForTimeout(300);

    // Verify background changed
    const newBg = await page.locator('body').evaluate((el) => window.getComputedStyle(el).backgroundColor);

    expect(initialBg).not.toBe(newBg);
  });
});
```

### Testing Best Practices

#### Vitest-Specific Guidelines

1. **Use Vitest imports (not Jest):**

   ```typescript
   // ✅ Correct - Vitest
   import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

   // ❌ Wrong - Jest
   import { describe, it, expect, jest } from '@jest/globals';
   ```

2. **Mock functions with proper TypeScript types:**

   ```typescript
   // ✅ Correct - Typed mock
   const handleClick = vi.fn<[string], void>();
   const fetchData = vi.fn<[], Promise<User>>();

   // ❌ Wrong - Untyped mock
   const handleClick = vi.fn();
   ```

3. **Always wrap Netline UI components with ThemeProvider:**

   ```typescript
   import { ThemeProvider, createTheme } from '@lsy-netline/netline-ui';
   import type { ReactElement } from 'react';

   const theme = createTheme();

   function renderWithTheme(ui: ReactElement) {
     return render(
       <ThemeProvider theme={theme}>
         {ui}
       </ThemeProvider>
     );
   }
   ```

4. **Use proper TypeScript assertions:**

   ```typescript
   // ✅ Correct - Type assertion when needed
   const input = screen.getByLabelText(/email/i) as HTMLInputElement;
   expect(input.value).toBe('test@example.com');

   // ✅ Alternative - Type narrowing
   const input = screen.getByLabelText(/email/i);
   if (input instanceof HTMLInputElement) {
     expect(input.value).toBe('test@example.com');
   }
   ```

5. **Handle async operations properly:**

   ```typescript
   // ✅ Correct - waitFor with proper expectations
   await waitFor(() => {
     expect(handleSubmit).toHaveBeenCalledTimes(1);
     expect(handleSubmit).toHaveBeenCalledWith(expectedData);
   });

   // ❌ Wrong - Missing await or waitFor
   expect(handleSubmit).toHaveBeenCalled(); // May fail intermittently
   ```

#### General Testing Guidelines

1. **Use Testing Library queries in order of priority:**
   - `getByRole` (preferred for accessibility)
   - `getByLabelText` (forms)
   - `getByPlaceholderText`
   - `getByText`
   - `getByTestId` (last resort)

2. **Always wrap with ThemeProvider in unit tests** - Netline UI components require theme context

3. **Use `waitFor` for async operations** - Don't rely on fixed timeouts in unit tests

4. **Test user behavior, not implementation** - Focus on what users see and do

5. **Keep tests isolated** - Each test should be independent (use `beforeEach` for setup)

6. **Use descriptive test names** - Clearly state what is being tested

   ```typescript
   // ✅ Good - Clear intent
   it('should disable submit button while form is submitting', async () => {});

   // ❌ Bad - Vague
   it('should work correctly', () => {});
   ```

7. **Mock external dependencies** - API calls, timers, localStorage

   ```typescript
   // Mock API calls
   vi.mock('@/api/users', () => ({
     fetchUsers: vi.fn(() => Promise.resolve(mockUsers)),
   }));

   // Mock timers
   vi.useFakeTimers();
   vi.advanceTimersByTime(1000);
   vi.useRealTimers();
   ```

8. **Test accessibility** - Include ARIA labels, keyboard navigation, screen reader support

   ```typescript
   it('should be accessible via keyboard', async () => {
     render(<MyComponent />);
     const button = screen.getByRole('button', { name: /submit/i });
     button.focus();
     await userEvent.keyboard('{Enter}');
     expect(handleSubmit).toHaveBeenCalled();
   });
   ```

9. **Avoid testing implementation details:**

   ```typescript
   // ❌ Bad - Testing internal state
   expect(component.state.isLoading).toBe(true);

   // ✅ Good - Testing visible output
   expect(screen.getByRole('progressbar')).toBeInTheDocument();
   ```

10. **Use proper cleanup:**

    ```typescript
    import { cleanup } from '@testing-library/react';
    import { afterEach } from 'vitest';

    // Cleanup happens automatically with Vitest + Testing Library
    // But if you need manual cleanup:
    afterEach(() => {
      cleanup();
      vi.clearAllMocks();
    });
    ```

#### TypeScript + ESLint Compliance

**Ensure all test files pass:**

```bash
# TypeScript check
npm run typecheck

# ESLint check
npm run lint

# Run both before committing tests
npm run check
```

**Common TypeScript issues in tests:**

```typescript
// ❌ Problem: Implicit any
const handleClick = vi.fn();

// ✅ Solution: Explicit types
const handleClick = vi.fn<[MouseEvent], void>();

// ❌ Problem: Unsafe type assertion
const input = screen.getByRole('textbox') as any;

// ✅ Solution: Proper type assertion
const input = screen.getByRole('textbox') as HTMLInputElement;

// ❌ Problem: Missing await
waitFor(() => expect(data).toBeDefined());

// ✅ Solution: Always await async operations
await waitFor(() => expect(data).toBeDefined());
```

## Notes on pickers & adapters (this repo)

- Pickers require `LocalizationProvider` + adapter. This template already wires that in `src/App.tsx`.
- If you change adapters/locales, update the app-level provider and keep the choice consistent.

## Licensing (DataGrid Pro/Premium)

- Pro/Premium features require a valid license.
- Never hardcode license keys in git; prefer environment configuration.

## Guidelines

### React 19 + React Compiler Best Practices

#### 1. Avoid Unnecessary Memoization

The React Compiler automatically optimizes component rendering. Manual memoization is usually unnecessary.

❌ **Don't do this (React Compiler handles it):**

```typescript
// Unnecessary React.memo
const MyComponent = React.memo(({ data }: { data: Item[] }) => {
  const processed = useMemo(() => data.map(x => x * 2), []); // Unnecessary useMemo
  const handleClick = useCallback(() => console.log('clicked'), []); // Unnecessary useCallback

  return <div onClick={handleClick}>{processed}</div>;
});
```

✅ **Do this instead:**

```typescript
// React Compiler handles optimization automatically
function MyComponent({ data }: { data: Item[] }) {
  const processed = data.map(x => x * 2);
  const handleClick = () => console.log('clicked');

  return <div onClick={handleClick}>{processed}</div>;
}
```

✅ **Only memoize with clear justification:**

```typescript
// Valid use case: Expensive computation with profiler evidence
function ExpensiveChart({ dataPoints }: { dataPoints: number[] }) {
  // Justified: 1000+ calculations, profiler shows 200ms render time
  const processedData = useMemo(
    () => dataPoints.map(p => complexAlgorithm(p)),
    [dataPoints]
  );

  return <Chart data={processedData} />;
}
```

#### 2. Use React 19 Features

**`use` hook for async data:**

```typescript
import { use, Suspense } from 'react';
import { CircularProgress, Typography } from '@lsy-netline/netline-ui';
import type { User } from '@/models/User';

function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise);
  return <Typography>{user.name}</Typography>;
}

// Parent component
function UserPage({ userId }: { userId: string }) {
  // Mock fetch function
  const fetchUser = (id: string): Promise<User> =>
    fetch(`/api/users/${id}`).then(res => res.json());

  const userPromise = fetchUser(userId);

  return (
    <Suspense fallback={<CircularProgress />}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}
```

**`useOptimistic` for instant UI updates:**

```typescript
import { useOptimistic } from 'react';
import { List, ListItem, Button } from '@lsy-netline/netline-ui';

interface Todo {
  id: string;
  name: string;
  pending?: boolean;
}

interface TodoListProps {
  todos: Todo[];
  addTodo: (name: string) => Promise<void>;
}

function TodoList({ todos, addTodo }: TodoListProps) {
  const [optimisticTodos, setOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => [...state, newTodo]
  );

  const handleAdd = async (name: string) => {
    const tempTodo = { id: crypto.randomUUID(), name, pending: true };
    setOptimisticTodo(tempTodo);
    await addTodo(name);
  };

  return (
    <List>
      {optimisticTodos.map(todo => (
        <ListItem
          key={todo.id}
          sx={{ opacity: todo.pending ? 0.5 : 1 }}
        >
          {todo.name}
        </ListItem>
      ))}
    </List>
  );
}
```

**`useActionState` for form handling:**

```typescript
import { useActionState } from 'react';
import { TextField, Button, Alert } from '@lsy-netline/netline-ui';

interface FormState {
  success: boolean;
  error: string | null;
}

// Mock login function
async function login(email: string, password: string): Promise<void> {
  console.log('Logging in:', email, password);
}

function LoginForm() {
  const [state, loginAction, isPending] = useActionState(
    async (_prevState: FormState, formData: FormData) => {
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      try {
        await login(email, password);
        return { success: true, error: null };
      } catch (err) {
        return { success: false, error: 'Invalid credentials' };
      }
    },
    { success: false, error: null }
  );

  return (
    <form action={loginAction}>
      <TextField name="email" type="email" required fullWidth />
      <TextField name="password" type="password" required fullWidth />
      {state.error && <Alert severity="error">{state.error}</Alert>}
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
}
```

### Clean Code Principles

#### Component Structure

```typescript
// ✅ Good: Single responsibility, clear structure
import { useState } from 'react';
import { Box, Typography, Button } from '@lsy-netline/netline-ui';
import type { User } from '@/models/User';

interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
}

// Mock sub-component
function UserDetails({ user }: { user: User }) {
  return <Typography>{user.email}</Typography>;
}

export function UserCard({ user, onEdit }: UserCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(prev => !prev);
  const handleEdit = () => onEdit(user.id);

  return (
    <Box sx={{ p: 2, border: 1, borderRadius: 1 }}>
      <Typography variant="h6">{user.name}</Typography>
      {isExpanded && <UserDetails user={user} />}
      <Button onClick={handleToggle}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </Button>
      <Button onClick={handleEdit}>Edit</Button>
    </Box>
  );
}
```

#### Naming Best Practices

```typescript
// ❌ Bad: Cryptic names
const usr = getUserData();
const handleClick = () => doStuff();
const d = new Date();

// ✅ Good: Self-documenting names
const currentUser = getCurrentUserData();
const handleUserLogin = () => authenticateUser();
const createdAt = new Date();

// ✅ Boolean names with prefixes
const isLoading = false;
const hasPermission = checkUserPermission();
const canEdit = user.role === 'admin';
```

#### Extract Complex Logic

```typescript
// ❌ Bad: Complex logic in component
function UserList({ users }: { users: User[] }) {
  return (
    <List>
      {users
        .filter(u => u.active && u.role !== 'guest')
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(u => (
          <ListItem key={u.id}>{u.name}</ListItem>
        ))}
    </List>
  );
}

// ✅ Good: Extracted to utility/hook
function useActiveUsers(users: User[]) {
  return users
    .filter(u => u.active && u.role !== 'guest')
    .sort((a, b) => a.name.localeCompare(b.name));
}

function UserList({ users }: { users: User[] }) {
  const activeUsers = useActiveUsers(users);

  return (
    <List>
      {activeUsers.map(u => (
        <ListItem key={u.id}>{u.name}</ListItem>
      ))}
    </List>
  );
}
```

### Core Best Practices

1. **React Compiler is enabled** - Avoid premature `useMemo`, `useCallback`, or `React.memo`;
   add them only after profiling shows a real bottleneck.
2. **Always wrap app with ThemeProvider** - Required for theming and proper component styling
3. **Use CssBaseline** - Provides consistent baseline styles across browsers
4. **Prefer sx prop for one-off styles** - Theme-aware and consistent with the codebase
5. **Use styled() for reusable components** - Better for components used multiple times
6. **Leverage theme spacing** - Use `theme.spacing()` or sx prop spacing shorthand
7. **Use specialized column creators** - Better than manual column definitions
8. **Include LocalizationProvider for pickers** - Required for date/time components
9. **Use apiRef for DataGrid control** - Access grid API programmatically
10. **Vite SPA note** - Do not suggest React Server Actions / `'use server'` patterns in this repo.
11. **Always include aria-label for icon buttons** - Critical for accessibility
12. **Test keyboard navigation** - Ensure all interactive elements are keyboard accessible
13. **Netline UI-first** - Prefer `@lsy-netline/*` components/utilities and follow the local docs under
    `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/` before falling back to raw MUI.
14. **Keep components small** - < 200 lines; extract sub-components or hooks when larger
15. **Use meaningful names** - Variables, functions, and components should be self-documenting

## DataGrid Feature Comparison

| Feature          | Community | Pro | Premium |
| ---------------- | --------- | --- | ------- |
| Column filtering | ✅        | ✅  | ✅      |
| Column sorting   | ✅        | ✅  | ✅      |
| Pagination       | ✅        | ✅  | ✅      |
| Row selection    | ✅        | ✅  | ✅      |
| Master-detail    | ❌        | ✅  | ✅      |
| Row grouping     | ❌        | ❌  | ✅      |
| Aggregation      | ❌        | ❌  | ✅      |
| Excel export     | ❌        | ✅  | ✅      |

## Common Props

### DataGrid Common Props

- `rows`: Array of row data
- `columns`: Column definitions
- `apiRef`: Grid API reference
- `striped`: Alternating row colors
- `size`: 'medium' | 'large'
- `rowSelection`: Enable row selection
- `checkboxSelection`: Show checkboxes
- `disableRowSelectionOnClick`: Prevent selection on row click
- `pageSizeOptions`: Available page sizes
- `initialState`: Initial grid state

### Button Variants

- `variant`: 'text' | 'outlined' | 'contained'
- `color`: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `startIcon`: ReactNode
- `endIcon`: ReactNode

## Accessibility

- Always include `aria-label` for icon-only buttons
- Use semantic HTML elements where possible
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Test all keyboard navigation
- Maintain WCAG 2.1 AA contrast ratios (4.5:1 for normal text)
- Use `role` attributes when needed
- Ensure form inputs have associated labels

## TypeScript Patterns

```typescript
// Component props interface
interface MyComponentProps {
  title: string;
  items: Item[];
  onSelect?: (id: string) => void;
  variant?: 'compact' | 'expanded';
}

// DataGrid column definition
const columns: GridColDef[] = [
  createTextColumn<MyDataType>({
    field: 'name',
    headerName: 'Name',
  }),
];

// Typed row data
interface RowData {
  id: string;
  name: string;
  category: string;
  price: number;
}

const rows: RowData[] = [
  /* ... */
];
```

## Limitations

- DataGrid Pro/Premium features require a license.
- Some advanced DataGrid features are only in Pro/Premium.
- Pickers require `LocalizationProvider` + adapter.
- This repo is a Vite SPA; SSR/server-only React patterns are out of scope.

## Resources

- Local offline docs (v8.0.0-rc.2): `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/index.md`
- [Netline UI Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int) - Component examples and documentation
- [Material UI Documentation](https://mui.com/material-ui/) - Base component reference
- [MUI X DataGrid](https://mui.com/x/react-data-grid/) - DataGrid features and API

## Related Skills

- `react-19` - React 19 patterns and hooks
- `webapp-testing` - Testing Netline UI components with Playwright
- `typescript-patterns` - Advanced TypeScript usage
