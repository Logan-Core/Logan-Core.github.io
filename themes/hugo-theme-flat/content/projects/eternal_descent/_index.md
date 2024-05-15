+++
author = "Logan Core"
title = "Eternal Descent - Design Document"
date = 2024-05-10
last_updated = 2024-05-14
show_comments = false
hide_list_items = true
+++

{{% notice info %}}
Replace me with banner image of some kind
{{% /notice %}}

{{% button href="./schedule" color="#ffdf00" font-color="#020202 "%}}Schedule{{% /button %}}

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

There will be 9 total levels, each representing a layer of hell from Dante's inferno literature.
1. [Limbo](./level_1)
2. [Lust](./level_2)
3. [Gluttony - Cerberus](./level_3)
4. [Greed](./level_4)
5. [Anger](./level_5)
6. [Heresy - The Heretic](./level_6)
7. [Violence](./level_7)
8. [Fraud](./level_8)
9. [Treachery - Catalyst](./level_9)

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


Possible Level Enviroments:
- Beautiful Sky Above the clouds
- Mesa-like plateau
- Empty giant cave expanse with giant stalactites/rock columns [CERBERUS](./level_3/#cerberus)
- Icy Abyss
- Abandoned Temple
- Eclipse Abyss (Dark Souls 3 Final boss reference) [THE HERETIC](./level_6)
- Volcanic Ash
- Space, Stars, and Galaxies (Recreate parallax planet from BioMetal)
- Night Stormy sky above Dark Grey Clouds [Catalyst](./level_9) /// Night Sky Falling through clouds (Tornado-like with lightning) [Catalyst - PART 2](./level_9)

## Player Mechanics
Info available on [Player Controller](./player_controller) page

## Enemy List
Info available on [Enemy](./enemy_list) page

---
