# Typography

Typography component

## Overview

- **Category**: theming
- **Base Library**: mui
- **MUI Component**: Typography

## Description

The content of the component.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Typography } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Typography variant="h1">This is a Title!</Typography>
    <Typography>This is a normal body text.</Typography>
  </div>
```

## Variants

- Small
- Medium
- Large

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | The content of the component. |
| `className` | `string` |  | @Empty, Please add a description to the property |
| `mono` | `bool` |  | @Empty, Please add a description to the property |

## Examples

### Sample

```tsx
<Typography variant="h1">This is a Title!</Typography>
    <Typography>This is a normal body text.</Typography>
  </div>
```

### Typography

```tsx
<Typography component="h1" variant="h1">
      Title - h1
    </Typography>
    <Typography variant="h2">Title - h2</Typography>
    <Typography variant="h3">Title - h3</Typography>
    <Typography variant="subtitle1">Title - subtitle1</Typography>
    <Typography variant="subtitle2">Title - subtitle2</Typography>
    <Typography variant="overline">Title - overline</Typography>

    <hr />

    <Typography variant="body3">Body - body large</Typography>
    <Typography variant="body2">Body - body medium</Typography>
    <Typography variant="body1">Body - body small</Typography>

    <hr />

    <Typography variant="button">Action - button</Typography>
    <br />
    <Typography variant="buttonSmall">Action - button small</Typography>
    <br />
    <Typography variant="caption">Action - tooltip</Typography>

    <hr />

    <Typography mono variant="subtitle1">
      Mono - title mono
    </Typography>
    <Typography mono variant="subtitle2">
      Mono - subtitle mono
    </Typography>
    <Typography mono variant="body1">
      Mono - body mono
    </Typography>
    <Typography mono variant="caption">
      Mono - tooltip mono
    </Typography>
  </>
```

## MUI Reference

This component is based on Material-UI's Typography.

For additional props and detailed API documentation, refer to:

- [MUI Typography Documentation](https://mui.com/material-ui/api/typography/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
