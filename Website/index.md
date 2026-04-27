---
title: NOWSLETTER
---
## NOWSLETTER

_NOWSLETTER_ is a collaborative tool to get events from newsletters for easy overview. 
You can see it in use at [joelsnewsletters.com](https://joelsnewsletters.com). 

![[Screenshot 2026-04-25 at 10.21.09.png]]

### Why?
I ([Joel](https://joelgalvez.com)) personally use this as a way to be able to know what's going on without relying on any third party. My newsletters has all the info, but they're hard to overview.

Others might find this useful to make the process of collecting events easier, more collaborative and less tedious.

#### Jump down to [How does this work?](#how-does-this-work)


### Background
After being part of the Facebook exodus around 2018, I was missing the comforts of Facebook Events and I became interested in the problem of how to recreate that overview. This was not a technical problem, but rather about how to get the data.

My interest was in finding a method, not in becoming the next hub or some kind of curator. In particular, I wanted this to work at the smallest scale. Someone like me, some guy, should be able to stay on top of small and temporary places. The big places are never a problem.

I tried various approaches. First, I tried to convince everyone to export .ics/iCalendar files (it worked ...partially :D). It was meant as a kind of budget version of the semantic web, using .ics files. Too much work to ever take off. You also want to know who you're sharing with. Sharing machine-readable data with "the world" without knowing who it's for is a strange thing to ask today. I realised I had no intention to "liberate" any data, it's up to the sender where it should end up, not me.

Second, I tried "scraping" websites. I was surprised how badly it worked. A lot of the places I care about barely have websites. And if you just grab some data, you can't tell whether the intent comes across. Checking the quality of scraped data is almost as much work as adding it by hand. It also feels dodgy, consent is unclear. 

Scraping instagram is similar. It works, but to automate the work is an uphill battle. Also, I was missing the connection to the sender. Anyway, it's besides the point to rely on Instagram.

I also tried using publicly or semi-publicly available data. There's a lot of it, and it can be quite good, at least for the places that sell tickets. I was excited about it at first, but I quickly realised that once you use someone else's archive, you're shaped by their worldview. They have different interests than mine and it skews my project too much. For example, I got access to a great API on experimental music, but it's not my main interest. I wrote a script to reshape their data, but that's a brittle piece of code to maintain. I need to treat each source differently and that's too much work.

There is Bluesky, ATproto, Smoke Signal, Mastodon, ActivityPub, Gancio, Mobilizon, etc. These are technical solutions, the data is missing.

Currently I'm using newsletters in combination with local AI, and for the first time the project passes my litmus test:

1. It contains all the sources I care about.
2. It's easy.
3. It doesn't feel dodgy.

Newsletters are an imperfect source of data. AI can't make them perfect, but it can act as a rough translation between the sender's intent and my interest. In this case, that's getting event data. Since I'm using local AI, I can keep an eye on electricity use and there are no privacy issues.

Since this is email, it feels natural to ask for a reaction to the result.

Newsletters are general-purpose, just like a web page. But unlike a web page, they are discrete pieces of information sent at a point in time. That makes them easier to react to.

So I thought: this is a nice way to work with AI. The model gives some proposals, and some of them are wrong. If the mistakes are expected and reacting together is easy, then it's not dodgy anymore. Consent is baked into the ability to react.

I suspect this might not work as well on an individual level: If it were just me using something like Apple Intelligence reading my emails on my computer, I think I'd be more likely to take the result coming from the model at face value.

It also might not scale beyond places that know me. They need to trust me, at least a little bit.

<div id="how-does-this-work">&nbsp;</div>


### How does it work?
There is a split view where it's possible to compare the newsletter and the result from a local AI. Newsletter to the left and events on the right.

![[scroll.mp4]]

The newsletter author gets a link that takes them to the same interface. They can also check and change things, if they want. Usually its me doing most of the work, but not always. 

### How do I try this out?
I'm currently doing some trials with a couple of organisations. If you are interested, let me know at mail@joelgalvez.com. You can also [run this yourself](https://github.com/joelgalvez/nowsletter).

### What do I need to get started?
You'd need one person who is in the middle, signs up for the newsletters and is the one that oversees things.

### What's next?
These events can potentially be published further via open protocols (Mastodon, Bluesky, ActivityPub, ATproto, Gancio, Mobilizon, etc) or other newsletters and websites. 

### Could this be misused to collect large amounts of data?
If you don't want me to have your newsletter, you'll remove me from your recipient list.

### Privacy
No data goes to any third party. 

### Energy use
Each newsletter takes 1-20 seconds, average about 2-5 seconds using Qwen3.6-35B-A3B-UD-Q4_K_XL (Just started trying it out). My downclocked 3090 draws 210 watts while doing inference. 

### Is it open source?
Yes. [Server](https://github.com/joelgalvez/nowsletter) (Web server + incoming email), [client](https://github.com/joelgalvez/runmodel) (LLM jobs)
### Contact
mail@joelgalvez.com