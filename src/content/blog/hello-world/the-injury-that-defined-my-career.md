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
dramatically reduced memory usage.We shared the lesson with the
AFNetworking maintainer to help non-customers. It also made for one of my
favorite [blog posts](/r/streaming-files).

Everything was great, until I went for a victory coffee.

## That hurts

I stepped out of the office to buy a coffee. My hand struck the door latch in
just the right way and I literally saw stars. After working around the clock on
a laptop, I had developed a repetitive stress injury. We made the industry better,
but I would forever need to tend to compromised wrists. I decided that day 
that I had reached the peak of what I could do alone. Solo heroics come at a
mesurable personal cost.

Aware of my limitations, I decided to focus on leadership. Two people are more effective
than one, but only if they are aligned and have minimal interlock. This led to
my next era focusing on projects that were too big for one person to complete,
but small enough that I could provide direct oversight. As my projects' scope grew
I focused on mentorship, cross-functional and organizational alignment, and
eventually people management. The motivation was always the same: sustainable
excellence comes from joint execution, not individual heroics.

This philosophy drives my approach to leadership.  A decade later I was tech
lead and manager of Firebase App Hosting, which is far too big for one person.
That didn’t make the old trap go away; it just changed its shape. A lead who has
to weigh in on every decision is a global lock, and everyone else waits. I lean
on metaphors a lot, and leverage IC skills as soft skills. This
people problem could be mapped to a technical problem of a literal worker pool.

Before I realized this, I optimized solely for visibility opportunities and
invited everyone to brainstorm the problem at its initial conception. The scope
was too broad and ideas rippled too broadly. The team ground to a halt. We
affinitized each person to both App Hosting and another product we owned.
During intial design, only a few people reduced ambiguity in App Hosting while
others wrapped up critical deliverables in existing projects and ensured keeping
the lights on had minimal cost. As they transitioned, they could take on
slightly better defined projects in App Hosting. As more people transitioned to
App Hosting, we again had contention problems. Splitting that project further
into the workstreams of control plane, data plane, and build process & tooling
allowed cohesive pods to have frequent cheap communication while structured
communication between pods kept the team informed. This structure allowed
everyone to share visiblity in the launch, helped us keep expertise and quality
in our existing portfolio, and let us launch on the strict deadline of Google I/O.

This was a great victory, and I'm honored to have been "lead". Leadership is
often conflated with importance. It's easy to think certain roles make you the
main character, but a glance at my ergonomic split keyboard reminds me that I'm
just another cast member.

## Do my values still hold?

It's another gold rush, and I'm still selling shovels as a platform lead at
Firebase. But this time AI complements my skills as much as it accelerates them.

I'm spending my free time building a game I've wanted to build for over a
decade. With the power of AI, I'm able to experiment where I'm weaker, such as UX
and accelerat where I'm stronger, such as distributed systems or production
management. To test my lesson against the new backdrop of AI, I've not just
built a prototype, but dramatically expanded scope and built the same production
guardrails I would have used at Google on a million-user product.

My results:
through the disciplined approach of changing _my_ role from colleague to manager
and applying the same focus on process and self-improvement to AI, I've been
able to build something that even solo heroics could not have in the past. I
have frequently worked on codebases too large to read and this is a low-stakes
experiment, so I eventually gave up on manually reviewing all code. Rather,
I did what I did as a manager: implement a software design process and use
English documents to explain high-level knowledge to both leads (humans) and
new hires (fresh sessions, or different agents). This was my first big
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