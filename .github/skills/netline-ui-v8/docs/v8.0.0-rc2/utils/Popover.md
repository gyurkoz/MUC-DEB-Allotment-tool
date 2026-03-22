# Popover

Popover displays content on top of other content

## Overview

- **Category**: utils
- **Base Library**: mui
- **MUI Component**: Popover

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Popover } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Popover
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
>
  <Typography sx={{ p: 2 }}>Popover content</Typography>
</Popover>
```

## Examples

```tsx
<Popover
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
>
  <Typography sx={{ p: 2 }}>Popover content</Typography>
</Popover>
```

## MUI Reference

This component is based on Material-UI's Popover.

For additional props and detailed API documentation, refer to:

- [MUI Popover Documentation](https://mui.com/material-ui/api/popover/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
