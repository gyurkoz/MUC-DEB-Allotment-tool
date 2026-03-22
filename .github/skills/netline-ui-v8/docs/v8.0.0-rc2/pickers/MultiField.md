# Multi Field

Multi Field component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { MultiField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default (empty)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Filled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Read-only
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
```

## Variants

- Disabled
- Small

## Examples

```tsx
<div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default (empty)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Filled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Read-only
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
