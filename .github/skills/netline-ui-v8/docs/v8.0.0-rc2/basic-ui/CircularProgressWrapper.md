# Circular Progress Wrapper

Circular Progress Wrapper component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Description

This component uses the `CirculerProgress` component from material-ui.<br />
The `CirculerProgress` gets props from the `progressProps` prop.<br />
Additional props are passed to the root element.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CircularProgressWrapper } from '@lsy-netline/netline-ui';
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

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | @Empty, Please add a description to the property |
| `className` | `string` |  | @Empty, Please add a description to the property |
| `inverse` | `bool` |  | @Empty, Please add a description to the property |
| `loading` | `bool` |  | @Empty, Please add a description to the property |
| `progressProps` | `object` |  | @Empty, Please add a description to the property |

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
