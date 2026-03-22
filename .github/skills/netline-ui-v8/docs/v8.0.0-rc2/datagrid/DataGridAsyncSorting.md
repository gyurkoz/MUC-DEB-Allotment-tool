# DataGrid Async Sorting

Asynchronous sorting

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
import { DataGridAsyncSorting } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [rows, setRows] = useState(items);
  const [loading, setLoading] = useState(false);
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      width: 200,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
      width: 200,
    }),
    createSingleSelectColumn({
      field: 'color',
      headerName: 'Color',
      width: 200,
    }),
    createStatusChipColumn({
      field: 'family',
      headerName: 'Family',
      mode: 'light',
      color: 'green',
      width: 130,
    }),
  ];

  const handleSortModelChange = useCallback((model: GridSortModel) => {
    setLoading(true);

    // Simulate server-side sorting with a timeout
    setTimeout(() => {
      setRows(
        [...items].sort((a, b) => {
          const { field, sort } = model[0] || {};
          if (!field || !sort) return 0;
          if (sort === 'asc') {
            return a[field] > b[field] ? 1 : -1;
          }
          if (sort === 'desc') {
            return a[field] < b[field] ? 1 : -1;
          }
          return 0;
        }),
      );
      setLoading(false);
    }, 1000);
  }, []);

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGrid
        style={{ height }}
        rows={rows}
        columns={columns}
        sortingMode="server"
        onSortModelChange={handleSortModelChange}
        loading={loading}
        striped
      />
    </Container>
  );
```

## Examples

```tsx
const [rows, setRows] = useState(items);
  const [loading, setLoading] = useState(false);
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
      width: 200,
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
      width: 200,
    }),
    createSingleSelectColumn({
      field: 'color',
      headerName: 'Color',
      width: 200,
    }),
    createStatusChipColumn({
      field: 'family',
      headerName: 'Family',
      mode: 'light',
      color: 'green',
      width: 130,
    }),
  ];

  const handleSortModelChange = useCallback((model: GridSortModel) => {
    setLoading(true);

    // Simulate server-side sorting with a timeout
    setTimeout(() => {
      setRows(
        [...items].sort((a, b) => {
          const { field, sort } = model[0] || {};
          if (!field || !sort) return 0;
          if (sort === 'asc') {
            return a[field] > b[field] ? 1 : -1;
          }
          if (sort === 'desc') {
            return a[field] < b[field] ? 1 : -1;
          }
          return 0;
        }),
      );
      setLoading(false);
    }, 1000);
  }, []);

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGrid
        style={{ height }}
        rows={rows}
        columns={columns}
        sortingMode="server"
        onSortModelChange={handleSortModelChange}
        loading={loading}
        striped
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
