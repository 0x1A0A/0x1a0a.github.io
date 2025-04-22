// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/tests_output/**", "**/nightwatch/**", "**/logs/**"],
      },
    },
  },
  build: { assets: "astro_assets" },
});
