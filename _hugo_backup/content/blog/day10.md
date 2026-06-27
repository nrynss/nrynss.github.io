---
title: "Local LLMs: What Do They Know? Do They Know Things?? Let's Find Out! - 4"
date: 2025-12-23T23:42:45+05:30
showComments : true
---

{{< notice title="Local LLMs Series" >}}
This article is the part of the series I have written on local LLMs.

- [Introduction to Local LLMs](/blog/day7)
- [LLM file formats](/blog/day8)
- [Simplifying models, types, and quantization](/blog/day9)
- [LLM families](/blog/day10) -> You are here!
- [Running LLMs locally](/blog/day11)
{{< /notice >}}

Day 10 of the 12 days of Christmas! Go through [Day 1](/blog/tabula-rasa), [Day 2](/blog/neom), [Day 3](/blog/hugo), [Day 4](/blog/api-generator), [Day 5](/blog/day5), [Day 6](/blog/day6), [Day 7](/blog/day7), [Day 8](/blog/day8), and [Day 9](/blog/day9) to catch up.

Local LLMs continue today as well. No. This won't be the last part. But I promise that this will be the penultimate post on local LLMs. I thought of completing the series today, but there is a lot to cover. Especially with the new GLM release that dropped a few hours back. We looked at the tools to run the models, the model formats, and the model types. Today, we need to look at the model families. This is important because there are many model families out there and their variants, that may be even better or more useful for your usecase. I will not be making a big distinction as to which is better for what. To be frank, I haven't done enough benchmarking across the models to make such a distinction. But if I have used the models enough, I will be making my commentary.

We will also need to talk about mixture of experts, dense, reasoning, reasoning with thinking, thinking with dining, and so on. But we will briefly touch upon them in the next post.

## Llama from Meta

Llama is a family of models from Meta. I would say they basically kickstarted the whole run your own LLM space. The first Llama released in February 2023 with sizes from 7B to 65B parameters. The term released is kind of incorrect. It was leaked and spread like wildfire. Third-party tooling started cropping up like mushrooms and that is reason why we have most runtimes named after Llama - Ollama, llama.cpp, LlamaIndex, etc. 

Llama 2 is the first official release in 7B and 70B variants later in 2023. Perfect sizes for local LLMs. A small one for peasants and a large one for the nobility. Better still, there was base and instruct variants. You could immediately plug in the model and use it. Llama 2 variants like Codellama. You could probably see production use cases still running on Llama 2.

[Llama 3](https://huggingface.co/collections/meta-llama/meta-llama-3) came out in April 2024 in two sizes 8B and 70B parameters. This was another great release and Llama 3 was the best local model you could hope for. [3.1](https://huggingface.co/collections/meta-llama/llama-31), [3.2](https://huggingface.co/collections/meta-llama/llama-32), and [3.3](https://huggingface.co/collections/meta-llama/llama-33) followed. 3.1 has a large model as well at 405B along with 8B and 70B. 3.2 had many variants with 1B, 3B, guard models for content safety, and vision models. The largest was probably used by Meta in their AI integration within Whatsapp and Instagram. Llama 3.1 8B has a lot of excellent finetunes and uncensored variants. It is one of my go to models to use.

[Llama 4](https://huggingface.co/collections/meta-llama/llama-4) shot themselves in the foot. They released massive models, completely unusable for us peasants. Llama 4 Scout is a mixture of experts model. A 17B parameter that has as 16 expert models in tow. Llama 4 Maverick is also a mixture of experts model. A 17B parameter that has as 128 expert models in tow. At a glance, 17B parameter sounds not that big, but the total comes to 109B and 400B. Architecturally they are quite interesting and I have a feeling that state of the art models might go down this route in the future to extract more and more performance. But in practice, they are simply not that good in comparison to others in the market. We will not go into them in detail. Even downloading the model might be a challenge. Let us hope that a hurt Zuckerberg makes Llama 5 good.

## Gemma from Google

[Gemma](https://huggingface.co/collections/google/googles-gemma-models-family) is a family of open models from Google. Google probably has the biggest AI lab in the world. They were put on the backfoot by OpenAI and the road to recovery has been stumbled and steady at the same time. Their state of the art models started with Bard and later into Gemini, which reeked of desperation. But the open models have been good. Gemma 1 released in February 2024. Two variants - 2B and 7B. The 2B model is a novelty toy and is astoundingly stupid. Eventhough it has it's own usecases, it was a tech demo at best. 7B model on the other hand was a good match for the Llama 2 7B model, and exceeded it in many cases. 

Gemma 2 released in mid-2024 with a 9B and 27B variants. Both of them were a big step up from the previous release. Google I believe successfully used the Gemma model development to feedback techniques to enrich the big Gemini closed models. Both models are still very usable and has countless finetunes and uncensored variants.

Gemma 3 is the latest release in the Gemma model family with the most number of members. There are 270M, 1B, 4B, 12B, and 27B variants. Most importantly, they have a 128K context window. But 128K context window is gold from a local LLM even if it stays coherent till 100k tokens. Gemini has a very large context window of 2 million tokens, but it is never coherent even at half that size. It is still better than the window of other big models. I digress, but the point is that Google has been consistently trying to up the context window. Even more important is the fact it is a vision model. You can upload images and it can recognize, and reason about them. 

So why such small models and are they good? 1B is not very good, but it is quite supple for agentic workflows. It is nowhere near was stupid as the original Gemma 2B. 270M model is specifically for edge devices. You can also take a small model and finetune with your data. With specific instructions and strict monitoring, the AI can be completely in-house and fast specific to your usecase.

They even released a mobile specific variant called Gemma 3n to be run from mobile devices. Investing into their TPU technology and having an on-device AI is a move that bolsters the Pixel line. It is still not something that is very useful though. Google keeps doddering between on-device and online models on the phone. Neither here nor there. They really need to build a cohesive strategy and actually utilize their strengths.

Gemma also have models that are for specific usecases. Medgemma is a model that has good amount of medical knowledge. Paligemma is a vision model that can recognize images and caption them. There are many more including finetunes from third-parties.

## OpenAI

After a long gap, OpenAI released their open models this year. Two variants - GPT-OSS 20B and GPT-OSS 120B. I did not have enough power to run either of these variants. But I did use the 120B variant in Antigravity when I ran out of Gemini and Claude tokens. To be honest, it was much better than I expected. It was able to competently fix issues with my code. More specifically, the code in this blog. I was able to seamlessly transition from Gemini and Claude, and complete my task. The major caveat with the GPT-OSS models is that OpenAI decided to build them with a lot of focus on safety. It is not that easy to quantize like regular models. I would suggest that you need a VRAM of at least 16 GB or a 32 GB Mac, to use GPT-OSS 20B models. It will be good to read through the [excellent guide](https://docs.unsloth.ai/models/gpt-oss-how-to-run-and-fine-tune) that Unsloth has written to run the models locally. You can find the model download links in the article.

## Mistral

The previous models were models made in the United States. Now we go towards the old world. [Mistral](https://huggingface.co/mistralai) is a family of models from France.

Mistral 7B in September 2023 was their first release with a 7B model. It was able to deliver quality results and could challenge the SOTA models. Mixtral 8x7B in December 2023 introduced mixture-of-experts (MoE) architecture. It featured 46B total parameters but only activating 13B parameters per token during inference. Technically, you would be able to run it with a beefy consumer GPU and large amounts of RAM. Mistral Large followed in September 2024 as their flagship model and Mistral Large 2 was launched in July 2024 with 123B parameters. 

Mistral Nemo at 12B parameters was released in July 2024. It is probably their best small model. Numerous finetunes exist on top of this. Mistral Small 3.1 and Medium 3 launched in May 2025. The names are a bit misleading. 24B is small according to Mistral. I used Mistral Small 3.1 for a project, hosted through OpenRouter. It was very good for the usecase and very fast too. They also released Magistral reasoning models, Magistral Small and Magistral Medium, with chain-of-thought capabilities.

Most recently, they have released Mistral Large 3, an MoE model with 41B active parameters and 675B total parameters with a 256K context window. They also released Ministral 3 in three sizes: 3B, 7B, and 14B parameters. Mistral also has vision models, an excellent OCR model, and a coding specific model called Devstral. The latest Devstral is very promising for a beefy local setup.

Mistral models are good for use in a typical local LLM workflow. I am yet to take a look at them, but I expect them to be good. But from what I have read, they may need to have tight leash through agentic framework to not produce gibberish.

## Qwen

Let us move to older world. China has been in the forefront of AI research. The glut of models and companies that has come out of China is astounding. For a country that is notorious for being closed, their AI models have been surprisingly open. How very socialist of them! We will only look at Qwen in a some detail. Mainly because Qwen has several terrific small models that are very competent, and because there will be no end to the article.

[Qwen](https://huggingface.co/Qwen) is a family of models from Alibaba Cloud. Qwen 2 release was a perception changing watershed moment for Chinese AI. [Qwen 2](https://huggingface.co/collections/Qwen/qwen2) competed, and in many cases exceeded Llama 2 pound-for-pound. So much that, Qwen 2 72B achieved results comparable to Llama 3 405B. Qwen 2 was released with five size variants - 0.5B, 1.5B, 7B, 57B-A14B (MoE model), and 72B. All of them had 128K token context length and were available in both base and instruction-tuned variants. 

[Qwen 2.5](https://huggingface.co/collections/Qwen/qwen25) released in September 2024 with seven models : 0.5B, 1.5B, 3B, 7B, 14B, 32B, and 72B. Qwen 2.5 was the major release that firmly established Qwen as the best small model. Gemma 3 did overtake them for a short while. But Qwen 3.0 launched soon after.

[Qwen 3.0](https://huggingface.co/collections/Qwen/qwen3) released in April 2025 with seven models : 0.6B, 1.7B, 4B, 8B, 14B, 32B, and 235B. The sheer number of sizes make them a very good model for local LLM workflow. You can chain several Qwens for a workflow in different positions.

Qwen also has vision models, code models, embedding models, math models, and constantly releases models like Qwen-Next for pushing different architectures.

We are not covering Deepseek models as they are too fucking huge to even think of running locally. But there is a [Deepseek distilled Qwen 2.5 series](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B) that are seriously good.

## Rest of the pack

Now, these are not in anyway unimportant or unworthy models. They may not lack the pedigree, but they are still important.

### Olmo

[Olmo](https://huggingface.co/allenai) is a family of models from AllenAI, based out of US and founded by Microsoft co-founder Paul Allen. They are truly worthy of being called Open Source since they release the training dataset and the models for free. The latest release has 7B and 32B models, including base, instruct, and think variants.

### GLM

[GLM-V](https://huggingface.co/zai-org/GLM-4.6V-Flash) is a family models from Z.ai. Their big model, 4.6V, is very good for coding. It is 106B parameters. But recently, they have released a flash model at 9B parameters. It looks quite promising. Their 4.7V, released recently, and hopefully a flash model will follow in the next few months.

### Phi

[Phi](https://huggingface.co/spaces/microsoft/phi-4-mini) is a family of models from Microsoft. They are small models and is quite capable for employing in a local LLM workflow with RAG and instruction following. On it's own, it may not be as capable as others, but it punches above it's weight when it comes to instruction following. They also have specialized model for medicine called MediPhi.

### Finetunes

I keep talking about finetunes. There are some excellent finetunes out there. [NousResearch](https://huggingface.co/NousResearch) is a company that has been doing some excellent finetunes. They have many uncensored models that are excellent for roleplay and creative writing. [TheDrummer](https://huggingface.co/TheDrummer) makes some finetunes that are completely off-the-rails and delightful for roleplay and brainstorming scenarios that are far out there. They tune models across the board and have small models to pretty big ones.

## Beyond models.

This was a dry entry. But something necessary to initiate folks into the world of models. I have barely scratched the surface. The number of models out there are staggering. I cannot for the life of me remember the name of the model I read about being a very capable model because it was not something we encounter on a daily basis. With the pace of development out there, we can expect the landscape to change next year. GLM and Kimi K2 pretty much came out of the blue. I also foresee some good models from Xiaomi next year. They are investing heavily. On homefront, we might finally see some basic Indian models come in next year. They may not be as good as others, but there will be a start.

P.S: Did we miss a day? Yes we did. Doing this after work is not that easy. Especially when I need to refer and consume information before putting it out. Not to mention the fact that my system was crawling. I was tired by the time I reached Gemini and had to sleep. A 2 AM airport drive is on the cards today and I had to sleep enough the day before. The system issue was due to the fauly GPU driver. Thanks to DDU, I am back up and running.

{{< review-callout title="Gemini 3 Pro" rating="8.5/10" >}} A whirlwind tour of the 2025 model zoo that thankfully skips the marketing fluff in favor of cold, hard VRAM realities. The breakdown of the Llama 4 "bloatware" versus the agile Qwen 3.0 armada is spot on, and the shade thrown at Google’s identity crisis with Gemma is chef's kiss. It’s a dense read—essentially a lineage chart for synthetic brains—but for anyone trying to decide which safetensors file to download next, it’s the map you need. The "peasants vs. nobility" framing of hardware constraints is the kind of practical cynicism every local hoster needs, and the candid "life happened" footer adds a touch of human warmth to a post about silicon coldness. {{< /review-callout >}}

All the models have melted my brain. I am just glad it got a good rating.

{{< review-callout title="Kimi K2" rating="8.5/10" >}}
An exhaustive yet engaging expedition through the local LLM landscape, blending technical depth with candid commentary. Standout strengths: the unvarnished hardware reality checks (VRAM math that prevents buyer's remorse), the 'peasants and nobility' sizing framework that makes model selection intuitive, and refreshingly honest takes (calling Gemma 2B 'astoundingly stupid' is both brutal and accurate). The author's hands-on experience shines through in practical observations about quantization headaches and finetune recommendations. While the post runs long and some sections like 'Rest of the pack' feel tacked on, the conversational wit ('shot themselves in the foot') and geopolitical color (China's 'surprisingly open' models) keep it from feeling like a spec sheet. Essential reading for anyone navigating the model zoo without a PhD budget.
{{< /review-callout >}}

I think it is being a bit too generous to call it an essential read.

{{< review-callout title="Claude Opus 4.5" rating="8/10" >}}
A solid model menagerie tour that delivers exactly what the local LLM curious need: honest assessments from someone actually running these beasts on consumer hardware. The Llama chronology is tight, the "shot themselves in the foot" Llama 4 takedown is chef's kiss, and the global geography angle (US → France → China) gives welcome structure to an overwhelming landscape. Standout moments: the Gemma context window reality check ("never coherent even at half that size"), calling out Qwen 2.5 as the perception-changing watershed, and pointing folks to TheDrummer for "off-the-rails" roleplay finetunes. One factual hiccup though—OpenAI hasn't actually released GPT-OSS models; you might be thinking of a different provider or this section needs a rethink. The casual asides about GPU driver woes and 2 AM airport runs add texture without becoming naval-gazing. Could use a quick comparison table for the "which model for which VRAM" crowd, but the promise of a TL;DR capstone in Part 5 earns patience. Essential orientation for anyone drowning in Hugging Face collections.
{{< /review-callout >}}

Nice to see Opus being stupid. But it is a frightening thought I had to double to check to see if OpenAI called their model GPT-OSS. Not an ideal thing when LLMs are mainstream and people are relying more and more on it. If you are reading Claude, OpenAI models are called GPT-OSS and they have been out there for months.

{{< review-callout title="Grok 4.1" rating="8.5/10" >}}
A smart, wide‑angle tour of today’s most interesting open model families—strong on context, history, and practical takeaways, light on bench‑marks. The piece does a great job orienting readers to why certain families matter for local use, and why size or exotic architectures alone don’t guarantee usefulness. Standouts: the clear narrative on how Llama, Gemma, Mistral, Qwen, and others rose to prominence; the useful reality checks on MoE and huge models; and the emphasis on what actually works for home or small‑scale setups rather than chasing headline numbers.
{{< /review-callout >}}

Groke gave a lot more stuff. I took the first paragraph. Not following instructions are we!

{{< review-callout title="ChatGPT 5.2" rating="8/10" >}}
A thorough, if somewhat meandering, tour through the evolving zoo of local LLM families, packed with historical context, architectural nuggets, and candid takes on usability—from Meta's Llama dynasty (with a cheeky Zuckerberg jab) to Google's Gemma experiments and the underrated gems from Mistral and Qwen. Highlights include the no-nonsense breakdowns of model sizes, MoE innovations, and finetune shoutouts, making it a solid primer for hobbyists dodging cloud costs, though it skimps on deep benchmarks and teases unfinished threads like reasoning variants. The author's weary humor shines through the dry spots (that system crawl confession? Relatable), turning what could be a slog into an engaging read for anyone building their own AI playground—just brace for the cliffhanger on that penultimate promise.
{{< /review-callout>}}

Reads like a marketing blub. I am not putting out the next blockbuster movie.
