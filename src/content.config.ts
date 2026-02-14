import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const techPosts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/markdowns/tech" }), // `base` doesn't use relative path
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      slug: z.string(),
      thumbnail: image(),
    }),
});

const lifePosts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/markdowns/love" }),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      slug: z.string(),
      thumbnail: image(),
    }),
});

const aboutMe = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/markdowns/about_me" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
  }),
});

export const collections = { techPosts, lifePosts, aboutMe };
