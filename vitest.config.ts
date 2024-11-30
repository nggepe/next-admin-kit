import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      provider: "v8",
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "node_modules",
        "src/types",
        "src/app/layout.tsx",
        "src/**/*.test.ts", // Exclude .test.ts files
        "src/**/*.test.tsx", // Exclude .test.tsx files
        "src/**/*.stories.tsx" // Exclude .test.tsx files
      ]
    },
    globals: true,
    setupFiles: "./vitest.setup.ts"
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
