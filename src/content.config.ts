import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const techPosts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/markdowns/tech" }), // `base` doesn't use relative path
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
  }),
});

export const collections = { techPosts };
