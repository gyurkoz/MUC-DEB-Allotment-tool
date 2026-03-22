# Visibility Config

Visibility Config component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { VisibilityConfig } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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
