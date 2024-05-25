+++
author = "Logan Core"
title = "Eternal Descent - Technical Design Document"
date = 2024-05-20
last_updated = 2024-05-26
show_comments = false
hide_list_items = true
+++

{{% notice info %}}
Add logo image
{{% /notice %}}

{{% button href="../" color="#ffdf00" font-color="#000000 "%}}Design Document{{% /button %}}
---


## UI / Menu Structure

## Player Controller

## Catalyst / Enemy Spawning

## Level / Scene Transitions

## Demo Recordings
### High-level Overview:
Capture the Player's inputs along with information about the initial game state and play it back overriding the normal player controls witht eh playback from the recorded inputs.

Information that needs to be recorded:
- Player inputs (Move all input logic to physics_process? Ignore delta and everything should be at a fixed-timestep) (Just record the frames of press and release: "W+50 W-24" and the filesizes hopefully shouldn't be too crazy) (Physics won't be deterministic though so I'll need to design game logic around fixed stuff)
- RNG Seed (RNG seed will be derived from current time so record that as well and crosscheck regenerating the seed gives the same value for validation / desync testing)
- Computer TimeDate stamp at beginning and each of each level ()
- Expected Level Stats (If the simulated game doesn't match up with the expected stats, we can assume it desynced.)
- Hidden Cheat Prevention validation stuff (hidden obfuscated stats that can be reviewed if there is a discrepancy)


---



## SteamWorks integration

## Online Leaderboard:
---
---
