# Event Calendar

Event Calendar component

## Overview

- **Category**: pickers
- **Base Library**: mui-x
- **MUI Component**: EventCalendar

## Description

A monthly calendar component which is able to display a larger size
calendar with customizable day content, header and footer.

The component is very similar to [MUI DateCalendar](https://mui.com/x/api/date-pickers/date-calendar/)
component, but does not render any month / year view components, simply the `DayCalendar`.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { EventCalendar } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [selectedDate, setSelectedDate] = useState<PickerValue>(new Date(2023, 8, 1, 0, 0, 0, 0));
  const handleChange = useActionCallback('onChange', (date: PickerValue) => {
    setSelectedDate(date);
  });

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Card style={{ width: '100%', maxWidth: 1024, margin: '0 auto' }}>
          <CardHeader title="Events in Content" />
          <CardContent>
            <EventCalendar
              showDaysOutsideCurrentMonth
              disableSwitchToMonthOnDayFocus
              fixedWeekNumber={6}
              maxWidth={1024 - 2 * 24}
              value={selectedDate}
              onChange={handleChange}
              slots={{
                dayHeaderContent: EventCalendarDayHeaderContent,
                dayContent: EventCalendarDayContent,
                dayFooter: EventCalendarDayFooter,
              }}
            />
          </CardContent>
          <span />
        </Card>
      </LocalizationProvider>
    </div>
  );
```

## Variants

- Primary
- Small
- Small

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `dayWidth` | `number` |  | The width of each day in pixels. @default 92 |
| `maxWidth` | `number` |  | The maximum width of the calendar. @default 1024 |
| `fixedWeekNumber` | `oneOfType` |  | The number of weeks to display in the calendar. If set to `false`, the calendar will display the number of weeks in the current month. If set to a number, it will display that many weeks. @default 6 |
| `showDaysOutsideCurrentMonth` | `bool` |  | Whether to show days outside the current month. If set to `true`, the calendar will display days from the previous and next month. If set to `false`, it will only display days from the current month. @default true |
| `slots` | `shape` |  | The component that renders the day cell. It can be a custom component or a string representing a built-in component. @default EventCalendarDay |
| `slotProps` | `shape` |  | The props used for each slot in the calendar. This allows you to customize the behavior and appearance of the slots. |
| `loading` | `bool` |  | If `true`, the calendar will be in loading state. @default false |
| `renderLoading` | `func` |  | The function that renders the loading state. It can be a custom component or a string representing a built-in component. @default () => <span data-mui-test="loading-progress">...</span> |
| `referenceDate` | `any` |  | The date used to generate the new value when both `value` and `defaultValue` are empty. If not provided, it will use the closest valid date using the validation props, except callbacks such as `shouldDisableDate`. |
| `timezone` | `string` |  | The date used to generate the new value when both `value` and `defaultValue` are empty. @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. |
| `dayOfWeekFormatter` | `func` |  | The function that formats the day of the week. It receives the day as a string and the date as a Date object. @default (day, date) => utils.format(date, 'weekdayShort') |
| `onChange` | `func` |  | The function that is called when the selected date changes. It receives the new date and the reason for the change. |
| `onMonthChange` | `func` |  | The function that is called when the month changes. It receives the new month as a Date object. |
| `disableSwitchToMonthOnDayFocus` | `bool` |  | Whether to enable or disable the change of the month when focusing on a day. If set to `true`, the calendar will switch to the month of the focused day. If set to `false`, the calendar will not switch to the month of the focused day. This is useful for scenarios where you want to keep the current month view when navigating through days, such as in a week view.  @default false |
| `value` | `any` |  | The selected value. Used when the component is controlled. |
| `defaultValue` | `any` |  | The default selected value. Used when the component is not controlled. |
| `maxDate` | `any` |  | The maximum date that can be selected. @default Date.now() + 100 years |
| `minDate` | `any` |  | The minimum date that can be selected. @default Date.now() - 100 years |
| `disabled` | `bool` |  | If `true`, the picker and text field are disabled. @default false |
| `readOnly` | `bool` |  | Make picker read only. @default false |
| `disableFuture` | `bool` |  | If `true`, the calendar will not allow selecting future dates. @default false |
| `disablePast` | `bool` |  | If `true`, the calendar will not allow selecting past dates. @default false |
| `className` | `string` |  | className applied to the root element. @default undefined |
| `reduceAnimations` | `bool` |  | If `true`, disable heavy animations. @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13 |
| `shouldDisableDate` | `func` |  | The function that determines whether a date should be disabled. |
| `shouldDisableMonth` | `func` |  | The function that determines whether a month should be disabled. |
| `shouldDisableYear` | `func` |  | The function that determines whether a year should be disabled. |
| `disableHighlightToday` | `bool` |  | Whether to disable highlighting today's date. |

## Examples

### Events

```tsx
const [selectedDate, setSelectedDate] = useState<PickerValue>(new Date(2023, 8, 1, 0, 0, 0, 0));
  const handleChange = useActionCallback('onChange', (date: PickerValue) => {
    setSelectedDate(date);
  });

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Card style={{ width: '100%', maxWidth: 1024, margin: '0 auto' }}>
          <CardHeader title="Events in Content" />
          <CardContent>
            <EventCalendar
              showDaysOutsideCurrentMonth
              disableSwitchToMonthOnDayFocus
              fixedWeekNumber={6}
              maxWidth={1024 - 2 * 24}
              value={selectedDate}
              onChange={handleChange}
              slots={{
                dayHeaderContent: EventCalendarDayHeaderContent,
                dayContent: EventCalendarDayContent,
                dayFooter: EventCalendarDayFooter,
              }}
            />
          </CardContent>
          <span />
        </Card>
      </LocalizationProvider>
    </div>
  );
```

### Sample

```tsx
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <EventCalendar
        showDaysOutsideCurrentMonth
        fixedWeekNumber={false}
        dayWidth={92}
        defaultValue={new Date(2023, 9, 1)}
        slots={{
          dayContent: SampleDayContent,
          dayHeaderContent: SampleHeaderContent,
          dayFooter: SampleFooterContent,
        }}
      />
    </LocalizationProvider>
  </div>
```

## MUI Reference

This component is based on Material-UI's EventCalendar.

For additional props and detailed API documentation, refer to:

- [MUI EventCalendar Documentation](https://mui.com/material-ui/api/eventcalendar/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
