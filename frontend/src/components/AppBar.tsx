import {
	AppBar as MuiAppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	Chip,
} from "@lsy-netline/netline-ui";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

export function AppBarHeader() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const environment = import.meta.env.VITE_ENVIRONMENT;

	return (
		<MuiAppBar position="static" data-testid="app-bar">
			<Toolbar>
				<Box
					sx={{ flexGrow: 1, cursor: "pointer" }}
					onClick={() => navigate("/search")}
					role="link"
					aria-label="Navigate to start page"
				>
					<Typography
						variant="h6"
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
								sx={{ fontSize: 24 }}
								aria-label="connecting airports"
							/>
							DEB - Allotment Tool
						</Box>
					</Typography>
				</Box>

				{environment && environment !== "production" && (
					<Chip
						label={environment.toUpperCase()}
						size="small"
						color="warning"
						sx={{ mr: 2 }}
						data-testid="environment-chip"
					/>
				)}

				{user && (
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Typography variant="body2" sx={{ color: "primary.contrastText" }}>
							{user.username}
						</Typography>
						<Button
							color="inherit"
							onClick={logout}
							startIcon={<LogoutIcon />}
							size="small"
							aria-label="Logout"
							data-testid="logout-button"
						>
							Logout
						</Button>
					</Box>
				)}
			</Toolbar>
		</MuiAppBar>
	);
}
