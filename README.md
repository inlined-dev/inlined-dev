# inlined.dev

Personal site for Thomas Bouldin. Built with [Astro](https://astro.build), content written in Markdown and compiled at build time, deployed to Firebase Hosting as static files.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run build` | Build the site into `dist/` and generate `dist/resume.pdf` |
| `npm run build:site` | Build without the PDF step |
| `npm run preview` | Serve the built `dist/` locally |
| `firebase deploy` | Deploy `dist/` to Firebase Hosting by hand (pushes to `main` deploy automatically) |

The PDF step drives headless Chromium through Playwright. On a fresh machine run `npx playwright install chromium` once, or set `CHROME_PATH` to an existing Chrome binary.

## Deploying

Every push to `main` builds the site and deploys it to Firebase Hosting (project `inlined-dev`) through `.github/workflows/deploy.yml`. Pull requests run the same build, without deploying, so a broken build shows up before merge.

The workflow signs in to Google Cloud without a key, through Workload Identity Federation. `scripts/setup-cd.sh` sets that up once: a `github-deploy` service account that can only deploy Hosting, a provider that trusts only this repository's `main` branch, and the `WIF_PROVIDER` and `DEPLOY_SERVICE_ACCOUNT` repository variables the workflow reads.

## Where things live

| Content | File(s) | URL |
| --- | --- | --- |
| Front-page bio | `src/content/bio.md` | `/` |
| Resume | `src/content/resume.md` | `/resume` (rendered), `/resume.md` (raw), `/resume.pdf` |
| Blog posts | `src/content/blog/<slug>/index.md` or `src/content/blog/<slug>.md` | `/blog`, `/blog/<slug>` |
| Portfolio entries | `src/content/portfolio/<slug>/index.md` or `src/content/portfolio/<slug>.md` | `/portfolio`, `/portfolio/<slug>` |
| Talks | `src/content/talks/<slug>.md` | `/talks`, `/talks/<slug>` (only talks with notes) |
| RSS feed (full content) | generated from published posts | `/rss.xml` |
| Social links | `links` array in `src/pages/index.astro` | `/` |
| Other static files | `public/` | `/<file-name>` |

Text in `[square brackets]` is a placeholder waiting for your words.

## Writing a blog post

Make a folder per post and drop images next to the Markdown:

```
src/content/blog/
  my-post/
    index.md
    diagram.png
    screenshot.jpg
```

`index.md`:

```md
---
title: "My post"
date: 2026-11-01
summary: "One sentence shown in lists and the RSS feed."
tags: ["firebase"]
draft: true
---

Body in Markdown. Reference images with relative paths:

![What the diagram shows](./diagram.png)

Code blocks are syntax highlighted at build time.
```

The folder name is the URL: `my-post/` becomes `/blog/my-post`. Images referenced this way are optimized and fingerprinted at build time. A post with no images can be a single file, `src/content/blog/my-post.md`.

### Drafts and proofreading

`draft: true` builds the post at its URL but keeps it out of **every listing**: the nav dropdown, `/blog`, the front page, and the RSS feed. The page also carries a `noindex` tag and shows a "draft" banner. Deploy it, send the link to a proofreader, and when it's ready set `draft: false` (or delete the line) and deploy again. Nothing about the URL changes when it goes live.

The three newest published posts appear in the nav dropdown and on the front page.

## Adding a portfolio entry

Same shape, under `src/content/portfolio/`:

```md
---
title: "My project"
summary: "One sentence shown in lists."
role: "What you did"
order: 4
links:
  - label: "Live site"
    url: "https://example.com"
draft: false
---

Body in Markdown.
```

Entries sort by `order` (lowest first), then title. There is deliberately no date or year field. The first three appear in the nav dropdown and on the front page. `draft: true` works the same way as for posts.

## Adding a talk

One file per talk under `src/content/talks/`:

```md
---
title: "Full stack in a stackless world"
event: "O'Reilly Fluent 2018"
date: 2018-06-13
when: "Jun 2018"            # optional display override when only the month or year is known
location: "San Jose, CA"    # optional
with: ["Sarah Allen"]       # optional co-speakers
video: "https://www.youtube.com/watch?v=..."   # optional
slides: "https://www.slideshare.net/..."       # optional
url: "https://..."          # optional event or session page
summary: "One line on what the talk covered."
draft: false
---
```

Talks sort by `date` and are grouped by year on `/talks`. The listing links straight out to the video, slides, or event page. If you add body text below the front matter (an abstract, notes, photos in a folder beside an `index.md`), the talk gets its own page at `/talks/<slug>` and the listing links there instead. The three most recent talks appear in the nav dropdown and on the front page.

## Updating the resume

Edit `src/content/resume.md`. Its front matter (`candidate`, `summary`, `email`, `website`, `github`, `linkedin`) becomes the header. Role headings use `Organization · Title · dates`; the page bolds the organization and right-aligns the dates. The rendered page, the raw `.md`, and the PDF are all produced from that one file at build time, so they never drift. The PDF uses the print stylesheet (light background, no nav); `npm run build:pdf` regenerates it after `npm run build:site`.

## Syndicating posts elsewhere

The site is the canonical home for your writing. `/rss.xml` carries each post's full HTML with absolute links and image URLs, which is what cross-posting tools consume. Wherever a copy lands, point its canonical URL back at `https://inlined.dev/blog/<slug>` so search engines credit this site.

## Theme

Colors and type are CSS custom properties at the top of `src/styles/global.css`. The nav lives in `src/components/Nav.astro`; the shared page frame in `src/layouts/Base.astro`. The font is JetBrains Mono, self-hosted from `public/fonts/`.
