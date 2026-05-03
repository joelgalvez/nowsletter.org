---
title: NOWSLETTER
---
## NOWSLETTER

NOWSLETTER is a collaborative tool for gathering events from newsletters.

[joelsnewsletters.com](https://joelsnewsletters.com) is where I put my events, but you could do other things with your data.

![[jooelss.mp4]]

This is a way for me ([Joel](https://joelgalvez.com)) to stay up to date without platforms. My newsletters have all the info I need, but they are kind of a mess. 

This could be useful for anyone collecting events from newsletters, but it works best if you have some connection to the people sending them.

### How does it work?
What I see is this split view where it's possible to compare the newsletter and the result from a local AI. Newsletter to the left and events on the right.

![[scroll.mp4]]

The newsletter author sees the same thing. They can also check and change things, if they want. Usually its me doing most of the work, but not always. 

Since we use the same interface, we can collaborate without having to spell things out. They don't need to tell me "please change X to Y".

AI does the first proposal, but it's not the final result: AI + 2 humans.

### How do I try this out?
You can run this yourself (link below), or I can run it for you. If you are interested, let me know at mail@joelgalvez.com. 

### What do I need to get started?
You'd need one person who is in the middle, signs up for the newsletters and is the one that oversees things.

### Background
After being part of the Facebook exodus around 2018, I missed the comforts of Facebook Events and became interested in the problem of how to recreate that kind of overview. This wasn't a technical problem. It's about how to get the data.

My interest was in finding a method, not in becoming the next hub or becoming a curator. In particular, I wanted this to work at the smallest scale. Someone like me, some guy, should be able to keep up to date with the small places. The big places are never a problem.

I tried various approaches. First, I tried to convince everyone to export .ics/iCalendar files (it worked... partially). It was meant as a kind of budget version of the semantic web, using .ics files. Too much work to ever take off. Besides, you want to know who you're sharing with. I had no intention of "liberating" any data so I felt increasingly uneasy about this approach. It's up to the sender where it ends up, not me. 

Second, I tried "scraping" websites. It worked surprisingly badly. A lot of the places I care about barely have websites. And if you just grab some data, you can't tell whether the intent comes across. Checking the quality of scraped data is almost as much work as adding it by hand. It also feels dodgy, since consent is unclear.

Scraping Instagram is similar. It works, but automating the work is an uphill battle. There's also no connection to the sender. Anyway, relying on Instagram is missing the point.

I also tried using publicly or semi-publicly available data. There's a lot of it, and it can be quite good, at least for the places that sell tickets. I was excited about it at first, but I quickly realised that once you use someone else's archive, you're shaped by their worldview. To shape it to my interest I'd need to treat each source differently, and that's too much work.

There is Bluesky, ATproto, Smoke Signal, Mastodon, ActivityPub, Gancio, Mobilizon, etc. These are great technical solutions, but most of the data is missing.

A big chunk of this event data is available in newsletters, but it needs a bit of local context to be extracted.

### What does work
This approach, combining local AI and newsletters is something that passes my own litmus test:

1. It contains all the sources I care about.
2. It's easy.
3. It doesn't feel dodgy.

AI can make a rough translation between the sender's intent and my interest. Since I'm using local AI, I can keep an eye on electricity use and there are no privacy issues.

Newsletters are email, so I can just reply and ask: "These are the events I got. Does this look good to you?" This would feel less natural if I were scraping web pages, for example.

### What's next?
These events can potentially be published further via open protocols (Mastodon, Bluesky, ActivityPub, ATproto, Gancio, Mobilizon, etc) or other newsletters and websites. 

Newsletters seem like a good source of event data, but they can't all be gathered at once. That might be my favourite aspect of newsletters: they don't scale, so the data collection has to stay somewhat local.

### Could this be misused to collect large amounts of data?
I don't think this can be used as a large scale scraping tool. If you don't want me to have your newsletter, you'll remove me from your recipient list.

Unlike the open web that is overrun by bots, most of the power is with the sender, not the recipient.

### Privacy
If I am the one collecting the data, nobody else gets it. There are no third party services involved such as ChatGPT, Claude, etc.

### Energy use
Each newsletter takes 1-20 seconds, average about 2-5 seconds using Qwen3.6-35B-A3B-UD-Q4_K_XL (Just started trying it out, most mainstream models works fine). My downclocked 3090 draws 210 watts while doing inference. 

This means 1000-10.000 newsletters per 1 kWh. I currently get about one newsletter a day. Not negligible, but seem to be going in that direction. Maybe it's useful to distinguish between small/local and big scale datacenter AI?
### Training and bias
I've got kinda decent results from Apertus (Apertus-8B-Instruct-2509-Q8_0), a fully open and reproducible model trained on transparent data. I can't run their 70B model but judging from the progress I'm guessing that I could soon rely on a model with transparent training.

### Is this project open source?
Yes. [Server](https://github.com/joelgalvez/nowsletter) (Web server + incoming email), [client](https://github.com/joelgalvez/runmodel) (LLM jobs, talks to llama-server). If you run into issues with setting things up, let me know.
### Contact
mail@joelgalvez.com