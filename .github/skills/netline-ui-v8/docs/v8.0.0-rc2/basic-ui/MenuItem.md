# Menu Item

Menu Item component

## Overview

- **Category**: basic-ui
- **Base Library**: mui
- **MUI Component**: MenuItem

## Description

MenuItem has only one additional prop compared to the material-ui MenuItem interface:
`TooltipProps`.

`title` prop is added to the menu item as Tooltip. `TooltipProps` can be used to customize
it.
Any prop can be overriden.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { MenuItem } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleClick}>Open Menu</Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem title="Test title" onClick={handleClose}>
          With title
        </MenuItem>
        <MenuItem title="Test title for disabled menu item" disabled onClick={handleClose}>
          Disabled with title
        </MenuItem>
        <MenuItem onClick={handleClose}>No title</MenuItem>
      </Menu>
    </>
  );
};

Tooltip.parameters = {
  waitBeforeScreenshot: 350,
};

export default {
  title: 'Basic UI elements/Menu',
  component: Tooltip,
```

## Variants

- Disabled

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | The content of the component. |
| `disabled` | `bool` |  | If `true`, the component is disabled. @default false |
| `onClick` | `func` |  | @Empty, Please add a description to the property |
| `TooltipProps` | `object` |  | Title to display as a `Tooltip` when mouse is hovered. /
  title: PropTypes / @typescript-to-proptypes-ignore /.node,
  /   Extra props to apply on the `Tooltip` component. |

## Examples

```tsx
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleClick}>Open Menu</Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem title="Test title" onClick={handleClose}>
          With title
        </MenuItem>
        <MenuItem title="Test title for disabled menu item" disabled onClick={handleClose}>
          Disabled with title
        </MenuItem>
        <MenuItem onClick={handleClose}>No title</MenuItem>
      </Menu>
    </>
  );
};

Tooltip.parameters = {
  waitBeforeScreenshot: 350,
};

export default {
  title: 'Basic UI elements/Menu',
  component: Tooltip,
```

## MUI Reference

This component is based on Material-UI's MenuItem.

For additional props and detailed API documentation, refer to:

- [MUI MenuItem Documentation](https://mui.com/material-ui/api/menuitem/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
