// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: process.env.ASTRO_SITE || "http://localhost:4321",
	image: {
		domains: ['gravatar.com'],
		responsiveStyles: true,
    layout: 'constrained',
	},
	integrations: [
		tailwind({
			nesting: true,
		}),
		sitemap(),
	],
});
