// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
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

  fonts: [
  	{
  		provider: fontProviders.fontsource(),
  		name: 'Lexend Deca',
  		cssVariable: '--font-lexend-deca',
  		weights: [200, 400, 600, 700],
  	},
		{
  		provider: fontProviders.fontsource(),
  		name: 'JetBrains Mono',
  		cssVariable: '--font-jetbrains-mono',
  		weights: [200, 400, 600, 700],
  	},
		{
  		provider: fontProviders.fontsource(),
  		name: 'Barlow',
  		cssVariable: '--font-barlow',
  		weights: [400, 700],
  		formats: ['woff']
  	},
		{
  		provider: fontProviders.fontsource(),
  		name: 'Outfit',
  		cssVariable: '--font-outfit',
  		weights: [400],
  		formats: ['woff']
  	}
  ]
});
