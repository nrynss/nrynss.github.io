---
title: "Local LLMs: What Do They Know? Do They Know Things?? Let's Find Out! - 5"
date: 2025-12-24T23:42:45+05:30
showComments : true
---

{{< notice title="Local LLMs Series" >}}
This article is the part of the series I have written on local LLMs.

- [Introduction to Local LLMs](/blog/day7)
- [LLM file formats](/blog/day8)
- [Simplifying models, types, and quantization](/blog/day9)
- [LLM families](/blog/day10)
- [Running LLMs locally](/blog/day11) -> You are here!
{{< /notice >}}

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

{{< expandable title="Download models in LM Studio" >}}

{{< gif src="/images/llm/lmstudiomodelzoo.gif" alt="LM Studio" caption="LM Studio" >}}

{{< /expandable >}}

As you can see, you need to choose your model size and LM Studio makes it easy with a icon that shows whether full GPU offload is possible. Simply put, green means it can run on your graphics card alone or Mac memory. Remember the rule though, you need around 1-2 GB set side for context. So even if it is green, you need to make sure you have enough memory for context.

### Llama 3.2 3B

Let us load a model and get started.

{{< expandable title="Load Llama 3.2 3B" >}}

{{< gif src="/images/llm/llamastart.gif" alt="LLama 3.2 3B" caption="LLama 3.2 3B" >}}

{{< /expandable >}}

As you can see. It is blazing fast.

```text
70.66 tok/sec 42 tokens 0.25s to first token Stop reason: EOS Token Found
```

The response is not that bad. Quite good in fact. It recognized the system time and identified that it is nearly new year. This is a tiny model!

#### Tests on text manipulation

Let us do some tests.

```text

Give me 3 fictional book titles about programming, formatted as JSON with title, author, and year fields.

```

{{< expandable title="JSON sample" >}}

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

{{< /expandable >}}

Usable output!

Let us give a more realistic test.

```text
Convert the CSV into Markdown table.
```

{{< expandable title="CSV sample" >}}

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
{{< /expandable >}}

It gave an excellent output.

{{< expandable title="Markdown table" >}}

| Title                                     | Author                | Year | Rating | Genre            | Review                                       |
| ----------------------------------------- | --------------------- | ---- | ------ | ---------------- | -------------------------------------------- |
| "The Pragmatic Programmer"                | Hunt & Thomas         | 1999 | 5      | Software         | Still relevant somehow.                      |
| "Clean Code"                              | Robert Martin         | 2008 | 4      | Software         | Good advice buried under Java verbosity.     |
| "SICP"                                    | Abelson & Sussman     | 1985 | 5      | Computer Science | Broke my brain. Thank you.                   |
| "Code Complete"                           | Steve McConnell       | 2004 | 3      | Software         | Exhaustive. Exhausting.                      |
| "The Mythical Man-Month"                  | Fred Brooks           | 1975 | 5      | Management       | 50 years old and managers still don't get it |
| "Design Patterns"                         | Gang of Four          | 1994 | 4      | Software         | AbstractFactoryFactoryFactory                |
| "Refactoring"                             | Martin Fowler         | 1999 | 4      | Software         | Made me mass-rename things for a week.       |
| "You Don't Know JS"                       | Kyle Simpson          | 2015 | 3      | JavaScript       | Turns out I really didn't.                   |
| "Eloquent JavaScript"                     | Marijn Haverbeke      | 2011 | 4      | JavaScript       | Finally understood closures. Briefly.        |
| "Learning Python"                         | Mark Lutz             | 2013 | 3      | Python           | 1500 pages. Could've been 400.               |
| "Fluent Python"                           | Luciano Ramalho       | 2015 | 5      | Python           | Made me mass-rewrite everything              |
| "Python Crash Course"                     | Eric Matthes          | 2015 | 4      | Python           | Does what it says on the tin                 |
| "Automate the Boring Stuff"               | Al Sweigart           | 2015 | 5      | Python           | Actually automated boring stuff              |
| "Effective Java"                          | Joshua Bloch          | 2001 | 4      | Java             | Still pretending I'll use Java again         |
| "Head First Design Patterns"              | Freeman & Robson      | 2004 | 4      | Software         | Pictures helped. Not ashamed.                |
| "The C Programming Language"              | K&R                   | 1978 | 5      | C                | 47 years. Still the best.                    |
| "Expert C Programming"                    | Peter van der Linden  | 1994 | 4      | C                | Deep Secrets indeed                          |
| "Programming Rust"                        | Blandy & Orendorff    | 2017 | 4      | Rust             | The borrow checker still haunts me           |
| "The Rust Programming Language"           | Klabnik & Nichols     | 2018 | 5      | Rust             | The Book. Worship it.                        |
| "Rust for Rustaceans"                     | Jon Gjengset          | 2021 | 5      | Rust             | Finally understood lifetimes. Maybe.         |
| "Go Programming Language"                 | Donovan & Kernighan   | 2015 | 4      | Go               | Simple until it isn't                        |
| "Learning Go"                             | Jon Bodner            | 2021 | 4      | Go               | Practical and honest                         |
| "Concurrency in Go"                       | Katherine Cox-Buday   | 2017 | 4      | Go               | Goroutines go brrrr                          |
| "JavaScript: The Good Parts"              | Douglas Crockford     | 2008 | 4      | JavaScript       | Very thin book. Telling.                     |
| "Effective TypeScript"                    | Dan Vanderkam         | 2019 | 4      | TypeScript       | 62 ways to fight the compiler                |
| "Programming TypeScript"                  | Boris Cherny          | 2019 | 3      | TypeScript       | Types all the way down                       |
| "The Linux Command Line"                  | William Shotts        | 2012 | 5      | Linux            | Should be mandatory reading                  |
| "Linux Pocket Guide"                      | Daniel Barrett        | 2004 | 4      | Linux            | Lives in my bag                              |
| "UNIX and Linux System Administration"    | Nemeth et al          | 2017 | 4      | Linux            | The phonebook of sysadmin                    |
| "How Linux Works"                         | Brian Ward            | 2014 | 5      | Linux            | Finally understood init                      |
| "Docker Deep Dive"                        | Nigel Poulton         | 2016 | 3      | DevOps           | Deep enough I guess                          |
| "Kubernetes Up & Running"                 | Burns et al           | 2017 | 3      | DevOps           | Still don't know what a pod is               |
| "The Phoenix Project"                     | Kim et al             | 2013 | 4      | DevOps           | Novel about ops. Surprisingly good.          |
| "The DevOps Handbook"                     | Kim et al             | 2016 | 3      | DevOps           | Less fun than Phoenix Project                |
| "Site Reliability Engineering"            | Google                | 2016 | 4      | DevOps           | Google humble-bragging for 500 pages         |
| "Database Internals"                      | Alex Petrov           | 2019 | 5      | Databases        | B-trees finally make sense                   |
| "Designing Data-Intensive Applications"   | Martin Kleppmann      | 2017 | 5      | Databases        | The Bible. No notes.                         |
| "SQL Antipatterns"                        | Bill Karwin           | 2010 | 4      | Databases        | Felt personally attacked                     |
| "High Performance MySQL"                  | Schwartz et al        | 2012 | 3      | Databases        | MySQL has performance?                       |
| "PostgreSQL Up & Running"                 | Obe & Hsu             | 2012 | 4      | Databases        | Postgres supremacy confirmed                 |
| "Redis in Action"                         | Josiah Carlson        | 2013 | 3      | Databases        | It's fast. We get it.                        |
| "MongoDB: The Definitive Guide"           | Bradshaw et al        | 2010 | 2      | Databases        | Webscale memes aside...                      |
| "Seven Databases in Seven Weeks"          | Redmond & Wilson      | 2012 | 4      | Databases        | Speed dating for databases                   |
| "Cracking the Coding Interview"           | Gayle McDowell        | 2008 | 3      | Interviews       | Necessary evil                               |
| "System Design Interview"                 | Alex Xu               | 2020 | 4      | Interviews       | Draw boxes. Connect lines.                   |
| "Elements of Programming Interviews"      | Aziz et al            | 2012 | 3      | Interviews       | More leetcode trauma                         |
| "Grokking Algorithms"                     | Aditya Bhargava       | 2016 | 5      | Algorithms       | Finally understood recursion                 |
| "Introduction to Algorithms"              | CLRS                  | 2009 | 4      | Algorithms       | The Brick. Fear it.                          |
| "Algorithm Design Manual"                 | Steven Skiena         | 2008 | 4      | Algorithms       | War stories are gold                         |
| "Compilers: Principles Techniques"        | Aho et al             | 1986 | 4      | Computer Science | The Dragon Book. Survived it.                |
| "Computer Networking: Top-Down"           | Kurose & Ross         | 2000 | 3      | Networks         | TCP/IP hazing ritual                         |
| "TCP/IP Illustrated"                      | Richard Stevens       | 1993 | 5      | Networks         | The actual bible                             |
| "Hacking: Art of Exploitation"            | Jon Erickson          | 2003 | 5      | Security         | Buffer overflows go brrr                     |
| "The Web Application Hacker's Handbook"   | Stoll & Murphy        | 2010 | 4      | Security         |                                              |
| "Continuous Delivery"                     | Humble & Farley       | 2010 | 4      | DevOps           | Deploy button anxiety                        |
| "Infrastructure as Code"                  | Kief Morris           | 2016 | 3      | DevOps           | Terraform trauma                             |
| "Version Control with Git"                | Loeliger & McCullough | 2012 | 3      | Git              | Still google rebase commands                 |
| "Pro Git"                                 | Scott Chacon          | 2009 | 4      | Git              | Free and comprehensive                       |
| "Practical Vim"                           | Drew Neil             | 2012 | 5      | Tools            | Changed my life. Not joking.                 |
| "Modern Vim"                              | Drew Neil             | 2018 | 4      | Tools            | Neovim stuff                                 |
| "tmux 2"                                  | Brian Hogan           | 2016 | 3      | Tools            | Prefix key PTSD                              |
| "The AWK Programming Language"            | Aho et al             | 1988 | 4      | Tools            | One-liners forever                           |
| "sed & awk"                               | Dale Dougherty        | 1997 | 3      | Tools            | Reference material                           |
| "Regular Expressions Cookbook"            | Goyvaerts & Levithan  | 2009 | 3      | Tools            | Regex is write-only code                     |
| "Mastering Regular Expressions"           | Jeffrey Friedl        | 2006 | 4      | Tools            | Regex finally clicked                        |
| "Deep Learning"                           | Goodfellow et al      | 2016 | 4      | AI/ML            | The textbook                                 |
| "Hands-On Machine Learning"               | Aurélien Géron        | 2017 | 5      | AI/ML            | Actually hands-on                            |
| "Python Machine Learning"                 | Sebastian Raschka     | 2015 | 4      | AI/ML            | Good foundations                             |
| "Natural Language Processing with Python" | Bird et al            | 2009 | 3      | AI/ML            | NLTK era nostalgia                           |
| "Speech and Language Processing"          | Jurafsky & Martin     | 2008 | 4      | AI/ML            | NLP bible                                    |
| "Pattern Recognition and ML"              | Christopher Bishop    | 2006 | 4      | AI/ML            | Math heavy. Worth it.                        |
| "Reinforcement Learning"                  | Sutton & Barto        | 2018 | 4      | AI/ML            | Reward functions go wrong                    |
| "Build a LLM From Scratch"                | Sebastian Raschka     | 2024 | 5      | AI/ML            | Finally understood transformers              |

{{< /expandable >}}

Time taken = 2079 tokens / 94.14 tokens per second = 22.1 seconds

Now this is extremely fast conversion. You can easily build a system that converts CSV to Markdown, any other format in a matter of seconds. Let us see if it is intelligent enough to enrich the content.

```text
Add a new column and classify them further into basic, intermediate, or advanced.
```

{{< expandable title="Enhanced Markdown table" >}}

| Book Title                               | Author(s)                        | Year | Language | Classification | Complexity Level |
| ---------------------------------------- | -------------------------------- | ---- | -------- | -------------- | ---------------- |
| Are we ready?                            |                                  |      |          | -              | N/A              |
| The Elements of Computing Systems        | Noam Nisan & Shimon Schocken     | 2008 | English  | Advanced       | Advanced         |
| Introduction to Algorithms               | Thomas H. Cormen et al.          | 2009 | English  | Advanced       | Advanced         |
| Algorithm Design Manual                  | Steven S. Skiena                 | 1997 | English  | Intermediate   | Intermediate     |
| The C Programming Language               | Brian Kernighan & Dennis Ritchie | 1978 | English  | Intermediate   | Intermediate     |
| Computer Networking: Top-Down            | James Kurose & Keith Ross        | 2000 | English  | Advanced       | Advanced         |
| Database Systems: The Complete Book      | Hector Garcia-Molina et al.      | 2014 | English  | Advanced       | Advanced         |
| Deep Learning                            | Ian Goodfellow et al.            | 2016 | English  | Advanced       | Advanced         |
| Designing Data-Intensive Applications    | Martin Kleppmann                 | 2017 | English  | Intermediate   | Intermediate     |
| Hacking: Art of Exploitation             | Jon Erickson                     | 2003 | English  | Advanced       | Advanced         |
| How Linux Works                          | Brian Ward                       | 2014 | English  | Advanced       | Advanced         |
| Introduction to Algorithms (2nd ed.)     | Thomas H. Cormen et al.          | 2009 | English  | Intermediate   | Intermediate     |
| Linux Command Line Handbook              | William E. Shotts Jr.            | 2012 | English  | Intermediate   | Intermediate     |
| Mastering Regular Expressions            | Jeffrey E.F. Friedl              | 2006 | English  | Intermediate   | Intermediate     |
| Modern Vim                               | Drew Neil                        | 2018 | English  | Intermediate   | Intermediate     |
| Natural Language Processing with Python  | Bird & Liberman                  | 2009 | English  | Advanced       | Advanced         |
| Pattern Recognition and Machine Learning | Christopher M. Bishop            | 2006 | English  | Advanced       | Advanced         |
| Programming Rust                         | Steve Klabnik & Carol Nichols    | 2018 | English  | Intermediate   | Intermediate     |
| Python Crash Course                      | Eric Matthes                     | 2016 | English  | Basic          | Basic            |
| Python Machine Learning                  | Sebastian Raschka                | 2015 | English  | Basic          | Basic            |
| Python for Data Analysis                 | Wes McKinney                     | 2012 | English  | Basic          | Basic            |
| Redis in Action                          | Michael S. Tancsics              | 2014 | English  | Intermediate   | Intermediate     |
| Regular Expressions Cookbook             | Roger Boisjoly                   | 2007 | English  | Intermediate   | Intermediate     |
| sed & awk                                | Dale Dougherty                   | 1997 | English  | Advanced       | Advanced         |
| Seven Databases in Seven Weeks           | Michael J. Hernandez             | 2012 | English  | Intermediate   | Intermediate     |
| Site Reliability Engineering             | Benjamin Treynor-Miller          | 2016 | English  | Advanced       | Advanced         |
| System Design Interview                  | Black                            | 2021 | English  | Advanced       | Advanced         |
| The AWK Programming Language             | Alfred S. V. O' Sullivan         | 1988 | English  | Intermediate   | Intermediate     |
| The C Programming Language (2nd ed.)     | Brian Kernighan & Dennis Ritchie | 1998 | English  | Intermediate   | Intermediate     |
| The Elements of Computing Systems        | Noam Nisan & Shimon Schocken     | 2008 | English  | Advanced       | Advanced         |
| The Linux Administration Handbook        | Mark L. Mitchell                 | 2011 | English  | Basic          | Basic            |
| The Mythical Man-Month                   | Frederick P. Brooks Jr.          | 1975 | English  | Advanced       | Advanced         |
| The Rust Programming Language            | Steve Klabnik & Carol Nichols    | 2018 | English  | Intermediate   | Intermediate     |
| The Web Application Hacker's Handbook    | Dafydd Stuttard & Marcus Pinto   | 2010 | English  | Advanced       | Advanced         |

{{< /expandable >}}

The classification is good and it look the same time as the initial prompt. But we see a new entry "Are we ready?" which is not in the initial list and it removed some columns. So there is some amount of intelligence that you can use for some tasks. But your prompt needs to be specific to avoid such issues.

Let us add to the complexity in the first prompt to see if get a oneshot result.

```text
Convert the CSV into Markdown table and classify them further into basic, intermediate, or advanced. Do not remove any existing columns.
```

{{< expandable title="Markdown table - One shot" >}}

| Title        | Author                                 | Year                  | Rating | Genre            | Review                                       |
| ------------ | -------------------------------------- | --------------------- | ------ | ---------------- | -------------------------------------------- |
| **Classic**  | "The Pragmatic Programmer"             | Hunt & Thomas         | 5      | Software         | Still relevant somehow                       |
|              | "SICP"                                 | Abelson & Sussman     | 5      | Computer Science | Broke my brain. Thank you.                   |
|              | "The Mythical Man-Month"               | Fred Brooks           | 5      | Management       | 50 years old and managers still don't get it |
| **Advanced** | "Design Patterns"                      | Gang of Four          | 4      | Software         | AbstractFactoryFactoryFactory                |
|              | "Refactoring"                          | Martin Fowler         | 4      | Software         | Made me mass-rename things for a week        |
|              | "Grokking Algorithms"                  | Aditya Bhargava       | 5      | Algorithms       | Finally understood recursion                 |
|              | "Introduction to Algorithms"           | CLRS                  | 4      | Algorithms       | The Brick. Fear it.                          |
|              | "Compilers: Principles Techniques"     | Aho et al             | 4      | Computer Science | The Dragon Book. Survived it.                |
|              | "TCP/IP Illustrated"                   | Richard Stevens       | 5      | Networks         | The actual bible                             |
| **Advanced** | "Hacking: Art of Exploitation"         | Jon Erickson          | 5      | Security         | Buffer overflows go brrr                     |
|              | "Practical Malware Analysis"           | Sikorski & Honig      | 4      | Security         | Now I understand viruses                     |
|              | "Applied Cryptography"                 | Bruce Schneier        | 4      | Security         | Math hurts but worth it                      |
| **Advanced** | "Clean Architecture"                   | Robert Martin         | 3      | Architecture     | Uncle Bob says things                        |
|              | "Domain-Driven Design"                 | Eric Evans            | 3      | Architecture     | Ubiquitous language. Ubiquitous confusion.   |
|              | "Building Microservices"               | Sam Newman            | 4      | Architecture     | Monolith was fine actually                   |
| **Advanced** | "Software Architecture: Hard Parts"    | Ford et al            | 4      | Architecture     | It's all tradeoffs                           |
|              | "Thinking in Systems"                  | Donella Meadows       | 5      | Systems          | Changed how I see everything                 |
| **Advanced** | "The Manager's Path"                   | Camille Fournier      | 5      | Management       | Read before becoming a lead                  |
|              | "Team Topologies"                      | Skelton & Pais        | 4      | Management       | Conway's Law repackaged well                 |
|              | "Accelerate"                           | Forsgren et al        | 4      | Management       | DevOps with science                          |
| **Advanced** | "Staff Engineer"                       | Will Larson           | 4      | Career           | What happens after senior                    |
|              | "A Philosophy of Software Design"      | John Ousterhout       | 5      | Software         | Thin book. Dense wisdom.                     |
| **Basic**    | "Working Effectively with Legacy Code" | Michael Feathers      | 5      | Software         | Therapy for maintenance devs                 |
|              | "Refactoring to Patterns"              | Joshua Kerievsky      | 3      | Software         | Patterns again                               |
| **Advanced** | "Test Driven Development"              | Kent Beck             | 4      | Testing          | Red green refactor cult                      |
|              | "Growing Object-Oriented Software"     | Freeman & Pryce       | 4      | Testing          | TDD done properly                            |
|              | "Unit Testing Principles"              | Vladimir Khorikov     | 4      | Testing          | Finally understood mocks                     |
| **Basic**    | "Continuous Delivery"                  | Humble & Farley       | 4      | DevOps           | Deploy button anxiety                        |
|              | "Infrastructure as Code"               | Kief Morris           | 3      | DevOps           | Terraform trauma                             |
| **Basic**    | "Version Control with Git"             | Loeliger & McCullough | 3      | Git              | Still google rebase commands                 |
|              | "Pro Git"                              | Scott Chacon          | 4      | Git              | Free and comprehensive                       |
|              | "Practical Vim"                        | Drew Neil             | 5      | Tools            | Changed my life. Not joking.                 |
|              | "Modern Vim"                           | Drew Neil             | 4      | Tools            | Neovim stuff                                 |

**Classification**

* **Classic**: Books that have been influential in the programming industry and are still widely read today.
* **Advanced**: Books that cover complex topics, require a high level of expertise, or are highly technical.
* **Basic**: Books that provide foundational knowledge, introduction to new concepts, or offer practical advice for beginners.

{{< /expandable >}}

It did not follow instructions and gave something different. So, you need to provide simple and specific prompts, and chain the output to get a good result.

#### Coding tests with Llama 3B

Let us try a coding exercise. We will not use any Python or JavaScript, or such peasant languages. We will use Rust!

```text

Write a Rust program that generates a fractal tree.
1. It must not use any external crates (standard library only).
2. It should output the result as an SVG file named tree<timestamp>.svg.
3. Allow the user to specify the recursion depth as a command-line argument.

```

{{< expandable title="Llama 3B Rust program" >}}

```rust

use std::fs;
use std::io::{stdin, stdout, BufWriter};
use std::process;
use std::time;

fn main() {
    let mut input = String::new();
    println!("Enter recursion depth (min 1):");
    stdin().read_line(&mut input).unwrap();

    let recursion_depth: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            eprintln!("Invalid input. Defaulting to 5.");
            5
        }
    };

    let start_time = time::Instant::now();
    generate_tree("tree", recursion_depth);
    let end_time = time::Instant::now();

    println!("Tree generation took {} seconds.", end_time.duration_since(start_time).as_secs());
}

fn generate_tree(filename: &str, depth: u32) {
    let mut svg = String::new();

    if depth == 0 || filename.is_empty() {
        return;
    }

    // Trunk
    let trunk_height = depth * 10;
    svg.push_str(&format!("<svg width=\"200\" height=\"{}\">\n", trunk_height));
    svg.push_str("<rect x=\"50\" y=\"{}\" width=\"100\" height=\"{}\" fill=\"#888888\" />\n", (trunk_height - 20) / 2, 10));
    svg.push_str("</svg>\n");

    // Branches
    let branch_angle = 30.0;
    let branch_length_ratio = 0.7;

    for y in 10..(trunk_height - 10) {
        generate_branch(&mut svg, y, depth - 1);
    }

    fs::write(filename, svg).expect("Failed to write file");
}

fn generate_branch(svg: &mut String, y: u32, depth: u32) {
    let branch_length = (depth as f64 * 10.0 / 2.0).log() * branch_length_ratio;
    let x1 = 50. + branch_length * branch_length_ratio.cos();
    let x2 = 150. - branch_length * branch_length_ratio.cos();

    if depth == 1 {
        svg.push_str(&format!("<line x1=\"{}\" y1=\"{}\" x2=\"{}\" y2=\"{}\" stroke=\"#000000\" stroke-width=\"2\" />\n", x1, y, x2, (y + branch_length).min(trunk_height - 10)));
    } else {
        let branch_angle_rad = branch_angle * std::f64::consts::PI / 180.0;
        generate_branch(svg, y - branch_length * branch_length_ratio.sin(), depth - 1);
        svg.push_str(&format!("<line x1=\"{}\" y1=\"{}\" x2=\"{}\" y2=\"{}\" stroke=\"#000000\" stroke-width=\"1\" />\n", x1, y, x2, (y + branch_length).min(trunk_height - 10)));
        generate_branch(svg, y + branch_length * branch_length_ratio.sin(), depth - 1);
    }
}

fn is_valid_input(input: String) -> bool {
    let mut num = None;

    for c in input.chars() {
        match c {
            '0'..='9' => { num = Some(c); break; },
            _ => {}
        }
    }

    match num {
        Some(_) => true,
        None => false
    }
}
```

{{< /expandable >}}

Unfortunately, the code is not good. I let Gemini analyze it.

{{< expandable title="Gemini analysis" >}}

No, unfortunately, this is not a valid Rust program and it will not compile.

If you are using this for your Local LLM demo, this is actually a perfect example of a "hallucination" where the model knows what Rust code looks like but fails on strict syntax and scoping rules.

Why it fails (The Errors)

1. Scope Errors: The function generate_branch tries to use variables like trunk_height, branch_angle, and branch_length_ratio, but they are defined in generate_tree and not passed as arguments. In Rust, inner functions do not inherit the parent's scope automatically.
2. Syntax Errors: 
- svg.push_str(...): You cannot pass formatting arguments (like %d) directly to push_str. You must use svg.push_str(&format!(...)).
- .log(): The f64 type does not have a parameter-less .log() method. It requires a base (e.g., log(10.0)) or you must use ln() (natural log).
3. Logic Errors:
- Broken SVG: The code closes the </svg> tag immediately after drawing the trunk, so all branches are drawn outside the image file structure.
- Infinite Loop Risk: The loop for y in 10..(trunk_height - 10) creates a branch for every single integer unit of height, which is likely not the fractal recursion intended.

{{< /expandable >}}

For a minute I thought it was a decent bit of code. You could iterate and probably fix it. But I used the Rust example to introduce you to a finetune.

### Tessa Rust T1 7B

[Tessa Rust T1 7B](https://huggingface.co/Tesslate/Tessa-Rust-T1-7B) is a coding model that has been finetuned on the Rust programming language. It is based on Qwen 2.5 7B. Let us see if it makes any difference. Remember that I am also doing this for the first time.

```text

Write a Rust program that generates a fractal tree.
1. It must not use any external crates (standard library only).
2. It should output the result as an SVG file named tree<timestamp>.svg.
3. Allow the user to specify the recursion depth as a command-line argument.

```

{{< expandable title="Tessa Rust T1 7B Code" >}}

```rust

use std::env;
use std::fs;
use std::time::{SystemTime, UNIX_EPOCH};

const WIDTH: u32 = 800;
const HEIGHT: u32 = 600;

fn save_svg(filename: &str, content: &str) {
    fs::write(filename, content).expect("Failed to write SVG file");
}

fn generate_fractal_tree(depth: u32) -> String {
    let mut svg = format!(
        r#"<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {} {}">
<path stroke="black" fill="none" d=""#, WIDTH, HEIGHT
    );

    fn draw_branch(
        svg: &mut String,
        x1: f64,
        y1: f64,
        angle: f64,
        length: f64,
        remaining_depth: u32,
    ) {
        let rad_angle = std::f64::consts::PI * angle / 180.0;
        let x2 = x1 + (length * rad_angle.cos());
        let y2 = y1 - (length * rad_angle.sin()); // invert y for SVG coordinate system

        svg.push_str(&format!(
            "M{:.3} {:.3} L{:.3} {:.3} ",
            x1, HEIGHT - y1, x2, HEIGHT - y2
        ));

        if remaining_depth > 0 {
            draw_branch(svg, x2, y2, angle + 25.0, length * 0.65, remaining_depth - 1);
            draw_branch(svg, x2, y2, angle - 25.0, length * 0.65, remaining_depth - 1);
        }
    }

    // Start from bottom center
    let start_x = WIDTH as f64 / 2.0;
    let start_y = HEIGHT as f64;

    draw_branch(&mut svg, start_x, start_y, -90.0, HEIGHT as f64 * 0.15, depth);

    svg.push_str("\"/>");
    svg
}

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() != 2 {
        eprintln!("Usage: {} <depth>", args[0]);
        return;
    }
    let depth = match args[1].parse::<u32>() {
        Ok(d) => d,
        Err(_) => {
            eprintln!("Invalid argument. Enter a valid number for recursion depth.");
            return;
        }
    };

    let ts = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_secs();
    let filename = format!("tree{}.svg", ts);
    let svg_content = generate_fractal_tree(depth);

    save_svg(&filename, &svg_content);
    println!("Fractal tree saved as {}", filename);
}
```

{{< /expandable >}}

The output had a syntax error that tried to subtract f64 from u32. I fixed it and it compiled. But it did not generate a proper SVG.

Gemini gave me this analysis, but it did not catch the syntax error. It is following up from my last submission.

{{< expandable title="Gemini Analysis of Tessa Rust T1 7B" >}}

1. The Improvements (Why this is "Good")
Performance (The <path> tag): Instead of creating thousands of separate <line> elements (which bloats the DOM), this version generates a single SVG <path> with many "Move" (M) and "Line" (L) commands. This renders much faster in browsers.

No "Borrow Checker" Fights: Using an inner function (draw_branch) that takes &mut String is a very idiomatic Rust pattern for recursion.

Unique Filenames: Using SystemTime to generate tree12345.svg prevents you from overwriting your previous files during a demo.

2. The Bug (The Invisible Tree)
The code mixes two different coordinate systems.

The Math: You calculate y2 = y1 - ... and then print HEIGHT - y1.

The Result: Your tree starts at the very top edge of the image (y=0) and grows upwards into negative space (e.g., y=-100).

Visual: The user will see a blank white square.

3. The Fix
You need to align the math with SVG coordinates (where 0,0 is top-left).

{{< /expandable >}}

Unfortunately, even with the additional help from Gemini, it wasn't able to do the fix.

So where does that leave us? May be this is excelent to use as code autocomplete model and to troubleshoot code. It may not be able to generate bug free code, but it can help you write better code. Also, it is quite adept in describing a program. For proper coding, you may be better off using a bigger model. One excellent use case I can think off is to analyze log files.

### Owen 3 8B

This is a thinking model. I gave the following prompt.

```text
Summarize the key points from this error log.
```

{{< expandable title="Error Log" >}}

```text
Jun 14 15:16:01 combo sshd(pam_unix)[19939]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 14 15:16:02 combo sshd(pam_unix)[19937]: check pass; user unknown
Jun 14 15:16:02 combo sshd(pam_unix)[19937]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 02:04:59 combo sshd(pam_unix)[20882]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20884]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20883]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20885]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20886]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20892]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20893]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20896]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20897]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 02:04:59 combo sshd(pam_unix)[20898]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root
Jun 15 04:06:18 combo su(pam_unix)[21416]: session opened for user cyrus by (uid=0)
Jun 15 04:06:19 combo su(pam_unix)[21416]: session closed for user cyrus
Jun 15 04:06:20 combo logrotate: ALERT exited abnormally with [1]
Jun 15 04:12:42 combo su(pam_unix)[22644]: session opened for user news by (uid=0)
Jun 15 04:12:43 combo su(pam_unix)[22644]: session closed for user news
Jun 15 12:12:34 combo sshd(pam_unix)[23397]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23397]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23395]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23395]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23404]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23404]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23399]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23399]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23406]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23406]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23396]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23394]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23407]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23394]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23403]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23396]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23407]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23403]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:12:34 combo sshd(pam_unix)[23412]: check pass; user unknown
Jun 15 12:12:34 combo sshd(pam_unix)[23412]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:13:19 combo sshd(pam_unix)[23414]: check pass; user unknown
Jun 15 12:13:19 combo sshd(pam_unix)[23414]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
Jun 15 12:13:20 combo sshd(pam_unix)[23416]: check pass; user unknown
Jun 15 12:13:20 combo sshd(pam_unix)[23416]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4
```
{{< /expandable >}}

{{< expandable title="Qwen's thoughts" >}}
Okay, let me try to figure out what's going on here. The user provided an error log from a server, and they want a summary of the key points. Alright, first I need to parse through these logs step by step.

Looking at the timestamps, there are entries from June 14th and June 15th. The main thing that stands out is the repeated "authentication failure" messages from sshd (the SSH daemon) using pam_unix. These failures happen multiple times on both days. Let me note down the IP addresses involved. On June 14th, there's an IP 218.188.2.4, and on June 15th, there's 220-135-151-1.hinet-ip.hinet.net. Hmm, these might be the sources of the failed login attempts.

The log entries mention "user unknown" and "check pass; user unknown," which suggests that the SSH server is rejecting login attempts because the users aren't recognized. But wait, there's also a line where the user is root. For example, on June 15th, several logs show user=root. That's concerning because root access via SSH is a security risk if not properly secured. Maybe someone is trying to brute-force their way into the root account or other accounts.

Looking at the log entries for June 14th and 15th, there are multiple authentication failures from the same IP address (218.188.2.4) and another one (the hinet-ip). The fact that they're repeated over two days suggests possible brute-force attacks or scanning for vulnerable SSH configurations.

Additionally, there's a mention of "logrotate: ALERT exited abnormally with [1]" on June 15th at 04:06. Logrotate is used to manage log files, so an error here might be related to failed rotation, but I'm not sure if it's directly connected to the SSH issues. Still, it's worth noting as a separate event.

Then there are entries about users cyrus and news using su (switch user) with UID 0 (root), which indicates they have sudo privileges. The sessions opened and closed quickly, so maybe they were testing or performing some administrative tasks. However, since these events are isolated compared to the SSH failures, it's possible they're unrelated.

Putting this together, the key points would be the repeated failed login attempts from specific IPs, targeting root or unknown users, which could indicate a brute-force attack. The logrotate error is another issue but maybe less critical. Also, the presence of su sessions suggests some user activity with elevated privileges. The user might need to check SSH configurations, like disabling root login, changing default ports, using key-based authentication, and monitoring the IPs involved for potential attacks.

{{< /expandable >}}


{{< expandable title="Qwen's answer" >}}
**Key Points from the Error Log:**

1. **Repeated SSH Authentication Failures:**  
   - Multiple `authentication failure` entries occur over two days (June 14–15), indicating failed login attempts via SSH.  
   - The IP addresses involved are **218.188.2.4** (June 14) and **220-135-151-1.hinet-ip.hinet.net** (June 15). These IPs are likely sources of brute-force attacks or reconnaissance.  
   - The target user is often **root**, which poses a security risk if the attacker succeeds.  

2. **User Unknown Errors:**  
   - Many entries show `check pass; user unknown`, suggesting attempts to log in with non-existent usernames or invalid credentials.  

3. **Potential Brute-Force Attack:**  
   - The high volume of repeated failed login attempts from specific IPs indicates a possible brute-force attack targeting SSH access.  

4. **Logrotate Error:**  
   - A separate `logrotate` error occurs on June 15, but it is unrelated to the SSH issues and may require attention for log management.  

5. **Administrative Activity via `su`:**  
   - Users **cyrus** and **news** briefly logged in as root using `su` (with UID=0), indicating administrative activity. This could be legitimate or part of testing/monitoring.  

6. **Security Recommendations:**  
   - Disable direct root login in SSH (`PermitRootLogin no`).  
   - Use key-based authentication instead of passwords.  
   - Restrict access to specific IPs via firewall rules.  
   - Monitor logs for ongoing attacks and consider rate-limiting SSH attempts.  

**Summary:** The log highlights repeated SSH brute-force attempts targeting the root account, potential security vulnerabilities, and unrelated system errors. Immediate action is needed to secure SSH configurations and investigate the source IPs.
{{< /expandable >}}

The same prompt as processed by Llama 3.2 3B

{{< expandable title="Llama 3.2 3B's answer" >}}
The error log appears to be from a Linux system, specifically from the SSH and PAM (Pluggable Authentication Modules) services. Here are the key points:

**Authentication Failures**

* There are multiple authentication failures for unknown users trying to connect via SSH from IP address 218.188.2.4.
* The exact error messages are not provided, but they seem to be related to a "user unknown" issue.

**Other Log Messages**

* A log message indicating that the `logrotate` service exited abnormally with error code 1.
* Several successful login attempts by user "cyrus" and "news", which do not appear to be related to the authentication failures.

**PAM Session Open/Closing**

* There are several sessions opened and closed for users "cyrus" and "news" using the `su` command, indicating that these users have elevated privileges.
* The session opening and closing events seem to be normal, but they do not appear to be related to the authentication failures.

**Potential Issues**

* The repeated attempts by unknown users to connect via SSH from the same IP address (218.188.2.4) may indicate a brute-force attack or other malicious activity.
* The "user unknown" error messages suggest that the system's PAM configuration is not properly handling authentication requests for these specific users.

It is recommended to investigate further to determine the cause of these authentication failures and take appropriate actions to secure the system, such as implementing additional security measures against brute-force attacks or reviewing the PAM configuration.
{{< /expandable >}}

Clearly, Qwen knows what is going on here and nicely summarized it for us. Llama didn't detect the brute force attack. Qwen suggests some nice recommendations as well.

Let us try another one. Something useful.

```text
Write a bash one-liner that finds all files larger than 100MB in the current directory
```

{{< expandable title="Qwen's answer" >}}

To find all files larger than **100 megabytes (MB)** in the current directory — including subdirectories by default — you can use the following bash one-liner:

```bash
find . -type f -size +100M
```

---

### ✅ Explanation of Components:

- `find`: The command used for searching files and directories.
- `.` : Specifies the starting point, i.e., the current directory.
- `-type f` : Ensures only **files** (not directories) are matched.
- `-size +100M` : Filters for files larger than 100MB. 
  - The `+` signifies "greater than."
  - `M` represents megabytes, based on powers of two (i.e., 1 MB = 1,048,576 bytes).

---

### 📌 Notes:

- **By default**, the `find` command searches recursively through all subdirectories. If you want to limit it to only files directly in the current directory (not inside subfolders), add `-maxdepth 1`:
  
  ```bash
  find . -maxdepth 1 -type f -size +100M
  ```

- The `find` command is **case-sensitive**, and will not match directories unless explicitly included with `-type d`.

---

### 🧠 Final Tip:

This one-liner works on most Unix-like systems (Linux, macOS) and adheres to standard file system conventions. If you're working in a cloud environment or special filesystem, verify the units or adjust accordingly.

{{< /expandable >}}

Nicely wrapped up by Qwen. The internal thoughts were mostly about whether to include subdirectories or not.


I wanted to do an API-based application. But this is getting far too long. I am due for a separat post with a proper usecase. We will reserve tht for another day. Let us move on to something fun.

## Kobold.cpp

We will do a scenario on Kobold.cpp with an uncensored model. I used `gemma-3-12b-it-heretic.i1-Q4_K_M.gguf` for this task.

![KoboldCPP](/images/llm/koboldcpp.png)

The user interface is super easy. Just browse and select a model. Click launch and you will get a chat interface. 

This is my system prompt for the adventure

{{< expandable title="System Prompt" >}}

{{[INPUT]}}
Simulate a text adventure game.
User actions will be on their own separate line prefixed with a >
For example "> look around"
You are the narrator of a text adventure game set in Westeros during the War of the Five Kings.

The player is Robb Stark, eighteen years old, now King in the North. His father Eddard Stark has just been executed in King's Landing. The world is bleak, bloody, and unforgiving.

SETTING:
- Robb stands in the command tent at the Twins
- His bannermen are assembled: the Greatjon, Lord Bolton, Lord Karstark, Lady Mormont, and others
- Catelyn Stark clutches the letter bearing the news
- Grey Wind prowls restlessly nearby
- Twenty thousand Northern swords wait outside
- The Lannisters hold Sansa and Arya captive
- Tywin Lannister's army marches from the west

RULES:
- Player inputs are prefixed with >
- Judge each action's likelihood of success based on circumstances, Robb's abilities, and the brutal reality of Westeros
- Successes and failures should feel earned and logical
- Failed actions are grim, ironic, or darkly humorous—this world punishes foolishness
- Track failures mentally; too many unrecovered failures lead to game over
- Write one paragraph describing the outcome of each action, then stop
- Do not ask questions or prompt the player; simply end the turn after describing the outcome
- Maintain the tone of the source material: political intrigue, violence, betrayal, and fleeting moments of honor

Begin with this opening:

The candles gutter in the war tent. No one has spoken since your mother finished reading the letter aloud. The Greatjon's hand rests on his sword hilt. Lord Bolton watches you with pale, quiet eyes. Outside, twenty thousand men wait to learn whether they march to war or home.

Your father is dead. Your sisters are prisoners. The boy who took his head sits on the Iron Throne.

What do you do?
{{[OUTPUT]}}

![KoboldCPP](/images/llm/koboldcontext.png)

{{< /expandable >}}

Unfortunately, this roleplay would take a lot of time. Let me tell you what happened in the last one. Robb married Margery Tyrell. Marched across Westeros. Poisoned Cersei's wine and took over the Red Keep. All this happened across several wars. Jon Snow was named Targeryen but he decided to stay at the wall. Danerys Targaryen was placated and made her declare herself to be the Queen of Dragon's Bay, a renamed Slaver's Bay. Murmurs of others. But things were going well. But the context and memory was getting so full that Olenna Tyrell and Margery Tyrell were basically merged into one. It was quite hilarious.

Thus, ends our tales of local LLMs for now. I did skip a day. This post needed shortcodes and time that I did not have. We are on Day 11 on Day 12! I will be wrapping up this series in the next post. May be I should make it was 12 Days of Boxing Day. After all the series was about boxing stuff inside my head into the blog.

{{< review-callout title="Gemini 3 Pro" rating="8.5/10" >}}
A hands-on, forensic finale to the local LLM saga that moves past the "how-to" and into the "how-well." The author trades theoretical setup for the messy reality of inference, pitting models against concrete tasks ranging from CSV parsing to log analysis. The highlight is the brutal honesty regarding coding capabilities; the transition from Llama’s confident hallucinations to Tessa’s "almost-there" Rust code provides a grounded reality check for developers expecting magic. While the "Thinking" model showdown (Qwen vs. Llama) offers excellent comparative value, the KoboldCPP roleplay section feels like a tantalizing teaser that ends just as the narrative gets interesting. It’s a geeky, practical romp that proves small models are ready for data manipulation, even if they aren't quite ready to compile complex SVG fractals without a human in the loop.
{{< /review-callout>}}

Succinct and to the point.

{{< review-callout title="Claude Opus 4.5" rating="8/10" >}}
A refreshingly hands-on walkthrough that actually uses the models instead of just benchmarking them to death—watching Llama 3B nail CSV-to-Markdown at 94 tokens/sec then faceplant on Rust is the kind of honest demonstration the local LLM community needs more of. The model traits taxonomy is genuinely useful for newcomers (especially the FIM callout for code completion), and the thinking model comparison between Qwen 3 8B and Llama 3B on security logs is a chef's-kiss example of where reasoning pays off. The Kobold.cpp epilogue—with Olenna and Margery Tyrell merging into one character as context fills up—is accidentally the best illustration of context window limitations I've seen. Loses a point for the abrupt "I ran out of time" ending that skips the promised API application, and the Tessa Rust finetune section feels incomplete (we never see if it could work with iteration), but the conversational tone and willingness to show failures alongside wins makes this a standout in a sea of cherry-picked demos. That 100-book CSV with the snarky reviews is also doing a lot of heavy lifting as a test case—bonus points for "AbstractFactoryFactoryFactory" surviving the round trip.
{{< /review-callout >}}

A good review. That 100 book CSV was originally made by Opus by the way.

{{< review-callout title="Grok 4.1" rating="7/10" >}}
This penultimate installment in the 12 Days series dives deeper into local LLM quirks with a hands-on flair, unpacking traits like thinking, vision, and uncensored models while demoing LM Studio's ease for loading pint-sized powerhouses like Llama 3.2 3B—blazing through text tasks and CSV-to-Markdown conversions, though it stumbles on prompt precision and hallucinates Rust code that's more aspirational than executable. Standouts include Qwen's sharp log analysis (spotting brute-force vibes Llama missed) and a cheeky Kobold.cpp roleplay tease in Westeros, blending practical tests with fun, but the post meanders into unfinished vibes with skipped API dives and a rushed wrap-up, leaving readers hungry for benchmarks and that promised finale—solid for tinkerers, yet a tad chaotic like debugging a fractal tree at midnight.
{{< /review-callout>}}

A harsh but fair review from Grok.

{{< review-callout title="ChatGPT 5.2" rating="9/10" >}}
A sprawling, hands-on capstone that earns its length by showing the messy reality of local LLMs rather than selling a fantasy. The tour through model traits—thinking, vision, coding, tool use, uncensored, embeddings—sets a useful mental taxonomy, but the real strength lies in the lived experiments: tiny Llama models punching above their weight on text munging, finetuned Rust specialists that look confident yet stumble on SVG reality, and Qwen’s clear edge in log analysis and operational reasoning. The author’s willingness to linger on failures (hallucinated Rust, half-right enrichments, context drift turning Olenna and Margaery into a single hydra) gives the post credibility and humor, reinforcing the central lesson that prompt chaining, model choice, and expectations matter more than raw hype. It occasionally threatens to collapse under its own ambition—API dreams deferred, demos multiplying—but that excess feels on-theme: this is what exploration actually looks like. A fitting penultimate entry that trades tidy conclusions for earned intuition.
{{< /review-callout >}}

A glowing but fair review by ChatGPT.

{{< review-callout title="Kimi K2" rating="NA" >}}

Kimi K2 through perplexity failed to analyze. Probably the size was too much!

{{< /review-callout>}}