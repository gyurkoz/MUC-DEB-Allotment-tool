export type BookingResponseDTOStatus =
  (typeof BookingResponseDTOStatus)[keyof typeof BookingResponseDTOStatus];

 
export const BookingResponseDTOStatus = {
  CONFIRMED: "CONFIRMED",
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  REJECTED: "REJECTED",
  FLIGHT_CANCELLED: "FLIGHT_CANCELLED",
  FLIGHT_DELAYED: "FLIGHT_DELAYED",
} as const;
