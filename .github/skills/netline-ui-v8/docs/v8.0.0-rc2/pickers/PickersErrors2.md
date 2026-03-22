# Errors (Pickers)

Errors component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { PickersErrors2 } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
