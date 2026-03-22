# Row Selection

Row Selection component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { RowSelection } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const { selected, onSelectedChange, selectItems, deselectAll } = useSelection();

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
      <Grid size={{ xs: false }}>
        <Button onClick={() => selectItems(items, 'name')}>Select All</Button>
        <Button onClick={() => deselectAll()}>Deselect All</Button>
        <span>Seleted items are: {Array.from(selected.keys()).join(', ') || '-'}</span>
      </Grid>
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                rowKey="name"
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                selected={selected}
                onSelectedChange={onSelectedChange}
                filtering
                allowClearAllFilters
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Row selection can be easily added using the <code>useSelection</code> hook. The hook will return a
          <code> selected</code> Map object and an <code>onSelectedChange</code> method which must be passed to the
          props of <code>VirtualTable</code> and will render the selection column automatically.
        </p>
        <p>
          It is possible to add <code>selectStateGetter</code> and <code>isAllSelected </code>
          method props to control the state and tooltip of selection checkboxes
        </p>
        <p>
          <code>useSelection</code> can be imported with:
        </p>
        <pre>import {'{ useSelection }'} from &apos;@lsy-netline/netline-ui/VitualTable&apos;;</pre>
      </Grid>
    </AutoSizeGrid>
  );
};
RowSelection.storyName = 'Row Selection';
RowSelection.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Examples

```tsx
const { selected, onSelectedChange, selectItems, deselectAll } = useSelection();

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
      <Grid size={{ xs: false }}>
        <Button onClick={() => selectItems(items, 'name')}>Select All</Button>
        <Button onClick={() => deselectAll()}>Deselect All</Button>
        <span>Seleted items are: {Array.from(selected.keys()).join(', ') || '-'}</span>
      </Grid>
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                rowKey="name"
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                selected={selected}
                onSelectedChange={onSelectedChange}
                filtering
                allowClearAllFilters
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Row selection can be easily added using the <code>useSelection</code> hook. The hook will return a
          <code> selected</code> Map object and an <code>onSelectedChange</code> method which must be passed to the
          props of <code>VirtualTable</code> and will render the selection column automatically.
        </p>
        <p>
          It is possible to add <code>selectStateGetter</code> and <code>isAllSelected </code>
          method props to control the state and tooltip of selection checkboxes
        </p>
        <p>
          <code>useSelection</code> can be imported with:
        </p>
        <pre>import {'{ useSelection }'} from &apos;@lsy-netline/netline-ui/VitualTable&apos;;</pre>
      </Grid>
    </AutoSizeGrid>
  );
};
RowSelection.storyName = 'Row Selection';
RowSelection.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
