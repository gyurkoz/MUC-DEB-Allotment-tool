import { CircularProgress, Box } from "@lsy-netline/netline-ui";

export function LoadingOverlay() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100%",
			}}
			data-testid="loading-overlay"
		>
			<CircularProgress size={48} />
		</Box>
	);
}
