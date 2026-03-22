# Number Field

Number Field component

## Overview

- **Category**: inputs
- **Base Library**: custom

## Description

NumberField is a component based on TextField that allows users to input a numeric value.


The `unit` prop allows you to display a unit in the end adornment. Additional end adornments can be added to the input and will be displayed before the unit.<br/
The component includes stepper buttons to increment and decrement the value within the specified range and step.<br/

It supports both controlled and uncontrolled modes.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { NumberField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const unit = 'min';

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }} textAlign="center">
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                max={10}
                size="small"
                error
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error (Focused)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                size="small"
                error
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                size="small"
                error
                errorMode="label"
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                errorMode="label"
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error (Focused)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                size="small"
                error
                errorMode="label"
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                errorMode="label"
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Small
- Disabled
- Small
- Medium

## Examples

### Errors

```tsx
const unit = 'min';

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }} textAlign="center">
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                max={10}
                size="small"
                error
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error (Focused)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                size="small"
                error
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                size="small"
                error
                errorMode="label"
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                errorMode="label"
                unit={unit}
                helperText="Value is out of range."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error (Focused)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                size="small"
                error
                errorMode="label"
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label"
                defaultValue={11}
                error
                errorMode="label"
                helperText="Value is out of range."
                unit={unit}
                slotProps={{
                  input: { className: outlinedInputClasses.focused },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

### Status

```tsx
const unit = 'min';
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (small)" size="small" unit={unit} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (medium)" unit={unit} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Active (Focused)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label (small)"
                size="small"
                unit={unit}
                slotProps={{ input: { className: outlinedInputClasses.focused } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label (medium)"
                unit={unit}
                slotProps={{ input: { className: outlinedInputClasses.focused } }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Filled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (small)" size="small" defaultValue={5} unit={unit} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (medium)" defaultValue={5} unit={unit} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (small)" size="small" disabled unit={unit} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth id="active" label="Label (medium)" disabled unit={unit} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled - Filled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (small)" size="small" defaultValue={5} disabled unit={unit} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField fullWidth label="Label (medium)" defaultValue={5} disabled unit={unit} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Read-only
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                label="Label (small)"
                placeholder="readOnly"
                defaultValue={5}
                size="small"
                readOnly
                unit={unit}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <NumberField
                fullWidth
                id="active"
                label="Label (medium)"
                placeholder="readOnly"
                defaultValue={5}
                readOnly
                unit={unit}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
