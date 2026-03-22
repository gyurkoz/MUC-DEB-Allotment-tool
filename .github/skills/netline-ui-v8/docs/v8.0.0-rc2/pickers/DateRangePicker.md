# Date Range Picker

Date Range Picker component

## Overview

- **Category**: pickers
- **Base Library**: mui-x
- **MUI Component**: DateRangePicker

## Description

This component is built on the DateRangePicker component from `@mui/x-date-pickers`.

The listed props are not complete here as this component inherits the props
from the following components:<br />
- [@mui/material/TextField](https://mui.com/api/text-field/)
- When variant is inline: [@mui/x-date-pickers/DekstopDateRangePicker](https://mui.com/x/api/date-pickers/desktop-date-range-picker/)
- When variant is dialog: [@mui/x-date-pickers/MobileDateRangePicker](https://mui.com/x/api/date-pickers/mobile-date-range-picker/)

**Note: Pickers do not require you to install date-io adapters manually. Everything is included with `@mui/x-date-pickers`!**

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DateRangePicker } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error (Single Field)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error (Single Field)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  singleField
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  errorMode="label"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
```

## Variants

- Small
- Small
- Small
- Disabled
- Small
- Small
- Disabled
- Small

## Examples

### Errors

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error (Single Field)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error (Single Field)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  singleField
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  errorMode="label"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
```

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Error (Single Field)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error (Single Field)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker
                  singleField
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  errorMode="label"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} errorMode="label" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
```

### Formats

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

### MultiField

```tsx
<div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default (empty)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Filled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Read-only
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
```

### Sample

```tsx
<DateRangePicker />
  </div>
```

### Shortcuts

```tsx
const handleAccept = useActionCallback('onAccept');

  const adapter = usePickerAdapter();
  const shortcutsItems: PickersShortcutsItem<DateRange<PickerValidDate>>[] = [
    {
      label: 'This Week',
      getValue: () => {
        const today = new Date();
        return [adapter.startOfWeek(today), adapter.endOfWeek(today)];
      },
    },
    {
      label: 'Last Week',
      getValue: () => {
        const today = new Date();
        const prevWeek = adapter.addDays(today, -7);
        return [adapter.startOfWeek(prevWeek), adapter.endOfWeek(prevWeek)];
      },
    },
    {
      label: 'Last 14 Days',
      getValue: () => {
        const today = new Date();
        return [adapter.addDays(today, -14), today];
      },
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default shortcuts
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker size="small" label="Small" fullWidth shortcuts onAccept={handleAccept} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth shortcuts onAccept={handleAccept} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Custom shortcuts
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker
                size="small"
                label="Small"
                fullWidth
                shortcuts={shortcutsItems}
                onAccept={handleAccept}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker label="Medium" fullWidth shortcuts={shortcutsItems} onAccept={handleAccept} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

### SingleField

```tsx
<div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default (empty)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField size="small" label="Small" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField label="Medium" fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Filled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField size="small" label="Small" fullWidth defaultValue={defaultValue} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} disabled />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Read-only
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DateRangePicker singleField label="Medium" fullWidth defaultValue={defaultValue} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
```

## MUI Reference

This component is based on Material-UI's DateRangePicker.

For additional props and detailed API documentation, refer to:

- [MUI DateRangePicker Documentation](https://mui.com/material-ui/api/daterangepicker/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
