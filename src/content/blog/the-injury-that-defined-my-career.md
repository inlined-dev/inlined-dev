---
title: "The injury that defined my career"
date: 2026-11-12
summary: "Losing the ability to brute-force code turned me into an engineering manager, just in time for an era when everyone has to be one."
tags: ["heroics", "teamwork", "agentic development"]
draft: true
---

## Take my hand

Let's take a journey to the ancient days of 2012. Mobile development was _the_
gold rush, much like AI is now. Nobody was making money, but everyone was
investing because we all believed it would pay off. I decided to sell shovels
and joined a startup called Parse. Parse is largely lost to history, as
Firebase became dominant after Facebook bought and deprecated Parse,
but we helped tame a very nascent field and made it accessible to more
developers. Some of my favorite stories are the technical challenges we
overcame.

Parse offered blob storage, much like Firebase Storage today. Peculiarly, our
files had a 10MB limit. As I took over that product, I learned this was because
cellular connection uploads were flaky on iOS. Experiments showed that failure
rates scaled exponentially with file size; I recall the rate being as high as
50% at our 10MB limit.
After debugging I discovered the problem lay with the call to
[`write`](https://pubs.opengroup.org/onlinepubs/9695999899/functions/write.html).
The function accepts a buffer and its length and returns the length written. Handling a
partial write seems as rare as handling `malloc` returning null; it's
technically correct, but rarely done. But it happened here: on a cellular
connection, the application could write to the socket faster than the modem
could flush it, and the networking API reported an out-of-memory error.

Apple's networking stack wasn't open source. We couldn't submit a patch and a fix wouldn't
be released until the next iOS version. From my research I could only find a few apps
that avoided this bug (notably Gmail). The solution was to write an entire HTTP
layer from scratch just to add a backoff during buffering. It was a massive
learning opportunity and a great technical victory. We never raised the limit, but reliability at
the limit increased by an order of magnitude. The new API also
dramatically reduced memory usage. We shared the lesson with the
AFNetworking maintainer to help non-customers. It also made for one of my
favorite [blog posts](/r/streaming-files).

Everything was great, until I went for a victory coffee.

## That hurts

I stepped out of the office to buy a coffee. My hand struck the door latch in
just the right way and I literally saw stars. After working around the clock on
a laptop, I had developed a repetitive stress injury. We made the industry better,
but I would forever need to tend to compromised wrists. I decided that day
that I had reached the peak of what I could do alone. Solo heroics come at a
measurable personal cost.

Aware of my limitations, I decided to focus on leadership. Two people are more effective
than one, but only if they are aligned and have minimal interlock. This led to
my next era focusing on projects that were too big for one person to complete,
but small enough that I could provide direct oversight. As my projects' scope grew
I focused on mentorship, cross-functional and organizational alignment, and
eventually people management. The motivation was always the same: sustainable
excellence comes from joint execution, not individual heroics.

## Scaling up with people

A decade later I was tech lead and manager of a rapidly growing team building
Firebase App Hosting while maintaining three other products. As a new manager, I
made plenty of mistakes (I still do, but I used to as well). An early flub was
throwing everyone at the initial design so that everyone could take credit. The
intentions were good, but the results were not. Changes in early designs ripple
throughout the entire scope, and the communication and cognitive overhead was
unmanageable. The team ground to a halt. I decided to lean on my IC skills as
models for new soft skills. Productivity is like concurrency programming and we
have models for reducing contention.

I started thinking of the scheduling like a worker pool. Initially we had a
work queue model: platform leads would reduce ambiguity and queue up chunks of
tractable work that others would pick up as they ramped down on existing work.

As we grew, we solidified lanes and leveraged an actor model. Three lanes of
control plane, data plane, and build + deploy tools were assigned pods. Within
each pod communication was high frequency and low latency. Across pods
communication was more structured. But what about the health of our existing
products? We needed to staff them, but reassigning people costs ramp-up time and I
worried about morale problems if some people were purely keeping the lights on
while others pioneered new products.

Borrowing from CPU affinity, I gave everyone dual assignments to keep context
switching cheap. Everyone, veteran or new hire, me included, was assigned a
brownfield product as well as a greenfield project. Even our about page had an
emoji code next to every person's name listing their dual assignments, so other
teams could see who to ask about what. This gave us scheduling flexibility, and
everyone got a share of the visible work.

This was a great victory, and I'm honored to have been "lead". Leadership is
often conflated with importance. Thinking this is your show makes it easy to
create organizational dysfunction in addition to morale problems. This was
evidenced by a queue of design docs that I struggled to keep up with alongside
people management duties. It was time to bias against contention again. While
pod tech leads' approvals were still blocking, mine was no longer. If I couldn't
keep up, I was considered advised. This isn't my show. I'm not the main
character. A glance at my ergonomic split keyboard reminds me that I'm just
another cast member.

## Scaling up with AI

It's another gold rush, and I'm still selling shovels as a platform lead at
Firebase. But this time AI complements my skills as much as it accelerates them.

I'm spending my free time building a game I've wanted to build for over a
decade. With the power of AI, I'm able to experiment where I'm weaker and
accelerate where I'm stronger.

Here my best results came when I inverted my previous lessons. After leaning on
technical skills to model management, I'm modeling management to fix technical
problems with agentic development. As a manager and legacy codebase maintainer,
I'm used to codebases that are too big to read fully. Since
this project has low consequences of failure, I designed an SDLC with the
assumption that strict code review was an unnecessary bottleneck, similar to
a platform tech lead who must review every engineer's code. My effort in this
experiment instead focuses on process, higher-level interpretability, and
quality gates.

The first change to my process was a set of style guides, which deserve a post
of their own. Testing makes a simple example. I caught agents deleting tests to
make code green, so my style guide said that this requires human approval. Then
I caught an agent leaving dead code around only to exercise a test, so I forbade
that in my testing style guide too. The implementation plans the AI generated
originally made testing a final step, which led to much longer implementation
times and cost more tokens, so I added to my project style guide that tests must
be part of every step. I further reduced failures and implementation time by
mandating TDD. This also helped avoid cases where the agent hallucinates and
"forgets" the implementation.

The results were readily apparent. I switched from a fragile prototype that
broke each time a new feature was added to having faith my agent could execute
several epics in parallel.

This side project is built to be overly realistic, to reveal patterns we may not
see in a smaller scope. Even though it is still only in closed beta, and I'm
free to make much riskier decisions on a side project, I still discover lessons
I can share at my day job.

My original theory was that I needed to work with other humans. Is teamwork dead?
Of course not. But teams will likely be smaller and the model will change. We
are all tech lead/managers now. Often, an efficient relationship with your agents
mirrors a reporting chain, and collaboration between ICs will start to look like
collaboration between orgs.

## Up next

Overengineering for fun and profit: why developer platform orgs should encourage
their members to run side businesses to improve core products.
