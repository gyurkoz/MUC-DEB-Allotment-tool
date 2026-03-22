import { useParams } from "react-router-dom";
import {
	Box,
	Typography,
	CircularProgress,
	Alert,
} from "@lsy-netline/netline-ui";
import { BookingConfirmation } from "./BookingConfirmation";
import { useGetBooking } from "@/api/generated/bookings/bookings";

export function ConfirmationPage() {
	const { bookingId } = useParams<{ bookingId: string }>();
	const { data: booking, isLoading, error } = useGetBooking(bookingId ?? "");

	if (isLoading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box data-testid="confirmation-page">
			<Typography variant="h5" gutterBottom>
				Booking Confirmation
			</Typography>

			{error && (
				<Alert severity="error" sx={{ mb: 2 }}>
					Failed to load booking details
				</Alert>
			)}

			{booking && <BookingConfirmation booking={booking} />}
		</Box>
	);
}
