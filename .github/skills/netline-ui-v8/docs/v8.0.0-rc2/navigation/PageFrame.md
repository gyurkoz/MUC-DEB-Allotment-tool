# Page Frame

Page Frame component

## Overview

- **Category**: navigation
- **Base Library**: custom

## Description

Additional props are passed to the root element.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { PageFrame } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const paragraphCount = number('Paragraph count', 5, {
    range: true,
    min: 0,
    max: 10,
    step: 1,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const itemList = [
    { id: 1, link: '#', text: 'Item 1', Icon: FavoriteIcon },
    { id: 2, link: '#', text: 'Item 2', Icon: FavoriteIcon },
  ];

  const onHelpClick = handleAction('onHelpClick');
  const onOpenClick = handleAction('onOpen', ({ open }: { open: boolean }) => setMenuOpen(open));

  return (
    <Container fullPage>
      <PageFrame
        header={
          <AppHeader title="PageFrame sample" onHelpClick={onHelpClick}>
            Message
          </AppHeader>
        }
        sidebar={<Sidebar itemList={itemList} open={menuOpen} onOpen={onOpenClick} />}
      >
        <div style={{ padding: '10px' }}>
          {Array(paragraphCount)
            .fill(0)
            .map((paragraph, idx) => (
              <p key={[paragraph, idx].join()}>{loremIpsum}</p>
            ))}
        </div>
      </PageFrame>
    </Container>
  );
};

PageFrameStory.parameters = {
  docs: {
    disable: true,
  },
};

PageFrameStory.storyName = 'PageFrame';

export default {
  title: 'Navigation/PageFrame',
  component: PageFrame,
  decorators: [withKnobs],
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | @Empty, Please add a description to the property |
| `header` | `node` |  | @Empty, Please add a description to the property |
| `sidebar` | `node` |  | @Empty, Please add a description to the property |

## Examples

```tsx
const paragraphCount = number('Paragraph count', 5, {
    range: true,
    min: 0,
    max: 10,
    step: 1,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const itemList = [
    { id: 1, link: '#', text: 'Item 1', Icon: FavoriteIcon },
    { id: 2, link: '#', text: 'Item 2', Icon: FavoriteIcon },
  ];

  const onHelpClick = handleAction('onHelpClick');
  const onOpenClick = handleAction('onOpen', ({ open }: { open: boolean }) => setMenuOpen(open));

  return (
    <Container fullPage>
      <PageFrame
        header={
          <AppHeader title="PageFrame sample" onHelpClick={onHelpClick}>
            Message
          </AppHeader>
        }
        sidebar={<Sidebar itemList={itemList} open={menuOpen} onOpen={onOpenClick} />}
      >
        <div style={{ padding: '10px' }}>
          {Array(paragraphCount)
            .fill(0)
            .map((paragraph, idx) => (
              <p key={[paragraph, idx].join()}>{loremIpsum}</p>
            ))}
        </div>
      </PageFrame>
    </Container>
  );
};

PageFrameStory.parameters = {
  docs: {
    disable: true,
  },
};

PageFrameStory.storyName = 'PageFrame';

export default {
  title: 'Navigation/PageFrame',
  component: PageFrame,
  decorators: [withKnobs],
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
