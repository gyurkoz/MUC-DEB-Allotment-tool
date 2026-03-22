# Badge

Generate badges on top of child elements

## Overview

- **Category**: data-display
- **Base Library**: mui
- **MUI Component**: Badge

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Badge } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Stack direction="row" spacing={2}>
  <Badge badgeContent={4} color="primary">
    <MailIcon />
  </Badge>
  <Badge variant="dot" color="error">
    <MailIcon />
  </Badge>
</Stack>
```

## Examples

```tsx
<Stack direction="row" spacing={2}>
  <Badge badgeContent={4} color="primary">
    <MailIcon />
  </Badge>
  <Badge variant="dot" color="error">
    <MailIcon />
  </Badge>
</Stack>
```

## MUI Reference

This component is based on Material-UI's Badge.

For additional props and detailed API documentation, refer to:

- [MUI Badge Documentation](https://mui.com/material-ui/api/badge/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
