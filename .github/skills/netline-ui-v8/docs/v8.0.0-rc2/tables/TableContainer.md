# Table Container

Table Container component

## Overview

- **Category**: tables
- **Base Library**: mui
- **MUI Component**: TableContainer

## Description

Tables display information in a way that's easy to scan, so that users can look for patterns and insights

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { TableContainer } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<TableContainer>
      <TableHead>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  </div>
```

## Variants

- Small
- Medium
- Large

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `buttonsOn` | `bool` |  | @Empty, Please add a description to the property |
| `children` | `node` |  | The content of the component, normally `Table`. |
| `size` | `oneOf` |  | @Empty, Please add a description to the property |
| `tableProps` | `object` |  | @Empty, Please add a description to the property |

## Examples

### Sample

```tsx
<TableContainer>
      <TableHead>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  </div>
```

### NormalSizeBase

```tsx
<TableWrapper buttonsOn={false} size="medium" />
```

### Dense

```tsx
<TableWrapper buttonsOn={false} size="small" />
```

### NormalHeightWithButtonsOnHover

```tsx
<TableWrapper buttonsOn size="medium" />
```

### SmallHeightWithButtonsOnHover

```tsx
<TableWrapper buttonsOn size="small" />
```

## MUI Reference

This component is based on Material-UI's TableContainer.

For additional props and detailed API documentation, refer to:

- [MUI TableContainer Documentation](https://mui.com/material-ui/api/tablecontainer/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
