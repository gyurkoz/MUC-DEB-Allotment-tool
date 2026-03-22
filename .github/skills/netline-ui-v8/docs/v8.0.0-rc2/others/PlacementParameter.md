# Placement Parameter

Placement Parameter component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { PlacementParameter } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
