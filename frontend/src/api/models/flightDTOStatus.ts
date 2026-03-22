export type FlightDTOStatus =
  (typeof FlightDTOStatus)[keyof typeof FlightDTOStatus];

 
export const FlightDTOStatus = {
  AVAILABLE: "AVAILABLE",
  SOLD_OUT: "SOLD_OUT",
  FLIGHT_CANCELLED: "FLIGHT_CANCELLED",
  DELAYED: "DELAYED",
} as const;
