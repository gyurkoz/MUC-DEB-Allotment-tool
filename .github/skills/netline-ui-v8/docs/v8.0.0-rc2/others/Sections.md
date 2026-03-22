# Sections

Sections component

## Overview

- **Category**: others
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Sections } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const initialValue = {};
  const sectionsConfig: DynamicFormSection = {
    key: 'section.level_1',
    title: 'dynamic_form.sections.level_1',
    description: 'It uses different header size depending on the depth of the nested section.',
    sections: [
      {
        key: 'section.level_2',
        title: 'Show section header and description (Level 2)',
        sections: [
          {
            key: 'section.level_3',
            title: 'dynamic_form.sections.level_3',
            items: [{ type: 'CHECKBOX', key: 'checkbox_level_3', label: 'Checkbox level 3' }],
            sections: [
              {
                key: 'section.level_4',
                title: 'dynamic_form.sections.level_4',
                items: [{ type: 'CHECKBOX', key: 'checkbox_level_4', label: 'Checkbox level 4' }],
                sections: [
                  {
                    key: 'section.level_5',
                    title: 'dynamic_form.sections.level_5',
                    items: [{ type: 'CHECKBOX', key: 'checkbox_level_5', label: 'Checkbox level 5' }],
                    sections: [
                      {
                        key: 'section.level_6',
                        title: 'dynamic_form.sections.level_6',
                        description: 'After the 6th nested section, the size is the same as the 6th size.',
                        items: [{ type: 'CHECKBOX', key: 'checkbox_level_6', label: 'Checkbox level 6' }],
                        sections: [
                          {
                            key: 'section.level_7',
                            title: 'dynamic_form.sections.level_7',
                            items: [{ type: 'CHECKBOX', key: 'checkbox_level_7', label: 'Checkbox level 7' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DynamicForm
            sections={[sectionsConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
```

## Variants

- Small

## Examples

```tsx
const initialValue = {};
  const sectionsConfig: DynamicFormSection = {
    key: 'section.level_1',
    title: 'dynamic_form.sections.level_1',
    description: 'It uses different header size depending on the depth of the nested section.',
    sections: [
      {
        key: 'section.level_2',
        title: 'Show section header and description (Level 2)',
        sections: [
          {
            key: 'section.level_3',
            title: 'dynamic_form.sections.level_3',
            items: [{ type: 'CHECKBOX', key: 'checkbox_level_3', label: 'Checkbox level 3' }],
            sections: [
              {
                key: 'section.level_4',
                title: 'dynamic_form.sections.level_4',
                items: [{ type: 'CHECKBOX', key: 'checkbox_level_4', label: 'Checkbox level 4' }],
                sections: [
                  {
                    key: 'section.level_5',
                    title: 'dynamic_form.sections.level_5',
                    items: [{ type: 'CHECKBOX', key: 'checkbox_level_5', label: 'Checkbox level 5' }],
                    sections: [
                      {
                        key: 'section.level_6',
                        title: 'dynamic_form.sections.level_6',
                        description: 'After the 6th nested section, the size is the same as the 6th size.',
                        items: [{ type: 'CHECKBOX', key: 'checkbox_level_6', label: 'Checkbox level 6' }],
                        sections: [
                          {
                            key: 'section.level_7',
                            title: 'dynamic_form.sections.level_7',
                            items: [{ type: 'CHECKBOX', key: 'checkbox_level_7', label: 'Checkbox level 7' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const handleChange = action('change');

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DynamicForm
            sections={[sectionsConfig]}
            initialValue={initialValue}
            onChange={handleChange}
            disableSection={false}
            size="small"
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
