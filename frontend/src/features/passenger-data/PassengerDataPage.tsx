import { use, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
	Box,
	Typography,
	Button,
	Alert,
	CircularProgress,
} from "@lsy-netline/netline-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { isAxiosError } from "axios";
import { FlightSummary } from "./FlightSummary";
import { PassengerForm } from "./PassengerForm";
import { BaseFooterBar } from "@/components/BaseFooterBar";
import { ScrollDirectionContext } from "@/context/ScrollDirectionContext";
import { useCreateBooking } from "@/api/generated/bookings/bookings";
import type { FlightDTO } from "@/api/models";
import type { PassengerFormData } from "./passenger.schema";

const FORM_ID = "passenger-form";

export function PassengerDataPage() {
	const { flightId } = useParams<{ flightId: string }>();
	const navigate = useNavigate();
	const location = useLocation();
	const flight =
		(location.state as { flight?: FlightDTO } | null)?.flight ?? null;

	const { isScrollingUp } = use(ScrollDirectionContext);
	const [isFormValid, setIsFormValid] = useState(false);

	const createBooking = useCreateBooking();

	const handleBooking = ({ phonePrefix, phoneNumber, ...rest }: PassengerFormData) => {
		if (!flightId) return;
		createBooking.mutate(
			{
				data: {
					flightId,
					passenger: { ...rest, phoneNumber: `${phonePrefix}${phoneNumber}` },
				},
			},
			{
				onSuccess: (response) => {
					navigate(`/confirmation/${response.bookingId}`);
				},
			},
		);
	};

	const errorMessage = createBooking.error
		? isAxiosError(createBooking.error) &&
			createBooking.error.response?.status === 409
			? "No seats available for this flight."
			: isAxiosError(createBooking.error)
				? ((createBooking.error.response?.data as { message?: string })
						?.message ?? "Booking failed. Please try again.")
				: "Unable to connect to server."
		: null;

	if (!flight) {
		return (
			<Box data-testid="passenger-data-page">
				<Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
					<Button
						startIcon={<ArrowBackIcon />}
						onClick={() => navigate("/search")}
						data-testid="back-button"
					>
						Back to Search
					</Button>
				</Box>
				<Alert severity="error">
					Flight details not available. Please select a flight from the search
					results.
				</Alert>
			</Box>
		);
	}

	return (
		<Box data-testid="passenger-data-page">
			<Typography variant="h5" gutterBottom>
				Passenger Details
			</Typography>

			{errorMessage && (
				<Alert severity="error" sx={{ mb: 2 }}>
					{errorMessage}
				</Alert>
			)}

			<FlightSummary flight={flight} />
			<PassengerForm
				onSubmit={handleBooking}
				onValidityChange={setIsFormValid}
				formId={FORM_ID}
			/>

			<BaseFooterBar
				visible={isScrollingUp}
				aria-label="Booking actions"
				sx={{ px: 3 }}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
						maxWidth: 1200,
						mx: "auto",
					}}
				>
					<Box sx={{ display: "flex", gap: 1 }}>
						<Button
							variant="outlined"
							startIcon={<ArrowBackIcon />}
							onClick={() => navigate(-1)}
							data-testid="back-button"
						>
							Back
						</Button>
					</Box>

					<Button
						type="submit"
						form={FORM_ID}
						variant="contained"
						size="large"
						disabled={!isFormValid || createBooking.isPending}
						startIcon={
							createBooking.isPending ? (
								<CircularProgress size={20} color="inherit" />
							) : (
								<FlightTakeoffIcon />
							)
						}
						data-testid="book-flight-button"
					>
						Book Flight
					</Button>
				</Box>
			</BaseFooterBar>
		</Box>
	);
}
