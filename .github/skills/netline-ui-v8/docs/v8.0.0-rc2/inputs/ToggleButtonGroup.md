# Toggle Button Group

Toggle Button Group component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: ToggleButtonGroup

## Description

This component is a wrapper of Materal UI `ToggleButtonGroup` component.

There are two small changes:
- By default, the `exclusive` prop is set to `true`.
- Only added value is that in `exclusive` the mouse click will be ignored if the button is already clicked.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ToggleButtonGroup } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [selected, setSelected] = useState(1);
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  const label = text('Label', 'Toggle button');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={2} />
        <Grid size={5} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={5} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Enabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Enabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Disabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={12} />
        <Grid size={12} />
        <Grid size={12} />

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Enabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Enabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Disabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Disabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Inverse
- Disabled
- Small
- Medium

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `oneOf` |  | The size of the toggle button group and its children. @default 'small' |
| `variant` | `oneOf` |  | The variant of the group and its children. 'normal' for the default style, 'inverse' for the inverse style. @default 'normal' |

## Examples

### ToggleButtonGroup

```tsx
const [selected, setSelected] = useState(1);
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  const label = text('Label', 'Toggle button');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={2} />
        <Grid size={5} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={5} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Enabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Enabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Disabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={12} />
        <Grid size={12} />
        <Grid size={12} />

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Enabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Enabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Disabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Disabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
```

### ToggleButtonGroupMultipleSelect

```tsx
const [selectedMultiple, setMultipleSelected] = useState([3]);
  const handleMultipleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    setMultipleSelected(value);
  });

  const label = text('Label', 'Toggle button');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={6} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={6} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={6}>
          <ToggleButtonGroup value={selectedMultiple} onChange={handleMultipleChange} size="small" exclusive={false}>
            <ToggleButton value={1} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={6}>
          <ToggleButtonGroup value={selectedMultiple} onChange={handleMultipleChange} size="medium" exclusive={false}>
            <ToggleButton value={1} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
```

### Sample

```tsx
const [selected, setSelected] = useState(1);
  const handleChange = (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  };

  const label = text('Label', 'Toggle button');

  return (
    <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
      <ToggleButton value={1} size="small" Icon={FavoriteIcon}>
        {label}
      </ToggleButton>
      <ToggleButton value={2} size="small" Icon={FavoriteIcon}>
        {label}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
Sample.tags = ['hideInSidebar'];
Sample.parameters = {
  viewport: { width: 480 },
};

export const ToggleButtonGroupStory: StoryFn = () => {
  const [selected, setSelected] = useState(1);
  const handleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    if (value === null) {
      return;
    }
    setSelected(value);
  });

  const label = text('Label', 'Toggle button');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={2} />
        <Grid size={5} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={5} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Enabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Enabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Disabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Disabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled>
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={12} />
        <Grid size={12} />
        <Grid size={12} />

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Enabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Enabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Disabled
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid size={2} alignContent="center" component={Typography} variant="subtitle2">
          Inverse Disabled icon only
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="small" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
        <Grid size={5}>
          <ToggleButtonGroup value={selected} onChange={handleChange} size="medium" disabled variant="inverse">
            <ToggleButton value={1} Icon={FavoriteIcon} />
            <ToggleButton value={2} Icon={FavoriteIcon} />
            <ToggleButton value={3} Icon={FavoriteIcon} />
            <ToggleButton value={4} Icon={FavoriteIcon} />
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};
ToggleButtonGroupStory.storyName = 'Variants and Statuses';
ToggleButtonGroupStory.parameters = {
  viewport: {
    width: 1920,
  },
};

export const ToggleButtonGroupMultipleSelect: StoryFn = () => {
  const [selectedMultiple, setMultipleSelected] = useState([3]);
  const handleMultipleChange = useActionCallback('onChange', (event: MouseEvent<HTMLElement>, value: any) => {
    setMultipleSelected(value);
  });

  const label = text('Label', 'Toggle button');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={6} alignContent="center" component={Typography} variant="subtitle2">
          Small
        </Grid>
        <Grid size={6} alignContent="center" component={Typography} variant="subtitle2">
          Medium
        </Grid>

        <Grid size={6}>
          <ToggleButtonGroup value={selectedMultiple} onChange={handleMultipleChange} size="small" exclusive={false}>
            <ToggleButton value={1} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} size="small" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid size={6}>
          <ToggleButtonGroup value={selectedMultiple} onChange={handleMultipleChange} size="medium" exclusive={false}>
            <ToggleButton value={1} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={2} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={3} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
            <ToggleButton value={4} size="medium" Icon={FavoriteIcon}>
              {label}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};
ToggleButtonGroupMultipleSelect.storyName = 'Multiple Select';
ToggleButtonGroupMultipleSelect.parameters = {
  viewport: {
    width: 1920,
  },
};
export default {
  title: 'Inputs & controls/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  subcomponents: { ToggleButton },
  decorators: [withKnobs],
```

## MUI Reference

This component is based on Material-UI's ToggleButtonGroup.

For additional props and detailed API documentation, refer to:

- [MUI ToggleButtonGroup Documentation](https://mui.com/material-ui/api/togglebuttongroup/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
