---
title: "Google Image Search"
summary: "Image Search indexing, rebuilt on Percolator for dynamic updates."
role: "Software engineer"
org: "Google"
years: "2010–2012"
order: 12
links:
  - label: "About Percolator"
    url: "https://tikv.org/deep-dive/distributed-transaction/percolator/"
  - label: "Résumé"
    url: "/resume"
---

The indexing pipeline behind Google Image Search.

**Why it matters.** Rewriting indexing on Percolator made it dynamic. One unified system replaced multiple tiers of indexing and serving.

**My role.** Worked on the rewrite to Percolator. Added a hot path that detects failures in results serving and reindexes the source.
