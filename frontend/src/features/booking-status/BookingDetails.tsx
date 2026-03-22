import {
	Card,
	CardContent,
	Typography,
	Box,
	Divider,
} from "@lsy-netline/netline-ui";
import { StatusBadge } from "@/components/StatusBadge";
import { AirlineLogo } from "@/components/AirlineLogo";
import type { BookingResponseDTO } from "@/api/models";

interface BookingDetailsProps {
	booking: BookingResponseDTO;
}

export function BookingDetails({ booking }: BookingDetailsProps) {
	const depDate = new Date(booking.flight?.departureTime ?? "");
	const arrDate = new Date(booking.flight?.arrivalTime ?? "");

	return (
		<Card data-testid="booking-details">
			<CardContent>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: 2,
					}}
				>
					<Box>
						<Typography variant="caption" color="text.secondary">
							PNR
						</Typography>
						<Typography
							variant="h5"
							sx={{ fontFamily: "monospace", fontWeight: 700 }}
						>
							{booking.pnr}
						</Typography>
					</Box>
					<StatusBadge status={booking.status ?? ""} />
				</Box>

				<Divider sx={{ mb: 2 }} />

				<Typography variant="h6" gutterBottom>
					Flight Information
				</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 2,
						mb: 3,
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
							Departure
						</Typography>
						<Typography variant="body1">
							{depDate.toLocaleDateString()}{" "}
							{depDate.toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Arrival
						</Typography>
						<Typography variant="body1">
							{arrDate.toLocaleDateString()}{" "}
							{arrDate.toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</Typography>
					</Box>
				</Box>

				<Divider sx={{ mb: 2 }} />

				<Typography variant="h6" gutterBottom>
					Passenger Information
				</Typography>
				<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Name
						</Typography>
						<Typography variant="body1">
							{booking.passenger?.firstName} {booking.passenger?.lastName}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							U-Number
						</Typography>
						<Typography variant="body1">
							{booking.passenger?.uNumber}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Email
						</Typography>
						<Typography variant="body1">{booking.passenger?.email}</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Phone
						</Typography>
						<Typography variant="body1">
							{booking.passenger?.phoneNumber}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
