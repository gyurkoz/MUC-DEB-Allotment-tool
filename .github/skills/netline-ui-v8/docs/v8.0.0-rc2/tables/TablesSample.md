# Sample (Tables)

Sample component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { TablesSample } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');

  const items = [
    {
      id: 1,
      name: 'Apple',
      color: '#e51e25',
      weight: 250,
    },
    {
      id: 2,
      name: 'Banana',
      color: '#bad52a',
      weight: 200,
    },
    {
      id: 3,
      name: 'Cherries',
      color: '#7d1818',
      weight: 5,
    },
    {
      id: 4,
      name: 'Date Fruit',
      color: '#5f2020',
      weight: 25,
    },
    {
      id: 5,
      name: 'Elderberries',
      color: '#2e2449',
      weight: 30,
    },
    {
      id: 6,
      name: 'Figs',
      color: '#874f68',
      weight: 20,
    },
    {
      id: 7,
      name: 'Grapefruit',
      color: '#e0707c',
      weight: 350,
    },
  ];

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
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      width: 200,
      flexGrow: 1,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <VirtualTable items={items} columns={columns} width={700} maxHeight={500} onRowClick={onRowClick} />
    </div>
  );
};
Sample.tags = ['hideInSidebar'];

export default {
```

## Examples

```tsx
const onRowClick = handleAction('onRowClick');

  const items = [
    {
      id: 1,
      name: 'Apple',
      color: '#e51e25',
      weight: 250,
    },
    {
      id: 2,
      name: 'Banana',
      color: '#bad52a',
      weight: 200,
    },
    {
      id: 3,
      name: 'Cherries',
      color: '#7d1818',
      weight: 5,
    },
    {
      id: 4,
      name: 'Date Fruit',
      color: '#5f2020',
      weight: 25,
    },
    {
      id: 5,
      name: 'Elderberries',
      color: '#2e2449',
      weight: 30,
    },
    {
      id: 6,
      name: 'Figs',
      color: '#874f68',
      weight: 20,
    },
    {
      id: 7,
      name: 'Grapefruit',
      color: '#e0707c',
      weight: 350,
    },
  ];

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
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      width: 200,
      flexGrow: 1,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <VirtualTable items={items} columns={columns} width={700} maxHeight={500} onRowClick={onRowClick} />
    </div>
  );
};
Sample.tags = ['hideInSidebar'];

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
