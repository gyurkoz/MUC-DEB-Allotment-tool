# Problem Area With Hook Form

Problem Area With Hook Form component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ProblemAreaWithHookForm } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const form = useForm<FormValue>({ mode: 'all' });
  const {
    control,
    formState: { errors },
    setFocus,
    trigger,
  } = form;

  useEffect(() => {
    trigger(); // force validate all fields on render
  }, [trigger]);

  const onRowClick: ProblemAreaRowClickHandler = useCallback(
    (props) => {
      setTimeout(() => setFocus(props.rowData.field)); // , { shouldSelect: true }));
    },
    [setFocus],
  );

  const fieldNames = {
    firstName: 'First name',
    lastName: 'Last name',
    'personalData.age': 'Age',
    'kids[0].name': 'Kid 1 name',
    'kids[1].name': 'Kid 2 name',
  };

  const { columns, items } = useFormProblemArea({
    fieldNames,
    formErrors: errors,
    additionalErrors: [],
  });

  return (
    <Container fullPage style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 1 auto' }}>
        <form>
          <Controller
            name="firstName"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'First Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="First name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.firstName}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'Last Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Last name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.lastName}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="personalData.age"
            control={control}
            rules={{
              validate: (value) => {
                if (value < 18) {
                  return 'Client is too young!';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Age"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.personalData?.age}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="kids.0.name"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Kid 1 name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.kids?.[0]?.name}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="kids.1.name"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Kid 2 name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.kids?.[1]?.name}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
        </form>
      </div>
      <div style={{ flex: '0 0 auto' }}>
        <ProblemArea
          classes={{
            root: 'id-problem-area',
            header: 'id-problem-area-header',
            toggleButton: 'id-btn-toggle-problem-area',
            errorIcon: 'id-error-icon',
            warningIcon: 'id-warning-icon',
            errorCount: 'id-text-error-count',
            warningCount: 'id-text-warning-count',
            tableWrapper: 'id-table-wrapper',
          }}
          columns={columns}
          items={items}
          onRowClick={onRowClick}
          maxHeight={window.innerHeight * 0.3}
        />
      </div>
    </Container>
  );
```

## Variants

- Small

## Examples

```tsx
const form = useForm<FormValue>({ mode: 'all' });
  const {
    control,
    formState: { errors },
    setFocus,
    trigger,
  } = form;

  useEffect(() => {
    trigger(); // force validate all fields on render
  }, [trigger]);

  const onRowClick: ProblemAreaRowClickHandler = useCallback(
    (props) => {
      setTimeout(() => setFocus(props.rowData.field)); // , { shouldSelect: true }));
    },
    [setFocus],
  );

  const fieldNames = {
    firstName: 'First name',
    lastName: 'Last name',
    'personalData.age': 'Age',
    'kids[0].name': 'Kid 1 name',
    'kids[1].name': 'Kid 2 name',
  };

  const { columns, items } = useFormProblemArea({
    fieldNames,
    formErrors: errors,
    additionalErrors: [],
  });

  return (
    <Container fullPage style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 1 auto' }}>
        <form>
          <Controller
            name="firstName"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'First Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="First name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.firstName}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'Last Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Last name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.lastName}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="personalData.age"
            control={control}
            rules={{
              validate: (value) => {
                if (value < 18) {
                  return 'Client is too young!';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Age"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.personalData?.age}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="kids.0.name"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Kid 1 name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.kids?.[0]?.name}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
          <Controller
            name="kids.1.name"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) {
                  return 'Name is required';
                }
                return true;
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                label="Kid 2 name"
                size="small"
                style={{ margin: 8 }}
                error={!!errors.kids?.[1]?.name}
                slotProps={{ htmlInput: { ref } }}
                {...field}
              />
            )}
          />
        </form>
      </div>
      <div style={{ flex: '0 0 auto' }}>
        <ProblemArea
          classes={{
            root: 'id-problem-area',
            header: 'id-problem-area-header',
            toggleButton: 'id-btn-toggle-problem-area',
            errorIcon: 'id-error-icon',
            warningIcon: 'id-warning-icon',
            errorCount: 'id-text-error-count',
            warningCount: 'id-text-warning-count',
            tableWrapper: 'id-table-wrapper',
          }}
          columns={columns}
          items={items}
          onRowClick={onRowClick}
          maxHeight={window.innerHeight * 0.3}
        />
      </div>
    </Container>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
