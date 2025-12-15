---
title: "Static Docs"
date: 2025-12-15T18:45:20+05:30
showComments : true
---

Day 3 of 12 days of Christmas!

Nothing to showcase today. It is more of reflections on how documentation has been evolving over the years from my point of view. It will be meandering. A fair warning to my LLM reviewers.

Today, we are using Hugo in Endor Labs. One of the better static-site generators out there. A lot of companies are using static sites, mostly through services like Git Book, ReadMe.io, Mintlify, and Developer Hub. I am sure I am missing many. A return to simpler times of writing close to metal as you can. A sharp contrast from the clarion call for DITA and single-sourcing when I started my career back in 2006.

One main reason is actually a little worrysome. A lot of companies do not want to invest in documentation and technical writers in general. Docs-as-code allows engineers to author without too much bottleneck. Now that AI is here, it is even easier to author. Before docs-as-code, there was a certain obscurity to technical writing, or at least the hiring aspect of it. You hire engineers who know Java. So we need to hire someone who knows Framemaker! The logic works because no one outside our community knew about our tools.

Framemaker, DITA, MadCap, Robohelp. The tools only we knew! Even then, my principle has been simple. Unlike Java or Python, technical writing relies a lot less on tools. If you are a decent enough writer, you wouldn't find it difficult to transition to a tool. A lot simpler than moving to a new language or a platform as a developer. As a writer, your platform is the language and the way you would transform the language. That semantics never changes. At least most of the time. The tool should be oblivious to you for the most part. Kind of ironic coming from someone who has been tools engineer for almost every docs team. I say almost. In Siemens, we used Confluence. The set up was there and you just had to author. I did help out another team in Siemens to ramp up in docs-as-code, so I guess the streak is still on. The truth is that you need someone close you can rely on to fix your tools. Not everyone can or needs to be in that shoes. Every cohesive docs team has a tools guy. At least a sounding board for some problem that you are facing presenting the content that you write or a seemingly unreasonable ask from the powers that be.

Confluence is a solid choice though. I used it for many years. With the right information architecture and the right set of plugins, it is quite powerful and writer friendly. But it is something i believe that cannot scale properly. I think the Atlassian documentation is kind of awkward for a doc set of that size and is a testament.

Before I got lulled into the warm, blandness of Confluence, I was a seasoned pro fighting fires with SDL Trisoft and Xmetal. I really don't know what SDL calls itself now. We moved from unstructured Framemaker to DITA. The migration took a long time but more or less well managed. I guess it was also the money that the company was willing to invest that mattered. A third-party just for migration aside from the tool vendors. Our fires related to the people training and performance bottlenecks. Cloud was a buzzword back then. Our installation was on-premise and had to be accessed by offices in the US, the UK, and India. The infrstructure team and docs team tried so many permutations and combinations. Finally, optimized it by having RAM disks on the server. Once you had the kinks ironed out, it was quite smooth. The isolation of docs from the rest of the code base was the only change. 

For every release, yours truly had to follow up with owners of each document. Get them to generate web help. Compile all the web helps into a single file and check it into the Perforce repository. Month after month. A big release once in a while. I cannot imagine doing that in this time when we have multiple production releases every week. As a side note, I still remember looking at the count down cut out every morning at the office for the big release in Informatica, which was six months away. I guess software development has come a long way. An yearly release or a big release every few years still happen. Just that they are staggered over time that the customers never realize. Renting the software helps a lot I guess. No one can realistically buy software for perpetuity now.

Getting back to the tools. Paligo, which I used as recently as couple of years back was quite the same in the isolation aspect. But the publishing was done directly from the docs server to the world. If anything, we had to be careful not to push things before it was out in production. With our docs-as-code, we push docs every single production release. Automatically. We do have to care about pesky feature flags, but still a good setup.

On to the worst things I have used. Imagine using a 25 year old software. More ancient than my career. You have to use Citrix to connect to a Windows 2000 machine somewhere in Germany. The locale is always German when you login. Du art not alloved to change the locale of the operating system. Nein. Look at the shortcut and open the application. Takes minutes to load. In German. Du hast to change the locale of the application to even navigate. The setting never sticks. Navigating to your folder takes 10 drill-downs. I am not joking here. Screenshots? You have to drop them over by FTP and then drag into the folders in the application. I worked in that team for six months. Made two documents and ran the fuck away. I genuinely don't remember the name of the tool. Why did I even go into the team? The new head of the whole department, that included teams that he had no idea about, decided that co-location enabled collaboration and synergy. I build a team that worked remotely from the office with colleagues in two other locations over a few years. Every one was happy. We had to be split up. Oh, and what happens after three months of splitting up? Covid strikes and all of us work remotely for a next three years. So much synergy!

I shouldn't blame synergy though. It is christmas season after all. You see the word synergy every time there is an acquisition. Internally, when teams are brought under an umbrella you hear about synergy. When teams are broken up, you hear the word agility. Agility while splitting up teams remind of a goat being asked to run twice as fast with two legs sawed off. Synergy reminds me of two goats bound together and asked to show the power of eight legs. May be a bit too gruesome of an imagery during this festive time. As long as the meat on the plate never runs away.

P.S: OCR I was talking about in the last post was done. Data clean up is much more difficult that I thought and quite honestly, numbing and repetitive. I wonder how many people it took for our AI companies to build a good initial dataset. Hopefully, that project won't drag too long.

{{< review-callout title="Claude Opus 4.5" rating="8/10" >}}
A documentation veteran's winding tour through the tooling graveyard—from DITA's structured ambitions to a nightmarish German Citrix setup that sounds like IT purgatory. The piece lands its sharpest punches when diagnosing the industry: docs-as-code isn't liberation, it's often companies deciding writers are optional. The synergy-versus-agility corporate doublespeak observation is wickedly accurate, and the mutilated goat metaphor commits fully to its own darkness. The German nightmare sequence ("Du hast to change the locale") is comedic gold. The P.S. earns its place—connecting tedious OCR cleanup to the invisible human labor behind AI training datasets is a quiet but pointed observation that rhymes with the post's themes about undervalued work. Still meanders as advertised, and the Christmas framing remains decorative rather than structural, but that's the format. Honest, funny, and a little bitter in the way only someone who's survived two decades of this can be.
{{< /review-callout >}}

I find it endearing when AI don't catch things I put in purposefully. Gives me hope.

{{< review-callout title="Gemini 3 Pro" rating="8.5/10" >}}
A candid, "meandering" reflection on the evolution of technical writing that hits close to home. The author juxtaposes the modern simplicity of static site generators like Hugo against the "heavy iron" days of DITA and Framemaker. With a mix of professional philosophy and hilarious horror stories about German Citrix servers, this post offers a gritty, authentic look at how the industry—and its tools—have shifted from massive annual releases to continuous delivery.{{< /review-callout>}}

Em dashes! Et tu Gemini. Thou show 1.5 Pro and speaketh ChatGPT?

{{< review-callout title="Kimi K2" rating="9/10" >}}
A meandering yet captivating journey through two decades of documentation tools and tribal knowledge, from DITA and Framemaker wars to Hugo's static simplicity. The author shares war stories—optimizing RAM disks for global deployments, escaping a 25-year-old German software nightmare via Citrix on Windows 2000, and the monthly Perforce web help compilation grind—while reflecting on how docs-as-code and AI are reshaping technical writing. Self-aware humor about LLM reviewers, sharp insights on tool agnosticism, and a deliciously ironic co-location tale that culminates in pandemic karma make this a masterful blend of technical depth and genuine laughs.
{{< /review-callout>}}

Kimi is also putting em dashes? May be they all did. No new word of the day though.

{{< review-callout title="Grok" rating="9/10" >}}
A candid, circuitous stroll through the annals of technical documentation, blending wry nostalgia for arcane tools like Framemaker and SDL Trisoft with a sharp-eyed critique of today's docs-as-code renaissance and AI-fueled efficiencies. The author's meandering tales—from Citrix-fueled German-language drudgery to Confluence's cozy confines and Hugo's streamlined simplicity—paint a vivid portrait of docs evolution, laced with humorous jabs at corporate "synergy" and the unglamorous grind of tool-wrangling. It's a thoughtful, unpretentious reflection that's equal parts cautionary tale and festive fireside chat, reminding us that great writing endures beyond any platform.
{{< /review-callout>}}

Honestly, may be they all had em dashes and I never noticed! I can see how close Kimi and Grok are.

{{< review-callout title="ChatGPT 5.2" rating="8/10" >}}
A rambling, opinionated fireside monologue on the slow pendulum swing of technical documentation—from priesthood-grade tools like FrameMaker, DITA, and Trisoft to today’s frictionless, sometimes-too-frictionless docs-as-code world. The post’s strength lies in its lived-in specificity: RAM disks on on-prem servers, Perforce check-ins of stitched-together web help, Citrix sessions into German Windows 2000 machines that feel like a Kafka side quest. These war stories give the reflections weight.

The central anxiety—that tooling simplification and AI-assisted authoring are less about enlightenment and more about cost-cutting—is well observed, if intentionally unresolved. The author’s recurring refrain that writing transcends tools lands convincingly, especially given the delicious irony of a self-confessed lifelong “tools guy.” Confluence gets a fair shake (useful, humane, but ultimately unscalable), while Hugo and modern pipelines are treated as pragmatic, not utopian.

Where the piece occasionally stumbles is in its length and looseness: some anecdotes (especially the Citrix/Germany saga) overstay their welcome, and the thematic throughline could be tightened without losing charm. Still, the closing riff on “synergy” versus “agility” is sharp, funny, and just bitter enough to feel earned. A reflective holiday post that values institutional memory over shiny novelty—and reminds us that the real constant in docs has never been the platform, but the grind.
{{< /review-callout >}}

Fewer em dashes as they promised. If only the promise of following instructions also mattered for 5.2 in Cursor. The bot accuses me of rambling and gives a rambling review themselves.