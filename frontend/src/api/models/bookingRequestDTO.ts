import type { PassengerDTO } from "./passengerDTO";

export interface BookingRequestDTO {
  flightId: string;
  passenger: PassengerDTO;
}
