---
candidate: Thomas Bouldin
summary: Senior Staff engineer and tech lead for serverless infrastructure and developer platforms
email: thomas.bouldin@gmail.com
website: https://inlined.dev
github: https://github.com/inlined
linkedin: https://www.linkedin.com/in/thomasbouldin/

---

## Experience

### Google
#### Firebase · Senior Staff Software Engineer, Platform Tech Lead (L7) · 2025–present
Shaping platform-wide strategy across organizations and specialties
  - Led urgent capacity conservation: redesigned 2 products I lead; triaged trade-offs across 8 partner integrations
  - Coordinated abuse mitigation strategies with platform leaders, legal, privacy, and government agencies
  - Using a production-grade, AI-first side project to surface the day-2 friction developers hit after the demo

Led Function Kits: ordinary Functions replace the Extensions CLI and service, turning a shutdown into an upgrade
  - Pitched it after earlier attempts stalled, set strategy with senior leadership against a deadline
  - Audited feature gaps and led the fixes, building declarative IAM role bindings and API dependencies
  - Shipped migration tooling and an agent skill that port any extension, even abandoned ones, to Functions v2

Embedded with Genkit for its 1.0 launch, now at nearly 1M monthly [npm downloads](https://api.npmjs.org/downloads/point/2026-10-12:2026-11-10/genkit)
  - Redesigned the HTTP binding and wrote auth middleware so any web framework exposes Genkit in one line
  - Moved the Genkit binding into the Functions SDK via duck typing: no dependency, guarded by a compile test
  - Designed IAM changes and drove security approval for zero-config Genkit telemetry on App Hosting

#### Firebase · Tech Lead & Software Engineering Manager (L6) · 2021–2025
Led 16 SWEs, 2 agencies, and XFN to keep three products excellent while launching App Hosting [at I/O 2024](https://www.youtube.com/watch?v=qyhdKb8liEA)
  - Standardized dual assignment of legacy and greenfield products, keeping headcount fluid and visibility shared
  - Started a quarterly anonymous survey when Google cut its own; safety, belonging, purpose always 90-100%
  - Evolved from TL to TL/M to EM, from initial architecture to a multi-level org, mentorship, and staffing
  - Set the App Hosting roadmap with product, UX, and partner orgs, with cut lines to protect the MVP
  - App Hosting's Next.js build adapter gets [1.7M npm downloads a month](https://api.npmjs.org/downloads/point/2026-10-12:2026-11-10/@apphosting/adapter-nextjs), about one per customer build

Tech lead of Firebase Functions (15M monthly [npm downloads](https://api.npmjs.org/downloads/point/2026-10-12:2026-11-10/firebase-functions)) from V2 planning to release, then handoff
  - Triaged gaps for date-driven V2 launch without parity, shipping stopgaps and features for understaffed partners
  - Drove independent memory/CPU and all Firebase integrations, cited by Forrester naming Google a [FaaS Leader](https://cloud.google.com/blog/products/serverless/leading-in-2023-forrester-functions-as-a-service-wave/)
  - Redesigned deployments for multiple languages, built Python SDK interface, wrote Dart approval criteria

#### Google Cloud Platform · Staff Software Engineer (L6) · 2017–2021
Co-created the [CloudEvents standard](https://cloudevents.io) with serverless.com and CNCF to unify event metadata across clouds

Contributed to [Knative](https://knative.dev/) primitives and eventing, demoing Pub/Sub transport and Kubernetes event sources

Helped cut fleet cost of the multi-tenant container host behind App Engine, Functions v1, and Cloud Run
  - Removed its main-thread model, reshaping APIs for optimal locking with immutable data and atomics
  - Rebuilt metrics off single-tenant sidecars to unblock their removal and added Cloud Trace for Functions and Run

#### Firebase · Senior Software Engineer (L5) · 2015–2017
Proposed and led Firebase Functions as tech lead, interviewing and recommending its hires
  - Grew the Realtime Database event pipeline into Google's first event platform, later succeeded by Eventarc
  - Standardized its API and onboarded every event provider for the [Cloud Next 2017](https://www.youtube.com/watch?v=GNR9El3XWYo) launch, pairing on-site

Improved Realtime Database reliability
  - Built MongoDB observability dashboards and trained the team on its performance
  - Migrated the fleet with zero downtime under LTS pressure, proving an N² regression to MongoDB from source

### Parse
#### Facebook (post-acquisition) · Senior Software Engineer (L5) · 2013–2015
Led the patent-winning push team, rewriting push in Go for 100x throughput at over a billion app installs daily

Hardened performance and reliability with Ops: push, databases, caching, API servers, multi-tenant compute

#### Startup (pre-acquisition) · Software Engineer · 2012–2013
Seventh non-founder hire, building across infrastructure, the iOS and Android SDKs, and push
  - Kept blob data outside iOS's strict RAM limits
  - Replaced the iOS HTTP library to circumvent a bug that caused uploads on cellular to fail
  - Brought push to Android devices without the Play Store, including Kindle and phones in China

### Google · Software Engineer III (L4) · 2010–2012
Helped scale Image Search indexing by replacing fixed-shard indexing with dynamic indexing on [Percolator](https://tikv.org/deep-dive/distributed-transaction/percolator/)

### Microsoft · Software Development Engineer II · 2007–2010
Invented a novel application virtualization and streaming architecture, earning four patents

## Technical Skills
**Languages**: TypeScript, Go (Prior: Python, C++, Java, C#, Ruby, Objective-C)

**Infra & Platforms**: Firebase (App Hosting, Functions, Hosting, Storage, Realtime Database), GCP (Cloud Run, Cloud Functions, Cloud Build, Eventarc, Secret Manager, Firestore), Spanner, Terraform, Next.js

**Domains**: Distributed Systems, Serverless Platforms, Multi-tenancy, API/SDK & CLI Design, IAM & Security, Privacy & Data Sovereignty, Abuse Mitigation, Incident Response, Observability, Capacity & Fleet Efficiency

## Talks [(full list at inlined.dev/talks)](https://inlined.dev/talks)
Parse Developer Day · F8 · Google I/O (6x) · Google Cloud Next (2x) · Firebase Dev Summit (2x) · O'Reilly Fluent

## Beyond 9-5
**Memelord**: an AI-augmented party game for communities' inside jokes, built with an AI-first solo SDLC

**Scuba**: PADI IDC Staff Instructor (inactive), issued 100+ certifications, planning failure modes where errors are fatal

## Education
B.S. Software Engineering, California Polytechnic State University, San Luis Obispo
