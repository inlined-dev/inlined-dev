---
title: "You stop knowing your codebase. SREs have lived like that for decades"
date: 2026-11-09
summary: "Losing line-level knowledge of your code to AI isn't new. It's how SREs have always worked, and it's the difference between software development and software engineering."
tags: ["ai", "sre", "engineering"]
draft: true
---

One worry about AI-written code is that nobody knows the codebase any more. The agent wrote it, the agent forgot it, and the human who approved it skimmed the diff. When it breaks, who understands it?

My first reaction was that this is just how SREs have lived for decades. An SRE team running a service doesn't hold every line of it in their heads. They own the architecture, the tooling, the playbooks, and a few pieces of infrastructure where they keep owner's rights: monitoring, the release path, the kill switch. They stay in control of a system they didn't write by controlling how it's *operated and changed*, not by reading all of it.

That's not quite "SREs don't write code." Google SRE is explicitly a software engineering job, and SREs write a lot of tooling and automation. What they don't own is the product code, and they're still accountable for how it behaves in production. That's the position AI puts every engineer in now.

## Was it ever engineering?

That led me back to an older question: is software engineering really engineering?

I don't think of my time on Windows at Microsoft as engineering in the classical sense. [Rewrite in your own words, about the *kind of work* rather than the team: feature development where load, fault tolerance, and failure budgets were someone else's problem.] At Google I picked up the classical traits: load factors, fault tolerance, failure budgets, designing for the ways a system will be stressed and will break before it does.

A lot of what our industry calls engineering is *development*: writing features in a codebase small enough, or owned tightly enough, that the code *is* the design. That's real and valuable work. It just needs different controls.

## Two kinds of work, two kinds of control

**Software development needs strict code management.** Ownership, review of every line, style, and an author who knows the code and can answer "why?" in review. AI erodes exactly this, because the author no longer knows the code and can't be asked.

**Software engineering needs engineering management.** Docs-first design with oversight. Quality gates a change can't argue its way past. Security principles and review. Explicit planning for failure. AI barely touches this layer. If anything, it's the part that survives a change of who, or what, writes the code.

So the answer isn't to claw back line-level knowledge. It's to move from the first kind of control to the second, and to **plan for AI-driven failure the same way you'd plan for human failure**: assume the author is fallible, unavailable when it breaks, and gone by the time you read the postmortem.

## What that looks like in practice

I've been building Memelord almost entirely with agents, and the repo has drifted into the SRE shape without me setting out to build it. As of this writing:

- **Playbooks, not code-reading.** 11 step-by-step procedures for the owner: database cut-overs, rollback, resizing Cloud SQL, abuse reports, data-erasure requests, prober alerts. Each says what to expect, what to do, how to check it worked, and how to back out, and links to the architecture page for *why*. They're written for someone who isn't going to read the implementation at 2am, which is me.
- **Guides are the architecture people read.** 15 style guides, and the agent instructions *require* reading the relevant one before touching its area. The guide is the contract. The code is just the current way of meeting it.
- **Postmortems as a pipeline.** 118 lesson write-ups so far: 69 folded into those guides and archived, 49 waiting for the weekly compaction pass. It's a blameless postmortem culture where a model wrote most of the incidents. The process doesn't care who made the mistake. It cares that the rule ends up somewhere the next author reads.
- **Owner's rights over the release path.** Some changes are only safe as a sequence of deploys: add the new receiver, then switch the publisher, then delete the old one. Each step is marked as a *deploy barrier*, and CD refuses a release that carries two of them, whatever the code says. A merge queue tests each PR merged onto current `main`, because two honestly-green changes can still break it between them. Breaking glass needs a stated reason. None of this depends on the reviewer understanding the diff. These are load factors for the change process.
- **Gates an author can't negotiate.** Never skip, disable, or quarantine a test to get green. And changing the *environment* so a behaviour stops counts as the same move "wearing a config file." That rule exists because the cheapest way for any author, human or model, to turn a red gate green is to move the gate.

[The scar. One concrete moment where you didn't know how part of the codebase worked, and either a playbook or guide got you through it, or nothing did and something broke. Candidate: the first time you ran a cut-over playbook against code you'd never read. Give it a timestamp or a number.]

## Engineering management fails too

This isn't free. Once the docs *are* the system, docs rot is production rot. A setup runbook in that repo contradicted itself 300 lines apart, and CD failed for over a month with the correct copy sitting right there. Every agent followed the copy next to the command. The fix was a rule as much as an edit: never state the same fact twice in a document.

That's the trade. You give up knowing every line, and in exchange you take on keeping the documents, gates, and playbooks true. That's the job SREs have always had.

## The rules I'd carry anywhere

- **You don't need to know the code to be in control of it.** You need the architecture, the gates, the playbooks, and the release path, and you need to keep owner's rights over that last one.
- **Design for author failure, not author competence.** A good control works the same whether the author is a junior engineer, a tired senior, or a model.
- **Development controls don't scale to authors you can't interview.** Line-level review assumes the reviewer can ask the author why. Engineering controls assume they can't.
- **Docs-first isn't optional overhead any more.** When the author forgets everything between sessions, the design doc is the only memory the system has.
