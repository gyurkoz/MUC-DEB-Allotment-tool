import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { BookingConfirmation } from "@/features/confirmation/BookingConfirmation";
import type { BookingResponseDTO } from "@/api/models";

const mockBooking: BookingResponseDTO = {
	bookingId: "abc-123-def",
	pnr: "XYZ789",
	status: "CONFIRMED",
	flight: {
		flightNumber: "LH1234",
		departureAirport: "MUC",
		arrivalAirport: "DEB",
		departureTime: "2026-03-21T08:00:00Z",
		arrivalTime: "2026-03-21T09:30:00Z",
	},
	passenger: {
		uNumber: "U123456",
		firstName: "John",
		lastName: "Doe",
		email: "john@example.com",
		phoneNumber: "+49123456",
	},
	cancellable: true,
};

describe("BookingConfirmation", () => {
	it("shows PNR prominently", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(screen.getByText("XYZ789")).toBeInTheDocument();
	});

	it("shows booking confirmed heading", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(screen.getByText("Booking Confirmed!")).toBeInTheDocument();
	});

	it("shows flight number", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(screen.getByText("LH1234")).toBeInTheDocument();
	});

	it("shows route", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(screen.getByText("MUC → DEB")).toBeInTheDocument();
	});

	it("shows passenger name", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(screen.getByText("John Doe")).toBeInTheDocument();
	});

	it("shows status badge", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(screen.getByText("Confirmed")).toBeInTheDocument();
	});

	it("shows booking status link", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		const link = screen.getByTestId("booking-status-link");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(
			"href",
			expect.stringContaining("/booking/abc-123-def"),
		);
	});

	it("shows copy PNR button", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(
			screen.getByRole("button", { name: /copy pnr/i }),
		).toBeInTheDocument();
	});

	it("shows Book Another Flight button", () => {
		renderWithProviders(<BookingConfirmation booking={mockBooking} />);

		expect(
			screen.getByRole("button", { name: /book another flight/i }),
		).toBeInTheDocument();
	});
});
