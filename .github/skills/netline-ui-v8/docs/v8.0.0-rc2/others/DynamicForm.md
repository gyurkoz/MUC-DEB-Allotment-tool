# Dynamic Form

Dynamic Form component

## Overview

- **Category**: others
- **Base Library**: custom

## Description

A tool to generate multi level forms from configuration.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DynamicForm } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const initialValue = {
    fields: {
      checkboxgroup: ['option3', 'option2'],
      number_with_limit: '',
      radio: 'option2',
      dropdown: 'option2',
      date: ACTUAL_DATE,
      dateRange: {
        startDate: ACTUAL_DATE,
        endDate: ACTUAL_DATE,
      },
      chip: ['BBA', 'SCQ'],
      chipWithInvalidData: ['XXX', 'SCP'],
    },
  };

  const fieldsConfig: DynamicFormSection = {
    key: 'fields',
    title: 'Field types',
    description: 'Examples with different type of fields',
    sections: [
      {
        key: 'fields.chip_section',
        title: 'Chip section',
        items: [
          {
            type: 'CHIP',
            key: 'fields.chip',
            label: 'dynamic_form.chip_field',
            options: exampleAirports,
            optionTpl: '{{value}} - {{label}}',
            tagTpl: '{{value}}',
            tagTooltipTpl: '{{value}} - {{label}}',
          },
          {
            type: 'CHIP',
            key: 'fields.chipWithInvalidData',
            label: 'dynamic_form.chip_field',
            options: exampleAirports,
          },
        ],
      },
      {
        key: 'fields.checkbox_and_group_section',
        title: 'Checkbox and checkbox group fields section',
        items: [
          {
            type: 'CHECKBOX',
            key: 'fields.checkbox',
            label: 'dynamic_form.checkbox_field',
          },
          {
            type: 'CHECKBOX_GROUP',
            key: 'fields.checkboxgroup',
            label: 'dynamic_form.checkbox_group_field',
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
        ],
      },
      {
        key: 'fields.text_section',
        title: 'Text section',
        items: [{ type: 'TEXT', key: 'fields.text', label: 'dynamic_form.text_field' }],
      },
      {
        key: 'fields.number_section',
        title: 'Number field section',
        items: [
          { type: 'NUMBER', key: 'fields.number', label: 'dynamic_form.number_field' },
          {
            type: 'NUMBER',
            key: 'fields.number_with_limit',
            label: 'Number field (min = -2, max = 4, step = 2)',
            min: -2,
            max: 4,
            step: 2,
          },
        ],
      },
      {
        key: 'fields.divider_section',
        title: 'Divider field section',
        items: [{ key: 'fields.divider', label: 'Divider field', type: 'DIVIDER' }],
      },
      {
        key: 'fields.radio_and_dropdown_section',
        title: 'Radio and dropdown fields section',
        items: [
          {
            type: 'RADIO',
            key: 'fields.radio',
            label: 'dynamic_form.radio_field',
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
          {
            type: 'DROPDOWN',
            key: 'fields.dropdown',
            label: 'dynamic_form.dropdown_field',
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
        ],
      },
      {
        key: 'fields.date_and_date_range_section',
        title: 'Date and date range fields section',
        items: [
          { type: 'DATE', key: 'fields.date', label: 'Date field', dateInputFormat: 'ddMMMyy' },
          {
            type: 'DATE',
            key: 'fields.dateRequired',
            label: 'Date field (required)',
            required: true,
            dateInputFormat: 'ddMMMyy',
          },
          { type: 'DATE_RANGE', key: 'fields.dateRange', label: 'Date range field', dateInputFormat: 'dd MMM yy' },
          {
            type: 'DATE_RANGE',
            key: 'fields.dateRange_required',
            label: 'Date range field (required)',
            required: true,
            dateInputFormat: 'dd MMM yy',
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  const isStartDateBeforeEndDate = (dateRange: LocalDateRange) => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return false;
    }
    return isAfter(dateRange.startDate as Date, dateRange.endDate as Date);
  };

  const sectionsWithDateFns = useDynamicFormConfig([fieldsConfig], {
    fieldHelpers: {
      DATE: { dateValidatorFn: isValid },
      DATE_RANGE: { dateValidatorFn: isValid, isStartDateBeforeEndDate },
    },
  });

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DynamicForm
            sections={sectionsWithDateFns}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
```

## Variants

- Small
- Small
- Small
- Small
- Small
- Small
- Small
- Small
- Small
- Small

## Examples

### BuiltInFieldTypes

```tsx
const initialValue = {
    fields: {
      checkboxgroup: ['option3', 'option2'],
      number_with_limit: '',
      radio: 'option2',
      dropdown: 'option2',
      date: ACTUAL_DATE,
      dateRange: {
        startDate: ACTUAL_DATE,
        endDate: ACTUAL_DATE,
      },
      chip: ['BBA', 'SCQ'],
      chipWithInvalidData: ['XXX', 'SCP'],
    },
  };

  const fieldsConfig: DynamicFormSection = {
    key: 'fields',
    title: 'Field types',
    description: 'Examples with different type of fields',
    sections: [
      {
        key: 'fields.chip_section',
        title: 'Chip section',
        items: [
          {
            type: 'CHIP',
            key: 'fields.chip',
            label: 'dynamic_form.chip_field',
            options: exampleAirports,
            optionTpl: '{{value}} - {{label}}',
            tagTpl: '{{value}}',
            tagTooltipTpl: '{{value}} - {{label}}',
          },
          {
            type: 'CHIP',
            key: 'fields.chipWithInvalidData',
            label: 'dynamic_form.chip_field',
            options: exampleAirports,
          },
        ],
      },
      {
        key: 'fields.checkbox_and_group_section',
        title: 'Checkbox and checkbox group fields section',
        items: [
          {
            type: 'CHECKBOX',
            key: 'fields.checkbox',
            label: 'dynamic_form.checkbox_field',
          },
          {
            type: 'CHECKBOX_GROUP',
            key: 'fields.checkboxgroup',
            label: 'dynamic_form.checkbox_group_field',
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
        ],
      },
      {
        key: 'fields.text_section',
        title: 'Text section',
        items: [{ type: 'TEXT', key: 'fields.text', label: 'dynamic_form.text_field' }],
      },
      {
        key: 'fields.number_section',
        title: 'Number field section',
        items: [
          { type: 'NUMBER', key: 'fields.number', label: 'dynamic_form.number_field' },
          {
            type: 'NUMBER',
            key: 'fields.number_with_limit',
            label: 'Number field (min = -2, max = 4, step = 2)',
            min: -2,
            max: 4,
            step: 2,
          },
        ],
      },
      {
        key: 'fields.divider_section',
        title: 'Divider field section',
        items: [{ key: 'fields.divider', label: 'Divider field', type: 'DIVIDER' }],
      },
      {
        key: 'fields.radio_and_dropdown_section',
        title: 'Radio and dropdown fields section',
        items: [
          {
            type: 'RADIO',
            key: 'fields.radio',
            label: 'dynamic_form.radio_field',
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
          {
            type: 'DROPDOWN',
            key: 'fields.dropdown',
            label: 'dynamic_form.dropdown_field',
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
        ],
      },
      {
        key: 'fields.date_and_date_range_section',
        title: 'Date and date range fields section',
        items: [
          { type: 'DATE', key: 'fields.date', label: 'Date field', dateInputFormat: 'ddMMMyy' },
          {
            type: 'DATE',
            key: 'fields.dateRequired',
            label: 'Date field (required)',
            required: true,
            dateInputFormat: 'ddMMMyy',
          },
          { type: 'DATE_RANGE', key: 'fields.dateRange', label: 'Date range field', dateInputFormat: 'dd MMM yy' },
          {
            type: 'DATE_RANGE',
            key: 'fields.dateRange_required',
            label: 'Date range field (required)',
            required: true,
            dateInputFormat: 'dd MMM yy',
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  const isStartDateBeforeEndDate = (dateRange: LocalDateRange) => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return false;
    }
    return isAfter(dateRange.startDate as Date, dateRange.endDate as Date);
  };

  const sectionsWithDateFns = useDynamicFormConfig([fieldsConfig], {
    fieldHelpers: {
      DATE: { dateValidatorFn: isValid },
      DATE_RANGE: { dateValidatorFn: isValid, isStartDateBeforeEndDate },
    },
  });

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DynamicForm
            sections={sectionsWithDateFns}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
```

### CustomField

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

### DescriptionConfig

```tsx
const initialValue = {};
  const descriptionConfig: DynamicFormSection = {
    key: 'description_section',
    title: 'Description section',
    description: longText,
    sections: [
      { key: 'section_without_description', title: 'Section without description' },
      { key: 'sections_with_description', title: 'Section with description', description: longText },
      {
        key: 'description.fields',
        title: 'Fields with description',
        description: 'Most of the fields place the description under the label.',
        items: [
          {
            type: 'CHECKBOX_GROUP',
            key: 'description.checkboxgroup',
            label: 'dynamic_form.checkbox_group_field',
            description: longText,
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
          { type: 'TEXT', key: 'description.text', label: 'dynamic_form.text_field', description: longText },
          {
            type: 'NUMBER',
            key: 'description.number',
            label: 'dynamic_form.number_field',
            description: longText,
            step: 5,
          },
          {
            type: 'RADIO',
            key: 'description.radio',
            label: 'dynamic_form.radio_field',
            description: longText,
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
          {
            type: 'DROPDOWN',
            key: 'description.dropdown',
            label: 'dynamic_form.dropdown_field',
            description: longText,
            options: [
              { label: 'dynamic_form.options.option1', value: 'option1' },
              { label: 'dynamic_form.options.option2', value: 'option2' },
              { label: 'dynamic_form.options.option3', value: 'option3' },
            ],
          },
          {
            type: 'DATE',
            key: 'description.date',
            label: 'Date field',
            dateInputFormat: 'ddMMMyy',
            description: longText,
            required: true,
          },
          {
            type: 'DATE_RANGE',
            key: 'description.dateRange',
            label: 'Date range field',
            dateInputFormat: 'ddMMMyy',
            description: longText,
            required: true,
          },
        ],
      },
      {
        key: 'description.exception_field',
        title: 'Exception fields with description',
        items: [
          {
            type: 'CHECKBOX',
            key: 'description.fields.checkboxwithdescription',
            label: 'dynamic_form.checkbox_field',
            description:
              'If you add a description to a checkbox field, it uses the description next to the checkbox and places the label above the field',
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  const isStartDateBeforeEndDate = (dateRange: LocalDateRange) => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return false;
    }
    return isAfter(dateRange.startDate as Date, dateRange.endDate as Date);
  };

  const sectionsWithDateFns = useDynamicFormConfig([descriptionConfig], {
    fieldHelpers: {
      DATE: { dateValidatorFn: isValid },
      DATE_RANGE: { dateValidatorFn: isValid, isStartDateBeforeEndDate },
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Card>
        <CardContent>
          <DynamicForm
            sections={sectionsWithDateFns}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
```

### ExtraProps

```tsx
const initialValue = { text1: '' };
  const extraPropsConfig: DynamicFormSection = {
    key: 'extraProps',
    title:
      'With extraProps the default fields can be customized in a way that is not possible with the default configuration options',
    items: [
      {
        type: 'TEXT',
        key: 'text1',
        label: 'Customized text field',
        extraProps: {
          multiline: true,
          rows: 4,
          placeholder: 'With extra props the field will be multiline with 4 rows',
        },
      },
    ],
  };
  const handleChange = action('change');
  return (
    <Card>
      <CardContent>
        <DynamicForm
          sections={[extraPropsConfig]}
          initialValue={initialValue}
          onChange={handleChange}
          disableSection={false}
          size="small"
        />
      </CardContent>
    </Card>
  );
```

### FieldOverrides

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

### HideSectionTitleAndDescription

```tsx
const initialValue = {};
  const itemsOnlyConfig: DynamicFormSection = {
    key: 'section.level_1',
    title: 'dynamic_form.sections.level_1',
    description: 'It uses different header size depending on the depth of the nested section.',
    sections: [
      {
        key: 'section.level_2_item_only',
        title: 'Show only fields items',
        description: 'You can add the hideTitle: true and hideDescription: true properties to the section.',
        sections: [
          {
            key: 'section.level_3',
            title: 'dynamic_form.sections.level_3',
            items: [{ type: 'CHECKBOX', key: 'checkbox_level_3', label: 'Checkbox level 3' }],
            hideTitle: true,
            hideDescription: true,
            sections: [
              {
                key: 'section.level_4',
                title: 'dynamic_form.sections.level_4',
                items: [{ type: 'CHECKBOX', key: 'checkbox_level_4', label: 'Checkbox level 4' }],
                hideTitle: true,
                hideDescription: true,
                sections: [
                  {
                    key: 'section.level_5',
                    title: 'dynamic_form.sections.level_5',
                    items: [{ type: 'CHECKBOX', key: 'checkbox_level_5', label: 'Checkbox level 5' }],
                    hideTitle: true,
                    hideDescription: true,
                    sections: [
                      {
                        key: 'section.level_6',
                        title: 'dynamic_form.sections.level_6',
                        description: 'After the 6th nested section, the size is the same as the 6th size.',
                        items: [{ type: 'CHECKBOX', key: 'checkbox_level_6', label: 'Checkbox level 6' }],
                        hideTitle: true,
                        hideDescription: true,
                        sections: [
                          {
                            key: 'section.level_7',
                            title: 'dynamic_form.sections.level_7',
                            items: [{ type: 'CHECKBOX', key: 'checkbox_level_7', label: 'Checkbox level 7' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  return (
    <Card>
      <CardContent>
        <DynamicForm
          sections={[itemsOnlyConfig]}
          initialValue={initialValue}
          onChange={handleChange}
          disableSection={false}
          size="small"
        />
      </CardContent>
    </Card>
  );
```

### PlacementParameter

**PlacementConfig**

```tsx
const initialValue = {
    placement: {
      fields: {
        text1: 'test',
        text2: '',
        text3: '',
        text4: '',
      },
    },
  };

  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget vestibulum ex. Vivamus sit amet lacinia nulla. Curabitur eu libero non nulla venenatis interdum. Curabitur ac blandit risus, ut fermentum nibh. Aliquam erat volutpat.';
  const placementConfig: DynamicFormSection = {
    key: 'placement_section',
    title: 'Placement section',
    description:
      'It uses columns. Column widths are integer values between 1 and 12 and these indicates how many columns are occupied by the fields.',
    items: [
      { type: 'TEXT', key: 'placement.fields.text1', label: 'Text field - col 7', description, cols: 7 },
      { type: 'TEXT', key: 'placement.fields.text2', label: 'Text field - col 5', description, cols: 5 },
      { type: 'TEXT', key: 'placement.fields.text3', label: 'Text field - col 7', description, cols: 7 },
      { type: 'TEXT', key: 'placement.fields.text4', label: 'Text field - col 6', description, cols: 6 },
    ],
  };

  const handleChange = action('change');

  return (
    <Card>
      <CardContent>
        <DynamicForm
          sections={[placementConfig]}
          initialValue={initialValue}
          onChange={handleChange}
          disableSection={false}
          size="small"
        />
      </CardContent>
    </Card>
  );
```

### ReadOnlyConfig

```tsx
const exampleAirports = useMemo(
    () => [
      { value: 'BBB', label: 'BENSON' },
      { value: 'BBA', label: 'BALMACEDA' },
      { value: 'SCQ', label: 'SANTIAGO DE COMPOSTELA' },
      { value: 'SCU', label: 'SANTIAGO DE CUBA' },
      { value: 'BBD', label: 'BRADY' },
      { value: 'SCR', label: 'SALEN' },
      { value: 'BBE', label: 'BUENOS AIRES FLUVIAL BUS STATI' },
    ],
    [],
  );
  const initialValue = useMemo(
    () => ({
      readOnly: {
        text: 'ReadOnly text',
        number: 100,
        dropdown: 'option2',
        chip: ['BBA', 'SCQ'],
        date: ACTUAL_DATE,
        dateRange: { startDate: ACTUAL_DATE, endDate: ACTUAL_DATE_END },
      },
    }),
    [],
  );

  const readOnlyFormConfig: DynamicFormSection = useMemo(
    () => ({
      key: 'readOnly',
      title: 'ReadOnly section',
      items: [
        { type: 'TEXT', key: 'readOnly.text', label: 'dynamic_form.text_field', readOnly: true },
        { type: 'NUMBER', key: 'readOnly.number', label: 'dynamic_form.number_field', readOnly: true },
        {
          type: 'DROPDOWN',
          key: 'readOnly.dropdown',
          label: 'dynamic_form.dropdown_field',
          options: [
            { label: 'dynamic_form.options.option1', value: 'option1' },
            { label: 'dynamic_form.options.option2', value: 'option2' },
            { label: 'dynamic_form.options.option3', value: 'option3' },
          ],
          readOnly: true,
        },
        {
          type: 'CHIP',
          key: 'readOnly.chip',
          label: 'dynamic_form.chip_field',
          options: exampleAirports,
          readOnly: true,
        },
        { type: 'DATE', key: 'readOnly.date', label: 'Date field', dateInputFormat: 'ddMMMyy', readOnly: true },
        {
          type: 'DATE_RANGE',
          key: 'readOnly.dateRange',
          label: 'Date range field',
          dateInputFormat: 'ddMMMyy',
          readOnly: true,
        },
      ],
    }),
    [exampleAirports],
  );

  const handleChange = action('change');

  const isStartDateBeforeEndDate = (dateRange: LocalDateRange) => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return false;
    }
    return isAfter(dateRange.startDate as Date, dateRange.endDate as Date);
  };

  const sectionsWithDateFns = useDynamicFormConfig([readOnlyFormConfig], {
    fieldHelpers: {
      DATE: { dateValidatorFn: isValid },
      DATE_RANGE: { dateValidatorFn: isValid, isStartDateBeforeEndDate },
    },
  });

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DynamicForm
            sections={sectionsWithDateFns}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
```

### Sections

```tsx
const initialValue = {};
  const sectionsConfig: DynamicFormSection = {
    key: 'section.level_1',
    title: 'dynamic_form.sections.level_1',
    description: 'It uses different header size depending on the depth of the nested section.',
    sections: [
      {
        key: 'section.level_2',
        title: 'Show section header and description (Level 2)',
        sections: [
          {
            key: 'section.level_3',
            title: 'dynamic_form.sections.level_3',
            items: [{ type: 'CHECKBOX', key: 'checkbox_level_3', label: 'Checkbox level 3' }],
            sections: [
              {
                key: 'section.level_4',
                title: 'dynamic_form.sections.level_4',
                items: [{ type: 'CHECKBOX', key: 'checkbox_level_4', label: 'Checkbox level 4' }],
                sections: [
                  {
                    key: 'section.level_5',
                    title: 'dynamic_form.sections.level_5',
                    items: [{ type: 'CHECKBOX', key: 'checkbox_level_5', label: 'Checkbox level 5' }],
                    sections: [
                      {
                        key: 'section.level_6',
                        title: 'dynamic_form.sections.level_6',
                        description: 'After the 6th nested section, the size is the same as the 6th size.',
                        items: [{ type: 'CHECKBOX', key: 'checkbox_level_6', label: 'Checkbox level 6' }],
                        sections: [
                          {
                            key: 'section.level_7',
                            title: 'dynamic_form.sections.level_7',
                            items: [{ type: 'CHECKBOX', key: 'checkbox_level_7', label: 'Checkbox level 7' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DynamicForm
            sections={[sectionsConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
```

### VisibilityConfig

```tsx
const initialValue = { visibility: { text1: 'sho' } };

  const visibilityConfig: DynamicFormSection = {
    key: 'visibility_section',
    title: 'Visibility section',
    items: [
      { type: 'TEXT', key: 'visibility.text1', label: 'Write "show" to this field to make visible the other field.' },
      {
        type: 'TEXT',
        key: 'visibility.text2',
        label: 'Other field',
        visible: (formValue: { visibility: { text1: string } }) => formValue?.visibility?.text1 === 'show',
      },
    ],
  };

  const handleChange = action('change');

  return (
    <Card>
      <CardContent>
        <DynamicForm
          sections={[visibilityConfig]}
          initialValue={initialValue}
          onChange={handleChange}
          disableSection={false}
          size="small"
        />
      </CardContent>
    </Card>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
