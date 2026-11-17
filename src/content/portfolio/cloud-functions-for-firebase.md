---
title: "Cloud Functions for Firebase"
summary: "Serverless backend code that runs in response to Firebase and Google Cloud events."
role: "Creator and tech lead"
org: "Google"
years: "2015–2017"
order: 9
links:
  - label: "Docs"
    url: "https://firebase.google.com/docs/functions"
  - label: "Cloud Next 2017 talk"
    url: "https://www.youtube.com/watch?v=GNR9El3XWYo"
  - label: "Résumé"
    url: "/resume"
---

Serverless backend code for Firebase apps. Functions run in response to Firebase and Google Cloud events or HTTPS requests, and deploy from one codebase with one command.

**Why it matters.** It was [the most requested feature since Firebase launched](https://firebase.blog/posts/2017/03/introducing-cloud-functions-for-firebase) when it entered beta at Cloud Next 2017. Its SDK was an early take on infrastructure as code. Each function declares its own trigger and configuration in code, and the CLI works out how to deploy it. Its event model became the basis for Google's first event platform.

**My role.** Proposed it and led it through launch. Designed the self-describing SDK and its ergonomics, and the shared event model that every Firebase product's triggers use.
