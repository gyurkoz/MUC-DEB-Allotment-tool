# DataGrid Pagination

Pagination controls

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
import { DataGridPagination } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const dateUtils = usePickerAdapter();
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
  ];

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGrid style={{ height }} rows={items} columns={columns} pagination />
    </Container>
  );
```

## Examples

```tsx
const dateUtils = usePickerAdapter();
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
  ];

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGrid style={{ height }} rows={items} columns={columns} pagination />
    </Container>
  );
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
