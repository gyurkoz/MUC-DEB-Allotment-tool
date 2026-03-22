import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isAxiosError } from "axios";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
	Alert,
	CircularProgress,
	Typography,
} from "@lsy-netline/netline-ui";
import { useCancelBooking } from "@/api/generated/bookings/bookings";

const cancelSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type CancelFormData = z.infer<typeof cancelSchema>;

interface CancelBookingDialogProps {
	open: boolean;
	bookingId: string;
	onClose: () => void;
	onCancelled: () => void;
}

export function CancelBookingDialog({
	open,
	bookingId,
	onClose,
	onCancelled,
}: CancelBookingDialogProps) {
	const cancelMutation = useCancelBooking();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CancelFormData>({
		resolver: zodResolver(cancelSchema),
	});

	const onSubmit = (data: CancelFormData) => {
		cancelMutation.mutate(
			{ bookingId, params: { email: data.email } },
			{
				onSuccess: () => {
					reset();
					onCancelled();
				},
			},
		);
	};

	const errorMessage = cancelMutation.error
		? isAxiosError(cancelMutation.error) &&
			cancelMutation.error.response?.status === 403
			? "Email does not match the booking."
			: isAxiosError(cancelMutation.error) &&
					cancelMutation.error.response?.status === 400
				? "This booking cannot be cancelled (less than 24h before departure)."
				: isAxiosError(cancelMutation.error) &&
						cancelMutation.error.response?.status === 409
					? "This booking is already cancelled."
					: isAxiosError(cancelMutation.error)
						? ((cancelMutation.error.response?.data as { message?: string })
								?.message ?? "Cancellation failed.")
						: "Unable to connect to server."
		: null;

	const handleClose = () => {
		cancelMutation.reset();
		reset();
		onClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth="sm"
			fullWidth
			data-testid="cancel-booking-dialog"
		>
			<DialogTitle>Cancel Booking</DialogTitle>
			<DialogContent>
				<Typography variant="body2" sx={{ mb: 2 }}>
					To cancel this booking, please enter the email address used during
					booking for verification.
				</Typography>

				{errorMessage && (
					<Alert severity="error" sx={{ mb: 2 }} data-testid="cancel-error">
						{errorMessage}
					</Alert>
				)}

				<TextField
					{...register("email")}
					label="Email Address"
					type="email"
					fullWidth
					autoFocus
					error={!!errors.email}
					helperText={errors.email?.message}
					sx={{ mt: 1 }}
					data-testid="cancel-email-input"
				/>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={handleClose}
					disabled={cancelMutation.isPending}
					data-testid="cancel-dialog-close"
				>
					Close
				</Button>
				<Button
					onClick={handleSubmit(onSubmit)}
					variant="contained"
					color="error"
					disabled={cancelMutation.isPending}
					data-testid="confirm-cancel-button"
				>
					{cancelMutation.isPending ? (
						<CircularProgress size={20} />
					) : (
						"Confirm Cancellation"
					)}
				</Button>
			</DialogActions>
		</Dialog>
	);
}
