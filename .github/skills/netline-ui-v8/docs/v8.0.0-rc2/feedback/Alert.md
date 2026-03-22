# Alert

Alerts display brief messages for the user

## Overview

- **Category**: feedback
- **Base Library**: mui
- **MUI Component**: Alert

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Alert } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Alert severity="info">This is an info alert</Alert>
```

## Examples

### Basic Alert

```tsx
<Alert severity="info">This is an info alert</Alert>
```

### Alert Variants

```tsx
<Stack spacing={2}>
  <Alert severity="error">This is an error alert</Alert>
  <Alert severity="warning">This is a warning alert</Alert>
  <Alert severity="info">This is an info alert</Alert>
  <Alert severity="success">This is a success alert</Alert>
</Stack>
```

## MUI Reference

This component is based on Material-UI's Alert.

For additional props and detailed API documentation, refer to:

- [MUI Alert Documentation](https://mui.com/material-ui/api/alert/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
