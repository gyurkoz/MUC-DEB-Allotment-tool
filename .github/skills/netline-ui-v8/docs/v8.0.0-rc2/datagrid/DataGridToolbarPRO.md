# DataGrid Toolbar (PRO)

PRO toolbar features

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
import { DataGridToolbarPRO } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const dateUtils = usePickerAdapter();
  const handleOnClick = useActionCallback('onClick');
  const menuItems = [
    { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
    { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
  ];

  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      hideable: false,
    }),
    createNumberColumn({
      field: 'amount',
      headerName: 'Amount',
      width: 100,
    }),
    createSingleSelectColumn({
      field: 'colorName',
      headerName: 'Color',
    }),
    createMultiSelectColumn({
      field: 'season',
      headerName: 'Season',
      width: 220,
      valueOptions: season,
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Date',
      dateUtils,
      width: 150,
    }),
    createTimeColumn({
      field: 'time',
      headerName: 'Time',
      dateUtils,
      width: 150,
    }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'Date Time',
      dateUtils,
      width: 150,
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
    createMenuButtonColumn({
      field: 'actions',
      menuItems,
      width: 32,
    }),
  ];

  const initialState: GridInitialState = {
    columns: { columnVisibilityModel: { color: false, dateTime: false } },
    pinnedColumns: { left: ['name', 'weight'], right: ['actions'] },
  };

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGridPro
        style={{ height }}
        rows={items}
        columns={columns}
        initialState={initialState}
        showToolbar
        title="Name of the table"
        filterDisplayMode="toolbar"
        slotProps={{
          toolbar: {
            actions: <ActionButtons />,
            showColumnsManagementSearch: true,
            allowColumnReordering: true,
            showRowDensity: true,
            fieldSize: 'medium',
            csvOptions: {
              fileName: 'DataGridToolbarExport',
            },
          },
        }}
      />
    </Container>
  );
```

## Variants

- Primary
- Small
- Medium

## Examples

```tsx
const dateUtils = usePickerAdapter();
  const handleOnClick = useActionCallback('onClick');
  const menuItems = [
    { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
    { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
  ];

  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      hideable: false,
    }),
    createNumberColumn({
      field: 'amount',
      headerName: 'Amount',
      width: 100,
    }),
    createSingleSelectColumn({
      field: 'colorName',
      headerName: 'Color',
    }),
    createMultiSelectColumn({
      field: 'season',
      headerName: 'Season',
      width: 220,
      valueOptions: season,
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Date',
      dateUtils,
      width: 150,
    }),
    createTimeColumn({
      field: 'time',
      headerName: 'Time',
      dateUtils,
      width: 150,
    }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'Date Time',
      dateUtils,
      width: 150,
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
    createMenuButtonColumn({
      field: 'actions',
      menuItems,
      width: 32,
    }),
  ];

  const initialState: GridInitialState = {
    columns: { columnVisibilityModel: { color: false, dateTime: false } },
    pinnedColumns: { left: ['name', 'weight'], right: ['actions'] },
  };

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGridPro
        style={{ height }}
        rows={items}
        columns={columns}
        initialState={initialState}
        showToolbar
        title="Name of the table"
        filterDisplayMode="toolbar"
        slotProps={{
          toolbar: {
            actions: <ActionButtons />,
            showColumnsManagementSearch: true,
            allowColumnReordering: true,
            showRowDensity: true,
            fieldSize: 'medium',
            csvOptions: {
              fileName: 'DataGridToolbarExport',
            },
          },
        }}
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
