# Filter Table

Filter Table component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { FilterTable } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');
  const onClearAllFiltersClick = handleAction('onClearAllFiltersClick', () => true);

  const columns = [
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
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
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
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          VirtaulTable columns can be filtered with their own filter input. <br />
          To enable: Prop filtering has to be true for the VirtaulTable and for every Column which needs filtering
        </p>
        <p>
          With Column.filterType we can control what kind of input field appears. Available options: [string, number,
          date] or (FilterType.STRING, FilterType.NUMBER, FilterType.DATE). If not set or has wrong value, string is
          used.
          <br />
          With Column.filterFn we can control what the filter function is. The default checks two strings if one
          includes the other. <br />
          With Column.filterRenderer we can control what will show up for the filter input field, styling is the
          filterRenderers responsibility. <br />
          With Column.filterFieldProps we can add additional props to the filter component.
        </p>
        <p>
          To enable clear filters button: Prop clearAllFiltersButton must be true. <br />
          An external function can be invoked when the clear button is clicked by providing prop onClearAllFiltersClick.
          <br />
          Depending on the return value of that function, the original func to clear filters is invoked (true) or even
          not (false);
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
FilterTableStory.storyName = 'Filtering Table';
FilterTableStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Examples

```tsx
const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');
  const onClearAllFiltersClick = handleAction('onClearAllFiltersClick', () => true);

  const columns = [
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
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
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
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          VirtaulTable columns can be filtered with their own filter input. <br />
          To enable: Prop filtering has to be true for the VirtaulTable and for every Column which needs filtering
        </p>
        <p>
          With Column.filterType we can control what kind of input field appears. Available options: [string, number,
          date] or (FilterType.STRING, FilterType.NUMBER, FilterType.DATE). If not set or has wrong value, string is
          used.
          <br />
          With Column.filterFn we can control what the filter function is. The default checks two strings if one
          includes the other. <br />
          With Column.filterRenderer we can control what will show up for the filter input field, styling is the
          filterRenderers responsibility. <br />
          With Column.filterFieldProps we can add additional props to the filter component.
        </p>
        <p>
          To enable clear filters button: Prop clearAllFiltersButton must be true. <br />
          An external function can be invoked when the clear button is clicked by providing prop onClearAllFiltersClick.
          <br />
          Depending on the return value of that function, the original func to clear filters is invoked (true) or even
          not (false);
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
FilterTableStory.storyName = 'Filtering Table';
FilterTableStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
