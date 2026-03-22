# Drawer

Navigation drawers provide access to destinations in a site

## Overview

- **Category**: navigation
- **Base Library**: mui
- **MUI Component**: Drawer

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Drawer } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
  <List>
    <ListItem>
      <ListItemText primary="Item 1" />
    </ListItem>
  </List>
</Drawer>
```

## Examples

```tsx
<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
  <List>
    <ListItem>
      <ListItemText primary="Item 1" />
    </ListItem>
  </List>
</Drawer>
```

## MUI Reference

This component is based on Material-UI's Drawer.

For additional props and detailed API documentation, refer to:

- [MUI Drawer Documentation](https://mui.com/material-ui/api/drawer/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
