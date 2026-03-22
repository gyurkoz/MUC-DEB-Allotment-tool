# Cell Editing With Custom Editors

Cell Editing With Custom Editors component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CellEditingWithCustomEditors } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
