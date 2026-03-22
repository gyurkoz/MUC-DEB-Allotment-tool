import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { DirectionSelector } from "@/features/flight-search/DirectionSelector";

describe("DirectionSelector", () => {
	it("renders both direction options", () => {
		renderWithProviders(
			<DirectionSelector direction="MUC-DEB" onChange={vi.fn()} />,
		);

		expect(
			screen.getByRole("button", { name: /munich to debrecen/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /debrecen to munich/i }),
		).toBeInTheDocument();
	});

	it("shows MUC-DEB as pressed when selected", () => {
		renderWithProviders(
			<DirectionSelector direction="MUC-DEB" onChange={vi.fn()} />,
		);

		expect(
			screen.getByRole("button", { name: /munich to debrecen/i }),
		).toHaveAttribute("aria-pressed", "true");
		expect(
			screen.getByRole("button", { name: /debrecen to munich/i }),
		).toHaveAttribute("aria-pressed", "false");
	});

	it("calls onChange when direction is toggled", async () => {
		const handleChange = vi.fn();
		const { user } = renderWithProviders(
			<DirectionSelector direction="MUC-DEB" onChange={handleChange} />,
		);

		await user.click(
			screen.getByRole("button", { name: /debrecen to munich/i }),
		);

		expect(handleChange).toHaveBeenCalledWith("DEB-MUC");
	});

	it("does not call onChange when clicking already-selected direction", async () => {
		const handleChange = vi.fn();
		const { user } = renderWithProviders(
			<DirectionSelector direction="MUC-DEB" onChange={handleChange} />,
		);

		await user.click(
			screen.getByRole("button", { name: /munich to debrecen/i }),
		);

		expect(handleChange).not.toHaveBeenCalled();
	});
});
