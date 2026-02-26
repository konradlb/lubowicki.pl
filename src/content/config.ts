import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.object({
			pl: z.string(),
			en: z.string(),
		}),
		excerpt: z.object({
			pl: z.string(),
			en: z.string(),
		}),
		date: z.string(),
		tags: z.array(z.string()),
		category: z.string(),
	}),
});

export const collections = { projects };
