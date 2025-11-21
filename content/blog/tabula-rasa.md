---
title: "Tabula Rasa"
date: 2025-11-30T19:58:38+05:30
showComments : true
draft: true
---

The title pretty much has nothing to do with the topic. Something that came into my mind while typing the file name. I had to look it up to remember what it means. 

**"Tabula rasa is a Latin phrase meaning “blank slate,” used mainly in philosophy and psychology to describe the idea that the human mind starts out without innate ideas or content, and is shaped by experience."**

Our topic today has nothing to do with psychology or philosophy. Well, a little bit of both if you really want to stretch.

For most people, tables are the bane of existence in Markdown documentation. They are difficult to craft. Even more difficult to maintain. A space here, a pipe there can break the output. The worst part is that you'll never spot it. It will be spotted by that cranky engineer or that gleeful customer.

In a collaborative workspace, docs are the responsibility of everyone. In Endor Labs, docs is part of the monorepo and anyone can update them. There are reviews ofcourse and we do have a bunch of tools running in the CI for validation. We have several engineers, who are enthusiastic about fixing things in doc. It does not make much sense to gatekeep the docs in a place that is as fast moving as ours. What is the need of raising a ticket and waiting for a technical writer to pick up that ticket, only to update a couple of values? A lot of these tables are updated very often by all of us. The major issue is that, since updating a value in a table or adding a row is trivial, all of us guilty not to build the docs and do a cosmetic verification. Broken tables sneak in and are left undiscovered. This is not to say that non-technical writers were breaking the tables. We were breaking more of them than others. But others have less of a responsibility in testing the look and feel of the docs.

I tried writing a bash script in the CI to spot some of these broken tables. But the sheer range of possibilities of breaking a table caught up with us. Not to mention the false positives with tighter checks.

The issue of broken table is a problem. The other problem was the lack of readability in markdown. When the tables became large, the readability of the tables went down drastically. Markdown is not supposed to be WYSIWYG, but I have always felt that while we update a doc, we would naturally revise and update other parts as well. A readable document makes this process a lot easier.

After a lot of deliberation, I decided to build a table shortcode. Write the information in a YAMLesque format and let Hugo covert it into markdown during the build process. Shortcodes are incredibly powerful in Hugo and extends the functionality to a large extent. There were several implementations that people have written over the years. Some of them very good. But I was fixated with a YAML like appearance. In my previous workplace, I was wading knee deep in YAML. The format has it's own problems, and to be honest, TOML is a superior configuration format. But YAML is so much more readable in its simplistic layout. Nesting, mapping, hierarchy, and other features are available in YAML, which makes it a pain in the ass. But for our use case, a simple YAML would be very easy to read.

The idea was that each row in the YAML will be represented by a sequence. The column names as a key. The sequences will continue for each row with the key names being constant.

For example:

```yaml
- name: Elephant
  habitat: Savanna
  diet: Herbivore

- name: Tiger
  habitat: Forest
  diet: Carnivore

- name: Parrot
  habitat: Rainforest
  diet: Omnivore
```

The shortcode will markdownify the YAML and construct a table during the build. Not much of readability when you consider the Markdown equivalent you would say.

```markdown
| Name     | Habitat    | Diet      |
| -------- | ---------- | --------- |
| Elephant | Savanna    | Herbivore |
| Tiger    | Forest     | Carnivore |
| Parrot   | Rainforest | Omnivore  |
```

But consider this example:

```yaml
- name: Elephant
  habitat: Savanna
  diet: Elephants are herbivores, primarily feeding on grasses, leaves, bark, and fruits, and they spend a large part of their day foraging.

- name: Tiger
  habitat: The dense forested region provides cover and hunting grounds for the tiger, making it an ideal habitat.
  diet: Tigers are obligate carnivores, hunting a variety of prey such as deer, wild boar, and sometimes larger mammals, relying solely on meat for sustenance.

- name: Parrot
  habitat: Found primarily in the lush, green rainforests which offer abundant food and shelter through various species of trees and plants.
  diet: Parrots are omnivorous birds that eat a wide range of foods including fruits, seeds, nuts, flowers, and sometimes insects or small animals.

- name: Lion
  habitat: Grasslands and open woodlands where they can hunt in prides.
  diet: Lions are carnivorous predators that primarily hunt large herbivores such as zebras, buffalo, and antelope, using teamwork and strategy.

- name: Dolphin
  habitat: Oceanic coastal waters and shallow seas.
  diet: Dolphins eat a diet mainly consisting of fish and squid, using echolocation to hunt and capture their prey efficiently.

- name: Kangaroo
  habitat: Australian grasslands and bushland.
  diet: Kangaroos are herbivores feeding on grasses, leaves, and shrubs, adapted to surviving in arid environments.

- name: Penguin
  habitat: Cold coastal regions mostly in the southern hemisphere.
  diet: Penguins feed mainly on fish, krill, and other small sea creatures, diving to catch their food underwater.

- name: Giraffe
  habitat: African savannas with ample trees.
  diet: Giraffes are herbivores, preferentially browsing on leaves, shoots, and fruits of tall trees like acacias using their long necks.

- name: Panda
  habitat: Mountainous bamboo forests.
  diet: Pandas are mainly herbivores with a diet dominated by bamboo, though they occasionally eat small animals and carrion.

- name: Owl
  habitat: Dense forests and open countryside where they hunt small mammals and insects at night.
  diet: Owls are carnivorous nocturnal birds, feeding on small mammals, insects, and other birds by hunting silently using their acute senses.
```

The equivalent Markdown would be:

```markdown
| Name     | Habitat                                                                                                                           | Diet                                                                                                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elephant | Savanna                                                                                                                           | Elephants are herbivores, primarily feeding on grasses, leaves, bark, and fruits, and they spend a large part of their day foraging.                    |
| Tiger    | The dense forested region provides cover and hunting grounds for the tiger, making it an ideal habitat.                           | Tigers are obligate carnivores, hunting a variety of prey such as deer, wild boar, and sometimes larger mammals, relying solely on meat for sustenance. |
| Parrot   | Found primarily in the lush, green rainforests which offer abundant food and shelter through various species of trees and plants. | Parrots are omnivorous birds that eat a wide range of foods including fruits, seeds, nuts, flowers, and sometimes insects or small animals.             |
| Lion     | Grasslands and open woodlands where they can hunt in prides.                                                                      | Lions are carnivorous predators that primarily hunt large herbivores such as zebras, buffalo, and antelope, using teamwork and strategy.                |
| Dolphin  | Oceanic coastal waters and shallow seas.                                                                                          | Dolphins eat a diet mainly consisting of fish and squid, using echolocation to hunt and capture their prey efficiently.                                 |
| Kangaroo | Australian grasslands and bushland.                                                                                               | Kangaroos are herbivores feeding on grasses, leaves, and shrubs, adapted to surviving in arid environments.                                             |
| Penguin  | Cold coastal regions mostly in the southern hemisphere.                                                                           | Penguins feed mainly on fish, krill, and other small sea creatures, diving to catch their food underwater.                                              |
| Giraffe  | African savannas with ample trees.                                                                                                | Giraffes are herbivores, preferentially browsing on leaves, shoots, and fruits of tall trees like acacias using their long necks.                       |
| Panda    | Mountainous bamboo forests.                                                                                                       | Pandas are mainly herbivores with a diet dominated by bamboo, though they occasionally eat small animals and carrion.                                   |
| Owl      | Dense forests and open countryside where they hunt small mammals and insects at night.                                            | Owls are carnivorous nocturnal birds, feeding on small mammals, insects, and other birds by hunting silently using their acute senses.                  |
```

Now you need to rely on a linter, which is not a bad idea. But invariably mistakes will creep in. Markdown linters need to be configured properly or else you get a lot of errors, which are not errors in your book. The possibility of errors increase dramatically. Readability has also come down a lot. It would look a lot decent on the page, but not inside the IDE. Especially when you have several panels and limited screensize if you are on a laptop.



