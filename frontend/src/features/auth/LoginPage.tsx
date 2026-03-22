import { use } from "react";
import { Navigate } from "react-router-dom";
import { Box, Card, CardContent } from "@lsy-netline/netline-ui";
import FlightIcon from "@mui/icons-material/Flight";
import { LoginForm } from "./LoginForm";
import { ThemeContext } from "@/context/ThemeContext";
import { useAuth } from "@/hooks/useAuth";
import { AppTitle } from "@/components/AppTitle";

export function LoginPage() {
	const { isAuthenticated } = useAuth();
	const { appConfig } = use(ThemeContext)!;

	if (isAuthenticated) {
		return <Navigate to="/search" replace />;
	}

	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				bgcolor: "background.default",
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					backgroundImage: "url(/loginBg.webp)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.8,
				},
			}}
		>
			<Card
				sx={{ position: "relative", maxWidth: 400, width: "100%", mx: 2 }}
				data-testid="login-card"
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 2,
						p: 4,
						bgcolor: "background.paper",
					}}
				>
					<FlightIcon sx={{ fontSize: 48, color: "primary.main" }} />
					<AppTitle
						title={appConfig?.title ?? "MUC - DEB Allotment Tool"}
						variant="h5"
						component="h1"
						iconSize={28}
					/>
					<LoginForm />
				</CardContent>
			</Card>
		</Box>
	);
}
