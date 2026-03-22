import { useState } from "react";
import { Box } from "@lsy-netline/netline-ui";
import { DirectionSelector, type Direction } from "./DirectionSelector";
import { FlightCalendar } from "./FlightCalendar";

const DIRECTION_KEY = "flightSearch.direction";
const MONTH_KEY = "flightSearch.month";

function getStoredDirection(): Direction {
	const stored = sessionStorage.getItem(DIRECTION_KEY);
	return stored === "MUC-DEB" || stored === "DEB-MUC" ? stored : "MUC-DEB";
}

export function FlightSearchPage() {
	const [direction, setDirection] = useState<Direction>(getStoredDirection);
	const [initialDate] = useState(() => sessionStorage.getItem(MONTH_KEY));

	const handleDirectionChange = (d: Direction) => {
		sessionStorage.setItem(DIRECTION_KEY, d);
		setDirection(d);
	};

	const handleMonthChange = (dateStr: string) => {
		sessionStorage.setItem(MONTH_KEY, dateStr);
	};

	return (
		<Box data-testid="flight-search-page">
			<DirectionSelector
				direction={direction}
				onChange={handleDirectionChange}
			/>
			<FlightCalendar
				direction={direction}
				initialDate={initialDate ?? undefined}
				onMonthChange={handleMonthChange}
			/>
		</Box>
	);
}
