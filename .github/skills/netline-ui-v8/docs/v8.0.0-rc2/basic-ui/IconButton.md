# Icon Button

Icon Button component

## Overview

- **Category**: basic-ui
- **Base Library**: mui
- **MUI Component**: IconButton

## Description

__Note__: the interface differs from the material-ui IconButton interface.

The `inverse` prop adds only a css class. <br />
The `variant` prop uses the `variant` property from ButtonProps.<br />
"contained" = primary
"outlined" = secondary
"text" = default

Any prop can be overriden.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { IconButton } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<IconButton title="Small, default, enabled" size="small">
      <FavoriteIcon />
    </IconButton>
    <IconButton title="Normal, default, enabled">
      <FavoriteIcon />
    </IconButton>
    <IconButton title="Normal, default, disabled" disabled>
      <FavoriteIcon />
    </IconButton>
  </div>
```

## Variants

- Disabled
- Small
- Inverse
- Extra Small
- Small
- Medium
- Large
- Inverse
- Disabled

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | The icon to display. |
| `className` | `string` |  | @Empty, Please add a description to the property |
| `inverse` | `bool` |  | @Empty, Please add a description to the property |
| `variant` | `oneOf` |  | @Empty, Please add a description to the property |
| `title` | `string` |  | @Empty, Please add a description to the property |
| `TooltipProps` | `object` |  | @Empty, Please add a description to the property |

## Examples

### Sample

```tsx
<IconButton title="Small, default, enabled" size="small">
      <FavoriteIcon />
    </IconButton>
    <IconButton title="Normal, default, enabled">
      <FavoriteIcon />
    </IconButton>
    <IconButton title="Normal, default, disabled" disabled>
      <FavoriteIcon />
    </IconButton>
  </div>
```

### Sizes

```tsx
const handleClick = action('onClick');

  return (
    <>
      <Container padding>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Sizes - Primary color
          </Grid>
          <Grid size={1} />
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Large
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Medium
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Small
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Extra small
          </Grid>
          <Grid size={7} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="large" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="medium" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="small" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="extraSmall" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={7} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="large" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="medium" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="small" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="extraSmall" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={7} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="large" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="medium" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="small" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="extraSmall" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={7} />
        </Grid>
      </Container>
      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Sizes - Inverse color
          </Grid>
          <Grid size={1} />
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Large
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Medium
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Small
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Extra small
          </Grid>
          <Grid size={7} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="large" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="medium" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="small" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" size="extraSmall" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={7} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="large" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="medium" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="small" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" size="extraSmall" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={7} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="large" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="medium" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="small" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton size="extraSmall" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={7} />
        </Grid>
      </Container>
    </>
  );
```

### Statuses

```tsx
const handleClick = action('onClick');

  return (
    <>
      <Container padding>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Statuses - Primary color
          </Grid>
          <Grid size={1} />
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Default
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Hovered
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Focused
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Pressed
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Disabled
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Progressed
          </Grid>
          <Grid size={5} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" className="hovered" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" className={buttonClasses.focusVisible} onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" className="pressed" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" disabled onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading>
              <IconButton variant="contained" disabled onClick={handleClick}>
                <FavoriteIcon />
              </IconButton>
            </CircularProgressWrapper>
          </Grid>
          <Grid size={5} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" className="hovered" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" className={buttonClasses.focusVisible} onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" className="pressed" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" disabled onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading>
              <IconButton variant="outlined" disabled onClick={handleClick}>
                <FavoriteIcon />
              </IconButton>
            </CircularProgressWrapper>
          </Grid>
          <Grid size={5} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton className="hovered" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton className={buttonClasses.focusVisible} onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton className="pressed" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton disabled onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading>
              <IconButton disabled onClick={handleClick}>
                <FavoriteIcon />
              </IconButton>
            </CircularProgressWrapper>
          </Grid>
          <Grid size={5} />
        </Grid>
      </Container>

      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Statuses - Inverse color
          </Grid>
          <Grid size={1} />
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Default
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Hovered
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Focused
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Pressed
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Disabled
          </Grid>
          <Grid size={1} component={Typography} variant="subtitle2" align="center">
            Progressed
          </Grid>
          <Grid size={5} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" className="hovered" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" inverse className={buttonClasses.focusVisible} onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" inverse className="pressed" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="contained" inverse disabled onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading inverse>
              <IconButton variant="contained" inverse disabled onClick={handleClick}>
                <FavoriteIcon />
              </IconButton>
            </CircularProgressWrapper>
          </Grid>
          <Grid size={5} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" inverse className="hovered" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" inverse className={buttonClasses.focusVisible} onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" inverse className="pressed" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton variant="outlined" inverse disabled onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading inverse>
              <IconButton variant="outlined" inverse disabled onClick={handleClick}>
                <FavoriteIcon />
              </IconButton>
            </CircularProgressWrapper>
          </Grid>
          <Grid size={5} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton inverse onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton inverse className="hovered" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton inverse className={buttonClasses.focusVisible} onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton inverse className="pressed" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <IconButton inverse disabled onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid size={1} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading inverse>
              <IconButton inverse disabled onClick={handleClick}>
                <FavoriteIcon />
              </IconButton>
            </CircularProgressWrapper>
          </Grid>
          <Grid size={5} />
        </Grid>
      </Container>
    </>
  );
```

## MUI Reference

This component is based on Material-UI's IconButton.

For additional props and detailed API documentation, refer to:

- [MUI IconButton Documentation](https://mui.com/material-ui/api/iconbutton/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
