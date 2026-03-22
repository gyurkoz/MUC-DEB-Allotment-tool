# DataGrid Resize Columns

Column resizing

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
import { DataGridResizeColumns } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
/**
   * @minWidth - minimum width for the column
   * @maxWidth - maximum width for the column
   * @resizable - false, to disable the resizing for the given column
   */
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '#',
      minWidth: 125,
      maxWidth: 200,
    },
    {
      field: 'name',
      headerName: 'Name',
      resizable: false,
    },
    {
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
      minWidth: 150,
      maxWidth: 400,
    },
    {
      field: 'bestBefore',
      headerName: 'Best Before',
      minWidth: 200,
      maxWidth: 350,
    },
  ];

  /**
   * Callback which is called every time the size changes during the resizing (dragging of the column)
   */
  const handleColumnResize = () => {
    // eslint-disable-next-line no-console
    console.log('Resize happened, it is called at each pixel change during the drag.');
  };

  /**
   * Callback which is called when the resizing is finalized (exit the drag)
   */
  const handleWidthChange = () => {
    // eslint-disable-next-line no-console
    console.log('Resize is finalized, exited the drag.');
  };

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGrid
        style={{ height }}
        rows={items}
        columns={columns}
        onColumnResize={handleColumnResize}
        onColumnWidthChange={handleWidthChange}
      />
    </Container>
  );
```

## Examples

```tsx
/**
   * @minWidth - minimum width for the column
   * @maxWidth - maximum width for the column
   * @resizable - false, to disable the resizing for the given column
   */
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '#',
      minWidth: 125,
      maxWidth: 200,
    },
    {
      field: 'name',
      headerName: 'Name',
      resizable: false,
    },
    {
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
      minWidth: 150,
      maxWidth: 400,
    },
    {
      field: 'bestBefore',
      headerName: 'Best Before',
      minWidth: 200,
      maxWidth: 350,
    },
  ];

  /**
   * Callback which is called every time the size changes during the resizing (dragging of the column)
   */
  const handleColumnResize = () => {
    // eslint-disable-next-line no-console
    console.log('Resize happened, it is called at each pixel change during the drag.');
  };

  /**
   * Callback which is called when the resizing is finalized (exit the drag)
   */
  const handleWidthChange = () => {
    // eslint-disable-next-line no-console
    console.log('Resize is finalized, exited the drag.');
  };

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGrid
        style={{ height }}
        rows={items}
        columns={columns}
        onColumnResize={handleColumnResize}
        onColumnWidthChange={handleWidthChange}
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
