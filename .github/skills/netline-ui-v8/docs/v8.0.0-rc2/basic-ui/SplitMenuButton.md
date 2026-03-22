# Split Menu Button

Split Menu Button component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Description

Props applied to the left Button element (non MenuButton)

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { SplitMenuButton } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
{
args: {
    IconProps: { 'data-testid': 'my-test-id' },
    Icon: FavoriteIcon,
  },
  play: async ({ canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('my-test-id').parentElement;
    expect(button).toBeInTheDocument();

    const icon = button && button.querySelector('svg');
    expect(icon).toHaveClass('MuiSvgIcon-root');
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
| `buttonProps` | `object` |  | Props applied to the left Button element (non MenuButton) |
| `children` | `node` |  | The content of the component. |
| `Icon` | `any` |  | Icon that will appear on the left side of the text |
| `IconProps` | `any` |  | The props which will be applied to the `Icon` component. It has only effect when `Icon` or `type` prop is set |
| `onButtonClick` | `func` |  | Event Handler for the normal button element |
| `text` | `string` |  | The text for the normal button component |
| `rootProps` | `object` |  | Props applied to the root wrapper element of the buttons |

## Examples

### Tests

**IconWithProps**

```tsx
{
args: {
    IconProps: { 'data-testid': 'my-test-id' },
    Icon: FavoriteIcon,
  },
  play: async ({ canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('my-test-id').parentElement;
    expect(button).toBeInTheDocument();

    const icon = button && button.querySelector('svg');
    expect(icon).toHaveClass('MuiSvgIcon-root');
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
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;

    expect(body.querySelectorAll('.MuiIconButton-root')).toHaveLength(0);

    const buttons = canvas.queryAllByRole('button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0]).toHaveTextContent('Sample');
    expect(buttons[1]).toHaveTextContent('');
  },
}
```

**OnButtonClick**

```tsx
{
args: {
    onClick: fn(),
    onButtonClick: fn(),
  },
  play: async ({ args, canvasElement }: PlayArgs) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const buttons = canvas.queryAllByRole('button');
    const simpleButton = buttons[0];
    const menuButton = buttons[1];

    expect(simpleButton).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();

    await userEvent.click(simpleButton);

    expect(args.onClick).toHaveBeenCalledTimes(0);
    expect(args.onButtonClick).toHaveBeenCalledTimes(1);

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

    expect(args.onClick).toHaveBeenCalledTimes(1);
    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).toBeInTheDocument();
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
    const menuButton = canvas.queryAllByRole('button')[1];

    expect(menuButton).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

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
    const menuButton = canvas.queryAllByRole('button')[1];

    expect(menuButton).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

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
    const menuButton = canvas.queryAllByRole('button')[1];

    expect(menuButton).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

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
    const menuButton = canvas.queryAllByRole('button')[1];

    expect(menuButton).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('li.MuiMenuItem-root')).toHaveLength(2);
    expect(body.querySelectorAll('li.cls-1 .MuiSvgIcon-root')).toHaveLength(1);
    expect(body.querySelectorAll('li.cls-2 .MuiSvgIcon-root')).toHaveLength(0);
    expect(body.querySelectorAll('li.Mui-disabled')).toHaveLength(1);

    await userEvent.click(menuButton);

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
    const menuButton = canvas.queryAllByRole('button')[1];

    expect(menuButton).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

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
    const menuButton = canvas.queryAllByRole('button')[1];

    expect(menuButton).toBeInTheDocument();

    expect(body.querySelector('[data-testid="MenuButtonBase-menu--open"]')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

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
<SplitMenuButton text="Sample" menuItems={menuItems} />;
```

### Sizes

```tsx
const buttonText = text('Label', 'Click me!');
  const handleButtonClick = action('onButtonClick');
  const handleMenuItemClick = action('onMenuItemClick');
  const menuItems: SplitMenuButtonProps['menuItems'] = [
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
          <Grid size={4} />

          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="large"
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="medium"
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="small"
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="extraSmall"
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={4} />
        </Grid>
      </Container>
      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Sizes - Inverse color
          </Grid>
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
          <Grid size={4} />

          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="large"
              inverse
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="medium"
              inverse
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="small"
              inverse
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              size="extraSmall"
              inverse
              onButtonClick={handleButtonClick}
              onMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid size={4} />
        </Grid>
      </Container>
    </>
  );
```

### Statuses

```tsx
const buttonText = text('Label', 'Click me!');
  const menuItems: SplitMenuButtonProps['menuItems'] = [
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
            Statuses - Primary color
          </Grid>
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

          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton text={buttonText} menuItems={menuItems} />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              className="hovered"
              buttonProps={{ className: 'hovered' }}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              className={buttonClasses.focusVisible}
              buttonProps={{ className: buttonClasses.focusVisible }}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              className="pressed"
              buttonProps={{ className: 'pressed' }}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton text={buttonText} menuItems={menuItems} disabled />
          </Grid>
          <Grid size="grow" />
        </Grid>
      </Container>
      <Container padding inverse>
        <Grid container spacing={2} alignItems="center">
          <Grid size={12} component={Typography} variant="subtitle1">
            Statuses - Inverse color
          </Grid>
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

          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton text={buttonText} menuItems={menuItems} inverse />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              className="hovered"
              buttonProps={{ className: 'hovered' }}
              inverse
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              inverse
              className={buttonClasses.focusVisible}
              buttonProps={{ className: buttonClasses.focusVisible }}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton
              text={buttonText}
              menuItems={menuItems}
              inverse
              className="pressed"
              buttonProps={{ className: 'pressed' }}
            />
          </Grid>
          <Grid size={2} component={Typography} variant="body1" align="center">
            <SplitMenuButton text={buttonText} menuItems={menuItems} inverse disabled />
          </Grid>
          <Grid size="grow" />
        </Grid>
      </Container>
    </>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
