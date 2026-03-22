# theme

theme component

## Overview

- **Category**: theming
- **Base Library**: mui
- **MUI Component**: theme

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { theme } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const { palette, colors } = useTheme();
  const flattenedColors = useMemo(() => pickBy(flattenObject(colors), isString), [colors]);
  // filter palette colors which are string and not in colors object
  const flattenedPalette = useMemo(
    () =>
      pickBy(
        pickBy(flattenObject(palette), isString),
        (color, name) => !flattenedColors[name] && !deprecatedColors.includes(name),
      ),
    [flattenedColors, palette],
  );
  // create an inverse color map lowercase(color) => colorName
  const colorMap = useMemo(
    () =>
      reduce(
        flattenedColors,
        (result: Record<string, string>, color, key) => {
          const colorName = color.toLowerCase();
          result[colorName] = result[colorName] || key;
          return result;
        },
        {},
      ),
    [flattenedColors],
  );

  return <Colors prefix="theme.palette" items={flattenedPalette} colorMap={colorMap} />;
```

## Variants

- Inverse

## Examples

### Palette

```tsx
const { palette, colors } = useTheme();
  const flattenedColors = useMemo(() => pickBy(flattenObject(colors), isString), [colors]);
  // filter palette colors which are string and not in colors object
  const flattenedPalette = useMemo(
    () =>
      pickBy(
        pickBy(flattenObject(palette), isString),
        (color, name) => !flattenedColors[name] && !deprecatedColors.includes(name),
      ),
    [flattenedColors, palette],
  );
  // create an inverse color map lowercase(color) => colorName
  const colorMap = useMemo(
    () =>
      reduce(
        flattenedColors,
        (result: Record<string, string>, color, key) => {
          const colorName = color.toLowerCase();
          result[colorName] = result[colorName] || key;
          return result;
        },
        {},
      ),
    [flattenedColors],
  );

  return <Colors prefix="theme.palette" items={flattenedPalette} colorMap={colorMap} />;
```

### Colors

```tsx
const { colors } = useTheme();
  const flattenedColors = useMemo(() => pickBy(flattenObject(colors), isString), [colors]);

  return <Colors prefix="theme.colors" items={flattenedColors} />;
```

## MUI Reference

This component is based on Material-UI's theme.

For additional props and detailed API documentation, refer to:

- [MUI theme Documentation](https://mui.com/material-ui/api/theme/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
