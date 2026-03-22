import type { PriceDTO } from "./priceDTO";
import type { FlightDTOStatus } from "./flightDTOStatus";

export interface FlightDTO {
  /** Unique flight identifier (e.g., LH1234_20260321) */
  id?: string;
  flightNumber?: string;
  marketingAirline?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  departureTime?: string;
  arrivalTime?: string;
  travelTimeMinutes?: number;
  stops?: number;
  stopoverAirport?: string;
  availableSeats?: number;
  price?: PriceDTO;
  status?: FlightDTOStatus;
}
