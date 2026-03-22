# Dialog

Dialog component

## Overview

- **Category**: others
- **Base Library**: mui
- **MUI Component**: Dialog

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Dialog } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
BasicDialog.parameters = storyParameters;

export const DialogWithActions = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const paragraphCount = number('Paragraph count', 1, {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  });

  const type = select('Type', [undefined, 'error', 'warning', 'info', 'custom'], undefined);

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle
          onBack={boolean('Back button', true) ? handleClose : undefined}
          onClose={boolean('Close button', true) ? handleClose : undefined}
          type={type === 'custom' ? undefined : type}
          Icon={type === 'custom' ? FavoriteIcon : undefined}
          iconProps={type === 'custom' ? { color: 'action' } : undefined}
        >
          {text(
            'Title',
            'Dialog with very very very long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          )}
        </DialogTitle>
        {paragraphCount > 0 && (
          <DialogContent>
            {Array(paragraphCount)
              .fill(0)
              .map((paragraph, idx) => (
                <DialogContentText key={[paragraph, idx].join()}>{loremIpsum}</DialogContentText>
              ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button size="medium">{text('Secondary button', 'Decline')}</Button>
          <Button size="medium" variant="contained">
            {text('Primary button', 'Accept')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithActions.parameters = storyParameters;

export const DialogWithErrorMessage = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const paragraphCount = number('Paragraph count', 1, {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  });

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle type="error">{text('Title', 'Something went wrong!')}</DialogTitle>
        {paragraphCount > 0 && (
          <DialogContent>
            {Array(paragraphCount)
              .fill(0)
              .map((paragraph, idx) => (
                <DialogContentText key={[paragraph, idx].join()}>
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis
                  ornare.
                </DialogContentText>
              ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button size="medium" variant="contained">
            {text('Primary button', 'OK')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithErrorMessage.parameters = storyParameters;

export const DialogWithWarningMessage = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const paragraphCount = number('Paragraph count', 1, {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  });

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle type="warning">{text('Title', 'Something went wrong!')}</DialogTitle>
        {paragraphCount > 0 && (
          <DialogContent>
            {Array(paragraphCount)
              .fill(0)
              .map((paragraph, idx) => (
                <DialogContentText key={[paragraph, idx].join()}>
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis
                  ornare.
                </DialogContentText>
              ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button size="medium" variant="contained">
            {text('Primary button', 'OK')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithWarningMessage.parameters = storyParameters;

export const DialogWithInfoMessage = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle type="info">Info</DialogTitle>
        <DialogContent>Dialog content</DialogContent>
        <DialogActions>
          <Button size="medium" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithInfoMessage.parameters = storyParameters;

export const FullscreenDialog = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle onClose={handleClose}>Dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
FullscreenDialog.parameters = storyParameters;

const ExampleComponent = () => {
  const { showDialog, hideDialog } = useDialog();
  const handleClick = () => {
    showDialog({
      title: 'Dialog title',
      content: loremIpsum,
      actions: [
        {
          id: 'OK',
          text: 'OK',
        },
      ],
      onActionClick: (action, event) => {
        handleAction('onActionClick', () => {
          hideDialog();
        })(action, event);
      },
    });
  };

  return (
    <Button variant="contained" size="large" onClick={handleClick}>
      Open Dialog
    </Button>
  );
};

export const UsingWithDialogProvider = () => (
  <DialogProvider location={text('location', '')} hideOnRouteChange={boolean('hide on route change', true)}>
    <ExampleComponent />
  </DialogProvider>
);
UsingWithDialogProvider.storyName = 'Using with DialogProvider';
UsingWithDialogProvider.parameters = storyParameters;

export default {
  title: 'Others/Dialog',
  component: Dialog,
  decorators: [withKnobs],
```

## Variants

- Medium
- Large

## Examples

### BasicDialog

```tsx
const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
BasicDialog.parameters = storyParameters;

export const DialogWithActions = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const paragraphCount = number('Paragraph count', 1, {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  });

  const type = select('Type', [undefined, 'error', 'warning', 'info', 'custom'], undefined);

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle
          onBack={boolean('Back button', true) ? handleClose : undefined}
          onClose={boolean('Close button', true) ? handleClose : undefined}
          type={type === 'custom' ? undefined : type}
          Icon={type === 'custom' ? FavoriteIcon : undefined}
          iconProps={type === 'custom' ? { color: 'action' } : undefined}
        >
          {text(
            'Title',
            'Dialog with very very very long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          )}
        </DialogTitle>
        {paragraphCount > 0 && (
          <DialogContent>
            {Array(paragraphCount)
              .fill(0)
              .map((paragraph, idx) => (
                <DialogContentText key={[paragraph, idx].join()}>{loremIpsum}</DialogContentText>
              ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button size="medium">{text('Secondary button', 'Decline')}</Button>
          <Button size="medium" variant="contained">
            {text('Primary button', 'Accept')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithActions.parameters = storyParameters;

export const DialogWithErrorMessage = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const paragraphCount = number('Paragraph count', 1, {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  });

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle type="error">{text('Title', 'Something went wrong!')}</DialogTitle>
        {paragraphCount > 0 && (
          <DialogContent>
            {Array(paragraphCount)
              .fill(0)
              .map((paragraph, idx) => (
                <DialogContentText key={[paragraph, idx].join()}>
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis
                  ornare.
                </DialogContentText>
              ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button size="medium" variant="contained">
            {text('Primary button', 'OK')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithErrorMessage.parameters = storyParameters;

export const DialogWithWarningMessage = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const paragraphCount = number('Paragraph count', 1, {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  });

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle type="warning">{text('Title', 'Something went wrong!')}</DialogTitle>
        {paragraphCount > 0 && (
          <DialogContent>
            {Array(paragraphCount)
              .fill(0)
              .map((paragraph, idx) => (
                <DialogContentText key={[paragraph, idx].join()}>
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis
                  ornare.
                </DialogContentText>
              ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button size="medium" variant="contained">
            {text('Primary button', 'OK')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithWarningMessage.parameters = storyParameters;

export const DialogWithInfoMessage = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  // disableEnforceFocus is to needed to use knobs
  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEnforceFocus>
        <DialogTitle type="info">Info</DialogTitle>
        <DialogContent>Dialog content</DialogContent>
        <DialogActions>
          <Button size="medium" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DialogWithInfoMessage.parameters = storyParameters;

export const FullscreenDialog = () => {
  const [open, setOpen] = useState(isTesting());
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle onClose={handleClose}>Dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
          <DialogContentText>{loremIpsum}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
FullscreenDialog.parameters = storyParameters;

const ExampleComponent = () => {
  const { showDialog, hideDialog } = useDialog();
  const handleClick = () => {
    showDialog({
      title: 'Dialog title',
      content: loremIpsum,
      actions: [
        {
          id: 'OK',
          text: 'OK',
        },
      ],
      onActionClick: (action, event) => {
        handleAction('onActionClick', () => {
          hideDialog();
        })(action, event);
      },
    });
  };

  return (
    <Button variant="contained" size="large" onClick={handleClick}>
      Open Dialog
    </Button>
  );
};

export const UsingWithDialogProvider = () => (
  <DialogProvider location={text('location', '')} hideOnRouteChange={boolean('hide on route change', true)}>
    <ExampleComponent />
  </DialogProvider>
);
UsingWithDialogProvider.storyName = 'Using with DialogProvider';
UsingWithDialogProvider.parameters = storyParameters;

export default {
  title: 'Others/Dialog',
  component: Dialog,
  decorators: [withKnobs],
```

### UsingWithDialogProvider

```tsx
<DialogProvider location={text('location', '')} hideOnRouteChange={boolean('hide on route change', true)}>
    <ExampleComponent />
  </DialogProvider>
```

## MUI Reference

This component is based on Material-UI's Dialog.

For additional props and detailed API documentation, refer to:

- [MUI Dialog Documentation](https://mui.com/material-ui/api/dialog/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
