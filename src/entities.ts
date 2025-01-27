import type { MarkdownHeading } from "astro";

export interface Project {
	url: string
	image: string | null
	accent: string | null
}

export interface TocItem extends MarkdownHeading {
	subheadings: TocItem[];
}

export interface Menu {
	href: string;
	name: string;
}

export interface GenerateOpenGraphImageParam {
	type: "home" | "page" | "article"
	fontSize: string;
	title?: string
	gravatarHash?: string
	author?: string
}
