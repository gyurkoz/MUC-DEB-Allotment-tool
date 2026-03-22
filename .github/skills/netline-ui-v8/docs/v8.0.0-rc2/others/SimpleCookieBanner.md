# Simple Cookie Banner

Simple Cookie Banner component

## Overview

- **Category**: others
- **Base Library**: custom

## Description

The title of the cookie banner.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { SimpleCookieBanner } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<ComponentProps<typeof SimpleCookieBanner>['onClose']>(
    (/* event */) => {
      setCookieBannerOpen(false);
    },
    [],
  );

  return (
    <SimpleCookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptText="Accept"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    >
      These cookies are necessary to perform core functions of this website, such as security related functions.
      Therefore, they cannot be switched off in our systems. These cookies do not store any personally identifiable
      information.
    </SimpleCookieBanner>
  );
```

## Examples

### SimpleCookieBanner

```tsx
const [cookieBannerOpen, setCookieBannerOpen] = useState(true);

  const onCookieBannerClose = useCallback<ComponentProps<typeof SimpleCookieBanner>['onClose']>(
    (/* event */) => {
      setCookieBannerOpen(false);
    },
    [],
  );

  return (
    <SimpleCookieBanner
      open={cookieBannerOpen}
      onClose={onCookieBannerClose}
      title="Cookie settings"
      description="We use cookies to give you the best user experience. "
      acceptText="Accept"
      privacy={{
        text: 'Our privacy policy',
        url: 'https://lufthansa.com',
      }}
    >
      These cookies are necessary to perform core functions of this website, such as security related functions.
      Therefore, they cannot be switched off in our systems. These cookies do not store any personally identifiable
      information.
    </SimpleCookieBanner>
  );
```

### SimpleCookieBannerWithStorage

```tsx
const { cookieBannerOpen, onCookieBannerClose } = useSimpleCookieBanner(storageKey);

  const resetCookie = useCallback(() => {
    localStorage.removeItem(storageKey);
    window.location.reload();
  }, []);

  return (
    <>
      <Button onClick={resetCookie}>Reset cookie (needs page refresh)</Button>
      <SimpleCookieBanner
        open={cookieBannerOpen}
        onClose={onCookieBannerClose}
        title="Cookie settings"
        description="We use cookies to give you the best user experience. "
        acceptText="Accept"
        privacy={{
          text: 'Our privacy policy',
          url: 'https://lufthansa.com',
        }}
      >
        These cookies are necessary to perform core functions of this website, such as security related functions.
        Therefore, they cannot be switched off in our systems. These cookies do not store any personally identifiable
        information.
      </SimpleCookieBanner>
    </>
  );
};
SimpleCookieBannerWithStorage.storyName = 'SimpleCookieBannerWithStorage';
SimpleCookieBannerWithStorage.parameters = storyParameters;

export default {
  title: 'Others/SimpleCookieBanner',
  component: SimpleCookieBanner,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
