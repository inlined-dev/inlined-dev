---
candidate: Thomas Bouldin
summary: Engineering leader for serverless and developer platforms who has built globally known products and the orgs that own them
email: thomas.bouldin@gmail.com
website: https://inlined.dev
github: https://github.com/inlined
linkedin: https://www.linkedin.com/in/thomasbouldin/
---

## Experience

### Google
#### Firebase · Senior Staff Software Engineer, Platform Tech Lead (L7) · 2025 - present
- Led Function Kits as the replacement for Firebase Extensions, turning a shutdown into a migration
  - Set strategy with senior leadership against external deadlines, then trained and handed off to the owning team
  - Shipped API and IAM infrastructure as code, zero-downtime migration for first- and third-party authors, and an agent skill to fork abandoned extensions
  - Consolidated the portfolio, removing redundant and drifting features and cutting ongoing maintenance
- Embedded with Genkit for its 1.0 launch
  - Redesigned HTTP bindings so switching frameworks takes one line of code and middleware works everywhere
  - Built Next.js support, rebuilt Express and Firebase Functions support, and hardened streaming
  - Made Genkit telemetry work on App Hosting with zero configuration
- Drive platform-wide strategy across organizations and specialties
  - Capacity de-growth and reclamation ahead of urgent constraints
  - Abuse mitigation with platform leaders, legal, privacy, and government agencies
  - Process and tooling for vulnerability triage and burndown
  - Serverless platform requirements that unblock Firebase fleet consolidation
  - Advanced Cloud Run features in App Hosting, including VPC connectivity and always-on CPU
- Run Memelord (see below) as a production testbed: platform bugs, where I leave Firebase or Google Cloud and why, and AI SDLC lessons

#### Firebase · Tech Lead & Software Engineering Manager (L6) · 2021 - 2025
- Built a multi-level org of 24 engineers to create Firebase App Hosting, [launched at Google I/O 2024](https://www.youtube.com/watch?v=qyhdKb8liEA)
  - Absorbed the Hosting and Storage teams, finishing their top projects before gradually moving headcount to App Hosting
  - Led early technical design, and ran the Web Frameworks experiment to test product-market fit
  - Set a roadmap with product and UX that had strategic cut lines in case of slippage
  - Integrated GCP and infrastructure teams into a turnkey experience, and made it Firebase Studio's deploy target
  - Championed small delighters such as secrets ergonomics and SDK auto-initialization
- Resumed leadership of Firebase Functions, driving the V2 release alongside Cloud Functions 2nd gen
  - Drove independent memory and CPU, which [Forrester cited](https://cloud.google.com/blog/products/serverless/leading-in-2023-forrester-functions-as-a-service-wave/) along with Firebase integrations when naming Google a FaaS Leader
  - Redesigned interfaces and wrote a checklist for new languages, leading to Python and Dart support
  - Coordinated requirements with partners, and planned a soft landing for what would slip
- Kept every quarterly anonymous team survey 90-100% positive; my approach became a model for a director-level initiative
- Mentored the team to higher promotion rates than peer teams

#### Google Cloud Platform · Staff Software Engineer (L6) · 2017 - 2021
- Co-created the [CloudEvents standard](https://cloudevents.io) with serverless.com and CNCF, and joined the [Knative working group](https://knative.dev/)
- Rebuilt Cloud Functions and Cloud Run's monitoring pipeline, and added Cloud Trace support
- Built tooling that expanded the set of event providers and their reliability
- Added atomic increments to the Firebase Realtime Database

#### Firebase · Senior Software Engineer (L5) · 2015 - 2017
- Proposed, staffed, and led Firebase Functions, delivering every planned integration across four orgs on schedule
  - Embedded with the GCP team to add Firebase support to Google Cloud Functions
  - Built the Realtime Database event pipeline, later generalized into Eventarc
- Upgraded the Realtime Database's MongoDB fleet with zero downtime under an LTS deadline, and worked with MongoDB to fix an N² regression in 3.0
- Added Promise support to the JavaScript SDK

### Parse
#### After Facebook acquisition · Senior Software Engineer (L5) · 2013 - 2015
- Led the push notifications team, earning a patent
  - Rewrote Parse's Android push network in Go, scaling past a billion app installs a day
  - Rewrote push queues for 100x throughput, and built Resque in Go for gradual migrations
  - Shipped Windows and Windows Phone push before Azure did
- Designed the first version of realtime queries

#### Pre-acquisition · Software Engineer · 2012 - 2013
- Seventh non-founder hire, focused on infrastructure and SDKs
- Built iOS SDK internals: mmap-backed file storage, large cellular uploads, and [native subclassing](https://web.archive.org/web/20130328051110/http://blog.parse.com/2013/03/22/stay-classy-objective-c-introducing-native-subclasses-for-parse-objects/)
- Implemented [recipient-local scheduled push notifications](https://web.archive.org/web/20150320055432/http://blog.parse.com/2012/11/14/local-push-because-its-5-oclock-somewhere)

### Google · Software Engineer III (L4) · 2010 - 2012
- Scaled Image Search indexing by migrating it to [Percolator](https://tikv.org/deep-dive/distributed-transaction/percolator/)

### Microsoft · Software Development Engineer II · 2007 - 2010
- Built a general-purpose app-streaming prototype for Windows, earning four patents
  - Remapped extension points such as file associations and COM so virtualized apps integrated from an image
  - Extended ZIP with a random-access Deflate, served by a filter driver that faulted pages in on demand
  - Installed Adobe Creative Suite instantly from USB, and ran Office within 2% of a dedicated Office-only effort
- Helped build the Internet Explorer sandbox, including a custom allocator and nested C++ exception handling

## Speaking
Google I/O 2017, 2024, 2025 · Google Cloud Next '17 · Firebase Dev Summit 2017 · O'Reilly Fluent 2018 · Parse Developer Day · [more at inlined.dev/talks](https://inlined.dev/talks)

## Beyond 9-5
- **Memelord**: a second-screen party game for communities' inside jokes, built solo with an AI development team
- **Scuba**: PADI IDC Staff Instructor with well over 100 certifications, leading in life-critical situations

## Education
B.S. Software Engineering, California Polytechnic State University, San Luis Obispo
