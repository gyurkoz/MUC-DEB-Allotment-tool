import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { StatusBadge } from "@/components/StatusBadge";

describe("StatusBadge", () => {
	it.each([
		["CONFIRMED", "Confirmed"],
		["PENDING", "Pending"],
		["CANCELLED", "Cancelled"],
		["REJECTED", "Rejected"],
		["FLIGHT_CANCELLED", "Flight Cancelled"],
		["FLIGHT_DELAYED", "Delayed"],
	])("renders correct label for %s status", (status, expectedLabel) => {
		renderWithProviders(<StatusBadge status={status} />);

		expect(screen.getByText(expectedLabel)).toBeInTheDocument();
	});

	it("renders the raw status string for unknown statuses", () => {
		renderWithProviders(<StatusBadge status="UNKNOWN_STATUS" />);

		expect(screen.getByText("UNKNOWN_STATUS")).toBeInTheDocument();
	});

	it("renders with success color chip for CONFIRMED", () => {
		const { container } = renderWithProviders(
			<StatusBadge status="CONFIRMED" />,
		);

		const chip = container.querySelector(".MuiChip-colorSuccess");
		expect(chip).toBeInTheDocument();
	});

	it("renders with warning color chip for PENDING", () => {
		const { container } = renderWithProviders(<StatusBadge status="PENDING" />);

		const chip = container.querySelector(".MuiChip-colorWarning");
		expect(chip).toBeInTheDocument();
	});

	it("renders with error color chip for CANCELLED", () => {
		const { container } = renderWithProviders(
			<StatusBadge status="CANCELLED" />,
		);

		const chip = container.querySelector(".MuiChip-colorError");
		expect(chip).toBeInTheDocument();
	});

	it("renders with error color chip for REJECTED", () => {
		const { container } = renderWithProviders(
			<StatusBadge status="REJECTED" />,
		);

		const chip = container.querySelector(".MuiChip-colorError");
		expect(chip).toBeInTheDocument();
	});

	it("renders with warning color chip for FLIGHT_DELAYED", () => {
		const { container } = renderWithProviders(
			<StatusBadge status="FLIGHT_DELAYED" />,
		);

		const chip = container.querySelector(".MuiChip-colorWarning");
		expect(chip).toBeInTheDocument();
	});
});
