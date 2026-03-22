import { useNavigate } from "react-router-dom";
import { Button } from "@lsy-netline/netline-ui";
import { FlightDetailCard } from "@/components/FlightDetailCard";
import type { FlightDTO } from "@/api/models";

interface FlightListItemProps {
	flight: FlightDTO;
}

export function FlightListItem({ flight }: FlightListItemProps) {
	const navigate = useNavigate();
	const isPast = flight.departureTime
		? new Date(flight.departureTime) < new Date()
		: false;
	const isSoldOut =
		(flight.availableSeats ?? 0) === 0 || flight.status === "SOLD_OUT";
	const isDisabled = isPast || isSoldOut;

	return (
		<FlightDetailCard
			flight={flight}
			testId={`flight-item-${flight.id}`}
			isPast={isPast}
			actions={
				!isDisabled ? (
					<Button
						variant="contained"
						onClick={() =>
							navigate(`/book/${flight.id}`, { state: { flight } })
						}
						data-testid={`select-flight-${flight.id}`}
					>
						Select Flight
					</Button>
				) : undefined
			}
		/>
	);
}
