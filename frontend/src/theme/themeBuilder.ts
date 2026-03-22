import { createTheme, type Theme } from "@lsy-netline/netline-ui";
import { type ThemeMode, DEFAULT_THEME_MODE } from "@/consts/themeMode";
import {
  getCustomerConfig,
  getAvailableThemeModes,
  mergeCustomerConfig,
} from "@/utils/customerConfigLoader";
import type { CustomerConfig } from "@/models/customerConfig";

export const buildThemeFromConfig = (mode: ThemeMode): Theme => {
  const config = getCustomerConfig(mode);

  const themeOptions: Record<string, unknown> = {
    palette: config.theme.palette as Theme["palette"],
    typography: config.theme.typography as Theme["typography"],
  };
  if (config.theme.components) {
    themeOptions.components = config.theme.components as Theme["components"];
  }

  return createTheme(themeOptions);
};

export const getBaseThemeConfig = (): CustomerConfig => {
  return getCustomerConfig(DEFAULT_THEME_MODE);
};

/** Global component style overrides applied to every theme. */
const getComponentOverrides = () => ({
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
      }),
    },
  },
});

export const buildInheritedTheme = (mode: ThemeMode): Theme => {
  const baseConfig = getBaseThemeConfig();
  const customerConfig = getCustomerConfig(mode);

  const config =
    mode === DEFAULT_THEME_MODE
      ? baseConfig
      : mergeCustomerConfig(baseConfig, customerConfig);

  const themeOptions: Record<string, unknown> = {
    palette: config.theme.palette as Theme["palette"],
    typography: config.theme.typography as Theme["typography"],
    components: {
      ...getComponentOverrides(),
      ...(config.theme.components as Theme["components"]),
    },
  };

  return createTheme(themeOptions);
};

export const getAllThemes = (): Record<ThemeMode, Theme> => {
  const availableModes = getAvailableThemeModes();
  return availableModes.reduce(
    (acc, mode) => {
      acc[mode] = buildInheritedTheme(mode);
      return acc;
    },
    {} as Record<ThemeMode, Theme>,
  );
};
