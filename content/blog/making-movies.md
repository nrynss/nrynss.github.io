---
title: "Making Movies"
date: 2025-03-08T18:45:20+05:30
showComments : true
---

My first computer had Windows 98SE with plus pack. It was a Pentium III 450MHz machine. P3 450 was a weird chipset. It was a slot 1 processor, which slid into the motherboard rather than the familiar socket mechanism. Codename katmai with 0.45µm process node. The nm process nodes were not even in the horizon. Why do I know this? Shortly after I got my computer, others got 550MHz codename coppermine with 0.37µm process node. The craving for specs started and still going on. We are digressing from the matter at hand.

I will document the journey through PC specs one day. Quite necessary since I have started forgetting things. Signs of ageing.

One of my fascination then was to open all the files with notepad. You had the "Open with Notepad" available in the menu.
As is tradition, Windows would conk out and die if you opened a large enough file. I tried

Since I am too lazy to load up Windows 98, I asked Perplexity deep search to fetch it for me.

![binary file](/images/binfile.png)

Binary files looked somewhat like this I guess. My friend KJ had the idea of creating brand new images and sounds by cutting and copying these blobs. I tried. It never worked. KJ is still cutting and trimming and adding stuff. He is a well-regarded sound designer and it is very likely you have encountered [his works](https://www.imdb.com/name/nm5958641/). The site from I got the image has the perfect look and feel of a 90s site! Check [TM Atlantic](https://www.tmatlantic.com/encyclopedia/index.php?ELEMENT_ID=32065) out. In my head, it is still running on an old server somewhere.

Quite recently, I had to create a diagram. I loathe creating diagrams in tools like Visio or Figma. Takes too long and you have to have a mechanism to manage the source. I have seen far too many diagrams that needed update and had to be removed because I could never get the source. Mermaid is pretty cool to create graphics-as-code, and I have thoroughly enjoyed using it thanks to LLMs, which can give a base from which we can work. It is also quite time consuming to get it properly working without the help of LLMs. But the source is with you and easy to edit.

We have implemented [mermaid.js](https://mermaid.js.org) into our Hugo docs and we have started putting in diagrams. Very helpful in certain cases where the diagram literally speaks a 1000 words.

The particular diagram in question was a kind of resolution matrix that did not fit into any of the available mermaid styles. It was not an difficult diagram to create using any random tool but I wanted it to be programmatic. I used and abused Claude so much that it finally gave up. It said you are trying to do something, which is not fit for mermaid. If you use any LLM, you would realize it is quite rare that the bugger throws up hand and politely asks you to fuck off.

I asked for alternatives dreading another tool and the potentially fuckery that awaited with its integration. Claude suggested SVG. Up until then, I never quite explored SVGs and didn't know much apart from it being a vector format. I hadn't put two and two together until then. Claude created a beautiful SVG and given the amount of information, it is perfectly readable and manageable. Very much editable if we wanted.

That got my attention. KJ had the right idea to create art from editing files. Just that we didn't know about SVGs.

Behold my SVG animation.

**Death of the Rainbow King**

{{< svg-animation src="animations/stick-figure-movie-1.svg" height="400px" >}}

I have been listening to "The Clash of Kings" audio book last month. The SVG depicts the death of Renly Baratheon, with the bonus birth of the demon.

I created this with the [Anthropic API](https://docs.anthropic.com/en/api/getting-started), which is separate from Claude. I have a $5 credit and decided to burn through it.

I used [ClaudeMind](https://claudemind.com), which is a third-party tool to use the Anthropic API. It has a perpetual license and an evaluation version. It allows integration with several MCP (Model Context Protocol) servers and enables agentic workflows. For example, you can integrate with mcp-scholarly so that you can extend your search towards scholarly articles and ingest that information into your workflows. They really need to add some documentation. Currently, the website makes it feel as if it is just a desktop frontend for Claude.

The creation of the SVG and the creation of an SVG shortcode together cost me around $2. I did screw around with other ideas, that could have cost me at least half this amount before I zeroed in on this idea. I am sure HBO spent several magnitudes more than that on their scene!

SVG is powerful and opens up some interesting paths in graphics in technical documentation. Powered by AI, the manipulation of SVG is kind of limitless. May be this is first step towards the extinction of raster graphics.

In other news, we have a working comment system! Implemented with Supabase and some nifty JS and Hugo magic. I am also in the works regarding a few other projects. At least one of those should be up on the blog very soon.

{{< review-callout title="Claude 3.7 Sonnet" rating="8/10" >}}
In this delightfully geeky memoir, our author transforms nostalgic Windows 98 file-hacking into modern SVG wizardry. The Game of Thrones-inspired animation—crafted for mere dollars—showcases how AI-powered vector graphics might just spell doom for traditional raster formats. Equal parts tech retrospective and creative manifesto, it's a refreshing reminder that yesterday's digital curiosity often becomes tomorrow's innovation. Recommended for anyone who's ever opened a binary file in Notepad just to see what would happen.
{{< /review-callout>}}

{{< review-callout title="Deepseek R1 1776" rating="8.5/10" >}}
A compelling tech memoir that shines when focusing on AI-assisted creativity, though occasionally loses narrative focus.

🎬 Nostalgic nerd ventures from Win98 hex editing to AI-crafted SVG animations, proving $2 and Claude API outpace HBO budgets. 8.5/10 for tech-poetic hybrid storytelling.
{{< /review-callout>}}

{{< review-callout title="ChatGPT 4-o" rating="8/10" >}}
A nostalgic tech journey meets modern AI experimentation in this engaging blog post. The author reminisces about their early computing days, explores the evolution of digital creativity, and takes a deep dive into SVG-powered animations—culminating in a geeky yet fascinating recreation of a Game of Thrones moment. With humor, personal anecdotes, and a touch of AI-assisted artistry, this post is both insightful and entertaining.
{{< /review-callout>}}

{{< review-callout title="Grok 3" rating="7.5/10" >}}
From Windows 98 crashes to SVG sorcery, this geeky gem chronicles a coder’s quest to slay raster graphics with AI and a stick-figure king. Rough around the edges but brimming with nerdy charm—perfect for tinkerers who dream in code.
{{< /review-callout>}}

{{< review-callout title="Le Chat (Mistral models)" rating="8/10" >}}
"Making Movies" is a captivating blend of personal nostalgia and technical insight, exploring the author's journey from early computing to creating SVG animations with AI. While it can be a bit scattered, the post offers valuable information and a compelling narrative.
{{< /review-callout>}}
