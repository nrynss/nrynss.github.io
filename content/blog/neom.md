---
title: "The Game: Day 2"
date: 2025-12-14T18:45:20+05:30
showComments : true
draft: false
---

Day 2 of 12 days of Christmas!

In the 90s, computing was the domain of the rich in India. Owning a PC was an absolute luxury. But computer centres were a business. Places that would teach you MS Office, Pagemaker, and stuff for DTP. Internet browsing and email. Some places where courses would be taught. We were not rich by any stretch of imagination. The computer we bought was an idea my father had to start a small DTP centre along with his office. DTP centre ran for a few months and we wound that up because it was a big loss. Turns out, you need to do a proper market and product research before you start a business. Who knew! 

I was using the computer whenever I got time. It became my personal machine. It had some games installed. Everyone knew Road Rash. It had Age of Empires, something no one had heard before. I got obsessed with games just like every other kid. I wanted to be a game designer. Mind you I never bought any game. Games were insanely expensive back then. Probably 1000 rupees and more. This was a time when the monthly salary did not even touch 10000 rupees. I started buying Computer magazines to play the demos. Pirated games were the norm. Abandonware were my jam. I used to go to Internet cafes armed with a pack of floppy disks to download abandonware and split them into floppies. I wanted to a game designer back at that time. I had no clue about creating assets or programming. Books I used to read never made sense to actually code stuff. It still doesn't for the most part. But hey, we have gen AI now. I don't need to know the pesky details of programming. I quickly realized you need to be a god-like programmer to be in the games industry. Then I learned that I need to be sufficiently brain washed to be paid very low and treated like dirt to be a game designer. I am sure it is better now that indie games are doing well and Steam is a thing. So the dream died.

A few months back my daughter was finding it tough to do sums. I wanted to do something fun that would test her and support her. We tried playing cricket and write scores. I pretty much learned tables and large sums by calculating my imaginary score playing valiantly against Allan Donald and Wasim Akram. But since she wasn't getting obsessed with cricket as I did with the scores, it did not get anywhere. She likes playing it though. At that time, I had started blogging again and got the idea of creating a game and host it in the blog site. JavaScript is an obvious choice. But since I am the one not writing the code, I decided to be fancy. No JavaScript peasentry for me. I would use Rust and web assembly. Neom Mathventure was born. I was a game designer again.

I quickly learned that I would not be such a good one. I lacked the patience to work through the idea and spend time on creating something truly class. I did end up making something which is decent. The kids loved playing it on the computer. I never bothered to release it on the blog as such. I had to wait for Antigravity to actually fix some of the issues.

Recently, I ported the entire game to make it truly webasm. It was a mish-mash of JavaScript and Rust earlier. Antigravity helped me port the game to the [Dioxus framework](https://dioxuslabs.com/). Very neat if you ask me. Rust and web assembly enables a lot of performance gains that may not be possible with a typical JavaScript based project. The question is the availability of developers that know Rust well. I guess gen AI does enable the non-crustaceans to use Rust.

The game is very simple. It has two mascots. Kannappan, the capybara and Thangamma, the tapir. They are there to motivate you. They are made in SVG. Programatically generated.

The story behind the Tapir and Capybara stems from a long time ago. Around 3-4 weeks after my daughter was born, she would wake up at exactly 12 mid-night. I would have to carry her around for 10-15 minutes before she would sleep again. To pass the time, I made up a series of stories about her, a tapir, and a capybara. I would tell the story to her and she would fall asleep. This routine continued for a month or so. At that time, I wanted to write a story series based on that. It has remained in my mental shelf. In front of that mental closet that contains all my story ideas. When I had the game idea and the mascots, I decided to use them.

The game starts of from simple math problems that get progressively harder. To be frank, it reaches to a point quickly where you might need a calculator. The difficulty needs to scale. It is no more than a novelty right now. There are some neat tricks though. The game has multiple languages support. Many elements are put in a json file, which is fetched according to the language. We have Malayalam, Manglish (Malayalam written in English for the benefit of my kids), and English. It does have music that plays in the background, which is also read from a json. We have "Ode to Joy" by Beethoven playing now. A midi like setup. I guess we can generate music like that. Kind of eerie when you turn a life's work into something like this. When you think further, you have machines masquerading as people with crap load of in-built knowledge that has made this game possible. The mascots also talk and shout encouragement. Interestingly, it also talks in the language selected. A butchered Malayalam at that.

Technically, almost the entire source is in Rust. Music and locales are in JSON. The framework ships the web assembly. With some tinkering, you can also make them into full-fledged desktop applications or even mobile apps.

The game does hold the attention of my kids for some minutes. I guess that is the best something as simple as this can go. But I think it shows the potential of Rust and web assembly. Talented people can build something that would be a lot more fun.

![Neom Mathventure](/static/images/neom.png)

The game is open-source and available [here](https://github.com/nrynss/neom-mathventure). It is called Neom Mathventure, named after my children.

You can play it [here too, hosted on the blog!](https://nrynss.github.io/neom).

Give it a whirl! Best to play in the portrait mode on a tablet. I have hit over 2000 as my high-score.

P.S: There is a bug in the accuracy percentage. I just noticed it. My machine is doing some serious OCR duty now and barely hanging on while typing this post. [Apparently processing tables isn't that easy for an OCR engine as well.](https://nrynss.github.io/tabula-rasa) More on that project later. It is about analysis of a court judgement of a very infamous case. 1700+ pages of PDF that has be OCR'd.

{{< review-callout title="Claude Opus 4.5" rating="7.5" >}}
A warm, structurally loose post that finds its footing in specificity. The 90s India computing memoir—floppy disk pilgrimages to internet cafes, abandonware as salvation, magazines bought for demo discs—is culturally vivid and will land with anyone who grew up resource-constrained but curiosity-rich. The emotional center is paragraph seven: a father inventing tapir-and-capybara stories at midnight to soothe a newborn, those characters now resurrected as SVG mascots in her math game. That's the essay; the Rust/Dioxus/WebAssembly scaffolding is technically interesting but secondary. The throwaway line about Beethoven—"Kind of eerie when you turn a life's work into something like this"—gestures at something profound about AI and creative labor, then moves on too quickly. The honest self-assessment ("I quickly learned that I would not be such a good one") earns trust because it's followed by shipping anyway. Structurally, the post wants to be memoir, technical writeup, and product launch simultaneously—it mostly pulls it off through sheer personality. The cricket-scoring tangent wobbles before finding its footing. The bug confession and overheating-machine P.S. is a perfect ragged ending. Would play the game; would read the midnight stories if he ever writes them down.
{{< /review-callout >}}

Claude is warmer than usual.

{{< review-callout title="Gemini 3 Pro" rating="8" >}}
A charmingly jagged memoir that disguises a technical experiment as a parenting diary. The opening act—90s India, Road Rash, and the economic reality of "computer centres"—is vivid enough to smell the dust on the floppy disks. The pivot to the present day is where the heart lies: the "dream died" not because of failure, but because the stakes changed. Building a game not for Steam glory but to teach a daughter math (with mascots born from midnight lullabies) is a far more compelling success story. The refusal to engage in "JavaScript peasantry" is a hilarious bit of technical snobbery that pays off with the Dioxus showcase. While the narrative sometimes wanders, the honesty binds it together—admitting the game is a "novelty" and that Gen AI is the only reason the code exists gives the piece a refreshing lack of ego. The closing teaser about the 1700-page OCR project suggests this blog is becoming a fascinating lab notebook for a restless mind.
{{< /review-callout >}}

Gemini continues to called itself 1.5. It was calling itself 2 yesterday. You never know!

{{< review-callout title="Kimi K2" rating="8">}} 
A heartfelt diptych of 90s Indian computing nostalgia and present-day parenthood, threaded through with sincere technical ambition. The floppy-disk abandonware hunts and DTP-startup failure ground the childhood dream in vivid specificity; the tapir-capybara bedtime-story origin gives the mascots genuine emotional weight. Rust/WebAssembly implementation via Dioxus is explained with just enough detail to impress without gatekeeping. The multilingual support (Malayalam, Manglish, English) and generative-music tease show thoughtful scope. The writing shines when recounting history; tighten occasional run-on sentences and let the AI-reflection paragraph integrate more smoothly. Title feels placeholder—"Neom Mathventure" deserves top billing. Still, a touching, credible devlog that makes you want to click the playable demo.
{{< /review-callout >}}

I confess that I had to look up "diptych". One more word that I can use while writing annoying blogs.

{{< review-callout title="Grok 4.1" rating="8">}}
Personal storytelling at its most effective—90s Indian computing nostalgia (floppy hunts, pricy games, DTP flops) flows seamlessly into reviving a game-designer dream for your kids' math woes. The capybara-tapir bedtime lore origin adds heartwarming depth, and Rust/WASM/Dioxus flexes modern indie cred without alienating non-devs. Playable demo + repo links seal the deal for tinkerers.
New eerie AI reflection and cross-platform tease enrich the tech-philosophy layer, but gameplay could shine brighter with difficulty curve details or kid feedback quotes. Title feels placeholder-ish amid such vivid history; lean harder into "Neom Mathventure" branding. PS bug-hunt tease hooks for next post—keep threading that project universe.
{{< /review-callout >}}

Grok is a little subdued today. May be it is so when Elon is sleeping. Well, it is a Sunday after all.

{{< review-callout title="ChatGPT 5.2" rating="7" >}}
A warm, meandering essay that works best as a personal narrative and least as a technical showcase. The opening recollection of 1990s computing in India is vivid and grounded, anchoring the post in lived experience rather than nostalgia-for-its-own-sake. The throughline—from childhood games, to abandoned dreams of game design, to building something small and imperfect for one’s own children—is sincere and emotionally credible, and it carries the reader even when the structure wanders.

The technical sections are informative but secondary. Mentions of Rust, WebAssembly, and Dioxus feel more like proof-of-capability than deep exploration, which is appropriate given the post’s reflective intent, but they occasionally interrupt the narrative momentum. The strongest material lies in the personal motivations: the bedtime stories that become mascots, the delight of children engaging with something you made, and the quiet reckoning with how generative AI collapses barriers that once felt insurmountable.

Where the post falters is focus. Several threads—game design culture, AI unease, localization, music generation, OCR side projects—compete for attention without fully resolving. Tightening these into one or two dominant themes would significantly sharpen the impact. Still, as a standalone entry, it succeeds as a thoughtful, humane account of making something small, imperfect, and meaningful—arguably the most honest kind of game development story.
{{< /review-callout >}}

{{< review-callout title="ChatGPT 5.2" rating="7" >}}
A warm, meandering personal essay that works best when it leans into memory and motivation rather than technology evangelism. The opening sections—about 90s computing in India, pirated games, abandonware, and the quiet death of a childhood dream—are vivid and grounded, carrying an authenticity that can’t be manufactured. The pivot to building a game for the author’s daughter feels earned, and the tapir–capybara backstory is genuinely charming, adding emotional ballast to what could otherwise be a straightforward project write-up.

Where the post falters is focus. The narrative jumps between nostalgia, parenting, Rust/WebAssembly advocacy, GenAI commentary, and game mechanics without quite settling on a dominant thread. The technical sections are interesting but high-level, occasionally slipping into justification (“performance gains,” “availability of developers”) rather than insight drawn from hard-won experience. Similarly, the philosophical aside about machines, music, and knowledge is intriguing but fleeting—more a spark than a developed thought.

Still, the piece succeeds on human terms. This is less a polished product announcement than a reflective logbook entry: imperfect, honest, and quietly proud of having built something that held a child’s attention for a few minutes. As a standalone post, it invites empathy more than awe—and that may be its strongest achievement.
{{< /review-callout >}}

ChatGPT gave two responses and asked me to choose one. I left it hanging. Both of them are too much drivel in my opinion.
