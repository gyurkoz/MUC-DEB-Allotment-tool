---
name: figma-svg-to-netline-ui
description: Analyze Figma-exported SVG structure and convert into production-ready React 19 + TypeScript components built with Netline UI v8, theme-aware styling, accessibility, and repo conventions.
---

# Figma SVG to Netline UI

Use this skill when you are given one or more **Figma-exported SVG files** and need to recreate the design as a **real Netline UI component** rather than pasting the SVG into the app and hoping for the best.

## Mission

Transform exported SVGs into maintainable UI components that:

- use **Netline UI v8 first** (`@lsy-netline/*`)
- follow **React 19 + TypeScript + Vite** project conventions
- use **theme-aware styling** (`sx`, palette tokens, theme constants)
- preserve the **visual intent** of the Figma design
- remain **accessible, testable, and editable** after conversion

## Source of truth

Always work from these sources, in this order:

1. The provided **SVG export(s)**
2. The local Netline UI skill and offline docs:
   - `.github/skills/netline-ui-v8/SKILL.md`
   - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/index.md`
3. Existing repo patterns under `src/`, especially reusable building blocks already present in the project:
   - tab layouts: `src/components/header/MainMenu.tsx`, `src/components/PageFrame.tsx`, `src/features/navigation/*`
   - data grids: `src/features/booking-list/components/BookingList.tsx`
   - forms: `src/features/profile/components/ProfileForm/*`, `src/features/booking/payment/PaymentStep.tsx`
   - reusable field/display components: `src/components/ReadOnlyField.tsx`, `src/components/DatePicker.tsx`, `src/components/DateRangePicker.tsx`
   - accordions: `src/features/booking/payment/components/booking-overview/ServicesAccordion.tsx`, `src/features/booking/payment/components/booking-overview/FareDetailsAccordion.tsx`

4. Optional supporting Figma context, if the user also provides a Figma URL or node reference

If a provided SVG and the surrounding product conventions disagree, prefer the product conventions for behavior and the SVG for visual structure.

## Primary objective: analyze the SVG exhaustively before rebuilding anything

This skill is primarily about **correct analysis**, not just conversion.

Before implementing, the agent must verify that it understands the SVG comprehensively:

- every visible layer
- every object group
- every text node or text-like outline
- every divider, border, background, badge, icon, and affordance
- every spacing relationship
- every alignment rule
- every repeated pattern
- every interaction hint implied by the design

The output component is only acceptable if it contains **all meaningful layers, items, objects, texts, layouts, and formatting cues** from the SVG — either reconstructed semantically or intentionally preserved as vector.

If something visible in the SVG is omitted, merged away, misclassified, or approximated too loosely, the analysis is incomplete.

## Core rule: rebuild UI, don’t screenshot it in XML

**Default behavior:** Recreate the exported SVG as a composition of Netline UI components.

### Preferred output

Prefer Netline UI building blocks such as:

- `Box` — layout wrapper
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/layout/Box.md`
- `Stack` / `Grid` — spacing and alignment
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/layout/Stack.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/layout/Grid.md`
- `Typography` — all text
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/theming/Typography.md`
- `Button` / `IconButton` — interactive actions
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/basic-ui/Button.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/basic-ui/IconButton.md`
- `TextField`, `SingleSelectField`, `MultiSelectField`, etc. — form controls
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/TextField.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/SingleSelectField.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/inputs/MultiSelectField.md`
- `Card`, `Paper`, `Dialog`, `Alert`, `Snackbar` — surfaces and feedback
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/Card.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/surfaces/Paper.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/others/Dialog.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/feedback/Alert.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/feedback/Snackbar.md`
- `Accordion`, `AccordionSummary`, `AccordionDetails` — disclosure/expandable sections (re-exported from MUI)
  - [MUI Accordion docs](https://mui.com/material-ui/react-accordion/)
- `Tabs`, `Tab` — tabbed navigation and content switching
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/Tabs.md`
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/navigation/Tab.md`
- `List`, `ListItem`, `ListItemButton`, `ListItemIcon`, `ListItemText` — vertical data lists (re-exported from MUI)
  - [MUI List docs](https://mui.com/material-ui/react-list/)
- `Divider` — separators between content sections
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/data-display/Divider.md`
- `Chip` — compact labels, tags, filters, statuses
  - `.github/skills/netline-ui-v8/docs/v8.0.0-rc2/data-display/Chip.md`

### Prefer existing icons and assets over raw SVG

In most cases, **do not keep raw SVG at all**.

If the exported SVG contains an icon, symbol, chevron, close button, menu glyph, status symbol, calendar icon, arrow, tab indicator icon, or similar UI glyph, first try to replace it using this source order:

1. **Netline UI-compatible icon usage already present in the repo**
2. **MUI icons** from `@mui/icons-material`
3. **Existing project assets or icon-like SVGs already used by the project**

- examples: `src/assets/**`, `public/assets/**`, `src/components/AirlineLogo.tsx`, `src/components/Logo.tsx`

4. **A small extracted project icon component** only if no equivalent already exists

Raw SVG should be kept only as a last resort, and usually only for:

1. **brand marks / logos** that must match a provided asset exactly
2. **illustrations** or multi-part decorative artwork
3. **domain-specific custom icons** that do not exist in Netline UI, MUI, or the repo
4. **maps/charts/diagrams** where semantic component reconstruction would be misleading

If raw SVG is still required:

- isolate it into a tiny focused component
- verify there is no equivalent MUI icon or existing project asset first
- prefer replacing simple sub-parts of the SVG with existing icons even when the full composition remains custom
- keep the surrounding layout in Netline UI
- document why raw SVG could not be avoided

## Decision tree

### 1) Is the SVG just an icon?

- Convert it into a reusable icon component.
- Prefer inheriting color from the parent (`currentColor`) unless the icon is multi-tone and intentionally fixed.
- Use `aria-hidden` for decorative icons and accessible labels for meaningful icons.

### 2) Is the SVG a whole screen, card, form, table, modal, or toolbar?

- **Do not** embed it as a giant `<svg>`.
- Rebuild it with Netline UI layout + typography + controls.
- Extract only irreducible vector fragments as icon/illustration subcomponents.

### 3) Is the SVG a mixed case?

- Rebuild the layout with Netline UI.
- Extract vectors into small icon or illustration components.
- Keep the final public component composable and prop-driven.

## Non-negotiables

- **Netline UI first**: use `@lsy-netline/*` before raw MUI.
- **No deprecated `Select`**: use `SingleSelectField` or `MultiSelectField`.
- **Use `@/` aliases** for internal imports.
- **No hardcoded hex/rgb colors** in final UI layout code.
- **No unnecessary `useMemo`, `useCallback`, or `memo()`**.
- **Accessibility is required**: labels, keyboard support, `aria-label` on icon-only buttons.
- **All user-facing strings must be translatable**.
- **Do not preserve SVG text as vector paths** when it should be real text.
- **Do not start coding before finishing the analysis inventory**.

## Exhaustive SVG analysis protocol

Before implementation, create a mental or written inventory of the SVG.

### 1) Structural inventory

Identify and account for all of the following:

- top-level frames
- major sections and containers
- nested groups
- backgrounds and surface layers
- borders, strokes, separators, dividers, underlines
- icons, illustrations, logos, pictograms
- labels, values, headings, helper text, captions
- chips, badges, pills, tabs, toggles
- form controls, fields, dropdowns, checkboxes, radio groups
- table headers, rows, cells, pagination controls, filters
- modal headers/footers/actions if present

Nothing visible should remain unclassified.

### 2) Visual hierarchy inventory

Determine:

- what is primary, secondary, and tertiary information
- which text blocks are headings vs labels vs values vs helper text
- which elements are action affordances vs passive content
- which items repeat with the same visual pattern and should become reusable subcomponents

### 3) Layout inventory

For every major block, determine:

- row vs column structure
- explicit or implied grid
- spacing rhythm
- padding and inset patterns
- alignment rules
- stretch vs fixed-size elements
- whether elements are actually separate controls or just grouped text

### 4) Formatting inventory

Account for:

- typography differences
- border radii
- border thickness / divider usage
- fill vs outline treatment
- icon position and size relationships
- emphasis cues such as uppercase, weight, muted text, highlighted states
- stateful formatting such as selected tabs, active rows, focused fields, disabled controls

## Accuracy verification requirement

After reconstruction, verify the result against the SVG with an explicit checklist.

The component should be checked for:

- **coverage** — every meaningful visible SVG part exists in the implementation
- **semantic fidelity** — the right UI primitive was chosen for each part
- **layout fidelity** — the row/column/grid nesting matches the SVG
- **spacing fidelity** — spacing and alignment are consistent with the source
- **formatting fidelity** — text hierarchy, emphasis, surfaces, dividers, and badges are preserved
- **interaction fidelity** — clickable/typed/selected-looking elements became real interactive components when appropriate

If the rebuilt result cannot explain where each SVG layer went, the implementation is not done.

## How Figma-exported SVGs are structured in practice

> **Note:** The `.tmp/` references below are illustrative analysis artifacts collected while developing this skill. They may not exist in every clone, but the structural recognition patterns described here generalize to typical Figma-exported SVGs.

Figma exports usually look far more “graphic” than “semantic”. The agent must understand that the SVG structure is often a **drawing of a UI**, not a direct representation of real components.

### What the top-level structure usually looks like

In large exports, expect a structure similar to the examples under `.tmp/`:

- `.tmp/FlightSelect/Flight selection.svg`
- `.tmp/FlightSelect/GroupDetailForm.svg`
- `.tmp/FlightSelect/View part.svg`

Common top-level patterns:

- a root `<svg>` with large `width`, `height`, and `viewBox`
- a top-level `<g id="...">` representing the Figma frame name
- many nested `<g id="...">` groups representing frames, auto-layout groups, instances, or layers
- `<rect>` used for panels, backgrounds, buttons, fields, cards, and separators
- `<path>` used for icons, logos, dividers, indicators, and very often text outlines
- `<mask>`, `<clipPath>`, and `<filter>` used to emulate clipping, rounded surfaces, and shadows

For example:

- `.tmp/FlightSelect/Flight selection.svg` shows a full page export with nested groups like `Desktop header`, `App bar`, `Tab bar`, `View part`, `Stepper`, and `FLightSearchsummary`
- `.tmp/FlightSelect/GroupDetailForm.svg` shows a compact card/form export with `GroupToolbar`, `GroupInputFiled` [sic], and repeated `Input field` groups
- `.tmp/FlightSelect/View part.svg` shows a slim breadcrumb/header strip with nested button-like groups and shadow filters

This means the agent must first identify the **intended UI regions**, not just the literal SVG nodes.

### How Figma components typically appear inside SVG

Figma component types do not export as semantic React-style controls. They usually flatten into grouped drawing primitives.

Typical mapping patterns:

- **Frame / Auto Layout / Section** → nested `<g>` groups, often with one or more background `<rect>` nodes
- **Card / Surface / Panel** → one large `<rect>` with fill, radius, optional shadow filter, plus children groups
- **Toolbar / Header / App bar** → a background `<rect>` plus grouped icon/text blocks aligned in rows
- **Button** → background `<rect>` or pill shape plus label rendered as paths or text
- **Input field** → border/background `<rect>` plus separate label/value groups, icons, and helper text groups
- **Tabs** → repeated sibling groups, one visually emphasized by underline, fill, opacity, or stroke
- **Table / Data grid** → repeated row groups, header groups, separators, and possibly masks for clipped regions
- **Stepper** → repeated circles/paths and connectors, often not semantically obvious until the whole row is considered

Very important: a single semantic UI control may export as **many SVG nodes**.

Examples from the real files:

- In `.tmp/FlightSelect/GroupDetailForm.svg`, each apparent field is not “an input component” in SVG terms — it is a composition of label group + content group + surface rectangle + optional border container.
- In `.tmp/FlightSelect/Flight selection.svg`, the tab bar is made of repeated grouped labels and indicators, not a `<tabs>`-like structure.
- In `.tmp/FlightSelect/View part.svg`, breadcrumb and action blocks are just grouped paths and rectangles with shadow filters.

So the correct question is never “what SVG tag is this?” but rather:

- what UI role does this cluster of shapes represent?
- what nearby elements prove that interpretation?
- is this a reusable project component already?

### Text is often not text

Figma exports frequently convert visible text into `<path>` outlines instead of `<text>` nodes.

This is visible in the `.tmp/FlightSelect/*.svg` examples where headings, labels, tab titles, and button copy appear as long path definitions like:

- `labelTab`
- `Label Step`
- `labelValue`
- `labelLabel`

Rules for interpretation:

- if it reads like UI copy, it should become `Typography` or a component label in the implementation
- do not preserve outlined text as vector unless it is a real logo wordmark or artwork
- infer text hierarchy from position, grouping, size, emphasis, and repetition
- repeated path-based text inside field rows usually means labels/values, not illustrations

### How layout information is encoded

Figma layout is only partially explicit in SVG. It is usually implied by:

- sibling order inside a group
- repeated x/y offsets
- repeated widths and heights
- consistent gaps between groups
- nested background rectangles that imply surface boundaries
- shared clipping or masks that define a container area

The agent should read layout structurally like this:

1. identify the outermost surface
2. identify the major horizontal or vertical partitions
3. identify repeated child blocks
4. infer spacing rhythm from repeated offsets and sizes
5. rebuild using `Stack`, `Grid`, and `Box`, not absolute-positioned replicas

Example interpretations:

- `.tmp/FlightSelect/GroupDetailForm.svg` strongly suggests a vertical card layout:
  - outer surface
  - toolbar/header region
  - form body region
  - repeated field blocks arranged horizontally
- `.tmp/FlightSelect/Flight selection.svg` suggests a full page composition:
  - global header
  - app bar with tabs
  - breadcrumb/action strip
  - stepper row
  - content summary/list rows beneath
- `.tmp/FlightSelect/View part.svg` suggests a narrow row-based layout with breadcrumb text on the left and an actionable pill/button on the right

### How formatting is encoded

Formatting in SVG is distributed across fills, strokes, opacity, filters, masks, and geometry.

The agent must inspect:

- `fill` for background or foreground emphasis
- `stroke` and `stroke-width` for borders, separators, focus lines, underlines
- `rx` / `ry` or rounded shapes for surface radius and chip/button feel
- `opacity` / `fill-opacity` for secondary or disabled emphasis
- `filter` for shadows and elevation
- `clip-path` / `mask` for clipped panels or scrollable-looking regions
- repeated geometry sizes for consistent tokens

Interpretation rules:

- convert fills on panels/buttons/fields into theme-aware surface styling
- convert strokes used as dividers into `Divider` or `borderColor: 'divider'`
- convert underlines/selection bars into tab indicator styling, not literal lines unless appropriate
- convert opacity-based secondary text into theme variants like `text.secondary`
- convert shadows into `Paper`/surface elevation or theme-aware `boxShadow`

### What should be preserved exactly vs normalized

Preserve exactly when the SVG is expressing identity or unique vector artwork:

- logos and brand marks
- custom illustrations
- unusual bespoke pictograms
- domain-specific diagrams

Normalize into real UI primitives when the SVG is expressing common UI formatting:

- cards, panels, and toolbars
- buttons and icon buttons
- tabs and active indicators
- form fields and labels
- grid rows, headers, and separators
- breadcrumbs, chips, and pills

In other words:

- **semantic UI structure** should be rebuilt
- **incidental drawing mechanics** should be discarded
- **unique vector art** may remain vector

### Structural warning signs the agent must notice

Some exported SVG patterns are easy to misread:

- a huge number of `<path>` nodes does **not** necessarily mean illustration; it may just be outlined text
- a group named `Button` may still be a static decorative block if there is no interaction context
- a rectangle with text may be a field, a chip, a tab, a button, or a table cell — context decides
- a row of circles and lines may be a stepper, not decorative geometry
- multiple repeated field-like groups may indicate a form grid or summary row, not just arbitrary boxes

Use surrounding structure to disambiguate.

### Practical analysis pass to perform on every exported SVG

For each SVG, explicitly determine:

1. **Frame regions** — what are the major containers?
2. **Interactive-looking regions** — tabs, buttons, inputs, steppers, row actions?
3. **Outlined text regions** — what should become `Typography`?
4. **Repeating patterns** — what should become mapped subcomponents?
5. **Surface system** — which rectangles are cards/panels/fields vs mere decoration?
6. **Formatting intent** — what is a border, a divider, a shadow, a selected state, a muted state?
7. **Reuse opportunity** — which parts match existing project components?

If the agent cannot answer those seven questions, it is not ready to implement.

## Conversion workflow

### Step 1: Inspect the SVG semantically

For each exported SVG, identify:

- overall frame size and viewBox
- repeated spacing rhythm
- text blocks and hierarchy
- sections, panels, dividers, chips, badges, buttons, inputs
- icon-sized vectors vs layout-sized vectors
- state cues: hover, disabled, selected, active, error, loading

Do not map elements one-to-one from SVG nodes. Instead, infer the intended UI structure.

Also verify that every visible item in the SVG is represented in an analysis inventory before implementation begins.

### Step 2: Classify every visible element

Map each visible area into one of these buckets:

- **layout** → `Box`, `Stack`, `Grid`, `Container`, `Paper`, `Card`
- **text** → `Typography`
- **action** → `Button`, `IconButton`, menu-related components
- **input** → `TextField`, `SingleSelectField`, `Checkbox`, `Switch`, etc.
- **feedback** → `Alert`, `Snackbar`, loaders, status chips
- **disclosure** → `Accordion`, `AccordionSummary`, `AccordionDetails`
- **list** → `List`, `ListItem`, or `Stack` + `Divider` for custom lists
- **table/data** → `DataGrid`, table components, chips
- **vector-only** → extracted icon/illustration component

If an element cannot yet be classified, stop and analyze it further instead of guessing.

### Step 3: Replace SVG geometry with component semantics

Common replacements:

- rectangle with rounded corners + text → `Button`, `Card`, `Paper`, `Chip`, or `TextField`
- horizontal grouping of elements → `Stack direction="row"`
- vertically spaced blocks → `Stack`
- divider lines → `Divider`
- text converted to paths → `Typography`
- circular icon tap targets → `IconButton`
- table-like rows → DataGrid or table primitives

The goal is not geometric mimicry. The goal is to preserve **all intended UI meaning**.

### Step 4: Normalize styling into theme-aware tokens

Preferred color strategy:

1. palette tokens like `primary.main`, `text.secondary`, `divider`, `background.paper`
2. theme constants from `src/consts/theme.consts.ts` when needed
3. never hardcoded colors in the final component layout

Preferred spacing strategy:

- convert raw SVG spacing into `sx` spacing units where practical
- keep a consistent spacing scale across the rebuilt component
- avoid pixel-perfect noise when a tokenized layout communicates the same design intent

### Step 5: Extract reusable primitives

If the SVG shows repeatable patterns, extract:

- row/header/item subcomponents
- icon wrappers
- status pill helpers
- prop-based variants (`size`, `variant`, `state`, `severity`)

Also check whether the project already contains a matching reusable component before creating a new primitive.

### Step 6: Add real behavior where the SVG implies it

If the visual design clearly represents an interactive component, implement the real behavior expected for that UI:

- buttons should click
- fields should accept props or form bindings
- dialogs should open/close
- lists and tables should accept data props
- icon buttons should have `aria-label`

If behavior is ambiguous, keep the component stateless and expose props rather than inventing hidden business logic.

### Step 7: Reuse audit against the existing project

Before creating new components, inspect the repo for reusable matches.

Always ask:

- does this already exist as a shared component?
- does a similar layout already exist in the feature area?
- is there already a field wrapper, dialog shell, card shell, table wrapper, or tab pattern for this?
- can this SVG section be implemented by composing existing project components instead of creating new markup?

Prefer reuse when any existing component matches at least the same semantic role and most of the visual structure.

Typical reuse candidates in this repo include:

- `src/components/ReadOnlyField.tsx`
- `src/components/DatePicker.tsx`
- `src/components/DateRangePicker.tsx`
- `src/components/StyledDialog.tsx`
- `src/components/ConfirmationDialog.tsx`
- `src/components/header/MainMenu.tsx`
- `src/features/booking-list/components/BookingList.tsx`
- `src/features/profile/components/ProfileForm/*`
- `src/features/booking/payment/components/booking-overview/ServicesAccordion.tsx`
- `src/features/booking/payment/components/booking-overview/FareDetailsAccordion.tsx`

## Figma-to-component mapping heuristics

### Recognizing tab layouts correctly

Tabs are frequently misimplemented as plain pill buttons or segmented controls. Verify carefully.

Treat a section as a **Tabs** pattern when you see most of these signals:

- repeated adjacent labels with one active selection
- a clear selection indicator (underline, filled state, border emphasis, contrasting background)
- one visible content panel tied to the active label
- equal or rhythmically spaced tab triggers
- horizontal or vertical navigation structure controlling content below/beside it

When reconstructing tabs, verify:

- the selected tab state is visually distinct in the same way as the SVG
- tab label alignment and spacing are correct
- indicator placement is correct
- panel content starts at the correct offset from the tabs
- the pattern matches existing project behavior, especially:
  - `src/components/header/MainMenu.tsx`
  - `src/components/PageFrame.tsx`
  - `src/features/navigation/*`

Do not flatten a real tab layout into static labels.

### Recognizing data grids correctly

Treat a section as a **DataGrid/table** when you see several of these:

- column headers aligned over repeated rows
- sortable/filter-like affordances in header cells
- repeated row height and cell alignment
- zebra striping or row separators
- pagination, row count, checkboxes, status chips, toolbar, or column actions
- consistent vertical and horizontal cell boundaries

If the structure is interactive or dataset-driven, prefer `DataGrid` and compare against:

- `src/features/booking-list/components/BookingList.tsx`

Only use simple table primitives for static tabular display with limited interactivity.

### Recognizing forms correctly

Treat a section as a **form** when you see:

- field labels aligned with values or inputs
- repeated input affordances
- helper/error text positions
- required markers
- grouped controls with a submit/save/cancel action area
- clear editable vs read-only distinction

When the SVG represents a form, compare against:

- `src/features/profile/components/ProfileForm/*`
- `src/features/booking/payment/PaymentStep.tsx`

Prefer the project’s existing React Hook Form + Zod patterns.

Use the appropriate field components:

- `TextField` for text input
- `SingleSelectField` for single-choice selection
- `MultiSelectField` for multi-choice selection
- `Checkbox`, `Radio`, `Switch`, etc. as appropriate

Never recreate a dropdown as a static rectangle with a chevron unless the user explicitly asked for a non-functional mock.

### Recognizing input fields correctly

Distinguish field types carefully:

- text input: rectangular field with cursor/text entry affordance
- read-only field: label/value pairing without editable chrome, possibly reusable as `ReadOnlyField`
- select field: text field with chevron/dropdown affordance
- multi-select: chips/tokens or repeated selected items inside a field
- date field: calendar affordance, date mask, or range pairing
- checkbox/radio/switch: explicit binary or exclusive selection control

Do not treat all rectangles with text as generic `Box` elements. Determine whether they are:

- editable inputs
- read-only display fields
- filter controls
- summary chips
- action buttons

Always verify whether a field can reuse an existing project component such as:

- `src/components/ReadOnlyField.tsx`
- `src/components/DatePicker.tsx`
- `src/components/DateRangePicker.tsx`
- `src/features/booking/*`

### Recognizing lists correctly

Treat a section as a **List** when the SVG shows a repeated vertical sequence of content blocks that share the same internal structure.

Strong signals from the real exports in `.tmp/` include:

- repeated groups explicitly named `List item`
- nested wrappers such as `wrapper`, `content`, or `.listContent`
- one or more consistent row shells inside a larger card or section container
- repeated icon + label/value compositions with the same padding and alignment
- dividers between sibling entries rather than full table cell borders
- card-like sections that contain multiple stacked entries instead of one big freeform canvas

Real examples:

- `.tmp/services/Services_basic.svg` contains `Selected Fare NEW`, `List item`, `wrapper`, `content`, and `.listContent`, which strongly indicates a semantic list rendered inside a card-like surface.
- `.tmp/Overview/Reviw and confirm.svg` contains repeated content blocks under summary sections that read like stacked review items, even when the SVG itself is flattened into many groups.

Implementation guidance:

- when items match a standard list pattern (icon + primary/secondary text), prefer `List`, `ListItem`, `ListItemIcon`, `ListItemText` from `@lsy-netline/netline-ui` (re-exported from MUI — see [MUI List docs](https://mui.com/material-ui/react-list/))
- for custom layouts within each item, use `Stack` + `Divider` inside a `Card` or `Paper` surface
- rebuild the repeated entries by mapping data into a row/item subcomponent
- use real `Typography`, icons, chips, and buttons inside each item instead of preserving the SVG cluster
- if an item includes actions, status chips, or expandable detail, model those as props on the item component

Example list conversion:

```tsx
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@lsy-netline/netline-ui';
import LuggageIcon from '@mui/icons-material/Luggage';

interface ServiceItem {
  id: string;
  label: string;
  detail: string;
}

export function ServiceList({ items }: { items: ServiceItem[] }): React.JSX.Element {
  return (
    <Paper variant="outlined">
      <List disablePadding>
        {items.map((item, index) => (
          <ListItem key={item.id} divider={index < items.length - 1}>
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText primary={item.label} secondary={item.detail} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
```

Do **not** treat a repeated list as a single illustration or a pile of unrelated rectangles.

Also verify whether the visual list is actually one of these specialized list variants:

- **card list** — repeated entries inside a larger rounded surface
- **summary/review list** — label/value rows, often in confirmation screens
- **action list** — repeated items with chevrons, menus, or trailing buttons
- **table-list hybrid** — repeated rows with cell-like alignment, but not a full interactive data grid

### Recognizing accordions correctly

Treat a section as an **Accordion** or disclosure panel when you see a summary/header row that controls a detail region below it.

Strong signals from the real exports in `.tmp/` include:

- a section header inside a bordered or card-like surface
- a trailing expand/collapse affordance such as `keyboard_arrow_up`, `keyboard_arrow_down`, `iconExpand`, or similarly named arrow groups
- a visually distinct summary row followed by nested detail frames below it
- one repeated panel structure where each section has the same header/body rhythm
- an expanded state where the arrow points upward and the detail area is visible

Real examples:

- `.tmp/Overview/Reviw and confirm.svg` shows a large `header` surface with nested `Header_2` / `Content_2`, a trailing `Button_8`, and `keyboard_arrow_up`, which is strong evidence of an expanded accordion section rather than a static card.
- the same file contains grouped summary/detail content (`Frame 811`, `Frame 820`, `Frame 822`, `Frame 881*`) that reinforces a disclosure pattern: compact summary first, detailed body second.
- `.tmp/services/services_Frame1261154247.svg` and related service exports include names like `iconExpand`, which usually indicate collapsible sections or disclosure rows.

Implementation guidance:

- use `Accordion`, `AccordionSummary`, and `AccordionDetails` from `@lsy-netline/netline-ui` (re-exported from MUI — see [MUI Accordion docs](https://mui.com/material-ui/react-accordion/))
- use `ExpandMoreIcon` from `@mui/icons-material` as the standard `expandIcon` prop
- separate the **summary row** from the **details region** into `AccordionSummary` and `AccordionDetails`
- ensure the expand icon is an actual interactive control, not a decorative vector
- keep summary content visible in both collapsed and expanded states
- render the detail content inside `AccordionDetails` with the correct spacing and dividers
- preserve trailing status chips, counts, prices, or meta text from the SVG summary row
- check whether the project already has an accordion that fits, especially:
  - `src/features/booking/payment/components/booking-overview/ServicesAccordion.tsx`
  - `src/features/booking/payment/components/booking-overview/FareDetailsAccordion.tsx`

Example accordion conversion:

```tsx
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@lsy-netline/netline-ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function FlightDetailsAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <Accordion defaultExpanded={false} disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>{children}</Stack>
      </AccordionDetails>
    </Accordion>
  );
}
```

When reconstructing an accordion, explicitly identify:

- the clickable summary area
- the expand/collapse indicator
- the always-visible summary fields
- the hidden/revealed detail content
- whether only one panel may be open or multiple panels may be expanded

Do **not** mistake these patterns for plain cards:

- a card usually has content visible all at once and no disclosure affordance
- an accordion has a summary row plus a stateful body region
- an arrow icon alone is not enough; it becomes accordion evidence when paired with nested body content and repeated disclosure structure

### Recognizing table-list hybrids and repeated form rows

Some Figma exports are visually between a form, a list, and a table. Do not force them too early into the wrong primitive.

Real example:

- `.tmp/passengers/passengers_Frame652.svg` contains `TableHeader_3`, `content-row_3`, many repeated `SingleValueCell_*` groups, repeated `Input field` groups, and many `arrow_drop_down*` affordances.

This usually means the UI is **not** a decorative table drawing. It is more likely one of these:

- a structured list of editable passenger rows
- a grid-like form with repeated per-row controls
- a table-layout summary where some cells are interactive selects or inputs

Implementation guidance:

- if rows are dataset-driven and column-based, prefer a grid or table abstraction
- if each row is effectively a mini-form, consider repeated form-row components rather than a generic data grid
- if the SVG mixes column alignment with real input controls, describe it as a table-list hybrid and preserve both the row structure and the field semantics
- repeated dropdown chevrons usually mean `SingleSelectField`, not decorative arrows
- alternating row backgrounds and aligned headers are evidence of row structure, not proof that every cell should become raw layout boxes

When uncertain, ask:

- is the user expected to edit values in-row?
- do columns define stable data fields?
- does each row contain real controls rather than passive values?
- would an existing project table or form-row pattern fit better than inventing a new hybrid from scratch?

### Typography

If Figma exported text as paths, restore it as real text with `Typography`.

Choose the closest semantic level:

- screen title → heading variant
- section title → subtitle/heading variant
- helper/meta text → `body2` or similar
- badge/status text → chip label or styled `Typography`

### Buttons

If the SVG shows a clear button shape, use `Button` or `IconButton` rather than a clickable `Box`.

Use:

- `Button` for text-bearing actions
- `IconButton` for icon-only actions
- `aria-label` for icon-only actions

## Fallback policy for raw MUI

If Netline UI docs do not expose a suitable component for an SVG-specific primitive, a raw MUI fallback is acceptable.

The most likely fallback is `SvgIcon` or low-level SVG helpers.

When you do this:

- keep the fallback small and isolated
- document the reason in the change summary
- continue using Netline UI for the surrounding layout

## Accessibility rules

Always enforce the following:

- meaningful text stays as text, not vector paths
- decorative SVGs use `aria-hidden`
- informative icons have accessible names when needed
- icon-only buttons include `aria-label`
- interactive areas have keyboard support and visible focus
- forms have labels and helper/error text when relevant

## i18n rules

- Do not hardcode visible copy in final production components.
- Use the project’s translation patterns and `useTranslations()`.
- If the SVG contains sample copy, treat it as placeholder content that must be converted into translation keys or props.

## Output contract

When using this skill, produce:

1. an **analysis summary** describing what the SVG contains
2. an **inventory or mapping summary** explaining where the major SVG layers/groups went
3. a **reuse audit** listing which existing project components were reused or considered
4. the **component implementation**
5. any extracted **icon/illustration components**
6. **prop interfaces** with clear names and explicit return types
7. **tests** for behavior or rendering changes
8. a short note listing:

- Netline UI doc paths used
- any raw MUI fallback and why
- which SVG parts were rebuilt vs preserved as vector

## Recommended prompt template

Use this prompt when invoking the skill:

> Convert the attached/exported Figma SVG(s) into a production-ready Netline UI React component for this repo. Rebuild layout with Netline UI primitives, convert text paths into Typography, keep only irreducible vectors as icon/illustration components, use theme-aware styling, `@/` aliases, accessibility, translations, and add tests for changed behavior. Cite the Netline UI doc paths used and note any raw MUI fallback.

## Detailed prompt template

> I have one or more Figma-exported SVG files. Convert them into maintainable React 19 + TypeScript components for `GST-UI` using Netline UI v8 first. Do not keep the full SVG as layout unless it is only an icon or illustration.
>
> Infer layout structure from the SVG and rebuild it with `Box`, `Stack`, `Grid`, `Typography`, `Button`, `IconButton`, `TextField`, `Card`, `Paper`, `Dialog`, `Alert`, `Chip`, `Divider`, `Tabs`, `Tab`, and, when appropriate, `Accordion`, `AccordionSummary`, `AccordionDetails`, `List`, and `ListItem`, or other documented Netline UI components. Convert text outlines into real text. Use theme palette tokens instead of hardcoded colors, `@/` alias imports, accessibility labels, and project i18n conventions. If a true vector must remain SVG, isolate it in a small component and only use raw MUI for that isolated case if Netline UI has no equivalent. Add or update tests when behavior changes, and summarize which Netline UI doc files were used.

## Example icon conversion

Use this pattern when the SVG is truly just an icon:

```tsx
import type { SVGProps } from 'react';

export interface SeatIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export function SeatIcon({ title = 'Seat', ...svgProps }: SeatIconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-label={title} {...svgProps}>
      <path d="M7 4h10v6H7z" fill="currentColor" />
      <path d="M9 10v7H7v3h2v-3h6v3h2v-3h-2v-7" fill="currentColor" />
    </svg>
  );
}
```

## Example layout conversion

Use this pattern when the SVG is actually a card or UI block, not just an image:

```tsx
import { Box, Button, Stack, Typography } from '@lsy-netline/netline-ui';

export interface OfferSummaryCardProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

export default function OfferSummaryCard({
  title,
  description,
  actionLabel,
  onAction,
}: OfferSummaryCardProps): JSX.Element {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        p: 3,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Box>
          <Button variant="contained" onClick={onAction}>
            {actionLabel}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
```

## Review checklist

Before considering the conversion done, verify:

- [ ] Every meaningful SVG layer/group/item was accounted for
- [ ] Every meaningful text element exists and was not silently dropped
- [ ] The large-scale layout was rebuilt with Netline UI, not frozen inside one SVG
- [ ] Text paths became real text
- [ ] Section nesting matches the SVG structure
- [ ] Colors use theme tokens or approved theme constants
- [ ] Spacing is rationalized into `sx` / layout props
- [ ] Tab layouts were verified carefully when tabs are present
- [ ] Table/data-grid sections were recognized correctly when present
- [ ] Form and field sections were recognized correctly when present
- [ ] Accordion/disclosure sections were recognized correctly when present
- [ ] List sections were recognized correctly when present
- [ ] Only true vector fragments remain as SVG
- [ ] Interactive elements are actual Netline UI controls
- [ ] Existing project components were audited for reuse before new ones were created
- [ ] Accessibility requirements are met
- [ ] Imports use `@/` aliases where applicable
- [ ] No deprecated `Select` usage
- [ ] Tests were added/updated when behavior changed

## Anti-patterns

Avoid these common mistakes:

- embedding a full Figma screen export as one giant `<svg>` for production UI
- preserving all text as vector paths
- using absolute-positioned `Box` elements for every tiny rectangle when `Stack` or `Grid` would express the intent better
- copying raw fill/stroke colors directly from SVG into component code
- recreating fake controls instead of using real Netline UI inputs/buttons
- treating an accordion as a static card with a decorative arrow instead of a real `Accordion`
- treating a repeated list as one big illustration or a pile of unrelated rectangles
- adding unnecessary memoization during the conversion

## Related skills

- `.github/skills/netline-ui-v8/SKILL.md`
- `.github/skills/react-19/SKILL.md`
- `.github/skills/typescript-best-practices/SKILL.md`
- `.github/skills/webapp-testing/SKILL.md`
