# Column Grouping

Column Grouping component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ColumnGrouping } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const dateUtils = usePickerAdapter();
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'id',
      headerName: '#',
    }),
    createTextColumn({
      field: 'name',
      headerName: 'Name',
    }),
    createTextColumn({
      field: 'family',
      headerName: 'Family',
    }),
    createTextColumn({
      field: 'genus',
      headerName: 'Genus',
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Best Before',
      dateUtils,
    }),
  ];

  /**
   * You can define a columnGroupingModel to configure the groups in the data grid.
   * It can be defined by these required properties:
   * @groupId - id of the group you want to define
   * @children - an array for the children in the group. [ { @field : string }, ...]
   * If you don't define the columns next to each other in the columns variable, then the grouping will not put
   * them next to each other. It will still have the same group name.
   * @headerName - name to display as the group name. If nothing is provided the @groupId property will be used
   * @description - tooltip text
   * @headerClassName - CSS class for styling
   * @renderHeaderGroup - custom React component for the header
   * @freeReordering - allow reordering outside the group
   */
  const columnGroupingModel: GridColumnGroup[] = [
    {
      groupId: 'basic_info',
      headerName: 'Basic Info',
      children: [{ field: 'name' }, { field: 'family' }, { field: 'genus' }],
      freeReordering: true,
    },
  ];

  const { ref, height } = useResizeObserver();

  /**
   * @columnHeaderHeight - for all the column headers
   * @columnGroupHeaderHeight - for only the group headers
   *
   * By dragging the columns you can reorder them in the group. If you have @freeReordering enabled,
   * then you can also reorder them outside the group too.
   */
  return (
    <Container ref={ref} fullPage padding>
      <DataGrid style={{ height }} rows={items} columns={columns} columnGroupingModel={columnGroupingModel} />
    </Container>
  );
```

## Examples

```tsx
const dateUtils = usePickerAdapter();
  const columns: GridColDef[] = [
    createTextColumn({
      field: 'id',
      headerName: '#',
    }),
    createTextColumn({
      field: 'name',
      headerName: 'Name',
    }),
    createTextColumn({
      field: 'family',
      headerName: 'Family',
    }),
    createTextColumn({
      field: 'genus',
      headerName: 'Genus',
    }),
    createNumberColumn({
      field: 'weight',
      headerName: 'Weight',
      valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
    }),
    createDateColumn({
      field: 'bestBefore',
      headerName: 'Best Before',
      dateUtils,
    }),
  ];

  /**
   * You can define a columnGroupingModel to configure the groups in the data grid.
   * It can be defined by these required properties:
   * @groupId - id of the group you want to define
   * @children - an array for the children in the group. [ { @field : string }, ...]
   * If you don't define the columns next to each other in the columns variable, then the grouping will not put
   * them next to each other. It will still have the same group name.
   * @headerName - name to display as the group name. If nothing is provided the @groupId property will be used
   * @description - tooltip text
   * @headerClassName - CSS class for styling
   * @renderHeaderGroup - custom React component for the header
   * @freeReordering - allow reordering outside the group
   */
  const columnGroupingModel: GridColumnGroup[] = [
    {
      groupId: 'basic_info',
      headerName: 'Basic Info',
      children: [{ field: 'name' }, { field: 'family' }, { field: 'genus' }],
      freeReordering: true,
    },
  ];

  const { ref, height } = useResizeObserver();

  /**
   * @columnHeaderHeight - for all the column headers
   * @columnGroupHeaderHeight - for only the group headers
   *
   * By dragging the columns you can reorder them in the group. If you have @freeReordering enabled,
   * then you can also reorder them outside the group too.
   */
  return (
    <Container ref={ref} fullPage padding>
      <DataGrid style={{ height }} rows={items} columns={columns} columnGroupingModel={columnGroupingModel} />
    </Container>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
