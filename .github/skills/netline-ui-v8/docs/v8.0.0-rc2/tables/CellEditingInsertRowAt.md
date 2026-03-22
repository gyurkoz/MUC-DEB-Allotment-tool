# Cell Editing Insert Row At

Cell Editing Insert Row At component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CellEditingInsertRowAt } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onColumnSort = handleAction('onColumnSort');
  const onCellEditingStateChange = useCallback((...args) => handleAction('onCellEditingStateChange')(...args), []);

  // we use `useState` instead of `useRef` because we want to display modified rows in rendering phase
  // if you want to use Virtual Table or Cell Editing API in callbacks (eg. useCallback and useEffect) using ref
  // is the recommended solution
  const [tableApi, setTableApi] = useState();
  const getEditor = useCallback(
    (columnName) => ({
      validator: ({ value }) =>
        !validValues?.[columnName]?.value ||
        value !== validValues?.[columnName]?.value ||
        validValues?.[columnName]?.errorMsg,
    }),
    [],
  );

  const columns = useMemo(
    () => [
      Column({
        label: '#',
        id: 'id',
        width: 60,
        align: 'center',
      }),
      Column({
        label: 'Status',
        id: 'status',
        cellEditing: {
          editable: includes(editableColumns, 'Status'),
          editor: {
            ...getEditor('Status'),
            onBeforeCommit: ({ value }) => toUpper(value),
          },
        },
        align: 'left',
        width: 180,
      }),
      Column({
        label: 'Fruit name',
        id: 'title',
        cellEditing: {
          editable: includes(editableColumns, 'Fruit name'),
          editor: getEditor('Fruit name'),
        },
        width: 200,
        flex: 1,
        filtering: true,
        sortable: true,
      }),
      Column({
        label: 'Color',
        id: 'color',
        cellEditing: {
          editable: includes(editableColumns, 'Color'),
          editor: getEditor('Color'),
        },
        align: 'center',
        width: 200,
        flex: 1,
        renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      }),
      Column({
        label: 'Weight',
        id: 'weight',
        cellEditing: {
          editable: includes(editableColumns, 'Weight'),
          editor: getEditor('Weight'),
        },
        align: 'right',
        width: 150,
        renderer: (item) => `${item} g`,
        filtering: true,
        filterType: FilterType.NUMBER,
        filterFn: (item, value) => item >= value,
        sortable: true,
      }),
      Column({
        label: 'Best Before',
        id: 'bestBefore',
        cellEditing: {
          editable: includes(editableColumns, 'Best Before'),
          editor: getEditor('Best Before'),
        },
        width: 200,
        flex: 1,
        filtering: true,
        filterType: FilterType.DATE,
        filterFieldProps: { variant: 'dialog' },
        sortable: true,
      }),
    ],
    [getEditor],
  );

  const { selected, onSelectedChange } = useSelection();

  const { cellEditing: { resetAll, insertRow, deleteRow, updateCell } = {} } = tableApi || {};

  const onResetAll = useCallback(() => {
    resetAll();
  }, [resetAll]);

  const onUpdateCellFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { rowId, columnId, newValue } = getFormValues(event.currentTarget);
      updateCell(+rowId, columnId, newValue);
    },
    [updateCell],
  );

  const onInsertRowClick = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { insertRowId } = getFormValues(event.currentTarget);
      insertRow(insertRowData, insertRowId ? +insertRowId : undefined);
    },
    [insertRow],
  );

  const onDeleteRowSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { rowId } = getFormValues(event.currentTarget);
      deleteRow(+rowId);
    },
    [deleteRow],
  );

  const getAccordionProps = useSingleAccordion();

  return (
    <div>
      <Accordion {...getAccordionProps('concept')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionHeader>Concept</AccordionHeader>
        </AccordionSummary>
        <AccordionDetailsBlock>
          <Typography component={Markdown}>{insertRowAtConceptMd}</Typography>
        </AccordionDetailsBlock>
      </Accordion>
      <Accordion {...getAccordionProps('apiMethods')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionHeader>Control methods provided by Cell Editing API (playground)</AccordionHeader>
        </AccordionSummary>
        <AccordionDetailsBlock>
          <Grid
            container
            alignItems="flex-end"
            spacing={1}
            component="form"
            id="updateCellForm"
            onSubmit={onUpdateCellFormSubmit}
          >
            <Grid>updateCell(</Grid>
            <Grid>
              <TextField label="rowId" name="rowId" size="small" />
            </Grid>
            <Grid>,</Grid>
            <Grid>
              <Select label="columnId" name="columnId" size="small" defaultValue={columns[0].id}>
                {columns.map((column) => (
                  <MenuItem key={column.id} value={column.id}>
                    {column.title} ({column.id})
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid>,</Grid>
            <Grid>
              <TextField label="new value" name="newValue" size="small" />
            </Grid>
            <Grid>)</Grid>
            <Grid>
              <Button variant="contained" type="submit">
                RUN
              </Button>
            </Grid>
          </Grid>

          <Grid container alignItems="center" spacing={1} style={{ marginTop: 8 }}>
            <Grid>resetAll()</Grid>
            <Button variant="contained" onClick={onResetAll}>
              RUN
            </Button>
          </Grid>
          <Grid
            container
            alignItems="center"
            spacing={1}
            style={{ marginTop: 8 }}
            component="form"
            id="insertRowForm"
            onSubmit={onInsertRowClick}
          >
            <Grid>insertRow({JSON.stringify(insertRowData, ' ', 1).replaceAll('\n', ' ')}</Grid>
            <Grid>,</Grid>
            <Grid>
              <TextField label="insertRowId" name="insertRowId" size="small" style={{ marginRight: 4 }} />
            </Grid>
            <Grid>)</Grid>
            <Grid>
              <Button variant="contained" type="submit">
                RUN
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="flex-end"
            spacing={1}
            component="form"
            id="deleteRowForm"
            onSubmit={onDeleteRowSubmit}
          >
            <Grid>deleteRow(</Grid>
            <Grid>
              <TextField label="rowId" name="rowId" size="small" style={{ marginRight: 4 }} />
            </Grid>
            <Grid>)</Grid>
            <Grid>
              <Button variant="contained" type="submit">
                RUN
              </Button>
            </Grid>
          </Grid>
        </AccordionDetailsBlock>
      </Accordion>
      <hr />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable
          apiRef={setTableApi}
          fixed
          items={items}
          columns={columns}
          width={950}
          maxHeight={500}
          onColumnSort={onColumnSort}
          disableSort
          allowClearAllFilters
          allowTableSettings
          selected={selected}
          onSelectedChange={onSelectedChange}
          cellEditing={{
            allowInsertRowAt: true,
            cellEditingState: initialCellEditingState,
            onCellEditingStateChange,
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
CellEditingInsertRowAtStory.storyName = 'Cell Editing - Insert Row At';
CellEditingInsertRowAtStory.parameters = {
  docs: {
    iframeHeight: 800,
  },
};

export default {
```

## Variants

- Small

## Examples

```tsx
const onColumnSort = handleAction('onColumnSort');
  const onCellEditingStateChange = useCallback((...args) => handleAction('onCellEditingStateChange')(...args), []);

  // we use `useState` instead of `useRef` because we want to display modified rows in rendering phase
  // if you want to use Virtual Table or Cell Editing API in callbacks (eg. useCallback and useEffect) using ref
  // is the recommended solution
  const [tableApi, setTableApi] = useState();
  const getEditor = useCallback(
    (columnName) => ({
      validator: ({ value }) =>
        !validValues?.[columnName]?.value ||
        value !== validValues?.[columnName]?.value ||
        validValues?.[columnName]?.errorMsg,
    }),
    [],
  );

  const columns = useMemo(
    () => [
      Column({
        label: '#',
        id: 'id',
        width: 60,
        align: 'center',
      }),
      Column({
        label: 'Status',
        id: 'status',
        cellEditing: {
          editable: includes(editableColumns, 'Status'),
          editor: {
            ...getEditor('Status'),
            onBeforeCommit: ({ value }) => toUpper(value),
          },
        },
        align: 'left',
        width: 180,
      }),
      Column({
        label: 'Fruit name',
        id: 'title',
        cellEditing: {
          editable: includes(editableColumns, 'Fruit name'),
          editor: getEditor('Fruit name'),
        },
        width: 200,
        flex: 1,
        filtering: true,
        sortable: true,
      }),
      Column({
        label: 'Color',
        id: 'color',
        cellEditing: {
          editable: includes(editableColumns, 'Color'),
          editor: getEditor('Color'),
        },
        align: 'center',
        width: 200,
        flex: 1,
        renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      }),
      Column({
        label: 'Weight',
        id: 'weight',
        cellEditing: {
          editable: includes(editableColumns, 'Weight'),
          editor: getEditor('Weight'),
        },
        align: 'right',
        width: 150,
        renderer: (item) => `${item} g`,
        filtering: true,
        filterType: FilterType.NUMBER,
        filterFn: (item, value) => item >= value,
        sortable: true,
      }),
      Column({
        label: 'Best Before',
        id: 'bestBefore',
        cellEditing: {
          editable: includes(editableColumns, 'Best Before'),
          editor: getEditor('Best Before'),
        },
        width: 200,
        flex: 1,
        filtering: true,
        filterType: FilterType.DATE,
        filterFieldProps: { variant: 'dialog' },
        sortable: true,
      }),
    ],
    [getEditor],
  );

  const { selected, onSelectedChange } = useSelection();

  const { cellEditing: { resetAll, insertRow, deleteRow, updateCell } = {} } = tableApi || {};

  const onResetAll = useCallback(() => {
    resetAll();
  }, [resetAll]);

  const onUpdateCellFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { rowId, columnId, newValue } = getFormValues(event.currentTarget);
      updateCell(+rowId, columnId, newValue);
    },
    [updateCell],
  );

  const onInsertRowClick = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { insertRowId } = getFormValues(event.currentTarget);
      insertRow(insertRowData, insertRowId ? +insertRowId : undefined);
    },
    [insertRow],
  );

  const onDeleteRowSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { rowId } = getFormValues(event.currentTarget);
      deleteRow(+rowId);
    },
    [deleteRow],
  );

  const getAccordionProps = useSingleAccordion();

  return (
    <div>
      <Accordion {...getAccordionProps('concept')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionHeader>Concept</AccordionHeader>
        </AccordionSummary>
        <AccordionDetailsBlock>
          <Typography component={Markdown}>{insertRowAtConceptMd}</Typography>
        </AccordionDetailsBlock>
      </Accordion>
      <Accordion {...getAccordionProps('apiMethods')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionHeader>Control methods provided by Cell Editing API (playground)</AccordionHeader>
        </AccordionSummary>
        <AccordionDetailsBlock>
          <Grid
            container
            alignItems="flex-end"
            spacing={1}
            component="form"
            id="updateCellForm"
            onSubmit={onUpdateCellFormSubmit}
          >
            <Grid>updateCell(</Grid>
            <Grid>
              <TextField label="rowId" name="rowId" size="small" />
            </Grid>
            <Grid>,</Grid>
            <Grid>
              <Select label="columnId" name="columnId" size="small" defaultValue={columns[0].id}>
                {columns.map((column) => (
                  <MenuItem key={column.id} value={column.id}>
                    {column.title} ({column.id})
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid>,</Grid>
            <Grid>
              <TextField label="new value" name="newValue" size="small" />
            </Grid>
            <Grid>)</Grid>
            <Grid>
              <Button variant="contained" type="submit">
                RUN
              </Button>
            </Grid>
          </Grid>

          <Grid container alignItems="center" spacing={1} style={{ marginTop: 8 }}>
            <Grid>resetAll()</Grid>
            <Button variant="contained" onClick={onResetAll}>
              RUN
            </Button>
          </Grid>
          <Grid
            container
            alignItems="center"
            spacing={1}
            style={{ marginTop: 8 }}
            component="form"
            id="insertRowForm"
            onSubmit={onInsertRowClick}
          >
            <Grid>insertRow({JSON.stringify(insertRowData, ' ', 1).replaceAll('\n', ' ')}</Grid>
            <Grid>,</Grid>
            <Grid>
              <TextField label="insertRowId" name="insertRowId" size="small" style={{ marginRight: 4 }} />
            </Grid>
            <Grid>)</Grid>
            <Grid>
              <Button variant="contained" type="submit">
                RUN
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="flex-end"
            spacing={1}
            component="form"
            id="deleteRowForm"
            onSubmit={onDeleteRowSubmit}
          >
            <Grid>deleteRow(</Grid>
            <Grid>
              <TextField label="rowId" name="rowId" size="small" style={{ marginRight: 4 }} />
            </Grid>
            <Grid>)</Grid>
            <Grid>
              <Button variant="contained" type="submit">
                RUN
              </Button>
            </Grid>
          </Grid>
        </AccordionDetailsBlock>
      </Accordion>
      <hr />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable
          apiRef={setTableApi}
          fixed
          items={items}
          columns={columns}
          width={950}
          maxHeight={500}
          onColumnSort={onColumnSort}
          disableSort
          allowClearAllFilters
          allowTableSettings
          selected={selected}
          onSelectedChange={onSelectedChange}
          cellEditing={{
            allowInsertRowAt: true,
            cellEditingState: initialCellEditingState,
            onCellEditingStateChange,
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
CellEditingInsertRowAtStory.storyName = 'Cell Editing - Insert Row At';
CellEditingInsertRowAtStory.parameters = {
  docs: {
    iframeHeight: 800,
  },
};

export default {
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
