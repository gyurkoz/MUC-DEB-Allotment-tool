# DataGrid Autosize Columns

Automatic column sizing

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
import { DataGridAutosizeColumns } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
// It's really important to import useGridApiRef from the proper package, there are 3 variants (basic, pro, premium)
  const apiRef = useGridApiRef();
  const dateUtils = usePickerAdapter();
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'id',
      headerName: '#',
    }),
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      maxWidth: 80,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
    }),
    createDateColumn({ field: 'bestBefore', headerName: 'Best Before', dateUtils }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'A Very long header name just for testing, this will also be included in the autosizing',
      dateUtils,
    }),
    createTimeColumn({ field: 'time', headerName: 'Time', dateUtils }),
  ];

  /**
   * You can use the @autosizeOptions prop to configure autosizing:
   *  @columns - list of columns names which you want the autosizing to be applied to, default = all columns
   *  @includeOutliers - should autosizing be applied to very big inputs (one name is really long)
   *  @outliersFactor - ratio for how outliers are determined, default = 1.5
   *  @includeHeaders - should headers be included in the width calculation
   */
  const autosizeOptions = {
    columns: ['name', 'weight', 'bestBefore', 'dateTime'],
    includeOutliers: true,
    outliersFactor: 2,
    includeHeaders: true,
  };

  /**
   * @disableAutosize - true (to disable it, by default autosizing is enabled)
   *
   * You can trigger the autosizing by using on these three methods:
   *  1. @autosizeOnMount - boolean (setting it to true will trigger it when mounting the component)
   *  2. Double-clicking a column header separator on the grid
   *  3. Calling the @apiRef.current.autosizeColumns(options) API method
   */
  const triggerAutosize = () => {
    apiRef.current?.autosizeColumns(autosizeOptions);
  };

  const { ref, height } = useResizeObserver();

  return (
    <Container fullPage padding>
      <Grid height={{ height: '100%' }} container direction="column">
        <Grid size="auto">
          <Button onClick={triggerAutosize}>Autosize columns</Button>
        </Grid>
        <Grid ref={ref} size="grow" minHeight={0}>
          <DataGrid
            style={{ height }}
            apiRef={apiRef}
            rows={items}
            columns={columns}
            autosizeOptions={autosizeOptions}
            autosizeOnMount={false}
          />
        </Grid>
      </Grid>
    </Container>
  );
```

## Examples

```tsx
// It's really important to import useGridApiRef from the proper package, there are 3 variants (basic, pro, premium)
  const apiRef = useGridApiRef();
  const dateUtils = usePickerAdapter();
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'id',
      headerName: '#',
    }),
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      maxWidth: 80,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
    }),
    createDateColumn({ field: 'bestBefore', headerName: 'Best Before', dateUtils }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'A Very long header name just for testing, this will also be included in the autosizing',
      dateUtils,
    }),
    createTimeColumn({ field: 'time', headerName: 'Time', dateUtils }),
  ];

  /**
   * You can use the @autosizeOptions prop to configure autosizing:
   *  @columns - list of columns names which you want the autosizing to be applied to, default = all columns
   *  @includeOutliers - should autosizing be applied to very big inputs (one name is really long)
   *  @outliersFactor - ratio for how outliers are determined, default = 1.5
   *  @includeHeaders - should headers be included in the width calculation
   */
  const autosizeOptions = {
    columns: ['name', 'weight', 'bestBefore', 'dateTime'],
    includeOutliers: true,
    outliersFactor: 2,
    includeHeaders: true,
  };

  /**
   * @disableAutosize - true (to disable it, by default autosizing is enabled)
   *
   * You can trigger the autosizing by using on these three methods:
   *  1. @autosizeOnMount - boolean (setting it to true will trigger it when mounting the component)
   *  2. Double-clicking a column header separator on the grid
   *  3. Calling the @apiRef.current.autosizeColumns(options) API method
   */
  const triggerAutosize = () => {
    apiRef.current?.autosizeColumns(autosizeOptions);
  };

  const { ref, height } = useResizeObserver();

  return (
    <Container fullPage padding>
      <Grid height={{ height: '100%' }} container direction="column">
        <Grid size="auto">
          <Button onClick={triggerAutosize}>Autosize columns</Button>
        </Grid>
        <Grid ref={ref} size="grow" minHeight={0}>
          <DataGrid
            style={{ height }}
            apiRef={apiRef}
            rows={items}
            columns={columns}
            autosizeOptions={autosizeOptions}
            autosizeOnMount={false}
          />
        </Grid>
      </Grid>
    </Container>
  );
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
