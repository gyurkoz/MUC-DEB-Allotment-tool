# Pagination

Pagination component for navigating through pages

## Overview

- **Category**: navigation
- **Base Library**: mui
- **MUI Component**: Pagination

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Pagination } from '@lsy-netline/netline-ui';
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

This component is based on Material-UI's Pagination.

For additional props and detailed API documentation, refer to:

- [MUI Pagination Documentation](https://mui.com/material-ui/api/pagination/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
