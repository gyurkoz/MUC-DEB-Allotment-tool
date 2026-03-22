import { use } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress, Box } from "@lsy-netline/netline-ui";
import { AuthContext } from "@/context/AuthContext";

export interface ProtectedRouteProps {
	children: React.ReactNode;
	redirectTo?: string;
}

export function ProtectedRoute({
	children,
	redirectTo = "/login",
}: ProtectedRouteProps) {
	const authContext = use(AuthContext);
	const location = useLocation();

	if (!authContext) {
		throw new Error("ProtectedRoute must be used within AuthProvider");
	}

	const { isAuthenticated, isLoading } = authContext;

	if (isLoading) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<CircularProgress />
			</Box>
		);
	}

	if (!isAuthenticated) {
		return <Navigate to={redirectTo} state={{ from: location }} replace />;
	}

	return <>{children}</>;
}
