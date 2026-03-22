# Column Aggregates

Column Aggregates component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ColumnAggregates } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
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

  const [weightSum, setWeightSum] = useState(0);

  const onItemsChange = useCallback(({ items: newItems }) => {
    setWeightSum(getWeightSum(newItems));
  }, []);

  const footerRenderer = useCallback(
    ({ columns: currentColumns, items: currentItems }) => (
      <div className="BaseTable__row" style={{ height: '100%', fontWeight: 'bold' }}>
        <div style={{ width: currentColumns[0].width }} />
        <div style={{ width: currentColumns[1].width }} />
        <div style={{ width: currentColumns[2].width }} />
        <div style={{ width: currentColumns[3].width }} className="BaseTable__row-cell">
          Sum of weight: {getWeightSum(currentItems)} g
        </div>
      </div>
    ),
    [],
  );

  return (
    <AutoSizeGrid container direction="column">
      <Typography variant="h2">Aggregation with onItemsChange</Typography>
      <Grid size={{ xs: false }}>
        <p>Using `onItemsChange` prop callback, we can implement data aggregations</p>
      </Grid>
      <div>Sum of weight: {weightSum} g</div>
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
                filtering
                allowClearAllFilters
                onItemsChange={onItemsChange}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <hr />
      <Typography variant="h2">Aggregation with footerRenderer</Typography>
      <Grid size={{ xs: false }}>
        <p>
          Using `footerRenderer` we can implement aggregations into the footer. This is an alternative to
          `onItemsChange` abote for doing aggregations
        </p>
      </Grid>
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
                filtering
                allowClearAllFilters
                footerHeight={45}
                footerRenderer={footerRenderer}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
    </AutoSizeGrid>
  );
};
ColumnAggregatesStory.storyName = 'Column Aggregates';
ColumnAggregatesStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Examples

```tsx
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

  const [weightSum, setWeightSum] = useState(0);

  const onItemsChange = useCallback(({ items: newItems }) => {
    setWeightSum(getWeightSum(newItems));
  }, []);

  const footerRenderer = useCallback(
    ({ columns: currentColumns, items: currentItems }) => (
      <div className="BaseTable__row" style={{ height: '100%', fontWeight: 'bold' }}>
        <div style={{ width: currentColumns[0].width }} />
        <div style={{ width: currentColumns[1].width }} />
        <div style={{ width: currentColumns[2].width }} />
        <div style={{ width: currentColumns[3].width }} className="BaseTable__row-cell">
          Sum of weight: {getWeightSum(currentItems)} g
        </div>
      </div>
    ),
    [],
  );

  return (
    <AutoSizeGrid container direction="column">
      <Typography variant="h2">Aggregation with onItemsChange</Typography>
      <Grid size={{ xs: false }}>
        <p>Using `onItemsChange` prop callback, we can implement data aggregations</p>
      </Grid>
      <div>Sum of weight: {weightSum} g</div>
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
                filtering
                allowClearAllFilters
                onItemsChange={onItemsChange}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <hr />
      <Typography variant="h2">Aggregation with footerRenderer</Typography>
      <Grid size={{ xs: false }}>
        <p>
          Using `footerRenderer` we can implement aggregations into the footer. This is an alternative to
          `onItemsChange` abote for doing aggregations
        </p>
      </Grid>
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
                filtering
                allowClearAllFilters
                footerHeight={45}
                footerRenderer={footerRenderer}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
    </AutoSizeGrid>
  );
};
ColumnAggregatesStory.storyName = 'Column Aggregates';
ColumnAggregatesStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
