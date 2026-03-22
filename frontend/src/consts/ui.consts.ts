/**
 * UI-related constants for consistent styling across components
 */

import type { CSSProperties } from "react";

/**
 * Shared slotProps for Autocomplete listbox styling
 */
export const AUTOCOMPLETE_LISTBOX_SLOT_PROPS = {
  listbox: {
    sx: {
      "& .MuiAutocomplete-option": { py: 1, fontSize: "body3.fontSize" },
    },
  },
} as const;

/**
 * Shared style for country flag images in selection components
 */
export const COUNTRY_FLAG_STYLE: CSSProperties = {
  width: "20px",
  height: "15px",
  marginRight: "8px",
  objectFit: "cover",
};
