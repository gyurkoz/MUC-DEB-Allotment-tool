# Tab

Tab component

## Overview

- **Category**: navigation
- **Base Library**: mui
- **MUI Component**: Tab

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Tab } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Tabs value={0}>
    <Tab label="Tab Item" RightIcon={FavoriteIcon} />
  </Tabs>
```

## Variants

- Inverse
- Disabled

## Examples

### Sample

```tsx
<Tabs value={0}>
    <Tab label="Tab Item" RightIcon={FavoriteIcon} />
  </Tabs>
```

### Tab

**TabItems**

```tsx
<Grid container alignItems="center" spacing={1}>
        <Grid
          size={{ xs: 12 }}
          container
          alignItems="center"
          spacing={2}
          style={{ color: inverse ? 'white' : 'inherit' }}
        >
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Default
          </Grid>
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Hover
          </Grid>
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Pressed
          </Grid>
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Selected
          </Grid>
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Selected Hover
          </Grid>
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Selected Pressed
          </Grid>
          <Grid size={{ xs: 12 / 7 }} component={Typography} variant="subtitle2">
            Disabled
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" className="hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" className="pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} className="selected" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} className="selected hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} className="selected pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" disabled />
            </Tabs>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} className="hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} className="pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} icon={<FavoriteIcon />} className="selected" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} icon={<FavoriteIcon />} className="selected hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} icon={<FavoriteIcon />} className="selected pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} disabled />
            </Tabs>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} RightIcon={CloseIcon} />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} RightIcon={CloseIcon} className="hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} RightIcon={CloseIcon} className="pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} RightIcon={CloseIcon} className="selected" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} RightIcon={CloseIcon} className="selected hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} RightIcon={CloseIcon} className="selected pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} RightIcon={CloseIcon} disabled />
            </Tabs>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} RightIcon={CloseIcon} />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} RightIcon={CloseIcon} className="hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} RightIcon={CloseIcon} className="pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={1} icon={<FavoriteIcon />} RightIcon={CloseIcon} className="selected" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab
                label="Tab item"
                value={1}
                icon={<FavoriteIcon />}
                RightIcon={CloseIcon}
                className="selected hovered"
              />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab
                label="Tab item"
                value={1}
                icon={<FavoriteIcon />}
                RightIcon={CloseIcon}
                className="selected pressed"
              />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab label="Tab item" value={0} icon={<FavoriteIcon />} RightIcon={CloseIcon} disabled />
            </Tabs>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab value={0} icon={<FavoriteIcon />} />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab value={0} icon={<FavoriteIcon />} className="hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab value={0} icon={<FavoriteIcon />} className="pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab icon={<FavoriteIcon />} value={1} className="selected" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab icon={<FavoriteIcon />} value={1} className="selected hovered" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={1}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab icon={<FavoriteIcon />} value={1} className="selected pressed" />
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12 / 7 }}>
            <Tabs
              value={false}
              inverse={inverse}
              contained={contained}
              orientation={vertical ? 'vertical' : 'horizontal'}
              style={{ width: 'fit-content' }}
            >
              <Tab value={0} icon={<FavoriteIcon />} disabled />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ),
  parameters: {
    viewport: { width: 1700 },
  },
```

## MUI Reference

This component is based on Material-UI's Tab.

For additional props and detailed API documentation, refer to:

- [MUI Tab Documentation](https://mui.com/material-ui/api/tab/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
