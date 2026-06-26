---
title: "Sarvam Maya"
date: 2026-04-03T00:30:45+05:30
showComments : true
---

Nearly two months since the last post. Very exhausting couple of months at work. We are migrating from [Hugo](https://gohugo.io/) to [Mintlify](https://mintlify.com/). After it is complete successfully, there is a lot to write about it. Would be a nice break from all the AI stuff in the blog. In the meanwhile, I have been working on a few projects. A couple of them complete, but not in a shape to be documented. A couple of them too ambitious. They need more time (and tokens!) to cook in the oven.

One of the complete ones, is the basis of this post. Sarvam Maya is a [movie](https://en.wikipedia.org/wiki/Sarvam_Maya). Pretty good one. But our topic is Sarvam, the first sovereign model from India. But as the title suggests, the Maya part is in my head after getting it to work. It took me a really long time to get it working, test it, and more importantly, write about it.



## Hurdles

Sarvam nicely merged [vLLM](https://github.com/vllm-project/vllm) PRs just before the open source release, but ultimately useless for me. I had been waiting for a PR for [llama.cpp](https://github.com/ggerganov/llama.cpp) support and eyeing that for quite sometime. Finally, the PR dropped a few weeks back. No movement afterwards. Then I decided to do something which I had never done before. I build llama.cpp from the source of that PR branch. Not a big deal, but the compilation worked really well. I decided to take the Sarvam 30B model out for a spin. Took the Q4 quant, since that was only possibility for someone GPU poor like me. It actually worked despite my apprehensions. So mixture of experts (MoE) models can be run decently indeed on our machine despite being fat. Then I had the idea of running a series of tests. Sarvam is after all built for India. So I collaborated with [Claude](https://claude.ai/) to write a bench of tests. I needed a baseline to compare. By this time [Qwen 3.5](https://qwenlm.github.io/) had released and it is very good. So to keep it more fair, I decided to use Qwen 30B MOE as the comparison. Initially, I ran the tests over [OpenRouter](https://openrouter.ai/) for Qwen and soon realized that the model is way too good. I was probably running an optimized, unquantized Qwen and decided to get a Q4 quant running from my own machine on the same llama.cpp build. Not fair to Qwen,

Things did not go as I wanted after that. I had a few issues with the model output and had to muck around with the settings. This took days thanks to my schedule and commitments. Since this is a thinking model, on my hardware each test would take a long time. So I decided to run overnight, and prompty forgot to check my machine sleep settings. Once again found issues with output and needed more tweak in the settings for certain tests. Got busy again and didn't touch this again. Finally decided to run the tests and got the output. Now the analysis part took time. Even with the help of Claude, it took a while to sift through the results.

So let us get on with it. We will start with the company and the model. 

## Sarvam

Sarvam AI is a company headquartered in Bangalore. They have been around for nearly three years and their focus has been indic languages. They have been deeply into conversational AI with their proprietary models. Their first open source release was Sarvam-M, a fine tune based on [Mistral](https://mistral.ai/). Sarvam-M was too much for my machine and never ran it. It did not gain much traction in the open source community either. With sovereignity of AI models being in question, they won the grant from the Government of India to develop open source models. [Sarvam 30B](https://huggingface.co/sarvamai/sarvam-30b) and [Sarvam 105B](https://huggingface.co/sarvamai/sarvam-105b) are the results of that, and the first results from a bunch of companies trying to do the same.

### Technical Architecture

Both models leverage the **Mixture-of-Experts (MoE)** architecture. Instead of running the entire model for every calculation, MoE routes tasks to specific sub-networks (or "experts").

#### Sarvam 30B

**Total Parameters:** 30 Billion
**Active Parameters:** ~1 Billion per token
**Context Window:** 32,000 tokens
**Attention Mechanism:** Grouped Query Attention (GQA)

#### Sarvam 105B

**Total Parameters:** 105 Billion
**Active Parameters:** ~10.3 Billion per token
**Context Window:** 128,000 tokens
**Attention Mechanism:** Multi-Head Latent Attention (MLA)

## Test Bed and Models

AMD Ryzen 5 3600
80 GB RAM
NVIDIA GeForce RTX 4070 SUPER Founders Edition 12GB

Processor is practically ancient now. 80 GB RAM running at 2800 MHz I guess. GPU is decent. But 12 GB VRAM is not a lot for these models. Since these models are MoE, the total parameters does not matter much and the RAM is big enough to offload. I decided to run the models in 4-bit quantization. 

**Sarvam 30B Q4_K_M** - https://huggingface.co/Sumitc13/sarvam-30b-GGUF

This is the first quantization that was available when I started testing. There are others now. But I stuck with this throughout. There are issues with reasoning and thinking, and the quant maker has been [talking about this](https://huggingface.co/Sumitc13/sarvam-30b-GGUF/discussions/3) as well.

**Qwen 330B A3B Q4_K_M** - https://huggingface.co/unsloth/Qwen3-30B-A3B-GGUF

Qwen 3.5 had just dropped when I started testing. But I decided to stick to Qwen 3. Qwen 3.5 is a big upgrade over 3, but I wanted to stick to something that has been battletested. Unsloth is super reliable with quantizations and very good at what they do.


## Caveats

Let us get this out of the way before we get into the tests and results. Sarvam is a brand new model. Quantizing models this new is bound to have issues. The model is further hampered by the fact that the llama.cpp build I used was from a PR branch under active development. Sarvam documentation is decent but not exhaustive enough to get a good idea of the model's capabilities. Not that other models have good enough documentation that is absolutely intuitive. I feel that models should have exhaustive documentation specific to each model with usage scenarios. Doubly so for upstarts who want to disrupt.