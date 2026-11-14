---
title: "The injury that defined my career (so far)"
date: 2026-11-12
summary: "What RSI taught me about solo heroics, and whether the lesson survives AI"
tags: ["heroics", "ai", "teamwork"]
draft: true
---

## Take my hand

Let's take a journey to the ancient days of 2012. Mobile development was _the_
gold rush, much like AI is now. Nobody was making money, but everyone was
investing because we all believed it would pay off. I decided to sell shovels
and joined a startup called Parse.  Parse is largely lost to history, as
Firebase became dominant after Facebook bought and deprecated Parse,
but we helped tame a very nascent field and made it accessible to more
developers.  Some of my favorite stories are the technical challenges we
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
learning opportunity and a great technical victory.  We never raised the limit, but reliability at
the limit increased by an order of magnitude.  The new API also
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
models for new soft skills.  Productivity is like concurrency programming and we
have models for reducing contention.

I started thinking of the scheduling like a worker pool. Initially we had a
work queue model: platform leads would reduce ambiguity and queue up chunks of
tractable work that others would pick up as they ramped down on existing work.

As we grew, we solidified lanes and levered an actor model. Three lanes of
control plane, dataplane, and build + deploy tools were assigned pods. Within
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
character.  A glance at my ergonomic split keyboard reminds me that I'm just
another cast member.

## Scaling up with AI

It's another gold rush, and I'm still selling shovels as a platform lead at
Firebase. But this time AI complements my skills as much as it accelerates them.

I'm spending my free time building a game I've wanted to build for over a
decade. With the power of AI, I'm able to experiment where I'm weaker, such as UX,
and accelerate where I'm stronger, such as distributed systems or production
management. To test my lesson against the new backdrop of AI, I've not just
built a prototype, but dramatically expanded scope and built the same production
guardrails I would have used at Google on a million-user product.

My results: through the disciplined approach of changing _my_ role from
colleague to manager and applying the same focus on process and self-improvement
to AI, I've been able to build something that even solo heroics could not have
in the past. I have frequently worked on codebases too large to read and this is
a low-stakes experiment, so I eventually gave up on manually reviewing all code.
Rather, I did what I did as a manager: implement a software design process and
use English documents to explain high-level knowledge to both leads (humans) and
new hires (fresh sessions or different agents). This was my first big
breakthrough that let me develop more quickly and saved me from the swings of a
beautiful prototype that collapses when the next feature is added.

Is teamwork dead? Of course not. But the size of a team needs stronger
justification than before, and we should consciously model our relationship with AI.
Oftentimes it's best to consider ourselves as a group of tech leads and managers, not
just ICs.  ICs must consider the interlocking of work between their agents to
achieve maximum productivity, and work between ICs may now mirror collaboration
between organizations in yesteryear. 

How strong is this new thesis? It's still evolving. I'm already taking some
lessons back to my day job, my project is only in closed beta at the moment, and
the risk profile is dramatically smaller than my work at Google. But the
introspection is producing valuable lessons that will take many more posts to
share.

## Up next

Overengineering for fun and profit: why developer platform orgs should encourage
their members to run side businesses to improve core products.
