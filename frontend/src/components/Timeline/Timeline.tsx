/**
 * Custom Timeline components — lightweight replacement for `@mui/lab` Timeline.
 *
 * Provides a vertical timeline with dots, connectors, and content areas
 * without the `@mui/lab` dependency.
 *
 * Components: Timeline, TimelineItem, TimelineSeparator, TimelineDot,
 * TimelineConnector, TimelineContent.
 */

import { Box, styled } from "@lsy-netline/netline-ui";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@lsy-netline/netline-ui";

// ---------------------------------------------------------------------------
// Timeline (root container)
// ---------------------------------------------------------------------------

export interface TimelineProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

/** Vertical timeline container. Renders children as a column list. */
export const Timeline = styled(Box, {
	name: "Timeline",
})<TimelineProps>({
	display: "flex",
	flexDirection: "column",
	padding: 0,
	margin: 0,
	listStyle: "none",
}) as React.FC<TimelineProps>;

// ---------------------------------------------------------------------------
// TimelineItem
// ---------------------------------------------------------------------------

export interface TimelineItemProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

/** A single row in the timeline, laid out as `[separator | content]`. */
export const TimelineItem = styled(Box, {
	name: "TimelineItem",
})<TimelineItemProps>({
	display: "flex",
	flexDirection: "row",
	alignItems: "stretch",
	minHeight: 36,
});

// ---------------------------------------------------------------------------
// TimelineSeparator
// ---------------------------------------------------------------------------

export interface TimelineSeparatorProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

/** Vertical column holding dots and connectors. */
export const TimelineSeparator = styled(Box, {
	name: "TimelineSeparator",
})<TimelineSeparatorProps>({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	flexShrink: 0,
	minWidth: 24,
});

// ---------------------------------------------------------------------------
// TimelineDot
// ---------------------------------------------------------------------------

type TimelineDotVariant = "filled" | "outlined";

export interface TimelineDotProps {
	variant?: TimelineDotVariant;
	children?: ReactNode;
	sx?: SxProps<Theme>;
}

/** Small circular dot marker in the timeline separator column. */
export const TimelineDot = styled(Box, {
	name: "TimelineDot",
	shouldForwardProp: (prop) => prop !== "variant",
})<TimelineDotProps>(({ theme, variant = "filled" }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	width: 12,
	height: 12,
	borderRadius: "50%",
	boxSizing: "border-box",
	...(variant === "filled"
		? {
				backgroundColor: theme.palette.grey[400],
				border: "none",
			}
		: {
				backgroundColor: "transparent",
				border: `2px solid ${theme.palette.grey[400]}`,
			}),
}));

// ---------------------------------------------------------------------------
// TimelineConnector
// ---------------------------------------------------------------------------

export interface TimelineConnectorProps {
	sx?: SxProps<Theme>;
}

/** Vertical line connecting two timeline dots. */
export const TimelineConnector = styled(Box, {
	name: "TimelineConnector",
})<TimelineConnectorProps>(({ theme }) => ({
	width: 2,
	flexGrow: 1,
	backgroundColor: theme.palette.grey[400],
	minHeight: 24,
}));

// ---------------------------------------------------------------------------
// TimelineContent
// ---------------------------------------------------------------------------

export interface TimelineContentProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

/** Content area to the right of the separator column. */
export const TimelineContent = styled(Box, {
	name: "TimelineContent",
})<TimelineContentProps>(({ theme }) => ({
	flex: 1,
	paddingLeft: theme.spacing(1.5),
	paddingTop: theme.spacing(0.25),
	paddingBottom: theme.spacing(0.5),
	minWidth: 0,
}));
