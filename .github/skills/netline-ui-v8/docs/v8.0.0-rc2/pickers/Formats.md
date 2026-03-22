# Formats

Formats component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Formats } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState<DateRange<PickerValidDate>>([
    new Date(2018, 0, 7, 13, 24),
    new Date(2018, 0, 9, 13, 24),
  ]);
  const handleChange = useActionCallback('onChange', (newValue: DateRange<PickerValidDate>) => setValue(newValue));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with DD_MMM_YY preset
                <br />
                Zero Width Space
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
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
                <DateRangePicker
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
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                DD_MMM_YY preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  zeroWidthSpace={false}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  zeroWidthSpace={false}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                ISO_DATE preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
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
                <DateRangePicker
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
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                YYYY_MM_DD_SLASH preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
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
                <DateRangePicker
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
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with upper case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="upper"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="upper"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with lower case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="lower"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="lower"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with capitalized case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="capitalize"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="capitalize"
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
const [value, setValue] = useState<DateRange<PickerValidDate>>([
    new Date(2018, 0, 7, 13, 24),
    new Date(2018, 0, 9, 13, 24),
  ]);
  const handleChange = useActionCallback('onChange', (newValue: DateRange<PickerValidDate>) => setValue(newValue));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with DD_MMM_YY preset
                <br />
                Zero Width Space
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
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
                <DateRangePicker
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
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                DD_MMM_YY preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  zeroWidthSpace={false}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  zeroWidthSpace={false}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                ISO_DATE preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
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
                <DateRangePicker
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
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Date format with
                <br />
                YYYY_MM_DD_SLASH preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
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
                <DateRangePicker
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
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with upper case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="upper"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="upper"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with lower case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="lower"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="lower"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                DDMMMYY preset
                <br />
                with capitalized case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="capitalize"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={DateFormatPresets.DD_MMM_YY}
                  textCase="capitalize"
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
