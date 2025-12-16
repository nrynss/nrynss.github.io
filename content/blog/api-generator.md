---
title: "From static to dynamic"
date: 2025-12-16T18:45:20+05:30
showComments : true
---

Day 4 of 12 days of Christmas!

Today we are going to be little more Endor Labs specific. The post may sound a little off to those who are not used to our kind of work.

API is the cornerstone of our platform. Endor Labs has a very strong platform where the interaction between components is strictly through the API. Many companies claim to be so, but there are ugly duct-taped solutions more often than not. But here, every interaction is through the API internally. The user interface and our CLI tools, the two main ways in which a user interacts with our platform, run on top of the APIs.

The API documentation that we have is also quite fascinating. We generate the REST API documentation from our protobuf files automatically. So, you have to rely on editing the proto files to update the API reference. Our lead developers have also written user facing REST API documentation that would enable users to use the API.

Even though we have all this, the accessibility of API is not as good as it should be. It is complex. We have a nifty command in our CLI, just to access the API. A lot of singular API calls are better served through the CLI command. We have provided quite a few examples in our documentation on how someone can use that. Once again, the sheer number of possibilities and the fact that to craft this command needs Endor Labs knowledge is still a barrier.

I have been pondering over this problem for quite a while. I had been formulating a way to generate these API commands based on user input in a form. The idea had been cooking in my head for quite some time, when we got yet another API related discussion over Slack and how the user was not able to create one.

By this time, we were fully using Cursor as the IDE for writing. I found it very refreshing. Not the auto-complete. The auto-complete is good for code, but codswallop for documentation. I had to turn off auto-complete for markdown, because of the kind of nonsense it gave. What I found refreshing was the fact that, it could look thoroughly into the source code and give you specific answers to how certain features worked internally and what sort of options are available in the code. As a writer, this kind of information is gold. You are better equipped to ask questions to the developers regarding the feature.

Anyway, I decided to vibe code something that could generate CLI commands that interfaced with the API through user requests. My initial idea was LLM driven, which I soon dropped. Adding an LLM layer to this would mean a lot of work and uncertainty. I decided to go more manual and was able to create something that generated basic commands. Then I hit on a jackpot. I had created a curated list of API endpoints and services that users would generally use. The OpenAPI spec was small enough. I decided to read from it and generate the commands on the fly. I was worried about the performance, but it seemed satisfactory in local. But the best thing here was that spec contained help text and data types. We could do a validation while the user entered the values. We could show them only those fields that are really configurable. We could give them the description right from the horse's mouth instead of the deciphered horse snort. If there was a problem, we would need to fix at the source and every thing would percolate. The challenge was with drill-down. There were objects that you can pass as arguments that contained fields and other objects, that need further drill-down. To my surprise, Cursor sailed through these situations. 

The API builder was a try that I did over an afternoon. Once I realized it was truly viable, I had a prototype ready in a couple of days. I did not expect such a warm reception though. People loved it and had seriously good feedback. We polished it over the next few days and made it live.

It still has a long way to go. Endor Labs CLI is extremely powerful and there are some powerful features in the API design that I am yet to expose through the builder tool. Something to look forward to in the future.

The main takeaway here is the kind of extensibility that Hugo offers through the short code system. We were able to turn it into a platform beyond static content. The performance is comparable or better than a regular web application. Without even giving the consideration that it handles a few megabytes of JSON. The API builder kicked open a door for our team to similar tooling on the documentation. We have done a couple more and still cooking up a few more.

This blog has been pretty morose about AI. But such an implementation will be impossible without a state of the art LLM. You can get a developer to make it. For that, you need a proper requirement definition. You have to get a person dedicated to this entity alone to make it happen. For this project, I improvised all the way. The UX design and architecture firmed up only when the first iteration was complete. You simply cannot ask for resources for such a project unless you do it yourself. To do something like this, I needed an LLM to be my partner.

I have been scant on the actual implementation and usability of the API builder. It was a conscious decision. You can check out the query builder in [the Endor Labs Documentation](https://docs.endorlabs.com/rest-api/api-query-builder/).

The following example shows a query you can build with the API builder.

```bash
endorctl api list -r AuditLog --namespace test --filter "spec.payload.@type contains [google]" --filter "spec.payload.@type contains [google] and meta.create_time >= date(2024-01-01) and meta.create_time <= date(2025-10-31)" --page-size 10 --sort-path "meta.create_time" --timeout 60s
```

It can get a lot more complex than this query. You can imagine how difficult it would to be write one and get it right in the first try.

For a lot of users, this is the best way to access the API and get some information quickly. Happy Christmas to them!

P.S: My respect for those who clean data for LLMs after OCR. I managed to get almost everything for a project into text data. Finally had to programmatically fix some errors. I cannot imagine how much time and money would have been spent by our AI companies just to get the data right. Not to mention the catastrophic losses incurred in money and morale when the training fails because of the bad data. Maybe I should write a data builder tool sometime that wraps up a powerful CLI that does the OCR and cleansing.

{{< review-callout title="Grok 4.1" rating="7/10" >}}
This introspective entry in the "12 Days of Christmas" series demystifies Endor Labs' API challenges and the author's nimble prototyping of a CLI query builder using Hugo shortcodes and Cursor's code-insight features. It's a relatable tale of innovation born from user pain points, with sharp observations on AI's role in bootstrapping solo projects—though scattered typos and a tangential P.S. dilute its polish, leaving room for tighter editing to match its clever technical verve.
{{< /review-callout>}}

"Verve". Getting all fancy now Grok. Ironic for someone named Grok. Are you one the mean brothers of Grawwp?

{{< review-callout title="Claude Sonnet 4.5" rating="7.5/10" >}}
"From static to dynamic" offers a compelling case study in rapid prototyping and practical problem-solving, demonstrating how modern tooling transformed a complex API accessibility challenge into an afternoon prototype. The post excels at capturing the iterative development process and makes a nuanced argument for AI-assisted development beyond simple autocomplete. However, it struggles with focus—the narrative meanders between technical decisions, philosophical reflections on LLMs, and an abrupt pivot to OCR data cleaning. The acknowledgment that it's "Endor Labs specific" is both honest and limiting; readers outside this context may find the API builder's value proposition abstract. The post would benefit from tighter structure and perhaps a concrete user scenario showing the builder in action. Still, for those interested in documentation-as-platform thinking and the pragmatics of shipping tools quickly, there's genuine insight here about what becomes possible when static sites stop being static.
{{< /review-callout>}}

Opus seems to be lost cause. I got redirected to Sonnet. That quality difference really shows here.

{{< review-callout title="Gemini 3 Pro" rating="8.5/10" >}}
"From static to dynamic" serves as a vivid dispatch from the front lines of the AI-assisted documentation revolution. The post succeeds in demystifying the "vibe coding" phenomenon, grounding it in a concrete engineering victory—leveraging OpenAPI specs to bypass the hallucination risks of LLMs. The insight on Cursor acting as a "force multiplier" for solo writers is particularly sharp, transforming the technical writer from a passive observer into an active tool-builder. However, the piece feels structurally uneven; the narrative momentum built during the API builder's creation dissipates in the final third, trailing off into a somewhat disconnected postscript on OCR data cleaning. While the "Endor Labs specific" disclaimer sets expectations, the core lesson about Hugo's extensibility has broader appeal that could be centered more aggressively. Ultimately, it’s a rallying cry for technical writers to stop waiting for engineering resources and start building their own solutions.
{{< /review-callout >}}

Gemini still thinks it is 1.5. It actually did some fine editing that others didn't. It even prefaced with something like, "I know you didn't ask for this but here are some things anyway." Very cool.

