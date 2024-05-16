+++
author = "Logan Core"
title = "Eternal Descent - Design Document"
date = 2024-05-10
last_updated = 2024-05-15
show_comments = false
hide_list_items = true
+++

{{% notice info %}}
Replace me with banner image of some kind
{{% /notice %}}

{{% button href="./#schedule" color="#ffdf00" font-color="#020202 "%}}Schedule{{% /button %}}

---


{{< expand "Quick Navigation" >}}

{{% button href="./#what-is-this-game-about" color="#8B43A9" font-color="#020202 "%}}What is this game about?{{% /button %}}

{{< /expand >}}




## What is this game about?

Eternal Descent is a Single player First-person shooter which tasks the player with a simple goal:

Survive the onslaught of enemies long enough to defeat the Catalyst and unlock the path to the next level.

---

The game will be built with quick-restarts in mind. The player will die in one hit and mistakes from the player will unlikely be forgiven. (Enemies must have predictable patterns that the player can learn. The player should **always** feel like their deaths are due to mistakes on their part and not something unfair the game did.) The game will be tuned to be more difficult than average and feature an online leaderboard powered by Steamworks

---

Enemies will spawn in waves which the player will need to deal with before the next wave spawns, enemies from previous waves will stay in the arena if they are not dealt with in time so the player will have to continuously stay on top of clearing enemies or risk being overwhelmed.

---

Enemies will also have a "Frenzy Factor" that is influenced by the amount of others enemies surrounding them. If enemies start to bunch up and the arena gets crowded. Their "Frenzy" stat will increase and this will influence multiple stats on the enemy making them a more dangerous threat

---

## What do the first few minutes of Eternal Descent look like?:
- The player launches the game from Steam.
- A "Logan_Core" credit splashscreen appears with the tagline "Created in Godot".
- Fade transition from splashscreen to main menu.
- Menu Buttons available to the player:
	- [Play](./#play)
	- [Practice](./#practice) (Should be hidden from player until very first Playthrough)
	- [Leaderboard](./#leaderboard)
	- [Options](./#options)
	- Quit
- Player Selects Play
- Transition to gameplay, starting the player off in a empty grey void with nothing but a platform to walk around on and the Catalyst above the center of the arena.
- The player attacks the Catalyst for it to then immediately activates and breaks through the center leaving a portal for the player to follow to level 1.
-
---

There will be 9 total levels, each representing a layer of hell from Dante's inferno literature.
1. [Limbo](./#level-1-limbo)
2. [Lust](./#level-2-lust)
3. [Gluttony - Cerberus](./#level-3-gluttony---cerberus)
4. [Greed](./#level-4-greed)
5. [Anger](./#level-5-anger)
6. [Heresy - The Heretic](./#level-6-heresy---the-heretic)
7. [Violence](./#level-7-violence)
8. [Fraud](./#level-8-fraud)
9. [Treachery - Catalyst](./#level-9-treachery---catalyst)

It should be noted that the game itself won't have a story. All the player needs to know is to keep descending. just planning on borrowing from Dante's Inferno for imagery and inspiration. Astute observers may notice the references but that's about it.

---

# The Catalyst:
The Catalyst appears as a floating white orb that distorts surrounding light and serves as the main antagonist of the game. It will shoot out portals that new enemies will spawn from and must be defeated by the player on each level in order to progress further.

After the Catalyst has lost a specific amount of health each level, WRITE STUFF HERE LATER

After enough damage has been dealt to the Catalyst, it will float high above the center of the arena and begin charging up. After a short time, it will charge down and crash through the level leaving a hole for the player to follow to the next level. This action of charging through the level and leaving a hole will also release a shockwave killing all enemies left in the arena. (The Catalyst will have some form of armor it'll activate if too many enemies are alive. This will prevent some cheap tactics of just avoiding enemies and focusing on the Catalyst)



## Scoring
Each of the 9 levels will be infinite and have a repeating enemy spawn pattern that loops every minute or so, getting more difficult as time goes on.

I want to incentivize two different ways of playing the game:
1. Go for the fastest time. defeating the Catalyst as fast as possible (This will be the expected form of play for most players)
2. Go for the longest time / highest kill count. Levels are infinite and players can choose to stay on a level and ignore the catalyst while they rack up kills and time spent alive.
Early levels will start by linearly increasing in difficulty with time while later levels will be more erratic and unforgiving
I.E(Reaching the 5 minute mark on Level 1 should be very difficult but reaching that same time on Level 8 should be almost humanly impossible)

After the Catalysts escapes, the shockwave it creates will erase all remaining enemies and the music and scenery will instantly adjust to signify to the player that the level is complete. The score timer will pause. At the player's leisure, they can jump into the hole and follow the Catalyst to the next level.

## GameModes
There will be two gamemodes for the player to choose from:

# Play:
The standard mode that starts the player from the beginning allowing the player to progress to new levels.
# Practice:
Allows the player to start from any of the floors they've previously reached and select starting weapon resources.
After the player finishes a level in practice mode, the level transition hole that opens up will reset the player's weapons and drop them transition them to the same level on repeat until they switch back to Play mode.

---


## Options

---


## Leaderboard

---

## Player Mechanics
Beyond all else, the player needs to feel in control of their actions.

## Weapon System
The player will have two attacks available to them at all times:
- Left Click: Fire Gun
- Right Click: Sword

# Gun

# Sword
When the player swings their sword, The relative velocity of the camera should determine the angle the sword swings at. I.E(If the player is rotating their camera to the right with no vertical movement, the sword should swing flat horizontally to the right // If the camera is rotating upwards towards the sky and also to the right, the Sword should swing at a near 45degree angle following that path)

The slash of the sword will be instant and act as a wide angle hitscan weapon. Most enemies caught in the path of the sword will be cut cleanly and instantly have their hurtbox collisions disabled.

The sword will be very strong but it will have some drawbacks:
1. It will have a short cooldown between swings (Swarms of enemies will still overwhelm the player)
2. The cooldown between swings will prevent the player from firing their gun as well.
3. Some enemies will be resistant to the instant-kill affect. (I'll have a specific color represent armor and teach player through gameplay that the sword can't attack through it no matter what. Maybe give tougher enemies on later levels bits of armor the player would have to slice around?)


## Enemy List

## Swarmer
The simplest enemy. Loosely flies towards the player at all times. Spawns in large groups and quickly amalgamate into frenzied swarms that fly faster and at tighter angles towards the player.

---

## Tripwire
A post-shaped walking quadruped with a ball top that can connect with other Tripwires to create short barriers the player can either cut with their sword to remove the immediate obstacle or attack either post directly to destroy the pair. Slow moving and have a limit to how many can occupy the arena.

---

## Missile Drone
A sharp-looking flying creature that hones in on the player at very speed. Should emit a recognizable sound to warn the player they are incoming.

---

## Enemy 4
Info about enemy goes here

---

## Levels
## Level 1: *Limbo*
**{{< fontcolor color="#69AFDE" >}}Blue Cloudy Sky{{< /fontcolor >}}**
Picturesque blue sky with large mountain-like clouds in all directions.
Have a hint of the sun poking out somewhere high in the sky with painted light shafts over clouds

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

The first level in the game has a very important role to fill. The player will spend MOST of the time here.

The player is expected to reset hundreds if not thousands of times in order to gain the skills and experience needed to complete a full run through the game. By the end, players that stick to it will definitely become so familiar with this level they could pretty much do it blindfolded.

More so than later levels, Level 1 needs to have near-perfect "invisible" appeal. Something that draws the player in and help alleviate the pain of having lost their previous attempt. The specific qualities I'm looking for will be difficult to write down but either way, out of every level in the game, this one will be under the most scrutiny and have the most revisions for sure.


## Level 2: *Lust*
**{{< fontcolor color="#f4a35c" >}}Mesa Plateau{{< /fontcolor >}}**

test

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

## *What is introduced?:*

{{% notice note %}}
New Introduction: test
{{% /notice %}}

---

## Level 3: *Gluttony - Cerberus*
**{{< fontcolor color="#83855f" >}}Impossibly Large Cave{{< /fontcolor >}}**

The third level in the game will have the first boss the player encounters.


A super large cave expanse so large the walls can bearly be seen through distant fog. with giant stalactites/rock columns obscuring vision closer to the arena.
When Cerberus appears, parts of his moving snake body should appear off int eh distance coiling up and around the environment to give him an impossibly large sense of scale compared to previous enemies the player has encountered.

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

## **Cerberus**
There are certain rules that are typically followed for the "first boss" in an action video game. It is not untypical for the first boss to be treated as a glorified tutorial, however, that need not be the case for this guy. I want Cerberus to 100% be the first major wall the player has to overcome.

Intro:
The player drops into the arena from the previous level and the Catalyst floats quietly above the edge of the platform. Rumbling sounds are played and Cerberus's body begins to appear from the outskirts in the distance. A few moments later, a large creature with the body of a snake jets up to the left of the Catalyst, then a second on the right, and finally a third one jets up higher than the others directly behind the catalyst and chomps down on it, A vertical slit eyeball pupil appears on the catalyst and then the figth begins

Player Objective:
Attack the Catalyst inside Cerberus's mouth. The creature holding the Catalyst will occasionally back away into the abyss and send out enemies for the player to deal with.
The other 2 Cerberus heads will navigate semi-randomly around the arena and unleash simple attacks, the player will have the attention and focus split between different enemies in all directions at worse

---

## Level 4: *Greed*
**{{< fontcolor color="#adeef9" >}}Icy Abyss{{< /fontcolor >}}**

test
{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

Another test?? Really?

Trying something out

---

## Level 5: *Anger*
**{{< fontcolor color="#0c9d0b" >}}Abandoned Jungle Temple{{< /fontcolor >}}**

Environment info goes here

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}


---

## Level 6: *Heresy - The Heretic*
**{{< fontcolor color="#715e5c" >}}Eclipse{{< /fontcolor >}}**

Environment info goes here (Dark Souls 3 Final boss reference)

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}


At the beginning of the level. There will be no music and barely any ambience. The Catalyst will fly high up into the skybox and create an eclipse-like scenery. It will then spawn in the boss

---

## Level 7: *Violence*
**{{< fontcolor color="#f42514" >}}Volcano Hellscape{{< /fontcolor >}}**

Environment info goes here

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

## Level 8: *Fraud*
**{{< fontcolor color="#ffffff" >}}Space, Stars, and Galaxies{{< /fontcolor >}}**

Environment info goes here

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

## Level 9: *Treachery - Catalyst*
**{{< fontcolor color="#5a5a5a" >}}Night Stormy Sky{{< /fontcolor >}}**

Environment info goes here Night Sky Falling through clouds (Tornado-like with lightning)

{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

---

{{% notice note %}}
Estimated Project Completion:
███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 3%
{{% /notice %}}

## Schedule
Don't forget to record timelapse footage for Archive!
## Week 1:
- [ ] First Draft of Design Document
- [ ] Initialize Godot project / Git repo
---
## Week 2:
- [ ] Add Placeholder Template Artwork (Follow SteamWork Guidelines)
- [ ] Bring somebody up to speed and sanity check documentation together
- [ ] test one
---
## Week 3:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 4:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 5:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 6:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 7:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 8:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 9:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 10:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 11:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 12:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---

---
