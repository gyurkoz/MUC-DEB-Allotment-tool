export type GetFlightsDirection =
  (typeof GetFlightsDirection)[keyof typeof GetFlightsDirection];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetFlightsDirection = {
  "MUC-DEB": "MUC-DEB",
  "DEB-MUC": "DEB-MUC",
} as const;
