# Radio

Radio component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: Radio

## Description

__Note__: the interface differs from the material-ui Radio interface. Look at the examples!

When the `label` prop is given, the Radio is wrapped in a `FormControlLabel`
which gets the `labelProps` prop as its props.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Radio } from '@lsy-netline/netline-ui';
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
        <Radio value="1" label="Radio button" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio
          value="1"
          label="Radio button"
          helperText="Invalid field"
          error
          size="small"
          checked
          className="hovered"
        />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio
          value="1"
          label="Radio button"
          helperText="Invalid field"
          error
          size="small"
          checked
          className="focused"
        />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" checked disabled />
      </Grid>
    </Grid>
  </Grid>
```

## Variants

- Disabled
- Small
- Disabled
- Small
- Disabled
- Small

## Examples

### RadioWithLabel

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
        <Radio value="1" label="Radio button" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio
          value="1"
          label="Radio button"
          helperText="Invalid field"
          error
          size="small"
          checked
          className="hovered"
        />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio
          value="1"
          label="Radio button"
          helperText="Invalid field"
          error
          size="small"
          checked
          className="focused"
        />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" checked disabled />
      </Grid>
    </Grid>
  </Grid>
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
        <Radio value="1" label="Radio button" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" size="small" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio
          value="1"
          label="Radio button"
          helperText="Invalid field"
          error
          size="small"
          checked
          className="hovered"
        />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio
          value="1"
          label="Radio button"
          helperText="Invalid field"
          error
          size="small"
          checked
          className="focused"
        />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" label="Radio button" helperText="Invalid field" error size="small" checked disabled />
      </Grid>
    </Grid>
  </Grid>
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
        <Radio value="1" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" size="small" checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Medium
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Medium
      </Grid>

      <Grid size={{ xs: 2 }}>
        <Radio value="1" error checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error checked disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Unchecked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" disabled />
      </Grid>
    </Grid>

    <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
      <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
        Error Checked Small
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" checked />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" checked className="hovered" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" checked className="focused" />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Radio value="1" error size="small" checked disabled />
      </Grid>
    </Grid>
  </Grid>
```

## MUI Reference

This component is based on Material-UI's Radio.

For additional props and detailed API documentation, refer to:

- [MUI Radio Documentation](https://mui.com/material-ui/api/radio/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
