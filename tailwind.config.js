
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');
const form = require('@tailwindcss/forms');

module.exports = {
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
		content: [
			'./assets/**/*.js',
			'./layouts/**/*.html',
			'./content/**/*.{html,md}',
		],
	},
	corePlugins: {
		container: false,
	},
	theme: {
		fontFamily: {
			sans: ['Lexend Deca', 'sans-serif'],
			mono: ['JetBrains Mono', 'monospace'],
		},
		colors: {
			primary: colors.white,
			secondary: colors.coolGray['900'],
			accent: colors.blue['700'],
			transparent: 'transparent',
			gray: colors.coolGray,
			success: colors.emerald['200'],
			error: colors.red['200'],
		},
		screens: {},
		fontSize: {
			'xs': [
				'0.75rem', {
					lineHeight: 1.5,
				},
			],
			'sm': [
				'0.875rem', {
					lineHeight: 1.5,
				},
			],
			'base': [
				'1rem', {
					lineHeight: 1.5,
				},
			],
			'lg': [
				'1.125rem', {
					lineHeight: 1.5,
				},
			],
			'xl': [
				'1.25rem', {
					lineHeight: 1.375,
				}
			],
			'2xl': [
				'1.5rem', {
					lineHeight: 1.375,
				},
			],
			'3xl': [
				'1.875rem', {
					lineHeight: 1.375,
				},
			],
			'4xl': [
				'2.25rem', {
					lineHeight: 1.375,
				},
			],
			'5xl': [
				'3rem', {
					lineHeight: 1.375,
				},
			],
			'6xl': [
				'3.75rem', {
					lineHeight: 1.25,
				},
			],
			'7xl': [
				'4.5rem', {
					lineHeight: 1.25,
				},
			],
			'8xl': [
				'6rem', {
					lineHeight: 1.25,
				},
			],
			'9xl': [
				'8rem', {
					lineHeight: 1.25,
				},
			],
		},
		extend: {
			spacing: {
				4.5: '1.125rem',
				9.5: '2.375rem',
				13: '3.25rem',
				15: '3.75rem',
				17: '4.25rem',
				18: '4.5rem',
				19: '4.75rem',
				21: '5.25rem',
				22: '5.5rem',
				25: '6.125rem',
				26: '6.5rem',
				29: '7.25rem',
				30: '7.5rem',
				34: '8.5rem',
				42: '10.5rem',
			},
			borderWidth: {
				'0.5': '0.5px',
			}
		}
	},
	plugins: [typography, form],
};
