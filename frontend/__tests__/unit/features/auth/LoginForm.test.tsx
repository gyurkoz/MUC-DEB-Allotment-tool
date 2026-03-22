import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { LoginForm } from "@/features/auth/LoginForm";

// Configurable mock state
let mockLoginMutation = {
	mutate: vi.fn(),
	isPending: false,
	error: null as unknown,
};

vi.mock("@/api/generated/auth/auth", () => ({
	useLogin: () => mockLoginMutation,
}));

vi.mock("@/hooks/useAuth", () => ({
	useAuth: () => ({
		login: vi.fn(),
		logout: vi.fn(),
		user: null,
		token: null,
		isAuthenticated: false,
		isLoading: false,
	}),
}));

describe("LoginForm", () => {
	beforeEach(() => {
		mockLoginMutation = {
			mutate: vi.fn(),
			isPending: false,
			error: null,
		};
	});

	it("shows validation errors when submitting empty form", async () => {
		const { user } = renderWithProviders(<LoginForm />);

		await user.click(screen.getByRole("button", { name: /login/i }));

		await waitFor(() => {
			expect(screen.getByText("Username is required")).toBeInTheDocument();
			expect(screen.getByText("Password is required")).toBeInTheDocument();
		});
	});

	it("calls mutate with username and password when form is valid", async () => {
		const { user } = renderWithProviders(<LoginForm />);

		await user.type(screen.getByLabelText(/username/i), "testuser");
		await user.type(screen.getByLabelText(/password/i), "secret123");
		await user.click(screen.getByRole("button", { name: /login/i }));

		await waitFor(() => {
			expect(mockLoginMutation.mutate).toHaveBeenCalledWith(
				{ data: { username: "testuser", password: "secret123" } },
				expect.objectContaining({ onSuccess: expect.any(Function) }),
			);
		});
	});

	it("shows error message for 401 response", () => {
		const axiosError = Object.assign(new Error("Unauthorized"), {
			isAxiosError: true,
			response: { status: 401 },
		});
		mockLoginMutation.error = axiosError;

		renderWithProviders(<LoginForm />);

		expect(
			screen.getByText("Invalid username or password"),
		).toBeInTheDocument();
	});

	it("shows generic error for non-401 axios errors", () => {
		const axiosError = Object.assign(new Error("Server Error"), {
			isAxiosError: true,
			response: { status: 500 },
		});
		mockLoginMutation.error = axiosError;

		renderWithProviders(<LoginForm />);

		expect(
			screen.getByText("Login failed. Please try again."),
		).toBeInTheDocument();
	});

	it("shows connection error for non-axios errors", () => {
		mockLoginMutation.error = new Error("Network error");

		renderWithProviders(<LoginForm />);

		expect(
			screen.getByText("Unable to connect to server."),
		).toBeInTheDocument();
	});

	it("disables submit button when isPending is true", () => {
		mockLoginMutation.isPending = true;

		renderWithProviders(<LoginForm />);

		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
	});
});
