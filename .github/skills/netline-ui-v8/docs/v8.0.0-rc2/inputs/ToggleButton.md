# Toggle Button

Toggle Button component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: ToggleButton

## Description

The size of the toggle button.
@default 'medium'

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ToggleButton } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const label = text('Label', 'Toggle button');
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={3} />
        <Grid size={4} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={4} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={4}>
          <ToggleButton value={1} size="small">
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={2} size="medium">
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Default with Icon
        </Grid>
        <Grid size={4}>
          <ToggleButton value={3} size="small" Icon={FavoriteIcon}>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={4} size="medium" Icon={FavoriteIcon}>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Selected
        </Grid>
        <Grid size={4}>
          <ToggleButton value={5} size="small" Icon={FavoriteIcon} selected>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={6} size="medium" Icon={FavoriteIcon} selected>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Selected
        </Grid>
        <Grid size={4}>
          <ToggleButton value={7} size="small" Icon={FavoriteIcon} selected variant="inverse">
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={8} size="medium" Icon={FavoriteIcon} selected variant="inverse">
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={4}>
          <ToggleButton value={9} size="small" Icon={FavoriteIcon} disabled>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={10} size="medium" Icon={FavoriteIcon} disabled>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Selected Disabled
        </Grid>
        <Grid size={4}>
          <ToggleButton value={11} size="small" Icon={FavoriteIcon} selected disabled>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={12} size="medium" Icon={FavoriteIcon} selected disabled>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Selected Disabled
        </Grid>
        <Grid size={4}>
          <ToggleButton value={13} size="small" Icon={FavoriteIcon} selected disabled variant="inverse">
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={14} size="medium" Icon={FavoriteIcon} selected disabled variant="inverse">
            {label}
          </ToggleButton>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Inverse
- Disabled
- Small
- Medium

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `oneOf` |  | The size of the toggle button. @default 'medium' |
| `variant` | `oneOf` |  | The variant of the toggle button. 'normal' for the default style, 'inverse' for the inverse style. @default 'normal' |
| `Icon` | `elementType` |  | The icon to display in the left side of the button. |
| `IconProps` | `object` |  | Props for the icon component. |

## Examples

```tsx
const label = text('Label', 'Toggle button');
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={3} />
        <Grid size={4} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={4} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={4}>
          <ToggleButton value={1} size="small">
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={2} size="medium">
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Default with Icon
        </Grid>
        <Grid size={4}>
          <ToggleButton value={3} size="small" Icon={FavoriteIcon}>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={4} size="medium" Icon={FavoriteIcon}>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Selected
        </Grid>
        <Grid size={4}>
          <ToggleButton value={5} size="small" Icon={FavoriteIcon} selected>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={6} size="medium" Icon={FavoriteIcon} selected>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Selected
        </Grid>
        <Grid size={4}>
          <ToggleButton value={7} size="small" Icon={FavoriteIcon} selected variant="inverse">
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={8} size="medium" Icon={FavoriteIcon} selected variant="inverse">
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={4}>
          <ToggleButton value={9} size="small" Icon={FavoriteIcon} disabled>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={10} size="medium" Icon={FavoriteIcon} disabled>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Selected Disabled
        </Grid>
        <Grid size={4}>
          <ToggleButton value={11} size="small" Icon={FavoriteIcon} selected disabled>
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={12} size="medium" Icon={FavoriteIcon} selected disabled>
            {label}
          </ToggleButton>
        </Grid>

        <Grid size={3} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Selected Disabled
        </Grid>
        <Grid size={4}>
          <ToggleButton value={13} size="small" Icon={FavoriteIcon} selected disabled variant="inverse">
            {label}
          </ToggleButton>
        </Grid>
        <Grid size={4}>
          <ToggleButton value={14} size="medium" Icon={FavoriteIcon} selected disabled variant="inverse">
            {label}
          </ToggleButton>
        </Grid>
      </Grid>
    </div>
  );
```

## MUI Reference

This component is based on Material-UI's ToggleButton.

For additional props and detailed API documentation, refer to:

- [MUI ToggleButton Documentation](https://mui.com/material-ui/api/togglebutton/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
