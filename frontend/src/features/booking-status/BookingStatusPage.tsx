import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	Box,
	Typography,
	Button,
	CircularProgress,
	Alert,
} from "@lsy-netline/netline-ui";
import FlightIcon from "@mui/icons-material/Flight";
import CancelIcon from "@mui/icons-material/Cancel";
import { useQueryClient } from "@tanstack/react-query";
import { BookingDetails } from "./BookingDetails";
import { CancelBookingDialog } from "./CancelBookingDialog";
import {
	useGetBooking,
	getGetBookingQueryKey,
} from "@/api/generated/bookings/bookings";

// Booking status is intentionally public — the booking UUID acts as an
// unguessable secret, so no authentication is required to view booking details.
export function BookingStatusPage() {
	const { bookingId } = useParams<{ bookingId: string }>();
	const queryClient = useQueryClient();
	const { data: booking, isLoading, error } = useGetBooking(bookingId ?? "");
	const [cancelDialogOpen, setCancelDialogOpen] = useState(false);

	const handleCancelled = () => {
		setCancelDialogOpen(false);
		queryClient.invalidateQueries({
			queryKey: getGetBookingQueryKey(bookingId),
		});
	};

	if (isLoading) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
				}}
			>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box
			sx={{
				maxWidth: 700,
				mx: "auto",
				p: 3,
				minHeight: "100vh",
			}}
			data-testid="booking-status-page"
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
				<FlightIcon sx={{ fontSize: 32, color: "primary.main" }} />
				<Typography variant="h5">Booking Status</Typography>
			</Box>

			{error && (
				<Alert severity="error" sx={{ mb: 2 }}>
					Booking not found or unable to load.
				</Alert>
			)}

			{booking && (
				<>
					<BookingDetails booking={booking} />

					{booking.cancellable && booking.status !== "CANCELLED" && (
						<Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
							<Button
								variant="outlined"
								color="error"
								startIcon={<CancelIcon />}
								onClick={() => setCancelDialogOpen(true)}
								data-testid="cancel-booking-button"
							>
								Cancel Booking
							</Button>
						</Box>
					)}

					<CancelBookingDialog
						open={cancelDialogOpen}
						bookingId={booking.bookingId ?? ""}
						onClose={() => setCancelDialogOpen(false)}
						onCancelled={handleCancelled}
					/>
				</>
			)}
		</Box>
	);
}
