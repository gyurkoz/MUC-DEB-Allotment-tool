# Checkbox Group Field

Checkbox Group Field component

## Overview

- **Category**: inputs
- **Base Library**: custom

## Description

Displays multiple checkboxes with label as a controlled field.
The component is the composition of the following components:

 - [FormControl](https://mui.com/api/form-control/)
 - [FormHelperText](https://mui.com/api/form-helper-text/)
 - [FormLabel](https://mui.com/api/form-label/)
 - [FormGroup](https://mui.com/api/form-group/)
 - [Radio](https://mui.com/api/radio/)

## Inheritance

All non-enumeraded props are passed to the wrapping `FormControl` API:
 - https://mui.com/api/form-control/

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CheckboxGroupField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState<Record<string, unknown>>({ 'B767-200': true });
  const items = [
    {
      value: 'B767-200',
      label: 'Boeing 767-200',
    },
    {
      value: 'A220',
      label: 'Airbus A220',
    },
    {
      value: 'A380',
      label: 'Airbus A380',
    },
  ];

  const handleChange = useActionCallback(
    'onChange',
    (event: React.ChangeEvent, newValue: Record<string, unknown> /* , item: CheckboxProps */) => {
      setValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField label="Aircrafts (medium)" value={value} items={items} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
StatusAndErrors.parameters = {
  viewport: { width: 1280 },
};

export const Variants = () => {
  const [value, setValue] = useState<Record<string, unknown>>({ 'B767-200': true });
  const items = [
    {
      value: 'B767-200',
      label: 'Boeing 767-200',
    },
    {
      value: 'A220',
      label: 'Airbus A220',
    },
    {
      value: 'A380',
      label: 'Airbus A380',
    },
  ];

  const handleChange = useActionCallback(
    'onChange',
    (event: React.ChangeEvent, newValue: Record<string, unknown> /* , item: CheckboxProps */) => {
      setValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Vertical
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField label="Aircrafts (medium)" value={value} items={items} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Vertical with Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Vertical with Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Horizontal (Row)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                row
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField label="Aircrafts (medium)" value={value} items={items} onChange={handleChange} row />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Horizontal (Row) with Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                row
                helperText="Invalid field"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                row
                helperText="Invalid field"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Horizontal (Row) with Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                row
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                row
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
Variants.parameters = {
  viewport: { width: 1600 },
};

export default {
  tags: ['!autodocs'],
  title: 'Inputs & controls/Checkbox/CheckboxGroupField',
  component: CheckboxGroupField,
```

## Variants

- Disabled
- Small
- Medium

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `CheckboxProps` | `object` |  | Extra props passed to each Checkbox component. |
| `children` | `node` |  | Additional contents which is rendered after checkbox items. |
| `className` | `string` |  | Css className to add to the outer (FormControl) container. |
| `disabled` | `bool` |  | Display component in enabled / disabled state. |
| `error` | `bool` |  | Whether to render the component in error state or not. |
| `errorMode` | `oneOf` |  | Select the place of error icon in case of `error` is set @default 'input' |
| `errorTooltip` | `bool` |  | The place where the error message should be placed: - false: the error messge will be rendered below the input field - true: the error message will be rendered in a tooltip on the error icon  @default `true` when `errorMode` is set to `label`, otherwise `false` |
| `FormControlProps` | `object` |  | Extra props passed to FormControl component. |
| `FormHelperTextProps` | `object` |  | Props applied to the [`FormHelperText`](/api/form-helper-text/) element. |
| `FormLabelProps` | `object` |  | Extra props passed to FormLabel component. |
| `helperText` | `node` |  | The helper text content. |
| `inlineError` | `bool` |  | Whether the error message should be rendered inline or normally @deprecated Please use `errorMode` and `errorTooltip` instead of `inlineError` |
| `items` | `array` | ✓ | The props of the Checkbox items which will be rendered. |
| `label` | `node` |  | The text to be used in an enclosing label element. |
| `labelAdornments` | `node` |  | Additional component to be rendered on the right side of the label. |
| `onChange` | `func` |  | Callback fired when the component value is changed. It has a footprint of `onChange(event, value, item)`.  @param {object} event The event source of the callback. @param {object} value The new value of the CheckboxGroupField component. @param {object} item  The item entry from the items list who has triggered the change. |
| `row` | `bool` |  | Display group of elements in a compact row. |
| `size` | `oneOf` |  | The size of the field. |
| `value` | `object` |  | Value of the checkbox fields mapped into a single object with `true` value set for keys which are checked, any falsy value represents unchecked state. |

## Examples

```tsx
const [value, setValue] = useState<Record<string, unknown>>({ 'B767-200': true });
  const items = [
    {
      value: 'B767-200',
      label: 'Boeing 767-200',
    },
    {
      value: 'A220',
      label: 'Airbus A220',
    },
    {
      value: 'A380',
      label: 'Airbus A380',
    },
  ];

  const handleChange = useActionCallback(
    'onChange',
    (event: React.ChangeEvent, newValue: Record<string, unknown> /* , item: CheckboxProps */) => {
      setValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField label="Aircrafts (medium)" value={value} items={items} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
StatusAndErrors.parameters = {
  viewport: { width: 1280 },
};

export const Variants = () => {
  const [value, setValue] = useState<Record<string, unknown>>({ 'B767-200': true });
  const items = [
    {
      value: 'B767-200',
      label: 'Boeing 767-200',
    },
    {
      value: 'A220',
      label: 'Airbus A220',
    },
    {
      value: 'A380',
      label: 'Airbus A380',
    },
  ];

  const handleChange = useActionCallback(
    'onChange',
    (event: React.ChangeEvent, newValue: Record<string, unknown> /* , item: CheckboxProps */) => {
      setValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Vertical
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField label="Aircrafts (medium)" value={value} items={items} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Vertical with Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Vertical with Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Horizontal (Row)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                row
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField label="Aircrafts (medium)" value={value} items={items} onChange={handleChange} row />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Horizontal (Row) with Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                row
                helperText="Invalid field"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                row
                helperText="Invalid field"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Horizontal (Row) with Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (small)"
                value={value}
                items={items}
                onChange={handleChange}
                size="small"
                row
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CheckboxGroupField
                label="Aircrafts (medium)"
                value={value}
                items={items}
                onChange={handleChange}
                row
                helperText="Invalid field"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
Variants.parameters = {
  viewport: { width: 1600 },
};

export default {
  tags: ['!autodocs'],
  title: 'Inputs & controls/Checkbox/CheckboxGroupField',
  component: CheckboxGroupField,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
