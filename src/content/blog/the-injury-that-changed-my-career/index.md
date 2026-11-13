---
title: "The injury that changed my career"
date: 2026-11-10
summary: "The day I shipped my best solo work, I hurt my hands and decided to grow through other people instead. AI has me building alone again, so I went back to check whether that lesson still holds."
tags: ["career", "leadership", "ai", "parse"]
draft: true
---

The best day of my career as an individual engineer ended at a doorknob.

I had just shipped the hardest fix I'd ever made. I got up to buy myself a celebratory coffee, put my hand on the door, and saw stars. It was carpal tunnel syndrome. I needed months of physical therapy, and I've worked with ergonomic accommodations ever since.

That day decided the shape of my career. Fourteen years later I'm building a product mostly by myself again, and I've had to ask whether the lesson I took from it still holds.

## The bug

In 2012 I was one of the first engineers at Parse, working on the iOS SDK. Developers kept telling us that file uploads failed on cellular, and the bigger the file, the more likely it was to fail. Uploads over Wi-Fi were fine. Retrying sometimes worked and sometimes didn't. We had capped files at 10 MB partly because past that size, uploads on a phone network were close to hopeless.

The error coming back was an *out-of-memory* error, which made no sense. The devices weren't out of memory.

The first real clue was a strange asymmetry. Apple's networking library could upload in two ways: from a buffer in memory, or by streaming from a file on disk. The buffer version failed on cellular. The file version didn't. That should have been the end of it, since we could just switch to the file version, except the file version didn't let us set headers we needed. So we were stuck with the version that failed, and the question became what the file path was doing that the buffer path wasn't.

It took me a long time to answer that. The phone's 3G modem drained data far more slowly than an app could hand it over, so the kernel's send buffer filled up. When that happens, a write to a socket can accept only part of what you gave it. Asked to write *n* bytes, it writes fewer and tells you how many, and you're supposed to wait and send the rest. The buffer path in Apple's library didn't handle that. If a write returned anything other than *n*, it gave up and reported the short write as running out of memory. The file path handled it, which is why it survived.

That explained the pattern. Every chunk of an upload was a small chance of a short write, and a file is many chunks, so the odds of getting through without one fell exponentially with file size. Wi-Fi drained the buffer fast enough that it almost never filled. Cellular filled it constantly.

## The fix

I couldn't change Apple's library, and I couldn't use the part of it that worked, so I replaced it. I wrote our own HTTP client on top of raw sockets, and its whole reason to exist was to do the boring, correct thing: when the kernel takes part of a write, back off, wait until the socket can take more, and continue from where it left off.

While I was in there I added streaming. Memory limits on iPhones were harsh then, and loading a whole file into RAM to upload it was a good way to get your app killed. The new client read files from disk as it sent them, so uploading a large file cost about as much memory as uploading a small one. [Optional: a sentence or two on the mmap-backed NSData trick, if you want to go deeper.]

It worked. Large uploads on cellular stopped failing. As far as I knew, only two or three apps had worked around this bug, and Parse was the first platform to fix it for every app built on it. We shipped it to all of our developers and [wrote about streaming files on the Parse blog](https://web.archive.org/web/20120521105207/http://blog.parse.com/2012/05/17/pffile%3A-because-the-internet-is-not-a-truck/). About a month later, after I walked the maintainer of AFNetworking through the problem, it shipped a fix of its own, and a clever one: write the whole request, headers and body together, to a temporary file, so the OS would treat it as an ordinary file upload and take the path that worked. It was a different approach with the same result, and it got the fix to the rest of the iOS world.

## The doorknob

Then I reached for the door.

Sitting in physical therapy over the next few months, I was honest with myself about what had happened. That fix was the peak of my individual performance. I had found a bug in the platform that most people hadn't diagnosed, rebuilt a networking stack around it, and shipped it to thousands of apps. I was proud of it, and I'm still proud of it.

But I'd paid for it with my body, and my body wasn't going to let me do it again at the same pace. If I measured my growth by what I could produce with my own hands, I had just found the ceiling.

So I made a decision: if I wanted to keep growing, I needed to work on projects that couldn't be done by one person. The question stopped being "what can I build?" and became "what can we build?"

That decision is how I became a tech lead, and later a manager. It's why I've spent the years since on things like Firebase Functions, CloudEvents, and App Hosting, none of which any one person could have built. It taught me that the work I'm proudest of now is the work where I can't point to which part was mine.

## Building alone again

Today I'm building [Memelord](#), a party game, and I'm building it mostly by myself, with AI agents writing much of the code. [Replace `#` with a link, or remove it.]

So I have to ask: was the lesson from that doorknob just a product of its time?

Some of it was. The thing that broke in 2012 was my hands, and AI has changed what my hands have to do. If I had to rebuild that HTTP stack today, I'd spend most of my time describing the problem, reading code, and testing it on a slow network, not typing. Memelord, in 2012, would have needed a team. The set of projects one person can take on has grown a lot, and pretending otherwise would be dishonest.

But the more I think about it, the more I believe the lesson was never really about typing.

**The hard part was the diagnosis.** Writing the HTTP client took weeks, but the breakthrough was noticing that an out-of-memory error on a device with plenty of memory meant the error was lying, and that the one upload path that survived was the thread to pull to find out what it was lying about. AI makes the building cheaper. It doesn't make that kind of judgment any less valuable. If anything, it means more of my day is that kind of judgment.

**The impact came from other people.** The fix mattered because Parse put it in thousands of apps, and then it mattered more because I gave it to AFNetworking and it reached the rest of the iOS ecosystem. My hands built it. Other people made it count. That's still true. A game for a community's inside jokes is only worth anything if a community plays it.

**The skills I learned as a leader are the ones that make AI work.** Working well with agents means giving clear context, breaking work into pieces someone else can own, reviewing work you didn't write, and knowing when to trust it and when to check. Those are the skills I spent a decade learning with teams. I didn't stop working through other people. I gained a new kind of "other."

**The injury moved.** AI makes heroics cheap, and cheap heroics are tempting. It's very easy to keep one more agent running, check one more diff, and look up at 1 a.m. My wrists aren't the bottleneck anymore. My attention is, and so is my time. I'm a new dad now, and those hours belong to someone else. I can burn myself out with a keyboard I barely touch just as surely as I did with one I pounded on.

**Working alone can still serve the team.** Part of why I'm building Memelord is to find out firsthand where AI-assisted development breaks, so I can bring those lessons back to the teams I work with. [Expand or cut: how the side project has fed into your day job.] That makes it less a return to solo work and more a way of doing reconnaissance for the group.

## The lesson, revised

Here's where I've landed.

In 2012 I thought the lesson was "don't work alone." I now think it was "don't make your own body the limit of your ambition." Back then, the only way to do that was through other people. Now there are two ways, and they need many of the same skills.

So yes, I'm building something by myself again, and I'm glad I can. But the things I most want to grow toward are still the ones I can't do alone: the ones that need someone else's insight, someone else's adoption, someone else's trust. And whatever tools I have, I still have only one pair of hands, one set of eyes, and a finite number of evenings.

[Closing line in your own words. A possible direction: what you'd tell the version of yourself sitting in physical therapy, or what you hope a reader in the middle of their own hero moment takes from this.]
