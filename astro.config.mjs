// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://inlined.dev",
  trailingSlash: "ignore",
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
});
