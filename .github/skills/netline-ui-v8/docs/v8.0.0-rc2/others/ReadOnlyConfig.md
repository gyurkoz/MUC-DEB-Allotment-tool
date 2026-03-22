# Read Only Config

Read Only Config component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ReadOnlyConfig } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
