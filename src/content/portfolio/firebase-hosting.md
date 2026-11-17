---
title: "Firebase Hosting"
summary: "Web hosting on a global CDN, and the web frameworks experiment that led to App Hosting."
role: "Tech lead and manager"
org: "Google"
years: "2021–2025"
order: 4
links:
  - label: "Docs"
    url: "https://firebase.google.com/docs/hosting"
  - label: "I/O 2022 talk"
    url: "https://www.youtube.com/watch?v=77sMhsLB2qg"
---

Firebase's web hosting: static content on a global CDN, with dynamic routes served by Cloud Functions or Cloud Run.

**Why it matters.** Its web frameworks experiment, announced in October 2022, let developers deploy Next.js and Angular apps to Hosting. It validated the demand for modern frameworks, server-rendered ones especially, and gave developers stopgap support until App Hosting shipped.

**My role.** Absorbed the team while leading Cloud Functions for Firebase, and managed the experiment's engineers and contracts. Did much of the deploy work myself, including pinning static content and dynamic backends to one Hosting version, so rollbacks and preview channels cover both. We also added multi-region origins to cut first-hit latency.
