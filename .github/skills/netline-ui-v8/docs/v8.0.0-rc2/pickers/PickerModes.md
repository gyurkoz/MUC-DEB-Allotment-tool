# Picker Modes

Picker Modes component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { PickerModes } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const defaultValue = new Date(2019, 0, 9);
  const testing = isTesting();
  const [open, setOpen] = useState<boolean | undefined>(testing || undefined);
  const handleOpen = useActionCallback('onOpen', () => setOpen(true));
  const handleClose = useActionCallback('onClose', () => setOpen(false));
  const onOpen = testing ? handleOpen : undefined;
  const onClose = testing ? handleClose : undefined;
  const pickerHeight = testing ? 500 : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Without week numbers (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Without week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Without week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                With week numbers (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="With week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="With week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Simple year/month selector
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Simple year/month selector"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Simple year/month selector"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Simple year/month with weeks
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Simple year/month selector with weeks"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Simple year/month selector with weeks"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar with weeks
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                  displayWeekNumber
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
  const testing = isTesting();
  const [open, setOpen] = useState<boolean | undefined>(testing || undefined);
  const handleOpen = useActionCallback('onOpen', () => setOpen(true));
  const handleClose = useActionCallback('onClose', () => setOpen(false));
  const onOpen = testing ? handleOpen : undefined;
  const onClose = testing ? handleClose : undefined;
  const pickerHeight = testing ? 500 : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Without week numbers (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Without week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Without week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                With week numbers (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="With week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="With week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Simple year/month selector
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Simple year/month selector"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Simple year/month selector"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Simple year/month with weeks
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Simple year/month selector with weeks"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Simple year/month selector with weeks"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar with weeks
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                  displayWeekNumber
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
