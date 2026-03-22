# CircularProgress

Circular progress indicator

## Overview

- **Category**: feedback
- **Base Library**: mui
- **MUI Component**: CircularProgress

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CircularProgress } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<CircularProgressWrapper loading progressProps={{ value: 67, variant: 'determinate' }}>
    <Button variant="contained" disabled>
      Submit
    </Button>
  </CircularProgressWrapper>
```

## Variants

- Inverse
- Disabled
- Small
- Large

## Examples

### Sample

```tsx
<CircularProgressWrapper loading progressProps={{ value: 67, variant: 'determinate' }}>
    <Button variant="contained" disabled>
      Submit
    </Button>
  </CircularProgressWrapper>
```

### NormalButtons

```tsx
<Buttons buttonText={text('Label', 'Button')} />
```

### InverseButtons

```tsx
<Buttons buttonText={text('Label', 'Button')} inverse />
```

## MUI Reference

This component is based on Material-UI's CircularProgress.

For additional props and detailed API documentation, refer to:

- [MUI CircularProgress Documentation](https://mui.com/material-ui/api/circularprogress/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
