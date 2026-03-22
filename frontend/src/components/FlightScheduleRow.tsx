/**
 * FlightScheduleRow — Departure → Stops → Arrival flight display.
 *
 * Adapted from GST-UI's FlightScheduleRow component.
 * Shows departure/arrival times and airports with a visual stops indicator.
 */

import { Box, styled, Typography } from "@lsy-netline/netline-ui";
import { StopsIndicator } from "./StopsIndicator";

export interface FlightEndpoint {
	/** Time string (e.g., "10:30") */
	time: string;
	/** IATA airport code (e.g., "MUC") */
	airport: string;
}

export interface FlightScheduleRowProps {
	departure: FlightEndpoint;
	arrival: FlightEndpoint;
	/** Number of stops (0 = direct) */
	stops: number;
	/** Total flight duration (e.g., "1h 30m") */
	duration?: string;
	/** IATA code of the stopover airport */
	stopoverAirport?: string;
	/** Callback when stopover link is clicked */
	onStopoverClick?: () => void;
}

const RowContainer = styled(Box)({
	display: "flex",
	alignItems: "center",
	flex: "1 1 auto",
	gap: 0,
	minWidth: 300,
	maxWidth: 500,
});

const EndpointBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: theme.spacing(0.25),
	minWidth: 60,
	padding: theme.spacing(0.5, 1),
}));

const StopsBox = styled(Box)({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	minWidth: 80,
});

export function FlightScheduleRow({
	departure,
	arrival,
	stops,
	duration,
	stopoverAirport,
	onStopoverClick,
}: FlightScheduleRowProps) {
	return (
		<RowContainer aria-label={`${departure.airport} to ${arrival.airport}`}>
			<EndpointBox
				aria-label={`Departure from ${departure.airport} at ${departure.time}`}
			>
				<Typography
					variant="body1"
					color="text.primary"
					sx={{ fontWeight: 600, fontSize: 22 }}
				>
					{departure.time}
				</Typography>
				<Typography variant="body2" color="text.primary" sx={{ fontSize: 20 }}>
					{departure.airport}
				</Typography>
			</EndpointBox>

			<StopsBox>
				<StopsIndicator
					stops={stops}
					duration={duration}
					stopoverAirport={stopoverAirport}
					onStopoverClick={onStopoverClick}
				/>
			</StopsBox>

			<EndpointBox
				aria-label={`Arrival at ${arrival.airport} at ${arrival.time}`}
			>
				<Typography
					variant="body1"
					color="text.primary"
					sx={{ fontWeight: 600, fontSize: 22 }}
				>
					{arrival.time}
				</Typography>
				<Typography variant="body2" color="text.primary" sx={{ fontSize: 20 }}>
					{arrival.airport}
				</Typography>
			</EndpointBox>
		</RowContainer>
	);
}
