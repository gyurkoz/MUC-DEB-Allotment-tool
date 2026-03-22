# DataGrid Different Date Adapters

Using different date adapters

## Overview

- **Category**: datagrid
- **Base Library**: mui-x
- **MUI Component**: DataGrid

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DataGridDifferentDateAdapters } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
render: () => {
    // useMemo is required because we are defining a component inside a component (Storybook)
    // so pls. don't use this way in your code, but create a separate component
    const dateFnsValue = new Date('2019-01-09T19:21');
    const dayjsValue = dayjs('2019-01-09T19:21');
    const momentValue = moment('2019-01-09T19:22');
    const luxonValue = DateTime.fromISO('2019-01-09T19:23');

    const adapters: { name: string; component: new (...args: any) => MuiPickersAdapter; rows: GridRowsProp }[] = [
      {
        name: 'DateFns',
        component: AdapterDateFns,
        rows: [
          {
            id: 1,
            date: dateFnsValue,
            time: dateFnsValue,
            dateTime: dateFnsValue,
          },
        ],
      },
      {
        name: 'Dayjs',
        component: AdapterDayjs,
        rows: [
          {
            id: 1,
            date: dayjsValue,
            time: dayjsValue,
            dateTime: dayjsValue,
          },
        ],
      },
      {
        name: 'Moment',
        component: AdapterMoment,
        rows: [
          {
            id: 1,
            date: momentValue,
            time: momentValue,
            dateTime: momentValue,
          },
        ],
      },
      {
        name: 'Luxon',
        component: AdapterLuxon,
        rows: [
          {
            id: 1,
            date: luxonValue,
            time: luxonValue,
            dateTime: luxonValue,
          },
        ],
      },
    ];

    const dateFormatMap = {
      DateFns: 'ddMMMyyyy',
      Dayjs: 'DDMMMYYYY',
      Moment: 'DDMMMyyyy',
      Luxon: 'ddMMMyyyy',
    };

    const getDateFormat = (adapter: keyof typeof dateFormatMap) => dateFormatMap[adapter];

    const DataGridWithDate: React.FC<{ rows: GridRowsProp; adapter: string }> = ({ rows, adapter }) => {
      const dateUtils = usePickerAdapter();

      const columns: GridColDef[] = [
        createDateColumn({
          field: 'date',
          headerName: 'Date',
          format: { format: getDateFormat(adapter as keyof typeof dateFormatMap), textCase: 'upper' },
          dateUtils,
          width: 120,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          format: { format: `${getDateFormat(adapter as keyof typeof dateFormatMap)} HHmm`, textCase: 'upper' },
          dateUtils,
          width: 150,
        }),
      ];

      return <DataGrid rows={rows} columns={columns} />;
    };

    return (
      <Grid container rowSpacing={2}>
        {adapters.map(({ name, component, rows }) => (
          <Grid size={6} key={name}>
            <Grid container>
              <Grid size={11}>
                <LocalizationProvider dateAdapter={component}>
                  <Typography variant="subtitle2">{name} Adapter</Typography>
                  <DataGridWithDate rows={rows} adapter={name} />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
```

## Examples

```tsx
render: () => {
    // useMemo is required because we are defining a component inside a component (Storybook)
    // so pls. don't use this way in your code, but create a separate component
    const dateFnsValue = new Date('2019-01-09T19:21');
    const dayjsValue = dayjs('2019-01-09T19:21');
    const momentValue = moment('2019-01-09T19:22');
    const luxonValue = DateTime.fromISO('2019-01-09T19:23');

    const adapters: { name: string; component: new (...args: any) => MuiPickersAdapter; rows: GridRowsProp }[] = [
      {
        name: 'DateFns',
        component: AdapterDateFns,
        rows: [
          {
            id: 1,
            date: dateFnsValue,
            time: dateFnsValue,
            dateTime: dateFnsValue,
          },
        ],
      },
      {
        name: 'Dayjs',
        component: AdapterDayjs,
        rows: [
          {
            id: 1,
            date: dayjsValue,
            time: dayjsValue,
            dateTime: dayjsValue,
          },
        ],
      },
      {
        name: 'Moment',
        component: AdapterMoment,
        rows: [
          {
            id: 1,
            date: momentValue,
            time: momentValue,
            dateTime: momentValue,
          },
        ],
      },
      {
        name: 'Luxon',
        component: AdapterLuxon,
        rows: [
          {
            id: 1,
            date: luxonValue,
            time: luxonValue,
            dateTime: luxonValue,
          },
        ],
      },
    ];

    const dateFormatMap = {
      DateFns: 'ddMMMyyyy',
      Dayjs: 'DDMMMYYYY',
      Moment: 'DDMMMyyyy',
      Luxon: 'ddMMMyyyy',
    };

    const getDateFormat = (adapter: keyof typeof dateFormatMap) => dateFormatMap[adapter];

    const DataGridWithDate: React.FC<{ rows: GridRowsProp; adapter: string }> = ({ rows, adapter }) => {
      const dateUtils = usePickerAdapter();

      const columns: GridColDef[] = [
        createDateColumn({
          field: 'date',
          headerName: 'Date',
          format: { format: getDateFormat(adapter as keyof typeof dateFormatMap), textCase: 'upper' },
          dateUtils,
          width: 120,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          format: { format: `${getDateFormat(adapter as keyof typeof dateFormatMap)} HHmm`, textCase: 'upper' },
          dateUtils,
          width: 150,
        }),
      ];

      return <DataGrid rows={rows} columns={columns} />;
    };

    return (
      <Grid container rowSpacing={2}>
        {adapters.map(({ name, component, rows }) => (
          <Grid size={6} key={name}>
            <Grid container>
              <Grid size={11}>
                <LocalizationProvider dateAdapter={component}>
                  <Typography variant="subtitle2">{name} Adapter</Typography>
                  <DataGridWithDate rows={rows} adapter={name} />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
```

```tsx
// useMemo is required because we are defining a component inside a component (Storybook)
    // so pls. don't use this way in your code, but create a separate component
    const dateFnsValue = new Date('2019-01-09T19:21');
    const dayjsValue = dayjs('2019-01-09T19:21');
    const momentValue = moment('2019-01-09T19:22');
    const luxonValue = DateTime.fromISO('2019-01-09T19:23');

    const adapters: { name: string; component: new (...args: any) => MuiPickersAdapter; rows: GridRowsProp }[] = [
      {
        name: 'DateFns',
        component: AdapterDateFns,
        rows: [
          {
            id: 1,
            date: dateFnsValue,
            time: dateFnsValue,
            dateTime: dateFnsValue,
          },
        ],
      },
      {
        name: 'Dayjs',
        component: AdapterDayjs,
        rows: [
          {
            id: 1,
            date: dayjsValue,
            time: dayjsValue,
            dateTime: dayjsValue,
          },
        ],
      },
      {
        name: 'Moment',
        component: AdapterMoment,
        rows: [
          {
            id: 1,
            date: momentValue,
            time: momentValue,
            dateTime: momentValue,
          },
        ],
      },
      {
        name: 'Luxon',
        component: AdapterLuxon,
        rows: [
          {
            id: 1,
            date: luxonValue,
            time: luxonValue,
            dateTime: luxonValue,
          },
        ],
      },
    ];

    const dateFormatMap = {
      DateFns: 'ddMMMyyyy',
      Dayjs: 'DDMMMYYYY',
      Moment: 'DDMMMyyyy',
      Luxon: 'ddMMMyyyy',
    };

    const getDateFormat = (adapter: keyof typeof dateFormatMap) => dateFormatMap[adapter];

    const DataGridWithDate: React.FC<{ rows: GridRowsProp; adapter: string }> = ({ rows, adapter }) => {
      const dateUtils = usePickerAdapter();

      const columns: GridColDef[] = [
        createDateColumn({
          field: 'date',
          headerName: 'Date',
          format: { format: getDateFormat(adapter as keyof typeof dateFormatMap), textCase: 'upper' },
          dateUtils,
          width: 120,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          format: { format: `${getDateFormat(adapter as keyof typeof dateFormatMap)} HHmm`, textCase: 'upper' },
          dateUtils,
          width: 150,
        }),
      ];

      return <DataGrid rows={rows} columns={columns} />;
    };

    return (
      <Grid container rowSpacing={2}>
        {adapters.map(({ name, component, rows }) => (
          <Grid size={6} key={name}>
            <Grid container>
              <Grid size={11}>
                <LocalizationProvider dateAdapter={component}>
                  <Typography variant="subtitle2">{name} Adapter</Typography>
                  <DataGridWithDate rows={rows} adapter={name} />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
```

```tsx
// useMemo is required because we are defining a component inside a component (Storybook)
    // so pls. don't use this way in your code, but create a separate component
    const dateFnsValue = new Date('2019-01-09T19:21');
    const dayjsValue = dayjs('2019-01-09T19:21');
    const momentValue = moment('2019-01-09T19:22');
    const luxonValue = DateTime.fromISO('2019-01-09T19:23');

    const adapters: { name: string; component: new (...args: any) => MuiPickersAdapter; rows: GridRowsProp }[] = [
      {
        name: 'DateFns',
        component: AdapterDateFns,
        rows: [
          {
            id: 1,
            date: dateFnsValue,
            time: dateFnsValue,
            dateTime: dateFnsValue,
          },
        ],
      },
      {
        name: 'Dayjs',
        component: AdapterDayjs,
        rows: [
          {
            id: 1,
            date: dayjsValue,
            time: dayjsValue,
            dateTime: dayjsValue,
          },
        ],
      },
      {
        name: 'Moment',
        component: AdapterMoment,
        rows: [
          {
            id: 1,
            date: momentValue,
            time: momentValue,
            dateTime: momentValue,
          },
        ],
      },
      {
        name: 'Luxon',
        component: AdapterLuxon,
        rows: [
          {
            id: 1,
            date: luxonValue,
            time: luxonValue,
            dateTime: luxonValue,
          },
        ],
      },
    ];

    const dateFormatMap = {
      DateFns: 'ddMMMyyyy',
      Dayjs: 'DDMMMYYYY',
      Moment: 'DDMMMyyyy',
      Luxon: 'ddMMMyyyy',
    };

    const getDateFormat = (adapter: keyof typeof dateFormatMap) => dateFormatMap[adapter];

    const DataGridWithDate: React.FC<{ rows: GridRowsProp; adapter: string }> = ({ rows, adapter }) => {
      const dateUtils = usePickerAdapter();

      const columns: GridColDef[] = [
        createDateColumn({
          field: 'date',
          headerName: 'Date',
          format: { format: getDateFormat(adapter as keyof typeof dateFormatMap), textCase: 'upper' },
          dateUtils,
          width: 120,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          format: { format: `${getDateFormat(adapter as keyof typeof dateFormatMap)} HHmm`, textCase: 'upper' },
          dateUtils,
          width: 150,
        }),
      ];

      return <DataGrid rows={rows} columns={columns} />;
    };

    return (
      <Grid container rowSpacing={2}>
        {adapters.map(({ name, component, rows }) => (
          <Grid size={6} key={name}>
            <Grid container>
              <Grid size={11}>
                <LocalizationProvider dateAdapter={component}>
                  <Typography variant="subtitle2">{name} Adapter</Typography>
                  <DataGridWithDate rows={rows} adapter={name} />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
