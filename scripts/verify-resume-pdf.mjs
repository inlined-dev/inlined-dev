// Verifies dist/resume.pdf: 2 pages, extractable text, dates beside titles, no wrapped bullets.
// Usage: node scripts/verify-resume-pdf.mjs   (after `npm run build`)
import { execFileSync } from "node:child_process";

const pdf = "dist/resume.pdf";
const run = (...args) => execFileSync("pdftotext", [...args, pdf, "-"], { encoding: "utf8" });
const failures = [];
const check = (ok, msg) => { if (!ok) failures.push(msg); console.log(`${ok ? "ok  " : "FAIL"} ${msg}`); };

const info = execFileSync("pdfinfo", [pdf], { encoding: "utf8" });
check(/^Pages:\s+2$/m.test(info), "exactly 2 pages");

const raw = run();
const layout = run("-layout");
const pages = layout.split("\f").filter((p) => p.trim());

// Bullets: every "–" line on a page must be followed by another bullet/heading/paragraph at lower indent.
for (const [i, page] of pages.entries()) {
  const lines = page.split("\n");
  lines.forEach((line, j) => {
    if (!line.startsWith("–")) return;
    const next = lines[j + 1] ?? "";
    if (/^\s+\S/.test(next) && !/^\s{20,}/.test(next)) check(false, `page ${i + 1} bullet wraps: ${line.slice(0, 60)}`);
  });
}
check(!failures.some((f) => f.includes("wraps")), "no wrapped bullets");

// Role headings: title and date range on the same line.
for (const [role, dates] of [
  ["Senior Staff Software Engineer", "2025–present"],
  ["Tech Lead & Software Engineering Manager", "2021–2025"],
  ["Staff Software Engineer (L6)", "2017–2021"],
  ["Senior Software Engineer (L5)", "2015–2017"],
  ["Senior Software Engineer (L5)", "2013–2015"],
  ["Software Engineer", "2012–2013"],
  ["Software Engineer III (L4)", "2010–2012"],
  ["Software Development Engineer II", "2007–2010"],
]) check(layout.split("\n").some((l) => l.includes(role) && l.includes(dates)), `"${role}" with ${dates} on one line`);
check(!/\d{4} - /.test(raw) && !/\d{4} present/.test(raw), "no hyphen/space date ranges");

for (const term of ["AI-first", "TL/M", "[7]", "Next.js builds", "TypeScript", "Go", "Kubernetes", "Irvine, CA"])
  check(raw.includes(term), `contains ${term}`);
check(!raw.includes("Al-first") && !raw.includes("(7)"), "no Al-first / (7) corruption");
for (let n = 1; n <= 11; n++) check(raw.includes(`[${n}]`), `footnote [${n}]`);

process.exit(failures.length ? 1 : 0);
