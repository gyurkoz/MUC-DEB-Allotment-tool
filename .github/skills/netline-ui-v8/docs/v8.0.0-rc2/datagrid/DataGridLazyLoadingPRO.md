# DataGrid Lazy Loading (PRO)

Lazy loading (PRO)

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
import { DataGridLazyLoadingPRO } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const columns: GridColDef[] = [
  createTextColumn({ field: "name", headerName: "Name", width: 200 }),
  createNumberColumn({
    field: "weight",
    headerName: "Weight",
    valueFormatter: (value: any) => (typeof value === "number" ? value.toFixed(1) : value),
    width: 200,
  }),
  createSingleSelectColumn({ field: "color", headerName: "Color", width: 200 }),
  createStatusChipColumn({
    field: "family",
    headerName: "Family",
    mode: "light",
    color: "green",
    width: 130,
  }),
];

const { fetchRows } = useMockServer({ items: fruits, minDelay: 300, maxDelay: 800 });

const dataSource: GridDataSource = useMemo(
  () => ({
    getRows: async (params: GridGetRowsParams) => {
      const getRowsResponse = await fetchRows(params);
      return {
        rows: getRowsResponse.rows,
        rowCount: getRowsResponse.rowCount,
      };
    },
  }),
  [fetchRows],
);

const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ page: 0, pageSize: 25 });

return (
  <BaseDataGridPro
    columns={columns}
    dataSource={dataSource}
    paginationModel={paginationModel}
    onPaginationModelChange={setPaginationModel}
    rowCountMode="server"
    pageSizeOptions={[10, 25, 50, 100]}
  />
);
```

## Examples

```tsx
const columns: GridColDef[] = [
  createTextColumn({ field: "name", headerName: "Name", width: 200 }),
  createNumberColumn({
    field: "weight",
    headerName: "Weight",
    valueFormatter: (value: any) => (typeof value === "number" ? value.toFixed(1) : value),
    width: 200,
  }),
  createSingleSelectColumn({ field: "color", headerName: "Color", width: 200 }),
  createStatusChipColumn({
    field: "family",
    headerName: "Family",
    mode: "light",
    color: "green",
    width: 130,
  }),
];

const { fetchRows } = useMockServer({ items: fruits, minDelay: 300, maxDelay: 800 });

const dataSource: GridDataSource = useMemo(
  () => ({
    getRows: async (params: GridGetRowsParams) => {
      const getRowsResponse = await fetchRows(params);
      return {
        rows: getRowsResponse.rows,
        rowCount: getRowsResponse.rowCount,
      };
    },
  }),
  [fetchRows],
);

const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ page: 0, pageSize: 25 });

return (
  <BaseDataGridPro
    columns={columns}
    dataSource={dataSource}
    paginationModel={paginationModel}
    onPaginationModelChange={setPaginationModel}
    rowCountMode="server"
    pageSizeOptions={[10, 25, 50, 100]}
  />
);
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
