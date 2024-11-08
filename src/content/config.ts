import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    originalUrl: z.string().optional()
  })
});

export const collections = {
  blog: blogCollection
}