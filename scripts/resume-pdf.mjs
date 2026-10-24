// Renders the built /resume page to dist/resume.pdf with headless Chromium.
// Runs after `astro build` as part of `npm run build`.
//
// Needs a Chromium that Playwright can drive. Either:
//   npx playwright install chromium           (downloads a matching build)
// or point CHROME_PATH at an existing Chrome/Chromium binary.

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";

const dist = resolve("dist");
const output = join(dist, "resume.pdf");

if (!existsSync(join(dist, "resume", "index.html"))) {
  console.error("resume-pdf: dist/resume/index.html not found. Run `astro build` first.");
  process.exit(1);
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

// A tiny static server so absolute asset URLs (/_astro/..., /fonts/...) resolve.
const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  let file = normalize(join(dist, decodeURIComponent(url.pathname)));
  if (!file.startsWith(dist)) {
    res.writeHead(403).end();
    return;
  }
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    await stat(file);
  } catch {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
});

await new Promise((done) => server.listen(0, "127.0.0.1", done));
const { port } = server.address();

const executablePath = process.env.CHROME_PATH || undefined;
let browser;
try {
  browser = await chromium.launch({ executablePath });
} catch (error) {
  server.close();
  console.error("resume-pdf: could not launch Chromium.");
  console.error("  Run `npx playwright install chromium`, or set CHROME_PATH to a Chrome binary.");
  console.error(`  ${error.message.split("\n")[0]}`);
  process.exit(1);
}

try {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/resume/`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: output,
    // Page size and margins come from the resume page's @page rule.
    preferCSSPageSize: true,
    printBackground: true,
  });
  const size = (await readFile(output)).length;
  console.log(`resume-pdf: wrote ${output} (${(size / 1024).toFixed(0)} KB)`);
} finally {
  await browser.close();
  server.close();
}
