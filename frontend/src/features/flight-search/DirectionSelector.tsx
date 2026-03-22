import { ToggleButton, ToggleButtonGroup, Box } from "@lsy-netline/netline-ui";
import FlightIcon from "@mui/icons-material/Flight";

export type Direction = "MUC-DEB" | "DEB-MUC";

interface DirectionSelectorProps {
	direction: Direction;
	onChange: (direction: Direction) => void;
}

export function DirectionSelector({
	direction,
	onChange,
}: DirectionSelectorProps) {
	const handleChange = (
		_: React.MouseEvent<HTMLElement>,
		newDirection: Direction | null,
	) => {
		if (newDirection) {
			onChange(newDirection);
		}
	};

	return (
		<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
			<ToggleButtonGroup
				value={direction}
				exclusive
				onChange={handleChange}
				aria-label="Flight direction"
				data-testid="direction-selector"
			>
				<ToggleButton
					value="MUC-DEB"
					aria-label="Munich to Debrecen"
					data-testid="direction-muc-deb"
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							fontSize: 24,
							fontWeight: 500,
						}}
					>
						MUC
						<FlightIcon sx={{ m: 1, transform: "rotate(90deg)" }} />
						DEB
					</Box>
				</ToggleButton>
				<ToggleButton
					value="DEB-MUC"
					aria-label="Debrecen to Munich"
					data-testid="direction-deb-muc"
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							fontSize: 24,
						}}
					>
						DEB
						<FlightIcon sx={{ m: 1, transform: "rotate(90deg)" }} />
						MUC
					</Box>
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}
