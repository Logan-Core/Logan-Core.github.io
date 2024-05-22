+++
author = "Logan Core"
title = "Eternal Descent - Design Document"
date = 2024-05-10
last_updated = 2024-05-21
show_comments = false
hide_list_items = true
+++

{{% notice info %}}
Add logo image
{{% /notice %}}

---

Design everything with intent. Avoid arbitrary decisions

{{< image_gallery images="./test_anim_image.webp" >}}

{{< expand "Quick Navigation" >}}

{{% button href="./#what-is-this-game-about" color="#8B43A9" font-color="#020202 "%}}What is this game about?{{% /button %}}
{{% button href="./#schedule" color="#ffdf00" font-color="#020202 "%}}Schedule{{% /button %}}
{{% button href="./technical_document" color="#1b00e0" font-color="#FFFFFF "%}}Technical Document{{% /button %}}



{{< /expand >}}

## What is this game about?

Eternal Descent is a Single player First-person shooter which tasks the player with a simple goal:

Survive the onslaught of enemies long enough to defeat the [Catalyst](./#the-catalyst) and unlock the path to the next level.

---

The game will be level-based with deaths restarting the player at level 1. Nothing will be carried over between attempts. The player will have the same starting conditions every run and only by playing and gaining experience will they be able to progress further.

The game will be tuned to be more difficult than average and will be designed with quick-restarts in mind. (A full run through the game should take no longer than 20 minutes)

Eternal Descent will feature an online leaderboard where other users can compete for the best times!

---

Enemies will spawn in waves, which the player will need to deal with before the next group spawns. Enemies from previous waves will stay in the arena indefinitely until they are killed. So, if they are not dealt with, the player will quickly find themselves overwhelmed.

Some enemies will also have a "Frenzy" stat that is influenced by the amount of others enemies surrounding them. If enemies start to bunch up and the arena gets crowded. The enemies' "Frenzy" stat will increase and change their behavior making them a more dangerous threat.

---

The Catalyst is a floating orb and serves as the main antagonist of the game. It will float around the outskirts of each level and shoot out portals that new enemies will spawn from.

Once the player deals enough damage to the Catalyst. It will retreat by crashing through the level, leaving a portal for the player to follow.

---

## What do the first few minutes of Eternal Descent look like?:
1. The player launches the game from Steam.
2. A few splashscreens are presented to the player: "Epilepsy warning", "Logan_Core credit", "Created in Godot". (Can be skipped to get into menu faster)
3. Fade transition into main menu.
4. Menu Buttons available to the player:
	- [Play](./#play)
	- [Practice](./#practice) (Should be hidden from player until after they complete tutorial for the first time)
	- [Leaderboard](./#leaderboard)
	- [Options](./#options)
	- Quit
5. Player Selects Play
6. Transition into gameplay, starting the player off in a infinite empty grey void. The Catalyst floats silently above near the player.
7. This is a quick tutorial to show the player the objective. Once the player attacks the Catalyst (There's nothing else to do, The player will eventually try shooting it). The Catalyst will react violently and begin flying around and appear to be taking damage. The Catalyst will eventually fly far enough away to the point where the default mode of the gun can no longer effectively reach it. A Mousewheel icon will appear teaching the player the gun muzzle mechanic. Once the player damages the Catalyst enough, it'll fly above the center of the arena and crash through leaving a portal for the player to follow to level 1.
8. The Score Timer starts and the main gameplay loop begins:
	- The Catalyst floats around the outskirts of the level shooting out portals that enemies will spawn from.
	- The player deals enough damage to the Catalyst, causing it to flee. Opening a portal on the floor that'll expand slowly that the player will eventually have to fall into to reach the next level.
	- This cycle repeats. Each level should take around 2 minutes, with earlier levels offering more chances to finish quickly. (There will be fewer armor moments for the Catalyst and less time spent waiting around for waves and such.) Expert players should be able to speed through the earlier levels to some extent.
	- Boss fights on every third level. Final boss on Level 9.
9. When the player dies. Show stats, basic leaderboard info and lastly show how far down the player made it on the attempt. (It's important to show the Player that there are a finite number of levels. I want the player to understand that there is an ending to play for and that the game isn't an infinite shooter where the only goal is to get a high score.)
10. Prompt the player to restart, return to main menu, or quit.
11. When the player presses the restart button. Start the player midway through the first portal already transitioning into level 1. Skip the intro/tutorial until the next time the game is launched.
---

There will be 10 total levels, each loosely representing a layer of hell from Dante's Inferno.
1. [Limbo](./#level-1-limbo)
2. [Lust](./#level-2-lust)
3. [Gluttony - Cerberus](./#level-3-gluttony---cerberus)
4. [Greed](./#level-4-greed)
5. [Anger](./#level-5-anger)
6. [Heresy - The Heretic](./#level-6-heresy---the-heretic)
7. [Violence](./#level-7-violence)
8. [Fraud](./#level-8-fraud)
9. [Treachery - Catalyst](./#level-9-treachery---catalyst)
10. [Hell - Wall of Flesh](./#level-10-hell---wall-of-flesh)

It should be noted that the game itself won't have a story. All the player needs to know is to just to keep descending down. I'm just planning on borrowing from Dante's Inferno for imagery and inspiration. Astute observers may notice the references but that's about it.

---

# The Catalyst:
The Catalyst appears as a floating white orb that distorts surrounding light and serves as the main antagonist of the game. It will shoot out portals that new enemies will spawn from and must be defeated by the player on each level in order to progress further.

The Catalyst will have some form of armor that'll activate when too many enemies are left alive. This will force the player's attention between fighting the Catalyst and also the enemies it spawns.

After enough damage has been dealt to the Catalyst, it will float high above the center of the arena and begin charging up. After a short time, it will charge down and crash through the level leaving a portal that'll slowly expand out, the player will eventually have no choice but to fall into. This action of crashing through the level and leaving a portal will also release a shockwave killing all enemies left in the arena.

## Scoring
Each level will be infinite and have a repeating enemy spawn pattern that loops every minute or so, getting more difficult as time goes on.

I want to incentivize two different ways of playing the game:
1. Go for the fastest time.
	- Defeating the Catalyst as fast as possible (This will be the expected form of play for most players and the default view on the Leaderboard)
2. Go for the longest time.
	- Levels are infinite and players can choose to stay on a level and ignore the catalyst while they rack up kills and time spent alive.
	Early levels will start by linearly increasing in difficulty while later levels will be more erratic and unforgiving
	I.E (Reaching the 5 minute mark on Level 1 should be very difficult but reaching that same time on Level 8 should be humanly impossible)
	- After the player finishes the game by destroying the Catalyst on Level 9. If the score timer is above a certain threshold, the player will instead be sent to a secret Level 10 where they'll have one final opportunity to stretch out the timer before ultimately dying.

After the Catalysts escapes, the shockwave it creates will erase all remaining enemies and the music and scenery will instantly change to signify to the player that the level is complete. The score timer will pause. At the player's leisure or until the portal expands far enough, the player will fall into the portal and follow the Catalyst to the next level.

---

# GameModes
There will be two gamemodes for the player to choose from:

## Play:
The standard mode that starts the player from the beginning allowing the player to progress to new levels.
## Practice:
Allows the player to start from any of the floors they've previously reached and select starting weapon level.
After the player finishes a level in practice mode, the level transition will reset the player's weapon and drop them into the same level on repeat until they switch back to Play mode.

---

## Options

List all games options. Don't forget epilepsy/accessibility stuff
Don't use words like "epilepsy safe mode", there's gotta be legal issues with that. "Reduced Visual Effects" or something instead

Start listing things here. Cleanup/organize later:
- Viewmodel Bobbing
- Fullscreen
- Resolution
- Mouse Sensitivity (x,y) & lock
- Mouse Inversion
- Sound Effect Volume
- Music Volume
- Reduced Visual Effects
- Player Control Rebinds
- Reset to Default
- FOV
- Viewmodel FOV
- VSync
- Max FPS
- Show FPS
- Gamma
---


## Leaderboard


Each run through the game will also automatically record a demo that can be played back later for leaderboard validation and for review and such.
Because of the length of the game and certain factors that may not be completely deterministic, Each demo will end right when the Catalyst breaches through the level and then a new demo recording will start right when the next level begins. Preventing de-syncs will be vital. I'll need to do some proper research before I start implementing this

I have a few options for the backend:
- Self-hosted (Rent out a VPS ($10 a month) and spin up my own database)
	- Pros:
		- Everything would be self-hosted. Full-control of data.
		- Account validation would be platform agnostic and allow easy release to all store-fronts. (Steam, GoG, etc)
		- I could automate account creation and have it tie to some other form of user validation.
	- Cons:
		- Would likely add months of development time if I implemented this myself. (Big Issue)
		- I have no experience with something like this at a large-scale. Unique issues WILL happen that'd I'd have no choice but to fix.
		- Securing down and setting up a backup system for the Database would fall on me.
		- Maintaining would be more of a involved process.
		- No friend integration with Steam
- SilentWolf (Free Cloud option)
	- Pros:
		- Really good documentation and easy integration with Godot
		- Account validation would be platform agnostic and allow easy release to all store-fronts. (Steam, GoG, etc)
	- Cons:
		- May be technically impossible (Strict data limits. Demo recordings will definitely not fit in the 40KB I have available per user on SilentWolf) (I could potentially reach out to SilentWolf and offer to pay for higher limits?)
		- Would require players to sign-up for a service I have no real control over. SilentWolf could one day get compromised and then Eternal Descent account details getting leaked would be my fault.
		- The service itself may not be around in the future. They could shut down and then I'd have to transfer over the database to another service.
		- Not self-hosted. I can't say 100% I trust these people to have control over the data.
		- No friend integration with Steam
- SteamWorks
	- Pros:
		- Would be semi-easy to implement (Lots of people have done it before and documentation looks simple enough)
		- Having friend integration with Steam would make comparing times easy
		- I can store a stupid amount of data per entry using SteamCloud integration (Demo recordings should only end up being a couple hundred KB. Would have to find some way of keeping track and referencing these SteamCloud files from the leaderboard though.)
	- Cons:
		- Would lock me into the Steam ecosystem and game couldn't be released to other storefronts without a new leaderboard-system.


The game will have one Achievement:
	Catalyst: Reach the Bottom

---

## Player Mechanics
At no point do I want to player to feel like they have to fight the controls. It will pay to make the system as intuitive as possible.

The player will die in one hit. (Enemies must have predictable patterns that the player can learn. The player should **always** feel like their deaths are due to mistakes on their part and not something unfair that the game did.)

# Upgrading

Defeat and absorb the golden "Treasure" enemy that spawns from the Catalyst on 5 specific levels
1. Boost to all Weapon stats. Gun's material goes from dull grey to shiny metal (Level 1)
2. Major boost to weapon damage. Minor Boost to other stats. Projectiles change shape to something more pointy (Level 3)
3. Major boost to Firerate, absolute stream of bullets at this level. (Flame effect out gun exhaust) (Level 5)
4. Boost to all Weapon stats (Flame effect turns into plasma. Projectiles now shine a special color) (Level 7)
5. SliceShot Cooldown removed & Range/Area increased (Show overflowing line of energy along gun tip. Gun becomes golden) (Level 9)


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
{{< image_gallery images="./weapon_001.webp" >}}


The distinctive feature of the player's gun will be its ability to adjust the muzzle angle to affect the characteristics of the shots that are fired.
The mousewheel will be used to smoothly transition from narrow and wide fire modes:

When the gun's muzzle is set all the way to either the Narrow or Wide firemode, it should click into place and give the player some ability related to the current mode:
I.E (When the gun is set to full narrow, the slice shot extends out further, etc.) (This actually may complicate things too much for the player. Will have to prototype/playtest)

- Narrow:
	- Low FireRate
	- High Damage per Bullet
	- Perfect Accuracy
	- Very fast projectile speed
- Using the Mousewheel, the player can smoothly transition between the two modes.
- Wide:
	- High FireRate
	- Low Damage per Bullet
	- Spreadshot Accuracy
	- Slower projectile speed

The projectiles will not be hitscan. Each individual bullet will have velocity and have flight time between the gun to the target.
The projectiles will be colored based on the amount of damage they deal.

# Slice Shots
The slice shot is a short-range wide angle hitscan weapon. Most enemies caught in the path of the slice will be cut cleanly and instantly have their hurtbox collisions disabled.

The relative velocity of the camera should determine the angle of the slice. I.E (If the player is rotating the camera to the right with no vertical motion, the slice should travel flat horizontally from the left to the right // If the camera is rotating up and to right at the same speed, the slice should travel at a 45degree angle following that path)

The two semi-rings around the end of the gun tip should rotate along with the camera movement to give the player visual feedback on where the slice will go (a very soft motor whirl sound could also be cool)

The Slice Shot will be very strong but it will have some major drawbacks:
1. It will have a short cooldown between shots (Swarms of enemies will still overwhelm the player)
2. The cooldown between shots will prevent the player from firing their gun.
3. Some enemies will be resistant to the instant-kill effect. (I'll have a specific color represent armor and teach player through gameplay that the slice can't attack through it no matter what. Maybe give tougher enemies on later levels bits of armor the player would have to slice around?)


## Enemy List
The enemy names don't really matter. They won't be presented to the player in any form. Just need names so I can refer to them when making the game

{{< image_gallery images="./enemy_basic_shapes.webp" >}}

## Swarmer
The simplest enemy. Loosely flies towards the player at all times. Spawns in large groups which will often cause the Catalyst to activate armor and due to the large amount that spawn at once, Swarmers will quickly amalgamate into frenzied swarms that fly faster and at tighter angles towards the player.

---

## Tripwire
A post-shaped walking quadruped with a ball top that can connect with other Tripwires to create short barriers the player can either jump over, cut with their Sliceshot to remove the immediate obstacle or attack either Tripwire post directly to destroy the pair.

---

## Missile
A "sharp-looking" flying creature that hones in on the player at very fast speeds. Should emit a recognizable sound to warn the player they are incoming.

---

## Sniper
Enemy that hangs back floating in the distance. Lobs explosive shots into the arena. The player will need to adjust gun muzzle in order to hit these enemies.

---

## Shield
Large Octagon-shaped enemy that slowly approaches the player with a consistent speed. Has no frenzy ability and has segments of armor that the player can cut around using their Sliceshot

---

## Treasure
Golden mini Catalyst-looking enemy that moves around in a unpredictable pattern. Spawns from the Catalyst on specific levels after enough damage has been dealt (50%). Defeating it upgrades the player's weapons (May change my mind on this guy later. Weapon upgrades are important and the process to acquire them may need to be more special)

---

## Snake
Mini Cerberus guy that appears near the edge of the arena, will swipe at players that walk near it. (Needs to have a very recognizable sound for when it spawns. Player getting caught off guard by one of these guys would be unfair)

---

## Spawner Portal
The portals the Catalyst shoot out around the arena. The portals will remain and will spawn in a small wave of enemies every 15ish seconds.

---

## Roamer
Does not have any knowledge of the player. Floats low to the ground and roams the arena in a random fashion.

---

## Sponge
Enemy that absorbs shots likes a magnet and can be effectively killed by switching to wide muzzle mode and filling them up until they burst. Completely armored, no sliceshot

---

## Enemy info
Enemy Info

---




## Levels
## Level 1: *Limbo*
**{{< fontcolor color="#69AFDE" >}}Blue Cloudy Sky{{< /fontcolor >}}**
Picturesque blue sky with large mountain-like clouds in all directions.
Have a hint of the sun poking out somewhere high in the sky with painted light shafts over clouds

Environment Modifier: None

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}



The first level in the game has a very important role to fill. The player will spend MOST of the time here.

Most players will be expected to reset hundreds of times in order to gain the skills and experience needed to complete a full run through the game. By the end, players that stick to it will definitely become so familiar with this level they could pretty much do it blindfolded.

More so than later levels, Level 1 needs to have near-perfect "invisible" appeal. Something that draws the player in and help alleviate the pain of having lost their previous attempt. The ability to "master" a level and breeze through it would be a good fit here. Many of the specific qualities I'm looking for will be difficult to write down but either way, out of every level in the game, this one will be under the most scrutiny and have the most revisions for sure.

- Enemies
	- Swarmer
	- Missile
	- Roamer
	- Treasure


## Level 2: *Lust*
**{{< fontcolor color="#1b00e0" >}}Rough Ocean{{< /fontcolor >}}**
Ocean environment with the arena floating slightly above the water.
The ocean should continue off into the horizon in all directions and maybe have the weather change dynamically from sunny to stormy partway through the level?

Environment Modifier: Lightning


{{< image_gallery images="./level_2_002.webp,./level_2_001.webp,./level_2_003.webp,./level_2_004.webp" >}}

- Enemies
	- Swarmer
	- Missile
	- Sniper
	- Roamer
	- Sponge

---

## Level 3: *Gluttony - Cerberus*
**{{< fontcolor color="#83855f" >}}Large Cave{{< /fontcolor >}}**
A cave expanse so large the walls can barely be seen through distant fog. with giant stalactites/rock columns obscuring vision closer to the arena.

Environment Modifier: Uneven Terrain


{{< image_gallery images="./level_3_001.webp,./level_3_002.webp" >}}

- Enemies
	- Swarmer
	- Missile
	- Sniper
	- Treasure
	- Roamer
	- Sponge

## **Cerberus**
{{< image_gallery images="./cerberus_test_anim_001.webp" >}}

There are certain rules that are typically followed for the "first boss" in an action video game. It is not untypical for the first boss to be treated as a glorified tutorial, however, that need not be the case for this guy. I want Cerberus to 100% be the first major wall the player has to overcome.

Intro:
The player drops into the arena from the previous level and after the player finishes the standard loop of the Catalyst spawning enemies and such. The Catalyst will floats quietly above the edge of the arena. Rumbling sounds are played and Cerberus's body which has already been visible off in the distance will begin to move. A few moments later, a large creature with the body of a snake jets up to the left of the Catalyst, then a second on the right, and finally a third one jets up higher than the others directly behind the catalyst and chomps down on it, A vertical slit eyeball pupil appears on the catalyst and then the fight begins

Player Objective:
Attack the Catalyst inside Cerberus's mouth. The creature holding the Catalyst will occasionally back away into the abyss and send out enemies for the player to deal with.
The other 2 Cerberus heads will navigate semi-randomly around the arena and unleash simple attacks, Managing the player's attention in all different directions will be the main source of difficulty in this fight.

- Attack Patterns:
	- Rapid Fire enemy spawn portals
	- Either of the two side heads can crash down near the edge of the arena.
	- Need more. Write stuff down later

---

## Level 4: *Greed*
**{{< fontcolor color="#0c9d0b" >}}Abandoned Jungle Temple{{< /fontcolor >}}**
Surrounded by exotic jungle in all directions. The arena takes on the apperence of a Jungle Temple with a grid pattern on the floor with spike traps scattered around that the player will have to avoid

Environment Modifier: Floor Spike Traps

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}

- Enemies
	- Swarmer
	- Tripwire
	- Missile
	- Snake
	- Roamer
	- Sponge

---

## Level 5: *Anger*
**{{< fontcolor color="#adeef9" >}}Icy Abyss{{< /fontcolor >}}**
Another cave system similar to Level 3. Bright warm orange lights off in the distance but have the immediate terrain around the player be bleak and unforgiving. Giant ice crystals everywhere.

Environment Modifier: Broken up arena. Player will have to jump between sections or risk falling

{{< image_gallery images="./level_5_001.webp,./level_5_002.webp" >}}

- Enemies
	- Swarmer
	- Missile
	- Sniper
	- Shield
	- Treasure
	- Roamer
	- Sponge

---

## Level 6: *Heresy - The Heretic*
**{{< fontcolor color="#715e5c" >}}Eclipse{{< /fontcolor >}}**
Desolate wasteland covered in ash. have distant silhouettes of manmade structures. The arena will be extra large to account for the boss fight and shift to a even more bleak Eclipse like environment when the boss spawns and also have fog roll in obscuring the edges of the arena.

Environment Modifier: Extra Large Arena

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}


After the player does a short loop of fighting the Catalyst and defeating enemies and such. The Catalyst will stop spawning enemies and the music and ambience will fade out. The Catalyst will fly high up into the skybox and create a eclipse-like scenery (Recreate environment from DarkSouls 3's Lord of Cinder fight). The Heretic boss will then spawn out of the Catalyst

- Enemies
	- Swarmer
	- Tripwire
	- Missile
	- Sniper
	- Shield
	- Snake
	- Roamer
	- Sponge

## **The Heretic**

{{< image_gallery images="./heretic_001.webp,./heretic_002.webp,./heretic_003.webp,heretic_004.webp" >}}

The Heretic is a human-like creature held together by rough looking metal components. Hovers over the arena using a jetpack mounted when his legs would be.
Both his guns have the same appearance as the players' and the Heretic's moveset will have similarities with what the player can do: (Different fire modes, sliceshots, etc)

- Attack Patterns:
	- Points both guns straight up into the sky, both guns switch to wide firemode and then unleashes a barrage of bullets that track to the player's position at the time of the shot
	- Throws out sliceshots that have tangible form that fall behind the fog of the arena and then cut through the center across
	- Narrow sniper shot, his laser sight will track the player for a moment and stop right before he shoots off a shot
	- Holds both guns together directly towards the player. Rings connect and begins charging a big explosion attack. Strong homing on player, give the projectile clear "You gotta sliceshot this" features. (I'll need to teach player using the Shield enemy a specific thing to associate with SliceShots and use it on his attack here.) After the player slices the shot, it'll bounce back towards the Heretic and stun him. Allowing the player to damage them

On the last big shot the Heretic uses, instead of taking the hit and getting stunned, he will instead cut the blast in half with the two halves flying off into the distance and then fly down into the arena at the player's level. His shields will go down for the remainder of the fight and the player will have to finish him quickly while fighting close quarters.


---

## Level 7: *Violence*
**{{< fontcolor color="#f42514" >}}Volcano Hellscape{{< /fontcolor >}}**

Environment info goes here

Environment Modifier: Explosive Rocks

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}

- Enemies
	- Swarmer
	- Tripwire
	- Missile
	- Sniper
	- Shield
	- Treasure
	- Snake
	- Roamer
	- Sponge

## Level 8: *Fraud*
**{{< fontcolor color="#ffffff" >}}Space, Stars, and Galaxies{{< /fontcolor >}}**

Environment info goes here

Environment Modifier: None

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}

- Enemies
	- Swarmer
	- Tripwire
	- Missile
	- Sniper
	- Shield
	- Snake
	- Roamer
	- Sponge

## Level 9: *Treachery - Catalyst*
**{{< fontcolor color="#5a5a5a" >}}Night Stormy Sky{{< /fontcolor >}}**

phase 1:
Environment info goes here Night Sky / Very stormy

Environment Modifier: Lightning

phase 2:
Environment info goes here Night Sky Falling through clouds (Tornado-like with lightning)
Super Large Catalyst spawning smaller versions of itself.

If the score timer is above a certain amount after the Catalyst has been destroyed and we can determine the player is going for a "Time Spent Alive" highscore, the Catalyst will open up one last portal that will send the player to Level 10. otherwise, play the ending cinematic and show the player's stats. Update Main menu as a reward

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}

- Enemies
	- Swarmer
	- Tripwire
	- Missile
	- Sniper
	- Shield
	- Treasure
	- Snake
	- Roamer
	- Sponge

---

## Level 10: *Hell - Wall of Flesh*
**{{< fontcolor color="#FF0000" >}}Hell{{< /fontcolor >}}**

A special final level that is only accessible if the player is making a attempt for the "Time Spent Alive" leaderboard. (Players who are going at normal speed through game will instead get the ending after killing the Catalyst and won't be sent here.)
This will be a infinite gauntlet where the enemies no longer spawn from portals but appear from the surrounding environment. This is the last opportunity for the player to stretch out the score timer for higher placement on the "Time Spent Alive" leaderboard.

{{< image_gallery images="./level_1_001.webp,./level_1_002.webp,./level_1_003.webp" >}}

- Enemies
	- Swarmer
	- Tripwire
	- Missile
	- Sniper
	- Shield
	- Treasure
	- Snake
	- Roamer
	- Sponge

---
---
---
## Schedule
Don't forget to record timelapse footage for Archive!

{{% notice note %}}
Estimated Project Completion:
███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 3%
{{% /notice %}}

## Week 1 2024-05-13:
- [x] First Draft of Design Document
- [x] Initialize Godot project / Git repo
---
## Week 2 2024-05-20:
- [ ] Add Placeholder Template Artwork (Follow SteamWork Guidelines. Everything needs to be at specific resolutions)
- [ ] Bring somebody up to speed and sanity check documentation together
- [ ] Start writing out Technical Design Document
---
## Week 3 2024-05-27:
- [ ] Begin modeling Environments and get a idea for modeling time estimation (Add Environment modeling into schedule after you get estimate)
- [ ] Research Similar Games (Revise Design Documentation)
- [ ] Finalize Enemy Designs
- [ ] Begin structuring Godot project (add in boilerplate stuff I'll definitely need)
- [ ] Technical Design Document at least 50% complete
---
## Week 4 2024-06-03:
- [ ] Build entity benchmark prototype and see if Godot can support thousands of bullets/enemies on screen without object pooling or compute shaders.
- [ ] Non-boss Enemy Models Blocked out
- [ ] Experiment with logo designs. (Market research and see what people think)
- [ ] Initial Technical Design Document Draft Finished
---
## Week 5 2024-06-10:
- [ ] Non-boss Enemy Models Detailed and Textured
- [ ] Game Logo finished
- [ ] Technical Design Document Finished. (Leave nothing out, check everything top to bottom and then just follow the pseudocode)
---
## Week 6 2024-06-17:
- [ ] Remake Schedule with more accurate time estimates ( Every 6 Weeks )
- [ ] Start implementing player-movement-controller
---
## Week 7 2024-06-24:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 8 2024-07-01:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 9 2024-07-08:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 10 2024-07-15:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 11 2024-07-22:
- [ ] Entry Goes Here
- [ ] Entry Goes Here 2
- [ ] Entry Goes Here 3
---
## Week 12 2024-07-29:
- [ ] Remake Schedule with more accurate time estimates ( Every 6 Weeks )
- [ ] Make Discord Server + Start Planning Marketing Strategy
---

---
