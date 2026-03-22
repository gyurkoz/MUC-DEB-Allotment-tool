# Error State

Error State component

## Overview

- **Category**: others
- **Base Library**: custom

## Description

The `buttons` prop should contain a button or an array of buttons or buttons in a Fragment.<br />
Additional props are passed to the root element.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ErrorState } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const buttonCount = number('Button count', 2, {
    range: true,
    min: 0,
    max: 3,
    step: 1,
  });

  return (
    <ErrorState
      buttons={
        buttonCount > 0 &&
        Array(buttonCount)
          .fill(0)
          .map((buttonText, idx) => <Button key={[buttonText, idx].join()}>{`Option ${idx + 1}`}</Button>)
      }
      title={text('Title', 'Nothing to show here')}
    >
      <Typography>
        This is probably because this or that may have happened. <br />
        You can resolve this either by option A or option B.
      </Typography>
    </ErrorState>
  );
};
ErrorStateStory.storyName = 'ErrorState';

export default {
  title: 'Others/ErrorState',
  component: ErrorState,
  decorators: [withKnobs],
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `buttons` | `node` |  | @Empty, Please add a description to the property |
| `children` | `node` |  | @Empty, Please add a description to the property |
| `title` | `node` |  | @Empty, Please add a description to the property |

## Examples

```tsx
const buttonCount = number('Button count', 2, {
    range: true,
    min: 0,
    max: 3,
    step: 1,
  });

  return (
    <ErrorState
      buttons={
        buttonCount > 0 &&
        Array(buttonCount)
          .fill(0)
          .map((buttonText, idx) => <Button key={[buttonText, idx].join()}>{`Option ${idx + 1}`}</Button>)
      }
      title={text('Title', 'Nothing to show here')}
    >
      <Typography>
        This is probably because this or that may have happened. <br />
        You can resolve this either by option A or option B.
      </Typography>
    </ErrorState>
  );
};
ErrorStateStory.storyName = 'ErrorState';

export default {
  title: 'Others/ErrorState',
  component: ErrorState,
  decorators: [withKnobs],
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
