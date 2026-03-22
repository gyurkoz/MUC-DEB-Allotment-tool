# Card

Card component

## Overview

- **Category**: others
- **Base Library**: mui
- **MUI Component**: Card

## Description

__Note__: the interface differs from the material-ui Card interface.

It has only one additional prop, the `background`.<br />
Any prop can be used from material-ui.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Card } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const content = (
    <>
      <CardHeader title="Card header" />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </CardContent>
      <CardActions>
        <Button variant="contained">Action</Button>
      </CardActions>
    </>
  );

  return (
    <>
      <Card component="form" raised noValidate>
        {content}
      </Card>
      <Card raised>{content}</Card>
      <Card>{content}</Card>
      <Card background="grey" raised>
        {content}
      </Card>
      <Card background="grey">{content}</Card>
    </>
  );
};
CardStory.storyName = 'Card';

export default {
  title: 'Others/Card',
  component: Card,
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `background` | `oneOf` |  | @Empty, Please add a description to the property |
| `children` | `node` |  | The content of the component. |
| `className` | `string` |  | @Empty, Please add a description to the property |
| `raised` | `bool` |  | If `true`, the card will use raised styling. |

## Examples

```tsx
const content = (
    <>
      <CardHeader title="Card header" />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </CardContent>
      <CardActions>
        <Button variant="contained">Action</Button>
      </CardActions>
    </>
  );

  return (
    <>
      <Card component="form" raised noValidate>
        {content}
      </Card>
      <Card raised>{content}</Card>
      <Card>{content}</Card>
      <Card background="grey" raised>
        {content}
      </Card>
      <Card background="grey">{content}</Card>
    </>
  );
};
CardStory.storyName = 'Card';

export default {
  title: 'Others/Card',
  component: Card,
```

## MUI Reference

This component is based on Material-UI's Card.

For additional props and detailed API documentation, refer to:

- [MUI Card Documentation](https://mui.com/material-ui/api/card/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
