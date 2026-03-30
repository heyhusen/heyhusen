// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost:4321",

  image: {
      domains: ['gravatar.com'],
      responsiveStyles: true,
  layout: 'constrained',
	},

  integrations: [
      sitemap(),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
