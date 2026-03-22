import type { CustomerConfig, AppConfig } from "@/models/customerConfig";
import { type ThemeMode, DEFAULT_THEME_MODE } from "@/consts/themeMode";

type GlobModule = { default: CustomerConfig };
type GlobModules = Record<string, GlobModule>;

const configModules: GlobModules = import.meta.glob(
  "/customer-config/*/config.json",
  { eager: true },
) as GlobModules;

const extractThemeMode = (path: string): ThemeMode => {
  const match = path.match(/customer-config\/([^/]+)\/config\.json$/);
  return match ? match[1] : DEFAULT_THEME_MODE;
};

const CUSTOMER_CONFIGS: Record<ThemeMode, CustomerConfig> = Object.entries(
  configModules,
).reduce(
  (acc, [path, module]) => {
    const mode = extractThemeMode(path);
    acc[mode] = module.default;
    return acc;
  },
  {} as Record<ThemeMode, CustomerConfig>,
);

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

export const getAllCustomerConfigs = (): Record<ThemeMode, CustomerConfig> => {
  return CUSTOMER_CONFIGS;
};

export const mergeCustomerConfig = (
  baseConfig: CustomerConfig,
  overrideConfig: Partial<CustomerConfig>,
): CustomerConfig => {
  let mergedApp: AppConfig | undefined = undefined;
  if (baseConfig.app || overrideConfig.app) {
    const base: Partial<AppConfig> = baseConfig.app || {};
    const override: Partial<AppConfig> = overrideConfig.app || {};

    mergedApp = {
      title: override.title ?? base.title ?? "",
      defaultLanguage: override.defaultLanguage ?? base.defaultLanguage ?? "en",
      defaultLocale: override.defaultLocale ?? base.defaultLocale ?? "en-US",
      supportedLanguages: override.supportedLanguages ??
        base.supportedLanguages ?? ["en"],
      localStorageKey:
        override.localStorageKey ?? base.localStorageKey ?? "mucdeb",
      localStorageDefaultExpiryDays:
        override.localStorageDefaultExpiryDays ??
        base.localStorageDefaultExpiryDays ??
        30,
    };
  }

  return {
    customer: overrideConfig.customer || baseConfig.customer,
    app: mergedApp,
    theme: {
      palette: {
        ...baseConfig.theme.palette,
        ...overrideConfig.theme?.palette,
        primary:
          overrideConfig.theme?.palette?.primary ||
          baseConfig.theme.palette?.primary,
        secondary:
          overrideConfig.theme?.palette?.secondary ||
          baseConfig.theme.palette?.secondary,
        text: {
          ...baseConfig.theme.palette?.text,
          ...overrideConfig.theme?.palette?.text,
        },
      },
      typography: {
        ...baseConfig.theme.typography,
        ...overrideConfig.theme?.typography,
      },
      components: {
        ...baseConfig.theme.components,
        ...overrideConfig.theme?.components,
      },
      fonts: overrideConfig.theme?.fonts || baseConfig.theme.fonts,
    },
    assets: overrideConfig.assets || baseConfig.assets,
    manifest: overrideConfig.manifest || baseConfig.manifest,
  };
};

export const resolveLogoPath = (
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

export const getAppConfig = (mode: ThemeMode): AppConfig | undefined => {
  return getCustomerConfig(mode).app;
};

export const loadCustomerFonts = (mode: ThemeMode): void => {
  const hasDOM =
    typeof (globalThis as { window?: unknown }).window !== "undefined";
  if (!hasDOM) return;

  const config = getCustomerConfig(mode);
  const customFonts = config.theme.fonts?.customFonts;
  if (!customFonts || customFonts.length === 0) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = (globalThis as any).document;

  const existingStyle = doc.getElementById("customer-fonts");
  if (existingStyle) {
    existingStyle.remove();
  }

  const style = doc.createElement("style");
  style.id = "customer-fonts";

  const fontFaceRules = customFonts
    .map((font) => {
      const srcEntries = font.src
        .map((s) => `url('${s.url}') format('${s.format}')`)
        .join(", ");
      return `@font-face {
        font-family: '${font.family}';
        src: ${srcEntries};
        font-weight: ${font.weight};
        font-style: ${font.style};
        font-display: ${font.display};
      }`;
    })
    .join("\n");

  style.textContent = fontFaceRules;
  doc.head.appendChild(style);
};
