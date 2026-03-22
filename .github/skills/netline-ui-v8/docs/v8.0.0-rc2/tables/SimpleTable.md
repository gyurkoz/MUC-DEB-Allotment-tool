# Simple Table

Simple Table component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { SimpleTable } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');
  const onTableSettingsClick = handleAction('onTableSettingsClick');

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
      align: 'right',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <div>
        Default row height (ROW_HEIGHT={ROW_HEIGHT}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={700}
          maxHeight={320}
          onRowClick={onRowClick}
          allowTableSettings
          onTableSettingsClick={onTableSettingsClick}
        />
      </div>
      <br />
      <div>
        Small row height (ROW_HEIGHT_SMALL={ROW_HEIGHT_SMALL}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={700}
          maxHeight={320}
          rowHeight={32}
          onRowClick={onRowClick}
          allowTableSettings
          onTableSettingsClick={onTableSettingsClick}
        />
      </div>
    </div>
  );
};
SimpleTable.storyName = 'Simple Table';
SimpleTable.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Examples

```tsx
const onRowClick = handleAction('onRowClick');
  const onTableSettingsClick = handleAction('onTableSettingsClick');

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
      align: 'right',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <div>
        Default row height (ROW_HEIGHT={ROW_HEIGHT}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={700}
          maxHeight={320}
          onRowClick={onRowClick}
          allowTableSettings
          onTableSettingsClick={onTableSettingsClick}
        />
      </div>
      <br />
      <div>
        Small row height (ROW_HEIGHT_SMALL={ROW_HEIGHT_SMALL}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={700}
          maxHeight={320}
          rowHeight={32}
          onRowClick={onRowClick}
          allowTableSettings
          onTableSettingsClick={onTableSettingsClick}
        />
      </div>
    </div>
  );
};
SimpleTable.storyName = 'Simple Table';
SimpleTable.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
