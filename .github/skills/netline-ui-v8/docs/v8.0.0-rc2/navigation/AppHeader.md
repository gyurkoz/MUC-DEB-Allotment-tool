# App Header

App Header component

## Overview

- **Category**: navigation
- **Base Library**: custom

## Description

A basic header for the application.

It contains the logo, title and optional help and menu icons.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { AppHeader } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const paddingStyle = { padding: '16px 0 4px 0' };

  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Small
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AppHeader title="Small AppHeader" size="small">
            <RightBlock />
          </AppHeader>
        </Grid>
        <Grid size={{ xs: 12 }} />
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Normal
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AppHeader title="Normal AppHeader">
            <RightBlock />
          </AppHeader>
        </Grid>
        <Grid size={{ xs: 12 }} />
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Large
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AppHeader title="Large AppHeader" size="large">
            <RightBlock />
          </AppHeader>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Small
- Medium
- Large

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | @Empty, Please add a description to the property |
| `className` | `string` |  | Css className to add |
| `HelpProps` | `object` |  | Props of Help IconButton. HelpIconProps is props of the Help Icon element. |
| `ImgProps` | `object` |  | The props need to apply to IMG tag containing the logo. |
| `LinkProps` | `object` |  | The component which will be used as a link when the user clicks on the logo. By default it is using `ToLink˙ compoment, but it can be replaced to react-router-dom `Link` or `NavLink`, or even it can be set to falsy to disable any linking when the user clicks on the logo. Its ToLink default value is only a wrapper around material-ui Link which converts its `to` prop to `href`. /
  LinkComponent: PropTypes / @typescript-to-proptypes-ignore /.oneOfType([PropTypes.elementType, PropTypes.bool]),
  /   The props specified here will be passed to the `LinkComponent`. It can be used for eg. to override the destination link |
| `MenuIcon` | `elementType` |  | @Empty, Please add a description to the property |
| `MenuIconProps` | `object` |  | @Empty, Please add a description to the property |
| `onHelpClick` | `func` |  | When present, Help icon is displayed on the right side before children elements. |
| `onMenuClick` | `func` |  | When present, Menu icon is displayed on the left side. |
| `size` | `oneOf` |  | The size (height) of the header. |
| `title` | `node` |  | The title of the AppHeader. |

## Examples

### Sizes

```tsx
const paddingStyle = { padding: '16px 0 4px 0' };

  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Small
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AppHeader title="Small AppHeader" size="small">
            <RightBlock />
          </AppHeader>
        </Grid>
        <Grid size={{ xs: 12 }} />
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Normal
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AppHeader title="Normal AppHeader">
            <RightBlock />
          </AppHeader>
        </Grid>
        <Grid size={{ xs: 12 }} />
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Large
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AppHeader title="Large AppHeader" size="large">
            <RightBlock />
          </AppHeader>
        </Grid>
      </Grid>
    </div>
  );
```

### LeftMenuIcon

```tsx
const handleMenuClick = useActionCallback('onMenuClick', noop);
  const size = 'medium'; // select('Size', ['small', 'medium', 'large'], 'medium');

  return <AppHeader onMenuClick={handleMenuClick} size={size} title="Any app name" />;
```

### HelpButton

```tsx
const onHelpClick = handleAction('onHelpClick');

  return (
    <AppHeader title="Any app name" onHelpClick={onHelpClick}>
      <RightBlock />
    </AppHeader>
  );
```

### RightContent

```tsx
<AppHeader title="Any app name">
    <RightBlock />
  </AppHeader>
```

### Sample

```tsx
<AppHeader title="Any app name" />
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
