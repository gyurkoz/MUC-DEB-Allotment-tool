# DataGrid Single Row Selection with Keyboard

Single row selection with keyboard

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
import { DataGridSingleRowSelection } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
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

  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>();

  const handleRowSelection = useActionCallback('onRowSelectionModelChange', (newSelection: GridRowSelectionModel) => {
    setSelectedRows(newSelection);
  });

  const { ref, height } = useResizeObserver();

  return (
    <Container fullPage padding>
      <Grid height={{ height: '100%' }} container direction="column">
        <Grid size="auto">
          <Typography variant="subtitle2" display="inline">
            You can select a row with CTRL (CMD on MacOS) + click on the row. For more information visit{' '}
          </Typography>
          <Link
            href="https://mui.com/x/react-data-grid/accessibility/#selection"
            variant="subtitle2"
            display="inline"
            target="_blank"
            rel="noopener"
          >
            the documentation.
          </Link>
        </Grid>
        <Grid ref={ref} size="grow" minHeight={0}>
          <DataGrid
            style={{ height }}
            rows={items}
            columns={columns}
            striped
            enableRowSelectionOnClick
            rowSelectionModel={selectedRows}
            onRowSelectionModelChange={handleRowSelection}
          />
        </Grid>
      </Grid>
    </Container>
  );
```

## Examples

```tsx
const columns: GridColDef[] = [
    createTextColumn({
      field: 'name',
      headerName: 'Name',
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

  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>();

  const handleRowSelection = useActionCallback('onRowSelectionModelChange', (newSelection: GridRowSelectionModel) => {
    setSelectedRows(newSelection);
  });

  const { ref, height } = useResizeObserver();

  return (
    <Container fullPage padding>
      <Grid height={{ height: '100%' }} container direction="column">
        <Grid size="auto">
          <Typography variant="subtitle2" display="inline">
            You can select a row with CTRL (CMD on MacOS) + click on the row. For more information visit{' '}
          </Typography>
          <Link
            href="https://mui.com/x/react-data-grid/accessibility/#selection"
            variant="subtitle2"
            display="inline"
            target="_blank"
            rel="noopener"
          >
            the documentation.
          </Link>
        </Grid>
        <Grid ref={ref} size="grow" minHeight={0}>
          <DataGrid
            style={{ height }}
            rows={items}
            columns={columns}
            striped
            enableRowSelectionOnClick
            rowSelectionModel={selectedRows}
            onRowSelectionModelChange={handleRowSelection}
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
