import { defineCollection, z } from "astro:content";
import type { Project } from "./entities";

const configurations = defineCollection({
	type: 'data',
	schema: z.object({
		site: z.object({
			title: z.string(),
			description: z.string(),
			formspree: z.string()
		}),
		author: z.object({
			name: z.string(),
			email: z.string().email(),
			social: z.object({
				linkedin: z.string(),
				github: z.string(),
				twitter: z.string()
			})
		}),
	})
})

const menus = defineCollection({
	type: 'data',
	schema: z.object({
		href: z.string(),
		name: z.string()
	})
})

const projects = defineCollection({
	type: 'content_layer',
	loader: async () => {
		const allProjects: Project[] = [
			{
				url: 'https://api.github.com/repos/heyhusen/esteros',
				image: '/src/assets/images/esteros/cover.png',
				accent: '#FCE7F3'
			},
			{
				url: 'https://api.github.com/repos/heyhusen/portpoliwo',
				image: '/src/assets/images/portpoliwo/cover.png',
				accent: '#E0E7FF'
			},
			{
				url: 'https://api.github.com/repos/heyhusen/website',
				image: null,
				accent: null,
			},
			{
				url: 'https://api.github.com/repos/heyhusen/ogigen',
				image: null,
				accent: null
			},
			{
				url: 'https://api.github.com/repos/heyhusen/archlinux-package-action',
				image: null,
				accent: null
			},
			{
				url: 'https://api.github.com/repos/heyhusen/aur-packages',
				image: null,
				accent: null
			}
		]
		const responses = await Promise.all(allProjects.map(async (project) => {
			const response = await fetch(project.url, {
				headers: {
					Authorization: `Bearer ${import.meta.env.GTIHUB_PERSONAL_TOKEN}`,
					Accept: 'application/vnd.github.v3+json'
				}
			})
			const data = await response.json()

			return {
				...data,
				...project,
				id: data.node_id
			}
		}))

		return responses
	},
	schema: z.object({
		id: z.string(),
		accent: z.string().nullable(),
		name: z.string(),
		description: z.string(),
		html_url: z.string(),
		image: z.string().nullable()
	})
})

const articles = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().nullable(),
		tags: z.array(z.string()),
		image: z.string(),
		date: z.date()
	})
})

const tags = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date()
	})
})

export const collections = {
	configurations,
	menus,
	projects,
	articles,
	tags
}
