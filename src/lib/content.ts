import { getCollection, type CollectionEntry } from "astro:content";

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

export type Talk = CollectionEntry<"talks">;

export async function getAllTalks() {
  const talks = await getCollection("talks");
  return talks.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTalks() {
  return (await getAllTalks()).filter((talk) => !talk.data.draft);
}

/** A talk gets its own page only when there is body text to put on it. */
export function hasWriteup(talk: Talk) {
  return (talk.body ?? "").trim().length > 0;
}

/** Where a talk's title links: its page, else video, slides, or the event page. */
export function talkHref(talk: Talk) {
  if (hasWriteup(talk)) return `/talks/${talk.id}`;
  return talk.data.video ?? talk.data.slides ?? talk.data.url;
}

/**
 * How a talk is labelled in listings: the event with its year, e.g.
 * "Google I/O 2025". Session titles are long, so they sit underneath.
 */
export function talkEvent(talk: Talk) {
  const { event, date } = talk.data;
  return /\b(19|20)\d{2}\b/.test(event) ? event : `${event} ${date.getUTCFullYear()}`;
}

/** Talks grouped by year, newest year first; input must already be sorted. */
export function groupTalksByYear(talks: Talk[]) {
  const groups = new Map<number, Talk[]>();
  for (const talk of talks) {
    const year = talk.data.date.getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), talk]);
  }
  return [...groups.entries()];
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

const monthFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  timeZone: "UTC",
});

export function formatDate(date: Date) {
  return dateFormat.format(date);
}

/** Talks show month and year unless the entry overrides it with `when`. */
export function formatTalkDate(talk: Talk) {
  return talk.data.when ?? monthFormat.format(talk.data.date);
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
