# Problem Area With Virtual Table

Problem Area With Virtual Table component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ProblemAreaWithVirtualTable } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const tableRef = useRef<BaseTable<TableRowType>>();
  const [tableApi, setTableApi] = useState<VirtualTableApi<TableRowType> | null | undefined>();

  const onRowClick: ProblemAreaRowClickHandler = useCallback(
    (props) => {
      if (!tableApi) {
        return;
      }

      const {
        rowData: { location, field },
      } = props;
      const { cellEditing, sortedAndFilteredItems, rowKey } = tableApi || {};

      const columnIndex = tableApi.columns.findIndex((col) => col.dataKey === field);
      const rowIndex = sortedAndFilteredItems?.findIndex((item) => +item[rowKey] === +location);

      if (columnIndex < 0 || rowIndex < 0) {
        return;
      }

      const columnWidths = tableApi.columns.map((col, idx) => (idx < columnIndex ? col.width : 0));

      const scrollLeft = sum(columnWidths);
      cellEditing.startEditCell(location, field);
      tableRef?.current?.scrollToRow(rowIndex);
      setTimeout(() => tableRef?.current?.scrollToLeft(scrollLeft));
    },
    [tableApi, tableRef],
  );

  const { columns, items } = useTableCellEditingProblemArea<TableRowType>({
    additionalErrors,
    tableApi,
  });

  return (
    <Container fullPage style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 1 auto' }}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              apiRef={setTableApi}
              cellEditing
              ref={tableRef}
              items={originalTableItems}
              columns={originalTableColumns}
              width={width}
              height={height}
            />
          )}
        </AutoResizer>
      </div>
      <div style={{ flex: '0 0 auto' }}>
        <ProblemArea onRowClick={onRowClick} columns={columns} items={items} maxHeight={window.innerHeight * 0.3} />
      </div>
    </Container>
  );
```

## Examples

```tsx
const tableRef = useRef<BaseTable<TableRowType>>();
  const [tableApi, setTableApi] = useState<VirtualTableApi<TableRowType> | null | undefined>();

  const onRowClick: ProblemAreaRowClickHandler = useCallback(
    (props) => {
      if (!tableApi) {
        return;
      }

      const {
        rowData: { location, field },
      } = props;
      const { cellEditing, sortedAndFilteredItems, rowKey } = tableApi || {};

      const columnIndex = tableApi.columns.findIndex((col) => col.dataKey === field);
      const rowIndex = sortedAndFilteredItems?.findIndex((item) => +item[rowKey] === +location);

      if (columnIndex < 0 || rowIndex < 0) {
        return;
      }

      const columnWidths = tableApi.columns.map((col, idx) => (idx < columnIndex ? col.width : 0));

      const scrollLeft = sum(columnWidths);
      cellEditing.startEditCell(location, field);
      tableRef?.current?.scrollToRow(rowIndex);
      setTimeout(() => tableRef?.current?.scrollToLeft(scrollLeft));
    },
    [tableApi, tableRef],
  );

  const { columns, items } = useTableCellEditingProblemArea<TableRowType>({
    additionalErrors,
    tableApi,
  });

  return (
    <Container fullPage style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 1 auto' }}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              apiRef={setTableApi}
              cellEditing
              ref={tableRef}
              items={originalTableItems}
              columns={originalTableColumns}
              width={width}
              height={height}
            />
          )}
        </AutoResizer>
      </div>
      <div style={{ flex: '0 0 auto' }}>
        <ProblemArea onRowClick={onRowClick} columns={columns} items={items} maxHeight={window.innerHeight * 0.3} />
      </div>
    </Container>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
