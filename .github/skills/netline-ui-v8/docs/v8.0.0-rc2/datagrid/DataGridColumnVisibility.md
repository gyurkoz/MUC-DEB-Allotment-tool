# DataGrid Column Visibility

Show/hide columns

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
import { DataGridColumnVisibility } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const dateUtils = usePickerAdapter();

  /**
   * To disable hiding a column, use the @hideable prop in the column definition.
   */
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      hideable: false,
      disableColumnMenu: true,
    }),
    createSingleSelectColumn({
      field: 'color',
      headerName: 'Color (Single Select)',
    }),
    createMultiSelectColumn({
      field: 'multi',
      headerName: 'Multi Select',
      width: 150,
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Date',
      dateUtils,
    }),
    createTimeColumn({
      field: 'time',
      headerName: 'Time',
      dateUtils,
    }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'Date Time',
      dateUtils,
      width: 130,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
    }),
    createDayPatternColumn({
      field: 'dayPattern',
      headerName: 'Day Pattern',
    }),
    createCheckboxColumn({
      field: 'status',
      headerName: 'Status',
    }),
    createStatusChipColumn({
      field: 'family',
      headerName: 'Family',
      mode: 'light',
      color: 'green',
      width: 130,
    }),
  ];

  /**
   * To hide a column by default, use the @initialState prop with the @columnVisibilityModel property.
   */
  const initialState: GridInitialState = useMemo(
    () => ({
      columns: {
        columnVisibilityModel: {
          color: false,
          dateTime: false,
        },
      },
    }),
    [],
  );

  const { ref, height } = useResizeObserver();

  /**
   * To enable the search functionality within the columns management toolbar, use @enableColumnsManagementSearch . Default value is false
   * This is particularly useful for tables with a large number of columns.
   */
  return (
    <Container ref={ref} fullPage padding>
      <DataGrid
        style={{ height }}
        rows={items}
        columns={columns}
        initialState={initialState}
        showToolbar
        slotProps={{
          toolbar: {
            csvOptions: { disableToolbarButton: true },
          },
        }}
        // enableColumnsManagementSearch
      />
    </Container>
  );
```

## Variants

- Large

## Examples

```tsx
const dateUtils = usePickerAdapter();

  /**
   * To disable hiding a column, use the @hideable prop in the column definition.
   */
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      hideable: false,
      disableColumnMenu: true,
    }),
    createSingleSelectColumn({
      field: 'color',
      headerName: 'Color (Single Select)',
    }),
    createMultiSelectColumn({
      field: 'multi',
      headerName: 'Multi Select',
      width: 150,
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Date',
      dateUtils,
    }),
    createTimeColumn({
      field: 'time',
      headerName: 'Time',
      dateUtils,
    }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'Date Time',
      dateUtils,
      width: 130,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
    }),
    createDayPatternColumn({
      field: 'dayPattern',
      headerName: 'Day Pattern',
    }),
    createCheckboxColumn({
      field: 'status',
      headerName: 'Status',
    }),
    createStatusChipColumn({
      field: 'family',
      headerName: 'Family',
      mode: 'light',
      color: 'green',
      width: 130,
    }),
  ];

  /**
   * To hide a column by default, use the @initialState prop with the @columnVisibilityModel property.
   */
  const initialState: GridInitialState = useMemo(
    () => ({
      columns: {
        columnVisibilityModel: {
          color: false,
          dateTime: false,
        },
      },
    }),
    [],
  );

  const { ref, height } = useResizeObserver();

  /**
   * To enable the search functionality within the columns management toolbar, use @enableColumnsManagementSearch . Default value is false
   * This is particularly useful for tables with a large number of columns.
   */
  return (
    <Container ref={ref} fullPage padding>
      <DataGrid
        style={{ height }}
        rows={items}
        columns={columns}
        initialState={initialState}
        showToolbar
        slotProps={{
          toolbar: {
            csvOptions: { disableToolbarButton: true },
          },
        }}
        // enableColumnsManagementSearch
      />
    </Container>
  );
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
