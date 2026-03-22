import { Stepper, Step, StepLabel, Box } from "@lsy-netline/netline-ui";
import { useLocation } from "react-router-dom";

const STEPS = [
	"Search Flights",
	"Select Flight",
	"Passenger Data",
	"Confirmation",
];

function getActiveStep(pathname: string): number {
	if (pathname.startsWith("/search") && !pathname.includes("/search/"))
		return 0;
	if (pathname.startsWith("/search/")) return 1;
	if (pathname.startsWith("/book/")) return 2;
	if (pathname.startsWith("/confirmation/")) return 3;
	return 0;
}

export function BookingStepper() {
	const location = useLocation();
	const activeStep = getActiveStep(location.pathname);

	return (
		<Box sx={{ width: "100%", py: 2, px: 3, mt: 2 }}>
			<Stepper
				activeStep={activeStep}
				alternativeLabel
				data-testid="booking-stepper"
				sx={{
					"&:not(.Stepper-inverse) .MuiStepLabel-iconContainer.Mui-completed .MuiStepIcon-root":
						{
							color: "primary.main",
						},
					"&:not(.Stepper-inverse) .MuiStepLabel-iconContainer.Mui-active .MuiStepIcon-root":
						{
							color: "primary.main",
						},
				}}
			>
				{STEPS.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
