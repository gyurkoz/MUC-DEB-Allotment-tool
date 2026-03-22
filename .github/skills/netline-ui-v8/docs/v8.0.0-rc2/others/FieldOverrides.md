# Field Overrides

Field Overrides component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { FieldOverrides } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
render: () => {
    const SliderOverride = (props: DynamicFormCustomFieldProps<number, SliderOwnProps>) => {
      const {
        label,
        translationProps,
        description,
        translationFn: t,
        componentProps = {},
        extraProps,
        onChange,
        value,
      } = props;
      const handleChange: SliderProps['onChange'] = (event, newValue) => {
        onChange(isArray(newValue) ? newValue[0] : newValue);
      };
      return (
        <FormControl fullWidth>
          {label && <FormLabel>{t(label, translationProps)}</FormLabel>}
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            marks
            {...extraProps}
            {...componentProps}
          />
          {description && <FormHelperText>{t(description, translationProps)}</FormHelperText>}
        </FormControl>
      );
    };

    const fieldItem: DynamicFormOverriddenField<SliderOwnProps> = {
      type: 'SLIDER',
      key: 'sliderValue',
      label: 'custom.slider',
      componentProps: { min: 0, max: 200, step: 10 },
    };

    const initialValue = { sliderValue: 60 };

    const customComponentConfig: DynamicFormSection = {
      key: 'custom.value',
      title: 'Field Overrides (Extension)',
      items: [fieldItem],
    };
    const handleChange = action('change');

    return (
      <Card>
        <CardContent>
          <DynamicForm
            sections={[customComponentConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            additionalFieldTypes={{ SLIDER: SliderOverride }}
            size="small"
          />
        </CardContent>
      </Card>
    );
```

## Variants

- Small

## Examples

```tsx
render: () => {
    const SliderOverride = (props: DynamicFormCustomFieldProps<number, SliderOwnProps>) => {
      const {
        label,
        translationProps,
        description,
        translationFn: t,
        componentProps = {},
        extraProps,
        onChange,
        value,
      } = props;
      const handleChange: SliderProps['onChange'] = (event, newValue) => {
        onChange(isArray(newValue) ? newValue[0] : newValue);
      };
      return (
        <FormControl fullWidth>
          {label && <FormLabel>{t(label, translationProps)}</FormLabel>}
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            marks
            {...extraProps}
            {...componentProps}
          />
          {description && <FormHelperText>{t(description, translationProps)}</FormHelperText>}
        </FormControl>
      );
    };

    const fieldItem: DynamicFormOverriddenField<SliderOwnProps> = {
      type: 'SLIDER',
      key: 'sliderValue',
      label: 'custom.slider',
      componentProps: { min: 0, max: 200, step: 10 },
    };

    const initialValue = { sliderValue: 60 };

    const customComponentConfig: DynamicFormSection = {
      key: 'custom.value',
      title: 'Field Overrides (Extension)',
      items: [fieldItem],
    };
    const handleChange = action('change');

    return (
      <Card>
        <CardContent>
          <DynamicForm
            sections={[customComponentConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            additionalFieldTypes={{ SLIDER: SliderOverride }}
            size="small"
          />
        </CardContent>
      </Card>
    );
```

```tsx
const SliderOverride = (props: DynamicFormCustomFieldProps<number, SliderOwnProps>) => {
      const {
        label,
        translationProps,
        description,
        translationFn: t,
        componentProps = {},
        extraProps,
        onChange,
        value,
      } = props;
      const handleChange: SliderProps['onChange'] = (event, newValue) => {
        onChange(isArray(newValue) ? newValue[0] : newValue);
      };
      return (
        <FormControl fullWidth>
          {label && <FormLabel>{t(label, translationProps)}</FormLabel>}
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            marks
            {...extraProps}
            {...componentProps}
          />
          {description && <FormHelperText>{t(description, translationProps)}</FormHelperText>}
        </FormControl>
      );
    };

    const fieldItem: DynamicFormOverriddenField<SliderOwnProps> = {
      type: 'SLIDER',
      key: 'sliderValue',
      label: 'custom.slider',
      componentProps: { min: 0, max: 200, step: 10 },
    };

    const initialValue = { sliderValue: 60 };

    const customComponentConfig: DynamicFormSection = {
      key: 'custom.value',
      title: 'Field Overrides (Extension)',
      items: [fieldItem],
    };
    const handleChange = action('change');

    return (
      <Card>
        <CardContent>
          <DynamicForm
            sections={[customComponentConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            additionalFieldTypes={{ SLIDER: SliderOverride }}
            size="small"
          />
        </CardContent>
      </Card>
    );
```

```tsx
const SliderOverride = (props: DynamicFormCustomFieldProps<number, SliderOwnProps>) => {
      const {
        label,
        translationProps,
        description,
        translationFn: t,
        componentProps = {},
        extraProps,
        onChange,
        value,
      } = props;
      const handleChange: SliderProps['onChange'] = (event, newValue) => {
        onChange(isArray(newValue) ? newValue[0] : newValue);
      };
      return (
        <FormControl fullWidth>
          {label && <FormLabel>{t(label, translationProps)}</FormLabel>}
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            marks
            {...extraProps}
            {...componentProps}
          />
          {description && <FormHelperText>{t(description, translationProps)}</FormHelperText>}
        </FormControl>
      );
    };

    const fieldItem: DynamicFormOverriddenField<SliderOwnProps> = {
      type: 'SLIDER',
      key: 'sliderValue',
      label: 'custom.slider',
      componentProps: { min: 0, max: 200, step: 10 },
    };

    const initialValue = { sliderValue: 60 };

    const customComponentConfig: DynamicFormSection = {
      key: 'custom.value',
      title: 'Field Overrides (Extension)',
      items: [fieldItem],
    };
    const handleChange = action('change');

    return (
      <Card>
        <CardContent>
          <DynamicForm
            sections={[customComponentConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            additionalFieldTypes={{ SLIDER: SliderOverride }}
            size="small"
          />
        </CardContent>
      </Card>
    );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
