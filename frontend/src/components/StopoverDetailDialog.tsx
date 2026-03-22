/**
 * StopoverDetailDialog — Shows flight detail info in a modal.
 *
 * Adapted from GST-UI's StopoverDetailDialog.
 * Uses FlightTimeline for vertical timeline visualization,
 * matching the GST-UI design pattern.
 */

import { Button, DialogActions, DialogContent } from "@lsy-netline/netline-ui";
import { StyledDialog, StyledDialogHeader } from "./StyledDialog";
import { FlightTimeline } from "@/components/FlightTimeline";
import type { FlightDTO } from "@/api/models";

export interface StopoverDetailDialogProps {
	open: boolean;
	flight: FlightDTO;
	onClose: () => void;
}

const WIDE_DIALOG_SX = {
	"& .MuiDialog-paper": { minWidth: 500, maxWidth: "95vw" },
} as const;

export function StopoverDetailDialog({
	open,
	flight,
	onClose,
}: StopoverDetailDialogProps) {
	return (
		<StyledDialog
			open={open}
			onClose={onClose}
			maxWidth={false}
			sx={WIDE_DIALOG_SX}
			aria-labelledby="stopover-dialog-title"
		>
			<StyledDialogHeader
				onClose={onClose}
				closeAriaLabel="Close"
				id="stopover-dialog-title"
			>
				Flight Information
			</StyledDialogHeader>

			<DialogContent sx={{ px: 2, py: 2 }}>
				<FlightTimeline flight={flight} />
			</DialogContent>

			<DialogActions sx={{ p: 2 }}>
				<Button variant="contained" onClick={onClose}>
					Close
				</Button>
			</DialogActions>
		</StyledDialog>
	);
}
