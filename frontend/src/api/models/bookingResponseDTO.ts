import type { BookingResponseDTOStatus } from "./bookingResponseDTOStatus";
import type { FlightDTO } from "./flightDTO";
import type { PassengerDTO } from "./passengerDTO";

export interface BookingResponseDTO {
  bookingId?: string;
  /** Amadeus PNR record locator */
  pnr?: string;
  status?: BookingResponseDTOStatus;
  flight?: FlightDTO;
  passenger?: PassengerDTO;
  createdAt?: string;
  /** Whether the booking can still be cancelled (>24h before departure) */
  cancellable?: boolean;
}
