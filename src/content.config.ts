import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

/**
 * Blog posts live in `src/content/blog/`, either as `<slug>.md` or as a
 * folder `<slug>/index.md` with images beside it. The folder form lets a post
 * reference its images with relative paths: `![Diagram](./diagram.png)`.
 *
 * `draft: true` builds the post at its URL but keeps it out of every listing
 * (nav dropdown, /blog, front page, RSS) and marks it noindex, so you can share
 * the link for proofreading. Flip it to `false` (or drop it) to publish.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** Portfolio entries work the same way: `<slug>.md` or `<slug>/index.md`. */
const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

/**
 * Co-presenters live in one file, `src/content/people.yaml`, keyed by ID.
 * Talks name them by that ID under `with:`. Each person gets an entry on
 * /speakers listing their `links` and every talk they gave with Thomas.
 */
const people = defineCollection({
  loader: file("./src/content/people.yaml"),
  schema: z.object({
    name: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

/**
 * Talks: one file per talk. `date` sorts the list; set `when` to override how
 * the date is shown when only the month or year is known ("Nov 2013").
 * A talk with body text below the front matter gets its own page; one without
 * links straight to its video or slides from the listing.
 */
const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    when: z.string().optional(),
    location: z.string().optional(),
    with: z.array(reference("people")).default([]),
    video: z.string().url().optional(),
    slides: z.string().url().optional(),
    url: z.string().url().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, portfolio, people, talks };
