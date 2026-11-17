---
title: "Cloud Functions for Firebase, 2nd gen"
summary: "The second generation of Firebase's serverless functions, rebuilt on Cloud Run and opened to new languages."
role: "Tech lead and manager, now platform tech lead"
org: "Google"
years: "2021–present"
order: 5
links:
  - label: "Docs"
    url: "https://firebase.google.com/docs/functions"
  - label: "I/O 2022 talk"
    url: "https://www.youtube.com/watch?v=77sMhsLB2qg"
  - label: "Résumé"
    url: "/resume"
---

The second generation of Cloud Functions for Firebase, rebuilt on Cloud Run with a new SDK and a new deploy pipeline.

**Why it matters.** It opened Functions to new languages, Python first and then Dart, and gave developers independent CPU and memory, which [Forrester cited](https://cloud.google.com/blog/products/serverless/leading-in-2023-forrester-functions-as-a-service-wave/) when naming Google a functions-as-a-service leader.

**My role.** Brought back to Firebase to build it. Prototyped a container contract at a hackathon that decouples the CLI from the SDK, and led the selection and design of Python as the second language. Brought independent CPU and memory to functions before Cloud Functions offered it, by having Firebase deploy a function and then edit its Cloud Run configuration. Cloud Functions later adopted the feature. Also drove codebases for organizing functions, skipping deploys of unchanged code, per-project parameterized configuration, secure access to secrets, and a compat API with agent skills for migrating from 1st gen. Experimental Dart support runs on Cloud Run functions as a backend.
