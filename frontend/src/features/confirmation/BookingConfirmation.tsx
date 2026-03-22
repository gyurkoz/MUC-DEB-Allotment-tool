import { useNavigate } from "react-router-dom";
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	Divider,
} from "@lsy-netline/netline-ui";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { StatusBadge } from "@/components/StatusBadge";
import { AirlineLogo } from "@/components/AirlineLogo";
import type { BookingResponseDTO } from "@/api/models";

interface BookingConfirmationProps {
	booking: BookingResponseDTO;
}

export function BookingConfirmation({ booking }: BookingConfirmationProps) {
	const navigate = useNavigate();

	const handleCopyPnr = async () => {
		try {
			await navigator.clipboard.writeText(booking.pnr ?? "");
		} catch {
			// Clipboard API not available (e.g., non-HTTPS or denied permission)
		}
	};

	const bookingLink = `${window.location.origin}/booking/${booking.bookingId}`;
	const passengerName =
		`${booking.passenger?.firstName ?? ""} ${booking.passenger?.lastName ?? ""}`.trim();

	return (
		<Card data-testid="booking-confirmation">
			<CardContent sx={{ textAlign: "center", py: 4 }}>
				<CheckCircleIcon sx={{ fontSize: 64, color: "success.main", mb: 2 }} />
				<Typography variant="h5" gutterBottom>
					Booking Confirmed!
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 1,
						mb: 2,
					}}
				>
					<Typography
						variant="h4"
						sx={{
							fontFamily: "monospace",
							fontWeight: 700,
							color: "primary.main",
						}}
					>
						{booking.pnr}
					</Typography>
					<Button
						size="small"
						onClick={handleCopyPnr}
						startIcon={<ContentCopyIcon />}
						aria-label="Copy PNR"
						data-testid="copy-pnr-button"
					>
						Copy
					</Button>
				</Box>

				<StatusBadge status={booking.status ?? ""} />

				<Divider sx={{ my: 3 }} />

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 2,
						textAlign: "left",
						maxWidth: 400,
						mx: "auto",
					}}
				>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Flight
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
							{booking.flight?.marketingAirline && (
								<AirlineLogo code={booking.flight.marketingAirline} size={16} />
							)}
							<Typography variant="body1">
								{booking.flight?.flightNumber}
							</Typography>
						</Box>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Route
						</Typography>
						<Typography variant="body1">
							{booking.flight?.departureAirport} →{" "}
							{booking.flight?.arrivalAirport}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Date
						</Typography>
						<Typography variant="body1">
							{new Date(
								booking.flight?.departureTime ?? "",
							).toLocaleDateString()}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Passenger
						</Typography>
						<Typography variant="body1">{passengerName}</Typography>
					</Box>
				</Box>

				<Divider sx={{ my: 3 }} />

				<Typography variant="body2" color="text.secondary" gutterBottom>
					Booking status link:
				</Typography>
				<Typography
					variant="body2"
					component="a"
					href={bookingLink}
					sx={{ color: "primary.main", wordBreak: "break-all" }}
					data-testid="booking-status-link"
				>
					{bookingLink}
				</Typography>

				<Box sx={{ mt: 4 }}>
					<Button
						variant="contained"
						onClick={() => navigate("/search")}
						data-testid="book-another-button"
					>
						Book Another Flight
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
