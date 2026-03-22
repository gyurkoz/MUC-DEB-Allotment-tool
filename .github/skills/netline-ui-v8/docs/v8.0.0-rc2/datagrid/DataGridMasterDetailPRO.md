# DataGrid Master Detail (PRO)

Master-detail rows (PRO)

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
import { DataGridMasterDetailPRO } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
render: () => {
    const DetailPanelContent = ({ row }: GridRowParams) => (
      <Box style={{ padding: '16px' }} gap={2} display="flex" flexDirection="column">
        <Typography variant="subtitle1">{row.name}</Typography>
        <Typography variant="body2">
          {row.name} belongs to the {row.family} family and is typically {row.colorName} in color.
        </Typography>
      </Box>
    );

    const MasterDetailDataGrid = () => {
      const columns: GridColDef[] = [
        createTextColumn({ field: 'name', headerName: 'Name', width: 200 }),
        createTextColumn({ field: 'family', headerName: 'Family', width: 150 }),
        createSingleSelectColumn({
          field: 'colorName',
          headerName: 'Color',
          width: 200,
        }),
        createTextColumn({ field: 'order', headerName: 'Order', width: 150 }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGridPro
            style={{ height }}
            rows={items}
            columns={columns}
            getDetailPanelContent={DetailPanelContent}
            getDetailPanelHeight={() => 'auto'}
          />
        </Container>
      );
    };

    return <MasterDetailDataGrid />;
```

## Examples

```tsx
render: () => {
    const DetailPanelContent = ({ row }: GridRowParams) => (
      <Box style={{ padding: '16px' }} gap={2} display="flex" flexDirection="column">
        <Typography variant="subtitle1">{row.name}</Typography>
        <Typography variant="body2">
          {row.name} belongs to the {row.family} family and is typically {row.colorName} in color.
        </Typography>
      </Box>
    );

    const MasterDetailDataGrid = () => {
      const columns: GridColDef[] = [
        createTextColumn({ field: 'name', headerName: 'Name', width: 200 }),
        createTextColumn({ field: 'family', headerName: 'Family', width: 150 }),
        createSingleSelectColumn({
          field: 'colorName',
          headerName: 'Color',
          width: 200,
        }),
        createTextColumn({ field: 'order', headerName: 'Order', width: 150 }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGridPro
            style={{ height }}
            rows={items}
            columns={columns}
            getDetailPanelContent={DetailPanelContent}
            getDetailPanelHeight={() => 'auto'}
          />
        </Container>
      );
    };

    return <MasterDetailDataGrid />;
```

```tsx
const DetailPanelContent = ({ row }: GridRowParams) => (
      <Box style={{ padding: '16px' }} gap={2} display="flex" flexDirection="column">
        <Typography variant="subtitle1">{row.name}</Typography>
        <Typography variant="body2">
          {row.name} belongs to the {row.family} family and is typically {row.colorName} in color.
        </Typography>
      </Box>
    );

    const MasterDetailDataGrid = () => {
      const columns: GridColDef[] = [
        createTextColumn({ field: 'name', headerName: 'Name', width: 200 }),
        createTextColumn({ field: 'family', headerName: 'Family', width: 150 }),
        createSingleSelectColumn({
          field: 'colorName',
          headerName: 'Color',
          width: 200,
        }),
        createTextColumn({ field: 'order', headerName: 'Order', width: 150 }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGridPro
            style={{ height }}
            rows={items}
            columns={columns}
            getDetailPanelContent={DetailPanelContent}
            getDetailPanelHeight={() => 'auto'}
          />
        </Container>
      );
    };

    return <MasterDetailDataGrid />;
```

```tsx
const DetailPanelContent = ({ row }: GridRowParams) => (
      <Box style={{ padding: '16px' }} gap={2} display="flex" flexDirection="column">
        <Typography variant="subtitle1">{row.name}</Typography>
        <Typography variant="body2">
          {row.name} belongs to the {row.family} family and is typically {row.colorName} in color.
        </Typography>
      </Box>
    );

    const MasterDetailDataGrid = () => {
      const columns: GridColDef[] = [
        createTextColumn({ field: 'name', headerName: 'Name', width: 200 }),
        createTextColumn({ field: 'family', headerName: 'Family', width: 150 }),
        createSingleSelectColumn({
          field: 'colorName',
          headerName: 'Color',
          width: 200,
        }),
        createTextColumn({ field: 'order', headerName: 'Order', width: 150 }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGridPro
            style={{ height }}
            rows={items}
            columns={columns}
            getDetailPanelContent={DetailPanelContent}
            getDetailPanelHeight={() => 'auto'}
          />
        </Container>
      );
    };

    return <MasterDetailDataGrid />;
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
