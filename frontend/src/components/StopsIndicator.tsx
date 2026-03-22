/**
 * StopsIndicator — Visual line with stop markers between departure and arrival.
 *
 * Adapted from GST-UI's StopsIndicator component.
 * Shows duration above the line and stop label below.
 */

import { Box, Link, styled, Typography } from "@lsy-netline/netline-ui";
import CircleIcon from "@mui/icons-material/Circle";

export interface StopsIndicatorProps {
	/** Number of stops (0 = direct) */
	stops: number;
	/** Flight duration (e.g., "1h 30m") */
	duration?: string;
	/** Callback when stop link is clicked */
	onStopoverClick?: () => void;
}

const Container = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: 8,
	width: "100%",
	position: "relative",
	minWidth: 80,
});

const LineContainer = styled(Box)({
	position: "relative",
	width: "100%",
	height: 2,
	display: "flex",
	alignItems: "center",
});

const Line = styled(Box)(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	height: 1,
	backgroundColor: theme.palette.text.secondary,
	"&::after": {
		content: '""',
		position: "absolute",
		right: 0,
		top: "50%",
		transform: "translateY(-50%)",
		width: 0,
		height: 0,
		borderTop: "4px solid transparent",
		borderBottom: "4px solid transparent",
		borderLeft: `6px solid ${theme.palette.text.secondary}`,
	},
}));

const StopMarkerContainer = styled(Box)({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 50,
});

const StopDot = styled(CircleIcon)(({ theme }) => ({
	fontSize: 8,
	color: theme.palette.text.secondary,
}));

function buildStopLabel(stops: number): string {
	if (stops === 0) return "Direct flight";
	if (stops === 1) return "1 stop";
	return `${stops} stops`;
}

export function StopsIndicator({
	stops,
	duration,
	onStopoverClick,
}: StopsIndicatorProps) {
	const displayLabel = buildStopLabel(stops);

	const handleLinkClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		(e.currentTarget as HTMLElement).blur();
		onStopoverClick?.();
	};

	return (
		<Container aria-label={`${duration ? `${duration}, ` : ""}${displayLabel}`}>
			{duration && (
				<Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
					{duration}
				</Typography>
			)}

			<LineContainer>
				<Line />
				{stops > 0 && (
					<StopMarkerContainer>
						{Array.from({ length: stops }, (_, i) => (
							<StopDot key={i} />
						))}
					</StopMarkerContainer>
				)}
			</LineContainer>

			{stops > 0 && onStopoverClick ? (
				<Link
					component="button"
					variant="caption"
					color="primary"
					underline="hover"
					onClick={handleLinkClick}
					sx={{ mt: 0.5, cursor: "pointer" }}
				>
					{displayLabel}
				</Link>
			) : (
				<Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
					{displayLabel}
				</Typography>
			)}
		</Container>
	);
}
