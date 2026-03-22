# Editing Modes

Editing Modes component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { EditingModes } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const defaultValue = new Date(2019, 0, 9);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Non-Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Clearable & Editable" fullWidth defaultValue={defaultValue} editable clearable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Day Stepper & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Day Stepper & Editable (empty)" fullWidth editable daySteppers />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Day Stepper & Editable (empty)" fullWidth editable daySteppers />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Day Stepper & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Day Stepper & Editable" fullWidth defaultValue={defaultValue} editable daySteppers />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Day Stepper & Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Day Stepper & Clearable & Editable (empty)"
                  fullWidth
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Day Stepper & Clearable & Editable  (empty)"
                  fullWidth
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Day Stepper & Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Day Stepper & Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

## Variants

- Small

## Examples

```tsx
const defaultValue = new Date(2019, 0, 9);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Non-Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Clearable & Editable" fullWidth defaultValue={defaultValue} editable clearable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Day Stepper & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Day Stepper & Editable (empty)" fullWidth editable daySteppers />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Day Stepper & Editable (empty)" fullWidth editable daySteppers />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Day Stepper & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Day Stepper & Editable" fullWidth defaultValue={defaultValue} editable daySteppers />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 / 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Day Stepper & Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Day Stepper & Clearable & Editable (empty)"
                  fullWidth
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Day Stepper & Clearable & Editable  (empty)"
                  fullWidth
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Day Stepper & Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Day Stepper & Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                  daySteppers
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
