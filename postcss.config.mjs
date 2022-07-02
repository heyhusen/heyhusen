import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nesting from 'tailwindcss/nesting';
import cssnano from 'cssnano';

const mode = process.env.HUGO_ENVIRONMENT;
const prod = mode === 'production';

const config = {
	plugins: [
		nesting(),
		tailwindcss(),
		autoprefixer(),

		prod &&
			cssnano({
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			}),
	],
};

export default config;
