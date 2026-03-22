import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	TextField,
	Box,
	Alert,
	AlertTitle,
	Typography,
	Tooltip,
	IconButton,
} from "@lsy-netline/netline-ui";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { PhoneCountryCodeSelect } from "@/components/PhoneCountryCodeSelect";
import { passengerSchema, type PassengerFormData } from "./passenger.schema";

interface PassengerFormProps {
	onSubmit: (data: PassengerFormData) => void;
	/** Expose form validity to parent for footer bar button */
	onValidityChange?: (isValid: boolean) => void;
	/** Form id for external submit trigger from footer bar */
	formId?: string;
}

export function PassengerForm({
	onSubmit,
	onValidityChange,
	formId = "passenger-form",
}: PassengerFormProps) {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isValid, isDirty },
	} = useForm<PassengerFormData>({
		resolver: zodResolver(passengerSchema),
		mode: "onChange",
		defaultValues: {
			uNumber: "",
			firstName: "",
			lastName: "",
			email: "",
			phonePrefix: "+49",
			phoneNumber: "",
		},
	});

	const isFormComplete = isValid && isDirty;

	// Notify parent of validity changes via effect (not during render)
	useEffect(() => {
		onValidityChange?.(isFormComplete);
	}, [isFormComplete, onValidityChange]);

	return (
		<Box
			data-testid="passenger-form-container"
			sx={{ display: "flex", justifyContent: "center", mt: 4 }}
		>
			<Box
				component="form"
				id={formId}
				onSubmit={handleSubmit(onSubmit)}
				sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400 }}
				data-testid="passenger-form"
			>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
					<Box
						component="label"
						sx={{
							display: "flex",
							alignItems: "center",
							fontSize: "0.875rem",
							fontWeight: 400,
							color: "text.secondary",
						}}
					>
						U-Number
						<Typography
							component="span"
							sx={{ color: "error.main", ml: 0.25 }}
						>
							*
						</Typography>
						<Tooltip
							title='Enter your Lufthansa U-Number: "U" followed by at least 4 digits (e.g. U1234567)'
							arrow
							placement="right"
						>
							<IconButton
								size="small"
								aria-label="U-Number format info"
								sx={{ ml: "auto", p: 0.25 }}
								tabIndex={0}
							>
								<InfoOutlinedIcon
									sx={{ fontSize: 18, color: "info.main" }}
								/>
							</IconButton>
						</Tooltip>
					</Box>
					<TextField
						{...register("uNumber", {
							onChange: (e) => {
								e.target.value = e.target.value.toUpperCase();
							},
						})}
						placeholder="U1234567"
						error={!!errors.uNumber}
						helperText={errors.uNumber?.message}
						data-testid="u-number-input"
						slotProps={{
							htmlInput: { style: { textTransform: "uppercase" } },
						}}
					/>
				</Box>

				<Box sx={{ display: "flex", gap: 2 }}>
					<TextField
						{...register("firstName")}
						label="First Name"
						required
						fullWidth
						error={!!errors.firstName}
						helperText={errors.firstName?.message}
						data-testid="first-name-input"
					/>
					<TextField
						{...register("lastName")}
						label="Last Name"
						required
						fullWidth
						error={!!errors.lastName}
						helperText={errors.lastName?.message}
						data-testid="last-name-input"
					/>
				</Box>

				<TextField
					{...register("email")}
					label="Email"
					required
					type="email"
					placeholder="name@lufthansa.com"
					error={!!errors.email}
					helperText={errors.email?.message}
					data-testid="email-input"
				/>

				<PhoneCountryCodeSelect<PassengerFormData>
					prefixName="phonePrefix"
					numberName="phoneNumber"
					label="Phone Number"
					required
					control={control}
					errors={errors}
				/>

				{isFormComplete && (
					<Alert severity="info" data-testid="booking-info-banner">
						<AlertTitle sx={{ fontSize: 16, fontWeight: 500 }}>
							Please double-check your details
						</AlertTitle>
						<Typography variant="body2">
							Make sure all provided data is correct and free of typos. This
							information will be used for the booking and any mistakes may
							cause issues.
						</Typography>
					</Alert>
				)}
			</Box>
		</Box>
	);
}
