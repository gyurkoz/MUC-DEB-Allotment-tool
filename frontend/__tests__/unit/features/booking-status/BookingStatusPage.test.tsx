import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { BookingStatusPage } from "@/features/booking-status/BookingStatusPage";
import type { BookingResponseDTO } from "@/api/models";

// Configurable mock return value
let mockBookingQuery: {
	data: BookingResponseDTO | undefined;
	isLoading: boolean;
	error: Error | null;
};

vi.mock("@/api/generated/bookings/bookings", () => ({
	useGetBooking: () => mockBookingQuery,
	getGetBookingQueryKey: (id?: string) => ["bookings", id],
	useCancelBooking: () => ({
		mutate: vi.fn(),
		isPending: false,
		error: null,
	}),
}));

vi.mock("react-router-dom", async (importOriginal) => {
	const actual = await importOriginal<typeof import("react-router-dom")>();
	return {
		...actual,
		useParams: () => ({ bookingId: "abc-123-def" }),
	};
});

const confirmedBooking: BookingResponseDTO = {
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

describe("BookingStatusPage", () => {
	beforeEach(() => {
		mockBookingQuery = {
			data: undefined,
			isLoading: false,
			error: null,
		};
	});

	it("shows booking details when loaded", () => {
		mockBookingQuery.data = confirmedBooking;

		renderWithProviders(<BookingStatusPage />);

		expect(screen.getByText("Booking Status")).toBeInTheDocument();
		expect(screen.getByText("XYZ789")).toBeInTheDocument();
		expect(screen.getByText("LH1234")).toBeInTheDocument();
	});

	it("shows cancel button when booking is cancellable", () => {
		mockBookingQuery.data = {
			...confirmedBooking,
			cancellable: true,
			status: "CONFIRMED",
		};

		renderWithProviders(<BookingStatusPage />);

		expect(
			screen.getByRole("button", { name: /cancel booking/i }),
		).toBeInTheDocument();
	});

	it("hides cancel button when booking is not cancellable", () => {
		mockBookingQuery.data = { ...confirmedBooking, cancellable: false };

		renderWithProviders(<BookingStatusPage />);

		expect(
			screen.queryByRole("button", { name: /cancel booking/i }),
		).not.toBeInTheDocument();
	});

	it("hides cancel button when booking is already cancelled", () => {
		mockBookingQuery.data = {
			...confirmedBooking,
			cancellable: true,
			status: "CANCELLED",
		};

		renderWithProviders(<BookingStatusPage />);

		expect(
			screen.queryByRole("button", { name: /cancel booking/i }),
		).not.toBeInTheDocument();
	});

	it("shows error alert when booking fails to load", () => {
		mockBookingQuery.error = new Error("Not found");

		renderWithProviders(<BookingStatusPage />);

		expect(
			screen.getByText("Booking not found or unable to load."),
		).toBeInTheDocument();
	});
});
