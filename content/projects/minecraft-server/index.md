---
title: "Northwestern Minecraft Server"
date: 2021-03-24
summary: "A multi-year Minecraft survival server tailored for the Northwestern community."
tags: [projects, minecraft, server, northwestern, featured]
draft: false
---

## Introduction

I designed, developed, and hosted several iterations of a Minecraft server for the Northwestern community, open to all students of all skill levels. Created shortly after the onset of COVID-19, this server gave new students the opportunity to meet and engage with one another in a virtual, interactive medium. Since 2020, this server has had 4 major iterations (plus a brief [Pixelmon](https://pixelmonmod.com/) spinoff). Each iteration has coincided with a summer or winter break. With each year, members of the next freshmen class would join us.

While I don't have accurate metrics across server iterations, over 250 players from the Northwestern community have been added to the server's whitelist, with tens of players consistently online during school breaks. As life returns to being in person once more, player activity has dwindled, and the server was eventually shuttered in 2023. But while it was live, this server was a nexus for student interaction and it led to the creation of many friendships and friend groups lasting to this day. 

I did have a bit of an ulterior motive besides making friends. This server was a way for me to test out certain Minecraft server development and design methodologies without having to compete to build an organic playerbase. I've been developing Minecraft servers for nearly a decade at this point, but it is sometimes difficult to test new ideas when you're also trying to manage the business aspects and retain a player count.

Check out a student's YouTube video documenting a server event!
<rawhtml> <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/V-DeLX_fGkY?si=VGckN2kFT3C0br0b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Key Design Principles

Here are some key pillars of my design of these servers and how I went about implementing them:

### Accessibility for new or inexperienced players 
A driving goal of my design was for this server to accommodate players of any skill level, whether they've never played before or have been playing for a decade. I wanted to have systems that would be kind to "non-gamers" and still provide meaninful challenge to those who desire it.

Upon logging in, players would receive a book with information about the server itself, its rules, and any custom content. We also had [written documentation](https://docs.google.com/document/d/1M3Pj1upfYACaIvH_9hX_CI2bOQamLUoKqvhOX_qquZ0/edit?usp=sharing) for some special server commands, such as the ability to set "home" locations and teleport to other players. For the first two maps, we also chose to implement cross-compatibility between Java and Bedrock editions of the game, so that console or mobile users could also join in. This feature was later removed in map 3 due to moderation difficulties and missing Minecraft features that ultimately hurt the Bedrock player experience.

### Focus on community building
My biggest concern was that players would just log in and run off to their own section of the map, never interacting with anyone else until they got bored enough to stop playing. There were a few ways I went about mitigating this in each iteration, including implementing a world border to contain players to a common space, disabling spawn region protection to encourage community projects, and running various whole-server events to bring players together. Some of these events included a holiday-themed visit to the "North pole" (named after a player, North), a gladiator fighting tournament, and collective dungeon crawl.

These seemed to work well, and very soon after the start of each map players would form villages together and would frequently ask others to play with them. Some of these groups even got so tight that they became friends once they ended up on campus, and have remained strong friendships throughout college.

### Impactful and attractive gameplay changes
Another way to entice players and keep them engaged with the server was done though the addition of content not present in the base ("vanilla") game or in a singleplayer world. These included expansive cave generation with new formations and biomes, new world biomes with varying flora and structures, and additions to game lore such as abandoned villages or dungeons ruled by monsters. The dungeons, added in map 3, were intentionally impossible to beat singlehandedly so that players were required to team-up. Players who were shared a preferred playstyle (i.e. "builders" or "dungeon crawlers") tended to band together and form friendships due to their close contact. There was also an MMO-style skills system that players could level up to unlock special abilities and attributes.

Despite all the changes, players were not required to install any other mods. None of the new features were so over-the-top as to detract from the original game's purpose and experience. This was an intentional choice, as I wanted players to be able to engage as much or as little with the custom content as they felt like.

### High performance servers
Minecraft servers are notoriously difficult to run. Each requires several GB of RAM and high CPU clock speeds and the server software is not well threaded. Tens of players all over the map exploring and doing stuff at once plus activity loggers for our web map and moderation tools was probably the *worst* case for the vanilla server software. 

I deployed a variety of solutions to mitigate the impact. First, we used the much faster [Paper](https://github.com/PaperMC/Paper) server software. Since world generation is the most CPU expensive action players can cause, I wrote a tool to pre-generate the first 10K x 10K region of the map before the server opened. Any extra custom behavior I implemented in a Java plugin to minimize our third-party plugins.

Minecraft servers are expensive to host due to the aforementioned compute demand. Thankfully, I owned several used Dell PowerEdge servers and parts for them are quite cheap. A couple hundred dollars spent on RAM, SSD, and CPU upgrades made a huge difference in player experience and long-term costs.

## World downloads

You can find world downloads [here](https://drive.google.com/drive/folders/1FR7JbUFGJXvERUmktMjmRGRukG1UjnBE?usp=sharing).

## Pictures
The featured image was taken by [Collin Porter](https://www.instagram.com/collin.mp/)