---
title: "Local LLMs: What Do They Know? Do They Know Things?? Let's Find Out! - 2"
date: 2025-12-20T23:42:45+05:30
showComments : true
---

Day 8 of the 12 days of Christmas! Go through [Day 1](/blog/tabula-rasa), [Day 2](/blog/neom), [Day 3](/blog/hugo), [Day 4](/blog/api-generator), [Day 5](/blog/day5), [Day 6](/blog/day6), and [Day 7](/blog/day7) to catch up.

The next part of the series is here. About the formats used by the LLMs. I am talking about LLMs in general, not just local LLMs. From what we know, your state-of-the-art models can also be available in these formats, and you can run theoretically run them locally. You would probably need a small power plant and custom hardware to do so. Small caveat. Yes.

We have a [very nice blog from HuggingFace](https://huggingface.co/blog/ngxson/common-ai-model-formats) talking about the various formats. A good read if you want to delve a little deeper. I will be touching only on the periphery without going into the technical details. 

An LLM file generally contains the weights of the model, or the actual "intelligence" of the model. It may also contain the configuration of the model and runtime information as to the details of how you can infer with the model. Since the file contains the weights of the model, we call it "open source". To be fair, it should be called "open weights". You really don't have the source or the actual training data. Now that Ozempic is here, we may be able to call out "weights" without offending anybody.

## Pickle or PyTorch format

The OG format that you will find the initial models in. You can still find it. It is the legacy serialization method for storing model weights using Python's pickle module. It is unsafe as a rule. It can execute arbitrary Python code during loading, making them dangerous for untrusted models. Attackers can embed malicious payloads that execute when your program runs, creating supply chain attack vectors. Stay away. You don't need them anymore. HuggingFace developed the safetensors format to replace it and it has been replaced successfully. You would need to write your own code to load the model with PyTorch, if at all you are inclined.

## safetensors

safetensors is the evolution of the pickle format. It is a secure format created by HuggingFace. They contain the model weights. You need to use a library to load the model. A lot of them exist out there. PyTorch, HuggingFace Diffusers, AMD Quark, and a lot more in all the languages you might want to use. Once again. Not something you can just download and deploy. For local LLM use, it is not something that I would recommend.

## GGUF

When every model releases, the question that props up immediately is, "GGUF when?" GGUF is the model format that you can just download and use. GGUF stands for GPT-Generated Unified Format. Aside from model weights, they also contain the configuration of the model and the runtime information required for model inference. GGUF was derived from GGML (Gerganov's Generalized Machine Learning), created by Georgi Gerganov. While GGUF is often said to stand for GPT-Generated Unified Format, it's actually a successor format that inherited GGML's naming pattern. To make things plain, if you want to use local LLMs, you need to use GGUF (unless you are in Mac, in which case go to the next section).

## MLX

MLX is Apple's open-source machine learning framework designed specifically for Apple Silicon. It effectively utilizes the unified memory model of Mac hardware. MLX effectively turns safetensors into an Apple-compatible LLM. Unlike GGUF, you need to download safetensors files and configuration files. Fortunately, tools like LMStudio mask this complexity. To be honest, if you want to run a local model effectively, Mac is the way to go at a laptop form factor. Especially with MLX around. Unified memory works like a charm. With 18 GB memory, you can easily run a model that needs a beefy graphics card. If you can get more memory, even better. You would need a proper desktop set up to beat that in terms of thermal performance and price. Not all models are available in MLX format. But there is a dedicated MLX community that works to get most of the popular models out in the MLX format.

## ONNX

ONNX is an open-source specification that defines how to serialize a model’s computation graph, operators, and data types into a portable file format. It is a cross-org effort to standardize models. ONNX is widely used for production deployment and can handle large transformer and LLM architectures. But in our discussion about using local LLMs, ONNX is not something you would use. But it is something you should know if you are remotely interested in LLM implementation at a device level. ONNX runtime Web can run ONNX models in the browser through web GPU and webassembly. I have been thinking of a project to run a model on the browser. But the main hesitation is with the memory constraints and the fear of breaking a customer's browser. There are also WebLLM / WebGPT / WebRNN style projects that take GGUF or framework models and compile to WebGPU‑friendly formats.

## GPTQ/AWQ/EXL2

These are models I have never used. They are quantized versions made to run on nvidia hardware with specialized runtimes like vLLM. They are faster and give better output than GGUF on high-end nvidia hardware and when you start paddling in local LLM land, you might graduate to using them.

P.S: We are missing stuff like quantization in this post. I thought I will reserve it for when we discuss about downloading and running the models. Hopefully, we can cover them in the next post along with a new choice models.

{{< review-callout title="Gemini 3.0" rating="9/10" >}}
A cheeky yet solid navigation through the alphabet soup of LLM file extensions. You’ve successfully demystified why we all scream "GGUF when?" while rightfully flagging Pickle files as the digital biohazards they are. The Ozempic wisecrack for "open weights" landed perfectly, and the MLX shoutout confirms you know where the laptop power lies (unified memory ftw). It’s a concise, safety-first guide that keeps the technical jargon from suffocating the fun—though admitting you haven't touched EXL2 yet leaves a juicy cliffhanger for your eventual descent into serious GPU madness. A perfect primer for anyone confused why their "open source" model is just a 20GB file they can't open.
{{< /review-callout>}}

A smart and concise review. Just right.

{{< review-callout title="Claude Opus 4.5" rating="8/10" >}}
A breezy decoder ring for the alphabet soup of LLM file formats, walking the reader from pickle's security nightmares through safetensors' HuggingFace redemption arc, landing squarely on GGUF as the pragmatist's choice—with a detour through Apple's MLX unified memory paradise that reads like a love letter to M-series silicon. The Ozempic quip about "open weights" lands perfectly, and the honest "never used these" admission for GPTQ/AWQ/EXL2 is refreshingly humble in a space drowning in pretend expertise. The ONNX browser tangent teases an intriguing future project while wisely acknowledging customer-browser-breaking anxiety. What keeps this from a 9 is the slightly abrupt treatment of the nvidia quantization trio and a missed opportunity to tie the format zoo back to the tools from Part 1—imagine: "LM Studio loves GGUF, here's why." Still, as a format primer that respects the reader's time while setting up the quantization deep-dive ahead, it delivers exactly what it promises: periphery without pretense.
{{< /review-callout >}}

I didn't the missed opportunity. Hallucination? Claude or me is the question.

{{< review-callout title="Grok 4.1" rating="8/10" >}}
A breezy dive into the alphabet soup of LLM formats, kicking off with the villainous pickle's security nightmares and gliding through safetensors' safe haven, GGUF's plug-and-play heroism (the real MVP for local tinkerers), MLX's Apple-exclusive magic for unified memory wizardry, ONNX's browser-teasing portability, and a teaser nod to the NVIDIA elite squad of GPTQ/AWQ/EXL2 quantizations. It's got that signature cheeky vibe—Ozempic weight puns included—keeping things light while dropping just enough periphery knowledge to arm the homebrew crowd without drowning in tech specs. Perfect setup for the quantization sequel, though a smidge more on real-world format swaps would've bumped it to a nine; still, it's the kind of primer that makes demystifying model files feel like casual bar chat rather than a spec sheet slog.
{{< /review-callout>}}

Soup seems to be flavour of the day. May be the winter and the cooling systems are making the LLMs crave for some heat. ChatGPT can't resist yapping on such a short piece too.

{{< review-callout title="Grok 4.1" rating="9/10" >}}
A breezy, well-paced explainer that does exactly what it promises: takes a sometimes dry, geeky subject (model file formats) and makes it friendly, practical, and occasionally funny. Clear wins: the safety callout on pickle files, the usable distinction between safetensors / GGUF / MLX / ONNX, and the honest, platform-first advice (the Mac/MLX point is especially useful for laptop tinkerers). The prose balances enough technical detail to be useful without getting lost in minutiae, and the author’s voice (cheeky, hands-on) keeps the piece engaging.
{{< /review-callout>}}

On point is Grok today.

{{< review-callout title="Kimi K2" rating="8/10" >}}
A refreshingly accessible deep dive into the alphabet soup of LLM file formats, this second installment cuts through the jargon with conversational wit that makes technical decisions feel less daunting. The author walks readers from the dark ages of pickle files (with appropriate warnings about their security nightmares) through to modern workhorses like GGUF and Apple-specific MLX, sprinkling just enough humor to keep things lively without undermining the substance. The structure shines—each format gets its own clear section with practical advice on when to use it, making this a solid reference for anyone actually running models locally rather than just reading about them. The MLX section is particularly valuable for Mac users, capturing why Apple's unified memory architecture changes the game. While the post admirably avoids getting lost in technical weeds, some sections (like ONNX and the quantization formats) feel more like teasers than full explanations—understandable given the scope, but leaving readers wanting more. The self-aware asides about future posts show the author knows their audience wants depth. Perfect for developers moving from cloud APIs to local inference who need a no-nonsense guide to what files to download and why. It's honest about limitations, practical in focus, and manages to make model formats—of all things—actually engaging.
{{< /review-callout >}}

Kimi K2 is on a mission to dethrone ChatGPT on slop.