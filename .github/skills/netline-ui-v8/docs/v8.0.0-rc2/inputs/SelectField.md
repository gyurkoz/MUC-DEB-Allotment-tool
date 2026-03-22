# Select Field

Select Field component

## Overview

- **Category**: inputs
- **Base Library**: mui
- **MUI Component**: SelectField

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { SelectField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState(1);

  const onChange = handleAction('onChange', (event: SelectChangeEvent<number>) => {
    const { value: newValue } = event.target;
    setValue(+newValue);
  });
  return (
    <Select label="Label" value={value} onChange={onChange}>
      <MenuItem value="1">Item 1</MenuItem>
      <MenuItem value="2">Item 2</MenuItem>
    </Select>
  );
};
Sample.tags = ['hideInSidebar'];

export const Variants = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" errorMode="label" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input8" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input5" label="Label" defaultValue="" placeholder="Hint" required fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input6" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
    </Grid>
  );
};

export const Sizes = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Medium (default)
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />

      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Small
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" size="small" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" size="small" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" size="small" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />
    </Grid>
  );
};

export default {
  title: 'Inputs & controls/Select (deprecated)',
  component: Select,
```

## Variants

- Disabled
- Small
- Small
- Disabled
- Small
- Small
- Small
- Medium
- Disabled
- Small

## Examples

### Sample

```tsx
const [value, setValue] = useState(1);

  const onChange = handleAction('onChange', (event: SelectChangeEvent<number>) => {
    const { value: newValue } = event.target;
    setValue(+newValue);
  });
  return (
    <Select label="Label" value={value} onChange={onChange}>
      <MenuItem value="1">Item 1</MenuItem>
      <MenuItem value="2">Item 2</MenuItem>
    </Select>
  );
};
Sample.tags = ['hideInSidebar'];

export const Variants = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input7" label="Label" defaultValue={10} error helperText="Error text" errorMode="label" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input8" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input5" label="Label" defaultValue="" placeholder="Hint" required fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={2}>
        <Select id="input6" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
    </Grid>
  );
};

export const Sizes = () => {
  const items = Array(15)
    .fill(0)
    .map((_, index) => index)
    .map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <Grid container spacing={2}>
      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Medium (default)
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />

      <Grid size={1} component={Typography} variant="subtitle2" align="center" alignContent="center">
        Small
      </Grid>
      <Grid size={3}>
        <Select id="input1" label="Label" defaultValue="" size="small" placeholder="Hint" required autoFocus fullWidth>
          {[items[0], items[1]]}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input2" label="Label" defaultValue={10} placeholder="Hint" size="small" fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={3}>
        <Select id="input4" label="Label" defaultValue="" placeholder="Hint" size="small" disabled fullWidth>
          {items}
        </Select>
      </Grid>
      <Grid size={2} />
    </Grid>
  );
};

export default {
  title: 'Inputs & controls/Select (deprecated)',
  component: Select,
```

### Async

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  const fetchStringOptions = useEventCallback<SelectFieldOptionsCallback<string>>(async (inputValue, { signal }) => {
    // simulate async operation
    await sleep(1000, signal);
    return stringOptions.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()));
  });

  const fetchObjectOptions = useEventCallback<SelectFieldOptionsCallback<ObjectOption>>(
    async (inputValue, { signal }) => {
      await sleep(1000, signal);
      return objectOptions.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
    },
  );

  const [value, setValue] = useState<string | string[] | null>(multiple ? [stringOptions[1]] : stringOptions[1]);
  const onChange = useActionCallback(
    'onChange(string)',
    (event: SyntheticEvent, newValue: string | string[] | null) => {
      setValue(newValue);
    },
  );

  const [objectValue, setObjectValue] = useState<object | ObjectOption[] | null>(
    multiple ? [objectOptions[1]] : objectOptions[1],
  );
  const onObjectChange = useActionCallback(
    'onChange(object)',
    (event: SyntheticEvent, newValue: ObjectOption | object[] | null) => {
      setObjectValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="no-async"
            noOptionsText="No options... :("
            onChange={onChange}
            options={stringOptions}
            disableAutocomplete
            TextFieldProps={{
              label: 'Synchoronous operation',
              placeholder: 'Select',
            }}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={value as string & string[]}
            onChange={onChange}
            options={fetchStringOptions}
            TextFieldProps={{
              label: 'Asynchronous operation (string)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField<ObjectOption, true>
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={objectValue as ObjectOption & ObjectOption[]}
            onChange={onObjectChange}
            options={fetchObjectOptions}
            TextFieldProps={{
              label: 'Asynchronous operation (object)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  const fetchStringOptions = useEventCallback<SelectFieldOptionsCallback<string>>(async (inputValue, { signal }) => {
    // simulate async operation
    await sleep(1000, signal);
    return stringOptions.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()));
  });

  const fetchObjectOptions = useEventCallback<SelectFieldOptionsCallback<ObjectOption>>(
    async (inputValue, { signal }) => {
      await sleep(1000, signal);
      return objectOptions.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
    },
  );

  const [value, setValue] = useState<string | string[] | null>(multiple ? [stringOptions[1]] : stringOptions[1]);
  const onChange = useActionCallback(
    'onChange(string)',
    (event: SyntheticEvent, newValue: string | string[] | null) => {
      setValue(newValue);
    },
  );

  const [objectValue, setObjectValue] = useState<object | ObjectOption[] | null>(
    multiple ? [objectOptions[1]] : objectOptions[1],
  );
  const onObjectChange = useActionCallback(
    'onChange(object)',
    (event: SyntheticEvent, newValue: ObjectOption | object[] | null) => {
      setObjectValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="no-async"
            noOptionsText="No options... :("
            onChange={onChange}
            options={stringOptions}
            disableAutocomplete
            TextFieldProps={{
              label: 'Synchoronous operation',
              placeholder: 'Select',
            }}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={value as string & string[]}
            onChange={onChange}
            options={fetchStringOptions}
            TextFieldProps={{
              label: 'Asynchronous operation (string)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField<ObjectOption, true>
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={objectValue as ObjectOption & ObjectOption[]}
            onChange={onObjectChange}
            options={fetchObjectOptions}
            TextFieldProps={{
              label: 'Asynchronous operation (object)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

### BasicStatuses

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2">Basic statuses</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            options={stringOptions}
            TextFieldProps={{
              label: 'Default',
              placeholder: 'Hint',
              required: true,
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            autoFocus
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            options={stringOptions}
            TextFieldProps={{
              label: 'Active',
              placeholder: 'Hint',
              required: true,
              autoFocus: true,
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            options={stringOptions}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [stringOptions[1]] : stringOptions[1]) as string & string[]}
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
              required: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2">Basic statuses</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            options={stringOptions}
            TextFieldProps={{
              label: 'Default',
              placeholder: 'Hint',
              required: true,
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            autoFocus
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            options={stringOptions}
            TextFieldProps={{
              label: 'Active',
              placeholder: 'Hint',
              required: true,
              autoFocus: true,
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            options={stringOptions}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [stringOptions[1]] : stringOptions[1]) as string & string[]}
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
              required: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

### Creatable

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  const fetchStringOptions = useEventCallback<SelectFieldOptionsCallback<string>>(
    async (inputValue: string, { signal }) =>
      new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
          resolve(stringOptions.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase())));
        }, 1000);

        const abortFn = () => {
          clearTimeout(timeoutId);
          signal.removeEventListener('abort', abortFn);
        };
        signal.addEventListener('abort', abortFn);
      }),
  );

  const fetchObjectOptions = useEventCallback<SelectFieldOptionsCallback<ObjectOption>>(
    async (inputValue, { signal }) =>
      new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
          resolve(objectOptions.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase())));
        }, 1000);

        const abortFn = () => {
          clearTimeout(timeoutId);
          signal.removeEventListener('abort', abortFn);
        };
        signal.addEventListener('abort', abortFn);
      }),
  );

  const [value, setValue] = useState<string | string[] | null>(multiple ? [stringOptions[1]] : stringOptions[1]);
  const onChange = useActionCallback(
    'onChange(string)',
    (event: SyntheticEvent, newValue: string | string[] | null) => {
      setValue(newValue);
    },
  );

  const [objectValue, setObjectValue] = useState<ObjectOption | string | (string | ObjectOption)[] | null>(
    multiple ? [objectOptions[1]] : objectOptions[1],
  );
  const onObjectChange = useActionCallback(
    'onChange(object)',
    (event: SyntheticEvent, newValue: ObjectOption | string | (string | ObjectOption)[] | null) => {
      setObjectValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="no-async"
            noOptionsText="No options... :("
            onChange={onChange}
            options={stringOptions}
            disableAutocomplete
            freeSolo
            TextFieldProps={{
              label: 'Synchoronous operation',
              placeholder: 'Select',
            }}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={value as string & string[]}
            onChange={onChange}
            options={fetchStringOptions}
            freeSolo
            TextFieldProps={{
              label: 'Asynchronous operation (string)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={objectValue as ObjectOption & ObjectOption[]}
            onChange={onObjectChange}
            options={fetchObjectOptions}
            disableClearable
            freeSolo
            TextFieldProps={{
              label: 'Asynchronous operation (object)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  const fetchStringOptions = useEventCallback<SelectFieldOptionsCallback<string>>(
    async (inputValue: string, { signal }) =>
      new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
          resolve(stringOptions.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase())));
        }, 1000);

        const abortFn = () => {
          clearTimeout(timeoutId);
          signal.removeEventListener('abort', abortFn);
        };
        signal.addEventListener('abort', abortFn);
      }),
  );

  const fetchObjectOptions = useEventCallback<SelectFieldOptionsCallback<ObjectOption>>(
    async (inputValue, { signal }) =>
      new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
          resolve(objectOptions.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase())));
        }, 1000);

        const abortFn = () => {
          clearTimeout(timeoutId);
          signal.removeEventListener('abort', abortFn);
        };
        signal.addEventListener('abort', abortFn);
      }),
  );

  const [value, setValue] = useState<string | string[] | null>(multiple ? [stringOptions[1]] : stringOptions[1]);
  const onChange = useActionCallback(
    'onChange(string)',
    (event: SyntheticEvent, newValue: string | string[] | null) => {
      setValue(newValue);
    },
  );

  const [objectValue, setObjectValue] = useState<ObjectOption | string | (string | ObjectOption)[] | null>(
    multiple ? [objectOptions[1]] : objectOptions[1],
  );
  const onObjectChange = useActionCallback(
    'onChange(object)',
    (event: SyntheticEvent, newValue: ObjectOption | string | (string | ObjectOption)[] | null) => {
      setObjectValue(newValue);
    },
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="no-async"
            noOptionsText="No options... :("
            onChange={onChange}
            options={stringOptions}
            disableAutocomplete
            freeSolo
            TextFieldProps={{
              label: 'Synchoronous operation',
              placeholder: 'Select',
            }}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={value as string & string[]}
            onChange={onChange}
            options={fetchStringOptions}
            freeSolo
            TextFieldProps={{
              label: 'Asynchronous operation (string)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            data-testid="async"
            noOptionsText="No options... :("
            // type override (casting) is needed because of polymorphism of the component
            value={objectValue as ObjectOption & ObjectOption[]}
            onChange={onObjectChange}
            options={fetchObjectOptions}
            disableClearable
            freeSolo
            TextFieldProps={{
              label: 'Asynchronous operation (object)',
              placeholder: 'Start typing...',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

### DisabledStatuses

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2">Disabled statuses</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            TextFieldProps={{
              label: 'Disabled',
              placeholder: 'Hint',
              required: true,
            }}
            size="small"
            options={options}
            disabled
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            TextFieldProps={{
              label: 'Disabled (filled)',
              placeholder: 'Hint',
              required: true,
            }}
            size="small"
            options={options}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            disabled
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            options={options}
            readOnly
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            TextFieldProps={{
              label: 'Read-only',
              placeholder: 'Hint',
              required: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2">Disabled statuses</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            TextFieldProps={{
              label: 'Disabled',
              placeholder: 'Hint',
              required: true,
            }}
            size="small"
            options={options}
            disabled
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            TextFieldProps={{
              label: 'Disabled (filled)',
              placeholder: 'Hint',
              required: true,
            }}
            size="small"
            options={options}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            disabled
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SelectField
            size="small"
            options={options}
            readOnly
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            TextFieldProps={{
              label: 'Read-only',
              placeholder: 'Hint',
              required: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
```

### ErrorStatuses

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2">Error statuses</Typography>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 1 (default)',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 1 (active)',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
            }}
            size="small"
            open={open1}
            onOpen={handleOpen1}
            onClose={handleClose1}
            options={options}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 2',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
              errorMode: 'label',
              errorTooltip: false,
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 2 (active)',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
              errorMode: 'label',
            }}
            size="small"
            open={open2}
            onOpen={handleOpen2}
            onClose={handleClose2}
            options={options}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2">Error statuses</Typography>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 1 (default)',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 1 (active)',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
            }}
            size="small"
            open={open1}
            onOpen={handleOpen1}
            onClose={handleClose1}
            options={options}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 2',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
              errorMode: 'label',
              errorTooltip: false,
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Error 2 (active)',
              placeholder: 'Hint',
              required: true,
              error: true,
              helperText: 'Error message',
              errorMode: 'label',
            }}
            size="small"
            open={open2}
            onOpen={handleOpen2}
            onClose={handleClose2}
            options={options}
            // type override (casting) is needed because of polymorphism of the component
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
          />
        </Grid>
      </Grid>
    </div>
  );
```

### Sizes

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Typography variant="subtitle2">Small</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="subtitle2">Large (MUI medium)</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <SelectField
            size="small"
            TextFieldProps={{
              label: 'Label',
              placeholder: 'Hint',
              required: true,
            }}
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <SelectField
            TextFieldProps={{
              label: 'Label',
              placeholder: 'Hint',
              required: true,
            }}
            options={options}
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Typography variant="subtitle2">Small</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="subtitle2">Large (MUI medium)</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <SelectField
            size="small"
            TextFieldProps={{
              label: 'Label',
              placeholder: 'Hint',
              required: true,
            }}
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <SelectField
            TextFieldProps={{
              label: 'Label',
              placeholder: 'Hint',
              required: true,
            }}
            options={options}
          />
        </Grid>
      </Grid>
    </div>
  );
```

### Variations

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle1">
          Variations
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Simple (Non-editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Simple (Editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Simple (Required)
        </Grid>
        <Grid size={{ xs: 3 }} />

        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable (Click select)',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
            disableAutocomplete
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable (Autocomplete)',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Required',
              placeholder: 'Hint',
              required: true,
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }} />
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable (Click select)',
              placeholder: 'Hint',
            }}
            options={options}
            disableAutocomplete
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable (Autocomplete)',
              placeholder: 'Hint',
            }}
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Required',
              placeholder: 'Hint',
              required: true,
            }}
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }} />

        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Non-Editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Filled)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Filled, Disabled)
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable with icon',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable with icon',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            size="small"
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            size="small"
            options={options}
            disableAutocomplete
            showIcon
            disabled
          />
        </Grid>

        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable with icon',
              placeholder: 'Hint',
            }}
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable with icon',
              placeholder: 'Hint',
            }}
            options={options}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            options={options}
            disableAutocomplete
            showIcon
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
```

```tsx
const SelectField = multiple ? MultiSelectField : SingleSelectField;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }} component={Typography} variant="subtitle1">
          Variations
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Simple (Non-editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Simple (Editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          Simple (Required)
        </Grid>
        <Grid size={{ xs: 3 }} />

        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable (Click select)',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
            disableAutocomplete
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable (Autocomplete)',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Required',
              placeholder: 'Hint',
              required: true,
            }}
            size="small"
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }} />
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable (Click select)',
              placeholder: 'Hint',
            }}
            options={options}
            disableAutocomplete
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable (Autocomplete)',
              placeholder: 'Hint',
            }}
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Required',
              placeholder: 'Hint',
              required: true,
            }}
            options={options}
          />
        </Grid>
        <Grid size={{ xs: 3 }} />

        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Non-Editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Editable)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Filled)
        </Grid>
        <Grid size={{ xs: 3 }} component={Typography} variant="subtitle2">
          With icon (Filled, Disabled)
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable with icon',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable with icon',
              placeholder: 'Hint',
            }}
            size="small"
            options={options}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            size="small"
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            size="small"
            options={options}
            disableAutocomplete
            showIcon
            disabled
          />
        </Grid>

        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Non-editable with icon',
              placeholder: 'Hint',
            }}
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Editable with icon',
              placeholder: 'Hint',
            }}
            options={options}
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            options={options}
            disableAutocomplete
            showIcon
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <SelectField
            TextFieldProps={{
              label: 'Filled',
              placeholder: 'Hint',
            }}
            defaultValue={(multiple ? [options[1]] : options[1]) as string & string[]}
            options={options}
            disableAutocomplete
            showIcon
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
```

## MUI Reference

This component is based on Material-UI's SelectField.

For additional props and detailed API documentation, refer to:

- [MUI SelectField Documentation](https://mui.com/material-ui/api/selectfield/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
