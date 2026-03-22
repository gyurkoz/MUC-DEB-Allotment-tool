# Expanded Row

Expanded Row component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ExpandedRow } from '@lsy-netline/netline-ui';
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
    }),
  ];

  const newItems = [...items.slice(0, 3), { ...items[3], nutritions: null }, ...items.slice(4)];
  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                rowKey="name"
                items={newItems}
                columns={columns}
                width={width}
                maxHeight={height}
                expandRowKey="nutritions"
                ExpandedRow={DetailsExpandedRow}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Simply set the component to <code>ExpandedRow</code> prop to make and expanded row. The
          <code>ExpandedRow</code> component gets some extra props like <code>style</code> and
          <code> rowData</code> which can affect rendering.
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
ExpandedRowStory.storyName = 'Expanded Row';
ExpandedRowStory.parameters = {
  docs: {
    iframeHeight: 500,
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
    }),
  ];

  const newItems = [...items.slice(0, 3), { ...items[3], nutritions: null }, ...items.slice(4)];
  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                rowKey="name"
                items={newItems}
                columns={columns}
                width={width}
                maxHeight={height}
                expandRowKey="nutritions"
                ExpandedRow={DetailsExpandedRow}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Simply set the component to <code>ExpandedRow</code> prop to make and expanded row. The
          <code>ExpandedRow</code> component gets some extra props like <code>style</code> and
          <code> rowData</code> which can affect rendering.
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
ExpandedRowStory.storyName = 'Expanded Row';
ExpandedRowStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
