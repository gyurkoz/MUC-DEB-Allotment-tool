# Resizable Column

Resizable Column component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ResizableColumn } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      resizable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      resizable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      resizable: true,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      resizable: true,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable items={items} columns={columns} width={700} maxHeight={320} rowHeight={32} filtering />
      </LocalizationProvider>
    </div>
  );
};
ResizableColumnStory.storyName = 'Resizable Column';
ResizableColumnStory.parameters = {
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
      align: 'center',
      resizable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      resizable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      resizable: true,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      resizable: true,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable items={items} columns={columns} width={700} maxHeight={320} rowHeight={32} filtering />
      </LocalizationProvider>
    </div>
  );
};
ResizableColumnStory.storyName = 'Resizable Column';
ResizableColumnStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
