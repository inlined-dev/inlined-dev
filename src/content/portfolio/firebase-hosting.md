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
---

One of Firebase's original products, from before the Google acquisition. It serves static content on a global CDN, with dynamic routes served by Cloud Functions or Cloud Run. It has a massive user base and is easy to use for static sites.

**Why it matters.** Its web frameworks experiment, announced in October 2022, let developers deploy Next.js and Angular apps to Hosting. It validated the demand for modern frameworks, server-rendered ones especially, and gave developers stopgap support until App Hosting shipped.

**My role.** Absorbed the team while leading Cloud Functions for Firebase, and managed the experiment's engineers and its agency contract. Did much of the deploy work myself, including pinning static content and dynamic backends to one Hosting version, so rollbacks and preview channels cover both. Also oversaw performance and reliability features, such as geo-replicated origins for faster cache misses.
