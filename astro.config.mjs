// @ts-check
import { defineConfig } from "astro/config";
import shortLinks from "./src/data/short-links.json" with { type: "json" };

export default defineConfig({
  site: "https://inlined.dev",
  trailingSlash: "ignore",
  // /r/<slug> short links for the resume PDF's footnotes (see src/data/short-links.json).
  redirects: Object.fromEntries(Object.entries(shortLinks).map(([slug, url]) => [`/r/${slug}`, url])),
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
});
