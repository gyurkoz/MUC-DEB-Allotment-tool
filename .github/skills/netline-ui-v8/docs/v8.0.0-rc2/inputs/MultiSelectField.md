# Multi Select Field

Multi Select Field component

> ✅ **RECOMMENDED**: This is the preferred component for multi-value selection. It replaces the deprecated `Select` component for multi-select use cases.

## Overview

- **Category**: inputs
- **Base Library**: custom
- **Status**: ✅ **PREFERRED** - Use this instead of deprecated `Select` for multi-value selection

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { MultiSelectField } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [value, setValue] = useState<string[]>([]);

  const onChange = (event: SyntheticEvent, values: string[]) => {
    setValue(values);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Small
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MultiSelectField
                data-testid="checkboxes"
                noOptionsText="No options"
                value={value}
                onChange={onChange}
                options={stringOptions}
                checkboxes
                limitTags={2}
                TextFieldProps={{
                  label: 'Checkboxes',
                  placeholder: 'Select...',
                }}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Medium
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MultiSelectField
                data-testid="checkboxes"
                noOptionsText="No options"
                value={value}
                onChange={onChange}
                options={stringOptions}
                checkboxes
                limitTags={2}
                TextFieldProps={{
                  label: 'Checkboxes',
                  placeholder: 'Select...',
                }}
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
Checkboxes.storyName = 'Checkboxes';

export default {
  title: 'Inputs & controls/MultiSelectField',
  component: MultiSelectField,
```

## Variants

- Small
- Medium
- Disabled
- Small
- Disabled
- Small
- Small
- Small
- Medium
- Disabled
- Small

## Examples

### Checkboxes

```tsx
const [value, setValue] = useState<string[]>([]);

  const onChange = (event: SyntheticEvent, values: string[]) => {
    setValue(values);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Small
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MultiSelectField
                data-testid="checkboxes"
                noOptionsText="No options"
                value={value}
                onChange={onChange}
                options={stringOptions}
                checkboxes
                limitTags={2}
                TextFieldProps={{
                  label: 'Checkboxes',
                  placeholder: 'Select...',
                }}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} component={Typography} variant="subtitle2" textAlign="center">
              Medium
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MultiSelectField
                data-testid="checkboxes"
                noOptionsText="No options"
                value={value}
                onChange={onChange}
                options={stringOptions}
                checkboxes
                limitTags={2}
                TextFieldProps={{
                  label: 'Checkboxes',
                  placeholder: 'Select...',
                }}
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
Checkboxes.storyName = 'Checkboxes';

export default {
  title: 'Inputs & controls/MultiSelectField',
  component: MultiSelectField,
```

### Tests

**DefaultValues**

```tsx
{
args: {
    TextFieldProps: {
      label: 'With default values',
      helperText: 'This is a helper text',
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();
    castArray(args.defaultValue).forEach((item) => {
      expect(canvas.getByText(item)).toBeInTheDocument();
    });

    expect(canvas.getByLabelText('With default values')).toBeInTheDocument();
    expect(canvas.getByText('This is a helper text')).toBeInTheDocument();
    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelector('.MuiAutocomplete-endAdornment')).toBeInTheDocument();
  },
}
```

**BasicFunctionality**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Basic functionality',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.click(input);

    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
    const optionItems = body.querySelectorAll('[role="option"]');
    expect(optionItems).toHaveLength(options.length);
    optionItems.forEach((item, idx) => {
      expect(item).toHaveTextContent(options[idx]);
    });
  },
  parameters: {
    viewport: { height: 480 },
  },
}
```

**Disabled**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Disabled',
    },
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('disabled');

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.click(input);

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);
  },
}
```

**FilterByTyping**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Filter by typing',
    },
    defaultValue: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.click(input);

    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
    const optionItems = body.querySelectorAll('[role="option"]');
    expect(optionItems).toHaveLength(options.length);
    optionItems.forEach((item, idx) => {
      expect(item).toHaveTextContent(options[idx]);
    });

    await userEvent.type(input, 're');

    expect(input).toHaveDisplayValue('re');
    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
    const optionItemsAfter = body.querySelectorAll('[role="option"]');
    expect(optionItemsAfter).toHaveLength(2);
    expect(optionItemsAfter[0]).toHaveTextContent('red');
    expect(optionItemsAfter[1]).toHaveTextContent('green');
  },
  parameters: {
    viewport: { height: 480 },
  },
}
```

**DisableAutocomplete**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Disable Autocomplete',
    },
    defaultValue: [],
    disableAutocomplete: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.type(input, 're');

    expect(input).toHaveDisplayValue('');
    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(3);
  },
  parameters: {
    viewport: { height: 480 },
  },
}
```

**CreateNewOption**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Create New Option',
    },
    defaultValue: [],
    freeSolo: true,
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.type(input, 'yellow');
    await userEvent.keyboard('{enter}');

    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();

    const yellowChip = body.querySelector<HTMLSpanElement>('.MuiChip-label');
    expect(yellowChip).toHaveTextContent('yellow');

    const optionItems = body.querySelectorAll('[role="option"]');
    expect(optionItems).toHaveLength(4);

    const newOptions = ['red', 'green', 'blue', 'yellow'];
    optionItems.forEach((item, idx) => {
      expect(item).toHaveTextContent(newOptions[idx]);
    });
  },
  parameters: {
    viewport: { height: 480 },
  },
}
```

**ObjectType**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Object type',
    },
    options: objectOptions,
    defaultValue: [],
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.click(input);

    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
    const allOptions = body.querySelectorAll('[role="option"]');
    expect(allOptions).toHaveLength(3);

    await userEvent.click(allOptions[1]);

    const objectChip = body.querySelector<HTMLSpanElement>('.MuiChip-label');
    expect(objectChip).toHaveTextContent('Object2');
  },
  parameters: {
    viewport: { height: 480 },
  },
}
```

**Async**

```tsx
{
args: {
    TextFieldProps: {
      label: 'Async',
    },
    options: fetchOptions,
    defaultValue: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { body } = canvasElement.ownerDocument;
    const input = canvas.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(body.querySelector('[role="presentation"]')).not.toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await userEvent.click(input);

    expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
    expect(body.querySelectorAll('[role="option"]')).toHaveLength(0);

    await sleep(WAIT_IN_MS + 100).then(() => {
      expect(body.querySelector('[role="presentation"]')).toBeInTheDocument();
      const optionItems = body.querySelectorAll('[role="option"]');
      expect(optionItems).toHaveLength(options.length);
      optionItems.forEach((item, idx) => {
        expect(item).toHaveTextContent(options[idx]);
      });
    });
  },
  parameters: {
    viewport: { height: 480 },
  },
}
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
const onChange = useActionCallback('onChange(string)', (event: SyntheticEvent, newValue: string | string[] | null) => {
  setValue(newValue);
});

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
const onChange = useActionCallback('onChange(string)', (event: SyntheticEvent, newValue: string | string[] | null) => {
  setValue(newValue);
});

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
const onChange = useActionCallback('onChange(string)', (event: SyntheticEvent, newValue: string | string[] | null) => {
  setValue(newValue);
});

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
const onChange = useActionCallback('onChange(string)', (event: SyntheticEvent, newValue: string | string[] | null) => {
  setValue(newValue);
});

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
