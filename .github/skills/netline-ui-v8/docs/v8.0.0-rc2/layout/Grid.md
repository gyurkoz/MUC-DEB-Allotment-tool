# Grid

Responsive grid layout

## Overview

- **Category**: layout
- **Base Library**: mui
- **MUI Component**: Grid

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Grid } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
render: () => {
    const CellTypesDataGrid = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Basic text',
        }),
        createNumberColumn({
          field: 'amount',
          headerName: 'Basic number',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date and time',
          dateUtils,
          width: 130,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Single select',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi select',
          width: 150,
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Chip field',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Checkbox field',
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day pattern',
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
          headerName: 'Menu button',
          menuItems,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} />
        </Container>
      );
    };

    return <CellTypesDataGrid />;
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

## Examples

```tsx
render: () => {
    const CellTypesDataGrid = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Basic text',
        }),
        createNumberColumn({
          field: 'amount',
          headerName: 'Basic number',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date and time',
          dateUtils,
          width: 130,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Single select',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi select',
          width: 150,
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Chip field',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Checkbox field',
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day pattern',
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
          headerName: 'Menu button',
          menuItems,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} />
        </Container>
      );
    };

    return <CellTypesDataGrid />;
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
const CellTypesDataGrid = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Basic text',
        }),
        createNumberColumn({
          field: 'amount',
          headerName: 'Basic number',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date and time',
          dateUtils,
          width: 130,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Single select',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi select',
          width: 150,
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Chip field',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Checkbox field',
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day pattern',
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
          headerName: 'Menu button',
          menuItems,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} />
        </Container>
      );
    };

    return <CellTypesDataGrid />;
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
const CellTypesDataGrid = () => {
      const dateUtils = usePickerAdapter();

      const handleOnClick = useActionCallback('onClick');

      const menuItems = [
        { primaryText: 'Action 1', key: 'Action 1', onClick: handleOnClick },
        { primaryText: 'Action 2', key: 'Action 2', onClick: handleOnClick },
      ];

      const columns: GridColDef[] = [
        createTextColumn({
          field: 'name',
          headerName: 'Basic text',
        }),
        createNumberColumn({
          field: 'amount',
          headerName: 'Basic number',
          valueFormatter: (value: any) => (typeof value === 'number' ? value.toFixed(1) : value),
        }),
        createDateColumn({
          field: 'bestBefore',
          headerName: 'Date',
          dateUtils,
        }),
        createDateTimeColumn({
          field: 'dateTime',
          headerName: 'Date and time',
          dateUtils,
          width: 130,
        }),
        createTimeColumn({
          field: 'time',
          headerName: 'Time',
          dateUtils,
        }),
        createSingleSelectColumn({
          field: 'color',
          headerName: 'Single select',
        }),
        createMultiSelectColumn({
          field: 'multi',
          headerName: 'Multi select',
          width: 150,
        }),
        createStatusChipColumn({
          field: 'family',
          headerName: 'Chip field',
          mode: 'light',
          color: 'green',
          width: 130,
        }),
        createCheckboxColumn({
          field: 'status',
          headerName: 'Checkbox field',
        }),
        createDayPatternColumn({
          field: 'dayPattern',
          headerName: 'Day pattern',
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
          headerName: 'Menu button',
          menuItems,
        }),
      ];

      const { ref, height } = useResizeObserver();

      return (
        <Container ref={ref} fullPage padding>
          <DataGrid style={{ height }} rows={items} columns={columns} />
        </Container>
      );
    };

    return <CellTypesDataGrid />;
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

This component is based on Material-UI's Grid.

For additional props and detailed API documentation, refer to:

- [MUI Grid Documentation](https://mui.com/material-ui/api/grid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
