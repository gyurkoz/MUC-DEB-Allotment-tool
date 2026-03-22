# Snackbar

Brief messages at the bottom of the screen

## Overview

- **Category**: feedback
- **Base Library**: mui
- **MUI Component**: Snackbar

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Snackbar } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Snackbar
  open={true}
  message="This is a snackbar message"
  autoHideDuration={6000}
/>
```

## Examples

```tsx
<Snackbar
  open={true}
  message="This is a snackbar message"
  autoHideDuration={6000}
/>
```

## MUI Reference

This component is based on Material-UI's Snackbar.

For additional props and detailed API documentation, refer to:

- [MUI Snackbar Documentation](https://mui.com/material-ui/api/snackbar/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
