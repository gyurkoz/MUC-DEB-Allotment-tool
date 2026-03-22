# Filter Table Async

Filter Table Async component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { FilterTableAsync } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const columns = useMemo(
    () => [
      Column({
        label: '#',
        dataKey: 'id',
        width: 60,
        flex: 0,
        align: 'center',
      }),
      Column({
        label: 'Fruit name',
        dataKey: 'name',
        width: 200,
        flexGrow: 1,
        filtering: true,
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
        filtering: true,
        filterType: FilterType.NUMBER,
        filterFn: (item, value) => item >= value,
        sortable: true,
      }),
      Column({
        label: 'Best Before',
        dataKey: 'bestBefore',
        width: 200,
        flexGrow: 1,
        filtering: true,
        filterType: FilterType.DATE,
        filterFieldProps: { variant: 'dialog' },
        sortable: true,
      }),
    ],
    [],
  );

  const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');
  const onClearAllFiltersClick = handleAction('onClearAllFiltersClick', () => true);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(originalItems);
  const onFilterValuesChange = useCallback(
    ({ filterValues } /* , event */) => {
      if (!filterValues) {
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const filterKeys = Object.keys(filterValues);
        const newItems = filterKeys.reduce((result, columnId) => {
          const column = columns.find(({ dataKey }) => dataKey === columnId);
          return column
            ? result.filter((item) =>
                (column.filterFn || defaultFilterFn)(item[column.dataKey] ?? '', filterValues[columnId], column),
              )
            : result;
        }, originalItems);
        setItems(newItems);
        setLoading(false);
      }, 1000);
    },
    [columns],
  );

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                loading={loading}
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={155}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                onClearAllFiltersClick={onClearAllFiltersClick}
                remoteFiltering
                onFilterValuesChange={onFilterValuesChange}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        For server-side / async filtering the following steps need to be done:
        <ul>
          <li>
            <code>remoteFiltering</code> props must be set to disable the built-in filtering mechanism;
          </li>
          <li>
            a callback method in <code>onFilterValuesChange</code> prop must be set and the filtering operation can be
            started asynchronously;
          </li>
          <li>
            when filtering is completed, set the result in <code>items</code> props.
          </li>
        </ul>
      </Grid>
    </AutoSizeGrid>
  );
};
FilterTableAsyncStory.storyName = 'Filtering Table (async)';
FilterTableAsyncStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Examples

```tsx
const columns = useMemo(
    () => [
      Column({
        label: '#',
        dataKey: 'id',
        width: 60,
        flex: 0,
        align: 'center',
      }),
      Column({
        label: 'Fruit name',
        dataKey: 'name',
        width: 200,
        flexGrow: 1,
        filtering: true,
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
        filtering: true,
        filterType: FilterType.NUMBER,
        filterFn: (item, value) => item >= value,
        sortable: true,
      }),
      Column({
        label: 'Best Before',
        dataKey: 'bestBefore',
        width: 200,
        flexGrow: 1,
        filtering: true,
        filterType: FilterType.DATE,
        filterFieldProps: { variant: 'dialog' },
        sortable: true,
      }),
    ],
    [],
  );

  const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');
  const onClearAllFiltersClick = handleAction('onClearAllFiltersClick', () => true);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(originalItems);
  const onFilterValuesChange = useCallback(
    ({ filterValues } /* , event */) => {
      if (!filterValues) {
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const filterKeys = Object.keys(filterValues);
        const newItems = filterKeys.reduce((result, columnId) => {
          const column = columns.find(({ dataKey }) => dataKey === columnId);
          return column
            ? result.filter((item) =>
                (column.filterFn || defaultFilterFn)(item[column.dataKey] ?? '', filterValues[columnId], column),
              )
            : result;
        }, originalItems);
        setItems(newItems);
        setLoading(false);
      }, 1000);
    },
    [columns],
  );

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                loading={loading}
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={155}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                onClearAllFiltersClick={onClearAllFiltersClick}
                remoteFiltering
                onFilterValuesChange={onFilterValuesChange}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        For server-side / async filtering the following steps need to be done:
        <ul>
          <li>
            <code>remoteFiltering</code> props must be set to disable the built-in filtering mechanism;
          </li>
          <li>
            a callback method in <code>onFilterValuesChange</code> prop must be set and the filtering operation can be
            started asynchronously;
          </li>
          <li>
            when filtering is completed, set the result in <code>items</code> props.
          </li>
        </ul>
      </Grid>
    </AutoSizeGrid>
  );
};
FilterTableAsyncStory.storyName = 'Filtering Table (async)';
FilterTableAsyncStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
