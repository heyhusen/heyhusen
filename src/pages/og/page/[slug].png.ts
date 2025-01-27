import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { OpenGraphImage } from "../../../components/OpenGraphImage";
import type { GenerateOpenGraphImageParam } from "../../../entities";
import { generateOpenGraphImage } from "../../../utils/generate-og-image";

function getType(slug: string): GenerateOpenGraphImageParam['type'] {
	if (!['home'].includes(slug)) {
		return 'page'
	}

	return 'home'
}

function getFontSize(slug: string): GenerateOpenGraphImageParam['fontSize'] {
	const rule: Record<string, string> = {
		home: '9.5rem',
		about: '12rem',
		project: '6.5rem',
		contact: '7.5rem',
		tags: '12rem'
	}

	if (rule[slug]) {
		return rule[slug]
	}

	return '5.5rem'
}

function getTitle(slug: string): string {
	const rule: Record<string, string> = {
		about: 'About me?',
		project: 'My selected projects.',
		article: 'Just sharing my thoughts.',
		contact: 'Want to say hello?'
	}

	if (rule[slug]) {
		return rule[slug]
	}

	return slug.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

export async function getStaticPaths() {
	const allMenus = await getCollection("menus");

	return [...allMenus.map((item) => {
		return {
			params: {
				slug: item.id.substring(2)
			},
		};
	}), {
		params: {
			slug: 'tags'
		}
	}];
}

export const GET: APIRoute = async ({ params }) => {
	const slug = String(params.slug);

	const png = await generateOpenGraphImage(OpenGraphImage({
		type: getType(slug),
		title: getTitle(slug),
		fontSize: getFontSize(slug)
	}));

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
