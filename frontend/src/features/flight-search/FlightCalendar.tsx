import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Alert } from "@lsy-netline/netline-ui";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { DateClickArg } from "@fullcalendar/interaction";
import type { EventContentArg } from "@fullcalendar/core";
import { FlightCard } from "./FlightCard";
import { useGetFlights } from "@/api/generated/flights/flights";
import type { FlightDTO } from "@/api/models";
import type { Direction } from "./DirectionSelector";
import { fullCalendarThemeOverrides } from "@/theme/fullcalendar-overrides";

interface FlightCalendarProps {
	direction: Direction;
	/** ISO date string (yyyy-MM-dd) to start the calendar on. */
	initialDate?: string;
	/** Called when the visible date range changes, with the first visible date. */
	onMonthChange?: (dateStr: string) => void;
}

export function FlightCalendar({
	direction,
	initialDate,
	onMonthChange,
}: FlightCalendarProps) {
	const navigate = useNavigate();
	const [dateRange, setDateRange] = useState<{
		dateFrom: string;
		dateTo: string;
	} | null>(null);

	const today = new Date().toISOString().split("T")[0];

	const {
		data: flights = [],
		isLoading,
		error,
	} = useGetFlights(
		{
			direction,
			dateFrom: dateRange?.dateFrom ?? "",
			dateTo: dateRange?.dateTo ?? "",
		},
		{ query: { enabled: !!dateRange } },
	);

	const handleDatesSet = (info: { startStr: string; endStr: string }) => {
		const from = info.startStr.slice(0, 10);
		const to = info.endStr.slice(0, 10);
		setDateRange({ dateFrom: from, dateTo: to });
		onMonthChange?.(from);
	};

	const handleDateClick = (info: DateClickArg) => {
		if (info.dateStr >= today) {
			navigate(`/search/${info.dateStr}?direction=${direction}`);
		}
	};

	const now = new Date();

	const events = flights.map((flight) => ({
		id: flight.id,
		start: flight.departureTime,
		end: flight.arrivalTime,
		extendedProps: flight,
	}));

	const renderEventContent = (eventInfo: EventContentArg) => {
		const flight = eventInfo.event.extendedProps as FlightDTO;
		const eventDate = eventInfo.event.start
			? eventInfo.event.start.toISOString().split("T")[0]
			: "";
		const isPast = flight.departureTime
			? new Date(flight.departureTime) < now
			: false;

		return (
			<FlightCard
				flightNumber={flight.flightNumber ?? ""}
				departureTime={flight.departureTime ?? ""}
				arrivalTime={flight.arrivalTime ?? ""}
				availableSeats={flight.availableSeats ?? 0}
				marketingAirline={flight.marketingAirline}
				isPast={isPast}
				onClick={
					!isPast && eventDate >= today
						? () => navigate(`/search/${eventDate}?direction=${direction}`)
						: undefined
				}
			/>
		);
	};

	return (
		<Box
			sx={(theme) => ({
				position: "relative",
				...fullCalendarThemeOverrides(theme),
			})}
			data-testid="flight-calendar"
		>
			{isLoading && (
				<Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}>
					<CircularProgress size={24} />
				</Box>
			)}
			{error && (
				<Alert severity="error" sx={{ mb: 2 }}>
					Failed to load flights
				</Alert>
			)}
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridWeek"
				initialDate={initialDate}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridWeek,dayGridMonth",
				}}
				/* No validRange — past flights are shown but grayed out */
				dateClick={handleDateClick}
				datesSet={handleDatesSet}
				events={events}
				eventContent={renderEventContent}
				height="auto"
				firstDay={1}
			/>
		</Box>
	);
}
