---
title: "Genkit"
summary: "Google's open-source AI framework, with model-agnostic primitives, observability, and a developer UI."
role: "Embedded engineer for the 1.0 launch"
org: "Google"
years: "2025"
order: 2
links:
  - label: "1.0 announcement"
    url: "https://firebase.blog/posts/2025/02/announcing-genkit/"
  - label: "Résumé"
    url: "/resume"
---

Google's open-source framework for building AI features into apps. It provides model-agnostic primitives, observability, and a developer UI.

**Why it matters.** By design, Firebase and Google are always plugins, on equal footing with every other provider. Genkit is easy to use with Firebase Auth and Cloud Functions, and the same code can be hosted on Express or Next.js instead. Genkit for Node.js reached 1.0 in February 2025, and by November 2026 its npm package had [more than a million downloads a month](https://www.npmjs.com/package/genkit).

**My role.** Embedded with the team for 1.0. Redesigned the HTTP bindings so switching web frameworks takes one line of code and middleware works everywhere, and designed the auth middleware that runs on them. Built Next.js support, rebuilt the Express and Cloud Functions for Firebase bindings on the new design, and hardened streaming. Later made Genkit telemetry work on App Hosting with zero configuration.
