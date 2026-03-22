# Auto Resizing Table

Auto Resizing Table component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { AutoResizingTable } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');

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
    }),
  ];

  return (
    <Container fullPage>
      <AutoResizer>
        {({ width, height }) => (
          <VirtualTable
            items={items}
            columns={columns}
            width={width}
            height={height}
            onRowClick={onRowClick}
            allowTableSettings
          />
        )}
      </AutoResizer>
    </Container>
  );
};
AutoResizingTableStory.storyName = 'Auto Resize Table';
AutoResizingTableStory.parameters = {
  docs: {
    iframeHeight: 400,
  },
};

export default {
```

## Examples

```tsx
const onRowClick = handleAction('onRowClick');

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
    }),
  ];

  return (
    <Container fullPage>
      <AutoResizer>
        {({ width, height }) => (
          <VirtualTable
            items={items}
            columns={columns}
            width={width}
            height={height}
            onRowClick={onRowClick}
            allowTableSettings
          />
        )}
      </AutoResizer>
    </Container>
  );
};
AutoResizingTableStory.storyName = 'Auto Resize Table';
AutoResizingTableStory.parameters = {
  docs: {
    iframeHeight: 400,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
