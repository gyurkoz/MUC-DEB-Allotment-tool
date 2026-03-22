# Autocomplete

Autocomplete component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: Autocomplete

## Description

Basic component which can be used to build up an autocompletion (text) field.

Instead of building a new component from scratch using `Autocomplete`, there are two components available
out-of-the-box which provide select and multi select functionality with async support.

Please use those components if possible as they comply with the UX standards (text, icon sizes, etc):
- `SingleSelectField` for single select implementation.
- `MultiSelectField` for multi select implementation.

The autocomplete is a normal text input enhanced by a panel of suggested options.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Autocomplete } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const options = ['red', 'green', 'blue'];

  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With default value"
                placeholder="Choose one or more items"
                required
              />
            )}
          />
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                autoFocus
                fullWidth
                label="With default value"
                placeholder="Choose one or more items"
                required
              />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Without default value" placeholder="Choose one or more items" />
            )}
          />
          <Autocomplete
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Without default value" placeholder="Choose one or more items" />
            )}
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export const Variants = () => {
  const options = ['test1', 'test2', 'test3'];
  const optionsWithIconMap: Record<string, { icon: JSX.Element; label: string }> = {
    test1: { icon: <FlightTakeoffIcon />, label: 'Test1' },
    test2: { icon: <LocalLibraryIcon />, label: 'Test2' },
    test3: { icon: <VideogameAssetIcon />, label: 'Test3' },
  };

  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">With icons:</Typography>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} fullWidth label="With icons" placeholder="Choose one or more items" />
            )}
          />
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} fullWidth label="With icons" placeholder="Choose one or more items" />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With icons and inline options"
                placeholder="Choose one or more items"
              />
            )}
            inlineOptions
          />
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With icons and inline options"
                placeholder="Choose one or more items"
              />
            )}
            size="small"
            inlineOptions
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">Disabled:</Typography>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0]]}
            disabled
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Disabled" placeholder="Choose one or more items" />
            )}
          />
          <Autocomplete
            defaultValue={[options[0]]}
            disabled
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Disabled" placeholder="Choose one or more items" />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">Error:</Typography>
        </Grid>
        <Grid container size={{ xs: 12 }} spacing={2} alignItems="stretch">
          <Grid size={{ xs: 5 }}>
            <Autocomplete
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state"
                  placeholder="Choose one or more items"
                />
              )}
            />
            <Autocomplete
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state"
                  placeholder="Choose one or more items"
                />
              )}
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 5 }}>
            <Autocomplete
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state with inline error"
                  placeholder="Choose one or more items"
                  errorMode="label"
                />
              )}
            />
            <Autocomplete
              style={{ marginTop: '22px' }}
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state with inline error"
                  placeholder="Choose one or more items"
                  errorMode="label"
                />
              )}
              size="small"
            />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">Progress:</Typography>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon={false}
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={24} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
          />
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon={false}
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={16} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress and popup icon"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={24} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
          />
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress and popup icon"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={16} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default {
  title: 'Inputs & controls/Autocomplete',
  component: Autocomplete,
```

## Variants

- Disabled
- Extra Small
- Small

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `getOptionLabel` | `func` |  | Used to determine the string value for a given option. It's used to fill the input (and the list box options if `renderOption` is not provided).  If used in free solo mode, it must accept both the type of the options and a string.  @param {Value} option @returns {string} @default (option) => option.label ?? option |
| `inlineOptions` | `bool` |  | Changes listbox to display items with "inline-block" value. |
| `limitTags` | `number` |  | The maximum number of tags that will be visible when not focused. Set `-1` to disable the limit. @default -1 |
| `ListboxProps` | `object` |  | Props applied to the Listbox element. |
| `size` | `oneOf` |  | The size of the component. @default 'medium' |
| `value` | `any` |  | The value of the autocomplete.  The value must have reference equality with the option in order to be selected. You can customize the equality behavior with the `isOptionEqualToValue` prop. |

## Examples

### Sizes

```tsx
const options = ['red', 'green', 'blue'];

  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With default value"
                placeholder="Choose one or more items"
                required
              />
            )}
          />
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                autoFocus
                fullWidth
                label="With default value"
                placeholder="Choose one or more items"
                required
              />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Without default value" placeholder="Choose one or more items" />
            )}
          />
          <Autocomplete
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Without default value" placeholder="Choose one or more items" />
            )}
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export const Variants = () => {
  const options = ['test1', 'test2', 'test3'];
  const optionsWithIconMap: Record<string, { icon: JSX.Element; label: string }> = {
    test1: { icon: <FlightTakeoffIcon />, label: 'Test1' },
    test2: { icon: <LocalLibraryIcon />, label: 'Test2' },
    test3: { icon: <VideogameAssetIcon />, label: 'Test3' },
  };

  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">With icons:</Typography>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} fullWidth label="With icons" placeholder="Choose one or more items" />
            )}
          />
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} fullWidth label="With icons" placeholder="Choose one or more items" />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="small"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With icons and inline options"
                placeholder="Choose one or more items"
              />
            )}
            inlineOptions
          />
          <Autocomplete
            multiple
            options={options}
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement> & {
                key: any;
              },
            ) => (
              <MenuItem {...props}>
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[props.key].icon}
                  label={optionsWithIconMap[props.key].label}
                />
              </MenuItem>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <InputChip
                  size="extraSmall"
                  icon={optionsWithIconMap[option].icon}
                  label={optionsWithIconMap[option].label}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With icons and inline options"
                placeholder="Choose one or more items"
              />
            )}
            size="small"
            inlineOptions
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">Disabled:</Typography>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0]]}
            disabled
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Disabled" placeholder="Choose one or more items" />
            )}
          />
          <Autocomplete
            defaultValue={[options[0]]}
            disabled
            multiple
            options={options}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Disabled" placeholder="Choose one or more items" />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">Error:</Typography>
        </Grid>
        <Grid container size={{ xs: 12 }} spacing={2} alignItems="stretch">
          <Grid size={{ xs: 5 }}>
            <Autocomplete
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state"
                  placeholder="Choose one or more items"
                />
              )}
            />
            <Autocomplete
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state"
                  placeholder="Choose one or more items"
                />
              )}
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 5 }}>
            <Autocomplete
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state with inline error"
                  placeholder="Choose one or more items"
                  errorMode="label"
                />
              )}
            />
            <Autocomplete
              style={{ marginTop: '22px' }}
              defaultValue={[options[0]]}
              multiple
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error
                  fullWidth
                  helperText="Error text"
                  label="Error state with inline error"
                  placeholder="Choose one or more items"
                  errorMode="label"
                />
              )}
              size="small"
            />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5">Progress:</Typography>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon={false}
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={24} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
          />
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon={false}
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={16} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress and popup icon"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={24} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
          />
          <Autocomplete
            defaultValue={[options[0], options[1]]}
            multiple
            options={options}
            forcePopupIcon
            popupIcon={<ArrowDropDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="With circular progress and popup icon"
                placeholder="Choose one or more items"
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        <InputAdornment position="end">
                          <CircularProgress variant="determinate" size={16} value={30} />
                        </InputAdornment>
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default {
  title: 'Inputs & controls/Autocomplete',
  component: Autocomplete,
```

### Sample

```tsx
<Autocomplete
    defaultValue={['red', 'green']}
    multiple
    options={['red', 'green', 'blue']}
    renderInput={(params) => (
      <TextField {...params} fullWidth label="With default value" placeholder="Choose one or more items" required />
    )}
  />
```

## MUI Reference

This component is based on Material-UI's Autocomplete.

For additional props and detailed API documentation, refer to:

- [MUI Autocomplete Documentation](https://mui.com/material-ui/api/autocomplete/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
