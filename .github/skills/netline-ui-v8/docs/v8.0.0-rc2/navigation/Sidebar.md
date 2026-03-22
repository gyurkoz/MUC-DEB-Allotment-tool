# Sidebar

Sidebar component

## Overview

- **Category**: navigation
- **Base Library**: custom

## Description

The open/close button is shown when `onOpen` or `allowToggleOpen` props are presented.
This prop is called when the button is clicked.<br />
`activeId` prop can be used to mark the active menu item.<br />
The objects in the `itemList` prop are given to a `SidebarMenuItem` component,
Its props are also documented here.<br />
`LinkComponent` prop can be used to change the material-ui Link to react-router-dom Link or NavLink.
Its ToLink default value is only a wrapper around material-ui Link which converts its `to` prop to `href`.<br />
`openWidth` is the width of the sidebar in the open state.<br />
`size` prop determines the width in the closed state.<br />
Additional props are passed to the root element.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Sidebar } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const items = [
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
  ];

  const handleHelpClick = useActionCallback('onHelpClick');
  const [fullscreenEnabled, setFullscreenEnabled] = useState(false);
  const handleFullscreenClick = useActionCallback('onFullscreenClick', () => setFullscreenEnabled(!fullscreenEnabled));

  return (
    <Stack component={Container} fullPage noMargin>
      <AppHeader
        title="Fullscreen mode"
        style={{ height: fullscreenEnabled ? 0 : undefined, transition: 'height 0.3s ease' }}
      />
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          allowToggleOpen
          activeId={1}
          items={items}
          open={false}
          onHelpClick={handleHelpClick}
          onFullscreenClick={handleFullscreenClick}
          fullscreenEnabled={fullscreenEnabled}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `activeId` | `oneOfType` |  | The active menu item identifier which is highlighted. |
| `allowReorder` | `bool` |  | Set it to `true` to display the "Reorder" button in the sidebar. |
| `allowToggleOpen` | `bool` |  | Sets wheter the component is allowToggleOpen or not with toggle button. |
| `autoOpenSubmenuTimeout` | `number` |  | If sepcified the submenu will be opened in the specified time (in milliseconds) when the user moves the mouse on it. |
| `children` | `node` |  | The children node which is rendered bottom (just above the toggle and help buttons). |
| `className` | `string` |  | Css className to add to the component root. |
| `disablePinning` | `bool` |  | Whether to disable the pinning feature for the sidebar. @default false |
| `disableAutoCloseOnClick` | `bool` |  | After activate a menuItem, the sidebar will be closed, if it was open before |
| `disableAutoOpenOnClick` | `bool` |  | When sidebar is closed and the a main menu item is clicked it will automatically opens the sidebar first. Turn this option off to disable this behaviour. |
| `HelpProps` | `object` |  | Extra props which will be applied on the help `IconButton` |
| `itemList` | `array` |  | The list of items which needs to displayed in the side menu bar. |
| `items` | `array` |  | The list of items which needs to displayed in the side menu bar. |
| `LinkComponent` | `any` |  | A link component in which the items will be wrapped. |
| `onHelpClick` | `func` |  | Callback method fired when the help button is clicked. Help button is rendered only when this method is set. |
| `onMenuItemClick` | `func` |  | A callback method which is invoked if a menu item is clicked. When a sub |
| `onOpen` | `func` |  | Callback method fired when the toggle button is clicked. It indicates that the `open` status needs to be changed (see `on` prop). Setting ˙onOpen˙ will automatically enabled `allowToggleOpen` flag. |
| `onReorderSave` | `func` |  | Callback method which is invoked after the Save button is pressed and the order of the menu items need to be changed / stored. |
| `onResetReorder` | `func` |  | Callback method which is invoked when the Reset button is pressed and the order of the menu items need to be reset. |
| `onSubmenuOpenChange` | `func` |  | Callback method invoked when a submenu is opened or closed. |
| `onToggleReorderMode` | `func` |  | Callback method which is invoked when the reorder mode is toggled. |
| `onToggleVisibilitySwitch` | `func` |  | Callback method which is invoked when the switch button is toggled. |
| `open` | `bool` |  | Sets wether the sidebar rendered as open or closed (see `toggleOpen` prop for controlling open status) |
| `openWidth` | `number` |  | The width of the opened status bar in pixels. |
| `showMainItemInPopupMenu` | `bool` |  | Whether to show the opened main menu item (and a divier) at the top of submenu popup or not. |
| `size` | `oneOf` |  | The size of sidebar root panel (width of the statusbar in closed state). |
| `submenuContainer` | `any` |  | A HTML element, component instance, or function that returns either. The container will have the submenu appended to it. By default, it uses the body of the top-level document object, so it's simply `document.body` most of the time. |
| `SubmenuProps` | `object` |  | Additional props which will be applied to the `Menu` component which renders the submenu. |
| `ToggleOpenProps` | `object` |  | Extra props which will be applied on the open toggle `IconButton` |
| `translations` | `shape` |  | The translation object which contains the text for the toggle button and the customize button. |
| `helpText` | `oneOfType` |  | The text for the "Help" button. |
| `customizeText` | `oneOfType` |  | The text for the "Customize" button. |
| `toggleFullscreenText` | `oneOfType` |  | The text for the "Fullscreen" button. |
| `saveText` | `oneOfType` |  | The text for the "Save" button in reorder mode. |
| `cancelText` | `oneOfType` |  | The text for the "Cancel" button in reorder mode. |
| `resetText` | `oneOfType` |  | The text for the "Reset" button in reorder mode. This button is only displayed when `onResetReorder` prop is set. It is used to reset the order of the menu items to their original state. It is not used to reset the visibility of the menu items. |

## Examples

### Fullscreen

```tsx
const items = [
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
  ];

  const handleHelpClick = useActionCallback('onHelpClick');
  const [fullscreenEnabled, setFullscreenEnabled] = useState(false);
  const handleFullscreenClick = useActionCallback('onFullscreenClick', () => setFullscreenEnabled(!fullscreenEnabled));

  return (
    <Stack component={Container} fullPage noMargin>
      <AppHeader
        title="Fullscreen mode"
        style={{ height: fullscreenEnabled ? 0 : undefined, transition: 'height 0.3s ease' }}
      />
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          allowToggleOpen
          activeId={1}
          items={items}
          open={false}
          onHelpClick={handleHelpClick}
          onFullscreenClick={handleFullscreenClick}
          fullscreenEnabled={fullscreenEnabled}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

### HierarchicalMenuItems

```tsx
const allowAutoOpenSubmenu = boolean('allowAutoOpenSubmenu (auto open submenu by timer)', false);
  const disableAutoOpenOnClick = boolean('disableAutoOpenOnClick (auto open submenu when clicked)', false);

  // We need this to rerender with valid id-container, after the component is rendered first time
  const [activeId, setActiveId] = useState<MenuItemIdentifier>('1');
  const [, setRef] = useState<HTMLDivElement | null>(null);

  const handleHelpClick = useActionCallback('onHelpClick');
  const handleItemClick = useActionCallback(`onItemClick`);
  const handleMenuItemClick = useActionCallback<
    (
      event: SyntheticEvent,
      menuItem?: SidebarMenuItemEntity,
      prevActiveId?: MenuItemIdentifier | null,
    ) => void | boolean
  >('onMenuItemClick', (event, menuItem, prevActiveId) => {
    if (!menuItem) {
      return undefined;
    }
    setActiveId(menuItem.id);

    // do not open submenu unless an already active menu is clicked
    if (allowAutoOpenSubmenu && (!menuItem.submenu || menuItem.id !== prevActiveId)) {
      event.preventDefault();
    }

    // active id is set controlled, we don't need the default behaviour
    return false;
  });

  const createSubmenu = (prefix: string | number) => [
    {
      id: `${prefix}menu1`,
      link: `#${prefix}menu1`,
      text: 'Menu1',
      onClick: handleItemClick,
    },
    {
      id: `${prefix}menu2`,
      link: `#${prefix}menu2`,
      text: 'Menu2',
      onClick: handleItemClick,
    },
    {
      id: `${prefix}menu3`,
      link: `#${prefix}menu3`,
      text: 'Menu3',
      onClick: handleItemClick,
    },
  ];

  const createSubmenuWithIcon = (prefix: string | number) => [
    {
      id: `${prefix}menu1`,
      link: `#${prefix}menu1`,
      text: 'Menu1',
      onClick: handleItemClick,
    },
    <Divider key="key" />,
    {
      id: `${prefix}menu2`,
      link: `#${prefix}menu2`,
      text: 'Menu2',
      Icon: FavoriteIcon,
      onClick: handleItemClick,
    },
    {
      id: `${prefix}menu3`,
      link: `#${prefix}menu3`,
      text: 'Menu3',
      Icon: FavoriteIcon,
      onClick: handleItemClick,
    },
  ];

  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          allowToggleOpen
          allowReorder
          ref={setRef}
          activeId={activeId}
          onHelpClick={handleHelpClick}
          disableAutoCloseOnClick
          disableAutoOpenOnClick={disableAutoOpenOnClick}
          submenuContainer={document.getElementById('container')}
          autoOpenSubmenuTimeout={allowAutoOpenSubmenu ? 1000 : undefined}
          onMenuItemClick={handleMenuItemClick}
          items={[
            {
              Icon: FavoriteIcon,
              id: 1,
              link: '#1',
              text: 'First text',
              submenu: createSubmenuWithIcon(1),
              onClick: handleItemClick,
            },
            {
              Icon: FavoriteIcon,
              id: 2,
              link: '#2',
              text: 'Second text long long long long text',
              submenu: createSubmenuWithIcon(2),
              onClick: handleItemClick,
            },
            {
              Icon: FavoriteIcon,
              id: 3,
              link: '#3',
              text: 'Third text',
              submenu: createSubmenu(3),
              onClick: handleItemClick,
            },
            {
              Icon: FavoriteIcon,
              id: 4,
              link: '#4',
              text: 'Fourth text',
              onClick: handleItemClick,
            },
          ]}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

### Reordering

```tsx
const originalItems = [
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
  ];

  const [items, setItems] = useState<SidebarMenuItemEntity[]>(originalItems);

  const handleReorderSave = useActionCallback(
    'onReorderSave',
    async (event: MouseEvent, newItemOrder: MenuItemOrder) => {
      const configuredItems: SidebarMenuItemEntity[] = [];
      originalItems.forEach((item) => {
        const itemCustomizationProps = newItemOrder[item.id];
        configuredItems.push({ ...item, customizationProps: itemCustomizationProps });
      });
      const orderedItems = sortBy(configuredItems, (item) => item.customizationProps.customizedOrder);

      setItems(orderedItems);
    },
  );

  const handleResetReorder = useActionCallback('onResetReorder', () => {
    setItems(originalItems);
  });

  const handleToggleReorderMode = useActionCallback('onToggleReorderMode');
  const handleHelpClick = useActionCallback('onHelpClick');
  const handleFullscreenClick = useActionCallback('onFullscreenClick');

  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          activeId={1}
          open={false}
          allowToggleOpen
          allowReorder
          items={items}
          onHelpClick={handleHelpClick}
          onFullscreenClick={handleFullscreenClick}
          onReorderSave={handleReorderSave}
          onToggleReorderMode={handleToggleReorderMode}
          onResetReorder={handleResetReorder}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

### ReorderingWithFixedItems

```tsx
const originalItems = [
    { Icon: FavoriteIcon, id: 0, link: '#0', text: 'Fixed 2', priority: true },
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
    { Icon: HomeIcon, id: 5, link: '#5', text: 'Fixed 1', priority: true, order: 100 },
  ];

  const [items, setItems] = useState<SidebarMenuItemEntity[]>(originalItems);

  const handleHelpClick = useActionCallback('onHelpClick');

  const handleReorderSave = useActionCallback(
    'onReorderSave',
    async (event: MouseEvent, newItemOrder: MenuItemOrder) => {
      const configuredItems: SidebarMenuItemEntity[] = [];
      originalItems.forEach((item) => {
        const itemCustomizationProps = newItemOrder[item.id];
        configuredItems.push({ ...item, customizationProps: itemCustomizationProps });
      });
      const orderedItems = sortBy(configuredItems, (item) => item.customizationProps.customizedOrder);

      setItems(orderedItems);
    },
  );

  const handleResetReorder = useActionCallback('onResetReorder', () => {
    setItems(originalItems);
  });

  const handleToggleReorderMode = useActionCallback('onToggleReorderMode');
  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          activeId={1}
          open={false}
          allowToggleOpen
          allowReorder
          items={items}
          onHelpClick={handleHelpClick}
          onReorderSave={handleReorderSave}
          onResetReorder={handleResetReorder}
          onToggleReorderMode={handleToggleReorderMode}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

### SingleMenuItems

```tsx
const allowAutoOpenSubmenu = boolean('allowAutoOpenSubmenu (auto open submenu by timer)', false);
  const disableAutoOpenOnClick = boolean('disableAutoOpenOnClick (auto open submenu when clicked)', false);

  const handleHelpClick = useActionCallback('onHelpClick');
  const handleMenuItemClick = useActionCallback('onMenuItemClick');

  const items = [
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
  ];

  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          allowReorder
          allowToggleOpen
          activeId={1}
          onHelpClick={handleHelpClick}
          onMenuItemClick={handleMenuItemClick}
          disableAutoCloseOnClick
          disableAutoOpenOnClick={disableAutoOpenOnClick}
          submenuContainer={document.getElementById('container')}
          autoOpenSubmenuTimeout={allowAutoOpenSubmenu ? 1000 : undefined}
          items={items}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

### Sizes

**NormalSize**

```tsx
const items = [
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
  ];

  const handleHelpClick = useActionCallback('onHelpClick');
  const handleFullscreenClick = useActionCallback('onFullscreenClick');

  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          allowToggleOpen
          activeId={1}
          items={items}
          open={false}
          onHelpClick={handleHelpClick}
          onFullscreenClick={handleFullscreenClick}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

**WideSize**

```tsx
const items = [
    {
      Icon: FavoriteIcon,
      id: 1,
      link: '#1',
      text: 'First text',
    },
    {
      Icon: FavoriteIcon,
      id: 2,
      link: '#2',
      text: 'Second text',
    },
    {
      Icon: FavoriteIcon,
      id: 3,
      link: '#3',
      text: 'Third text',
    },
    {
      Icon: FavoriteIcon,
      id: 4,
      link: '#4',
      text: 'Fourth text',
    },
  ];

  const handleHelpClick = useActionCallback('onHelpClick');
  const handleFullscreenClick = useActionCallback('onFullscreenClick');

  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          allowToggleOpen
          size="wide"
          activeId={1}
          items={items}
          open={false}
          onHelpClick={handleHelpClick}
          onFullscreenClick={handleFullscreenClick}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

### TextWrapping

```tsx
const [open, setOpen] = useState(true);
  const handleOpen = useActionCallback('onOpen', () => setOpen(!open));
  const handleHelpClick = useActionCallback('onHelpClick');

  return (
    <Stack component={Container} fullPage noMargin>
      <Stack direction="row" position="relative" flex="1 1">
        <Sidebar
          activeId={2}
          open={open}
          onOpen={handleOpen}
          onHelpClick={handleHelpClick}
          items={[
            {
              Icon: FavoriteIcon,
              id: 1,
              link: '#1',
              text: 'Long long very extremly long first text',
            },
            {
              Icon: FavoriteIcon,
              id: 2,
              link: '#2',
              text: 'Second text',
            },
            {
              Icon: FavoriteIcon,
              id: 3,
              link: '#3',
              text: 'Third text',
            },
            {
              Icon: FavoriteIcon,
              id: 4,
              link: '#4',
              text: 'Fourth text',
            },
          ]}
        />
        <SidebarContent />
      </Stack>
    </Stack>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
