# Button

Button component

## Overview

- **Category**: basic-ui
- **Base Library**: mui
- **MUI Component**: Button

## Description

__Note__: the interface differs from the material-ui Button interface.

The buttons in the stories use `inverse`, `primary` and `secondary` props,<br/>
`color` and `variant` material-ui props are set internally.<br/>
However, any prop can be overriden.

There is an additional prop compared to the material-ui Button component: `TooltipProps`.
`title` prop is added to the button as Tooltip. `TooltipProps` can be used to customize
it.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Button } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
{
play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).not.toHaveClass('MuiButton-containedPrimary');

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalled();
  },
}
```

## Variants

- Inverse
- Inverse
- Disabled
- Extra Small
- Small
- Medium
- Large
- Inverse
- Extra Small
- Small
- Medium
- Large
- Inverse
- Disabled
- Inverse
- Extra Small
- Small
- Medium
- Large

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | The content of the component. |
| `className` | `string` |  | @Empty, Please add a description to the property |
| `inverse` | `bool` |  | Whether to display the button in inverse or normal mode. |
| `title` | `node` |  | The content of the Tooltip component when it is rendered. |
| `TooltipProps` | `object` |  | The extra props applied on the Tooltip component. |

## Examples

### Tests

**Submitted**

```tsx
{
play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).not.toHaveClass('MuiButton-containedPrimary');

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalled();
  },
}
```

**Styling**

```tsx
{
args: {
    variant: 'contained',
    className: 'custom-class',
    inverse: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('MuiButton-containedPrimary');
    expect(button).toHaveClass('Button-inverse');
  },
}
```

**Tooltip**

```tsx
{
args: {
    title: tooltipText,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(within(body).queryByText(tooltipText)).not.toBeInTheDocument();

    await userEvent.hover(button);

    expect(await within(body).findByText(tooltipText)).toBeInTheDocument();
  },
}
```

### Sizes

```tsx
const buttonText = text('Label', 'Button');
  const handleClick = action('onClick');

  return (
    <>
      <Container padding>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Sizes - Primary color
          </Grid>
          <Grid size={1} />
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Large
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Medium
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Small
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Extra small
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="large" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="medium" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="small" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="extraSmall" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="large" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="medium" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="small" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="extraSmall" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="large" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="medium" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="small" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="extraSmall" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />
        </Grid>
      </Container>
      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Sizes - Inverse color
          </Grid>
          <Grid size={1} />
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Large
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Medium
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Small
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Extra small
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="large" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="medium" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="small" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="extraSmall" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="large" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="medium" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="small" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="extraSmall" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="large" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="medium" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="small" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="extraSmall" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />
        </Grid>
      </Container>
    </>
  );
```

### Statuses

```tsx
const buttonText = text('Label', 'Button');
  const handleClick = action('onClick');

  return (
    <>
      <Container padding>
        <Grid container spacing={2} alignItems="center" columns={13}>
          <Grid size={13} component={Typography} variant="subtitle1">
            Statuses - Primary color
          </Grid>
          <Grid size={1} />
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Default
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Hovered
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Focused
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Pressed
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Disabled
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Progressed
          </Grid>

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" className="hovered" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" className={buttonClasses.focusVisible} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" className="pressed" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" disabled onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading>
              <Button variant="contained" disabled onClick={handleClick}>
                {buttonText}
              </Button>
            </CircularProgressWrapper>
          </Grid>

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" className="hovered" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" className={buttonClasses.focusVisible} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" className="pressed" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" disabled onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading>
              <Button variant="outlined" disabled onClick={handleClick}>
                {buttonText}
              </Button>
            </CircularProgressWrapper>
          </Grid>

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button onClick={handleClick}>{buttonText}</Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button className="hovered" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button className={buttonClasses.focusVisible} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button className="pressed" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button disabled onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading>
              <Button disabled onClick={handleClick}>
                {buttonText}
              </Button>
            </CircularProgressWrapper>
          </Grid>
        </Grid>
      </Container>

      <Container padding inverse>
        <Grid container spacing={2} alignItems="center" columns={13}>
          <Grid size={13} component={Typography} variant="subtitle1">
            Statuses - Inverse color
          </Grid>
          <Grid size={1} />
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Default
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Hovered
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Focused
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Pressed
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Disabled
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Progressed
          </Grid>

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" className="hovered" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" inverse className={buttonClasses.focusVisible} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" inverse className="pressed" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" inverse disabled onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading inverse>
              <Button variant="contained" inverse disabled onClick={handleClick}>
                {buttonText}
              </Button>
            </CircularProgressWrapper>
          </Grid>

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" inverse className="hovered" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" inverse className={buttonClasses.focusVisible} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" inverse className="pressed" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" inverse disabled onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading inverse>
              <Button variant="outlined" inverse disabled onClick={handleClick}>
                {buttonText}
              </Button>
            </CircularProgressWrapper>
          </Grid>

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button inverse className="hovered" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button inverse className={buttonClasses.focusVisible} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button inverse className="pressed" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button inverse disabled onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <CircularProgressWrapper progressProps={{ value: 75, variant: 'determinate' }} loading inverse>
              <Button inverse disabled onClick={handleClick}>
                {buttonText}
              </Button>
            </CircularProgressWrapper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
```

### WithIcons

```tsx
const buttonText = text('Label', 'Button');
  const handleClick = action('onClick');

  return (
    <>
      <Container padding>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Buttons with icons - Primary color
          </Grid>
          <Grid size={1} />
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Large
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Medium
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Small
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Extra small
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="medium" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="small" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="extraSmall" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="large" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="medium" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="small" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="extraSmall" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="large" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="medium" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="small" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="extraSmall" startIcon={<FavoriteIcon />} onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />
        </Grid>
      </Container>
      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Buttons with icons - Inverse color
          </Grid>
          <Grid size={1} />
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Large
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Medium
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Small
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Extra small
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="large" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="medium" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="small" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="contained" size="extraSmall" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="large" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="medium" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="small" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button variant="outlined" size="extraSmall" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="large" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="medium" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="small" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <Button size="extraSmall" startIcon={<FavoriteIcon />} inverse onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
          <Grid size={3} />
        </Grid>
      </Container>
    </>
  );
```

## MUI Reference

This component is based on Material-UI's Button.

For additional props and detailed API documentation, refer to:

- [MUI Button Documentation](https://mui.com/material-ui/api/button/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int/?path=/docs/inputs-button--docs)
