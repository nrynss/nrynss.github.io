---
title: "Local LLMs: What Do They Know? Do They Know Things?? Let's Find Out! - 5"
date: 2025-12-24T23:42:45+05:30
showComments : true
---

Day 11 of the 12 days of Christmas! Go through [Day 1](/blog/tabula-rasa), [Day 2](/blog/neom), [Day 3](/blog/hugo), [Day 4](/blog/api-generator), [Day 5](/blog/day5), [Day 6](/blog/day6), [Day 7](/blog/day7), [Day 8](/blog/day8), [Day 9](/blog/day9), and [Day 10](/blog/day10) to catch up.

We motor along to the finale of local LLMs and the penultimate post on 12 Days!

We covered a lot about models and stuff earlier. We have a little bit more to cover regarding the model traits.

## Model traits

Traits is my own term to describe the fundamental character of a model. Instruct models are the models that you want to deploy. Some of them have extra traits.

### Thinking

You see thinking all the time in state of the art models now. Especially when you use a more powerful version and enable thinking. What this means is that, the LLM would reason with itself before it gives an answer. You can see the thought process, and many a time the thought process had the right answer more than what the LLM gave as the answer. There are several thinking models available now, especially from Qwen.

### Vision

Models like LLaVA, Qwen2-VL, Llama 3.2 Vision that process images alongside text. They have excellent vision capabilities, that are attached to the text model. You can upload images and it can reason about the image. You can use it for image captioning, image description, and image analysis. 

### Code-specialized

CodeLlama, DeepSeek-Coder, Qwen2.5-Coder, and Devstral come under this category. You can use them coding assistants and even plug them into your IDE to get stuff like code completion and unlock usecases like Cursor. They have a feature called FIM (fill-in-the-middle) that allows them excellent capability for code completion.

### Tool use/Function calling

Models trained to output structured JSON for tool invocation. Important if you're building agents locally. A lot of small models are excellent for this usecase.

### Uncensored/Abliterated

Models with safety training removed. Controversial but excellent for roleplay, content generation, and usecases like creating unsavoury scripts for "testing". Recently, I had to rely on one of them to create a script that had known vulnerabilities to test a security feature. The case here is not that others make perfect code without vulnerabilities. They do it all the time. I wanted specific vulnerabilities and most of them refused.

### Embedding models

We have not touched upon these models yet. You will see them and hence mentioning them. They are used to create vector embeddings that can be used by generative models to understand context. They cannot generate text and cannot be deployed like a normal model.This is probably the first component in a RAG pipeline.

Enough talk. Let us get some action.

We will be go on with our exercise.

## Inference with LM Studio

Let us open up LM Studio and download the model. You need to get into the developer mode to see that section. The following gif shows how to do it and search for the model.

{{< gif src="/images/llm/lmstudiomodelzoo.gif" alt="LM Studio" caption="LM Studio" >}}

As you can see, you need to choose your model size and LM Studio makes it easy with a icon that shows whether full GPU offload is possible. Simply put, green means it can run on your graphics card alone or Mac memory. Remember the rule though, you need around 1-2 GB set side for context. So even if it is green, you need to make sure you have enough memory for context.

### Llama 3.2 3B

Let us load a model and get started.

{{< gif src="/images/llm/llamastart.gif" alt="LLama 3.2 3B" caption="LLama 3.2 3B" >}}

As you can see. It is blazing fast.

```text
70.66 tok/sec 42 tokens 0.25s to first token Stop reason: EOS Token Found
```

The response is not that bad. Quite good in fact. It recognized the system time and identified that it is nearly new year. This is a tiny model!

Let us do some tests

```text

Give me 3 fictional book titles about programming, formatted as JSON with title, author, and year fields.

```

```json
[
  {
    "title": "The Bug Whisperer",
    "author": "Evelyn Byte",
    "year": 2019
  },
  {
    "title": "Code of Deception",
    "author": "August R. Wychwood",
    "year": 2020
  },
  {
    "title": "Synthetic Dawn",
    "author": "Lena Nexus",
    "year": 2021
  }
]
```

Usable output!

Let us give a more realistic test.

```text
Convert the CSV into Markdown table.
```

```csv

title,author,year,rating,genre,review
"The Pragmatic Programmer",Hunt & Thomas,1999,5,Software,Classic. Still relevant somehow.
"Clean Code",Robert Martin,2008,4,Software,Good advice buried under Java verbosity
"SICP",Abelson & Sussman,1985,5,Computer Science,Broke my brain. Thank you.
"Code Complete",Steve McConnell,2004,3,Software,Exhaustive. Exhausting.
"The Mythical Man-Month",Fred Brooks,1975,5,Management,50 years old and managers still don't get it
"Design Patterns",Gang of Four,1994,4,Software,AbstractFactoryFactoryFactory
"Refactoring",Martin Fowler,1999,4,Software,Made me mass-rename things for a week
"You Don't Know JS",Kyle Simpson,2015,3,JavaScript,Turns out I really didn't
"Eloquent JavaScript",Marijn Haverbeke,2011,4,JavaScript,Finally understood closures. Briefly.
"Learning Python",Mark Lutz,2013,3,Python,1500 pages. Could've been 400.
"Fluent Python",Luciano Ramalho,2015,5,Python,Made me mass-rewrite everything
"Python Crash Course",Eric Matthes,2015,4,Python,Does what it says on the tin
"Automate the Boring Stuff",Al Sweigart,2015,5,Python,Actually automated boring stuff
"Effective Java",Joshua Bloch,2001,4,Java,Still pretending I'll use Java again
"Head First Design Patterns",Freeman & Robson,2004,4,Software,Pictures helped. Not ashamed.
"The C Programming Language",K&R,1978,5,C,47 years. Still the best.
"Expert C Programming",Peter van der Linden,1994,4,C,Deep Secrets indeed
"Programming Rust",Blandy & Orendorff,2017,4,Rust,The borrow checker still haunts me
"The Rust Programming Language",Klabnik & Nichols,2018,5,Rust,The Book. Worship it.
"Rust for Rustaceans",Jon Gjengset,2021,5,Rust,Finally understood lifetimes. Maybe.
"Go Programming Language",Donovan & Kernighan,2015,4,Go,Simple until it isn't
"Learning Go",Jon Bodner,2021,4,Go,Practical and honest
"Concurrency in Go",Katherine Cox-Buday,2017,4,Go,Goroutines go brrrr
"JavaScript: The Good Parts",Douglas Crockford,2008,4,JavaScript,Very thin book. Telling.
"Effective TypeScript",Dan Vanderkam,2019,4,TypeScript,62 ways to fight the compiler
"Programming TypeScript",Boris Cherny,2019,3,TypeScript,Types all the way down
"The Linux Command Line",William Shotts,2012,5,Linux,Should be mandatory reading
"Linux Pocket Guide",Daniel Barrett,2004,4,Linux,Lives in my bag
"UNIX and Linux System Administration",Nemeth et al,2017,4,Linux,The phonebook of sysadmin
"How Linux Works",Brian Ward,2014,5,Linux,Finally understood init
"Docker Deep Dive",Nigel Poulton,2016,3,DevOps,Deep enough I guess
"Kubernetes Up & Running",Burns et al,2017,3,DevOps,Still don't know what a pod is
"The Phoenix Project",Kim et al,2013,4,DevOps,Novel about ops. Surprisingly good.
"The DevOps Handbook",Kim et al,2016,3,DevOps,Less fun than Phoenix Project
"Site Reliability Engineering",Google,2016,4,DevOps,Google humble-bragging for 500 pages
"Database Internals",Alex Petrov,2019,5,Databases,B-trees finally make sense
"Designing Data-Intensive Applications",Martin Kleppmann,2017,5,Databases,The Bible. No notes.
"SQL Antipatterns",Bill Karwin,2010,4,Databases,Felt personally attacked
"High Performance MySQL",Schwartz et al,2012,3,Databases,MySQL has performance?
"PostgreSQL Up & Running",Obe & Hsu,2012,4,Databases,Postgres supremacy confirmed
"Redis in Action",Josiah Carlson,2013,3,Databases,It's fast. We get it.
"MongoDB: The Definitive Guide",Bradshaw et al,2010,2,Databases,Webscale memes aside...
"Seven Databases in Seven Weeks",Redmond & Wilson,2012,4,Databases,Speed dating for databases
"Cracking the Coding Interview",Gayle McDowell,2008,3,Interviews,Necessary evil
"System Design Interview",Alex Xu,2020,4,Interviews,Draw boxes. Connect lines.
"Elements of Programming Interviews",Aziz et al,2012,3,Interviews,More leetcode trauma
"Grokking Algorithms",Aditya Bhargava,2016,5,Algorithms,Finally understood recursion
"Introduction to Algorithms",CLRS,2009,4,Algorithms,The Brick. Fear it.
"Algorithm Design Manual",Steven Skiena,2008,4,Algorithms,War stories are gold
"Compilers: Principles Techniques",Aho et al,1986,4,Computer Science,The Dragon Book. Survived it.
"Computer Networking: Top-Down",Kurose & Ross,2000,3,Networks,TCP/IP hazing ritual
"TCP/IP Illustrated",Richard Stevens,1993,5,Networks,The actual bible
"Hacking: Art of Exploitation",Jon Erickson,2003,5,Security,Buffer overflows go brrr
"The Web Application Hacker's Handbook",Stuttard & Pinto,2007,4,Security,Made me paranoid. Good.
"Practical Malware Analysis",Sikorski & Honig,2012,4,Security,Now I understand viruses
"Applied Cryptography",Bruce Schneier,1996,4,Security,Math hurts but worth it
"Serious Cryptography",Jean-Philippe Aumasson,2017,4,Security,Less math. Still hurts.
"Clean Architecture",Robert Martin,2017,3,Architecture,Uncle Bob says things
"Domain-Driven Design",Eric Evans,2003,3,Architecture,Ubiquitous language. Ubiquitous confusion.
"Building Microservices",Sam Newman,2015,4,Architecture,Monolith was fine actually
"Patterns of Enterprise Application",Martin Fowler,2002,4,Architecture,Still referencing this
"Release It!",Michael Nygard,2007,5,Architecture,Production horror stories
"Software Architecture: Hard Parts",Ford et al,2021,4,Architecture,It's all tradeoffs
"Fundamentals of Software Architecture",Richards & Ford,2020,4,Architecture,Good starting point
"Thinking in Systems",Donella Meadows,2008,5,Systems,Changed how I see everything
"An Elegant Puzzle",Will Larson,2019,4,Management,Engineering management done right
"The Manager's Path",Camille Fournier,2017,5,Management,Read before becoming a lead
"Team Topologies",Skelton & Pais,2019,4,Management,Conway's Law repackaged well
"Accelerate",Forsgren et al,2018,4,Management,DevOps with science
"Staff Engineer",Will Larson,2021,4,Career,What happens after senior
"The Software Engineer's Guidebook",Gergely Orosz,2023,4,Career,Modern and practical
"A Philosophy of Software Design",John Ousterhout,2018,5,Software,Thin book. Dense wisdom.
"Working Effectively with Legacy Code",Michael Feathers,2004,5,Software,Therapy for maintenance devs
"Refactoring to Patterns",Joshua Kerievsky,2004,3,Software,Patterns again
"Test Driven Development",Kent Beck,2002,4,Testing,Red green refactor cult
"Growing Object-Oriented Software",Freeman & Pryce,2009,4,Testing,TDD done properly
"Unit Testing Principles",Vladimir Khorikov,2020,4,Testing,Finally understood mocks
"The Art of Unit Testing",Roy Osherove,2009,3,Testing,Decent intro
"Continuous Delivery",Humble & Farley,2010,4,DevOps,Deploy button anxiety
"Infrastructure as Code",Kief Morris,2016,3,DevOps,Terraform trauma
"Version Control with Git",Loeliger & McCullough,2012,3,Git,Still google rebase commands
"Pro Git",Scott Chacon,2009,4,Git,Free and comprehensive
"Practical Vim",Drew Neil,2012,5,Tools,Changed my life. Not joking.
"Modern Vim",Drew Neil,2018,4,Tools,Neovim stuff
"tmux 2",Brian Hogan,2016,3,Tools,Prefix key PTSD
"The AWK Programming Language",Aho et al,1988,4,Tools,One-liners forever
"sed & awk",Dale Dougherty,1997,3,Tools,Reference material
"Regular Expressions Cookbook",Goyvaerts & Levithan,2009,3,Tools,Regex is write-only code
"Mastering Regular Expressions",Jeffrey Friedl,2006,4,Tools,Regex finally clicked
"Deep Learning",Goodfellow et al,2016,4,AI/ML,The textbook
"Hands-On Machine Learning",Aurélien Géron,2017,5,AI/ML,Actually hands-on
"Python Machine Learning",Sebastian Raschka,2015,4,AI/ML,Good foundations
"Natural Language Processing with Python",Bird et al,2009,3,AI/ML,NLTK era nostalgia
"Speech and Language Processing",Jurafsky & Martin,2008,4,AI/ML,NLP bible
"Pattern Recognition and ML",Christopher Bishop,2006,4,AI/ML,Math heavy. Worth it.
"Reinforcement Learning",Sutton & Barto,2018,4,AI/ML,Reward functions go wrong
"Build a LLM From Scratch",Sebastian Raschka,2024,5,AI/ML,Finally understood transformers
```

It gave an excellent output.

| Title | Author | Year | Rating | Genre | Review |
| --- | --- | --- | --- | --- | --- |
| "The Pragmatic Programmer" | Hunt & Thomas | 1999 | 5 | Software | Still relevant somehow. |
| "Clean Code" | Robert Martin | 2008 | 4 | Software | Good advice buried under Java verbosity. |
| "SICP" | Abelson & Sussman | 1985 | 5 | Computer Science | Broke my brain. Thank you. |
| "Code Complete" | Steve McConnell | 2004 | 3 | Software | Exhaustive. Exhausting. |
| "The Mythical Man-Month" | Fred Brooks | 1975 | 5 | Management | 50 years old and managers still don't get it |
| "Design Patterns" | Gang of Four | 1994 | 4 | Software | AbstractFactoryFactoryFactory |
| "Refactoring" | Martin Fowler | 1999 | 4 | Software | Made me mass-rename things for a week. |
| "You Don't Know JS" | Kyle Simpson | 2015 | 3 | JavaScript | Turns out I really didn't. |
| "Eloquent JavaScript" | Marijn Haverbeke | 2011 | 4 | JavaScript | Finally understood closures. Briefly. |
| "Learning Python" | Mark Lutz | 2013 | 3 | Python | 1500 pages. Could've been 400. |
| "Fluent Python" | Luciano Ramalho | 2015 | 5 | Python | Made me mass-rewrite everything |
| "Python Crash Course" | Eric Matthes | 2015 | 4 | Python | Does what it says on the tin |
| "Automate the Boring Stuff" | Al Sweigart | 2015 | 5 | Python | Actually automated boring stuff |
| "Effective Java" | Joshua Bloch | 2001 | 4 | Java | Still pretending I'll use Java again |
| "Head First Design Patterns" | Freeman & Robson | 2004 | 4 | Software | Pictures helped. Not ashamed. |
| "The C Programming Language" | K&R | 1978 | 5 | C | 47 years. Still the best. |
| "Expert C Programming" | Peter van der Linden | 1994 | 4 | C | Deep Secrets indeed |
| "Programming Rust" | Blandy & Orendorff | 2017 | 4 | Rust | The borrow checker still haunts me |
| "The Rust Programming Language" | Klabnik & Nichols | 2018 | 5 | Rust | The Book. Worship it. |
| "Rust for Rustaceans" | Jon Gjengset | 2021 | 5 | Rust | Finally understood lifetimes. Maybe. |
| "Go Programming Language" | Donovan & Kernighan | 2015 | 4 | Go | Simple until it isn't |
| "Learning Go" | Jon Bodner | 2021 | 4 | Go | Practical and honest |
| "Concurrency in Go" | Katherine Cox-Buday | 2017 | 4 | Go | Goroutines go brrrr |
| "JavaScript: The Good Parts" | Douglas Crockford | 2008 | 4 | JavaScript | Very thin book. Telling. |
| "Effective TypeScript" | Dan Vanderkam | 2019 | 4 | TypeScript | 62 ways to fight the compiler |
| "Programming TypeScript" | Boris Cherny | 2019 | 3 | TypeScript | Types all the way down |
| "The Linux Command Line" | William Shotts | 2012 | 5 | Linux | Should be mandatory reading |
| "Linux Pocket Guide" | Daniel Barrett | 2004 | 4 | Linux | Lives in my bag |
| "UNIX and Linux System Administration" | Nemeth et al | 2017 | 4 | Linux | The phonebook of sysadmin |
| "How Linux Works" | Brian Ward | 2014 | 5 | Linux | Finally understood init |
| "Docker Deep Dive" | Nigel Poulton | 2016 | 3 | DevOps | Deep enough I guess |
| "Kubernetes Up & Running" | Burns et al | 2017 | 3 | DevOps | Still don't know what a pod is |
| "The Phoenix Project" | Kim et al | 2013 | 4 | DevOps | Novel about ops. Surprisingly good. |
| "The DevOps Handbook" | Kim et al | 2016 | 3 | DevOps | Less fun than Phoenix Project |
| "Site Reliability Engineering" | Google | 2016 | 4 | DevOps | Google humble-bragging for 500 pages |
| "Database Internals" | Alex Petrov | 2019 | 5 | Databases | B-trees finally make sense |
| "Designing Data-Intensive Applications" | Martin Kleppmann | 2017 | 5 | Databases | The Bible. No notes. |
| "SQL Antipatterns" | Bill Karwin | 2010 | 4 | Databases | Felt personally attacked |
| "High Performance MySQL" | Schwartz et al | 2012 | 3 | Databases | MySQL has performance? |
| "PostgreSQL Up & Running" | Obe & Hsu | 2012 | 4 | Databases | Postgres supremacy confirmed |
| "Redis in Action" | Josiah Carlson | 2013 | 3 | Databases | It's fast. We get it. |
| "MongoDB: The Definitive Guide" | Bradshaw et al | 2010 | 2 | Databases | Webscale memes aside... |
| "Seven Databases in Seven Weeks" | Redmond & Wilson | 2012 | 4 | Databases | Speed dating for databases |
| "Cracking the Coding Interview" | Gayle McDowell | 2008 | 3 | Interviews | Necessary evil |
| "System Design Interview" | Alex Xu | 2020 | 4 | Interviews | Draw boxes. Connect lines. |
| "Elements of Programming Interviews" | Aziz et al | 2012 | 3 | Interviews | More leetcode trauma |
| "Grokking Algorithms" | Aditya Bhargava | 2016 | 5 | Algorithms | Finally understood recursion |
| "Introduction to Algorithms" | CLRS | 2009 | 4 | Algorithms | The Brick. Fear it. |
| "Algorithm Design Manual" | Steven Skiena | 2008 | 4 | Algorithms | War stories are gold |
| "Compilers: Principles Techniques" | Aho et al | 1986 | 4 | Computer Science | The Dragon Book. Survived it. |
| "Computer Networking: Top-Down" | Kurose & Ross | 2000 | 3 | Networks | TCP/IP hazing ritual |
| "TCP/IP Illustrated" | Richard Stevens | 1993 | 5 | Networks | The actual bible |
| "Hacking: Art of Exploitation" | Jon Erickson | 2003 | 5 | Security | Buffer overflows go brrr |
| "The Web Application Hacker's Handbook" | Stoll & Murphy | 2010 | 4 | Security | |
| "Continuous Delivery" | Humble & Farley | 2010 | 4 | DevOps | Deploy button anxiety |
| "Infrastructure as Code" | Kief Morris | 2016 | 3 | DevOps | Terraform trauma |
| "Version Control with Git" | Loeliger & McCullough | 2012 | 3 | Git | Still google rebase commands |
| "Pro Git" | Scott Chacon | 2009 | 4 | Git | Free and comprehensive |
| "Practical Vim" | Drew Neil | 2012 | 5 | Tools | Changed my life. Not joking. |
| "Modern Vim" | Drew Neil | 2018 | 4 | Tools | Neovim stuff |
| "tmux 2" | Brian Hogan | 2016 | 3 | Tools | Prefix key PTSD |
| "The AWK Programming Language" | Aho et al | 1988 | 4 | Tools | One-liners forever |
| "sed & awk" | Dale Dougherty | 1997 | 3 | Tools | Reference material |
| "Regular Expressions Cookbook" | Goyvaerts & Levithan | 2009 | 3 | Tools | Regex is write-only code |
| "Mastering Regular Expressions" | Jeffrey Friedl | 2006 | 4 | Tools | Regex finally clicked |
| "Deep Learning" | Goodfellow et al | 2016 | 4 | AI/ML | The textbook |
| "Hands-On Machine Learning" | Aurélien Géron | 2017 | 5 | AI/ML | Actually hands-on |
| "Python Machine Learning" | Sebastian Raschka | 2015 | 4 | AI/ML | Good foundations |
| "Natural Language Processing with Python" | Bird et al | 2009 | 3 | AI/ML | NLTK era nostalgia |
| "Speech and Language Processing" | Jurafsky & Martin | 2008 | 4 | AI/ML | NLP bible |
| "Pattern Recognition and ML" | Christopher Bishop | 2006 | 4 | AI/ML | Math heavy. Worth it. |
| "Reinforcement Learning" | Sutton & Barto | 2018 | 4 | AI/ML | Reward functions go wrong |
| "Build a LLM From Scratch" | Sebastian Raschka | 2024 | 5 | AI/ML | Finally understood transformers|

Time taken = 2079 tokens / 94.14 tokens per second = 22.1 seconds

Now this is extremely fast conversion. You can easily build a system that converts CSV to Markdown, any other format in a matter of seconds. Let us see if it is intelligent enough to enrich the content.

```text
Add a new column and classify them further into basic, intermediate, or advanced.
```

| Book Title | Author(s) | Year | Language | Classification | Complexity Level |
| --- | --- | --- | --- | --- | --- |
| Are we ready? |  |  |  | - | N/A |
| The Elements of Computing Systems | Noam Nisan & Shimon Schocken | 2008 | English | Advanced | Advanced |
| Introduction to Algorithms | Thomas H. Cormen et al. | 2009 | English | Advanced | Advanced |
| Algorithm Design Manual | Steven S. Skiena | 1997 | English | Intermediate | Intermediate |
| The C Programming Language | Brian Kernighan & Dennis Ritchie | 1978 | English | Intermediate | Intermediate |
| Computer Networking: Top-Down | James Kurose & Keith Ross | 2000 | English | Advanced | Advanced |
| Database Systems: The Complete Book | Hector Garcia-Molina et al. | 2014 | English | Advanced | Advanced |
| Deep Learning | Ian Goodfellow et al. | 2016 | English | Advanced | Advanced |
| Designing Data-Intensive Applications | Martin Kleppmann | 2017 | English | Intermediate | Intermediate |
| Hacking: Art of Exploitation | Jon Erickson | 2003 | English | Advanced | Advanced |
| How Linux Works | Brian Ward | 2014 | English | Advanced | Advanced |
| Introduction to Algorithms (2nd ed.) | Thomas H. Cormen et al. | 2009 | English | Intermediate | Intermediate |
| Linux Command Line Handbook | William E. Shotts Jr. | 2012 | English | Intermediate | Intermediate |
| Mastering Regular Expressions | Jeffrey E.F. Friedl | 2006 | English | Intermediate | Intermediate |
| Modern Vim | Drew Neil | 2018 | English | Intermediate | Intermediate |
| Natural Language Processing with Python | Bird & Liberman | 2009 | English | Advanced | Advanced |
| Pattern Recognition and Machine Learning | Christopher M. Bishop | 2006 | English | Advanced | Advanced |
| Programming Rust | Steve Klabnik & Carol Nichols | 2018 | English | Intermediate | Intermediate |
| Python Crash Course | Eric Matthes | 2016 | English | Basic | Basic |
| Python Machine Learning | Sebastian Raschka | 2015 | English | Basic | Basic |
| Python for Data Analysis | Wes McKinney | 2012 | English | Basic | Basic |
| Redis in Action | Michael S. Tancsics | 2014 | English | Intermediate | Intermediate |
| Regular Expressions Cookbook | Roger Boisjoly | 2007 | English | Intermediate | Intermediate |
| sed & awk | Dale Dougherty | 1997 | English | Advanced | Advanced |
| Seven Databases in Seven Weeks | Michael J. Hernandez | 2012 | English | Intermediate | Intermediate |
| Site Reliability Engineering | Benjamin Treynor-Miller | 2016 | English | Advanced | Advanced |
| System Design Interview | Black | 2021 | English | Advanced | Advanced |
| The AWK Programming Language | Alfred S. V. O' Sullivan | 1988 | English | Intermediate | Intermediate |
| The C Programming Language (2nd ed.) | Brian Kernighan & Dennis Ritchie | 1998 | English | Intermediate | Intermediate |
| The Elements of Computing Systems | Noam Nisan & Shimon Schocken | 2008 | English | Advanced | Advanced |
| The Linux Administration Handbook | Mark L. Mitchell | 2011 | English | Basic | Basic |
| The Mythical Man-Month | Frederick P. Brooks Jr. | 1975 | English | Advanced | Advanced |
| The Rust Programming Language | Steve Klabnik & Carol Nichols | 2018 | English | Intermediate | Intermediate |
| The Web Application Hacker's Handbook | Dafydd Stuttard & Marcus Pinto | 2010 | English | Advanced | Advanced |

The classification is good and it look the same time as the initial prompt. But we see a new entry "Are we ready?" which is not in the initial list and it removed some columns. So there is some amount of intelligence that you can use for some tasks. But your prompt needs to be specific to avoid such issues.

Let us add to the complexity in the first prompt to see if get a oneshot result.

```text
Convert the CSV into Markdown table and classify them further into basic, intermediate, or advanced. Do not remove any existing columns.
```

| Title | Author | Year | Rating | Genre | Review |
| --- | --- | --- | --- | --- | --- |
| **Classic** | "The Pragmatic Programmer" | Hunt & Thomas | 5 | Software | Still relevant somehow |
|  | "SICP" | Abelson & Sussman | 5 | Computer Science | Broke my brain. Thank you. |
|  | "The Mythical Man-Month" | Fred Brooks | 5 | Management | 50 years old and managers still don't get it |
| **Advanced** | "Design Patterns" | Gang of Four | 4 | Software | AbstractFactoryFactoryFactory |
|  | "Refactoring" | Martin Fowler | 4 | Software | Made me mass-rename things for a week |
|  | "Grokking Algorithms" | Aditya Bhargava | 5 | Algorithms | Finally understood recursion |
|  | "Introduction to Algorithms" | CLRS | 4 | Algorithms | The Brick. Fear it. |
|  | "Compilers: Principles Techniques" | Aho et al | 4 | Computer Science | The Dragon Book. Survived it. |
|  | "TCP/IP Illustrated" | Richard Stevens | 5 | Networks | The actual bible |
| **Advanced** | "Hacking: Art of Exploitation" | Jon Erickson | 5 | Security | Buffer overflows go brrr |
|  | "Practical Malware Analysis" | Sikorski & Honig | 4 | Security | Now I understand viruses |
|  | "Applied Cryptography" | Bruce Schneier | 4 | Security | Math hurts but worth it |
| **Advanced** | "Clean Architecture" | Robert Martin | 3 | Architecture | Uncle Bob says things |
|  | "Domain-Driven Design" | Eric Evans | 3 | Architecture | Ubiquitous language. Ubiquitous confusion. |
|  | "Building Microservices" | Sam Newman | 4 | Architecture | Monolith was fine actually |
| **Advanced** | "Software Architecture: Hard Parts" | Ford et al | 4 | Architecture | It's all tradeoffs |
|  | "Thinking in Systems" | Donella Meadows | 5 | Systems | Changed how I see everything |
| **Advanced** | "The Manager's Path" | Camille Fournier | 5 | Management | Read before becoming a lead |
|  | "Team Topologies" | Skelton & Pais | 4 | Management | Conway's Law repackaged well |
|  | "Accelerate" | Forsgren et al | 4 | Management | DevOps with science |
| **Advanced** | "Staff Engineer" | Will Larson | 4 | Career | What happens after senior |
|  | "A Philosophy of Software Design" | John Ousterhout | 5 | Software | Thin book. Dense wisdom. |
| **Basic** | "Working Effectively with Legacy Code" | Michael Feathers | 5 | Software | Therapy for maintenance devs |
|  | "Refactoring to Patterns" | Joshua Kerievsky | 3 | Software | Patterns again |
| **Advanced** | "Test Driven Development" | Kent Beck | 4 | Testing | Red green refactor cult |
|  | "Growing Object-Oriented Software" | Freeman & Pryce | 4 | Testing | TDD done properly |
|  | "Unit Testing Principles" | Vladimir Khorikov | 4 | Testing | Finally understood mocks |
| **Basic** | "Continuous Delivery" | Humble & Farley | 4 | DevOps | Deploy button anxiety |
|  | "Infrastructure as Code" | Kief Morris | 3 | DevOps | Terraform trauma |
| **Basic** | "Version Control with Git" | Loeliger & McCullough | 3 | Git | Still google rebase commands |
|  | "Pro Git" | Scott Chacon | 4 | Git | Free and comprehensive |
|  | "Practical Vim" | Drew Neil | 5 | Tools | Changed my life. Not joking. |
|  | "Modern Vim" | Drew Neil | 4 | Tools | Neovim stuff |

**Classification**

* **Classic**: Books that have been influential in the programming industry and are still widely read today.
* **Advanced**: Books that cover complex topics, require a high level of expertise, or are highly technical.
* **Basic**: Books that provide foundational knowledge, introduction to new concepts, or offer practical advice for beginners.

It did not follow instructions and gave something different. So, you need to provide simple and specific prompts, and chain the output to get a good result.