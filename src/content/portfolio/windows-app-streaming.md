---
title: "Windows app streaming"
summary: "A research prototype that ran apps while they downloaded."
role: "Inventor and lead engineer"
org: "Microsoft"
years: "research prototype, 2007–2010"
order: 10
links:
  - label: "US 9,852,143"
    url: "https://patents.google.com/patent/US9852143"
  - label: "US 9,043,782"
    url: "https://patents.google.com/patent/US9043782"
  - label: "US 8,910,149"
    url: "https://patents.google.com/patent/US8910149"
---

Ran Windows applications in an isolated VM while they were still downloading, letting them integrate with the host only through declared extension points such as file associations.

**Why it matters.** Any Windows app could run before it finished downloading, without being written for streaming, and leave no stray registrations behind. Windows 8's .appx packages later adopted declared extension points.

**My role.** Designed and built it: a declarative language for Windows extensions, randomly accessible compressed packages, and a file-system driver that turned missing data into prioritized downloads. Not productized, but it produced three patents.
