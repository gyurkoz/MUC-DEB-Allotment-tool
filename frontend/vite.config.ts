import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import http from "node:http";
import path from "path";

const ReactCompilerConfig = {
  /* React Compiler options */
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const DEFAULT_THEME = (
    env.DEFAULT_THEME ??
    env.VITE_DEFAULT_THEME ??
    "default"
  ).toLowerCase();

  return {
    envPrefix: ["DEFAULT_", "VITE_"],
    define: {
      "import.meta.env.DEFAULT_THEME": JSON.stringify(DEFAULT_THEME),
      "import.meta.env.BUILD_TIME": JSON.stringify(new Date().toISOString()),
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL || "http://localhost:8080",
          changeOrigin: true,
          agent: new http.Agent(),
        },
      },
    },
    preview: {
      port: 3050,
      strictPort: true,
    },
    base: "./",
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@customer-config": path.resolve(__dirname, "./customer-config"),
      },
    },
  };
});
