# Different Adapters

Different Adapters component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DifferentAdapters } from '@lsy-netline/netline-ui';
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

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
