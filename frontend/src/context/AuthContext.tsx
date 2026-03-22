import { createContext, useState, type ReactNode } from "react";

interface User {
	id?: number;
	username: string;
	email?: string;
}

export interface AuthContextValue {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	login: (token: string, user: User) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
	undefined,
);

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [token, setToken] = useState<string | null>(() =>
		localStorage.getItem("auth_token"),
	);
	const [user, setUser] = useState<User | null>(() => {
		const stored = localStorage.getItem("auth_user");
		if (stored) {
			try {
				return JSON.parse(stored);
			} catch {
				return null;
			}
		}
		return null;
	});

	const login = (newToken: string, newUser: User) => {
		localStorage.setItem("auth_token", newToken);
		localStorage.setItem("auth_user", JSON.stringify(newUser));
		setToken(newToken);
		setUser(newUser);
	};

	const logout = () => {
		localStorage.removeItem("auth_token");
		localStorage.removeItem("auth_user");
		setToken(null);
		setUser(null);
	};

	const value: AuthContextValue = {
		user,
		token,
		isAuthenticated: !!token,
		isLoading: false,
		login,
		logout,
	};

	return <AuthContext value={value}>{children}</AuthContext>;
}
