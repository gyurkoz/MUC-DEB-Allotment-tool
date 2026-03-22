/**
 * FlightTimeline — Vertical timeline visualization of a flight.
 *
 * Adapted from GST-UI's FlightTimeline for MUC-DEB's flat FlightDTO model.
 * Renders a vertical timeline showing:
 * - Big dot → departure endpoint
 * - Solid connector + flight info (airline, flight number, duration)
 * - Small dots + dashed connectors for intermediate stops (when stops > 0)
 * - Big dot → arrival endpoint
 */

import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@/components/Timeline";
import { Box, styled, Typography } from "@lsy-netline/netline-ui";
import { alpha } from "@mui/material/styles";
import FlightIcon from "@mui/icons-material/Flight";
import { AirlineLogo } from "@/components/AirlineLogo";
import type { FlightDTO } from "@/api/models";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BIG_DOT_SIZE = 16;
const SMALL_DOT_SIZE = 8;

// ---------------------------------------------------------------------------
// Styled helpers
// ---------------------------------------------------------------------------

const StyledTimeline = styled(Timeline)({
	padding: 0,
});

const SolidConnector = styled(TimelineConnector)(({ theme }) => ({
	width: 2,
	backgroundColor: theme.palette.text.secondary,
	minHeight: 60,
}));

const DashedConnector = styled(TimelineConnector)(({ theme }) => ({
	borderLeft: `2px dashed ${theme.palette.text.secondary}`,
	backgroundColor: "transparent",
	width: 0,
	minHeight: 40,
}));

const StopoverWarning = styled(Box)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255,250,230,0.12)"
			: alpha(theme.palette.warning.main, 0.1),
	border: `1px solid ${theme.palette.warning.dark}`,
	borderRadius: 4,
	padding: theme.spacing(1.5),
	maxWidth: 340,
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatTime(dateStr?: string): string {
	if (!dateStr) return "--:--";
	const d = new Date(dateStr);
	const hour = d.getHours();
	const min = d.getMinutes();
	const period = hour >= 12 ? "PM" : "AM";
	const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
	return `${hour12}:${String(min).padStart(2, "0")} ${period}`;
}

function formatDuration(minutes?: number): string {
	if (minutes == null) return "";
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m`;
}

function formatDate(dateStr?: string): string {
	if (!dateStr) return "";
	return new Date(dateStr).toLocaleDateString(undefined, {
		weekday: "short",
		month: "short",
		day: "numeric",
	});
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FlightTimelineProps {
	flight: FlightDTO;
	/** Whether to show the total travel time below the timeline (default: true) */
	showTotalTravelTime?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function FlightTimeline({
	flight,
	showTotalTravelTime = true,
}: FlightTimelineProps) {
	const stops = flight.stops ?? 0;

	return (
		<Box>
			<StyledTimeline>
				{/* ── Departure → Flight info → Arrival (or first stop) ── */}
				<TimelineItem sx={{ alignItems: "stretch" }}>
					<TimelineSeparator>
						<TimelineDot
							variant="filled"
							sx={{
								bgcolor: "text.secondary",
								width: BIG_DOT_SIZE,
								height: BIG_DOT_SIZE,
							}}
						/>
						<SolidConnector />
						<TimelineDot
							variant="filled"
							sx={{
								bgcolor: "text.secondary",
								width: stops > 0 ? SMALL_DOT_SIZE : BIG_DOT_SIZE,
								height: stops > 0 ? SMALL_DOT_SIZE : BIG_DOT_SIZE,
							}}
						/>
					</TimelineSeparator>
					<TimelineContent
						sx={{
							display: "flex",
							flexDirection: "column",
							py: 0,
						}}
					>
						{/* Departure label */}
						<Box>
							<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
								{formatTime(flight.departureTime)} — {flight.departureAirport}
							</Typography>
							<Typography variant="caption" color="text.secondary">
								{formatDate(flight.departureTime)}
							</Typography>
						</Box>

						{/* Flight info */}
						<Box
							sx={{
								flex: 1,
								display: "flex",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "flex-start",
									gap: 1,
									py: 0.5,
								}}
							>
								{flight.marketingAirline && (
									<AirlineLogo
										code={flight.marketingAirline}
										size={20}
										sx={{ mt: 0.25 }}
									/>
								)}
								<Box>
									<Typography
										variant="body2"
										sx={{
											fontWeight: 500,
											display: "flex",
											alignItems: "center",
											gap: 0.5,
										}}
									>
										{flight.marketingAirline ?? ""}
										<FlightIcon sx={{ fontSize: 14, ml: 1.5 }} />
										{flight.flightNumber}
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										display="block"
									>
										Flight duration: {formatDuration(flight.travelTimeMinutes)}
									</Typography>
								</Box>
							</Box>
						</Box>

						{/* Arrival label (only for direct flights) */}
						{stops === 0 && (
							<Box>
								<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
									{formatTime(flight.arrivalTime)} — {flight.arrivalAirport}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{formatDate(flight.arrivalTime)}
								</Typography>
							</Box>
						)}
					</TimelineContent>
				</TimelineItem>

				{/* ── Stopover indicators (when stops > 0) ── */}
				{stops > 0 && (
					<>
						{/* Stopover warning */}
						<TimelineItem sx={{ alignItems: "stretch" }}>
							<TimelineSeparator>
								<TimelineDot
									variant="filled"
									sx={{
										bgcolor: "text.secondary",
										width: SMALL_DOT_SIZE,
										height: SMALL_DOT_SIZE,
									}}
								/>
								<DashedConnector />
							</TimelineSeparator>
							<TimelineContent
								sx={{
									display: "flex",
									alignItems: "center",
									py: 1,
								}}
							>
								<StopoverWarning>
									<Typography variant="body2" sx={{ fontWeight: 500 }}>
										{stops === 1
											? `1 intermediate stop${flight.stopoverAirport ? ` in ${flight.stopoverAirport}` : ""}`
											: `${stops} intermediate stops${flight.stopoverAirport ? ` via ${flight.stopoverAirport}` : ""}`}
									</Typography>
								</StopoverWarning>
							</TimelineContent>
						</TimelineItem>

						{/* Final arrival */}
						<TimelineItem sx={{ alignItems: "stretch" }}>
							<TimelineSeparator>
								<TimelineDot
									variant="filled"
									sx={{
										bgcolor: "text.secondary",
										width: BIG_DOT_SIZE,
										height: BIG_DOT_SIZE,
									}}
								/>
							</TimelineSeparator>
							<TimelineContent sx={{ py: 0 }}>
								<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
									{formatTime(flight.arrivalTime)} — {flight.arrivalAirport}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{formatDate(flight.arrivalTime)}
								</Typography>
							</TimelineContent>
						</TimelineItem>
					</>
				)}
			</StyledTimeline>

			{/* ── Total travel time ── */}
			{showTotalTravelTime && flight.travelTimeMinutes != null && (
				<Box sx={{ pl: 5, pt: 1 }}>
					<Typography variant="body1" color="text.secondary">
						Total travel time: {formatDuration(flight.travelTimeMinutes)}
					</Typography>
				</Box>
			)}
		</Box>
	);
}
