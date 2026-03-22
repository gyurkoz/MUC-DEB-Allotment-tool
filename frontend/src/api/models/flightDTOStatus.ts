export type FlightDTOStatus =
  (typeof FlightDTOStatus)[keyof typeof FlightDTOStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FlightDTOStatus = {
  AVAILABLE: "AVAILABLE",
  SOLD_OUT: "SOLD_OUT",
  FLIGHT_CANCELLED: "FLIGHT_CANCELLED",
  DELAYED: "DELAYED",
} as const;
