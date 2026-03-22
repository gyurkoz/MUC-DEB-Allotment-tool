# Icon Menu Button

Icon Menu Button component

## Overview

- **Category**: basic-ui
- **Base Library**: custom

## Description

The content of the component.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { IconMenuButton } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const menuItems = [
    { primaryText: 'Menu Item 1', leftIcon: <FavoriteIcon /> },
    { primaryText: 'Menu Item 2', leftIcon: <FavoriteIcon /> },
  ];

  return <IconMenuButton menuItems={menuItems} />;
```

## Variants

- Primary

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | The content of the component. |
| `Icon` | `object` |  | Icon component to be shown as menu button. |
| `IconProps` | `object` |  | The props which will be applied to the `Icon` component. It has only effect when `Icon` or `type` prop is set |

## Examples

```tsx
const menuItems = [
    { primaryText: 'Menu Item 1', leftIcon: <FavoriteIcon /> },
    { primaryText: 'Menu Item 2', leftIcon: <FavoriteIcon /> },
  ];

  return <IconMenuButton menuItems={menuItems} />;
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
