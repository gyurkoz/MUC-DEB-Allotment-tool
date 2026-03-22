# Netline Breadcrumbs

Netline Breadcrumbs component

## Overview

- **Category**: navigation
- **Base Library**: custom

## Description

Breadcrumb component which can be used for multi-level navigation.

Note: The interface differs from material-ui Breadcrumb interface.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { NetlineBreadcrumbs } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const items = [
    {
      id: '1',
      title: 'Home',
      link: '#',
    },
    {
      id: '2',
      title: 'Long Children Page',
      link: '#',
    },
    {
      id: '3',
      title: 'Child page',
      link: '#',
    },
    {
      id: '4',
      title: 'Child page',
      link: '#',
    },
    {
      id: '5',
      title: 'Current page',
      // link: '',
    },
  ];
  return <NetlineBreadcrumbs items={items} maxInlineItems={4} maxItemChar={8} />;
};
Sample.tags = ['hideInSidebar'];

export const BreadcrumbsStory = () => {
  const items = [
    {
      id: '1',
      title: 'Home',
      link: '#',
    },
    {
      id: '2',
      title: 'Long Children Page',
      link: '#',
    },
    {
      id: '3',
      title: 'Child page',
      link: '#',
    },
    {
      id: '4',
      title: 'Child page',
      link: '#',
    },
    {
      id: '5',
      title: 'Current page',
      // link: '',
    },
  ];

  return (
    <>
      <p>Breadcrumb:</p>
      <NetlineBreadcrumbs items={items} maxInlineItems={false} />
      <div style={{ marginBottom: '16px' }}>
        <p style={{ paddingLeft: '16px' }}>Render all items:</p>
        <NetlineBreadcrumbs items={items} maxInlineItems={6} />
      </div>
      <p>Breadcrumb with truncation:</p>
      <div style={{ marginBottom: '16px' }}>
        <NetlineBreadcrumbs items={items} maxItemChar={8} />
      </div>
      <p>Breadcrumb with Menu:</p>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ paddingLeft: '16px' }}>Default:</p>
        <NetlineBreadcrumbs items={items} maxInlineItems />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ paddingLeft: '16px' }}>Specified:</p>
        <NetlineBreadcrumbs items={items} maxInlineItems={5} />
      </div>
      <p>Breadcrumb with Paper</p>
      <Paper elevation={1} style={{ marginBottom: '16px' }}>
        <NetlineBreadcrumbs items={items} maxInlineItems={false} />
      </Paper>
    </>
  );
};
BreadcrumbsStory.storyName = 'Variants';

export default {
  title: 'Navigation/Breadcrumbs',
  component: NetlineBreadcrumbs,
```

## Examples

```tsx
const items = [
    {
      id: '1',
      title: 'Home',
      link: '#',
    },
    {
      id: '2',
      title: 'Long Children Page',
      link: '#',
    },
    {
      id: '3',
      title: 'Child page',
      link: '#',
    },
    {
      id: '4',
      title: 'Child page',
      link: '#',
    },
    {
      id: '5',
      title: 'Current page',
      // link: '',
    },
  ];
  return <NetlineBreadcrumbs items={items} maxInlineItems={4} maxItemChar={8} />;
};
Sample.tags = ['hideInSidebar'];

export const BreadcrumbsStory = () => {
  const items = [
    {
      id: '1',
      title: 'Home',
      link: '#',
    },
    {
      id: '2',
      title: 'Long Children Page',
      link: '#',
    },
    {
      id: '3',
      title: 'Child page',
      link: '#',
    },
    {
      id: '4',
      title: 'Child page',
      link: '#',
    },
    {
      id: '5',
      title: 'Current page',
      // link: '',
    },
  ];

  return (
    <>
      <p>Breadcrumb:</p>
      <NetlineBreadcrumbs items={items} maxInlineItems={false} />
      <div style={{ marginBottom: '16px' }}>
        <p style={{ paddingLeft: '16px' }}>Render all items:</p>
        <NetlineBreadcrumbs items={items} maxInlineItems={6} />
      </div>
      <p>Breadcrumb with truncation:</p>
      <div style={{ marginBottom: '16px' }}>
        <NetlineBreadcrumbs items={items} maxItemChar={8} />
      </div>
      <p>Breadcrumb with Menu:</p>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ paddingLeft: '16px' }}>Default:</p>
        <NetlineBreadcrumbs items={items} maxInlineItems />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ paddingLeft: '16px' }}>Specified:</p>
        <NetlineBreadcrumbs items={items} maxInlineItems={5} />
      </div>
      <p>Breadcrumb with Paper</p>
      <Paper elevation={1} style={{ marginBottom: '16px' }}>
        <NetlineBreadcrumbs items={items} maxInlineItems={false} />
      </Paper>
    </>
  );
};
BreadcrumbsStory.storyName = 'Variants';

export default {
  title: 'Navigation/Breadcrumbs',
  component: NetlineBreadcrumbs,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
