import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

/** @type {import("prettier").Config} */
export default defineConfig({
  redirects: {
    "/pricing": "/services",
  },
  components: ["@astro/elements"],
  integrations: [tailwind()],
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
});
