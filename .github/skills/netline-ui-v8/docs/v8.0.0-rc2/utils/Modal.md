# Modal

Modal dialog component

## Overview

- **Category**: utils
- **Base Library**: mui
- **MUI Component**: Modal

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Modal } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Modal open={open} onClose={handleClose}>
  <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
    <Typography>Modal content</Typography>
  </Box>
</Modal>
```

## Examples

```tsx
<Modal open={open} onClose={handleClose}>
  <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
    <Typography>Modal content</Typography>
  </Box>
</Modal>
```

## MUI Reference

This component is based on Material-UI's Modal.

For additional props and detailed API documentation, refer to:

- [MUI Modal Documentation](https://mui.com/material-ui/api/modal/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
