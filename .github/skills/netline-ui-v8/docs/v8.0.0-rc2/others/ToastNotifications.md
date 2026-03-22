# Toast Notifications

Toast notifications (Snackbars) integration

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ToastNotifications } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const MyApp = () => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
      const warningMessage = 'Warning: Morbi leo risus, porta ac consectetur ac, vestibulum at eros.';
      enqueueSnackbar(warningMessage, { variant: 'warning' });
    }, [enqueueSnackbar]);

    return null;
  };

  return (
    <SnackbarProvider>
      <MyApp />
    </SnackbarProvider>
  );
```

## Variants

- Large

## Examples

### Warning

```tsx
const MyApp = () => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
      const warningMessage = 'Warning: Morbi leo risus, porta ac consectetur ac, vestibulum at eros.';
      enqueueSnackbar(warningMessage, { variant: 'warning' });
    }, [enqueueSnackbar]);

    return null;
  };

  return (
    <SnackbarProvider>
      <MyApp />
    </SnackbarProvider>
  );
```

### Success

```tsx
const MyApp = () => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
      const successMessage = 'Success: Morbi leo risus, porta ac consectetur ac, vestibulum at eros.';
      enqueueSnackbar(successMessage, {
        variant: 'success',
        autoHideDuration: 5000,
      });
    }, [enqueueSnackbar]);

    return null;
  };

  const handleCloseClick = (close: ProviderContext['closeSnackbar'], event: React.MouseEvent<HTMLButtonElement>) => {
    handleAction('onCloseClick', () => {
      close();
    })(close, event);
  };

  return (
    <SnackbarProvider onCloseClick={handleCloseClick}>
      <MyApp />
    </SnackbarProvider>
  );
```

### Info

```tsx
const notistackRef = useRef<any | null>(null);
  const onClickDismiss = (key: string | number) => () => {
    notistackRef.current!.closeSnackbar(key);
  };

  const MyApp = () => {
    const { enqueueSnackbar } = useSnackbar();
    const action = (key: string | number) => (
      <Button size="large" onClick={onClickDismiss(key)}>
        Button
      </Button>
    );

    useEffect(() => {
      const infoMessage = 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.';
      enqueueSnackbar(infoMessage, {
        action,
      });
    }, [enqueueSnackbar]);

    return null;
  };

  return (
    <SnackbarProvider ref={notistackRef}>
      <MyApp />
    </SnackbarProvider>
  );
```

### ErrorWithButton

```tsx
<SnackbarProvider>
    <ErrorWithButtonApp />
  </SnackbarProvider>
```

### ToastMoreTimes

```tsx
<SnackbarProvider>
    <Container>
      <ToastMoreTimesApp />
    </Container>
  </SnackbarProvider>
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
