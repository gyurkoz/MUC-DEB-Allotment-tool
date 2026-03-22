export interface CustomerInfo {
  id: string;
  name: string;
  displayName: string;
  code?: string;
  description?: string;
}

export interface AppConfig {
  title: string;
  defaultLanguage: string;
  defaultLocale: string;
  supportedLanguages: string[];
  localStorageKey: string;
  localStorageDefaultExpiryDays: number;
}

export interface ColorConfig {
  main: string;
  dark?: string;
  light?: string;
  contrastText?: string;
}

export interface TextColorConfig {
  primary?: string;
  secondary?: string;
  disabled?: string;
}

export interface PaletteConfig {
  primary?: ColorConfig;
  secondary?: ColorConfig;
  text?: TextColorConfig;
}

export interface TypographyVariant {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string | number;
  textTransform?: string;
}

export interface TypographyConfig {
  fontFamily?: string;
  h1?: TypographyVariant;
  h2?: TypographyVariant;
  h3?: TypographyVariant;
  h4?: TypographyVariant;
  h5?: TypographyVariant;
  h6?: TypographyVariant;
  body1?: TypographyVariant;
  body2?: TypographyVariant;
  button?: TypographyVariant;
  subtitle1?: TypographyVariant;
  subtitle2?: TypographyVariant;
}

export interface FontSource {
  url: string;
  format: string;
}

export interface CustomFont {
  family: string;
  src: FontSource[];
  weight: number | string;
  style: string;
  display: string;
}

export interface FontsConfig {
  customFonts?: CustomFont[];
}

export interface ThemeOverrides {
  palette?: PaletteConfig;
  typography?: TypographyConfig;
  components?: Record<string, unknown>;
  fonts?: FontsConfig;
}

export interface LogoAssets {
  light: string | null;
  dark: string | null;
}

export interface IconAssets {
  favicon: string;
  appleTouchIcon: string;
  pwaIcons: string[];
}

export interface AssetsConfig {
  logo: LogoAssets;
  icons: IconAssets;
}

export interface ManifestConfig {
  name: string;
  shortName: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
}

export interface CustomerConfig {
  customer: CustomerInfo;
  app?: AppConfig;
  theme: ThemeOverrides;
  assets: AssetsConfig;
  manifest: ManifestConfig;
}
