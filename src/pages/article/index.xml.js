import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";

export async function GET(context) {
	const config = await getEntry("configurations", "main");
	if (!config) {
		throw new Error("Config is not found!");
	}

	const allArticles = await getCollection("articles");

	return rss({
		title: config.data.site.title,
		description: config.data.site.description,
		site: context.site,
		items: allArticles.map((entry) => ({
			title: entry.data.title,
			pubDate: entry.data.date,
			description: entry.data.description,
			link: `/article/${entry.data.date.getFullYear()}/${entry.data.date.toLocaleString(
				"en-US",
				{
					month: "2-digit",
				}
			)}/${entry.data.date.toLocaleString("en-US", {
				day: "2-digit",
			})}/${entry.slug}/`,
		})),
	});
}
