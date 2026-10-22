import type { APIRoute } from "astro";
import resume from "../content/resume.md?raw";

/** Serves the resume's Markdown source verbatim at /resume.md */
export const GET: APIRoute = () =>
  new Response(resume, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
