/**
 * BaseFooterBar — Shared sticky footer bar.
 *
 * Fixed to the bottom of the viewport with slide-in/out animation.
 * Feature-specific footer bars compose their own layouts inside this shell.
 */

import { Box, styled } from "@lsy-netline/netline-ui";
import type { SxProps, Theme } from "@lsy-netline/netline-ui";

export const FooterBarRoot = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isVisible" && prop !== "minBarHeight",
})<{ isVisible: boolean; minBarHeight: number }>(
	({ theme, isVisible, minBarHeight }) => ({
		position: "fixed",
		bottom: 0,
		left: 0,
		right: 0,
		display: "flex",
		alignItems: "center",
		backgroundColor: theme.palette.background.paper,
		boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)",
		minHeight: minBarHeight,
		zIndex: theme.zIndex.appBar,
		transform: isVisible ? "translateY(0)" : "translateY(100%)",
		pointerEvents: isVisible ? "auto" : "none",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.standard,
			easing: theme.transitions.easing.easeInOut,
		}),
	}),
);

export interface BaseFooterBarProps {
	visible?: boolean;
	minHeight?: number;
	"aria-label"?: string;
	children: React.ReactNode;
	sx?: SxProps<Theme>;
}

export function BaseFooterBar({
	visible = true,
	minHeight = 72,
	"aria-label": ariaLabel,
	children,
	sx,
}: BaseFooterBarProps) {
	return (
		<FooterBarRoot
			isVisible={visible}
			minBarHeight={minHeight}
			role="region"
			aria-label={ariaLabel}
			{...(!visible && { inert: true })}
			sx={sx}
		>
			{children}
		</FooterBarRoot>
	);
}
