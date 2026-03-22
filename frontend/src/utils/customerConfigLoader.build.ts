import type { CustomerConfig } from "../models/customerConfig";
import { type ThemeMode, DEFAULT_THEME_MODE } from "../consts/themeMode";

import defaultConfig from "../../customer-config/default/config.json";
import lufthansaConfig from "../../customer-config/lufthansa/config.json";

const CUSTOMER_CONFIGS: Record<ThemeMode, CustomerConfig> = {
  default: defaultConfig as CustomerConfig,
  lufthansa: lufthansaConfig as CustomerConfig,
};

export const getAvailableThemeModes = (): ThemeMode[] => {
  return Object.keys(CUSTOMER_CONFIGS);
};

export const getCustomerConfig = (mode: ThemeMode): CustomerConfig => {
  const config = CUSTOMER_CONFIGS[mode];
  if (!config) {
    console.warn(
      `No configuration found for theme mode: ${mode}. Falling back to default.`,
    );
    return CUSTOMER_CONFIGS[DEFAULT_THEME_MODE];
  }
  return config;
};

const resolveLogoPath = (
  logoPath: string | null,
  customerId: string,
): string | null => {
  if (!logoPath) return null;
  if (logoPath.startsWith("./")) {
    return `/customer-config/${customerId}/${logoPath.substring(2)}`;
  }
  return logoPath;
};

export const getCustomerLogos = (
  mode: ThemeMode,
): { light: string | null; dark: string | null } => {
  const config = getCustomerConfig(mode);
  const customerId = config.customer.id;
  return {
    light: resolveLogoPath(config.assets.logo.light, customerId),
    dark: resolveLogoPath(config.assets.logo.dark, customerId),
  };
};
