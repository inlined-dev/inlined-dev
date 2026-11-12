---
candidate: Thomas Bouldin
summary: Senior Staff engineer and tech lead for serverless and developer platforms
location: Irvine, CA
email: thomas.bouldin@gmail.com
website: https://inlined.dev
github: https://github.com/inlined
linkedin: https://www.linkedin.com/in/thomasbouldin/

---

## Talks [(full list at inlined.dev/talks)](https://inlined.dev/talks)
Parse Developer Day · F8 · Google I/O (6x) · Google Cloud Next (2x) · Firebase Dev Summit (2x) · O'Reilly Fluent

## Experience

### Google
#### Firebase · Senior Staff Software Engineer, Platform Tech Lead (L7) · 2025–present
Shaping platform-wide strategy across organizations and specialties
  - Led urgent capacity conservation: redesigned 2 products I lead; triaged trade-offs with 8 partner teams
  - Coordinated abuse mitigation strategies with platform leaders, legal, privacy, and government agencies
  - Drove plan to safely migrate Firebase Functions customers to Cloud Run functions with no code changes
  - Using a production-grade, AI-first side project to surface the day-2 friction developers hit after the demo

Led Function Kits as the replacement for Firebase Extensions, turning a shutdown into an upgrade
  - Set strategy with senior leadership against external deadlines, then trained and handed off to the owning team
  - Closed feature gaps, shipped an agent skill for migration, and merged two CLIs and a service into one CLI

Embedded with Genkit for its 1.0 launch, now at nearly 1M monthly [npm downloads](https://api.npmjs.org/downloads/point/2026-10-12:2026-11-10/genkit)
  - Redesigned HTTP binding contract so exposing Genkit in any web framework takes one line
  - Fully decoupled Functions from Genkit, built Next.js with SSE, and added auth middleware
  - Designed IAM changes and drove security approval for zero-config Genkit telemetry on App Hosting

#### Firebase · Tech Lead & Software Engineering Manager (L6) · 2021–2025
Led 16 SWEs, 2 agencies, and XFN to keep three products excellent while launching App Hosting [at I/O 2024](https://www.youtube.com/watch?v=qyhdKb8liEA)
  - Standardized dual assignment of legacy and greenfield products, keeping headcount fluid and visibility shared
  - Every quarterly anonymous survey on psychological safety, belonging, and purpose was 90-100% positive
  - Evolved from TL to TL/M to EM, from initial architecture to a multi-level org, mentorship, and staffing
  - Set the App Hosting roadmap with product, UX, and partner orgs, with cut lines to protect the MVP
  - Adapter downloads suggest [1.7M monthly Next.js builds](https://api.npmjs.org/downloads/point/2026-10-12:2026-11-10/@apphosting/adapter-nextjs)

Tech lead of Firebase Functions (15M monthly [npm downloads](https://api.npmjs.org/downloads/point/2026-10-12:2026-11-10/firebase-functions)) from V2 planning to release, then handoff
  - Triaged gaps for date-driven V2 launch without parity, shipping stopgaps and features for understaffed partners
  - Drove independent memory/CPU and all Firebase integrations, cited by Forrester naming Google a [FaaS Leader](https://cloud.google.com/blog/products/serverless/leading-in-2023-forrester-functions-as-a-service-wave/)
  - Redesigned deployments for multiple languages, built Python SDK interface, wrote Dart approval criteria

#### Google Cloud Platform · Staff Software Engineer (L6) · 2017–2021
Co-created the [CloudEvents standard](https://cloudevents.io) with serverless.com and CNCF to unify event metadata across clouds

Contributed to [Knative](https://knative.dev/) primitives and eventing, demoing Pub/Sub transport and Kubernetes event sources

Improved efficiency and observability across App Engine Standard, Cloud Functions, and Cloud Run
  - Removed main-thread scheduling, reshaping API locks and using read-only maps & atomic counters
  - Moved tenant sidecar metrics to shared Envoy & container server, unblocking sidecar removal
  - Built a composite event-metric engine; fixed tenant & fleet identity gaps to ship Cloud Trace

Designed and shipped Google's original event subscription platform, succeeded by Eventarc

#### Firebase · Senior Software Engineer (L5) · 2015–2017
Proposed and led Firebase Functions as tech lead, interviewing and recommending its hires
  - Delivered every planned integration across four orgs on schedule, for the [Cloud Next 2017](https://www.youtube.com/watch?v=GNR9El3XWYo) launch
  - Built the Realtime Database event pipeline and evolved it into a common platform launched with four sources

Improved Realtime Database reliability
  - Built MongoDB observability dashboards and trained the team on its performance
  - Migrated the fleet with zero downtime under LTS pressure, proving an N² regression to MongoDB from source

### Parse
#### After Facebook acquisition · Senior Software Engineer (L5) · 2013–2015
Led the patent-winning push notifications team, serving over a billion app installs daily
  - Rewrote the Android push network and queues in Go for 100x throughput and higher reliability

Coordinated with Ops teams to improve reliability, observability, and performance, especially in the data layer

#### Pre-acquisition · Software Engineer · 2012–2013
Seventh non-founder hire across infrastructure, the iOS and Android SDKs, and push

Address early mobile issues like memory limits, faulty network stacks, and Google ID coupling to Android push

Implemented novel features such as [native subclassing](https://web.archive.org/web/20130328051110/http://blog.parse.com/2013/03/22/stay-classy-objective-c-introducing-native-subclasses-for-parse-objects/) and [recipient-local scheduled push notifications](https://web.archive.org/web/20150320055432/http://blog.parse.com/2012/11/14/local-push-because-its-5-oclock-somewhere)

### Google · Software Engineer III (L4) · 2010–2012
Helped scale Image Search indexing by replacing fixed-shard indexing with dynamic indexing on [Percolator](https://tikv.org/deep-dive/distributed-transaction/percolator/)

### Microsoft · Software Development Engineer II · 2007–2010
Invented a novel application virtualization and streaming architecture, earning four patents

## Beyond 9-5
**Memelord**: a second-screen party game for communities' inside jokes, built with an AI-first solo SDLC
  - Multi-stage AI pipeline for iterative creative writing assistance, addressing safety, novelty, and diversity

**Scuba**: PADI IDC Staff Instructor (inactive), issued 100+ certifications, planning failure modes where errors are fatal

## Technical Skills
**Languages**: TypeScript, Go (Prior: Python, C++, Java, C#, Ruby, Objective-C)

**Infra & Platforms**: Node.js, Next.js, Cloud Run, Cloud Functions, App Engine, Envoy, Spanner, Kubernetes, Knative, Containers, MongoDB, Cloud Build

**Domains**: Distributed Systems, API/SDK & CLI Design, IAM & Security, Privacy & Data Sovereignty, Abuse Mitigation, Distributed Tracing & Observability, Fleet Efficiency

## Education
B.S. Software Engineering, California Polytechnic State University, San Luis Obispo
