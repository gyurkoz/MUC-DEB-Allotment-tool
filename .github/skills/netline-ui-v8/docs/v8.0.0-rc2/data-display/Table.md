# Table

Display sets of data

## Overview

- **Category**: data-display
- **Base Library**: mui
- **MUI Component**: Table

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Table } from '@lsy-netline/netline-ui';
```

## Basic Usage

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
              label: 'Synchronous operation',
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

## Examples

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
              label: 'Synchronous operation',
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
              label: 'Synchronous operation',
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

## MUI Reference

This component is based on Material-UI's Table.

For additional props and detailed API documentation, refer to:

- [MUI Table Documentation](https://mui.com/material-ui/api/table/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
