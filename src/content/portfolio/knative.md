---
title: "Knative"
summary: "An open-source platform for serverless workloads on Kubernetes."
role: "Early design contributor"
org: "Google Cloud"
years: "2018"
order: 7
links:
  - label: "knative.dev"
    url: "https://knative.dev"
  - label: "Résumé"
    url: "/resume"
---

An open-source platform for serverless workloads on Kubernetes. Its Serving half runs and scales containers, and its Eventing half routes events to them.

**Why it matters.** Cloud Run implements the Knative Serving API, so the same service definition runs on Google Cloud or on any Kubernetes cluster.

**My role.** Sat on the design committees from when the project was codenamed Elafros, before "Service" existed as a concept. We debated, for example, whether routes, revisions, and traffic targets needed a unifying primitive. I had a more direct hand in Eventing, where I helped validate using Google Cloud Pub/Sub as a transport behind a vendor-agnostic API, and built a proof of concept that published Kubernetes event streams as CloudEvents.
