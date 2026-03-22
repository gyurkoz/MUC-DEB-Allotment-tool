/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEFAULT_THEME: string;
  readonly BUILD_TIME: string;
  readonly VITE_ENVIRONMENT: string;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
