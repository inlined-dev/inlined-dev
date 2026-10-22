import { getCollection } from "astro:content";

/**
 * Every entry is built and reachable at its URL, drafts included, so a post
 * can be shared for proofreading before it goes public. Entries marked
 * `draft: true` are left out of every listing: the nav dropdowns, the index
 * pages, the front page, and the RSS feed. They also carry a noindex tag.
 */

export async function getAllPosts() {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPosts() {
  return (await getAllPosts()).filter((post) => !post.data.draft);
}

export async function getAllProjects() {
  const projects = await getCollection("portfolio");
  return projects.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

export async function getProjects() {
  return (await getAllProjects()).filter((project) => !project.data.draft);
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: Date) {
  return dateFormat.format(date);
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
