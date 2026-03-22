/**
 * SeatsBadge — Color-coded badge showing available seats for a flight.
 *
 * Colors:
 * - 0 seats → gray ("Full")
 * - 1–4 seats → red
 * - 5–10 seats → orange
 * - 11+ seats → green
 */

import { Box, Chip } from "@lsy-netline/netline-ui";

interface SeatsBadgeProps {
	availableSeats: number;
	/** @default "small" */
	size?: "small" | "medium";
}

function getBadgeColor(seats: number): string {
	if (seats === 0) return "grey.500";
	if (seats < 5) return "error.main";
	if (seats <= 10) return "warning.main";
	return "success.main";
}

export function SeatsBadge({
	availableSeats,
	size = "small",
}: SeatsBadgeProps) {
	const isFull = availableSeats === 0;
	const bgColor = getBadgeColor(availableSeats);

	return (
		<Chip
			size={size}
			label={
				isFull ? (
					size === "small" ? "Full" : "No seats available"
				) : (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 0,
							fontSize: size === "small" ? 10 : 18,
						}}
					>
						{availableSeats}
						<Box
							component="img"
							src="/assets/icons/black/Seat.svg"
							alt=""
							sx={{
								width: size === "small" ? 20 : 32,
								height: size === "small" ? 20 : 32,
								position: "relative",
								filter: "invert(1)",
							}}
						/>
					</Box>
				)
			}
			sx={{
				bgcolor: bgColor,
				"&:hover": { bgcolor: bgColor },
				color: "common.white",
				fontWeight: 600,
				p: 0,
				height: size === "small" ? 20 : 32,
				"& .MuiChip-label": {
					display: "flex",
					alignItems: "center",
					color: "common.white",
				},
			}}
		/>
	);
}
