/**
 * AppTitle — Renders app title with a ConnectingAirports icon between airport codes.
 *
 * Splits "MUC - DEB Allotment Tool" into:
 * - Line 1: "MUC" + icon + "DEB"
 * - Line 2: "Allotment Tool"
 */

import { Box, Typography, type TypographyProps } from "@lsy-netline/netline-ui";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

interface AppTitleProps {
	/** Override the default title (ignored — layout is fixed to MUC/DEB) */
	title?: string;
	/** Typography variant */
	variant?: TypographyProps["variant"];
	/** Root semantic element */
	component?: React.ElementType;
	/** Icon size in px */
	iconSize?: number;
}

export function AppTitle({
	variant = "h6",
	component,
	iconSize = 24,
}: AppTitleProps) {
	return (
		<Typography
			variant={variant}
			{...(component ? { component } : {})}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
			}}
		>
			<Box
				component="span"
				sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
			>
				MUC
				<ConnectingAirportsIcon
					sx={{ fontSize: iconSize }}
					aria-label="connecting airports"
				/>
				DEB
			</Box>
			<Box component="span">Allotment Tool</Box>
		</Typography>
	);
}
