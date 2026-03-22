# Menu List

Menu List component

## Overview

- **Category**: basic-ui
- **Base Library**: mui
- **MUI Component**: MenuList

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { MenuList } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Normal / No Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Divider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Small / No Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList dense>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Divider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Normal / With Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText>My account</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Small / With Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList dense>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText>My account</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## Examples

```tsx
<Grid container spacing={2}>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Normal / No Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Divider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Small / No Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList dense>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Divider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Normal / With Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText>My account</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
            Small / With Icon
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper>
              <MenuList dense>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText>My account</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
```

## MUI Reference

This component is based on Material-UI's MenuList.

For additional props and detailed API documentation, refer to:

- [MUI MenuList Documentation](https://mui.com/material-ui/api/menulist/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
