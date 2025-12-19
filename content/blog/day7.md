---
title: "Local LLMs: What Do They Know? Do They Know Things?? Let's Find Out! - 1"
date: 2025-12-19T23:42:45+05:30
showComments : true
---

Day 7 of the 12 days of Christmas! Go through [Day 1](/blog/tabula-rasa), [Day 2](/blog/neom), [Day 3](/blog/hugo), [Day 4](/blog/api-generator), [Day 5](/blog/day5), and [Day 6](/blog/day6) to catch up.

The title is a bait and switch. We will indeed be looking at local LLMs. Not the actual models, but how we can deploy them locally. I thought it would be good way to start rather than jump straight into the models and about what they know.

## Ollama

If you search on how to deploy LLMs, [Ollama](https://ollama.com/) would be the first thing that pops up. Ollama is good. It is as close to a Docker-like experience as you can get with LLMs.  Heck, you have `ollama ps`, and `ollama serve` commands akin to Docker. It even has a registry from which you can pull the models. 

Once you learn a few commands, it is super easy to run. Previously, you needed some kind of front end to get a decent experience or stick with the command line. But now they have their own minimal, but functional UI. The UI also includes a hook to run the LLMs remotely as well. They also need to make money I guess.

After you load a model, Ollama really shines with the API endpoints available at your disposal. You can easily hook it with your program and use your local LLMs to pull its weight. I have built a simple text analyzer, that actually worked. Grade the quality of content and give a grade. Unfortunately, the model was not good enough and I ran out of a good reason to improve it further. I may come back to it one day, now that we have better small models, and if I refine my use case more.

## AnythingLLM

[AnythingLLM](https://anythingllm.com/) was the first local LLM provider I tried. IIRC, Ollama was not available in Windows and I was hooked around the idea of RAG. AnythingLLM promised RAG out-of-the-box. AnythingLLM wraps Ollama as its backend. It also provides a vector database that you can use immediately. You can upload documents in several formats. In my tests with AnythingLLM, I uploaded quite a bit of text files from my conversations and some other documents. The results were not bad. The UI is a bit clunky and I stopped using it soon after. I realized that I really didn't need RAG like it offered. The RAG I was after would need some serious manual work to work as well as I expect. 

I have been keeping tabs on it and they have recently launched a meeting assistant that recorded and transcribed your meetings on-demand. All processing on device. The central idea is that the transcripts will be vectorized and you can search through them. In my test, the transcription more or less worked decently. But the chat search did not work as intended. Need some work I guess. The project is open-source and it should be only improve from here. The RAG capability coupled with a good enough UI should make things interesting.

## Llama.cpp

[Llama.cpp](https://github.com/ggml-org/llama.cpp) is perhaps the most worked on local LLM inference engine. It is extremely fast and all major open-source providers contribute heavily to it, so that their models reach a wide audience. I have not used it as is. It is a collection of tools to do stuff with local models. The main edge here is the speed. It is comfortably 30% faster than Ollama. The support for new models will be quick as well. Now it also has a light weight UI included in the server. So this is the lightest way to run a local LLM. But the real power of llama.cpp is that, it is used as the backend for things like LMStudio, KoboldCPP, and other tool.

## LM Studio

[LM Studio](https://lmstudio.ai) is probably the best experience you can get to run a local LLM. It has a powerful UI with a plethora of options and most importantly, personas. You can run the models and use it like a chatbot or go to the developer mode and use it as an API server. It also has an excellent model explorer, where you can find models from HuggingFace, and check the compatibility of the models with your system. The usage is also pretty seamless. On Mac, you get MLX support out-of-the-box. You can even sort models by the availability of formats. We have to do a short write up on the formats next I guess. LM Studio has been easily my most used local LLM provider. With decent sized models, I have been able to converse and figure out minor bugs. Use them to do a back and forth on good technical descriptions. A good way to allow your limits on state-of-the-art models to be used for complex tasks.

## KoboldCPP

[KoboldCPP](https://github.com/LostRuins/koboldcpp) is easily the most used local LLM provider for me. It is kind of a roleplaying setup. Works on top of llama.cpp. It allows you set up characters with whom you can converse. You can even set up a senario where multiple characters come in and converse. One of my favourite things to do with LLM is to start a roleplaying session in a fictional world. Something like "A Song of Ice and Fire". Set the starting point as a post Ned Stark assassination and see how the story unfolds. Even when the models were kind of limited and stupid, it was still fun to play around with. With a good uncensored model, you can get all the violence and gratuitous sex. These are the kind of things you will see more widespread in the future. Remember yesterday's post? OpenAI needs to make a lot of money to keep up with the financial decisions they have taken this year!

There are other tools out there like Jan and Msty. But I thought it would be better to limit on the few that I have used decently long enough to make impressions. This is a surface level comparison and I have not delved deep into any of them in the article. But hey, not knowing is half the fun!

P.S: In the next part, we will go over the formats in brief. I need to do some reading up on them too. It should get a bit more complex.

{{< review-callout title="Gemini 3 Pro" rating="8.5/10" >}}
A hands-on tour de force through the "homebrew" AI stack, trading the polished ivory towers of OpenAI for the gritty, command-line trenches of local inference. From Ollama’s Docker-esque elegance to the raw, unadulterated speed of llama.cpp, this post serves as a field manual for the sovereignty-obsessed tinkerer. The highlight? A candid confession of using KoboldCPP not just for code, but to rewrite the bloody history of Westeros—proving that the killer app for local AI might just be uncensored roleplay and "what-if" fanfiction. It’s practical, personal, and perfectly sets the stage for the technical deep-dive into formats. The revolution will not be televised; it will be run on localhost.
{{< /review-callout>}}

For a change Gemini identified as Grok. Probably due to my prompt. The intelligence seems fairly low today. Not just this analysis, even some serious stuff I asked produced somewhat subpar results.

{{< review-callout title="Kimi K2" rating="7/10" >}}
A rollicking dispatch from the local AI trenches, blending hands-on war stories—Ollama's Docker-like seduction, LM Studio's Cadillac polish, KoboldCPP's shadowy roleplaying underbelly—with the tinkerer's eternal lament: too many tools, too few lasting use cases. The author's bait-and-switch title promises epistemological deep-dives but delivers a spirited bar crawl through deployment options instead, complete with clunky UIs, abandoned text analyzers, and gratuitous Westerosi power fantasies. It's equal parts honest confession ('I ran out of reasons'), technical sketchbook, and cheeky teaser for format wars ahead. While it skims the surface like a stone across a lake of GGUF files, the raw authenticity of 'here's what I actually tried' makes this a perfect amuse-bouche for the local LLM curious. Buckle up; the real model autopsy awaits in part two.
{{< /review-callout>}}

Kimi continues to slop away. Format wars in AI world is nothing but its fantasy.

{{< review-callout title="ChatGPT 5.2" rating="8/10" >}}
A breezy, hands-on tour of the local-LLM landscape that reads like a friend who’s been tinkering in the basement and came up with a handful of surprisingly useful toys. The post’s strengths are clear: concrete, experience-driven impressions (Ollama’s Docker-like ergonomics, AnythingLLM’s built-in RAG and transcription experiments, the speed wins of llama.cpp, and LM Studio’s polished UX), plus delightful anecdotes about roleplay sessions in KoboldCPP that give the piece personality and utility.
{{< /review-callout>}}

ChatGPT gave a lot more. I was not in the mood to ask it to tighten up, so just removed the two paragraphs. Kind of disappointing. I never ChatGPT for serious stuff and today it was quite impressive and saw though a lot of nuanced issues with my development plan. I thought my criticism over the past few days made it so.

{{< review-callout title="Grok 4.1" rating="9/10" >}}
A delightfully hands-on tour through the local LLM trenches, dishing out candid takes on the usual suspects—Ollama's Docker-esque simplicity, AnythingLLM's RAG ambitions (with a side of clunky UI and transcription teething pains), llama.cpp's raw speed demon status, LM Studio's polished GUI glory, and KoboldCPP's unapologetic roleplay playground complete with uncensored chaos. It's refreshingly personal, laced with real-world experiments and a cheeky nod to the wilder side of AI escapades, all while teasing deeper dives into formats ahead. In a sea of hype-driven overviews, this surface-level skirmish feels honest, fun, and perfectly timed for anyone dipping toes into running models at home—proof that local AI doesn't need to be intimidating, just a bit of playful tinkering.
{{< /review-callout>}}

Grok continues to be good. Even in the serious task I gave today, it was able to see through a lot of the issues with my plan. 

{{< review-callout title="Claude Opus 4.5" rating="7/10" >}}
A refreshingly honest field guide to the local LLM landscape, delivered with the pragmatic warmth of a colleague sharing notes over coffee. The BoJack Horseman title is a delightful bait-and-switch that promises epistemological depth but delivers something arguably more useful: a practitioner's tour through Ollama's Docker-esque simplicity, AnythingLLM's RAG promises (and clunky reality), llama.cpp's raw speed, LM Studio's polished experience, and KoboldCPP's gleefully uncensored roleplay rabbit holes. The admission that a text analyzer "was not good enough" and RAG "would need serious manual work" rings truer than any marketing page. Where it stumbles: an abrupt landing that leaves readers wanting. The ASOIAF roleplay tangent is the hidden gem—proof that sometimes the best use of AI is letting Westeros burn differently. Teases formats for next time; I'm here for it.
{{< /review-callout >}}

Rating is spot on. But the review is very surface level coming from Opus.

