# Box

Wrapper component for most styling scenarios

## Overview

- **Category**: layout
- **Base Library**: mui
- **MUI Component**: Box

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Box } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Grid container alignItems="center" spacing={4}>
      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## Variants

- Disabled
- Small

## Examples

```tsx
<Grid container alignItems="center" spacing={4}>
      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Default
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Hover
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Focus
        </Grid>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Disabled
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" size="small" indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Medium
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error indeterminate disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Unchecked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="hovered" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" className="focused" />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Checked Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            checked
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" checked disabled />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
        <Grid size={{ xs: 2 }} component={Typography} variant="subtitle2">
          Error Indeterminate Small
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="hovered"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox
            value="1"
            label="Checkbox"
            helperText="Invalid field"
            error
            size="small"
            indeterminate
            className="focused"
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Checkbox value="1" label="Checkbox" helperText="Invalid field" error size="small" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## MUI Reference

This component is based on Material-UI's Box.

For additional props and detailed API documentation, refer to:

- [MUI Box Documentation](https://mui.com/material-ui/api/box/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
