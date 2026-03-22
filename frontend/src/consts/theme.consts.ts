import {
  getCustomerConfig,
  getCustomerLogos,
  getAvailableThemeModes,
} from "@/utils/customerConfigLoader.build";
import { type ThemeMode, DEFAULT_THEME_MODE } from "./themeMode";

export { type ThemeMode, DEFAULT_THEME_MODE };

export interface ThemeLogoAssets {
  light: string | null;
  dark: string | null;
}

export interface ThemeManifestConfig {
  name: string;
  shortName: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  name: string;
  displayName: string;
  logo: ThemeLogoAssets;
  manifest: ThemeManifestConfig;
}

const buildThemeConfig = (mode: ThemeMode): ThemeConfig => {
  const customerConfig = getCustomerConfig(mode);
  const logos = getCustomerLogos(mode);

  return {
    mode,
    name: customerConfig.customer.name,
    displayName: customerConfig.customer.displayName,
    logo: logos,
    manifest: customerConfig.manifest,
  };
};

export const THEME_CONFIGS: Record<ThemeMode, ThemeConfig> =
  getAvailableThemeModes().reduce(
    (acc, mode) => {
      acc[mode] = buildThemeConfig(mode);
      return acc;
    },
    {} as Record<ThemeMode, ThemeConfig>,
  );
