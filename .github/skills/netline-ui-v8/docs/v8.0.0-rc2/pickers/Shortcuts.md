# Shortcuts

Shortcuts component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Shortcuts } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const handleAccept = useActionCallback('onAccept');

  const adapter = usePickerAdapter();
  const shortcutsItems: PickersShortcutsItem<DateRange<PickerValidDate>>[] = [
    {
      label: 'This Week',
      getValue: () => {
        const today = new Date();
        return [adapter.startOfWeek(today), adapter.endOfWeek(today)];
      },
    },
    {
      label: 'Last Week',
      getValue: () => {
        const today = new Date();
        const prevWeek = adapter.addDays(today, -7);
        return [adapter.startOfWeek(prevWeek), adapter.endOfWeek(prevWeek)];
      },
    },
    {
      label: 'Last 14 Days',
      getValue: () => {
        const today = new Date();
        return [adapter.addDays(today, -14), today];
      },
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default shortcuts
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth shortcuts onAccept={handleAccept} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth shortcuts onAccept={handleAccept} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Custom shortcuts
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker
                size="small"
                label="Small"
                fullWidth
                shortcuts={shortcutsItems}
                onAccept={handleAccept}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth shortcuts={shortcutsItems} onAccept={handleAccept} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Small

## Examples

```tsx
const handleAccept = useActionCallback('onAccept');

  const adapter = usePickerAdapter();
  const shortcutsItems: PickersShortcutsItem<DateRange<PickerValidDate>>[] = [
    {
      label: 'This Week',
      getValue: () => {
        const today = new Date();
        return [adapter.startOfWeek(today), adapter.endOfWeek(today)];
      },
    },
    {
      label: 'Last Week',
      getValue: () => {
        const today = new Date();
        const prevWeek = adapter.addDays(today, -7);
        return [adapter.startOfWeek(prevWeek), adapter.endOfWeek(prevWeek)];
      },
    },
    {
      label: 'Last 14 Days',
      getValue: () => {
        const today = new Date();
        return [adapter.addDays(today, -14), today];
      },
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default shortcuts
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth shortcuts onAccept={handleAccept} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth shortcuts onAccept={handleAccept} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Custom shortcuts
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker
                size="small"
                label="Small"
                fullWidth
                shortcuts={shortcutsItems}
                onAccept={handleAccept}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth shortcuts={shortcutsItems} onAccept={handleAccept} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
