import { z, defineCollection } from 'astro:content';

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(), // Null or missing implies "Present"
    category: z.enum(['Professional Work', 'Non-Formal Education']),
    order: z.number().default(99), // Used to sort them manually if dates aren't enough
  })
});
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    tags: z.array(z.string()),
    metrics: z.array(z.string()).optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  })
});

const skills = defineCollection({
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    order: z.number().default(99),
  })
});

export const collections = {
  'experience': experience,
  'projects': projects,
  'skills': skills,
};
