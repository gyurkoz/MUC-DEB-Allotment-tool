/**
 * StyledDialog — Shared dialog with uniform styling.
 *
 * Adapted from GST-UI's StyledDialog component.
 * Provides consistent 16px border-radius and a header with close button.
 */

import type { ReactNode } from "react";
import { Box, Dialog, IconButton, Typography } from "@lsy-netline/netline-ui";
import { styled } from "@lsy-netline/netline-ui/styles";
import CloseIcon from "@mui/icons-material/Close";

export const StyledDialog = styled(Dialog)({
	"& .MuiDialog-paper": {
		borderRadius: 16,
	},
});

export interface StyledDialogHeaderProps {
	children: ReactNode;
	onClose?: () => void;
	closeAriaLabel?: string;
	id?: string;
}

const HeaderRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: theme.spacing(2),
	minHeight: 56,
}));

export function StyledDialogHeader({
	children,
	onClose,
	closeAriaLabel = "Close",
	id,
}: StyledDialogHeaderProps) {
	return (
		<HeaderRoot>
			<Typography variant="h6" id={id} sx={{ fontWeight: 500 }}>
				{children}
			</Typography>
			{onClose && (
				<IconButton onClick={onClose} size="small" aria-label={closeAriaLabel}>
					<CloseIcon />
				</IconButton>
			)}
		</HeaderRoot>
	);
}
