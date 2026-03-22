# NetLine UI vs MUI DataGrid

Comparison and overview

## Overview

- **Category**: datagrid
- **Base Library**: mui-x
- **MUI Component**: DataGrid

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { DataGrid } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Grid container size={12} alignItems="center" spacing={1}>
      <Grid container size={12} spacing={1}>
        <Grid component={Typography} variant="subtitle2" size={6}>
          Mui Data Grid
        </Grid>
        <Grid component={Typography} variant="subtitle2" size={6}>
          NetLine UI Data Grid
        </Grid>
      </Grid>
      <Grid container size={12} spacing={1}>
        <Grid size={6}>
          <MuiThemeProvider theme={muiTheme}>
            <DataGridPremium rows={items} columns={columns} filterDisplayMode="header" />
          </MuiThemeProvider>
        </Grid>
        <Grid size={6}>
          <DataGridPremium rows={items} columns={columns} filterDisplayMode="header" />
        </Grid>
      </Grid>
    </Grid>
```

## Examples

```tsx
<Grid container size={12} alignItems="center" spacing={1}>
      <Grid container size={12} spacing={1}>
        <Grid component={Typography} variant="subtitle2" size={6}>
          Mui Data Grid
        </Grid>
        <Grid component={Typography} variant="subtitle2" size={6}>
          NetLine UI Data Grid
        </Grid>
      </Grid>
      <Grid container size={12} spacing={1}>
        <Grid size={6}>
          <MuiThemeProvider theme={muiTheme}>
            <DataGridPremium rows={items} columns={columns} filterDisplayMode="header" />
          </MuiThemeProvider>
        </Grid>
        <Grid size={6}>
          <DataGridPremium rows={items} columns={columns} filterDisplayMode="header" />
        </Grid>
      </Grid>
    </Grid>
```

## MUI Reference

This component is based on Material-UI's DataGrid.

For additional props and detailed API documentation, refer to:

- [MUI DataGrid Documentation](https://mui.com/material-ui/api/datagrid/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
