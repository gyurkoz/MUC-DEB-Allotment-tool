import { Chip } from "@lsy-netline/netline-ui";

const STATUS_CONFIG: Record<
	string,
	{ label: string; color: "success" | "warning" | "error" | "info" | "default" }
> = {
	CONFIRMED: { label: "Confirmed", color: "success" },
	PENDING: { label: "Pending", color: "warning" },
	CANCELLED: { label: "Cancelled", color: "error" },
	REJECTED: { label: "Rejected", color: "error" },
	FLIGHT_CANCELLED: { label: "Flight Cancelled", color: "error" },
	FLIGHT_DELAYED: { label: "Delayed", color: "warning" },
};

interface StatusBadgeProps {
	status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
	const config = STATUS_CONFIG[status] ?? {
		label: status,
		color: "default" as const,
	};

	return (
		<Chip
			label={config.label}
			color={config.color}
			size="small"
			data-testid={`status-badge-${status.toLowerCase()}`}
		/>
	);
}
