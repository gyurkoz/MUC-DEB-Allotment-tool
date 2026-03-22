export type GetFlightsDirection =
  (typeof GetFlightsDirection)[keyof typeof GetFlightsDirection];

 
export const GetFlightsDirection = {
  "MUC-DEB": "MUC-DEB",
  "DEB-MUC": "DEB-MUC",
} as const;
