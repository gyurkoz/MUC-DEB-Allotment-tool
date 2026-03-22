# Problem Area

Problem Area component

## Overview

- **Category**: tables
- **Base Library**: custom

## Description

The component displays a list of problems and warnings in a table.

The error source can be a form field, an editable table by default, but it can be customized
and extended to support other sources as well.

There are two hooks available out-of-box:
- `useFormProblemArea`: a hook that can be used to display form errors and warnings.
- `useTableCellEditingProblemArea`: a hook that can be used to display table errors and warnings.
These hooks are about to convert the error inputs to a standard format what the `ProblemArea`
component can consume.

Please see stories how to use the hooks and the `ProblemArea` component together. Also please check the
source code of hooks and the component to see how to extend and customize them.

The table can be expanded or collapsed to show or hide the details of problematic area.
When the user clicks on an entry in the table, the user can scroll to the corresponding error
form field or table cell.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ProblemArea } from '@lsy-netline/netline-ui';
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

### ProblemAreaWithHookForm

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

### ProblemAreaWithVirtualTable

```tsx
const tableRef = useRef<BaseTable<TableRowType>>();
  const [tableApi, setTableApi] = useState<VirtualTableApi<TableRowType> | null | undefined>();

  const onRowClick: ProblemAreaRowClickHandler = useCallback(
    (props) => {
      if (!tableApi) {
        return;
      }

      const {
        rowData: { location, field },
      } = props;
      const { cellEditing, sortedAndFilteredItems, rowKey } = tableApi || {};

      const columnIndex = tableApi.columns.findIndex((col) => col.dataKey === field);
      const rowIndex = sortedAndFilteredItems?.findIndex((item) => +item[rowKey] === +location);

      if (columnIndex < 0 || rowIndex < 0) {
        return;
      }

      const columnWidths = tableApi.columns.map((col, idx) => (idx < columnIndex ? col.width : 0));

      const scrollLeft = sum(columnWidths);
      cellEditing.startEditCell(location, field);
      tableRef?.current?.scrollToRow(rowIndex);
      setTimeout(() => tableRef?.current?.scrollToLeft(scrollLeft));
    },
    [tableApi, tableRef],
  );

  const { columns, items } = useTableCellEditingProblemArea<TableRowType>({
    additionalErrors,
    tableApi,
  });

  return (
    <Container fullPage style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 1 auto' }}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              apiRef={setTableApi}
              cellEditing
              ref={tableRef}
              items={originalTableItems}
              columns={originalTableColumns}
              width={width}
              height={height}
            />
          )}
        </AutoResizer>
      </div>
      <div style={{ flex: '0 0 auto' }}>
        <ProblemArea onRowClick={onRowClick} columns={columns} items={items} maxHeight={window.innerHeight * 0.3} />
      </div>
    </Container>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
