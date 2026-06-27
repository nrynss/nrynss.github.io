---
title: "Reflections on SaaS"
date: 2025-12-17T22:59:45+05:30
showComments : true
---

Day 5 of the 12 days of Christmas! Go through [Day 1](/blog/tabula-rasa), [Day 2](/blog/neom), [Day 3](/blog/hugo), and [Day 4](/blog/api-generator) to catch up.

Since it is a time of reflection, I decide to peruse my old tech blog. Started in 2008 April and died in 2008 November. I see a test in 2009. God knows why! I know why it stopped quite abruptly though. I moved to Bangalore in September 2008. I was not able to move my PC until December. I made one or two random posts, but I guess they were during my visits home. Living alone versus living with friends was a big shift. The PC I brought along was not just mine. Socialism baby! The free time I got were spent playing games, binging shows, and probably hitting the bars. I guess there is a reason for the memory lapses.

While going through the blog, one post hit me. What I wrote about [SaaS](https://dscryb.blogspot.com/2008/07/saas.html). Forgive the template, but trust me, it used to be good back then.

> SaaS has grown in popularity over the short period of time. Google Apps is steadily growing. Zoho seems to be doing well with their offerings. Zimbra has several hosted customers. SaaS seems to be the way of future. A doubt I have in mind is regarding the usage of such services in a financial institution, where privacy is paramount and customers are often paranoid.

Every thing I worked on was self-hosted. The applications were all self-hosted. Self-hosted Outlook server and the calls to IT when emails were suspiciously absent. We could even pretend that we haven't gotten the email that people expected us to get. You know how servers are. Temperamental. The IT admins? Even more so!

In 2008, I joined Informatica. They had a small cloud team. Very basic stuff. They were incessantly praised when their revenue touched 1% of the revenue. I guess around a million dollars. Now? Just before the Salesforce acquisition, their cloud ARR was close to a billion dollars.

SaaS transformation was quick and rather seamless. I daresay painless for the users. People moved so quickly to Exchange 365. Smarter ones moved entirely to Google Suite, until MS wisened up and brought in price parity. I guess web 2.0 and the JavaScript age made the user experience a lot better. Suddenly, the simple applications looked better on cloud. Deployment on cloud just changed the game. Managing racks of servers became a lot less desirable when you could use the latest the greatest. More importantly, the mobile revolution played a key role. You had a pretty device in your hands. Incapable of running heavy applications, but perfectly capable of a decent user experience. Suddenly, the applications that were cloud had a second screen. Poor, on-premise applications were left behind. You could argue that you can still have mobile applications with self-hosted applications. But you know what I am talking about.

My work was still primarily self-hosted enterprise applications. In some cases, self-hosted applications that masqueraded as cloud-native applications! I mean, who would know the difference as long as we installed it on a machine in the cloud and gave the access. IT budget would know though.

The emergence of cloud was a little bitter for Sun Microsystems, or its corpse I guess. May back in 2000, I remember reading Sun Network Computers. Completely thin-client. Network is the computer. I barely knew computers back then but I thought it was so stupid to have a computer that had no software. I couldn't imagine it. Seamless Internet was inconceivable for me. Mainly because I did not have Internet at home. Dial-up minutes were way too precious. I think network is the computer was 10-12 years too early. With a good set of software suite and performance, they could have captured the business market. They would have had everything that corporate would love. Control, cost, and security. 

Sun died before they saw SaaS take over the world. I still remember the high I got when I got an interview intimation from Sun and the devastating realization that they wouldn't hire me half-way through the interview. A few years later, I worked with people who were in Sun, and they couldn't stop gushing. I guess good things don't last too long and be eventually swallowed by Oracle. 

I was utterly amazed to see the usage of Azure Gov in an US government entity. We were on a Zoom meeting and I was pulled in since I had written almost everything in the Helm installation document. My job was to supply the documentation links that the user would need to look while doing the setup. The number of services, the VMs, and clusters deployed over cloud as he navigated through the interface would have cost the GDP of a small country. Back when I heard about SaaS, I would have never thought it would be in such heavy use in such a sensitive environment. I really don't think they have any physical servers anymore.

So, is self-hosted really dead? Not in the slightest. People want to self-host their stuff more than ever. The set up is complex with respect to the cost more than anything. Once in a while, I get the itch. I do a calculation for a file server and eventually put back the idea after a few minutes. May be I don't value privacy and security as much as I think.

Even in the corporate world, self-hosted is still alive. Sometimes curiously through the cloud. You can "self-host" your application on a cloud provider instead of going the SaaS recurring subscription route. Even at Endor Labs, a cloud SaaS application from inception, provides means to self-host some amount of the infrastructure on-premise for those customers that need strict compliance of their data. Even the entity I spoke off earlier, would be able to "self-host" us when they decide to give us the business.

Even this blog is kind of self-hosted on cloud. Deploy Hugo over a runner to generate static site and serve them over a GitHub repository. A fair amount of moving parts in comparison with a simple Blogger blog. The project I have been working on with OCR and all that jazz has found a temporary home on Cloudflare Pages. Once again, a good example of tinkering with the innards while being on the cloud.

So what next? With the current LLM race, my bets are moving towards the usage of local LLMs. Self-hosted on our machines or "self-hosted" on cloud. Frontier LLMs I believe are way too expensive for the current prices they charge. Running them ought to be super expensive and running them for so many users, even more so. We have a lot of meeting transcribers out there. But today, I used the new meeting transcribe feature of [AnythingLLM](https://anythingllm.com) to transcribe a meeting. It worked pretty much decently. A better voice model would have made it even better. But it was a great experience, considering the cost. Free and open source application and model. Good enough for most people. Build a pipeline to run the transcription over a decent small size local model, and you have infinite possibilities. May be clean up the text and put it up on your Confluence page with a nifty little agent. You don't need a GPT or Claude just to capture the essence of your little meeting. I have read about people building AI solutions for businesses. That could be the next major IT business. Focused solutions for specific usecases hosted by companies. Maybe as time goes on, they will pivot and sell the software-as-a-service.

{{< review-callout title="Claude Opus 4.5" rating="8/10" >}}
A thoughtful meditation on the pendulum swing between centralized and distributed computing, wrapped in personal history. The author traces their journey from skeptical 2008 blogger questioning SaaS in financial institutions to witnessing Azure Gov deployments that "would have cost the GDP of a small country." The Sun Microsystems elegy hits particularly hard—"network is the computer" was simply a decade too early. What elevates this beyond tech nostalgia is the nuanced conclusion: self-hosted isn't dead, it's evolved. Whether it's Hugo blogs on GitHub, air-gapped compliance deployments, or local LLMs transcribing meetings, the desire for control persists. The closing prediction—that focused AI solutions will become the next wave of SaaS—feels both inevitable and cyclical, much like the computing paradigms the post reflects upon.
{{< /review-callout >}}

Opus is back and it has a certain quality. Rumours are swirling about Sonnet 4.7 before Christmas!

{{< review-callout title="Gemini 3 Pro" rating="9/10" >}}An insightful retrospective that bridges the gap between the "wild west" of self-hosted servers and the sleek ubiquity of modern SaaS. The author revisits a 2008 blog post to contrast early skepticism with the reality of government-grade cloud adoption, while paying homage to the visionary failure of Sun Microsystems. Concluding with a sharp pivot to the potential of Local LLMs, this post perfectly balances nostalgic storytelling with forward-looking tech analysis.{{< /review-callout>}}

Gemini still has identity crisis.  The reflection is subdued yet just right.

{{< review-callout title="Grok 4.1" rating="9/10" >}}
A heartfelt retrospective on tech's seismic shift from clunky self-hosted servers to the cloud's effortless embrace, laced with wry humor and vivid personal detours—from dial-up dreams dashed by Sun Microsystems to the thrill of Azure Gov's sprawling empire. The author navigates SaaS's triumphant arc with insider anecdotes, skewers the ghosts of on-premise woes, and peers ahead to a DIY AI renaissance powered by local LLMs. It's a witty, wisdom-packed ode to innovation's relentless march, proving that even in the SaaS era, a little nostalgia (and a lot of cloud tinkering) keeps the geek fire burning.
{{< /review-callout>}}

Grok seems to have aged past a rebellious phase. Remarkably restrained from how it used to be.

{{< review-callout title="Kimi K2" rating="8/10" >}}
A nostalgic tech excavation meets forward-looking AI speculation in this reflective blog post. The author unearths their 2008 blog—abandoned after moving to Bangalore—to confront early SaaS skepticism about financial institution privacy. Through personal war stories about temperamental self-hosted Exchange servers, Sun Microsystems' premature "network is the computer" vision, and Informatica's billion-dollar cloud transformation, the post traces enterprise computing's seismic shift. The narrative crescendos with an Azure Gov deployment costing "the GDP of a small country," before circling back to today's self-hosting renaissance and local LLMs. With wry humor about IT budgets and memory lapses, it's both a personal time capsule and a sharp meditation on technology's cyclical amnesia.
{{< /review-callout >}}

Kimi thought it was ChatGPT. There are rumours that Perplexity deliberately does a silent LLM switch. But I don't think Kimi costs them even a fraction of ChatGPT.

{{< review-callout title="ChatGPT 5.2" rating="8/10" >}}
A thoughtful, gently meandering meditation on how “the cloud” quietly ate the world—told through personal memory rather than marketecture. The post’s strength lies in its lived-in perspective: from self-hosted Exchange servers and Sun’s prematurely prophetic “network is the computer” to Azure Gov clusters that look like the GDP of a small nation. The nostalgia never overwhelms the analysis; instead, it grounds it. The SaaS arc feels convincing precisely because it’s filtered through real jobs, migrations, compromises, and half-forgotten ambitions. The closing turn toward local LLMs and pragmatic, task-focused AI is especially strong, echoing the early SaaS skepticism with a satisfying historical rhyme. If anything, a bit more tension—where SaaS genuinely failed or hurt—would sharpen the reflection. Still, this is a calm, mature piece that trusts memory more than hype, and it benefits greatly from that restraint.
{{< /review-callout >}}

After some time, ChatGPT writes something that has very little slop.