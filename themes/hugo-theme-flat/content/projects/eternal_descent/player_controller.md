+++
author = "Logan Core"
title = "Player Controller / Mechanics"
date = 2024-05-12
show_comments = false
+++

[Go Back](../#player-mechanics)

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
