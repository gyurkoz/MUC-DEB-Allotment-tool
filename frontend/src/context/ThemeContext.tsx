import {
	createContext,
	useState,
	useEffect,
	type FC,
	type ReactNode,
} from "react";
import { type Theme } from "@lsy-netline/netline-ui";
import { getAllThemes } from "@/theme";
import { type ThemeMode, DEFAULT_THEME_MODE } from "@/consts/themeMode";
import {
	getAvailableThemeModes,
	getAppConfig,
	loadCustomerFonts,
} from "@/utils/customerConfigLoader";
import type { AppConfig } from "@/models/customerConfig";

interface ThemeContextValue {
	themeMode: ThemeMode;
	theme: Theme;
	appConfig: AppConfig | undefined;
	setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
	undefined,
);

const themeMap: Record<ThemeMode, Theme> = getAllThemes();

const getDefaultThemeMode = (envTheme: string | undefined): ThemeMode => {
	if (!envTheme) return DEFAULT_THEME_MODE;
	const normalized = envTheme.toLowerCase();
	const availableModes = getAvailableThemeModes();
	return availableModes.includes(normalized) ? normalized : DEFAULT_THEME_MODE;
};

const THEME_STORAGE_KEY = "mucdeb_theme_mode";

interface ThemeContextProviderProps {
	children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
	children,
}) => {
	const getInitialTheme = (): ThemeMode => {
		const stored = localStorage.getItem(THEME_STORAGE_KEY);
		if (stored && getAvailableThemeModes().includes(stored)) {
			return stored;
		}
		return getDefaultThemeMode(import.meta.env.DEFAULT_THEME);
	};

	const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialTheme);

	const setThemeMode = (mode: ThemeMode) => {
		localStorage.setItem(THEME_STORAGE_KEY, mode);
		setThemeModeState(mode);
	};

	useEffect(() => {
		loadCustomerFonts(themeMode);
	}, [themeMode]);

	const theme = themeMap[themeMode];
	const appConfig = getAppConfig(themeMode);

	const value: ThemeContextValue = {
		themeMode,
		theme,
		appConfig,
		setThemeMode,
	};

	return <ThemeContext value={value}>{children}</ThemeContext>;
};
