# Select

Select component

> ⚠️ **DEPRECATED**: This component is deprecated. Please use `SingleSelectField` or `MultiSelectField` instead!
>
> - For single value selection: Use [`SingleSelectField`](./SingleSelectField.md)
> - For multiple value selection: Use [`MultiSelectField`](./MultiSelectField.md)

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: Select
- **Status**: ⛔ **DEPRECATED** - Use `SingleSelectField` or `MultiSelectField` instead

## Description

Select components are used for collecting user provided information from a list of options.

The component is built on the `TextField` netline-ui component, every prop can be overridden.

**@deprecated** Please use `SingleSelectField` and `MultiSelectField` components instead of it!

## Migration Guide

### Before (deprecated)

```tsx
import { Select, MenuItem } from '@lsy-netline/netline-ui';

<Select label="Label" value={value} onChange={onChange}>
  <MenuItem value="1">Item 1</MenuItem>
  <MenuItem value="2">Item 2</MenuItem>
</Select>;
```

### After (recommended)

```tsx
import { SingleSelectField } from '@lsy-netline/netline-ui';

const options = [
  { id: 1, label: 'Item 1', value: '1' },
  { id: 2, label: 'Item 2', value: '2' },
];

<SingleSelectField
  options={options}
  value={selectedOption}
  onChange={handleChange}
  TextFieldProps={{ label: 'Label' }}
/>;
```

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Select } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState(1);

  const onChange = handleAction('onChange', (event: SelectChangeEvent<number>) => {
    const { value: newValue } = event.target;
    setValue(+newValue);
  });
  return (
    <Select label="Label" value={value} onChange={onChange}>
      <MenuItem value="1">Item 1</MenuItem>
      <MenuItem value="2">Item 2</MenuItem>
    </Select>
  );
};
Sample.tags = ['hideInSidebar'];

export const Variants = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" errorMode="label" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input8" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input5" label="Label" defaultValue="" placeholder="Hint" required fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input6" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
    </Grid>
  );
};

export const Sizes = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Medium (default)
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />

      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Small
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" size="small" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" size="small" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" size="small" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />
    </Grid>
  );
};

export default {
  title: 'Inputs & controls/Select (deprecated)',
  component: Select,
```

## Variants

- Disabled
- Small

## Props

| Prop          | Type        | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | `node`      |          | The option elements to populate the select with. Can be some `MenuItem` when `native` is false and `option` when `native` is true. ⚠️The `MenuItem` elements must be direct descendants when `native` is false.                                                                                                                                                                                              |
| `onChange`    | `func`      |          | Callback fired when a menu item is selected. @param {SelectChangeEvent<Value>} event The event source of the callback. You can pull out the new value by accessing `event.target.value` (any). Warning : This is a generic event, not a change event, unless the change event is caused by browser autofill. @param {object} [child] The react element that was selected when `native` is `false` (default). |
| `SelectProps` | `object`    |          | @Empty, Please add a description to the property                                                                                                                                                                                                                                                                                                                                                             |
| `size`        | `oneOf`     |          | The size of the component.                                                                                                                                                                                                                                                                                                                                                                                   |
| `value`       | `oneOfType` |          | The `input` value. Providing an empty string will select no options. Set to an empty string `''` if you don't want any of the available options to be selected. If the value is an object it must have reference equality with the option in order to be selected. If the value is not an object, the string representation must match with the string representation of the option in order to be selected. |

## Examples

```tsx
const [value, setValue] = useState(1);

  const onChange = handleAction('onChange', (event: SelectChangeEvent<number>) => {
    const { value: newValue } = event.target;
    setValue(+newValue);
  });
  return (
    <Select label="Label" value={value} onChange={onChange}>
      <MenuItem value="1">Item 1</MenuItem>
      <MenuItem value="2">Item 2</MenuItem>
    </Select>
  );
};
Sample.tags = ['hideInSidebar'];

export const Variants = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" errorMode="label" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input8" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input5" label="Label" defaultValue="" placeholder="Hint" required fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input6" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
    </Grid>
  );
};

export const Sizes = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Medium (default)
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />

      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Small
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" size="small" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" size="small" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" size="small" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />
    </Grid>
  );
};

export default {
  title: 'Inputs & controls/Select (deprecated)',
  component: Select,
```

## MUI Reference

This component is based on Material-UI's Select.

For additional props and detailed API documentation, refer to:

- [MUI Select Documentation](https://mui.com/material-ui/api/select/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
