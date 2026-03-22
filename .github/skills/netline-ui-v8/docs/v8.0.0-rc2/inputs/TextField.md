# Text Field

Text Field component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: TextField

## Description

Text Fields let users enter and edit text.

This component is an extension of [MUI TextField](https://v5.mui.com/material-ui/react-text-field/)
component. Props are available there can be used here as well.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { TextField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Default
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              defaultValue={5}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              defaultValue={5}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              size="small"
              defaultValue={5}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              size="small"
              defaultValue={5}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Focused
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              disabled
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              size="small"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              size="small"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Read-only
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              readOnly
              value="readOnly"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              value="readOnly"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              readOnly
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              size="small"
              readOnly
              value="readOnly"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              size="small"
              value="readOnly"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## Variants

- Disabled
- Small
- Disabled
- Small
- Small
- Disabled
- Small
- Medium
- Disabled
- Small

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `node` |  | @ignore |
| `error` | `bool` |  | If `true`, the label is displayed in an error state. @default false |
| `helperText` | `node` |  | The helper text content. |
| `inlineError` | `bool` |  | Wheter to display the validation error next to the label (true) or below the input field (false). |
| `errorMode` | `oneOf` |  | Select the place of error icon in case of `error` is set @default 'input' |
| `errorTooltip` | `oneOf` |  | The place where the error message should be placed: - false: the error messge will be rendered below the input field - true: the error message will be rendered in a tooltip on the error icon @default `true` when `errorMode` is set to `label`, otherwise `false` |
| `InputLabelProps` | `object` |  | Props applied to the [`InputLabel`](/material-ui/api/input-label/) element. Pointer events like `onClick` are enabled if and only if `shrink` is `true`. |
| `inputProps` | `object` |  | [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element. |
| `InputProps` | `object` |  | Props applied to the Input element. It will be a [`FilledInput`](/material-ui/api/filled-input/), [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/) component depending on the `variant` prop value. |
| `label` | `node` |  | The label content. |
| `labelAdornments` | `node` |  | Extra content rendered next to the label content. |
| `readOnly` | `bool` |  | It prevents the user from changing the value of the field (not from interacting with the field). |
| `startIcon` | `any` |  | Icons set here are placed before the text input. |
| `startIconProps` | `object` |  | Extra props which are added to the StartIcon |
| `textCase` | `oneOf` |  | The case of the input text (only css transformations are done to avoid jumping cursor).  @default 'default' |

## Examples

### Adornments

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Default
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              defaultValue={5}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              defaultValue={5}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              size="small"
              defaultValue={5}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              size="small"
              defaultValue={5}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Focused
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              disabled
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              size="small"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              size="small"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Read-only
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              readOnly
              value="readOnly"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              value="readOnly"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              readOnly
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              size="small"
              readOnly
              value="readOnly"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              size="small"
              value="readOnly"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Default
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              defaultValue={5}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              defaultValue={5}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              size="small"
              defaultValue={5}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Default"
              size="small"
              defaultValue={5}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Focused
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              slotProps={{
                input: {
                  className: outlinedInputClasses.focused,
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              disabled
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              size="small"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Disabled"
              size="small"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="Active"
              size="small"
              defaultValue="filled"
              disabled
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Read-only
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              readOnly
              value="readOnly"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              value="readOnly"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              readOnly
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              size="small"
              readOnly
              value="readOnly"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              placeholder="readOnly"
              size="small"
              value="readOnly"
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                },
                htmlInput: {
                  style: { textAlign: 'right' },
                },
              }}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

### Errors

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Error (Default)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              size="small"
              error
              helperText="Very long and informative error description."
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              error
              helperText="Very long and informative error description."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Error (Focused)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              size="small"
              error
              helperText="Very long and informative error description."
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              error
              helperText="Very long and informative error description."
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Inline Error (Default)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              size="small"
              error
              errorMode="label"
              helperText="Very long and informative error description."
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              error
              errorMode="label"
              helperText="Very long and informative error description."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Inline Error (Focused)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              size="small"
              error
              errorMode="label"
              helperText="Very long and informative error description."
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label"
              defaultValue="Value"
              error
              errorMode="label"
              helperText="Very long and informative error description."
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label must have ellipsis when it is too long"
              defaultValue="Value"
              size="small"
              error
              errorMode="label"
              helperText="Very long and informative error description."
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label must have ellipsis when it is too long"
              defaultValue="Value"
              error
              errorMode="label"
              helperText="Very long and informative error description."
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Error (No label)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              defaultValue="Value"
              size="small"
              error
              helperText="Very long and informative error description."
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth defaultValue="Value" error helperText="Very long and informative error description." />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 / 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Inline Error (No label)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              defaultValue="Value"
              size="small"
              error
              errorMode="label"
              errorTooltip
              helperText="Very long and informative error description."
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              defaultValue="Value"
              error
              errorMode="label"
              errorTooltip
              helperText="Very long and informative error description."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

### Status

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Default
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Label (small)" placeholder="Default" size="small" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Label (medium)" placeholder="Default" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Active (Focused)
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label (small)"
              placeholder="Active"
              size="small"
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label (medium)"
              placeholder="Active"
              slotProps={{ input: { className: outlinedInputClasses.focused } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Label (small)" placeholder="Default" size="small" defaultValue="filled" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Label (medium)" placeholder="Default" defaultValue="filled" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Label (small)" placeholder="Disabled" size="small" disabled />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth id="active" label="Label (medium)" placeholder="Disabled" disabled />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Disabled - Filled
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label (small)"
              placeholder="Default"
              size="small"
              defaultValue="filled"
              disabled
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Label (medium)" placeholder="Default" defaultValue="filled" disabled />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Read-only
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Label (small)"
              placeholder="readOnly"
              defaultValue="readOnly"
              size="small"
              readOnly
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="active"
              label="Label (medium)"
              placeholder="readOnly"
              defaultValue="readOnly"
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

### Variations

```tsx
const [value, setValue] = React.useState('Value');

  const handleInputChange = useActionCallback('onChange', (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Basic
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Label" size="small" placeholder="Default" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Label" placeholder="Default" />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Basic with Filter Icon
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                size="small"
                value={value}
                onInput={handleInputChange}
                startIcon="filter"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                value={value}
                onInput={handleInputChange}
                startIcon="filter"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Disabled with icon
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                size="small"
                disabled
                value={value}
                onInput={handleInputChange}
                startIcon="filter"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                disabled
                value={value}
                onInput={handleInputChange}
                startIcon="filter"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Basic with Fixed icon
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                size="small"
                value={value}
                onInput={handleInputChange}
                startIcon="search"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                value={value}
                onInput={handleInputChange}
                startIcon="search"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Adornment left
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                size="small"
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">hours</InputAdornment>,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Adornment right
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                size="small"
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                  },
                  htmlInput: {
                    style: { textAlign: 'right' },
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Default"
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                  },
                  htmlInput: {
                    style: { textAlign: 'right' },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 / 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Multiline
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Hint"
                size="small"
                multiline
                rows="4"
                defaultValue="Multiline Value Multiline Value Multiline Value Multiline Value Multiline Value"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Label"
                placeholder="Hint"
                multiline
                rows="4"
                defaultValue="Multiline Value Multiline Value Multiline Value Multiline Value Multiline Value"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
```

## MUI Reference

This component is based on Material-UI's TextField.

For additional props and detailed API documentation, refer to:

- [MUI TextField Documentation](https://mui.com/material-ui/api/textfield/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
