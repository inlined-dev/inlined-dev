---
title: "Cloud Functions for Firebase"
summary: "Serverless backend code that runs in response to Firebase and Google Cloud events."
role: "Creator, tech lead and manager"
org: "Google"
years: "2015–2017, 2021–present"
order: 5
links:
  - label: "Docs"
    url: "https://firebase.google.com/docs/functions"
  - label: "Cloud Next 2017 talk"
    url: "https://www.youtube.com/watch?v=GNR9El3XWYo"
  - label: "Résumé"
    url: "/resume"
---

Serverless backend code for Firebase apps. Functions run in response to Firebase and Google Cloud events, HTTPS requests or schedules, and deploy from one codebase with one command.

**Why it matters.** It was [the most requested feature since Firebase launched](https://firebase.blog/posts/2017/03/introducing-cloud-functions-for-firebase) when it entered beta at Cloud Next 2017, and its event model became the basis for Google's first event platform.

**My role.** Proposed it and led it through launch, designing the shared event model that every Firebase product's triggers use. Later led the second generation, built on Cloud Run, and rebuilt its deploy platform around a container contract that decouples the CLI from the SDK. That opened Functions to new languages: Python first, then Dart.
