+++
author = "Logan Core"
title = "Eternal Descent - Design Document"
date = 2024-05-10
last_updated = 2024-05-18
show_comments = false
hide_list_items = true
+++

{{% notice info %}}
Replace me with banner image of some kind
{{% /notice %}}

{{% button href="./#schedule" color="#ffdf00" font-color="#020202 "%}}Schedule{{% /button %}}

---

Design everything with intent. Avoid arbitrary decisions

{{< expand "Quick Navigation" >}}

{{% button href="./#what-is-this-game-about" color="#8B43A9" font-color="#020202 "%}}What is this game about?{{% /button %}}

{{< /expand >}}

## What is this game about?

Eternal Descent is a Single player First-person shooter which tasks the player with a simple goal:

Survive the onslaught of enemies long enough to defeat the [Catalyst](./#the-catalyst) and unlock the path to the next level.

---

The game will be level-based with deaths restarting the player at level 1. Nothing will be carried over between attempts. The player will have the same starting conditions every time and only by gaining experience will they be able progress further.

The game will be built with quick-restarts in mind. The game will be tuned to be more difficult than average and feature a online leaderboard where other users can compete for the fastest time!

---

Enemies will spawn in waves which the player will need to deal with before the next group spawns, enemies from previous waves will stay in the arena indefinitely until they are killed so if they are not dealt with, the player will quickly find themselves overwhelmed.

Most enemies will also have a "Frenzy" stat that is influenced by the amount of others enemies surrounding them. If enemies start to bunch up and the arena gets crowded. The enemies' "Frenzy" stat will increase and change their behavior making them a more dangerous threat.

---

The Catalyst is floating orb and serves as the main antagonist of the game. It will float around the outskirts of each level and shoot out portals that new enemies will spawn from.

Once the player deals enough damage to the Catalyst. It will retreat by opening a new portal that the player can follow through to the next level.

---

## What do the first few minutes of Eternal Descent look like?:
1. The player launches the game from Steam.
2. A "Logan_Core" credit splashscreen appears with an epilepsy warning followed by a "Created in Godot" splashscreen. (Can be skipped to get into menu faster)
3. Fade transition into main menu.
4. Menu Buttons available to the player:
	- [Play](./#play)
	- [Practice](./#practice) (Should be hidden from player until after they complete tutorial for the first time)
	- [Leaderboard](./#leaderboard)
	- [Options](./#options)
	- Quit
5. Player Selects Play
6. Transition to gameplay, starting the player off in a infinite empty grey void. The Catalyst floats silently above a short distance away from the player.
7. This is a quick tutorial to show the player the objective. Once the player attacks the Catalyst (There's nothing else to do, The player should naturally try shooting it). It will begin flying around erratically and show that it's being damaged. The Catalyst will eventually fly far enough away to the point where the default mode of the gun can no longer reach it. A Mousewheel icon will appear teaching the player the gun muzzle mechanic. Once the player damages the catalyst enough, it'll fly above the center of the arena and crash through leaving a portal for the player to follow to level 1.
8. The main gameplay loop begins:
	- Catalyst floats around the outskirts of the level shooting out portals that enemies will spawn from.
	- The player deals enough damage to the Catalyst, causing it to flee. Leaving a open portal on the ground for the player to follow.
	- Player jumps through and reaches the next level. This cycle repeats. Each level should take around 2 minutes at most with earlier levels having more opportunities to finish faster. (fewer armor moments for the Catalyst, less time waiting around for phases and such). Have Boss fights on every third level. Final boss on Level 9.
9. When the player dies. Show stats, basic leaderboard info and lastly show how far down the player made it on the attempt. (It's important to show the Player that there are 9 total levels. I want the player to understand that there is an ending to play for and that the game isn't an infinite shooter where the only goal is to get a high score.)
10. Prompt the player to restart, return to main menu, or quit.
11. When the player presses the restart button. Start the player midway through the first portal already transitioning into level 1. Skip the intro/tutorial until the next time the game is launched.
---

There will be 9 total levels, each loosely representing a layer of hell from Dante's inferno literature.
1. [Limbo](./#level-1-limbo)
2. [Lust](./#level-2-lust)
3. [Gluttony - Cerberus](./#level-3-gluttony---cerberus)
4. [Greed](./#level-4-greed)
5. [Anger](./#level-5-anger)
6. [Heresy - The Heretic](./#level-6-heresy---the-heretic)
7. [Violence](./#level-7-violence)
8. [Fraud](./#level-8-fraud)
9. [Treachery - Catalyst](./#level-9-treachery---catalyst)

It should be noted that the game itself won't have a story. All the player needs to know is to just keep descending down. I'm just planning on borrowing from Dante's Inferno for imagery and inspiration. Astute observers may notice the references but that's about it.

---

# The Catalyst:
The Catalyst appears as a floating white orb that distorts surrounding light and serves as the main antagonist of the game. It will shoot out portals that new enemies will spawn from and must be defeated by the player on each level in order to progress further.

After the Catalyst has lost a specific amount of health each level, Give it some kind of armor that can only be removed by clearing the next wave of enemies.

After enough damage has been dealt to the Catalyst, it will float high above the center of the arena and begin charging up. After a short time, it will charge down and crash through the level leaving a hole for the player to follow to the next level. This action of crashing through the level and leaving a hole will also release a shockwave killing all enemies left in the arena. (The Catalyst will have some form of armor it'll activate if too many enemies are alive. This will prevent some cheap tactics of just avoiding enemies and focusing on the Catalyst)

## Scoring
Each level will be infinite and have a repeating enemy spawn pattern that loops every minute or so, getting more difficult as time goes on.

I want to incentivize two different ways of playing the game:
1. Go for the fastest time. Reaching the bottom and defeating the Catalyst as fast as possible (This will be the expected form of play for most players and the default view on the Leaderboard)
2. Go for the longest time. Levels are infinite and players can choose to stay on a level and ignore the catalyst while they rack up kills and time spent alive.
Early levels will start by linearly increasing in difficulty with time while later levels will be more erratic and unforgiving
I.E(Reaching the 5 minute mark on Level 1 should be very difficult but reaching that same time on Level 8 should be humanly impossible)

After the Catalysts escapes, the shockwave it creates will erase all remaining enemies and the music and scenery will instantly change to signify to the player that the level is complete. The score timer will pause. At the player's leisure, they can jump into the hole and follow the Catalyst to the next level.

---

# GameModes
There will be two gamemodes for the player to choose from:

## Play:
The standard mode that starts the player from the beginning allowing the player to progress to new levels.
## Practice:
Allows the player to start from any of the floors they've previously reached and select starting weapon level.
After the player finishes a level in practice mode, the level transition hole that opens up will reset the player's weapons and drop them into the same level on repeat until they switch back to Play mode.

---


## Options

List all games options. Don't forget epilepsy/accessibility stuff
Don't use words like "epilepsy safe mode", there's gotta be legal issues with that. "Reduced Visual Effects" or something instead

Start listing things here. Cleanup/organize later:
- Viewmodel Bobbing
- Fullscreen
- Resolution
- Mouse Sensitivity (x,y) & lock
- Sound Effect Volume
- Music Volume
- Reduced Visual Effects
- Player Control Rebinds
- Reset to Default
- FOV
- VSync
- Max FPS
- Show FPS
- Gamma
---


## Leaderboard

Add leaderboard information stuff here later.

Each run through the game will also automatically record a demo that can be played back later for leaderboard validation and for review and such.
Because of the length of the game and certain factors that may not be completely deterministic, Each demo will end right when the Catalyst breaches through the level and then a new demo recording will begin right when the next level begins. (Players could potentially go afk after a level, so it'll be better if I don't accidentally record that.)
When playing back the demos. I'll have some kind of visual transition to switch between levels

The game will have one Achievement:
	Catalyst: Reach the Bottom
---

## Player Mechanics
At no point do I want to player to feel like they have to fight the controls. It will pay to make the system as intuitive as possible.

The player will die in one hit. (Enemies must have predictable patterns that the player can learn. The player should **always** feel like their deaths are due to mistakes on their part and not something unfair the game did.)

# Upgrading
The player will have 4 stages of upgrades available to unlock in any given run.
0. Player starts at this level
1. Major boost to weapon damage. Minor Boost to other stats. Projectiles change shape to something more pointy
2. Major boost to Firerate, absolute stream of bullets at this level. (Flame effect out gun exhaust)
3. Boost to all stats (Flame effect turns into plasma. Projectiles now shine a special color)
4. SliceShot Cooldown removed & Range/Area increased (Show overflowing line of energy along gun tip)

How does the player upgrade? Write down later
Maybe have set upgrades after bosses? So every third level? I don't know


# Default Player Controls:
Allow Player to rebind these from options:
- [Left Click] Fire Gun
- [Right Click] Slice Shot
- [W A S D] Movement
- [Space] Jump
- [Mousewheel UP] Adjust Gun Muzzle
- [Mousewheel DOWN] Adjust Gun Muzzle
- [1 2 3 4] Quick Adjust Gun Muzzle
- [Escape] Return to Main Menu
- [R] Quick Restart (Should also work from death screen)
- [TAB] Toggle HUD Elements

# Gun
{{% notice important %}}
Replace me with weapon concept art
{{% /notice %}}

The distinctive feature of the player's gun will be its ability to adjust its muzzle angle to affect the characteristics of the shots that are fired.
The mousewheel will be used to smoothly transition from narrow and wide fire modes:

When the gun's muzzle is set all the way to either the Narrow or Wide firemode, it should click into place and give the player some ability related to the current mode:
I.E (When the gun is set to full narrow, Holding LeftClick charges a more powerful blast, etc.) (This actually may complicate things too much for the player. Will have to prototype/playtest)

- Narrow:
	- Low FireRate (Short charge/windup before shots)
	- High Damage
	- Perfect Accuracy
	- Very fast projectile speed
- Using the Mousewheel, the player can smoothly transition between the two modes.
- Wide:
	- High FireRate
	- Low Damage
	- Spreadshot Accuracy
	- Slower projectile speed

The projectiles will not be hitscan. Each individual bullet will have velocity and have flight time between the gun to the target.
The projectiles will be colored based on the amount of damage they deal.

# Slice Shots
The relative velocity of the camera should determine the angle of the slice. I.E(If the player is rotating their camera to the right with no vertical movement, the slice should be flat horizontally // If the camera is rotating upwards towards the sky and also to the right, the Sword should swing at a near 45degree angle following that path)

The slice shot is a short-range wide angle hitscan weapon. Most enemies caught in the path of the sword will be cut cleanly and instantly have their hurtbox collisions disabled.

The rings around the end of the gun tip should rotate along with the camera movement to give the player visual feedback on where the slice will go (a very soft motor whirl sound could be cool.)

The Slice Shot will be very strong but it will have some major drawbacks:
1. It will have a short cooldown between shots (Swarms of enemies will still overwhelm the player)
2. The cooldown between shots will prevent the player from firing their gun.
3. Some enemies will be resistant to the instant-kill effect. (I'll have a specific color represent armor and teach player through gameplay that the sword can't attack through it no matter what. Maybe give tougher enemies on later levels bits of armor the player would have to slice around?)


## Enemy List

## Swarmer
The simplest enemy. Loosely flies towards the player at all times. Spawns in large groups and quickly amalgamate into frenzied swarms that fly faster and at tighter angles towards the player.

---

## Tripwire
A post-shaped walking quadruped with a ball top that can connect with other Tripwires to create short barriers the player can either jump over, cut with their sword to remove the immediate obstacle or attack either post directly to destroy the pair.

---

## Missile
A sharp-looking flying creature that hones in on the player at very speed. Should emit a recognizable sound to warn the player they are incoming.

---

## Sniper
Enemy that hangs back floating in the distance. Lobs explosive shots into the arena. The player will need to adjust gun muzzle in order to hit these enemies.

---

## Shield
Large Octogon-shaped enemy that slowly approaches the player with a consistent speed. Has no frenzy ability and has segments of armor that the player can cut around using their Sliceshot

---

## Treasure
Golden mini Catalyst-looking enemy that moves around in an unpredictable pattern. Spawns from the Catalyst after enough damage has been dealt. Defeating it upgrades the player's weapons (May change my mind o this guy later. Weapon upgrades need to have a more elegant process for acquiring)

---

## Snake
Mini Cerberus guy that appears near the edge of the arena, will swipe at players that walk near it. (Needs to have a very recognizable sound for when it spawns. Player getting caught off guard by one of these guys would be unfair)

---

## Enemy Info
Enemy Info

---

## Enemy info
Enemy Info

---

## Enemy info
Enemy Info

---

## Enemy info
Enemy Info

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
**{{< fontcolor color="#1b00e0" >}}Rough Ocean{{< /fontcolor >}}**

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
The player drops into the arena from the previous level and after the player finishes the standard loop of the Catalyst spawning enemies and such. The Catalyst will floats quietly above the edge of the platform. Rumbling sounds are played and Cerberus's body begins to appear from the outskirts in the distance. A few moments later, a large creature with the body of a snake jets up to the left of the Catalyst, then a second on the right, and finally a third one jets up higher than the others directly behind the catalyst and chomps down on it, A vertical slit eyeball pupil appears on the catalyst and then the fight begins

Player Objective:
Attack the Catalyst inside Cerberus's mouth. The creature holding the Catalyst will occasionally back away into the abyss and send out enemies for the player to deal with.
The other 2 Cerberus heads will navigate semi-randomly around the arena and unleash simple attacks, Managing the player's attention between different directions will be the main goal of the fight

---

## Level 4: *Greed*
**{{< fontcolor color="#0c9d0b" >}}Abandoned Jungle Temple{{< /fontcolor >}}**

test
{{% notice important %}}
Replace me with Art Image Gallery
{{% /notice %}}

Another test?? Really?

Trying something out

---

## Level 5: *Anger*
**{{< fontcolor color="#adeef9" >}}Icy Abyss{{< /fontcolor >}}**

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


After the player does a short loop of fighting the Catalyst and defeatign enemies and such. The Catalyst will stop spawning enemies and the music and ambience will fade out. The Catalyst will fly high up into the skybox and create an eclipse-like scenery. It will then spawn in the boss

NEED MORE INFO ON HERETIC HERE

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

phase 1:
Environment info goes here Night Sky / Very stormy

phase 2:
Environment info goes here Night Sky Falling through clouds (Tornado-like with lightning)
Super Large Catalyst spawning smaller versions of itself.

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
