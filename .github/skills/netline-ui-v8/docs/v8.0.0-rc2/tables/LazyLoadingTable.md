# Lazy Loading Table

Lazy Loading Table component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { LazyLoadingTable } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [sortState, setSortState] = useState<Readonly<Record<string, SortOrder>>>({
    id: SortOrder.ASC,
  });
  const onColumnSort = useCallback(
    ({ key, order }: { key: ColumnKey; order: SortOrder; column: VirtualTableColumn }) => {
      setSortState(() => ({ [key]: order }));

      // it is needed to avoid internal sort state update (eg: server-side, custom sorting)
      return false;
    },
    [],
  );

  const onLazyDataRequest = useCallback<OnDataRequest<Fruit>>(
    async ({ limit, offset }) => {
      const serviceParams = {
        limit,
        offset,
        sortBy: map(sortState, (value, key) => `${key}:${value}`),
      };
      const { totalCount, results } = await fruitLazyService(serviceParams);

      return {
        total: totalCount,
        rowsData: results,
      };
    },
    [sortState],
  );

  const { selected, onSelectedChange } = useSelection();

  const { loading, items, error } = useLazyLoader(onLazyDataRequest, {
    blockSize: 10,
  });

  const columns = useMemo(
    () => [
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
    ],
    [],
  );

  const selectStateGetter = useCallback<typeof defaultSelectStateGetter>((args) => {
    const { rowId } = args;
    if (!rowId) {
      return { hidden: true };
    }

    return defaultSelectStateGetter(args);
  }, []);

  return (
    <AutoSizeGrid className={undefined} container direction="column">
      <Typography variant="h2">Lazy loading for virtual table</Typography>
      <Grid size={{ xs: false }}>
        <p>Using the `useLazyLoader` hook it is easy to create Lazy Loading for virtual table.</p>
        <p>
          The hook needs an async callback (promise), with signature `onLazyDataRequest` (defined in useLazyLoader.tsx)
          and some options.
        </p>
        <p>
          Using a javascript Proxy as `items`, the Proxy will call the service when it need to display data from a block
          not already fetched, and set the length of the virtualTable items to the `total` coming from the service
          response. This way only a subset of the total items are loaded, but the table looks like all the data is
          loaded and it will load more as the user scrolls.
        </p>
        <p>The `useVirtualTableSortState` hook will help to solve the sorting for lazy loading.</p>
        <p>
          IMPORTANT NOTE: When using lazy loading with useSelection, the checkbox in the heading should not be
          rendered(using selectStateGetter props. see this example) because it will work inproperly. Due to the
          selection not knowing the whole list of ids to select, it will not be able to guess the state of the
          `allSelected` checkbox and when selecting/deselecting all it will not be able to do it. For these
          functionalities this functionality should be implemented.
        </p>
      </Grid>
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              loading={loading}
              error={!!error}
              items={items}
              sortState={sortState}
              onColumnSort={onColumnSort}
              selectStateGetter={selectStateGetter}
              columns={columns}
              width={width}
              height={height}
              selected={selected}
              onSelectedChange={onSelectedChange}
            />
          )}
        </AutoResizer>
      </Grid>
    </AutoSizeGrid>
  );
```

## Examples

```tsx
const [sortState, setSortState] = useState<Readonly<Record<string, SortOrder>>>({
    id: SortOrder.ASC,
  });
  const onColumnSort = useCallback(
    ({ key, order }: { key: ColumnKey; order: SortOrder; column: VirtualTableColumn }) => {
      setSortState(() => ({ [key]: order }));

      // it is needed to avoid internal sort state update (eg: server-side, custom sorting)
      return false;
    },
    [],
  );

  const onLazyDataRequest = useCallback<OnDataRequest<Fruit>>(
    async ({ limit, offset }) => {
      const serviceParams = {
        limit,
        offset,
        sortBy: map(sortState, (value, key) => `${key}:${value}`),
      };
      const { totalCount, results } = await fruitLazyService(serviceParams);

      return {
        total: totalCount,
        rowsData: results,
      };
    },
    [sortState],
  );

  const { selected, onSelectedChange } = useSelection();

  const { loading, items, error } = useLazyLoader(onLazyDataRequest, {
    blockSize: 10,
  });

  const columns = useMemo(
    () => [
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
    ],
    [],
  );

  const selectStateGetter = useCallback<typeof defaultSelectStateGetter>((args) => {
    const { rowId } = args;
    if (!rowId) {
      return { hidden: true };
    }

    return defaultSelectStateGetter(args);
  }, []);

  return (
    <AutoSizeGrid className={undefined} container direction="column">
      <Typography variant="h2">Lazy loading for virtual table</Typography>
      <Grid size={{ xs: false }}>
        <p>Using the `useLazyLoader` hook it is easy to create Lazy Loading for virtual table.</p>
        <p>
          The hook needs an async callback (promise), with signature `onLazyDataRequest` (defined in useLazyLoader.tsx)
          and some options.
        </p>
        <p>
          Using a javascript Proxy as `items`, the Proxy will call the service when it need to display data from a block
          not already fetched, and set the length of the virtualTable items to the `total` coming from the service
          response. This way only a subset of the total items are loaded, but the table looks like all the data is
          loaded and it will load more as the user scrolls.
        </p>
        <p>The `useVirtualTableSortState` hook will help to solve the sorting for lazy loading.</p>
        <p>
          IMPORTANT NOTE: When using lazy loading with useSelection, the checkbox in the heading should not be
          rendered(using selectStateGetter props. see this example) because it will work inproperly. Due to the
          selection not knowing the whole list of ids to select, it will not be able to guess the state of the
          `allSelected` checkbox and when selecting/deselecting all it will not be able to do it. For these
          functionalities this functionality should be implemented.
        </p>
      </Grid>
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              loading={loading}
              error={!!error}
              items={items}
              sortState={sortState}
              onColumnSort={onColumnSort}
              selectStateGetter={selectStateGetter}
              columns={columns}
              width={width}
              height={height}
              selected={selected}
              onSelectedChange={onSelectedChange}
            />
          )}
        </AutoResizer>
      </Grid>
    </AutoSizeGrid>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
