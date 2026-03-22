# Row Actions

Row Actions component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { RowActions } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick', ({ event }) => event.persist());
  const onColumnSort = handleAction('onColumnSort');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
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

  const rowActions = {
    label: 'Actions', // optional, default is empty
    width: 72, // optional, just to fit text
    actions: [
      {
        key: 'X1',
        title: 'Add to shoppingcart',
        leftIcon: <AddShoppingCartIcon />,
        onClick: handleAction('addToShoppingCart'),
        size: 'small',
      },
      {
        key: 'X2',
        title: 'Add to watchlist',
        leftIcon: <FavoriteIcon />,
        onClick: handleAction('addToFavorite'),
        size: 'small',
      },
    ],
  };

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
                emptyHeight={150}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                rowActions={rowActions}
                ExpandedRow={DetailsExpandedRow}
                expandRowKey="nutritions"
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Row Actions will be displayed at the right side of the table in a frozen column. To add row actions provide
          prop rowActions.
        </p>
        <p>If there are multiple row actions provided in an array, a menu button is placed instead.</p>
      </Grid>
    </AutoSizeGrid>
  );
};
RowActions.storyName = 'Row Actions';
RowActions.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Variants

- Small

## Examples

```tsx
const onRowClick = handleAction('onRowClick', ({ event }) => event.persist());
  const onColumnSort = handleAction('onColumnSort');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
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

  const rowActions = {
    label: 'Actions', // optional, default is empty
    width: 72, // optional, just to fit text
    actions: [
      {
        key: 'X1',
        title: 'Add to shoppingcart',
        leftIcon: <AddShoppingCartIcon />,
        onClick: handleAction('addToShoppingCart'),
        size: 'small',
      },
      {
        key: 'X2',
        title: 'Add to watchlist',
        leftIcon: <FavoriteIcon />,
        onClick: handleAction('addToFavorite'),
        size: 'small',
      },
    ],
  };

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
                emptyHeight={150}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                rowActions={rowActions}
                ExpandedRow={DetailsExpandedRow}
                expandRowKey="nutritions"
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Row Actions will be displayed at the right side of the table in a frozen column. To add row actions provide
          prop rowActions.
        </p>
        <p>If there are multiple row actions provided in an array, a menu button is placed instead.</p>
      </Grid>
    </AutoSizeGrid>
  );
};
RowActions.storyName = 'Row Actions';
RowActions.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
