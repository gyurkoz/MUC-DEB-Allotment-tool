# Sorting Table Sync

Sorting Table Sync component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { SortingTableSync } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      sortable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      sortable: true,
    }),
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              items={items}
              columns={columns}
              width={width}
              maxHeight={height}
              onColumnSort={onColumnSort}
              onRowClick={onRowClick}
            />
          )}
        </AutoResizer>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Columns can be made sortable by adding `sortable=true` to the column definition. To disable sorting for the
          whole table the prop {'disableSort={true}'} must be.
        </p>
        <p>
          The sort key and direction controlled by the component internal state, but it is able to take over the control
          setting `sortBy` and `onColumnSort` props on the table component.
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
SortingTableSyncStory.storyName = 'Sorting Table (sync)';
SortingTableSyncStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Examples

```tsx
const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      sortable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      sortable: true,
    }),
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              items={items}
              columns={columns}
              width={width}
              maxHeight={height}
              onColumnSort={onColumnSort}
              onRowClick={onRowClick}
            />
          )}
        </AutoResizer>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Columns can be made sortable by adding `sortable=true` to the column definition. To disable sorting for the
          whole table the prop {'disableSort={true}'} must be.
        </p>
        <p>
          The sort key and direction controlled by the component internal state, but it is able to take over the control
          setting `sortBy` and `onColumnSort` props on the table component.
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
SortingTableSyncStory.storyName = 'Sorting Table (sync)';
SortingTableSyncStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
