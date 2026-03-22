# Keyboard Navigation

Keyboard Navigation component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { KeyboardNavigation } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      className: 'id-cell-classname',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: {},
      },
      filtering: true,
    }),
    Column({
      label: 'Family',
      dataKey: 'family',
      width: 200,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: {},
      },
      filtering: true,
    }),
    Column({
      label: 'Select',
      dataKey: 'select',
      width: 200,
      filtering: true,
      cellEditing: {
        editor: EnumEditor(['', 'Select1', 'Select2', 'Select3', 'Select4', 'Select5']),
        hideEditedIcon: true,
      },
    }),
    Column({
      label: 'Status',
      dataKey: 'status',
      cellRenderer: CheckboxCell,
      align: 'center',
      width: 100,
      cellEditing: {
        editable: true,
        editor: ToggleOnClickEditor,
        hideEditedIcon: true,
      },
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      cellEditing: {
        editable: true,
        editor: {},
        disableAutomaticEditorOpen: true,
      },
      filtering: true,
    }),
    Column({
      label: 'Genus',
      dataKey: 'genus',
      width: 200,
      flexGrow: 1,
      focusable: false,
      filtering: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      cellRenderer: DateCell,
      width: 250,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: DatePickerEditor,
        componentProps: {
          format: DateFormat.ISO_DATE.format,
        },
      },
      filtering: true,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
    }),
  ];

  const tableData = useMemo(() => items.map((item) => ({ ...item, select: '' })), []);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable
          items={tableData}
          columns={columns}
          width={700}
          maxHeight={320}
          rowHeight={32}
          cellEditing={{ cellEditingState }}
          keyboardNavigation
          filtering
        />
      </LocalizationProvider>
    </div>
  );
};
KeyboardNavigationStory.storyName = 'Keyboard Navigation';
KeyboardNavigationStory.parameters = {
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
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      className: 'id-cell-classname',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: {},
      },
      filtering: true,
    }),
    Column({
      label: 'Family',
      dataKey: 'family',
      width: 200,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: {},
      },
      filtering: true,
    }),
    Column({
      label: 'Select',
      dataKey: 'select',
      width: 200,
      filtering: true,
      cellEditing: {
        editor: EnumEditor(['', 'Select1', 'Select2', 'Select3', 'Select4', 'Select5']),
        hideEditedIcon: true,
      },
    }),
    Column({
      label: 'Status',
      dataKey: 'status',
      cellRenderer: CheckboxCell,
      align: 'center',
      width: 100,
      cellEditing: {
        editable: true,
        editor: ToggleOnClickEditor,
        hideEditedIcon: true,
      },
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      cellEditing: {
        editable: true,
        editor: {},
        disableAutomaticEditorOpen: true,
      },
      filtering: true,
    }),
    Column({
      label: 'Genus',
      dataKey: 'genus',
      width: 200,
      flexGrow: 1,
      focusable: false,
      filtering: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      cellRenderer: DateCell,
      width: 250,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: DatePickerEditor,
        componentProps: {
          format: DateFormat.ISO_DATE.format,
        },
      },
      filtering: true,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
    }),
  ];

  const tableData = useMemo(() => items.map((item) => ({ ...item, select: '' })), []);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable
          items={tableData}
          columns={columns}
          width={700}
          maxHeight={320}
          rowHeight={32}
          cellEditing={{ cellEditingState }}
          keyboardNavigation
          filtering
        />
      </LocalizationProvider>
    </div>
  );
};
KeyboardNavigationStory.storyName = 'Keyboard Navigation';
KeyboardNavigationStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
