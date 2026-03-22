# Description Config

Description Config component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DescriptionConfig } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
