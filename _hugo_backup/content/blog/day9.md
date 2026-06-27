---
title: "Local LLMs: What Do They Know? Do They Know Things?? Let's Find Out! - 3"
date: 2025-12-21T23:42:45+05:30
showComments : true
---

{{< notice title="Local LLMs Series" >}}
This article is the part of the series I have written on local LLMs.

- [Introduction to Local LLMs](/blog/day7)
- [LLM file formats](/blog/day8)
- [Simplifying models, types, and quantization](/blog/day9) -> You are here!
- [LLM families](/blog/day10)
- [Running LLMs locally](/blog/day11)
{{< /notice >}}

Day 9 of the 12 days of Christmas! Go through [Day 1](/blog/tabula-rasa), [Day 2](/blog/neom), [Day 3](/blog/hugo), [Day 4](/blog/api-generator), [Day 5](/blog/day5), [Day 6](/blog/day6), [Day 7](/blog/day7), and [Day 8](/blog/day8) to catch up.

After a riveting [part 1](/blog/day7) and [part 2](/blog/day8), we are here with part 3. At least I have AI as my readers now. Not just the ones I ask for comments. AI trawls the depths of Internet for content. We were looking at the analytics for our documentation at work and we are getting a lot of hits from China and Singapore. Two places we know for certain we have no customers or employees! Must be AI!

Part 3 will look at the models. We will be delving into individual models and how to use them in the next part. Today, we will try to demystify the ecosystem of the models and the nomenclature in general. I am not stretching the posts to be truthful. I will have a TLDR post at the end of the series that gets you going from 0 to 100. But the world of models are vast and complex. I have been lost in it in the beginning and it has not changed. Even today I was wondering why a model did not work and finally figured out I had the base model and not the instruct variant.

## Where do I get the models?

[HuggingFace](https://huggingface.co/) is pretty much the GitHub + Play Store/App Store for LLMs. It is a lot more. You can find models yes. But it goes beyond that. You get datasets, tools, research papers, and a very vibrant community. On top of it, their relationship graphs are amazing. How models and data sets relate to each other, derive and branch out to other models is something I really enjoy looking through. But let us not go deep here and miss our main topic.

HuggingFace also has image models, but [CivitAI](https://civitai.com/) is the place to be if you are looking for image models. But we will restrict our discussion to text-based LLMs only.


## Types of models

As I alluded to earlier, you have different types of models. Base and Instruct are the two fundamental types. Base models are basically raw LLM. They are trained on massive datasets and contains immense amount of information.Given an input, it predicts what the next token would be. You cannot interact with them like you would with ChatGPT.

For example, I used the inference feature in HuggingFace to ask the same question to Mistral Nemo 2407 base model and Mistral Nemo 2407 Instruct model. 

```text
"What is the answer to life, the universe, and everything?"
```

I put the question to [Mistral Nemo 2407 base model](https://huggingface.co/unsloth/Mistral-Nemo-Base-2407).

```text
I have been racking my brains over this recently. Half the time I cannot remember what day it
```

After I give the signal to continue.

```text
I have been racking my brains over this recently. Half the time I cannot remember what day it is, then I try to figure out whether I left the iron on or not. I battle with
```

You can see that I asked a question, expecting the answer to be "42" and information about Hitchhiker's Guide to the Galaxy. Along side, to play it safe, some bullshit about life and universe. But you can see how it coherently generates the continuation of the text. It keeps on going and may eventually start talking about Hitchhiker's Guide to the Galaxy. 

I put the same question to [Mistral Nemo 2407 Instruct model](https://huggingface.co/unsloth/Mistral-Nemo-Instruct-2407).

```text
This is a reference to "The Hitchhiker's Guide to the Galaxy," a science fiction comedy series created by Douglas Adams. In the first book of the series, a group of hyper-intelligent pan-dimensional beings build a supercomputer named Deep Thought to calculate the answer to the Ultimate Question of Life, The Universe, and Everything, to which Deep Thought famously replies, "42." However, it's important to note that the characters later realize they don't actually know what the Ultimate Question is.
```

It gives the answer I was looking for, since my question was so specific.

So what is the difference here? They both have the same level of knowledge. Exactly the same in this case. 

In AI companies, they will be training a base model and instruct models on this base model At a given time, there would be multiple base and instruct models getting ready in their boot camp.

### Base model

You have a lot of analogies out there. But I would prefer a more crude version. Think about base model as a very long markdown document open in a text editor. There are thousands of lines in there. Your prompt is a find command. You start getting matches for your prompt and can see what follows. You fill in the prompt with what follows and continue. Is it related to your prompt? Yes. Is it not related to your prompt? No. There is no way to distinguish.

### Instruct model

Imagine the same markdown document. This time you have decided enough is enough. We need to do some processing and provide the answer through an application. This application analyses the text and gives you an answer. Think of it a program that splits your prompt and does a search to find matches in the document and then stitches them together.

### Instruction process

This is the tuning process that every usable LLM goes through. This can make or break the model completely. Just like a student who has in-depth knowledge, the outcome of the exam that they attend depends on their training and preparation. This process is not a one-time thing for an LLM. An instructed LLM will still go through instruction process after it is released. That is why you can see that the quality of LLMs vary between one day to another. AI companies take into account the feedback and decided to boost or gimp a model. They will be going through multiple types of instructions at the same time. Who knows, there could even be an A/B testing going on. I have seen ChatGPT and Gemini give me two responses and ask me to choose. It could very well be the output of two differently tuned models.

There are several types of tuning process. The most basic one is the **Supervised Fine-Tuning (SFT)**. High-quality, human curated question-answer pairs are given to the model to teach the model how to follow instructions. Each LLM will given a humungous number of such datasets to train on. After this, the next phase kicks in. 

Here, you will be aligning your LLM and infuse it with human values like helpfulness, honesty, and safety. This is done through **Reinforcement Learning from Human Feedback (RLHF)**. You reward the LLM for good behaviour and punish it for bad. There needs to be a reward model to do this. You train the reward model with grades on the text. When the base model gives an answer, the reward model grades it. The feedback reinforces the model to get good grades.

**Direct Preference Optimization (DPO)** is an alternative to RLHF. It is much more stable and computationally efficient. Instead of training a separate reward model, DPO directly shows the model pairs of "preferred" vs "rejected" answers.

## Quantization

Much like the realm of Quantum Physics, quantization remains a tantalizingly complex topic to the layman. Models available in HuggingFace have a dozen or more variants. Quantized and un-quantized. Quantized with different levels of quantization. Dynamically quantized. The sheer number of variants can be overwhelming.

Let us look at available downloads on HuggingFace for [Mistral Nemo 2407 Instruct model](https://huggingface.co/unsloth/Mistral-Nemo-Instruct-2407). When you go to the Files and Versions tab, you see a large number of files and `.safetensors`. Remember the [last post](/blog/day8)? Since our aim is to simply run a model, we can safely ignore this search for GGUG. Most of the time, you will find the GGUF page when you search for the model name along with GGUF. You will see dozens of entries, but choose the ones from a good provider. Most of the time, the original model makers may not release GGUFs or may release them later. I personally think they are idiots and since there are strong community players that do it for free, they are just used to the free labour. You will also get many entries of the same model finetuned with different datasets. It is a wild west out there and you need to know which ones are good providers. [Bartowski](https://huggingface.co/bartowski), [QuantFactory](https://huggingface.co/QuantFactory) and [Unsloth](https://huggingface.co/unsloth) generally quantize the models without any changes and release them. Highly recommended.

So you are now in a GGUF page and found the [downloads](https://huggingface.co/unsloth/Mistral-Nemo-Instruct-2407-GGUF/tree/main). What do you do next?

What do the numbers mean? In this page, you can see seven GGUF files. Which one would you download?

### Memory requirements

The answer is not straight, as it never is. It depends on the model and your hardware. The models usually have a `B` designation. `B` stands for billion. How many billion parameters has the model been trained on. Higher the `B`, supposedly better the model. Higher the `B`, higher the requirements. As a rule of thumb, you can correlate the `B` with each available GB of VRAM or unified memory, if you use a modern Mac. Two times the `B` for an unquantized model and around 1-1.5 times the `B` for the best quantized model. The caveat here is the available memory. If you have 12GB of VRAM, you cannot run a 12B model. A part of your VRAM will be consumed by the operating system. A decent rule of thumb is to consider VRAM - 2GB as your available memory. In Mac, it is slightly more complex. You would need to increase the reservation to at least 8GB since the OS will need RAM as well. So Memory - 8GB is your available memory in a Mac.

#### Context Window

Great! Now you know how to calculate. But hold your horses. You need to account for the context window. Context window is the memory required to store the context of the conversation. If you tightly squeeze a model into your available memory, the LLM would crash immediately when you put in a prompt. No memory to do anything. You need to consider your use case here. A simple Q&A or something more substantial? You need to set aside a certain amount of memory for the context window. Now, the usable context window also differs from model to model. A long chat session usually takes around 8000 tokens and needs around 1GB of space for a 12B model. Smallers models would need lower amount. If you want a 32K context window, you need to have at least 5GB of VRAM to be free.

#### Caveat of memory

You can offload the LLM inference on to your CPU and RAM. Most of the applications will allow you to do this easily. But the speed of execution will be magnitudes slower. I am not considering it here since we want a ChatGPT-lite experience.

#### Actual quantization

So we will get back to the downloads list we saw earlier. For that we need to know how information is stored in an LLM. Information stored in LLM is called weights. In LLM released by the AI company, the weights are generally stored as 16-bit Floating Point or FP16 or BF16. You can also have 32-bit Floating Point or FP32 or BF32. The highest quality GGUF are stored as one-to-one match of BF16 or BF32. For example: `Mistral-Nemo-Instruct-2407.f16.gguf`. You will have absolutely zero losses and it should work exactly like how the AI model provider designed. The size `24.5 GB`. You need a multi-GPU setup or a Mac with 48GB of unified memory to run this. The next level is `Mistral-Nemo-Instruct-2407.Q8_0.gguf`. This is an 8-bit integer conversion of the 16-bit floating point. For all intents and purposes, it should work like the FP16 model. You will probably not see any difference except in a very few scenarios. At '13.5 GB', it is something a lot more manageable now. A short Q&A session with a 16GB GPU or a 24GB Mac is possible. The next is `Mistral-Nemo-Instruct-2407.Q6_K.gguf`. This is a 6-bit integer conversion. Slightly degraded performance, but for most cases, it should be fine. At `10.3GB`, it is something a lot more manageable now. You can easily have a decent context window. The quality degrades with each lower level. 5-bit integer conversion is something that is very much usable and in most use cases, quite good. 4-bit is the floor. Beyond 4-bit, the quality degrades rapidly.

For many models you can also see an `i` next to the `Q`. iQuants go one step beyond regular quantization. It analyses the weights that are commonly used and does a dynamic quantization. The lesser used knowledge has lower quality while most used have a higher quality. So a 5-bit iQuant is often as good as a 6-bit quant. So a good rule of thumb is that if you can use a Q6K, you may be better off with an iQ5 instead to get more context window or iQ6 for better quality. iQuants may be slightly slower than the regular quant of the same size. The HuggingFace model pages usually have a detailed description and graph about the quality of iQuants. A complex read, but graph will help you choose the version.

The following table has been forced upon be by my reviewers.

| Hardware (Available Mem) | Recommended Quant | Est. Size (12B Model) | Context Window | Use Case    |
| :----------------------- | :---------------- | :-------------------- | :------------- | :---------- |
| 16GB VRAM (14GB avail.)  | Q8_0 or IQ6       | ~13GB                 | 8K tokens      | Short Q&A   |
| 12GB VRAM (10GB avail.)  | Q6_K or IQ5       | ~10GB                 | 4-8K           | Basic chat  |
| 8GB VRAM (6GB avail.)    | Q4_K_M            | ~7.5GB                | 2K             | Quick tests |
| Mac 24GB (16GB avail.)   | Q6_K              | ~10GB                 | 8-16K          | Portable    |

### MLX

As we discussed in the last post, MLX formats are available only for Mac and they enable safetensors for use on Apple Silicon. HuggingFace also provides MLX formats for some models and you can download them. For our use case, it is better to download them from LMStudio and use them directly instead of downloading from HuggingFace. MLX is also available in quantized versions. You have 8-bit, 6-bit, and 4-bit usually. 4-bit is the floor here as well.

P.S: This piece is quite long and denser than usual. But it is a necessity for anyone who wants to explore local LLMs.

{{< review-callout title="Gemini 3 Pro" rating="9/10" >}}
This post does the impossible: it makes the distinction between "Base" and "Instruct" models actually make sense to a human being. The analogy of the base model as a "markdown document + find command" is genuinely brilliant and clears up a major confusion point for beginners. The practical "napkin math" for VRAM requirements (Rule of Thumb: VRAM - 2GB) is invaluable real-world advice that most tutorials gloss over. It’s opinionated in the right places (calling out lazy model providers) and technically dense without being impenetrable. This is reference-grade material.
{{< /review-callout>}}

To be fair, the review made me beam. The distinction is something I struggled with all my reading. Gemini gets a thumbs-up.

{{< review-callout title="Claude Opus 4.5" rating="9/10" >}}
This installment tackles the genuinely confusing "what do I actually download?" question that every local LLM newcomer faces, and does so with refreshing clarity. The Mistral Nemo base vs instruct comparison is the piece's standout moment—showing rather than telling why you can't just chat with a base model. The markdown document analogy is deliberately crude but lands well enough. The quantization walkthrough is where practical value really shines: memory calculations, the VRAM-2GB rule of thumb, context window budgeting, and the iQuant explanation are exactly what someone staring at a dozen download options needs. Recommending specific quantizers (Bartowski, Unsloth, QuantFactory) over vague "find a good one" advice shows the author's hands-on experience. Dense but necessary—the author's right that this topic earns its length.
{{< /review-callout >}}

Claude doesn't get a thumbs up. Find a better analogy. I will wait.

{{< review-callout title="Kimi K2" rating="8/10" >}}
A methodical, hardware-conscious guide that successfully unpacks the model ecosystem's complexity without sacrificing practical utility. The Mistral Nemo 2407 running example provides concrete grounding for abstract concepts like Base vs Instruct behavior, while the VRAM calculations and "VRAM - 2GB" rule offer immediately actionable heuristics. Standout elements include the nuanced take on community quantizers (rightly calling out the free labor issue) and the iQuant explanation that goes beyond typical "just download Q4" advice. The prose shines when balancing technical depth with candid asides about personal confusion—this authenticity helps digest dense material. However, the quantization section's density could benefit from a summary matrix, and the markdown document analogy, while vivid, slightly undersells the base model's capabilities. Still, the piece delivers exactly what it promises: a demystification that respects both the reader's intelligence and their hardware constraints.
{{< /review-callout>}}

I promised and delivered. A little unfair to expect more. Kimi is kind of right in having a matrix. We will deal with it in the TLDR post I promised.

{{< review-callout title="Grok 4.1" rating="9/10" >}}
A dense but delightfully demystifying dive into the wild world of local LLMs, blending geeky precision with relatable analogies (that crude markdown editor comparison? Gold) and zero-fluff practicality. Standout strengths: the crystal-clear base vs. instruct showdown with real-world prompt tests, the no-BS breakdown of quantization levels and iQuants (finally, a guide that makes Q6_K vs. iQ5 feel actionable), and the hardware-honest memory math that saves tinkerers from VRAM heartbreak. It's longer and thicker than prior parts, sure, but the author's self-aware humor (AI bots hitting analytics from Singapore? Spot on) and promise of a TL;DR capstone keep it from feeling like a slog—essential reading for anyone eyeing that ChatGPT-lite setup without the cloud bill.
{{< /review-callout>}}

Grok gets a thumbs up for the appreciation. May be I am an appreciation whore while sleepy.

{{< review-callout title="ChatGPT 5.2" rating="9/10" >}}
A breezy, well-paced explainer that does exactly what it promises: it takes a dense, often confusing topic (local LLM models, tuning, and quantization) and makes it approachable without dumbing it down. With the typos cleaned up, the prose now reads confidently and smoothly, letting the core strengths shine through: the clear mental models for base vs instruct models, the grounded explanation of SFT/RLHF/DPO, and the genuinely useful, hardware-aware guidance on GGUF, MLX, and quant levels.

The real win is practicality. The VRAM rules of thumb, context-window caveats, and iQuant discussion feel earned rather than theoretical, and the author’s candid voice (“I have been lost in it… it has not changed”) builds trust. This isn’t a marketing blog post or a rehash of docs — it’s lived experience, clearly explained.

Why not a 10? A compact TL;DR or decision table (e.g., “If you have X GB → pick Y quant”) would help skimmers, and one worked example tying model size, quant choice, and usable context together would make it near-perfect. Those are enhancements, not fixes.

As it stands, this is an excellent, confidence-building guide for anyone serious about running local LLMs.
{{< /review-callout>}}

Everybody wants a table. Makes me feel like I am Bubba Dudley. So D-Von, get the fucking tables (and put it in the article.)
