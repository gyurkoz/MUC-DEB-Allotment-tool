# DataGrid Header Filters (PRO)

Header-based filtering (PRO)

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
import { DataGridHeaderFiltersPRO } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const dateUtils = usePickerAdapter();

  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      width: 200,
    }),
    createTextColumn({
      field: 'order',
      headerName: 'Order',
      width: 200,
      enableFilterOperators: true,
    }),
    createNumberColumn({
      field: 'amount',
      headerName: 'Amount',
      width: 100,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
      width: 200,
      enableFilterOperators: true,
    }),
    createDayPatternColumn({
      field: 'dayPattern',
      headerName: 'Day Pattern',
      width: 200,
    }),
    createSingleSelectColumn({
      field: 'colorName',
      headerName: 'Color',
      width: 200,
      valueOptions: colorOptions,
    }),
    createStatusChipColumn({
      field: 'family',
      headerName: 'Family',
      width: 200,
      valueOptions: familyOptions,
      color: ({ row }) => familyColorMap[row.family] || 'blue',
      enableFilterOperators: true,
    }),
    createMultiSelectColumn({
      field: 'season',
      headerName: 'Season (Multi)',
      width: 220,
      valueOptions: seasonOptions,
    }),
    createMultiSelectColumn({
      field: 'nutri',
      headerName: 'Nutritions (Multi with Operators)',
      width: 220,
      valueOptions: nutri,
      enableFilterOperators: true,
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Best Before',
      width: 200,
      dateUtils,
    }),
    createDateColumn({
      field: 'date',
      headerName: 'Date (With Operators)',
      width: 200,
      dateUtils,
      enableFilterOperators: true,
    }),
    createTimeColumn({
      field: 'time',
      headerName: 'Time',
      width: 200,
      dateUtils,
    }),
    createTimeColumn({
      field: 'time2',
      headerName: 'Time (With Operators)',
      width: 200,
      dateUtils,
      enableFilterOperators: true,
    }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'Date Time',
      width: 200,
      dateUtils,
    }),
    createDateTimeColumn({
      field: 'dateTime2',
      headerName: 'Date Time (With Operators)',
      width: 200,
      dateUtils,
      enableFilterOperators: true,
    }),
  ];

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding style={{ width: 3072 }}>
      <DataGridPro style={{ height }} rows={items} columns={columns} filterDisplayMode="header" checkboxSelection />
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
      width: 200,
    }),
    createTextColumn({
      field: 'order',
      headerName: 'Order',
      width: 200,
      enableFilterOperators: true,
    }),
    createNumberColumn({
      field: 'amount',
      headerName: 'Amount',
      width: 100,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
      width: 200,
      enableFilterOperators: true,
    }),
    createDayPatternColumn({
      field: 'dayPattern',
      headerName: 'Day Pattern',
      width: 200,
    }),
    createSingleSelectColumn({
      field: 'colorName',
      headerName: 'Color',
      width: 200,
      valueOptions: colorOptions,
    }),
    createStatusChipColumn({
      field: 'family',
      headerName: 'Family',
      width: 200,
      valueOptions: familyOptions,
      color: ({ row }) => familyColorMap[row.family] || 'blue',
      enableFilterOperators: true,
    }),
    createMultiSelectColumn({
      field: 'season',
      headerName: 'Season (Multi)',
      width: 220,
      valueOptions: seasonOptions,
    }),
    createMultiSelectColumn({
      field: 'nutri',
      headerName: 'Nutritions (Multi with Operators)',
      width: 220,
      valueOptions: nutri,
      enableFilterOperators: true,
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Best Before',
      width: 200,
      dateUtils,
    }),
    createDateColumn({
      field: 'date',
      headerName: 'Date (With Operators)',
      width: 200,
      dateUtils,
      enableFilterOperators: true,
    }),
    createTimeColumn({
      field: 'time',
      headerName: 'Time',
      width: 200,
      dateUtils,
    }),
    createTimeColumn({
      field: 'time2',
      headerName: 'Time (With Operators)',
      width: 200,
      dateUtils,
      enableFilterOperators: true,
    }),
    createDateTimeColumn({
      field: 'dateTime',
      headerName: 'Date Time',
      width: 200,
      dateUtils,
    }),
    createDateTimeColumn({
      field: 'dateTime2',
      headerName: 'Date Time (With Operators)',
      width: 200,
      dateUtils,
      enableFilterOperators: true,
    }),
  ];

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding style={{ width: 3072 }}>
      <DataGridPro style={{ height }} rows={items} columns={columns} filterDisplayMode="header" checkboxSelection />
    </Container>
  );
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
