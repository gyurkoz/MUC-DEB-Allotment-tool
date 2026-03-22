# Formats And Presets

Formats And Presets component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { FormatsAndPresets } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
