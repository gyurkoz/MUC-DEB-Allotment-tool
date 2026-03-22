# Menu

Menu component

## Overview

- **Category**: basic-ui
- **Base Library**: mui
- **MUI Component**: Menu

## Description

It has only one additional prop compared to the material-ui Menu component:
`small` to create dense menu. Any prop can be overriden.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Menu } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleClick}>Open Menu</Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
Sample.tags = ['hideInSidebar'];

export const Normal = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <IconButton ref={ref} aria-label="more" aria-controls="small-menu" aria-haspopup="true" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={ref.current}
        id="normal-menu"
        onClose={handleClose}
        open={!!ref && open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
      </Menu>
    </>
  );
};
Normal.parameters = {
  waitBeforeScreenshot: 350,
};

export const Small = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(
    () => () => {
      setOpen(false);
    },
    [],
  );

  return (
    <>
      <IconButton ref={ref} aria-label="more" aria-controls="small-menu" aria-haspopup="true" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={ref.current}
        id="small-menu"
        onClose={handleClose}
        open={!!ref && open}
        small
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
      </Menu>
    </>
  );
};

Small.parameters = {
  waitBeforeScreenshot: 350,
};

export default {
  title: 'Basic UI elements/Menu',
  component: Menu,
```

## Variants

- Primary
- Small

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | Menu contents, normally `MenuItem`s. |
| `className` | `string` |  | @ignore |
| `small` | `bool` |  | @Empty, Please add a description to the property |

## Examples

```tsx
const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleClick}>Open Menu</Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
Sample.tags = ['hideInSidebar'];

export const Normal = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <IconButton ref={ref} aria-label="more" aria-controls="small-menu" aria-haspopup="true" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={ref.current}
        id="normal-menu"
        onClose={handleClose}
        open={!!ref && open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
      </Menu>
    </>
  );
};
Normal.parameters = {
  waitBeforeScreenshot: 350,
};

export const Small = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(
    () => () => {
      setOpen(false);
    },
    [],
  );

  return (
    <>
      <IconButton ref={ref} aria-label="more" aria-controls="small-menu" aria-haspopup="true" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={ref.current}
        id="small-menu"
        onClose={handleClose}
        open={!!ref && open}
        small
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <MenuItem onClick={handleClose}>Value</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Value" />
        </MenuItem>
      </Menu>
    </>
  );
};

Small.parameters = {
  waitBeforeScreenshot: 350,
};

export default {
  title: 'Basic UI elements/Menu',
  component: Menu,
```

## MUI Reference

This component is based on Material-UI's Menu.

For additional props and detailed API documentation, refer to:

- [MUI Menu Documentation](https://mui.com/material-ui/api/menu/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
