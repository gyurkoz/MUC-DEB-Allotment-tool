# Input Chip

Input Chip component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Description

`InputChip` is a chip variant which is used inside input fields.

It can be used in `Autocomplete` implementation and actively used in `MultiSelectField` component.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { InputChip } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const label = text('label', 'Chip label');
  const handleDelete = useActionCallback('onDelete');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }} />
        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Extra small
        </Grid>

        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Normal
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="small" />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="extraSmall" />
        </Grid>

        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="small" className="InputChip-hover" />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="extraSmall" className="InputChip-hover" />
        </Grid>

        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="small" className={chipClasses.focusVisible} />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="extraSmall" className={chipClasses.focusVisible} />
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Extra Small
- Small

## Examples

```tsx
const label = text('label', 'Chip label');
  const handleDelete = useActionCallback('onDelete');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }} />
        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Extra small
        </Grid>

        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Normal
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="small" />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="extraSmall" />
        </Grid>

        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="small" className="InputChip-hover" />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="extraSmall" className="InputChip-hover" />
        </Grid>

        <Grid size={{ xs: 4 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="small" className={chipClasses.focusVisible} />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <InputChip label={label} onDelete={handleDelete} size="extraSmall" className={chipClasses.focusVisible} />
        </Grid>
      </Grid>
    </div>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
