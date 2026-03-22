/**
 * FullCalendar CSS variable overrides that integrate with MUI theme.
 * Accepts the MUI theme object to resolve palette colors directly,
 * avoiding hardcoded hex fallbacks.
 */
import type { Theme } from "@lsy-netline/netline-ui";

export const fullCalendarThemeOverrides = (theme: Theme) =>
  ({
    "--fc-border-color": theme.palette.divider,
    "--fc-today-bg-color": theme.palette.action.hover,
    "--fc-event-bg-color": theme.palette.primary.main,
    "--fc-event-border-color": theme.palette.primary.main,
    "--fc-event-text-color": theme.palette.primary.contrastText,
    "--fc-page-bg-color": "transparent",
  }) as Record<string, string>;
