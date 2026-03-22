import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { FlightCard } from "@/features/flight-search/FlightCard";

const baseProps = {
	flightNumber: "LH1234",
	departureTime: "2026-03-21T08:00:00Z",
	arrivalTime: "2026-03-21T09:30:00Z",
	availableSeats: 42,
};

describe("FlightCard", () => {
	it("renders flight number", () => {
		renderWithProviders(<FlightCard {...baseProps} />);

		expect(screen.getByText("LH1234")).toBeInTheDocument();
	});

	it("renders seat availability chip", () => {
		renderWithProviders(<FlightCard {...baseProps} />);

		expect(screen.getByText("42")).toBeInTheDocument();
	});

	it("renders sold out chip when availableSeats is 0", () => {
		renderWithProviders(<FlightCard {...baseProps} availableSeats={0} />);

		expect(screen.getByText("Full")).toBeInTheDocument();
	});

	it("reduces opacity when sold out", () => {
		const { container } = renderWithProviders(
			<FlightCard {...baseProps} availableSeats={0} />,
		);

		// The Card root element gets opacity: 0.5
		const card = container.querySelector('[data-testid="flight-card-LH1234"]');
		expect(card).toBeInTheDocument();
	});

	it("has aria-label with flight details for available flight", () => {
		renderWithProviders(<FlightCard {...baseProps} />);

		const card = screen.getByLabelText(/flight lh1234.*42 seats available/i);
		expect(card).toBeInTheDocument();
	});

	it("has aria-label indicating sold out", () => {
		renderWithProviders(<FlightCard {...baseProps} availableSeats={0} />);

		const card = screen.getByLabelText(/flight lh1234.*sold out/i);
		expect(card).toBeInTheDocument();
	});
});
