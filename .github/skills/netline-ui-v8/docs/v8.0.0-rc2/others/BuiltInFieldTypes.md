# Built In Field Types

Built In Field Types component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { BuiltInFieldTypes } from '@lsy-netline/netline-ui';
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

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
