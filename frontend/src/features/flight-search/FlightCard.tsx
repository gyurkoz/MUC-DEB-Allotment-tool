import { Box, Typography, Card, CardContent } from "@lsy-netline/netline-ui";
import { SeatsBadge } from "@/components/SeatsBadge";
import { AirlineLogo } from "@/components/AirlineLogo";

interface FlightCardProps {
	flightNumber: string;
	departureTime: string;
	arrivalTime: string;
	availableSeats: number;
	marketingAirline?: string;
	/** Whether this flight's departure is in the past */
	isPast?: boolean;
	onClick?: () => void;
}

export function FlightCard({
	flightNumber,
	departureTime,
	arrivalTime,
	availableSeats,
	marketingAirline,
	isPast = false,
	onClick,
}: FlightCardProps) {
	const depTime = new Date(departureTime).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	const arrTime = new Date(arrivalTime).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	const isDisabled = isPast || availableSeats === 0;

	const handleClick = (e: React.MouseEvent) => {
		if (isDisabled || !onClick) return;
		e.stopPropagation();
		onClick();
	};

	return (
		<Card
			sx={{
				minWidth: 120,
				opacity: isPast ? 0.4 : availableSeats === 0 ? 0.5 : 1,
				cursor: isDisabled ? "default" : "pointer",
				maxHeight: 50,
				filter: isPast ? "grayscale(100%)" : undefined,
				pointerEvents: isPast ? "none" : undefined,
				width: "100%",
			}}
			onClick={handleClick}
			data-testid={`flight-card-${flightNumber}`}
			aria-label={`Flight ${flightNumber}, ${depTime} to ${arrTime}, ${isPast ? "past flight" : availableSeats === 0 ? "sold out" : `${availableSeats} seats available`}`}
		>
			<CardContent sx={{ p: 0, "&:last-child": { pb: 1 }, m: 0.8 }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
					{marketingAirline && (
						<AirlineLogo code={marketingAirline} size={10} />
					)}
					<Typography variant="caption" sx={{ fontWeight: 600, fontSize: 12 }}>
						{flightNumber}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
					<Typography variant="caption" sx={{ fontSize: 12 }}>
						{depTime}
					</Typography>
					<Typography
						variant="caption"
						color="text.secondary"
						sx={{ fontSize: 12 }}
					>
						→
					</Typography>
					<Typography variant="caption" sx={{ fontSize: 12 }}>
						{arrTime}
					</Typography>
				</Box>
				{!isPast && (
					<Box sx={{ position: "absolute", top: 4, right: 4 }}>
						<SeatsBadge availableSeats={availableSeats} size="small" />
					</Box>
				)}
			</CardContent>
		</Card>
	);
}
