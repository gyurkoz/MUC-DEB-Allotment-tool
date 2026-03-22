# AppBar

Top app bar for branding and navigation

## Overview

- **Category**: navigation
- **Base Library**: mui
- **MUI Component**: AppBar

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { AppBar } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const title = text('Title', 'Header Title');
  const shadow = boolean('Shadow', false);
  const showBackButton = boolean('Show back button', false) || undefined;
  const showRightButtons = boolean('Show right buttons', false);
  const handleBack = useActionCallback('onBack', noop);
  const paddingStyle = { padding: '16px 0 4px 0' };

  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Small
        </Grid>
        <Grid size={{ xs: 12 }}>
          <NetlineAppBar title={title} shadow={shadow} onBack={showBackButton && handleBack} size="small">
            {showRightButtons && (
              <div style={{ display: 'flex', flexShrink: 0 }}>
                <IconButton inverse size="large">
                  <EditIcon />
                </IconButton>
                <IconButton inverse edge="end" size="large">
                  <MoreVertIcon />
                </IconButton>
              </div>
            )}
          </NetlineAppBar>
        </Grid>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Normal
        </Grid>
        <Grid size={{ xs: 12 }}>
          <NetlineAppBar title={title} shadow={shadow} onBack={showBackButton && handleBack}>
            {showRightButtons && (
              <div style={{ display: 'flex', flexShrink: 0 }}>
                <IconButton inverse size="large">
                  <EditIcon />
                </IconButton>
                <IconButton inverse edge="end" size="large">
                  <MoreVertIcon />
                </IconButton>
              </div>
            )}
          </NetlineAppBar>
        </Grid>
      </Grid>
    </div>
  );
```

## Variants

- Secondary
- Inverse
- Small
- Large

## Examples

### Sizes

```tsx
const title = text('Title', 'Header Title');
  const shadow = boolean('Shadow', false);
  const showBackButton = boolean('Show back button', false) || undefined;
  const showRightButtons = boolean('Show right buttons', false);
  const handleBack = useActionCallback('onBack', noop);
  const paddingStyle = { padding: '16px 0 4px 0' };

  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Small
        </Grid>
        <Grid size={{ xs: 12 }}>
          <NetlineAppBar title={title} shadow={shadow} onBack={showBackButton && handleBack} size="small">
            {showRightButtons && (
              <div style={{ display: 'flex', flexShrink: 0 }}>
                <IconButton inverse size="large">
                  <EditIcon />
                </IconButton>
                <IconButton inverse edge="end" size="large">
                  <MoreVertIcon />
                </IconButton>
              </div>
            )}
          </NetlineAppBar>
        </Grid>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" align="center" style={paddingStyle}>
          Normal
        </Grid>
        <Grid size={{ xs: 12 }}>
          <NetlineAppBar title={title} shadow={shadow} onBack={showBackButton && handleBack}>
            {showRightButtons && (
              <div style={{ display: 'flex', flexShrink: 0 }}>
                <IconButton inverse size="large">
                  <EditIcon />
                </IconButton>
                <IconButton inverse edge="end" size="large">
                  <MoreVertIcon />
                </IconButton>
              </div>
            )}
          </NetlineAppBar>
        </Grid>
      </Grid>
    </div>
  );
```

### ShadowAndButtons

```tsx
<NetlineAppBar title={text('title', 'Header Title')} shadow={boolean('shadow', true)} onBack={action('onBack click')}>
    <div style={{ display: 'flex', flexShrink: 0 }}>
      <IconButton inverse size="large">
        <EditIcon />
      </IconButton>
      <IconButton inverse edge="end" size="large">
        <MoreVertIcon />
      </IconButton>
    </div>
  </NetlineAppBar>
```

### DisplayAsCardHeader

```tsx
<Card>
    <NetlineAppBar title="Header Title" />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CardContent>
  </Card>
```

### SplittedBars

```tsx
<NetlineAppBar title="Header title" bottomRow={<TabsBlock />}>
        <Button variant="contained" inverse>
          Button
        </Button>
      </NetlineAppBar>
    </div>
    <div style={{ width: '30%', backgroundColor: '#e0e0e0' }}>
      <NetlineAppBar secondary bottomRow={<TabsBlock />}>
        <IconButton inverse edge="end" size="large">
          <MoreVertIcon />
        </IconButton>
      </NetlineAppBar>
    </div>
  </div>
```

### BoxShadow

```tsx
<NetlineAppBar title="App Title" shadow>
    <TabsBlock />
    <IconButton inverse edge="end" size="large">
      <MoreVertIcon />
    </IconButton>
  </NetlineAppBar>
```

### SearchBar

```tsx
<NetlineAppBar title="App Title" shadow>
    <SearchBar />
    <IconButton inverse edge="end" size="large">
      <MoreVertIcon />
    </IconButton>
  </NetlineAppBar>
```

## MUI Reference

This component is based on Material-UI's AppBar.

For additional props and detailed API documentation, refer to:

- [MUI AppBar Documentation](https://mui.com/material-ui/api/appbar/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
