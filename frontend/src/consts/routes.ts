export const PUBLIC_ROUTES = {
  LOGIN: "/login",
  BOOKING_STATUS: "/booking/:bookingId",
} as const;

export const PROTECTED_ROUTES = {
  SEARCH: "/search",
  SEARCH_DATE: "/search/:date",
  BOOK_FLIGHT: "/book/:flightId",
  CONFIRMATION: "/confirmation/:bookingId",
} as const;

export const ALL_ROUTES = { ...PUBLIC_ROUTES, ...PROTECTED_ROUTES } as const;
