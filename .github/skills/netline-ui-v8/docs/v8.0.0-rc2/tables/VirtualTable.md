# Virtual Table

Virtual Table component

## Overview

- **Category**: tables
- **Base Library**: mui
- **MUI Component**: VirtualTable

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { VirtualTable } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const onRowClick = handleAction('onRowClick');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      filtering: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
    }),
  ];

  return (
    <Container fullPage>
      <AutoResizer>
        {({ width, height }) => (
          <VirtualTable
            items={items}
            columns={columns}
            width={width}
            height={height}
            onRowClick={onRowClick}
            allowTableSettings
          />
        )}
      </AutoResizer>
    </Container>
  );
};
AutoResizingTableStory.storyName = 'Auto Resize Table';
AutoResizingTableStory.parameters = {
  docs: {
    iframeHeight: 400,
  },
};

export default {
```

## Variants

- Disabled
- Small
- Small
- Small
- Small
- Small
- Small

## Examples

### AutoResizingTable

```tsx
const onRowClick = handleAction('onRowClick');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      filtering: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
    }),
  ];

  return (
    <Container fullPage>
      <AutoResizer>
        {({ width, height }) => (
          <VirtualTable
            items={items}
            columns={columns}
            width={width}
            height={height}
            onRowClick={onRowClick}
            allowTableSettings
          />
        )}
      </AutoResizer>
    </Container>
  );
};
AutoResizingTableStory.storyName = 'Auto Resize Table';
AutoResizingTableStory.parameters = {
  docs: {
    iframeHeight: 400,
  },
};

export default {
```

### CellEditingInsertRowAt

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

### CellEditingWithCustomEditors

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable
          apiRef={setTableApi}
          items={items}
          columns={columns}
          width={1500}
          maxHeight={400}
          filtering
          allowClearAllFilters
          cellEditing
        />
        <h2>Modified Rows:</h2>
        <Pre>
          <Code>
            getModifiedRows() {'=>'} {JSON.stringify(tableApi?.cellEditing?.getModifiedRows?.(), ' ', 2)}
          </Code>
        </Pre>
      </LocalizationProvider>
    </div>
  );
};
CellEditingWithCustomEditorsStory.storyName = 'Cell Editing - Custom Editors';
CellEditingWithCustomEditorsStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### CellEditingWithSingleClick

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <VirtualTable
        fixed
        items={items}
        columns={columns}
        width={1500}
        maxHeight={400}
        filtering
        allowClearAllFilters
        cellEditing={{
          allowEditBySingleClick: true,
        }}
      />
    </LocalizationProvider>
  </div>
```

### ColumnAggregates

```tsx
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      flex: 0,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      filtering: true,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
      filterType: FilterType.NUMBER,
      sortable: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      width: 200,
      flexGrow: 1,
      filtering: true,
      filterType: FilterType.DATE,
      filterFieldProps: { variant: 'dialog' },
      sortable: true,
    }),
  ];

  const [weightSum, setWeightSum] = useState(0);

  const onItemsChange = useCallback(({ items: newItems }) => {
    setWeightSum(getWeightSum(newItems));
  }, []);

  const footerRenderer = useCallback(
    ({ columns: currentColumns, items: currentItems }) => (
      <div className="BaseTable__row" style={{ height: '100%', fontWeight: 'bold' }}>
        <div style={{ width: currentColumns[0].width }} />
        <div style={{ width: currentColumns[1].width }} />
        <div style={{ width: currentColumns[2].width }} />
        <div style={{ width: currentColumns[3].width }} className="BaseTable__row-cell">
          Sum of weight: {getWeightSum(currentItems)} g
        </div>
      </div>
    ),
    [],
  );

  return (
    <AutoSizeGrid container direction="column">
      <Typography variant="h2">Aggregation with onItemsChange</Typography>
      <Grid size={{ xs: false }}>
        <p>Using `onItemsChange` prop callback, we can implement data aggregations</p>
      </Grid>
      <div>Sum of weight: {weightSum} g</div>
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={155}
                filtering
                allowClearAllFilters
                onItemsChange={onItemsChange}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <hr />
      <Typography variant="h2">Aggregation with footerRenderer</Typography>
      <Grid size={{ xs: false }}>
        <p>
          Using `footerRenderer` we can implement aggregations into the footer. This is an alternative to
          `onItemsChange` abote for doing aggregations
        </p>
      </Grid>
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={155}
                filtering
                allowClearAllFilters
                footerHeight={45}
                footerRenderer={footerRenderer}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
    </AutoSizeGrid>
  );
};
ColumnAggregatesStory.storyName = 'Column Aggregates';
ColumnAggregatesStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

### ColumnGrouping

```tsx
const { selected, onSelectedChange } = useSelection();

  const columns = useMemo(
    () => [
      Column({
        label: '#',
        dataKey: 'id',
        width: 60,
        flex: 0,
        align: 'center',
      }),
      Column({
        label: 'Fruit name',
        dataKey: 'title',
        width: 200,
        flexGrow: 1,
        group: 'Group 1',
        filtering: true,
        sortable: true,
      }),
      Column({
        label: 'Color',
        dataKey: 'color',
        align: 'center',
        width: 200,
        flexGrow: 1,
        renderAsArray: true,
        limit: 2,
        SeparatorComponent: MinusSeparator,
        renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      }),
      Column({
        label: 'Weight',
        dataKey: 'weight',
        width: 150,
        group: 'Group 2',
        renderer: (item) => `${item} g`,
        filtering: true,
        filterType: FilterType.NUMBER,
        filterFn: (item, value) => item >= value,
        sortable: true,
      }),
      Column({
        label: 'Best Before',
        dataKey: 'bestBefore',
        width: 200,
        group: 'Group 3',
        flexGrow: 1,
        filtering: true,
        filterType: FilterType.DATE,
        filterFieldProps: { variant: 'dialog' },
        sortable: true,
      }),
    ],
    [],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        Default row height (ROW_HEIGHT={ROW_HEIGHT}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={1000}
          maxHeight={320}
          filtering
          selected={selected}
          onSelectedChange={onSelectedChange}
          allowTableSettings
        />
      </div>
      <br />
      <div>
        Small row height (ROW_HEIGHT_SMALL={ROW_HEIGHT_SMALL}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={1000}
          maxHeight={320}
          rowHeight={32}
          filtering
          selected={selected}
          onSelectedChange={onSelectedChange}
          allowTableSettings
        />
      </div>
    </LocalizationProvider>
  );
};
ColumnGroupingStory.storyName = 'Column grouping';

export default {
```

### ExpandedRow

```tsx
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      flex: 0,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  const newItems = [...items.slice(0, 3), { ...items[3], nutritions: null }, ...items.slice(4)];
  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                rowKey="name"
                items={newItems}
                columns={columns}
                width={width}
                maxHeight={height}
                expandRowKey="nutritions"
                ExpandedRow={DetailsExpandedRow}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Simply set the component to <code>ExpandedRow</code> prop to make and expanded row. The
          <code>ExpandedRow</code> component gets some extra props like <code>style</code> and
          <code> rowData</code> which can affect rendering.
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
ExpandedRowStory.storyName = 'Expanded Row';
ExpandedRowStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### FilterTable

```tsx
const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');
  const onClearAllFiltersClick = handleAction('onClearAllFiltersClick', () => true);

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      flex: 0,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      filtering: true,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
      filterType: FilterType.NUMBER,
      filterFn: (item, value) => item >= value,
      sortable: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      width: 200,
      flexGrow: 1,
      filtering: true,
      filterType: FilterType.DATE,
      filterFieldProps: { variant: 'dialog' },
      sortable: true,
    }),
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={155}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                onClearAllFiltersClick={onClearAllFiltersClick}
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          VirtaulTable columns can be filtered with their own filter input. <br />
          To enable: Prop filtering has to be true for the VirtaulTable and for every Column which needs filtering
        </p>
        <p>
          With Column.filterType we can control what kind of input field appears. Available options: [string, number,
          date] or (FilterType.STRING, FilterType.NUMBER, FilterType.DATE). If not set or has wrong value, string is
          used.
          <br />
          With Column.filterFn we can control what the filter function is. The default checks two strings if one
          includes the other. <br />
          With Column.filterRenderer we can control what will show up for the filter input field, styling is the
          filterRenderers responsibility. <br />
          With Column.filterFieldProps we can add additional props to the filter component.
        </p>
        <p>
          To enable clear filters button: Prop clearAllFiltersButton must be true. <br />
          An external function can be invoked when the clear button is clicked by providing prop onClearAllFiltersClick.
          <br />
          Depending on the return value of that function, the original func to clear filters is invoked (true) or even
          not (false);
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
FilterTableStory.storyName = 'Filtering Table';
FilterTableStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

### FilterTableAsync

```tsx
const columns = useMemo(
    () => [
      Column({
        label: '#',
        dataKey: 'id',
        width: 60,
        flex: 0,
        align: 'center',
      }),
      Column({
        label: 'Fruit name',
        dataKey: 'name',
        width: 200,
        flexGrow: 1,
        filtering: true,
        sortable: true,
      }),
      Column({
        label: 'Color',
        dataKey: 'color',
        align: 'center',
        width: 200,
        flexGrow: 1,
        renderAsArray: true,
        limit: 2,
        SeparatorComponent: MinusSeparator,
        renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      }),
      Column({
        label: 'Weight',
        dataKey: 'weight',
        width: 150,
        renderer: (item) => `${item} g`,
        filtering: true,
        filterType: FilterType.NUMBER,
        filterFn: (item, value) => item >= value,
        sortable: true,
      }),
      Column({
        label: 'Best Before',
        dataKey: 'bestBefore',
        width: 200,
        flexGrow: 1,
        filtering: true,
        filterType: FilterType.DATE,
        filterFieldProps: { variant: 'dialog' },
        sortable: true,
      }),
    ],
    [],
  );

  const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');
  const onClearAllFiltersClick = handleAction('onClearAllFiltersClick', () => true);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(originalItems);
  const onFilterValuesChange = useCallback(
    ({ filterValues } /* , event */) => {
      if (!filterValues) {
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const filterKeys = Object.keys(filterValues);
        const newItems = filterKeys.reduce((result, columnId) => {
          const column = columns.find(({ dataKey }) => dataKey === columnId);
          return column
            ? result.filter((item) =>
                (column.filterFn || defaultFilterFn)(item[column.dataKey] ?? '', filterValues[columnId], column),
              )
            : result;
        }, originalItems);
        setItems(newItems);
        setLoading(false);
      }, 1000);
    },
    [columns],
  );

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                loading={loading}
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={155}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                onClearAllFiltersClick={onClearAllFiltersClick}
                remoteFiltering
                onFilterValuesChange={onFilterValuesChange}
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        For server-side / async filtering the following steps need to be done:
        <ul>
          <li>
            <code>remoteFiltering</code> props must be set to disable the built-in filtering mechanism;
          </li>
          <li>
            a callback method in <code>onFilterValuesChange</code> prop must be set and the filtering operation can be
            started asynchronously;
          </li>
          <li>
            when filtering is completed, set the result in <code>items</code> props.
          </li>
        </ul>
      </Grid>
    </AutoSizeGrid>
  );
};
FilterTableAsyncStory.storyName = 'Filtering Table (async)';
FilterTableAsyncStory.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

### KeyboardNavigation

```tsx
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      className: 'id-cell-classname',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: {},
      },
      filtering: true,
    }),
    Column({
      label: 'Family',
      dataKey: 'family',
      width: 200,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: {},
      },
      filtering: true,
    }),
    Column({
      label: 'Select',
      dataKey: 'select',
      width: 200,
      filtering: true,
      cellEditing: {
        editor: EnumEditor(['', 'Select1', 'Select2', 'Select3', 'Select4', 'Select5']),
        hideEditedIcon: true,
      },
    }),
    Column({
      label: 'Status',
      dataKey: 'status',
      cellRenderer: CheckboxCell,
      align: 'center',
      width: 100,
      cellEditing: {
        editable: true,
        editor: ToggleOnClickEditor,
        hideEditedIcon: true,
      },
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
      cellEditing: {
        editable: true,
        editor: {},
        disableAutomaticEditorOpen: true,
      },
      filtering: true,
    }),
    Column({
      label: 'Genus',
      dataKey: 'genus',
      width: 200,
      flexGrow: 1,
      focusable: false,
      filtering: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      cellRenderer: DateCell,
      width: 250,
      flexGrow: 1,
      cellEditing: {
        editable: true,
        editor: DatePickerEditor,
        componentProps: {
          format: DateFormat.ISO_DATE.format,
        },
      },
      filtering: true,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
    }),
  ];

  const tableData = useMemo(() => items.map((item) => ({ ...item, select: '' })), []);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable
          items={tableData}
          columns={columns}
          width={700}
          maxHeight={320}
          rowHeight={32}
          cellEditing={{ cellEditingState }}
          keyboardNavigation
          filtering
        />
      </LocalizationProvider>
    </div>
  );
};
KeyboardNavigationStory.storyName = 'Keyboard Navigation';
KeyboardNavigationStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### LazyLoadingTable

```tsx
const [sortState, setSortState] = useState<Readonly<Record<string, SortOrder>>>({
    id: SortOrder.ASC,
  });
  const onColumnSort = useCallback(
    ({ key, order }: { key: ColumnKey; order: SortOrder; column: VirtualTableColumn }) => {
      setSortState(() => ({ [key]: order }));

      // it is needed to avoid internal sort state update (eg: server-side, custom sorting)
      return false;
    },
    [],
  );

  const onLazyDataRequest = useCallback<OnDataRequest<Fruit>>(
    async ({ limit, offset }) => {
      const serviceParams = {
        limit,
        offset,
        sortBy: map(sortState, (value, key) => `${key}:${value}`),
      };
      const { totalCount, results } = await fruitLazyService(serviceParams);

      return {
        total: totalCount,
        rowsData: results,
      };
    },
    [sortState],
  );

  const { selected, onSelectedChange } = useSelection();

  const { loading, items, error } = useLazyLoader(onLazyDataRequest, {
    blockSize: 10,
  });

  const columns = useMemo(
    () => [
      Column({
        label: '#',
        dataKey: 'id',
        width: 60,
        align: 'center',
        sortable: true,
      }),
      Column({
        label: 'Fruit name',
        dataKey: 'name',
        width: 200,
        flexGrow: 1,
        sortable: true,
      }),
    ],
    [],
  );

  const selectStateGetter = useCallback<typeof defaultSelectStateGetter>((args) => {
    const { rowId } = args;
    if (!rowId) {
      return { hidden: true };
    }

    return defaultSelectStateGetter(args);
  }, []);

  return (
    <AutoSizeGrid className={undefined} container direction="column">
      <Typography variant="h2">Lazy loading for virtual table</Typography>
      <Grid size={{ xs: false }}>
        <p>Using the `useLazyLoader` hook it is easy to create Lazy Loading for virtual table.</p>
        <p>
          The hook needs an async callback (promise), with signature `onLazyDataRequest` (defined in useLazyLoader.tsx)
          and some options.
        </p>
        <p>
          Using a javascript Proxy as `items`, the Proxy will call the service when it need to display data from a block
          not already fetched, and set the length of the virtualTable items to the `total` coming from the service
          response. This way only a subset of the total items are loaded, but the table looks like all the data is
          loaded and it will load more as the user scrolls.
        </p>
        <p>The `useVirtualTableSortState` hook will help to solve the sorting for lazy loading.</p>
        <p>
          IMPORTANT NOTE: When using lazy loading with useSelection, the checkbox in the heading should not be
          rendered(using selectStateGetter props. see this example) because it will work inproperly. Due to the
          selection not knowing the whole list of ids to select, it will not be able to guess the state of the
          `allSelected` checkbox and when selecting/deselecting all it will not be able to do it. For these
          functionalities this functionality should be implemented.
        </p>
      </Grid>
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              loading={loading}
              error={!!error}
              items={items}
              sortState={sortState}
              onColumnSort={onColumnSort}
              selectStateGetter={selectStateGetter}
              columns={columns}
              width={width}
              height={height}
              selected={selected}
              onSelectedChange={onSelectedChange}
            />
          )}
        </AutoResizer>
      </Grid>
    </AutoSizeGrid>
  );
```

### ResizableColumn

```tsx
const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      resizable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      resizable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      resizable: true,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      resizable: true,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <VirtualTable items={items} columns={columns} width={700} maxHeight={320} rowHeight={32} filtering />
      </LocalizationProvider>
    </div>
  );
};
ResizableColumnStory.storyName = 'Resizable Column';
ResizableColumnStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### RowActions

```tsx
const onRowClick = handleAction('onRowClick', ({ event }) => event.persist());
  const onColumnSort = handleAction('onColumnSort');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      filtering: true,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
      filterType: FilterType.NUMBER,
      filterFn: (item, value) => item >= value,
      sortable: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      width: 200,
      flexGrow: 1,
      filtering: true,
      filterType: FilterType.DATE,
      filterFieldProps: { variant: 'dialog' },
      sortable: true,
    }),
  ];

  const rowActions = {
    label: 'Actions', // optional, default is empty
    width: 72, // optional, just to fit text
    actions: [
      {
        key: 'X1',
        title: 'Add to shoppingcart',
        leftIcon: <AddShoppingCartIcon />,
        onClick: handleAction('addToShoppingCart'),
        size: 'small',
      },
      {
        key: 'X2',
        title: 'Add to watchlist',
        leftIcon: <FavoriteIcon />,
        onClick: handleAction('addToFavorite'),
        size: 'small',
      },
    ],
  };

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                emptyHeight={150}
                onColumnSort={onColumnSort}
                onRowClick={onRowClick}
                filtering
                allowClearAllFilters
                rowActions={rowActions}
                ExpandedRow={DetailsExpandedRow}
                expandRowKey="nutritions"
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Row Actions will be displayed at the right side of the table in a frozen column. To add row actions provide
          prop rowActions.
        </p>
        <p>If there are multiple row actions provided in an array, a menu button is placed instead.</p>
      </Grid>
    </AutoSizeGrid>
  );
};
RowActions.storyName = 'Row Actions';
RowActions.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### RowSelection

```tsx
const { selected, onSelectedChange, selectItems, deselectAll } = useSelection();

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      flex: 0,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      filtering: true,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      filtering: true,
      filterType: FilterType.NUMBER,
      filterFn: (item, value) => item >= value,
      sortable: true,
    }),
    Column({
      label: 'Best Before',
      dataKey: 'bestBefore',
      width: 200,
      flexGrow: 1,
      filtering: true,
      filterType: FilterType.DATE,
      filterFieldProps: { variant: 'dialog' },
      sortable: true,
    }),
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid size={{ xs: false }}>
        <Button onClick={() => selectItems(items, 'name')}>Select All</Button>
        <Button onClick={() => deselectAll()}>Deselect All</Button>
        <span>Seleted items are: {Array.from(selected.keys()).join(', ') || '-'}</span>
      </Grid>
      <Grid flex={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AutoResizer>
            {({ width, height }) => (
              <VirtualTable
                rowKey="name"
                items={items}
                columns={columns}
                width={width}
                maxHeight={height}
                selected={selected}
                onSelectedChange={onSelectedChange}
                filtering
                allowClearAllFilters
                allowTableSettings
              />
            )}
          </AutoResizer>
        </LocalizationProvider>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Row selection can be easily added using the <code>useSelection</code> hook. The hook will return a
          <code> selected</code> Map object and an <code>onSelectedChange</code> method which must be passed to the
          props of <code>VirtualTable</code> and will render the selection column automatically.
        </p>
        <p>
          It is possible to add <code>selectStateGetter</code> and <code>isAllSelected </code>
          method props to control the state and tooltip of selection checkboxes
        </p>
        <p>
          <code>useSelection</code> can be imported with:
        </p>
        <pre>import {'{ useSelection }'} from &apos;@lsy-netline/netline-ui/VitualTable&apos;;</pre>
      </Grid>
    </AutoSizeGrid>
  );
};
RowSelection.storyName = 'Row Selection';
RowSelection.parameters = {
  docs: {
    iframeHeight: 650,
  },
};

export default {
```

### Sample

```tsx
const onRowClick = handleAction('onRowClick');

  const items = [
    {
      id: 1,
      name: 'Apple',
      color: '#e51e25',
      weight: 250,
    },
    {
      id: 2,
      name: 'Banana',
      color: '#bad52a',
      weight: 200,
    },
    {
      id: 3,
      name: 'Cherries',
      color: '#7d1818',
      weight: 5,
    },
    {
      id: 4,
      name: 'Date Fruit',
      color: '#5f2020',
      weight: 25,
    },
    {
      id: 5,
      name: 'Elderberries',
      color: '#2e2449',
      weight: 30,
    },
    {
      id: 6,
      name: 'Figs',
      color: '#874f68',
      weight: 20,
    },
    {
      id: 7,
      name: 'Grapefruit',
      color: '#e0707c',
      weight: 350,
    },
  ];

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      width: 200,
      flexGrow: 1,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <VirtualTable items={items} columns={columns} width={700} maxHeight={500} onRowClick={onRowClick} />
    </div>
  );
};
Sample.tags = ['hideInSidebar'];

export default {
```

### SimpleTable

```tsx
const onRowClick = handleAction('onRowClick');
  const onTableSettingsClick = handleAction('onTableSettingsClick');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      align: 'right',
      width: 150,
      renderer: (item) => `${item} g`,
    }),
  ];

  return (
    <div>
      <div>
        Default row height (ROW_HEIGHT={ROW_HEIGHT}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={700}
          maxHeight={320}
          onRowClick={onRowClick}
          allowTableSettings
          onTableSettingsClick={onTableSettingsClick}
        />
      </div>
      <br />
      <div>
        Small row height (ROW_HEIGHT_SMALL={ROW_HEIGHT_SMALL}px):
        <VirtualTable
          items={items}
          columns={columns}
          width={700}
          maxHeight={320}
          rowHeight={32}
          onRowClick={onRowClick}
          allowTableSettings
          onTableSettingsClick={onTableSettingsClick}
        />
      </div>
    </div>
  );
};
SimpleTable.storyName = 'Simple Table';
SimpleTable.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### SortingTableAsync

```tsx
const onRowClick = handleAction('onRowClick');
  const [sortedItems, setSortedItems] = useState(items);
  const [sorting, setSorting] = useState(false); // simulate async sorting this way
  const [sortState, setSortState] = useState({
    id: SortOrder.ASC,
  });

  const onColumnSort = handleAction('onColumnSort', ({ key, order, column }) => {
    // simulate async sorting with displaying a message in table overlay
    setSorting(true);
    setTimeout(() => {
      setSorting(false);
      const newSortState = { [key]: order };
      setSortState(newSortState);
      setSortedItems([...items.sort((column.sorterFn || defaultSorter)({ key, order, column }))]);
    }, 1000);

    // it is needed to avoid internal sort state update (eg: server-side, custom sorting)
    return false;
  });

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      sortable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      sortable: true,
    }),
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              items={sortedItems}
              columns={columns}
              width={width}
              maxHeight={height}
              sortState={sortState}
              onColumnSort={onColumnSort}
              onRowClick={onRowClick}
              overlayRenderer={sorting ? <OverlayText text="Sorting, please wait..." /> : undefined}
            />
          )}
        </AutoResizer>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Asynchronous and more customizable sorting is also possible. Using the `sortState` and `onColumnSort` props
          there are more flexible solutions are available for exernally controlled sorting, like:
        </p>
        <ul>
          <li>Server-side sorting</li>
          <li>Client-side custom and async sorting</li>
          <li>Multiple key sorting</li>
        </ul>
      </Grid>
    </AutoSizeGrid>
  );
};
SortingTableAsyncStory.storyName = 'Sorting Table (async)';
SortingTableAsyncStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

### SortingTableSync

```tsx
const onRowClick = handleAction('onRowClick');
  const onColumnSort = handleAction('onColumnSort');

  const columns = [
    Column({
      label: '#',
      dataKey: 'id',
      width: 60,
      align: 'center',
      sortable: true,
    }),
    Column({
      label: 'Fruit name',
      dataKey: 'name',
      width: 200,
      flexGrow: 1,
      sortable: true,
    }),
    Column({
      label: 'Color',
      dataKey: 'color',
      align: 'center',
      width: 200,
      flexGrow: 1,
      renderAsArray: true,
      limit: 2,
      SeparatorComponent: MinusSeparator,
      renderer: (color) => <div style={{ color: 'white', backgroundColor: color }}>{color}</div>,
    }),
    Column({
      label: 'Weight',
      dataKey: 'weight',
      width: 150,
      renderer: (item) => `${item} g`,
      sortable: true,
    }),
  ];

  return (
    <AutoSizeGrid container direction="column">
      <Grid flex={1}>
        <AutoResizer>
          {({ width, height }) => (
            <VirtualTable
              items={items}
              columns={columns}
              width={width}
              maxHeight={height}
              onColumnSort={onColumnSort}
              onRowClick={onRowClick}
            />
          )}
        </AutoResizer>
      </Grid>
      <Grid size={{ xs: false }}>
        <p>
          Columns can be made sortable by adding `sortable=true` to the column definition. To disable sorting for the
          whole table the prop {'disableSort={true}'} must be.
        </p>
        <p>
          The sort key and direction controlled by the component internal state, but it is able to take over the control
          setting `sortBy` and `onColumnSort` props on the table component.
        </p>
      </Grid>
    </AutoSizeGrid>
  );
};
SortingTableSyncStory.storyName = 'Sorting Table (sync)';
SortingTableSyncStory.parameters = {
  docs: {
    iframeHeight: 500,
  },
};

export default {
```

## MUI Reference

This component is based on Material-UI's VirtualTable.

For additional props and detailed API documentation, refer to:

- [MUI VirtualTable Documentation](https://mui.com/material-ui/api/virtualtable/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
