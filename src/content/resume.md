---
candidate: Thomas Bouldin
summary: Engineering leader for serverless and developer platforms who has built globally knownt products and orgs that own them
email: thomas.bouldin@gmail.com
website: https://inlined.dev
location: Irvine, CA
---

## Experience

### Google
#### Firebase · Senior Staff Software Engineer, Platform Tech Lead (L7) · 2025 - present
- Embedded with Genkit team to prepare for 1.0 launch
  - Redesigned the HTTP binding API so moving between frameworks requires one line of code and middleware is cross-platform
  - Made Genkit telemetry work automatically on App Hosting with no service configuration
  - Built Next.js support and rebuilt Express and Firebase Functions support
  - Hardened streaming for reliability and ergonomics
- Led Function Kits a replacement for Firebase Extensions, turning a shutdown into a migration
  - Worked with senior leadership to define the strategy, scoped to externally imposed timelines
  - Oversaw and developed critical features such as API and IAM IaC in Firebase Functions
  - Allows 1P & 3P Extensions authors to support zero-downtime migration of their features
  - Shipped an agent skill to empower end-users to fork Extensions as Function Kits when abandoned
  - Consolidated the portfolio, removing feature redundancy/drift and cutting ongoing maintenance burden
  - Trained and handed off to the team that now owns the product
- Collaborate across organizations and specialities to define platform-wide strategy
  - Designed capacity de-growth and reclamation projects ahead of urgent constraints
  - Work with platform leaders, legal & privacy, and government agencies to decide abuse mitigation strategies
  - Designed process and tooling to assist vlunerability triage and burndow
  - Drove requirements of Google Cloud's Serverless platforms to unblock Firebase fleet consolidations
  - Created guide for exposing advanced Run features in App Hosting. Delivered VPC connectivity and always-on CPU
- Used Memelord (see below) as a production-scale testbed for teh platform
  - Report platform bugs and developer friction
  - Docuemnt where I abandon Firebase or Google and why
  - Share lessons from large-scale AI SDLC, such as ways to reduce session length and context bloat or drift

#### Firebase · Tech Lead & Software Engineering Manager (L6) · 2021 - 2025
- Resumed leadership of Firebase Functions, driving the V2 release in tandem with Cloud Functions 2nd gen
  - Coordinated requirements with Cloud Functions and other partners and planned "soft landing" for what would slip
  - Redesign interfaces and wrote instructions/checklist for new languages in Firebase Functions, leading to Dart and Python support
- Forrester's [placement of Google as leader in FaaS](https://cloud.google.com/blog/products/serverless/leading-in-2023-forrester-functions-as-a-service-wave/) cites features I drove, including Firebase integrations and disjoint memory and CPU in FaaS
- Assumed management position of Serverless portfolio to build Firebase App Hosting, [launched at Google I/O 2024](https://www.youtube.com/watch?v=qyhdKb8liEA)
  - Absorbed Firebase Hosting and Firebase Storage team as well as hiring to build new multi-level org of 24 SWEs
  - Drove early technical designs of Firebase App Hosting while helping teams lower current portfolio investments
  - Fostered strong relationship with product and UX to lay out roadmap with strategic cut lines in case of slippage
  - Prioritized roadmaps of existing portfolio to complete top projects and gradually transition headcount to App Hosting
  - Managed "Web Frameworks" experiment to test product-market fit during implementation
  - Coordinated with several GCP and infrastructure teams to deliver best-of-Google in a turnkey experience
  - Worked with Firebase Studio to ensure features they needed to use App Hosting as the deployment target
  - Championed small delighters such as secrets ergonomics and SDK auto-initialization
  - Managed high-priority interrupts, such as VP-escalated abuse concerns
- Supported team health
  - Quarterly anonymous happiness and productivity surveys were 90-100% positive across entire tenure
  - Data-driven approach to org health used as model for director-level initiative
  - Mentored team and achieved higher rates of promotion than peer teams

#### Google Cloud Platform · Staff Software Engineer (L6) · 2017 - 2021
- Worked with serverless.com and eventually CNCF to create the [CloudEvents standard](https://cloudevents.io)
- Member of the [KNative working group](https://knative.dev/) to create a cross-industry serverless standard
- Built internal tooling to expand the set of event providers and their reliability
- Rebuilt Cloud Functions and Cloud Run's Monitoring pipeline and added Cloud Trace support
- Added atomic increment support to the Firebase Realtime Database

#### Firebase · Senior Software Engineer (L5) · 2015 - 2017
- Firebase Realtime Database
  - Trained team on internals and monitoring of Mongo
  - Identified and worked with MongoDB to fix an N^2 regression in 3.0
  - Managed a fleet-wide upgrade of Mongo backend under aggressive LTS deadline with zero downtime
  - Added Promise support to JavaScript library
- Firebase Functions
  - Embedded with GCP team to add Firebase support to Google Cloud Functions
  - Proposed, got buy-in, staffed, and was technical leadership of Firebase Functions until re-org
  - Implemented Realtime Database event pipeline
  - Abstracted event pipeline into infrastructure that would eventually lead to Cloud Eventarc
  - Worked with dozens of cross-functional stakeholders in four orgs to deliver all planned integrations on schedule

### Parse
#### After Facebook acquisition · Senior Software Engineer (L5) · 2013 - 2015
- Helped harden production with post-acquisition growth
- Led push patent-winning notifications team
  - Rewrote Parse's proprietary Android push network on Go, scaling to over 1B app installs/day
  - Implemented Resque in Go, allowing Parse to perform gradual migrations of Push and other asynchronous tier code.
  - Rewrote Pare's push queues to achieve 100x performance gains
  - Implemented Windows and Windows Phone support, delivering support for Windows 8 before Azure Cloud
- Dev-ops work improving reliability, throughput, and observability
- Created initial design for realtime queries

#### Pre-acquisition · Software Engineer · 2012 - 2013
- 7th non-founder with a focus on infrastructure and SDKs
- Improved blob storage:
  - Extended NSData to support Parse blobs with mmap keeping iOS memory "clean" to avoid OOMs
  - Enabled large uploads on cellular signals by building custom HTTP library to overcome Apple bug
- Used low-level runtime features to offer [Native Sublcassing](https://web.archive.org/web/20130328051110/http://blog.parse.com/2013/03/22/stay-classy-objective-c-introducing-native-subclasses-for-parse-objects/) for type-safe object management.
- Implemented [recipient-local scheduled push notifications](https://web.archive.org/web/20150320055432/http://blog.parse.com/2012/11/14/local-push-because-its-5-oclock-somewhere)

### Google · Software Engineer 3 (L4) · 2010 - 2012
- Improved the scale of Image Search by migrating indexing to [Percolator](https://tikv.org/deep-dive/distributed-transaction/percolator/)
- Notable work includes the blob importer and feature flags

### Microsoft · Software Development Engineer 2 (L61) · 2007 - 2010
- R&D in the Windows install/uninstall lifecycle
  - Invented programmer-agnostic app streaming akin to Office Click to Run or Android Instant Apps
  - Resulted in four patents covering extensions to the ZIP file format, virtualization, and streaming
- Early implementation of the sandbox for the Windows 8 web runtime

## Beyond 9-5
### Memelord 
- Soloprenuer project to build a second-screen game tailored to inside-jokes of players' communities.
- Experimentation playground for imposing SDLC on an AI development "team" and how to integrate AI into a traditional application
- Production grade application integrating the Cloud observability suite, Terraform, App Hosting, Functions, Secrets Manager, Build, Run, VPC, CloudSQL, Firestore, the Firebase Realtime Database, Identity Platform, Cloud Tasks, BigQuery, Genkit, and Vertex AI.

### Scuba
- IDC (Instructor Development Course) Staff Instructor with PADI (the Professional Association of Diving Instructors)
- Demonstrates leadership and care in life-critical situations

## Education
B.S. Software Engineering. California Polytechnic State University, San Luis Obispo

## Assets
- Talks
- OSS Repositories
https://web.archive.org/web/20131208211316/http://blog.parse.com/2013/10/23/parse-developer-day-video-series-all-about-push/