import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import { createHash } from "node:crypto";
import { OpenGraphImage } from "../../../components/OpenGraphImage";
import { generateOpenGraphImage } from "../../../utils/generate-og-image";

async function getTitle(slug: string): Promise<string> {
	const article = await getEntry('articles', slug)

	if (article) {
		return article.data.title
	}

	return slug.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

async function getAuthor() {
	const config = await getEntry("configurations", "main");
	if (!config) {
		throw new Error('Config is not found!')
	}

	const {
		data: {
			author: {
				name,
				email
			}
		},
	} = config

	return {
		name,
		gravatarHash: createHash("md5").update(email).digest("hex")
	}
}

export async function getStaticPaths() {
	const allArticles = await getCollection("articles");

	return allArticles.map((item) => {
		return {
			params: {
				slug: item.slug
			},
		};
	});
}

export const GET: APIRoute = async ({ params }) => {
	const slug = String(params.slug);
	const author = await getAuthor()

	const png = await generateOpenGraphImage(OpenGraphImage({
		type: 'article',
		title: await getTitle(slug),
		fontSize: '4.5rem',
		author: author.name,
		gravatarHash: author.gravatarHash
	}));

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
