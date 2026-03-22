/**
 * AirlineLogo — Shows airline logo for a given IATA carrier code.
 *
 * Currently supports Lufthansa (LH). Returns null for unsupported airlines.
 * Adapted from GST-UI's AirlineLogo component.
 */

import { Box } from "@lsy-netline/netline-ui";
import type { SxProps, Theme } from "@lsy-netline/netline-ui/styles";

const AIRLINES_BASE_PATH = "/assets/airlines";

/** Supported airlines with their symbol logo files. */
const SUPPORTED_AIRLINES: Record<string, string> = {
	LH: `${AIRLINES_BASE_PATH}/LH_symbol.svg`,
};

export interface AirlineLogoProps {
	/** Two-letter IATA carrier code (e.g. "LH"). */
	code: string;
	/** Optional airline display name – used for the alt attribute. */
	name?: string;
	/** Logo dimensions in px (width & height). @default 16 */
	size?: number;
	/** Additional MUI sx overrides. */
	sx?: SxProps<Theme>;
}

export function AirlineLogo({ code, name, size = 16, sx }: AirlineLogoProps) {
	const logoSrc = SUPPORTED_AIRLINES[code];

	if (!logoSrc) return null;

	const displayName = name ?? code;

	return (
		<Box
			component="img"
			src={logoSrc}
			alt={`${displayName} airline logo`}
			sx={{
				width: size,
				height: size,
				objectFit: "contain",
				borderRadius: 0.5,
				flexShrink: 0,
				...((sx ?? {}) as Record<string, unknown>),
			}}
		/>
	);
}
