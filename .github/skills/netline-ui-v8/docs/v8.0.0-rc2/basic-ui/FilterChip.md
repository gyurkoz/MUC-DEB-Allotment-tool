# Filter Chip

Filter Chip component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { FilterChip } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const handleDelete = useActionCallback('onDelete');
  return (
    <div>
      <Grid container spacing={2} alignItems="center" width="70%">
        <Grid size={{ xs: 3 }} />
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Medium
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Extra Small
        </Grid>

        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} size="medium" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} size="small" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} size="extraSmall" />
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} disabled size="medium" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} disabled size="small" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} disabled size="extraSmall" />
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className="FilterChip-hover"
            size="medium"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className="FilterChip-hover"
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className="FilterChip-hover"
            size="extraSmall"
          />
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className={chipClasses.focusVisible}
            size="medium"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className={` ${chipClasses.focusVisible}`}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className={` ${chipClasses.focusVisible}`}
            size="extraSmall"
          />
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Disabled
- Extra Small
- Small
- Medium

## Examples

```tsx
const handleDelete = useActionCallback('onDelete');
  return (
    <div>
      <Grid container spacing={2} alignItems="center" width="70%">
        <Grid size={{ xs: 3 }} />
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Medium
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Extra Small
        </Grid>

        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} size="medium" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} size="small" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} size="extraSmall" />
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} disabled size="medium" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} disabled size="small" />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip label="Filter" onDelete={handleDelete} StartIcon={InfoIcon} disabled size="extraSmall" />
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className="FilterChip-hover"
            size="medium"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className="FilterChip-hover"
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className="FilterChip-hover"
            size="extraSmall"
          />
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className={chipClasses.focusVisible}
            size="medium"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className={` ${chipClasses.focusVisible}`}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FilterChip
            label="Filter"
            onDelete={handleDelete}
            StartIcon={InfoIcon}
            className={` ${chipClasses.focusVisible}`}
            size="extraSmall"
          />
        </Grid>
      </Grid>
    </div>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
