# Portal

Render children into a different part of the DOM

## Overview

- **Category**: utils
- **Base Library**: mui
- **MUI Component**: Portal

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Portal } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Portal container={containerRef.current}>
  <Box>Content rendered in portal</Box>
</Portal>
```

## Examples

```tsx
<Portal container={containerRef.current}>
  <Box>Content rendered in portal</Box>
</Portal>
```

## MUI Reference

This component is based on Material-UI's Portal.

For additional props and detailed API documentation, refer to:

- [MUI Portal Documentation](https://mui.com/material-ui/api/portal/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
