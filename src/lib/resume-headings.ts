/**
 * Splits resume role headings such as
 *   "Firebase · Senior Staff Software Engineer (L7) · 2025 - present"
 * into spans so the layout can style the organization and right-align the dates:
 *   <span class="label"><span class="org">Firebase</span><span class="role">…</span></span><span class="dates">…</span>
 * Only h3/h4 headings whose content is plain text are changed.
 */
const SEPARATOR = " · ";
const HEADING = /<(h[34])([^>]*)>([^<]+)<\/\1>/g;
const DATES = /\d{4}/;

export function splitResumeHeadings(html: string): string {
  return html.replace(HEADING, (whole, tag: string, attrs: string, text: string) => {
    const parts = text.split(SEPARATOR).map((part) => part.trim());
    if (parts.length < 2) return whole;

    const dates = DATES.test(parts[parts.length - 1]) ? parts.pop() : undefined;
    const [org, ...rest] = parts;
    const role = rest.length ? `<span class="role">${rest.join(SEPARATOR)}</span>` : "";
    const when = dates ? `<span class="dates">${dates}</span>` : "";
    const withClass = /\sclass="/.test(attrs)
      ? attrs.replace(/\sclass="/, ' class="entry-head ')
      : `${attrs} class="entry-head"`;
    return `<${tag}${withClass}><span class="label"><span class="org">${org}</span>${role}</span>${when}</${tag}>`;
  });
}
