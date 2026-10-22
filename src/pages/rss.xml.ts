import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getPosts } from "../lib/content";

/**
 * Full-content feed. Syndication tools (dev.to's RSS import, Zapier/IFTTT
 * recipes, newsletter importers) read `content:encoded`, so each item carries
 * the post rendered exactly as the site renders it (highlighted code, built
 * image paths), with root-relative links and images made absolute.
 */
export async function GET(context: APIContext) {
  const site = context.site ?? new URL("https://inlined.dev");
  const posts = await getPosts();
  const container = await AstroContainer.create();

  const items = [];
  for (const post of posts) {
    const { Content } = await render(post);
    const html = await container.renderToString(Content);
    items.push({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog/${post.id}`,
      categories: post.data.tags,
      content: absolutize(html, site),
    });
  }

  return rss({
    title: "inlined.dev",
    description: "Writing by Thomas Bouldin.",
    site,
    trailingSlash: false,
    items,
    customData: "<language>en-us</language>",
  });
}

/** Rewrites root-relative `src`/`href` attributes to absolute URLs. */
function absolutize(html: string, site: URL) {
  return html.replace(/(src|href)="\/(?!\/)([^"]*)"/g, (_, attr, path) => `${attr}="${new URL(path, site)}"`);
}
