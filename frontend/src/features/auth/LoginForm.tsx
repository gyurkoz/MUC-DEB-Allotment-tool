import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	TextField,
	Button,
	Alert,
	Box,
	CircularProgress,
} from "@lsy-netline/netline-ui";
import { isAxiosError } from "axios";
import { loginSchema, type LoginFormData } from "./login.schema";
import { useAuth } from "@/hooks/useAuth";
import { useLogin } from "@/api/generated/auth/auth";

export function LoginForm() {
	const { login } = useAuth();
	const loginMutation = useLogin();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginFormData) => {
		loginMutation.mutate(
			{ data: { username: data.username, password: data.password } },
			{
				onSuccess: (response) => {
					login(response.token, {
						id: response.user.id,
						username: response.user.username ?? "",
						email: response.user.email,
					});
				},
			},
		);
	};

	const errorMessage = loginMutation.error
		? isAxiosError(loginMutation.error) &&
			loginMutation.error.response?.status === 401
			? "Invalid username or password"
			: isAxiosError(loginMutation.error)
				? "Login failed. Please try again."
				: "Unable to connect to server."
		: null;

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
			data-testid="login-form"
		>
			{errorMessage && (
				<Alert severity="error" data-testid="login-error">
					{errorMessage}
				</Alert>
			)}

			<TextField
				{...register("username")}
				label="Username"
				autoComplete="username"
				autoFocus
				error={!!errors.username}
				helperText={errors.username?.message}
				data-testid="username-input"
			/>

			<TextField
				{...register("password")}
				label="Password"
				type="password"
				autoComplete="current-password"
				error={!!errors.password}
				helperText={errors.password?.message}
				data-testid="password-input"
			/>

			<Button
				type="submit"
				variant="contained"
				size="large"
				disabled={loginMutation.isPending}
				data-testid="login-button"
			>
				{loginMutation.isPending ? <CircularProgress size={24} /> : "Login"}
			</Button>
		</Box>
	);
}
