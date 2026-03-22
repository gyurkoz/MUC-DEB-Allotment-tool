# Events

Events component

## Overview

- **Category**: pickers
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Events } from '@lsy-netline/netline-ui';
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

## Examples

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

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
