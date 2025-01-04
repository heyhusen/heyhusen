import form from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'selector',
	theme: {
		fontFamily: {
			sans: ["Lexend Deca", "sans-serif"],
			mono: ["JetBrains Mono", "monospace"],
		},
		colors: {
			primary: colors.white,
			'dark-primary': colors.gray['200'],
			secondary: colors.gray["900"],
			'dark-secondary': colors.gray["950"],
			accent: colors.blue["700"],
			'dark-accent': colors.blue["500"],
			transparent: "transparent",
			gray: colors.gray,
			success: colors.emerald["200"],
			error: colors.red["200"],
		},
		screens: {
			sm: '320px',
			'2sm': '499px',
			'3sm': '550px',
			'4sm': '640px',
			md: '768px',
			'2md': '790px',
			lg: '1024px',
			xl: '1280px'
		},
		fontSize: {
			xs: [
				"0.75rem",
				{
					lineHeight: 1.5,
				},
			],
			sm: [
				"0.875rem",
				{
					lineHeight: 1.5,
				},
			],
			base: [
				"1rem",
				{
					lineHeight: 1.5,
				},
			],
			lg: [
				"1.125rem",
				{
					lineHeight: 1.5,
				},
			],
			xl: [
				"1.25rem",
				{
					lineHeight: 1.375,
				},
			],
			"2xl": [
				"1.5rem",
				{
					lineHeight: 1.375,
				},
			],
			"3xl": [
				"1.875rem",
				{
					lineHeight: 1.375,
				},
			],
			"4xl": [
				"2.25rem",
				{
					lineHeight: 1.375,
				},
			],
			"5xl": [
				"3rem",
				{
					lineHeight: 1.375,
				},
			],
			"6xl": [
				"3.75rem",
				{
					lineHeight: 1.25,
				},
			],
			"7xl": [
				"4.5rem",
				{
					lineHeight: 1.25,
				},
			],
			"8xl": [
				"6rem",
				{
					lineHeight: 1.25,
				},
			],
			"9xl": [
				"8rem",
				{
					lineHeight: 1.25,
				},
			],
		},
		extend: {
			spacing: {
				4.5: "1.125rem",
				9.5: "2.375rem",
				13: "3.25rem",
				15: "3.75rem",
				17: "4.25rem",
				18: "4.5rem",
				19: "4.75rem",
				21: "5.25rem",
				22: "5.5rem",
				25: "6.125rem",
				26: "6.5rem",
				29: "7.25rem",
				30: "7.5rem",
				34: "8.5rem",
				42: "10.5rem",
			},
			borderWidth: {
				0.5: "0.5px",
			},
		},
	},
	plugins: [form, typography],
	corePlugins: {
		container: false,
	},
};
