/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const svgStubPlugin = {
  name: "svg-stub",
  transform(_code: string, id: string) {
    if (id.endsWith(".svg")) {
      return {
        code: 'export default ""; export const ReactComponent = () => null;',
        map: null,
      };
    }
  },
};

export default defineConfig({
  plugins: [react(), svgStubPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./__tests__/setup.ts"],
    include: ["__tests__/unit/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    server: {
      deps: {
        inline: ["@lsy-netline/netline-ui"],
      },
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "json-summary", "html"],
      exclude: [
        "node_modules/",
        "__tests__/",
        "**/*.d.ts",
        "**/*.config.*",
        "dist/",
        "src/api/generated/**",
        "src/api/models/**",
      ],
    },
  },
});
