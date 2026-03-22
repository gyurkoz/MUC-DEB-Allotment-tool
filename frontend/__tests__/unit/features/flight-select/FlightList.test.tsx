import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { FlightList } from "@/features/flight-select/FlightList";
import type { FlightDTO } from "@/api/models";

const mockFlights: FlightDTO[] = [
	{
		id: "flight-1",
		flightNumber: "LH1234",
		departureAirport: "MUC",
		arrivalAirport: "DEB",
		departureTime: "2099-03-21T08:00:00Z",
		arrivalTime: "2099-03-21T09:30:00Z",
		availableSeats: 10,
		status: "AVAILABLE",
		price: { amount: 120.0, currency: "EUR" },
	},
	{
		id: "flight-2",
		flightNumber: "LH5678",
		departureAirport: "MUC",
		arrivalAirport: "DEB",
		departureTime: "2099-03-21T14:00:00Z",
		arrivalTime: "2099-03-21T15:30:00Z",
		availableSeats: 0,
		status: "SOLD_OUT",
		price: { amount: 99.0, currency: "EUR" },
	},
];

describe("FlightList", () => {
	it("shows message when no flights are available", () => {
		renderWithProviders(<FlightList flights={[]} />);

		expect(
			screen.getByText("No flights available for this date."),
		).toBeInTheDocument();
	});

	it("renders the correct number of flights", () => {
		renderWithProviders(<FlightList flights={mockFlights} />);

		expect(screen.getByText("2 flights available")).toBeInTheDocument();
	});

	it("renders singular text for one flight", () => {
		renderWithProviders(<FlightList flights={[mockFlights[0]]} />);

		expect(screen.getByText("1 flight available")).toBeInTheDocument();
	});

	it("shows Select Flight button for available flights", () => {
		renderWithProviders(<FlightList flights={[mockFlights[0]]} />);

		expect(
			screen.getByRole("button", { name: /select flight/i }),
		).toBeInTheDocument();
	});

	it("hides Select Flight button for sold-out flights", () => {
		renderWithProviders(<FlightList flights={[mockFlights[1]]} />);

		expect(
			screen.queryByRole("button", { name: /select flight/i }),
		).not.toBeInTheDocument();
	});

	it("renders flight numbers for all flights", () => {
		renderWithProviders(<FlightList flights={mockFlights} />);

		expect(screen.getByText("LH1234")).toBeInTheDocument();
		expect(screen.getByText("LH5678")).toBeInTheDocument();
	});
});
