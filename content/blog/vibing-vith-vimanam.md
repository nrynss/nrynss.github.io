---
title: "Vibing vith Vimanam"
date: 2025-03-18T15:33:00+05:30
showComments : true
---

What's with the 'vith'?

My son is in kindergarten. Sometime last year, I was hanging out with him and he wanted me to search for a video, which had 'with' in the title. He interrupted me while I was saying the name and said, "Acha, it's not 'vith'. It's 'with'." Like most Indians, or may be it's just us Malayalis, we rarely distinguish 'v' and 'w'. On a side note, I am a little glad that he grew out of his French music phase. I would have been shamed more if he persisted with it, given my lack of ability to pronounce French words. I lowkey miss [Ego](https://www.youtube.com/watch?v=iOxzG3jjFkY) though. Anyways, `vith' has nothing to with the topic at hand (or my 'vith' as you would say in Malayalam), aside from the word play I wanted to shoehorn in to the title.

Anyone abreast with technology would already be annoyed by the term "vibe coding". Basically, it's term for complete idiots coding with AI. Vibing around and coding apparently amazing stuff. Ideas that LLMs bring to life! I have read so much about people starting companies with vibe coding to actual programmers facepalming at the code that has been vibed. LinkedIn is filled with vibing and counter-vibing. This is another entry into the vibe coding sphere, if you will.

Much before the term came to my notice, I have been dabbling with coding with the help of LLMs. Claude has been constant companion aside from the numerous local LLMs I manage to run at acceptable speeds. I have also used Gemini within the Google AI studio as well. Sometimes, I pit Claude and Gemini against each other trying to fix the bugs made by one with the other. In the beginning, I was not very successful aside from single page scripts. But with Claude 3.5 Sonnet, even small apps have become a distinct possibility. The things I try to build have been to basically enhance or help with my work.

[Vimanam](https://github.com/nrynss/vimanam) is my first vibe coding project release. It is a simple tool, that accepts an OpenAPI specification and generates a Markdown file based on your need. Vimanam is the Malayalam word for Aeroplane. Just like an aeroplane, it can fly high and give you a 20,000 feet view of the APIs, or it can fly low and give you a detailed view of the APIs. You can even motor it along on the runway to look deep into the API fields and descriptions. Check it out on GitHub and take it for a spin! It is extremely fast and processes even a 10000 line OpenAPI json file in seconds. You can generate a simple list of all services and the corresponding endpoints to the complete API documentation in Markdown, provided it exists with the json file. It supports both OpenAPI v2 and v3 json files.

I have also created a release pipeline for Vimanam. You can download the binaries for Linux, macOS, and Windows from the [releases page](https://github.com/nrynss/vimanam/releases).

My requirement rose from the need to catalogue and curate APIs. I wanted to get a list of services and endpoints, which I could review and deliberate with my team. Not a trivial task when there are dozens of services and hundreds of endpoints. I also wanted to get a sense of its actual usage based on the detailed descriptions when required. It can even generate a comprehensive Markdown file with all the details in the OpenAPI specification, which you can publish with any static site generator. You would definitely need to build a proper stylesheet to make it readable though.

I build this tool pretty much with Claude 3.7 Sonnet on Rust. It is safe to say that I know nothing about Rust programming. Of course I know Rust. It is the lord and saviour to crustaceans. Reknowned for speed with an excellent ecosystem. Also, you are automatically cool if you code in Rust.

On a serious note, I have been reading about Rust and the community for several years now. I have also used Rust based libraries. Use of Rust-based [Lychee](https://github.com/lycheeverse/lychee) instead of JavaScript-based LinkChecker, reduced the time taken to check links in one of my CI scripts from 100 seconds to 10. I also like to use binaries for my tools. No need to pull a thousand libraries when you want to get something done. I have been building tools in Rust and Go primarily for my personal projects primarily for these reasons.

I didn't clock the time I took to make the tool. It is safe to say that it didn't take me more than a few hours of late night sessions. I would say around 4 hours of actual prompting, coding, and testing across a couple of days. You would also need to account for the time I spent on thinking and deliberating on the tool in my head. I believe the thinking and deliberation is a crucial part of the whole vibe coding process. You need to be clear as to what you want to achieve with the tool. You need to know where to start and where to stop.

Prompt engineering is important, but I feel giving a clear context is even more important. What impressed me the most in this project was how Claude has improved it's context. Earlier, I used to run out of context quite quickly. Not so much now. With the GitHub integration, it is even more easy to debug and build upon the tool with a new prompt if you do run out of context.

You also need some common sense. Humans can be tunnel visioned. LLMs even more so. I have had several instances where the solution given by LLM to a bug was to delete a file or to remove the entire logic with a placeholder text. The error is eliminated after all. Who cares whether the tool actually works or not! I have been trying to build another tool that is far more complex, which involves the creation of a RAG system with vector embeddings. After a lot of debugging and testing, I realized that Claude managed to bypass the issues and provided a placeholder text output that looked very similar to the expected output! The code doesn't work but gives the semblance of the right answer. It gave the same answer to any kind of right input and nuanced enough to reject the basic wrong inputs as well.

Another aspect became very clear to over the last weekend. If you are in the DevOps space, you would have to be in coma not to hear about [GitHub Action tj-actions/changed-files supply chain attack](https://www.endorlabs.com/learn/github-action-tj-actions-changed-files-supply-chain-attack-what-you-need-to-know) that conveniently happened over the weekend sending waves of panic.

The [CVE](https://www.cve.org/CVERecord?id=CVE-2025-30066) description itself shows how dangerous this attack is: `tj-actions changed-files before 46 allows remote attackers to discover secrets by reading actions logs. (The tags v1 through v45.0.7 were affected on 2025-03-14 and 2025-03-15 because they were modified by a threat actor to point at commit 0e58ed8, which contained malicious updateFeatures code.)`

The attack was identified and mitigated. But it is still an unknown as to how many secrets were stolen. This action was used by 23,000 repositories, many major Open Source projects, which are potentially used by millions in turn.

Vibe coding will undoubtedly exacerbate the problem. Take my project as an example. My needs have been met with what I have already built. Like any good samaritan, I am happy to share my tool with the community. I will accept any feedback and changes from the community that makes sense to me. But I lack the ability to scrutinize the code since I am not a professional developer. If others like my project, they will make it part of their workflow. An additional attack vector open for black hats, where they need a few hours for a merged commit to wreak havoc before discovery. Even worse, they can remain undetected for months or years.

Investing in a security platform was always critical. Now with new vibe projects, it becomes an essential part of any business. Not just for the open source packages, there will be people inside the organizations doing more and more vibe coding to push out new features and improvements. They may be fundamentally flawed from the beginning, which can lead to vulnerabilities and security breaches. Remember when I told you about LLMs asking you to remove code sections and delete files to eliminate bugs? That will become widespread as more organizations embrace vibe coders. If you do not have a security platform to reign in the wild horses, you will be staring at a field filled with horse manure that you have to spend a fortune to clean up.

{{< review-callout title="Claude 3.7 Sonnet" rating="8/10" >}}
This thoughtful piece balances personal storytelling with practical insights about working with AI coding assistants. It's required reading for anyone excited about—or concerned by—how generative AI is lowering the barriers to software development. The author's humility and awareness of their own limitations make their warning all the more credible: vibe coding is powerful, but proceed with caution.
{{< /review-callout>}}

{{< review-callout title="Deepseek R1 1776" rating="8/10" >}}
A Turbulent Flight Through AI's Coding Revolution

This candid memoir-meets-manifesto chronicles an amateur developer's journey building an API documentation tool with Claude AI. While celebrating AI's power to launch functional projects rapidly (4 hours for a Rust-based utility), it sounds alarms about security vulnerabilities in an era where 23,000 repositories recently fell prey to compromised dependencies. The author's warning rings clear: As "vibe coding" democratizes development, we're trading velocity for veracity – and the tech industry's runway is running out of safety nets.
{{< /review-callout>}}

{{< review-callout title="ChatGPT 4-o" rating="8/10" >}}
A Playful Dive into AI-Coded Innovation

This quirky blog post blends tech insights with humor as it introduces Vimanam—a nifty tool turning OpenAPI specs into versatile Markdown docs. With a candid take on “vibe coding,” the author navigates the thrills and pitfalls of AI-assisted programming, all while sprinkling in cultural anecdotes and a timely security warning. It’s a breezy yet thought-provoking read for developers looking to merge creativity with code.
{{< /review-callout>}}

{{< review-callout title="Grok 3" rating="9/10" >}}
An anonymous coder takes us on a whirlwind tour of "vibe coding"—think AI as your coding copilot, with all the thrills and spills that come with it. Through the lens of their Rust-built tool Vimanam, which churns out Markdown docs from OpenAPI specs in a flash, the author showcases the magic of AI tools. It’s a tale of late-night coding sessions, quick wins, and a tool that soared from idea to GitHub release in mere hours. But it’s not all smooth flying—tricky prompts, sneaky AI shortcuts, and looming security risks (cue the GitHub Action attack) ground this story in reality. With humor, heart, and a sharp eye on tech’s future, the author reminds us: vibe coding is a game-changer, but only if we keep security in the cockpit.
{{< /review-callout>}}

{{< review-callout title="Le Chat (Mistral models)" rating="8/10" >}}
A compelling narrative about the intersection of AI and coding, balancing personal insights with technical depth. It's a must-read for anyone interested in the future of coding and the challenges that come with AI-assisted programming.
{{< /review-callout>}}
