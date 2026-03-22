# Skeleton

Display a placeholder preview of content

## Overview

- **Category**: feedback
- **Base Library**: mui
- **MUI Component**: Skeleton

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Skeleton } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Stack spacing={1}>
  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton variant="rectangular" width={210} height={60} />
</Stack>
```

## Examples

```tsx
<Stack spacing={1}>
  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton variant="rectangular" width={210} height={60} />
</Stack>
```

## MUI Reference

This component is based on Material-UI's Skeleton.

For additional props and detailed API documentation, refer to:

- [MUI Skeleton Documentation](https://mui.com/material-ui/api/skeleton/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
