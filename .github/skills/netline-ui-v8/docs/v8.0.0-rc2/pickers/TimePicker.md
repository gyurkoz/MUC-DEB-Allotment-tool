# Time Picker

Time Picker component

## Overview

- **Category**: pickers
- **Base Library**: mui-x
- **MUI Component**: TimePicker

## Description

This component is built on the TimePicker component from `@mui/x-date-pickers.`

The listed props are not complete here as this component inherits the props
from the following components:<br />
- [@mui/material/TextField](https://mui.com/api/text-field/)
- When variant is inline: [@mui/x-date-pickers/TimePicker](https://mui.com/x/api/date-pickers/desktop-time-picker/)
- When variant is dialog: [@mui/x-date-pickers/MobileTimePicker](https://mui.com/x/api/date-pickers/mobile-time-picker/)

**Note: Pickers do not require you to install date-io adapters manually. Everything is included with `@mui/x-date-pickers`!**

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { TimePicker } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const dateFnsDefaultValue = new Date(2019, 9, 21, 19, 20);
  const dayjsDefaultValue = dayjs('2019-09-21T19:21');
  const momentDefaultValue = moment('2019-09-21T19:22');
  const luxonDefaultValue = DateTime.fromISO('2019-09-21T19:23');

  /**
   * If you are using dayjs, then dateLibInstance={dayjs.utc} in the LocalizationProvider
   * is required if you want it to work in UTC.
   * Without it keyboard inputs will be handled as local time instead of UTC.
   */
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker label="Date Fns" fullWidth defaultValue={dateFnsDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} dateLibInstance={dayjs.utc}>
                <TimePicker label="Dayjs" fullWidth defaultValue={dayjsDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <TimePicker label="Moment" fullWidth defaultValue={momentDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterLuxon}>
                <TimePicker label="Luxon" fullWidth defaultValue={luxonDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
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

### DifferentAdapters

```tsx
const dateFnsDefaultValue = new Date(2019, 9, 21, 19, 20);
  const dayjsDefaultValue = dayjs('2019-09-21T19:21');
  const momentDefaultValue = moment('2019-09-21T19:22');
  const luxonDefaultValue = DateTime.fromISO('2019-09-21T19:23');

  /**
   * If you are using dayjs, then dateLibInstance={dayjs.utc} in the LocalizationProvider
   * is required if you want it to work in UTC.
   * Without it keyboard inputs will be handled as local time instead of UTC.
   */
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker label="Date Fns" fullWidth defaultValue={dateFnsDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} dateLibInstance={dayjs.utc}>
                <TimePicker label="Dayjs" fullWidth defaultValue={dayjsDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <TimePicker label="Moment" fullWidth defaultValue={momentDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterLuxon}>
                <TimePicker label="Luxon" fullWidth defaultValue={luxonDefaultValue} editable />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

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
                <TimePicker size="small" label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Non-Editable (empty)" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Non-Editable" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Editable (empty)" fullWidth editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Editable" fullWidth defaultValue={defaultValue} editable />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Clearable & Editable
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Clearable & Editable (empty)" fullWidth editable clearable />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Clearable & Editable"
                  fullWidth
                  defaultValue={defaultValue}
                  editable
                  clearable
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Clearable & Editable" fullWidth defaultValue={defaultValue} editable clearable />
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
                <TimePicker
                  size="small"
                  label="Small"
                  fullWidth
                  defaultValue={defaultValue}
                  helperText="Invalid field"
                  error
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Medium" fullWidth defaultValue={defaultValue} helperText="Invalid field" error />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Inline Error
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
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
                <TimePicker
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
                <TimePicker
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
                <TimePicker
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
        {/* TimeFormat presets */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Time format with
                <br />
                ISO_TIME preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Time format with
                <br />
                ISO_TIME_SECONDS preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME_SECONDS}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME_SECONDS}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Time format with
                <br />
                HHMM preset
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.HHMM}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.HHMM}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Text case */}
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                ISO_TIME preset
                <br />
                with upper case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  textCase="upper"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  textCase="upper"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                ISO_TIME preset
                <br />
                with lower case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  textCase="lower"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  textCase="lower"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                ISO_TIME preset
                <br />
                with capitalized case
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  textCase="capitalize"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  textCase="capitalize"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Alternate formats */}
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Alternate formats
                <br />
                (try with HHMM)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  altFormats="HHmm"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  altFormats="HHmm"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Alternate formats with onblur convert
                <br />
                (try with HHmm and then blur or enter)
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  altFormats="HHmm"
                  altFormatsConvert="onblur"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.ISO_TIME}
                  altFormats="HHmm"
                  altFormatsConvert="onblur"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Show toolbar in
                <br />
                different format
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  size="small"
                  label="Small"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.HHMM}
                  showToolbar
                  toolbarFormat="HH:mm"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  label="Medium"
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  editable
                  preset={TimeFormatPresets.HHMM}
                  showToolbar
                  toolbarFormat="HH:mm"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

### PickerModes

```tsx
const defaultValue = new Date(2019, 0, 9, 14, 39);
  const testing = isTesting() || false;
  const [open, setOpen] = useState<boolean | undefined>(testing || undefined);
  const handleOpen = useActionCallback('onOpen', () => setOpen(true));
  const handleClose = useActionCallback('onClose', () => setOpen(false));
  const onOpen = testing ? handleOpen : undefined;
  const onClose = testing ? handleClose : undefined;
  const pickerHeight = testing ? 375 : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                24 hours mode (default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="24 hours mode"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="24 hours mode"
                  fullWidth
                  defaultValue={defaultValue}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                12 hours mode (AM/PM mode)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="12 hours (AM/PM) mode"
                  fullWidth
                  defaultValue={defaultValue}
                  ampm
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="12 hours (AM/PM) mode"
                  fullWidth
                  defaultValue={defaultValue}
                  ampm
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Toolbar (Portrait, default)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Toolbar (portrait)"
                  fullWidth
                  defaultValue={defaultValue}
                  showToolbar
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Toolbar (portrait)"
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
                Toolbar (Landscape)
              </Grid>
              <Grid size={{ xs: 12 }} height={pickerHeight}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  size="small"
                  label="Toolbar (landscape)"
                  fullWidth
                  defaultValue={defaultValue}
                  orientation="landscape"
                  showToolbar
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker
                  open={open}
                  onOpen={onOpen}
                  onClose={onClose}
                  label="Toolbar (landscape)"
                  fullWidth
                  defaultValue={defaultValue}
                  orientation="landscape"
                  showToolbar
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
      <TimePicker label="Label" onChange={setValue} value={value} />
    </LocalizationProvider>
```

### Status

```tsx
const defaultValue = new Date(2019, 0, 9, 14, 39);

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
                <TimePicker size="small" label="Small" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Medium" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Filled
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Small" fullWidth defaultValue={defaultValue} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Medium" fullWidth defaultValue={defaultValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Disabled
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Small" fullWidth defaultValue={defaultValue} disabled />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Medium" fullWidth defaultValue={defaultValue} disabled />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
                Read-only
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker size="small" label="Small" fullWidth defaultValue={defaultValue} readOnly />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TimePicker label="Medium" fullWidth defaultValue={defaultValue} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
```

## MUI Reference

This component is based on Material-UI's TimePicker.

For additional props and detailed API documentation, refer to:

- [MUI TimePicker Documentation](https://mui.com/material-ui/api/timepicker/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
