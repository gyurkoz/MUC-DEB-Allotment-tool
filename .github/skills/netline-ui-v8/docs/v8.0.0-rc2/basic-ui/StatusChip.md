# Status Chip

Status Chip component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Description

Restriction: When `size` is set to `"extraSmall"`, icons are not supported.
The `StartIcon` and `EndIcon` props will be ignored for this size.

To display icons, use `size="small"` or `size="medium"`.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { StatusChip } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const label = text('label', 'Chip text');

  const colors: (keyof Colors)[] = [
    'green',
    'yellow',
    'red',
    'blue',
    'grey',
    'dataOrange',
    'dataBloodOrange',
    'dataPink',
    'dataPurple',
    'dataIndigo',
    'dataBlue',
    'dataTurquoise',
    'dataGreen',
    'dataGrey',
    'dataBrown',
  ];

  return (
    <div>
      <Grid container spacing={2} width="70%">
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle1">
          Default Color
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Medium
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Extra small
        </Grid>

        {colors.map((color) => (
          <React.Fragment key={color}>
            <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
              {formatColorName(color)}
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} size="medium" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} size="small" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} size="extraSmall" />
            </Grid>
          </React.Fragment>
        ))}

        <Grid size={{ xs: 12 }} />
        <Grid size={{ xs: 12 }} />

        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle1">
          Light Color
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Medium
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Extra small
        </Grid>
        {colors.map((color) => (
          <React.Fragment key={color}>
            <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
              {formatColorName(color)}
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} mode="light" size="medium" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} mode="light" size="small" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} mode="light" size="extraSmall" />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
```

## Variants

- Extra Small
- Small
- Medium

## Examples

```tsx
const label = text('label', 'Chip text');

  const colors: (keyof Colors)[] = [
    'green',
    'yellow',
    'red',
    'blue',
    'grey',
    'dataOrange',
    'dataBloodOrange',
    'dataPink',
    'dataPurple',
    'dataIndigo',
    'dataBlue',
    'dataTurquoise',
    'dataGreen',
    'dataGrey',
    'dataBrown',
  ];

  return (
    <div>
      <Grid container spacing={2} width="70%">
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle1">
          Default Color
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Medium
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Extra small
        </Grid>

        {colors.map((color) => (
          <React.Fragment key={color}>
            <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
              {formatColorName(color)}
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} size="medium" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} size="small" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} size="extraSmall" />
            </Grid>
          </React.Fragment>
        ))}

        <Grid size={{ xs: 12 }} />
        <Grid size={{ xs: 12 }} />

        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle1">
          Light Color
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Medium
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Extra small
        </Grid>
        {colors.map((color) => (
          <React.Fragment key={color}>
            <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
              {formatColorName(color)}
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} mode="light" size="medium" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} mode="light" size="small" />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <StatusChip label={label} color={color} StartIcon={CheckCircleIcon} mode="light" size="extraSmall" />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
