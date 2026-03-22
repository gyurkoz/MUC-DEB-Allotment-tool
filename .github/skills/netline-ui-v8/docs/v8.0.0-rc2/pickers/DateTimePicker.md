# Date Time Picker

Date Time Picker component

## Overview

- **Category**: pickers
- **Base Library**: mui-x
- **MUI Component**: DateTimePicker

## Description

This component is built on the DateTimePicker component from `@mui/x-date-pickers`.

The listed props are not complete here as this component inherits the props
from the following components:<br />
- [@mui/material/TextField](https://mui.com/api/text-field/)
- When variant is inline: [@mui/x-date-pickers/DekstopDateTimePicker](https://mui.com/x/api/date-pickers/desktop-datetime-picker/)
- When variant is dialog: [@mui/x-date-pickers/MobileDateTimePicker](https://mui.com/x/api/date-pickers/mobile-datetime-picker/)

**Note: Pickers do not require you to install date-io adapters manually. Everything is included with `@mui/x-date-pickers`!**

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DateTimePicker } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const defaultValue = new Date(2019, 0, 9, 19, 24);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Non-Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Clearable & Editable" fullWidth defaultValue={defaultValue} editable clearable />
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
- Medium
- Disabled
- Small

## Examples

### EditingModes

```tsx
const defaultValue = new Date(2019, 0, 9, 19, 24);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Non-Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Clearable & Editable" fullWidth defaultValue={defaultValue} editable clearable />
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
                <DateTimePicker
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  helperText="Invalid field"
                  error
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Medium" fullWidth defaultValue={defaultValue} helperText="Invalid field" error />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
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
                <DateTimePicker
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
                <DateTimePicker
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
                <DateTimePicker
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
        {/* DateTimeFormat presets */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                DDMMMYY_ISO_TIME preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                DDMMMYY_HHMM preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_HHMM}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_HHMM}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                DD_MMM_YY_HHMM preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DD_MMM_YY_HHMM}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DD_MMM_YY_HHMM}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                DD_MMM_YY_ISO_TIME preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DD_MMM_YY_ISO_TIME}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DD_MMM_YY_ISO_TIME}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                ISO_DATE_TIME preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.ISO_DATE_TIME}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.ISO_DATE_TIME}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                YYYY_MM_DD_DOT_ISO_TIME preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.YYYY_MM_DD_DOT_ISO_TIME}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.YYYY_MM_DD_DOT_ISO_TIME}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date/Time format with
                <br />
                YYYY_MM_DD_SLASH_ISO_TIME preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.YYYY_MM_DD_SLASH_ISO_TIME}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.YYYY_MM_DD_SLASH_ISO_TIME}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }} />
          {/* Text case */}
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY_ISO_TIME preset
                <br />
                with upper case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  textCase="upper"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  textCase="upper"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY_ISO_TIME preset
                <br />
                with lower case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  textCase="lower"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  textCase="lower"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY_ISO_TIME preset
                <br />
                with capitalized case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  textCase="capitalize"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
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
                (try with YYYYMMDD HHmm)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  altFormats="yyyyMMdd HHmm"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  altFormats="yyyyMMdd HHmm"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Alternate formats with onblur convert
                <br />
                (try yyyyMMdd HHmm and then blur/enter)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  altFormats="yyyyMMdd HHmm"
                  altFormatsConvert="onblur"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  altFormats="yyyyMMdd HHmm"
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
                <DateTimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  showToolbar
                  toolbarFormat="dd MMM, yyyy HH:mm"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateTimeFormatPresets.DDMMMYY_ISO_TIME}
                  showToolbar
                  toolbarFormat="dd MMM, yyyy HH:mm"
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
  const open = isTesting() || undefined;
  const pickerHeight = open ? 350 : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Without week numbers (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker
                  open={open}
                  size="small"
                  label="Without week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker open={open} label="Without week numbers" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                With week numbers (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker
                  open={open}
                  size="small"
                  label="With week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  open={open}
                  label="With week numbers"
                  fullWidth
                  defaultValue={defaultValue}
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Simple year/month selector
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker
                  open={open}
                  size="small"
                  label="Simple year/month selector"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  open={open}
                  label="Simple year/month selector"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Simple year/month with weeks
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker
                  open={open}
                  size="small"
                  label="Simple year/month selector with weeks"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                  displayWeekNumber
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  open={open}
                  label="Simple year/month selector with weeks"
                  fullWidth
                  defaultValue={defaultValue}
                  simpleYearMonthSelector
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar (small)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker
                  open={open}
                  size="small"
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar with weeks
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <DateTimePicker
                  open={open}
                  size="small"
                  label="Show toolbar"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                  displayWeekNumber
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar (medium, default)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker open={open} label="Show toolbar" fullWidth defaultValue={defaultValue} showToolbar />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar with weeks (medium, default)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker
                  open={open}
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
      <DateTimePicker label="Label" onChange={setValue} value={value} style={{ width: 250 }} />
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
                <DateTimePicker size="small" label="Small" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Medium" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Filled
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Disabled
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Medium" fullWidth defaultValue={defaultValue} disabled />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Read-only
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateTimePicker label="Medium" fullWidth defaultValue={defaultValue} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

## MUI Reference

This component is based on Material-UI's DateTimePicker.

For additional props and detailed API documentation, refer to:

- [MUI DateTimePicker Documentation](https://mui.com/material-ui/api/datetimepicker/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
