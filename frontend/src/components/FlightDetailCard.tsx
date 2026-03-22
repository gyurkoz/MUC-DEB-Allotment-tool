/**
 * FlightDetailCard — Shared flight detail display.
 *
 * Adapted from GST-UI's SelectedFlightCard design pattern.
 * Shows flight info in a styled card with:
 * - Flight icon with direction rotation
 * - Flight number, airline, date
 * - FlightScheduleRow (departure → stops → arrival)
 * - Price display
 * - Optional action slot (e.g., "Select Flight" button)
 *
 * Used by FlightListItem (with action button) and FlightSummary (read-only).
 */

import { useState, type ReactNode } from "react";
import { Box, Card, Typography } from "@lsy-netline/netline-ui";
import FlightIcon from "@mui/icons-material/Flight";
import { FlightScheduleRow } from "@/components/FlightScheduleRow";
import { StopoverDetailDialog } from "@/components/StopoverDetailDialog";
import { SeatsBadge } from "@/components/SeatsBadge";
import { AirlineLogo } from "@/components/AirlineLogo";
import type { FlightDTO } from "@/api/models";

export interface FlightDetailCardProps {
	flight: FlightDTO;
	/** Optional action area rendered at the bottom-right (e.g., Select button) */
	actions?: ReactNode;
	/** Test ID for the card */
	testId?: string;
	/** Whether this flight's departure is in the past */
	isPast?: boolean;
}

function formatTime(dateStr?: string): string {
	if (!dateStr) return "--:--";
	return new Date(dateStr).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
}

function formatDuration(minutes?: number): string {
	if (minutes == null) return "";
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${h}h ${String(m).padStart(2, "0")}m`;
}

function formatDate(dateStr?: string): string {
	if (!dateStr) return "";
	return new Date(dateStr).toLocaleDateString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function FlightDetailCard({
	flight,
	actions,
	testId,
	isPast = false,
}: FlightDetailCardProps) {
	const [showStopover, setShowStopover] = useState(false);
	const isSoldOut =
		(flight.availableSeats ?? 0) === 0 || flight.status === "SOLD_OUT";

	// Determine direction icon rotation: MUC→DEB = right, DEB→MUC = left
	const isReturn = flight.departureAirport === "DEB";
	const iconRotation = isReturn ? "rotate(90deg) scaleY(-1)" : "rotate(90deg)";

	return (
		<>
			<Card
				sx={{
					mb: 2,
					opacity: isPast ? 0.5 : isSoldOut ? 0.6 : 1,
					border: 1,
					borderColor: isPast ? "action.disabled" : "primary.main",
					borderRadius: 3,
					overflow: "visible",
					filter: isPast ? "grayscale(100%)" : undefined,
					pointerEvents: isPast ? "none" : undefined,
				}}
				data-testid={testId}
			>
				<Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 0 }}>
					{/* Header: Direction icon + flight info + date */}
					<Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
						
						<Box
							sx={{
								flex: 1,
								display: "flex",
								alignItems: "center",
								position: "relative",
							}}
						>
								{flight.marketingAirline && (
									<AirlineLogo code={flight.marketingAirline} size={24} />
								)}
							{/* Date — stays on the left */}
							<Typography variant="subtitle1" color="text.secondary" sx={{ ml: 1 }}>
								{formatDate(flight.departureTime)}
							</Typography>

							{/* Flight number — absolutely centered within the flex:1 space */}
							<Box
								sx={{
									position: "absolute",
									left: "50%",
									transform: "translateX(-50%)",
									display: "flex",
									alignItems: "center",
									gap: 0.5,
								}}
							>
								<FlightIcon
							sx={{
								fontSize: 24,
								color: "text.primary",
								transform: iconRotation,
							}}
						/>
							
								<Typography variant="h6" sx={{ fontWeight: 400 }}>
									{flight.flightNumber}
								</Typography>
							</Box>
						</Box>
						{!isPast && (
							<SeatsBadge
								availableSeats={flight.availableSeats ?? 0}
								size="medium"
							/>
						)}
					</Box>

					{/* Flight schedule row + price */}
					<Box
						sx={{
							display: "flex",
							gap: 3,
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<FlightScheduleRow
							departure={{
								time: formatTime(flight.departureTime),
								airport: flight.departureAirport ?? "",
							}}
							arrival={{
								time: formatTime(flight.arrivalTime),
								airport: flight.arrivalAirport ?? "",
							}}
							stops={flight.stops ?? 0}
							duration={formatDuration(flight.travelTimeMinutes)}
							stopoverAirport={flight.stopoverAirport}
							onStopoverClick={
								(flight.stops ?? 0) > 0
									? () => setShowStopover(true)
									: undefined
							}
						/>

						{/* Price */}
						{flight.price && (
							<Box sx={{ textAlign: "right", ml: "auto" }}>
								<Typography
									variant="subtitle1"
									color="primary"
									sx={{ fontWeight: 600 }}
								>
									{(flight.price.amount ?? 0).toFixed(2)}{" "}
									{flight.price.currency}
								</Typography>
							</Box>
						)}
						{/* Actions slot */}
						{actions && (
							<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
								{actions}
							</Box>
						)}
					</Box>
				</Box>
			</Card>

			{/* Stopover detail dialog */}
			{showStopover && (
				<StopoverDetailDialog
					open
					flight={flight}
					onClose={() => setShowStopover(false)}
				/>
			)}
		</>
	);
}
