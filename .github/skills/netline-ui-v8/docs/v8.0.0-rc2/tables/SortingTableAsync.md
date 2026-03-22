# Sorting Table Async

Sorting Table Async component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { SortingTableAsync } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');
  const [sortedItems, setSortedItems] = useState(items);
  const [sorting, setSorting] = useState(false); // simulate async sorting this way
  const [sortState, setSortState] = useState({
    id: SortOrder.ASC,
  });

  const onColumnSort = handleAction('onColumnSort', ({ key, order, column }) => {
    // simulate async sorting with displaying a message in table overlay
    setSorting(true);
    setTimeout(() => {
      setSorting(false);
      const newSortState = { [key]: order };
      setSortState(newSortState);
      setSortedItems([...items.sort((column.sorterFn || defaultSorter)({ key, order, column }))]);
    }, 1000);

    // it is needed to avoid internal sort state update (eg: server-side, custom sorting)
    return false;
  });

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
              items={sortedItems}
              columns={columns}
              width={width}
              maxHeight={height}
              sortState={sortState}
              onColumnSort={onColumnSort}
              onRowClick={onRowClick}
              overlayRenderer={sorting ? <OverlayText text="Sorting, please wait..." /> : undefined}
            />
          )}
        </AutoResizer>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Asynchronous and more customizable sorting is also possible. Using the `sortState` and `onColumnSort` props
          there are more flexible solutions are available for exernally controlled sorting, like:
        </p>
        <ul>
          <li>Server-side sorting</li>
          <li>Client-side custom and async sorting</li>
          <li>Multiple key sorting</li>
        </ul>
      </Grid>
    </AutoSizeGrid>
  );
};
SortingTableAsyncStory.storyName = 'Sorting Table (async)';
SortingTableAsyncStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Examples

```tsx
const onRowClick = handleAction('onRowClick');
  const [sortedItems, setSortedItems] = useState(items);
  const [sorting, setSorting] = useState(false); // simulate async sorting this way
  const [sortState, setSortState] = useState({
    id: SortOrder.ASC,
  });

  const onColumnSort = handleAction('onColumnSort', ({ key, order, column }) => {
    // simulate async sorting with displaying a message in table overlay
    setSorting(true);
    setTimeout(() => {
      setSorting(false);
      const newSortState = { [key]: order };
      setSortState(newSortState);
      setSortedItems([...items.sort((column.sorterFn || defaultSorter)({ key, order, column }))]);
    }, 1000);

    // it is needed to avoid internal sort state update (eg: server-side, custom sorting)
    return false;
  });

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
              items={sortedItems}
              columns={columns}
              width={width}
              maxHeight={height}
              sortState={sortState}
              onColumnSort={onColumnSort}
              onRowClick={onRowClick}
              overlayRenderer={sorting ? <OverlayText text="Sorting, please wait..." /> : undefined}
            />
          )}
        </AutoResizer>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Asynchronous and more customizable sorting is also possible. Using the `sortState` and `onColumnSort` props
          there are more flexible solutions are available for exernally controlled sorting, like:
        </p>
        <ul>
          <li>Server-side sorting</li>
          <li>Client-side custom and async sorting</li>
          <li>Multiple key sorting</li>
        </ul>
      </Grid>
    </AutoSizeGrid>
  );
};
SortingTableAsyncStory.storyName = 'Sorting Table (async)';
SortingTableAsyncStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
