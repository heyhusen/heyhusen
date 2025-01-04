import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import { OpenGraphImage } from "../../../components/OpenGraphImage";
import { generateOpenGraphImage } from "../../../utils/generate-og-image";

async function getTitle(slug: string): Promise<string> {
	const tag = await getEntry('tags', slug)

	if (tag) {
		return `Tag: ${tag.data.title}`
	}

	return `Tag: ${slug.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}`;
}

export async function getStaticPaths() {
	const allArticles = await getCollection("articles");
	const allTags = [...new Set(allArticles.map((aritcle) => aritcle.data.tags).flat())]

	return allTags.map((item) => {
		return {
			params: {
				slug: item.toLowerCase().replaceAll(" ", "-")
			},
		};
	});
}

export const GET: APIRoute = async ({ params }) => {
	const slug = String(params.slug);

	const png = await generateOpenGraphImage(OpenGraphImage({
		type: 'article',
		title: await getTitle(slug),
		fontSize: '6rem',
	}));

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
