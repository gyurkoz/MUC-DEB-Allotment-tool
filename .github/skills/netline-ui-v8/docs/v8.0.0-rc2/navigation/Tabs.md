# Tabs

Tabs component

## Overview

- **Category**: navigation
- **Base Library**: mui
- **MUI Component**: Tabs

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Tabs } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState(0);

  const handleChange = useActionCallback('onValueChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  });

  const tabLabel = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'][value];

  return (
    <Box style={{ backgroundColor: 'white', minHeight: 200 }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
      </Tabs>
      <Box style={{ padding: '16px' }}>
        <Typography variant="body2">This is the content area of the {tabLabel} tab.</Typography>
      </Box>
    </Box>
  );
```

## Variants

- Inverse

## Examples

### BasicTabs

```tsx
const [value, setValue] = useState(0);

  const handleChange = useActionCallback('onValueChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  });

  const tabLabel = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'][value];

  return (
    <Box style={{ backgroundColor: 'white', minHeight: 200 }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
      </Tabs>
      <Box style={{ padding: '16px' }}>
        <Typography variant="body2">This is the content area of the {tabLabel} tab.</Typography>
      </Box>
    </Box>
  );
```

### ContainedTabs

```tsx
const [{ root, child }, setTabState] = useState({ root: 0, child: 0 });

  const handleRootChange = useActionCallback('onRootChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabState((prevState) => ({ ...prevState, root: newValue }));
  });

  const handleChildChange = useActionCallback('onChildChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabState((prevState) => ({ ...prevState, child: newValue }));
  });

  const rootLabel = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'][root];
  const childLabel = ['first', 'second', 'third', 'fourth'][child];

  return (
    <Box style={{ backgroundColor: 'white', minHeight: 200 }}>
      <Tabs value={root} onChange={handleRootChange} contained>
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
      </Tabs>
      {root === 0 ? (
        <Box style={{ padding: '16px' }}>
          <Tabs value={child} onChange={handleChildChange}>
            <Tab label="Tab Item" />
            <Tab label="Tab Item" />
            <Tab label="Tab Item" />
            <Tab label="Tab Item" />
          </Tabs>
          <Box style={{ padding: '16px' }}>
            <Typography variant="body2">This is the content area of the {childLabel} tab.</Typography>
          </Box>
        </Box>
      ) : (
        <Box style={{ padding: '16px' }}>
          <Typography variant="body2">This is the content area of the {rootLabel} tab.</Typography>
        </Box>
      )}
    </Box>
  );
```

### ContainedVerticalTabs

```tsx
const [{ root, child }, setTabState] = useState({ root: 2, child: 0 });

  const handleRootChange = useActionCallback('onRootChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabState((prevState) => ({ ...prevState, root: newValue }));
  });

  const handleChildChange = useActionCallback('onChildChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabState((prevState) => ({ ...prevState, child: newValue }));
  });

  const rootLabel = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'][root];
  const childLabel = ['first', 'second', 'third', 'fourth'][child];

  return (
    <Box style={{ display: 'flex', backgroundColor: 'white' }}>
      <Tabs value={root} onChange={handleRootChange} contained orientation="vertical">
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
      </Tabs>
      {root === 2 ? (
        <Box style={{ width: 'calc(100% - 120px)' }}>
          <Tabs value={child} onChange={handleChildChange}>
            <Tab label="Tab Item" />
            <Tab label="Tab Item" />
            <Tab label="Tab Item" />
            <Tab label="Tab Item" />
          </Tabs>
          <Box style={{ padding: '16px' }}>
            <Typography variant="body2">This is the content area of the {childLabel} tab.</Typography>
          </Box>
        </Box>
      ) : (
        <Box style={{ padding: '16px' }}>
          <Typography variant="body2">This is the content area of the {rootLabel} tab.</Typography>
        </Box>
      )}
    </Box>
  );
```

### InverseTabs

```tsx
const [value, setValue] = useState(0);

  const handleChange = useActionCallback('onValueChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  });
  const tabLabel = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'][value];

  return (
    <Box style={{ backgroundColor: 'white', minHeight: 200 }}>
      <Tabs value={value} onChange={handleChange} inverse>
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
      </Tabs>
      <Box style={{ padding: '16px' }}>
        <Typography variant="body2">This is the content area of the {tabLabel} tab.</Typography>
      </Box>
    </Box>
  );
```

### Sample

```tsx
<Tabs value={1}>
    <Tab label="Tab Item" />
    <Tab label="Tab Item" />
    <Tab label="Tab Item" />
    <Tab label="Tab Item" />
  </Tabs>
```

### VerticalTabs

```tsx
const [value, setValue] = useState(1);

  const handleChange = useActionCallback('onValueChange', (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  });
  const tabLabel = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'][value];

  return (
    <Box style={{ backgroundColor: 'white', display: 'flex' }}>
      <Tabs value={value} onChange={handleChange} orientation="vertical">
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
        <Tab label="Tab Item" />
      </Tabs>
      <Box style={{ padding: '16px' }}>
        <Typography variant="body2">This is the content area of the {tabLabel} tab.</Typography>
      </Box>
    </Box>
  );
```

## MUI Reference

This component is based on Material-UI's Tabs.

For additional props and detailed API documentation, refer to:

- [MUI Tabs Documentation](https://mui.com/material-ui/api/tabs/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
