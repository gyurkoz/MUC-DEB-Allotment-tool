# Menu Button

Menu Button component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Description

Props applied to Button element

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { MenuButton } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
{
args: {
    IconProps: { 'data-testid': 'my-test-id' },
  },
  play: async ({ canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('my-test-id').parentElement;

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('MuiButton-endIcon');
  },
}
```

## Variants

- Primary
- Disabled
- Primary
- Primary
- Inverse
- Extra Small
- Small
- Medium
- Large
- Primary
- Inverse
- Disabled

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `buttonProps` | `object` |  | Props applied to Button element |
| `children` | `node` |  | The content of the component. |
| `Icon` | `any` |  | Icon component to be shown as menu button. |
| `IconProps` | `any` |  | The props which will be applied to the `Icon` component. It has only effect when `Icon` or `type` prop is set |
| `text` | `node` |  | The text for the normal button component |

## Examples

### Tests

**IconWithProps**

```tsx
{
args: {
    IconProps: { 'data-testid': 'my-test-id' },
  },
  play: async ({ canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('my-test-id').parentElement;

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('MuiButton-endIcon');
  },
}
```

**TextRendered**

```tsx
{
args: {
    text: 'Sample',
  },
  play: async ({ canvasElement }: PlayArgs) => {
    const { body } = canvasElement.ownerDocument;

    expect(body.querySelectorAll('.MuiButton-root')).toHaveLength(1);
    expect(body.querySelectorAll('.MuiIconButton-root')).toHaveLength(0);
  },
}
```

**OnClick**

```tsx
{
args: {
    onClick: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();
  },
}
```

**OnClose**

```tsx
{
args: {
    onClose: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();

    const menuItem = body.querySelector('li.cls-1');
    await userEvent.click(menuItem as Element);

    expect(args.onClose).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();
  },
}
```

**OnMenuItemClick**

```tsx
{
args: {
    onClose: fn(),
    onMenuItemClick: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();

    const menuItem = body.querySelector('li.cls-1');
    expect(menuItem).toBeInTheDocument();

    await userEvent.click(menuItem as Element);

    expect(args.onMenuItemClick).toHaveBeenCalledWith(expect.anything(), menuItems[0]);
    expect(menuItems[0].onClick).toHaveBeenCalledTimes(1);
    expect(args.onClose).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();
  },
}
```

**MenuItemsRendered**

```tsx
{
args: {
    onClick: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('li.MuiMenuItem-root')).toHaveLength(2);
    expect(body.querySelectorAll('li.cls-1 .MuiSvgIcon-root')).toHaveLength(1);
    expect(body.querySelectorAll('li.cls-2 .MuiSvgIcon-root')).toHaveLength(0);
    expect(body.querySelectorAll('li.Mui-disabled')).toHaveLength(1);

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();
    expect(body.querySelector('li.cls-1 .MuiListItemText-root')).toHaveTextContent('text-1');
    expect(body.querySelector('li.cls-2 .MuiListItemText-root')).toHaveTextContent('text-2');
  },
}
```

**PreventDefaultClose**

```tsx
{
args: {
    menuItems: [
      {
        ...menuItems[0],
        onClick: fn((event) => {
          event.preventDefault();
        }),
      },
      menuItems[1],
    ],
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();

    const menuItem = body.querySelector('li.cls-1');
    expect(menuItem).toBeInTheDocument();

    await userEvent.click(menuItem as Element);

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();

    if (isArray(args.menuItems)) {
      expect(args.menuItems[0].onClick).toHaveBeenCalledTimes(1);
    } else {
      fail('menuItems is not an array');
    }
  },
}
```

**OpenFalsePreventsOpening**

```tsx
{
args: {
    open: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();
  },
}
```

**OpenTruePreventsClosing**

```tsx
{
args: {
    open: true,
    onClose: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const { body } = canvasElement.ownerDocument;

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();

    const menuItem = body.querySelector('li.cls-1');
    expect(menuItem).toBeInTheDocument();

    await userEvent.click(menuItem as Element);

    expect(args.onClose).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();
  },
}
```

### Sample

```tsx
<MenuButton text="Sample" menuItems={menuItems} variant="contained" />;
```

### Sizes

```tsx
const buttonText = text('Label', 'Open me!');
  const handleMenuItemClick = action('onMenuItemClick');
  const menuItems: MenuButtonProps['menuItems'] = [
    {
      primaryText: 'New Project',
    },
    {
      primaryText: 'New Task',
    },
  ];

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
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="large"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="medium"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="small"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="extraSmall"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="large"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="medium"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="small"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="extraSmall"
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text={buttonText} menuItems={menuItems} size="large" onMenuItemClick={handleMenuItemClick} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text={buttonText} menuItems={menuItems} size="medium" onMenuItemClick={handleMenuItemClick} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text={buttonText} menuItems={menuItems} size="small" onMenuItemClick={handleMenuItemClick} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              size="extraSmall"
              onMenuItemClick={handleMenuItemClick}
            />
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
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="large"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="medium"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="small"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="contained"
              size="extraSmall"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="large"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="medium"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="small"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              variant="outlined"
              size="extraSmall"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={3} />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              size="large"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              size="medium"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              size="small"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text={buttonText}
              menuItems={menuItems}
              size="extraSmall"
              inverse
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={3} />
        </Grid>
      </Container>
    </>
  );
```

### Statuses

```tsx
<>
      <Container padding>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
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
            Focus
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Pressed
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Disabled
          </Grid>
          <Grid size="grow" />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" className="hovered" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text="Open me!"
              menuItems={menuItems}
              variant="contained"
              className={buttonClasses.focusVisible}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" className="pressed" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" disabled />
          </Grid>
          <Grid size="grow" />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" className="hovered" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text="Open me!"
              menuItems={menuItems}
              variant="outlined"
              className={buttonClasses.focusVisible}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" className="pressed" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" disabled />
          </Grid>
          <Grid size="grow" />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} className="hovered" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} className={buttonClasses.focusVisible} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} className="pressed" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} disabled />
          </Grid>
          <Grid size="grow" />
        </Grid>
      </Container>
      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
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
            Focus
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Pressed
          </Grid>
          <Grid size={2} component={Typography} variant="subtitle2" align="center">
            Disabled
          </Grid>
          <Grid size="grow" />

          <Grid size={1} component={Typography} variant="subtitle2">
            Contained
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" inverse />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" className="hovered" inverse />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text="Open me!"
              menuItems={menuItems}
              variant="contained"
              inverse
              className={buttonClasses.focusVisible}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" inverse className="pressed" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="contained" inverse disabled />
          </Grid>
          <Grid size="grow" />

          <Grid size={1} component={Typography} variant="subtitle2">
            Outlined
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" inverse />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" inverse className="hovered" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton
              text="Open me!"
              menuItems={menuItems}
              variant="outlined"
              inverse
              className={buttonClasses.focusVisible}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" inverse className="pressed" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} variant="outlined" inverse disabled />
          </Grid>
          <Grid size="grow" />

          <Grid size={1} component={Typography} variant="subtitle2">
            Text
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} inverse />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} inverse className="hovered" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} inverse className={buttonClasses.focusVisible} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} inverse className="pressed" />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <MenuButton text="Open me!" menuItems={menuItems} inverse disabled />
          </Grid>
          <Grid size="grow" />
        </Grid>
      </Container>
    </>
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
