# Cookie Banner

Cookie Banner component

## Overview

- **Category**: others
- **Base Library**: custom

## Description

CookieBanner component provides an 'advanced' version for cookie policy accept.
It can be configured with multiple policy options, which users can select and accept.
There is also the option for updating the accepted policies with mode='update'

For a 'simpler' cookie banner please see the 'SimpleCookieBanner' component!

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CookieBanner } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={items}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInit.storyName = 'Cookie Banner Init';
CookieBannerInit.parameters = storyParameters;

export const CookieBannerInitWithThreeItems = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={[items[0], items[1], items[2]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInitWithThreeItems.storyName = 'Cookie Banner Init with three items';
CookieBannerInitWithThreeItems.parameters = storyParameters;

export const CookieBannerInitWithTwoItems = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={[items[0], items[1]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInitWithTwoItems.storyName = 'Cookie Banner Init with two items';
CookieBannerInitWithTwoItems.parameters = storyParameters;

export const CookieBannerInitWithOneItem = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={[items[0]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInitWithOneItem.storyName = 'Cookie Banner Init with one item';
CookieBannerInitWithOneItem.parameters = storyParameters;

export const CookieBannerSettings = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="update"
      items={items}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerSettings.storyName = 'Cookie Banner Settings';
CookieBannerSettings.parameters = storyParameters;

export const CookieBannerSettingsWithOneItem = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="update"
      items={[items[0]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerSettingsWithOneItem.storyName = 'Cookie Banner settings with one item';
CookieBannerSettingsWithOneItem.parameters = storyParameters;

export default {
  title: 'Others/CookieBanner',
  component: CookieBanner,
```

## Examples

```tsx
const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={items}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInit.storyName = 'Cookie Banner Init';
CookieBannerInit.parameters = storyParameters;

export const CookieBannerInitWithThreeItems = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={[items[0], items[1], items[2]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInitWithThreeItems.storyName = 'Cookie Banner Init with three items';
CookieBannerInitWithThreeItems.parameters = storyParameters;

export const CookieBannerInitWithTwoItems = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={[items[0], items[1]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInitWithTwoItems.storyName = 'Cookie Banner Init with two items';
CookieBannerInitWithTwoItems.parameters = storyParameters;

export const CookieBannerInitWithOneItem = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="init"
      items={[items[0]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerInitWithOneItem.storyName = 'Cookie Banner Init with one item';
CookieBannerInitWithOneItem.parameters = storyParameters;

export const CookieBannerSettings = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="update"
      items={items}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerSettings.storyName = 'Cookie Banner Settings';
CookieBannerSettings.parameters = storyParameters;

export const CookieBannerSettingsWithOneItem = () => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<CookieBannerProps['onClose']>((reason, checkedIds, event) => {
    handleAction('onClose', () => {
      setCookieBannerOpen(false);
    })(reason, checkedIds, event);
  }, []);

  return (
    <CookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      mode="update"
      items={[items[0]]}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptAllText="Accept all"
      acceptCheckedText="Accept selection"
      acceptText="Accept"
      cancelText="Cancel"
      saveText="Save settings"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    />
  );
};
CookieBannerSettingsWithOneItem.storyName = 'Cookie Banner settings with one item';
CookieBannerSettingsWithOneItem.parameters = storyParameters;

export default {
  title: 'Others/CookieBanner',
  component: CookieBanner,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
