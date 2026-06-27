import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: postSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: postSchema,
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: postSchema.extend({
    rating: z.number().min(0).max(10).optional(),
    subject: z.string().optional(),
  }),
});

const benchmarks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/benchmarks' }),
  schema: postSchema.extend({
    models: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file('./src/content/projects/projects.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'wip', 'archived']).default('active'),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    blog: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, notes, reviews, benchmarks, projects };
