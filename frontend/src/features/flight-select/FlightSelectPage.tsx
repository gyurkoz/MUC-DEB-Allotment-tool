import { use } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import {
	Box,
	Typography,
	Button,
	CircularProgress,
	Alert,
} from "@lsy-netline/netline-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FlightList } from "./FlightList";
import { BaseFooterBar } from "@/components/BaseFooterBar";
import { ScrollDirectionContext } from "@/context/ScrollDirectionContext";
import { useGetFlights } from "@/api/generated/flights/flights";
import type { GetFlightsDirection } from "@/api/models";

export function FlightSelectPage() {
	const { date } = useParams<{ date: string }>();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const direction = (searchParams.get("direction") ??
		"MUC-DEB") as GetFlightsDirection;

	const { isScrollingUp } = use(ScrollDirectionContext);

	const {
		data: flights = [],
		isLoading,
		error,
	} = useGetFlights(
		{
			direction,
			dateFrom: date ?? "",
			dateTo: date ?? "",
		},
		{ query: { enabled: !!date } },
	);

	const formattedDate = date
		? new Date(date + "T00:00:00").toLocaleDateString("en-US", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			})
		: "";

	return (
		<Box data-testid="flight-select-page">
			<Typography variant="h5" gutterBottom>
				Flights on {formattedDate}
			</Typography>
			<Typography variant="h6" color="text.primary" gutterBottom>
				{direction === "MUC-DEB" ? "Munich → Debrecen" : "Debrecen → Munich"}
			</Typography>

			{isLoading && (
				<Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
					<CircularProgress />
				</Box>
			)}
			{error && (
				<Alert severity="error" sx={{ mb: 2 }}>
					Failed to load flights for this date
				</Alert>
			)}
			{!isLoading && !error && <FlightList flights={flights} />}

			<BaseFooterBar
				visible={isScrollingUp}
				aria-label="Flight selection actions"
				sx={{ px: 3 }}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						width: "100%",
						maxWidth: 1200,
						mx: "auto",
					}}
				>
					<Button
						variant="outlined"
						startIcon={<ArrowBackIcon />}
						onClick={() => navigate("/search")}
						data-testid="back-to-search"
					>
						Back to Search
					</Button>
				</Box>
			</BaseFooterBar>
		</Box>
	);
}
