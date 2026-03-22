import { use } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@lsy-netline/netline-ui";
import { ThemeContext } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLayout } from "@/components/AppLayout";
import { LoginPage } from "@/features/auth/LoginPage";
import { FlightSearchPage } from "@/features/flight-search/FlightSearchPage";
import { FlightSelectPage } from "@/features/flight-select/FlightSelectPage";
import { PassengerDataPage } from "@/features/passenger-data/PassengerDataPage";
import { ConfirmationPage } from "@/features/confirmation/ConfirmationPage";
import { BookingStatusPage } from "@/features/booking-status/BookingStatusPage";

function AppContent() {
	const { theme } = use(ThemeContext)!;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						{/* Public routes */}
						<Route path="/login" element={<LoginPage />} />
						<Route path="/booking/:bookingId" element={<BookingStatusPage />} />

						{/* Protected routes with app layout */}
						<Route
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}
						>
							<Route index element={<Navigate to="/search" replace />} />
							<Route path="/search" element={<FlightSearchPage />} />
							<Route path="/search/:date" element={<FlightSelectPage />} />
							<Route path="/book/:flightId" element={<PassengerDataPage />} />
							<Route
								path="/confirmation/:bookingId"
								element={<ConfirmationPage />}
							/>
						</Route>

						{/* Fallback */}
						<Route path="*" element={<Navigate to="/login" replace />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default function App() {
	return <AppContent />;
}
