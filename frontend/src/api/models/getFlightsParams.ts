import type { GetFlightsDirection } from "./getFlightsDirection";

export type GetFlightsParams = {
  direction: GetFlightsDirection;
  dateFrom: string;
  dateTo: string;
};
