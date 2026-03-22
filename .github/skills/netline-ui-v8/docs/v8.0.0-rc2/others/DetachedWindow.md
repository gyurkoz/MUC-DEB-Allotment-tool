# Detached Window

Detached Window component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DetachedWindow } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window">
        <div>You can pass components here, which will be inside the popup window.</div>
      </DetachedWindow>
    </>
  );
};
BasicDivContent.storyName = 'Basic div content';

export const ChangeContent = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount((prev) => prev + 1);
  };

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window">
        <Button variant="contained" onClick={handleClicked}>
          Click Me
        </Button>
        <div>{`You clicked the button: ${count} times`}</div>
      </DetachedWindow>
    </>
  );
};
ChangeContent.storyName = 'Change content';

export const CustomPosition = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window" left={200} top={300}>
        <div>Custom position</div>
      </DetachedWindow>
    </>
  );
};
CustomPosition.storyName = 'Custom position';

export const CustomDimensions = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window" width={500} height={100}>
        <div>Custom dimensions</div>
      </DetachedWindow>
    </>
  );
};
CustomDimensions.storyName = 'Custom dimensions';

export const ResizeOnOtherScreen = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window" shouldResizeToFullScreen>
        <div>Moved to other screen</div>
      </DetachedWindow>
    </>
  );
};
ResizeOnOtherScreen.storyName = 'Moved to other screen and resized to fullscreen';

export const TitleAndFavIcon = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow
        open={open}
        onClose={handleClose}
        windowId="Detached Window"
        title="This is a title"
        faviconUrl={`${process.env.PUBLIC_URL}/netline.ico`}
      >
        <div>You can pass components here, which will be inside the popup window.</div>
      </DetachedWindow>
    </>
  );
};
TitleAndFavIcon.storyName = 'Title and favicon';

export default {
  title: 'Others/DetachedWindow',
  component: DetachedWindow,
```

## Examples

```tsx
const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window">
        <div>You can pass components here, which will be inside the popup window.</div>
      </DetachedWindow>
    </>
  );
};
BasicDivContent.storyName = 'Basic div content';

export const ChangeContent = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount((prev) => prev + 1);
  };

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window">
        <Button variant="contained" onClick={handleClicked}>
          Click Me
        </Button>
        <div>{`You clicked the button: ${count} times`}</div>
      </DetachedWindow>
    </>
  );
};
ChangeContent.storyName = 'Change content';

export const CustomPosition = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window" left={200} top={300}>
        <div>Custom position</div>
      </DetachedWindow>
    </>
  );
};
CustomPosition.storyName = 'Custom position';

export const CustomDimensions = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window" width={500} height={100}>
        <div>Custom dimensions</div>
      </DetachedWindow>
    </>
  );
};
CustomDimensions.storyName = 'Custom dimensions';

export const ResizeOnOtherScreen = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow open={open} onClose={handleClose} windowId="Detached Window" shouldResizeToFullScreen>
        <div>Moved to other screen</div>
      </DetachedWindow>
    </>
  );
};
ResizeOnOtherScreen.storyName = 'Moved to other screen and resized to fullscreen';

export const TitleAndFavIcon = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(async () => {
    const permissionGranted = await checkWindowManagementPermission();
    if (permissionGranted) {
      setOpen(true);
    }
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Detached Window
      </Button>
      <DetachedWindow
        open={open}
        onClose={handleClose}
        windowId="Detached Window"
        title="This is a title"
        faviconUrl={`${process.env.PUBLIC_URL}/netline.ico`}
      >
        <div>You can pass components here, which will be inside the popup window.</div>
      </DetachedWindow>
    </>
  );
};
TitleAndFavIcon.storyName = 'Title and favicon';

export default {
  title: 'Others/DetachedWindow',
  component: DetachedWindow,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
