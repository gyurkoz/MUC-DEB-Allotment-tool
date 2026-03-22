# DataGrid Row Grouping (PREMIUM)

Row grouping (PREMIUM)

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
import { DataGridRowGroupingPREMIUM } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const apiRef = useGridApiRef();
  const columns: GridColDef[] = [
    createTextColumn({ field: 'name', headerName: 'Name', width: 200 }),
    createTextColumn({ field: 'family', headerName: 'Family', width: 150 }),
    createSingleSelectColumn({
      field: 'colorName',
      headerName: 'Color',
      width: 200,
    }),
    createMultiSelectColumn({
      field: 'multi',
      headerName: 'Multi Select',
      width: 220,
    }),
  ];

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ['family'],
      },
    },
  });

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGridPremium style={{ height }} size="medium" rows={items} columns={columns} initialState={initialState} />
    </Container>
  );
```

## Variants

- Medium

## Examples

```tsx
const apiRef = useGridApiRef();
  const columns: GridColDef[] = [
    createTextColumn({ field: 'name', headerName: 'Name', width: 200 }),
    createTextColumn({ field: 'family', headerName: 'Family', width: 150 }),
    createSingleSelectColumn({
      field: 'colorName',
      headerName: 'Color',
      width: 200,
    }),
    createMultiSelectColumn({
      field: 'multi',
      headerName: 'Multi Select',
      width: 220,
    }),
  ];

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ['family'],
      },
    },
  });

  const { ref, height } = useResizeObserver();

  return (
    <Container ref={ref} fullPage padding>
      <DataGridPremium style={{ height }} size="medium" rows={items} columns={columns} initialState={initialState} />
    </Container>
  );
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
