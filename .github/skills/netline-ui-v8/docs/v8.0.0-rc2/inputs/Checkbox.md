# Checkbox

Checkbox component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: Checkbox

## Description

__Note__: the interface differs from the material-ui Checkbox interface. Look at the examples!

When the `label` prop is given, the Checkbox is wrapped in a `FormControlLabel`
which gets the `labelProps` prop as its props.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Checkbox } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Grid container alignItems="center" spacing={4}>
      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## Variants

- Disabled
- Small
- Disabled
- Small
- Disabled
- Small

## Examples

### CheckboxWithLabel

```tsx
<Grid container alignItems="center" spacing={4}>
      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  </div>
```

```tsx
<Grid container alignItems="center" spacing={4}>
      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  </div>
```

### SizesAndStatuses

```tsx
<Grid container alignItems="center" spacing={4}>
      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" size="small" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" error size="small" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## MUI Reference

This component is based on Material-UI's Checkbox.

For additional props and detailed API documentation, refer to:

- [MUI Checkbox Documentation](https://mui.com/material-ui/api/checkbox/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
