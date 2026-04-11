import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(), // Wspólny ID dla PL i EN
		lang: z.enum(['pl', 'en']), // Język wpisu
		title: z.string(),
		excerpt: z.string(),
		date: z.string(),
		tags: z.array(z.string()),
		category: z.string(),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(), // Wspólny ID dla PL i EN
		lang: z.enum(['pl', 'en']), // Język wpisu
		title: z.string(),
		excerpt: z.string(),
		date: z.string(),
		tags: z.array(z.string()),
		category: z.string(),
	}),
});

export const collections = { projects, blog };
