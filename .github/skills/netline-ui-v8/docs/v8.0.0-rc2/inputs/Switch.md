# Switch

Switch component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: Switch

## Description

Switches toggle the state of a single setting on or off.

__Note__: the interface differs from the material-ui Checkbox interface. Look at the examples!

When the `label` prop is given, the Checkbox is wrapped in a `FormControlLabel`
which gets the `labelProps` prop as its props.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Switch } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const label = text('label', 'Toggle switch label');
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 5 }} alignContent="center" component={Typography} variant="subtitle2">
          Unchecked
        </Grid>
        <Grid size={{ xs: 5 }} alignContent="center" component={Typography} variant="subtitle2">
          Checked
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Normal
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked />
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} disabled />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked disabled />
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} className="Switch--hover" />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked className="Switch--hover" />
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} className="Switch--focus" />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked className="Switch--focus" />
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Disabled

## Examples

### WithLabel

```tsx
const label = text('label', 'Toggle switch label');
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 5 }} alignContent="center" component={Typography} variant="subtitle2">
          Unchecked
        </Grid>
        <Grid size={{ xs: 5 }} alignContent="center" component={Typography} variant="subtitle2">
          Checked
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Normal
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked />
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} disabled />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked disabled />
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} className="Switch--hover" />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked className="Switch--hover" />
        </Grid>

        <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} className="Switch--focus" />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Switch value="1" label={label} defaultChecked className="Switch--focus" />
        </Grid>
      </Grid>
    </div>
  );
```

### WithoutLabel

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 2 }} />
      <Grid size={{ xs: 5 }} alignContent="center" component={Typography} variant="subtitle2">
        Unchecked
      </Grid>
      <Grid size={{ xs: 5 }} alignContent="center" component={Typography} variant="subtitle2">
        Checked
      </Grid>

      <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
        Normal
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" />
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" defaultChecked />
      </Grid>

      <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
        Disabled
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" disabled />
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" defaultChecked disabled />
      </Grid>

      <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
        Hover
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" className="Switch--hover" />
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" defaultChecked className="Switch--hover" />
      </Grid>

      <Grid size={{ xs: 2 }} alignContent="center" component={Typography} variant="subtitle2">
        Focus
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" className="Switch--focus" />
      </Grid>
      <Grid size={{ xs: 5 }}>
        <Switch value="1" defaultChecked className="Switch--focus" />
      </Grid>
    </Grid>
  </div>
```

### Sample

```tsx
<Switch value="1" defaultChecked />
```

## MUI Reference

This component is based on Material-UI's Switch.

For additional props and detailed API documentation, refer to:

- [MUI Switch Documentation](https://mui.com/material-ui/api/switch/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
