# Tooltip

Tooltip component

## Overview

- **Category**: basic-ui
- **Base Library**: mui
- **MUI Component**: Tooltip

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Tooltip } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Tooltip title="Tooltip content">
      <span>tooltip on hover</span>
    </Tooltip>
    <Tooltip open title="Tooltip content">
      <span>always open tooltip 1</span>
    </Tooltip>
    <br />
    <br />
    <br />
    <br />
    <Tooltip
      open
      title="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
    >
      <span>always open tooltip 2</span>
    </Tooltip>
  </div>
```

## Examples

```tsx
<Tooltip title="Tooltip content">
      <span>tooltip on hover</span>
    </Tooltip>
    <Tooltip open title="Tooltip content">
      <span>always open tooltip 1</span>
    </Tooltip>
    <br />
    <br />
    <br />
    <br />
    <Tooltip
      open
      title="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
    >
      <span>always open tooltip 2</span>
    </Tooltip>
  </div>
```

## MUI Reference

This component is based on Material-UI's Tooltip.

For additional props and detailed API documentation, refer to:

- [MUI Tooltip Documentation](https://mui.com/material-ui/api/tooltip/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
