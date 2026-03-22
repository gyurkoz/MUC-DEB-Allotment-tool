import { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@lsy-netline/netline-ui";
import { MemoryRouter } from "react-router-dom";
import { AuthContext, type AuthContextValue } from "@/context/AuthContext";

const theme = createTheme();

const defaultAuth: AuthContextValue = {
	user: null,
	token: null,
	isAuthenticated: false,
	isLoading: false,
	login: vi.fn(),
	logout: vi.fn(),
};

interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
	route?: string;
	auth?: Partial<AuthContextValue>;
}

export function renderWithProviders(
	ui: ReactElement,
	options: ExtendedRenderOptions = {},
) {
	const { route = "/", auth, ...renderOptions } = options;
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
	});
	const authValue = { ...defaultAuth, ...auth };

	function Wrapper({ children }: { children: React.ReactNode }) {
		return (
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<AuthContext value={authValue}>
						<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
					</AuthContext>
				</ThemeProvider>
			</QueryClientProvider>
		);
	}

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
