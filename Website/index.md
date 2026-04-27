---
title: NOWSLETTER
---
## NOWSLETTER

_NOWSLETTER_ is a collaborative tool to get events from newsletters for easy overview. 
You can see it in use at [joelsnewsletters.com](https://joelsnewsletters.com). 

![[Screenshot 2026-04-25 at 10.21.09.png]]

### Why?
I ([Joel](https://joelgalvez.com)) personally use this as a way to be able to know what's going on without relying on any platform. My newsletters has all the info, but they're hard to overview.

Others might find this useful to make the process of collecting events easier, more collaborative and less tedious.

#### Jump down to [How does this work?](#how-does-this-work)


### Background
After being part of the Facebook exodus around 2018, I missed the comforts of Facebook Events and became interested in the problem of how to recreate that kind of overview. This wasn't a technical problem. It's about how to get the data.

My interest was in finding a method, not in becoming the next hub or some kind of curator. In particular, I wanted this to work at the smallest scale. Someone like me, some guy, should be able to keep up to date with the small places. The big places are never a problem.

I tried various approaches. First, I tried to convince everyone to export .ics/iCalendar files (it worked... partially). It was meant as a kind of budget version of the semantic web, using .ics files. Too much work to ever take off. Besides, you want to know who you're sharing with. Sharing machine-readable data with "the world" without knowing who it's for is a strange thing to ask today.

I realised I had no intention of "liberating" any data. It's up to the sender where it ends up, not me.

Second, I tried "scraping" websites. It worked surprisingly badly. A lot of the places I care about barely have websites. And if you just grab some data, you can't tell whether the intent comes across. Checking the quality of scraped data is almost as much work as adding it by hand. It also feels dodgy, since consent is unclear.

Scraping Instagram is similar. It works, but automating the work is an uphill battle. There's also no connection to the sender. Anyway, relying on Instagram is missing the point.

I also tried using publicly or semi-publicly available data. There's a lot of it, and it can be quite good, at least for the places that sell tickets. I was excited about it at first, but I quickly realised that once you use someone else's archive, you're shaped by their worldview. Their interests are different from mine, and that skews my project too much. For example, I got access to a great API on experimental music, but it's not my main interest. I wrote a script to reshape their data, but the code is brittle and hard to maintain. I'd need to treat each source differently, and that's too much work.

There is Bluesky, ATproto, Smoke Signal, Mastodon, ActivityPub, Gancio, Mobilizon, etc. These are great technical solutions, but the data is missing.

### What does work
Currently I'm using newsletters in combination with local AI, and for the first time the project passes my litmus test:

1. It contains all the sources I care about.
2. It's easy.
3. It doesn't feel dodgy.

AI can make a rough translation between the sender's intent and my interest. Since I'm using local AI, I can keep an eye on electricity use and there are no privacy issues.

Newsletters are email, so I can just reply and ask: "These are the events I got. Does this look good to you?" This would feel less natural if I were scraping web pages, for example.

So I thought: this is a nice way to work with AI. It can only do 80%, but it's still easier to react than to act. If I share the remaining 20% with the original author. Since I know I'm not alone, I think I look at it with a sharper eye. 

<div id="how-does-this-work">&nbsp;</div>

### How does it work?
There is a split view where it's possible to compare the newsletter and the result from a local AI. Newsletter to the left and events on the right.

![[scroll.mp4]]

The newsletter author gets a link that takes them to the same interface. They can also check and change things, if they want. Usually its me doing most of the work, but not always. 

### How do I try this out?
I'm currently doing some trials with a couple of organisations. If you are interested, let me know at mail@joelgalvez.com. You can also run this yourself (link below).

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
Yes. [Server](https://github.com/joelgalvez/nowsletter) (Web server + incoming email), [client](https://github.com/joelgalvez/runmodel) (LLM jobs, talks to llama-server). I used this project as a way to learn rails, so it will improve gradually.
### Contact
mail@joelgalvez.com