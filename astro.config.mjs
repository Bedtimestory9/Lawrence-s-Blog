// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://lawrencesu.blog",
  output: "server",
  integrations: [react()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  markdown: {
    shikiConfig: {
      theme: "one-light",
    },
  },
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
});
