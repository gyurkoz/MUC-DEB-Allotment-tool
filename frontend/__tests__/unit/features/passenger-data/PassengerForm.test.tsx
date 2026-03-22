import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { PassengerForm } from "@/features/passenger-data/PassengerForm";

describe("PassengerForm", () => {
	const mockOnSubmit = vi.fn();

	beforeEach(() => {
		mockOnSubmit.mockClear();
	});

	it("shows validation errors for empty required fields", async () => {
		renderWithProviders(<PassengerForm onSubmit={mockOnSubmit} />);

		// Dispatch a submit event to trigger React Hook Form validation
		const form = screen.getByTestId("passenger-form");
		form.dispatchEvent(
			new Event("submit", { bubbles: true, cancelable: true }),
		);

		await waitFor(() => {
			expect(screen.getByText(/u-number is required/i)).toBeInTheDocument();
			expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
			expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
			expect(screen.getByText(/email is required/i)).toBeInTheDocument();
		});

		expect(mockOnSubmit).not.toHaveBeenCalled();
	});

	it("shows validation error for invalid U-number format", async () => {
		const { user } = renderWithProviders(
			<PassengerForm onSubmit={mockOnSubmit} />,
		);

		await user.type(screen.getByTestId("u-number-input").querySelector("input")!, "ABC123");
		const form = screen.getByTestId("passenger-form");
		await user.click(form.querySelector("button[type=submit]") ?? form);

		await waitFor(() => {
			expect(
				screen.getByText(/must start with u followed by/i),
			).toBeInTheDocument();
		});
	});

	it("shows validation error for invalid email", async () => {
		const { user } = renderWithProviders(
			<PassengerForm onSubmit={mockOnSubmit} />,
		);

		await user.type(screen.getByTestId("u-number-input").querySelector("input")!, "U1234567");
		await user.type(screen.getByLabelText(/first name/i), "John");
		await user.type(screen.getByLabelText(/last name/i), "Doe");
		await user.type(screen.getByLabelText(/email/i), "a@b");
		await user.type(screen.getByLabelText(/phone number/i), "1234567890");

		const form = screen.getByTestId("passenger-form");
		await user.click(form.querySelector("button[type=submit]") ?? form);

		await waitFor(() => {
			expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
		});
	});

	it("calls onSubmit with form data when valid", async () => {
		const { user } = renderWithProviders(
			<PassengerForm onSubmit={mockOnSubmit} />,
		);

		await user.type(screen.getByTestId("u-number-input").querySelector("input")!, "U1234567");
		await user.type(screen.getByLabelText(/first name/i), "John");
		await user.type(screen.getByLabelText(/last name/i), "Doe");
		await user.type(screen.getByLabelText(/email/i), "john@example.com");
		await user.type(screen.getByLabelText(/phone number/i), "12345678901");

		const form = screen.getByTestId("passenger-form");
		form.dispatchEvent(
			new Event("submit", { bubbles: true, cancelable: true }),
		);

		await waitFor(() => {
			expect(mockOnSubmit).toHaveBeenCalledWith(
				{
					uNumber: "U1234567",
					firstName: "John",
					lastName: "Doe",
					email: "john@example.com",
					phonePrefix: "+49",
					phoneNumber: "12345678901",
				},
				expect.anything(),
			);
		});
	});

	it("reports validity changes to parent", () => {
		const mockOnValidityChange = vi.fn();
		renderWithProviders(
			<PassengerForm
				onSubmit={mockOnSubmit}
				onValidityChange={mockOnValidityChange}
			/>,
		);

		// Initially form is not valid (empty fields)
		expect(mockOnValidityChange).toHaveBeenCalledWith(false);
	});
});
