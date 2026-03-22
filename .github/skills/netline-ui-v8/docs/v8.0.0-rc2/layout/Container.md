# Container

Center content horizontally

## Overview

- **Category**: layout
- **Base Library**: mui
- **MUI Component**: Container

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Container } from '@lsy-netline/netline-ui';
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

This component is based on Material-UI's Container.

For additional props and detailed API documentation, refer to:

- [MUI Container Documentation](https://mui.com/material-ui/api/container/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
