---
title: "Cloud Run"
summary: "Google Cloud's serverless container platform, and the host it shares with Cloud Functions and App Engine."
role: "Staff software engineer"
org: "Google Cloud"
years: "2017–2021"
order: 6
links:
  - label: "Docs"
    url: "https://cloud.google.com/run/docs"
  - label: "Résumé"
    url: "/resume"
---

Google Cloud's serverless container platform. Cloud Run, Cloud Functions, and App Engine share one multi-tenant container host.

**Why it matters.** Cloud Functions for Firebase 2nd gen and Firebase App Hosting both run on Cloud Run.

**My role.** Worked on the shared host. Broke up its main-thread design to reduce lock contention, and helped cut fleet cost. Then fixed Cloud Trace for Cloud Functions and Cloud Run, and rebuilt the metrics pipeline so internal and customer-facing metrics agree across all three products and could move to different infrastructure, letting the old footprint be reclaimed.
