# Cell Editing With Single Click

Cell Editing With Single Click component

## Overview

- **Category**: tables
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { CellEditingWithSingleClick } from '@lsy-netline/netline-ui';
```

## Basic Usage

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

## Variants

- Small

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
