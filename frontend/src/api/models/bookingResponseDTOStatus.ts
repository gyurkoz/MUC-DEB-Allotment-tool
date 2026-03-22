export type BookingResponseDTOStatus =
  (typeof BookingResponseDTOStatus)[keyof typeof BookingResponseDTOStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingResponseDTOStatus = {
  CONFIRMED: "CONFIRMED",
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  REJECTED: "REJECTED",
  FLIGHT_CANCELLED: "FLIGHT_CANCELLED",
  FLIGHT_DELAYED: "FLIGHT_DELAYED",
} as const;
