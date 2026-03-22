# Date Picker

Date Picker component

## Overview

- **Category**: pickers
- **Base Library**: mui-x
- **MUI Component**: DatePicker

## Description

This component is built on the DatePicker component from `@mui/x-date-pickers`.

The listed props are not complete here as this component inherits the props
from the following components:<br />
- [@mui/material/TextField](https://mui.com/api/text-field/)
- When variant is inline: [@mui/x-date-pickers/DatePicker](https://mui.com/x/api/date-pickers/date-picker/)
- When variant is dialog: [@mui/x-date-pickers/MobileDatePicker](https://mui.com/x/api/date-pickers/mobile-date-picker/)

**Note: Pickers do not require you to install date-io adapters manually. Everything is included with `@mui/x-date-pickers`!**

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DatePicker } from '@lsy-netline/netline-ui';
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
- Small
- Small
- Small
- Disabled
- Small

## Examples

### EditingModes

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

### Errors

```tsx
const defaultValue = new Date(2019, 0, 9, 14, 39);
  const [value, setValue] = useState<DateValue<PickerValue>>('FOO or BAR');
  const { error, helperText } = useMemo(() => {
    // normally casting is not needed, but the Storybook project imports multiple adapters
    const dateValue = value as DateValue;
    const valid = dateValue instanceof Date || ['', 'FOO', 'BAR'].indexOf((dateValue || '').toUpperCase()) >= 0;
    return {
      error: !valid,
      helperText: valid ? undefined : 'Not FOO or BAR or Invalid Date!',
    };
  }, [value]);

  const handleChange = useActionCallback('onChange', (newValue: DateValue<PickerValue>) => {
    setValue(newValue);
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  helperText="Invalid field"
                  error
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Medium" fullWidth defaultValue={defaultValue} helperText="Invalid field" error />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  helperText="Invalid field"
                  error
                  errorMode="label"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  fullWidth
                  defaultValue={defaultValue}
                  helperText="Invalid field"
                  error
                  errorMode="label"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Custom Validation
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Enter FOO, BAR or HH:mm time"
                  fullWidth
                  editable
                  clearable
                  value={value}
                  onChange={handleChange}
                  error={error}
                  helperText={helperText}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Enter FOO, BAR or HH:mm time"
                  fullWidth
                  editable
                  clearable
                  value={value}
                  onChange={handleChange}
                  error={error}
                  helperText={helperText}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

### FormatsAndPresets

```tsx
const [value, setValue] = useState<DateValue<PickerValue>>(new Date(2018, 0, 1, 13, 24));
  const handleChange = useActionCallback('onChange', (newValue: DateValue<PickerValue>) => setValue(newValue));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        {/* DateFormat presets */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                DDMMMYY preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                DD_MMM_YY preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                ISO_DATE preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.ISO_DATE}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.ISO_DATE}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                YYYY_MM_DD_SLASH preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.YYYY_MM_DD_SLASH}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.YYYY_MM_DD_SLASH}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Text case */}
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with upper case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  textCase="upper"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  textCase="upper"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with lower case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  textCase="lower"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  textCase="lower"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with capitalized case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  textCase="capitalize"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  textCase="capitalize"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }} />
          {/* Alternate formats */}
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Alternate formats
                <br />
                (try with YYYYMMDD)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  altFormats="yyyyMMdd"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  altFormats="yyyyMMdd"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Alternate formats with onblur convert
                <br />
                (try YYYYMMDD and then blur or enter)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  altFormats="yyyyMMdd"
                  altFormatsConvert="onblur"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  altFormats="yyyyMMdd"
                  altFormatsConvert="onblur"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Show toolbar in
                <br />
                different format
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  showToolbar
                  toolbarFormat="dd MMM, yyyy"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DDMMMYY}
                  showToolbar
                  toolbarFormat="dd MMM, yyyy"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }} />
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

### PickerModes

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

### Sample

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker label="Label" onChange={setValue} value={value} />
    </LocalizationProvider>
```

### Status

```tsx
const defaultValue = new Date(2019, 0, 9);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Default (empty)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Small" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Medium" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Filled
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Disabled
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Medium" fullWidth defaultValue={defaultValue} disabled />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Read-only
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker label="Medium" fullWidth defaultValue={defaultValue} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

## MUI Reference

This component is based on Material-UI's DatePicker.

For additional props and detailed API documentation, refer to:

- [MUI DatePicker Documentation](https://mui.com/material-ui/api/datepicker/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
