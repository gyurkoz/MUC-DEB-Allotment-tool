import { FlightDetailCard } from "@/components/FlightDetailCard";
import type { FlightDTO } from "@/api/models";

interface FlightSummaryProps {
	flight: FlightDTO;
}

export function FlightSummary({ flight }: FlightSummaryProps) {
	return <FlightDetailCard flight={flight} testId="flight-summary" />;
}
