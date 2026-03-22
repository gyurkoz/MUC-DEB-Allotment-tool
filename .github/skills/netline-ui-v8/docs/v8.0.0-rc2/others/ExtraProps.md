# Extra Props

Extra Props component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ExtraProps } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
