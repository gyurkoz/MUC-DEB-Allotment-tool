# Day Pattern Field

Day Pattern Field component

## Overview

- **Category**: inputs
- **Base Library**: custom

## Description

The component does not store state internally.<br />
`all`, `invert`, `none` props determine whether to display the given buttons

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DayPatternField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState(weekDays);

  const handleChange = useActionCallback('onChange', (event: React.MouseEvent<HTMLButtonElement>, newValue: Days) => {
    setValue(newValue);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                helperText="Invalid value"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                helperText="Invalid value"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error (with long label)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Very long labels are displayed with ellipsis as it does not fit into the view"
                value={value}
                onChange={handleChange}
                size="small"
                all
                invert
                none
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Very long labels are displayed with ellipsis as it does not fit into the view"
                value={value}
                onChange={handleChange}
                all
                invert
                none
                helperText="Invalid value"
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

- Small
- Small
- Disabled
- Small
- Medium
- Small
- Medium

## Examples

### Errors

```tsx
const [value, setValue] = useState(weekDays);

  const handleChange = useActionCallback('onChange', (event: React.MouseEvent<HTMLButtonElement>, newValue: Days) => {
    setValue(newValue);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                helperText="Invalid value"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                helperText="Invalid value"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error (with long label)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Very long labels are displayed with ellipsis as it does not fit into the view"
                value={value}
                onChange={handleChange}
                size="small"
                all
                invert
                none
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Very long labels are displayed with ellipsis as it does not fit into the view"
                value={value}
                onChange={handleChange}
                all
                invert
                none
                helperText="Invalid value"
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

```tsx
const [value, setValue] = useState(weekDays);

  const handleChange = useActionCallback('onChange', (event: React.MouseEvent<HTMLButtonElement>, newValue: Days) => {
    setValue(newValue);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                helperText="Invalid value"
                error
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                helperText="Invalid value"
                error
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Working days"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Inline Error (with long label)
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Very long labels are displayed with ellipsis as it does not fit into the view"
                value={value}
                onChange={handleChange}
                size="small"
                all
                invert
                none
                helperText="Invalid value"
                error
                errorMode="label"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Very long labels are displayed with ellipsis as it does not fit into the view"
                value={value}
                onChange={handleChange}
                all
                invert
                none
                helperText="Invalid value"
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
const [value, setValue] = useState(weekDays);

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>, newValue: Days) => {
    setValue(newValue);
  };

  return <DayPatternField value={value} onChange={handleChange} />;
```

### Status

```tsx
const [value, setValue] = useState(weekDays);

  const handleChange = useActionCallback('onChange', (event: React.MouseEvent<HTMLButtonElement>, newValue: Days) => {
    setValue(newValue);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Default
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Label (small)"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField label="Label (medium)" value={value} onChange={handleChange} none all invert />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Label (small)"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                id="active"
                label="Label (medium)"
                value={value}
                onChange={handleChange}
                none
                all
                invert
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

### Variations

```tsx
const [value, setValue] = useState(weekDays);

  const handleChange = useActionCallback('onChange', (event: React.MouseEvent<HTMLButtonElement>, newValue: Days) => {
    setValue(newValue);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Required
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField
                label="Label (small)"
                value={value}
                onChange={handleChange}
                size="small"
                none
                all
                invert
                required
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField label="Label (medium)" value={value} onChange={handleChange} required none all invert />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Without control buttons
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField label="Label (small)" value={value} onChange={handleChange} size="small" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <DayPatternField id="active" label="Label (medium)" value={value} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
