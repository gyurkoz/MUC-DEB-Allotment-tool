# Toggle Button Group Field

Toggle Button Group Field component

## Overview

- **Category**: inputs
- **Base Library**: custom

## Description

Displays toggle buttons with label and helper text as a controlled field.

## Inheritance

All non-enumeraded props are passed to the wrapping `FormControl` API:
 - https://material-ui.com/api/form-control/#formcontrol-api

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ToggleButtonGroupField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [selected, setSelected] = useState(1);
  const [selectedMultiple, setMultipleSelected] = useState([1, 3]);
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  const handleMultipleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    setMultipleSelected(value);
  });

  const fieldLabel = text('Field label', 'Label');
  const label = text('Button label', 'Category');
  const helperText = text('Helper text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit');
  const errorText = text('Error text', 'Invalid field selection!');
  const items = [
    {
      value: 1,
      label: `${label} 1`,
    },
    {
      value: 2,
      label: `${label} 2`,
    },
    {
      value: 3,
      label: `${label} 3`,
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Default
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selected}
                onChange={handleChange}
                items={items}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selected}
                onChange={handleChange}
                items={items}
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Disabled
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} size="small" disabled />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} disabled size="medium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Multiple choice
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selectedMultiple}
                onChange={handleMultipleChange}
                exclusive={false}
                items={items}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selectedMultiple}
                onChange={handleMultipleChange}
                exclusive={false}
                items={items}
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              With helper
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} size="small" helperText={helperText} />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={helperText}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Error
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="small"
                helperText={errorText}
                error
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={errorText}
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Inline Error
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="small"
                helperText={errorText}
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={12} style={{ marginTop: 22 }}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={errorText}
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Disabled
- Small
- Medium

## Examples

### VariantsAndStatuses

```tsx
const [selected, setSelected] = useState(1);
  const [selectedMultiple, setMultipleSelected] = useState([1, 3]);
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  const handleMultipleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    setMultipleSelected(value);
  });

  const fieldLabel = text('Field label', 'Label');
  const label = text('Button label', 'Category');
  const helperText = text('Helper text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit');
  const errorText = text('Error text', 'Invalid field selection!');
  const items = [
    {
      value: 1,
      label: `${label} 1`,
    },
    {
      value: 2,
      label: `${label} 2`,
    },
    {
      value: 3,
      label: `${label} 3`,
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Default
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selected}
                onChange={handleChange}
                items={items}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selected}
                onChange={handleChange}
                items={items}
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Disabled
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} size="small" disabled />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} disabled size="medium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Multiple choice
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selectedMultiple}
                onChange={handleMultipleChange}
                exclusive={false}
                items={items}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selectedMultiple}
                onChange={handleMultipleChange}
                exclusive={false}
                items={items}
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              With helper
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} size="small" helperText={helperText} />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={helperText}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Error
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="small"
                helperText={errorText}
                error
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={errorText}
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Inline Error
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="small"
                helperText={errorText}
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={12} style={{ marginTop: 22 }}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={errorText}
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

### Sample

```tsx
const [selected, setSelected] = useState('1');
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  return (
    <ToggleButtonGroupField value={selected} onChange={handleChange}>
      <ToggleButton value="1">Category 1</ToggleButton>
      <ToggleButton value="2">Category 2</ToggleButton>
    </ToggleButtonGroupField>
  );
};
Sample.tags = ['hideInSidebar'];
Sample.parameters = {
  viewport: { width: 240 },
};

export const VariantsAndStatuses: StoryFn = () => {
  const [selected, setSelected] = useState(1);
  const [selectedMultiple, setMultipleSelected] = useState([1, 3]);
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  const handleMultipleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    setMultipleSelected(value);
  });

  const fieldLabel = text('Field label', 'Label');
  const label = text('Button label', 'Category');
  const helperText = text('Helper text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit');
  const errorText = text('Error text', 'Invalid field selection!');
  const items = [
    {
      value: 1,
      label: `${label} 1`,
    },
    {
      value: 2,
      label: `${label} 2`,
    },
    {
      value: 3,
      label: `${label} 3`,
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Default
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selected}
                onChange={handleChange}
                items={items}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selected}
                onChange={handleChange}
                items={items}
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Disabled
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} size="small" disabled />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} disabled size="medium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Multiple choice
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selectedMultiple}
                onChange={handleMultipleChange}
                exclusive={false}
                items={items}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={selectedMultiple}
                onChange={handleMultipleChange}
                exclusive={false}
                items={items}
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              With helper
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField label={fieldLabel} value={2} items={items} size="small" helperText={helperText} />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={helperText}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Error
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="small"
                helperText={errorText}
                error
              />
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={errorText}
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12} component={Typography} variant="subtitle2">
              Inline Error
            </Grid>
            <Grid size={12}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="small"
                helperText={errorText}
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={12} style={{ marginTop: 22 }}>
              <ToggleButtonGroupField
                label={fieldLabel}
                value={2}
                items={items}
                size="medium"
                helperText={errorText}
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
VariantsAndStatuses.storyName = 'Variants and Statuses';
VariantsAndStatuses.parameters = {
  viewport: {
    width: 1440,
  },
};

export default {
  title: 'Inputs & controls/ToggleButton/ToggleButtonGroupField',
  component: ToggleButtonGroupField,
  subcomponents: { ToggleButtonGroup, ToggleButton },
  decorators: [withKnobs],
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
