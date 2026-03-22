# DataGrid Row Height Medium

Medium row height

## Overview

- **Category**: datagrid
- **Base Library**: mui-x
- **MUI Component**: DataGrid

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DataGridRowHeightMedium } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
render: ({ size = 'medium' }) => {
    const DataGridWithRowHeight = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Name',
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Color (Single Select)',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi Select',
          width: 150,
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          dateUtils,
          width: 130,
        }),
        createNumberColumn({
          field: 'weight',
          headerName: 'Weight',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day Pattern',
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Status',
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Family',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createButtonColumn({
          field: 'button',
          headerName: 'Button',
          text: 'Button',
          variant: 'contained',
          onClick: handleOnClick,
          width: 110,
        }),
        createMenuButtonColumn({
          field: 'actions',
          menuItems,
          width: size === 'large' ? 40 : 32,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} size={size} />
        </Container>
      );
    };

    return <DataGridWithRowHeight />;
  },
  decorators: [
    (Story: StoryFn, storyContext: StoryContext) => (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Story {...storyContext.args} />
      </LocalizationProvider>
    ),
  ],
  parameters: {
    viewport: { width: 1300, height: 1500 },
```

## Variants

- Primary
- Medium
- Large

## Examples

```tsx
render: ({ size = 'medium' }) => {
    const DataGridWithRowHeight = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Name',
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Color (Single Select)',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi Select',
          width: 150,
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          dateUtils,
          width: 130,
        }),
        createNumberColumn({
          field: 'weight',
          headerName: 'Weight',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day Pattern',
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Status',
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Family',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createButtonColumn({
          field: 'button',
          headerName: 'Button',
          text: 'Button',
          variant: 'contained',
          onClick: handleOnClick,
          width: 110,
        }),
        createMenuButtonColumn({
          field: 'actions',
          menuItems,
          width: size === 'large' ? 40 : 32,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} size={size} />
        </Container>
      );
    };

    return <DataGridWithRowHeight />;
  },
  decorators: [
    (Story: StoryFn, storyContext: StoryContext) => (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Story {...storyContext.args} />
      </LocalizationProvider>
    ),
  ],
  parameters: {
    viewport: { width: 1300, height: 1500 },
```

```tsx
const DataGridWithRowHeight = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Name',
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Color (Single Select)',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi Select',
          width: 150,
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date Time',
          dateUtils,
          width: 130,
        }),
        createNumberColumn({
          field: 'weight',
          headerName: 'Weight',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day Pattern',
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Status',
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Family',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createButtonColumn({
          field: 'button',
          headerName: 'Button',
          text: 'Button',
          variant: 'contained',
          onClick: handleOnClick,
          width: 110,
        }),
        createMenuButtonColumn({
          field: 'actions',
          menuItems,
          width: size === 'large' ? 40 : 32,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} size={size} />
        </Container>
      );
    };

    return <DataGridWithRowHeight />;
  },
  decorators: [
    (Story: StoryFn, storyContext: StoryContext) => (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Story {...storyContext.args} />
      </LocalizationProvider>
    ),
  ],
  parameters: {
    viewport: { width: 1300, height: 1500 },
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
