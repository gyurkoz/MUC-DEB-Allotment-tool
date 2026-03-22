# Accordion

Expand/collapse content sections

## Overview

- **Category**: surfaces
- **Base Library**: mui
- **MUI Component**: Accordion

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Accordion } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Accordion Title</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>Content</Typography>
  </AccordionDetails>
</Accordion>
```

## Examples

```tsx
<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Accordion Title</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>Content</Typography>
  </AccordionDetails>
</Accordion>
```

## MUI Reference

This component is based on Material-UI's Accordion.

For additional props and detailed API documentation, refer to:

- [MUI Accordion Documentation](https://mui.com/material-ui/api/accordion/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
