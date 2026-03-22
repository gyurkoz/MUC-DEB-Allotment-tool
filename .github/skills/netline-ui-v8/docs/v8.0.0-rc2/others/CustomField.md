# Custom Field

Custom Field component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CustomField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
render: () => {
    const CustomSlider = (props: DynamicFormCustomSliderProps) => {
      const { value, onChange, step, min, max } = props;

      const handleChange = (event: any) => {
        onChange(event.target.value);
      };

      return (
        <Slider
          aria-label="Temperature"
          value={value}
          getAriaValueText={(currentValue) => `${currentValue}°C`}
          valueLabelDisplay="on"
          marks
          step={step}
          min={min}
          max={max}
          onChange={handleChange}
        />
      );
    };

    const fieldItem: DynamicFormCustomField<number, DynamicFormCustomSliderOwnProps> = {
      type: 'CUSTOM',
      key: 'sliderValue',
      label: 'custom.slider',
      component: CustomSlider,
      componentProps: {
        min: 0,
        max: 200,
        step: 10,
      },
    };

    const initialValue = { sliderValue: 60 };

    const customComponentConfig: DynamicFormSection = {
      key: 'custom.value',
      title: 'Custom component section',
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
    const CustomSlider = (props: DynamicFormCustomSliderProps) => {
      const { value, onChange, step, min, max } = props;

      const handleChange = (event: any) => {
        onChange(event.target.value);
      };

      return (
        <Slider
          aria-label="Temperature"
          value={value}
          getAriaValueText={(currentValue) => `${currentValue}°C`}
          valueLabelDisplay="on"
          marks
          step={step}
          min={min}
          max={max}
          onChange={handleChange}
        />
      );
    };

    const fieldItem: DynamicFormCustomField<number, DynamicFormCustomSliderOwnProps> = {
      type: 'CUSTOM',
      key: 'sliderValue',
      label: 'custom.slider',
      component: CustomSlider,
      componentProps: {
        min: 0,
        max: 200,
        step: 10,
      },
    };

    const initialValue = { sliderValue: 60 };

    const customComponentConfig: DynamicFormSection = {
      key: 'custom.value',
      title: 'Custom component section',
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
            size="small"
          />
        </CardContent>
      </Card>
    );
```

```tsx
const CustomSlider = (props: DynamicFormCustomSliderProps) => {
      const { value, onChange, step, min, max } = props;

      const handleChange = (event: any) => {
        onChange(event.target.value);
      };

      return (
        <Slider
          aria-label="Temperature"
          value={value}
          getAriaValueText={(currentValue) => `${currentValue}°C`}
          valueLabelDisplay="on"
          marks
          step={step}
          min={min}
          max={max}
          onChange={handleChange}
        />
      );
    };

    const fieldItem: DynamicFormCustomField<number, DynamicFormCustomSliderOwnProps> = {
      type: 'CUSTOM',
      key: 'sliderValue',
      label: 'custom.slider',
      component: CustomSlider,
      componentProps: {
        min: 0,
        max: 200,
        step: 10,
```

```tsx
const CustomSlider = (props: DynamicFormCustomSliderProps) => {
      const { value, onChange, step, min, max } = props;

      const handleChange = (event: any) => {
        onChange(event.target.value);
      };

      return (
        <Slider
          aria-label="Temperature"
          value={value}
          getAriaValueText={(currentValue) => `${currentValue}°C`}
          valueLabelDisplay="on"
          marks
          step={step}
          min={min}
          max={max}
          onChange={handleChange}
        />
      );
    };

    const fieldItem: DynamicFormCustomField<number, DynamicFormCustomSliderOwnProps> = {
      type: 'CUSTOM',
      key: 'sliderValue',
      label: 'custom.slider',
      component: CustomSlider,
      componentProps: {
        min: 0,
        max: 200,
        step: 10,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
