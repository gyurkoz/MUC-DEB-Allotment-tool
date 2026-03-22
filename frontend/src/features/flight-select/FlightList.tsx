import { Box, Typography, Alert } from "@lsy-netline/netline-ui";
import { FlightListItem } from "./FlightListItem";
import type { FlightDTO } from "@/api/models";

interface FlightListProps {
	flights: FlightDTO[];
}

export function FlightList({ flights }: FlightListProps) {
	if (flights.length === 0) {
		return (
			<Alert severity="info" data-testid="no-flights-message">
				No flights available for this date.
			</Alert>
		);
	}

	return (
		<Box data-testid="flight-list">
			<Typography variant="subtitle1" gutterBottom>
				{flights.length} flight{flights.length !== 1 ? "s" : ""} available
			</Typography>
			{flights.map((flight) => (
				<FlightListItem key={flight.id} flight={flight} />
			))}
		</Box>
	);
}
