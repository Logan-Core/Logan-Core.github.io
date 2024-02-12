# Archer Paradox

## A game by logan_core and helloimbenjamin

## Quick Navigation

- [Overview](#overview)
- [Player Controller](#player-controller)
- [Level Manager](#level-manager)

## Overview

Archer Paradox is an online PvP arena platformer game inspired by the game [TowerFall](https://store.steampowered.com/app/251470/TowerFall_Ascension/)

Each player is equipped with only a bow that can fire magic arrows that the player can swap positions with for navigating around the map and catching opponents off guard.

The goal of the game is hit your opponent first either by hitting them with an arrow directly or by landing on their head. The round then restarts until a point threshold is reached. The game then restarts on a new map

A large collection of arenas will be designed and created by us and at the beginning of the game, the full list of levels will be randomized and then played in order until reaching the end where it then repeats

---

## Player Controller

- [Jumping](#jumping)

- [Double Jumping](#double-jumping)

- [Cut Jump](#cut-jump)

- [Wall Sliding](#wall-sliding)

- [Charging Bow](#charging-bow)

- [Release Bow](#release-bow)

- [Teleport](#teleport)

#### Jumping

> The direct jump action should only ever be available while the player is in direct contact with the ground (Jump with 100% jump power)

#### Double Jumping

> Done when the player attempts jumping while in the in the air or colliding with the wall. (Jump with small height penalty)

#### Cut Jump

> If the player releases the jump button while in the air, check if vertical velocity is above a threshold and hard-set vertical velocity to a predefined value

#### Wall Sliding

> Slow down the player's descent if they hold the movement key into a wall while in the air state. Releasing the key should causing the player to resume falling at normal rate in the air state.

#### Charging Bow

> If the mouse button is being held, 

#### Release Bow

#### Teleport

---

## Level Manager

The LevelManager node contains all the logic for preparing levels in-between loading transitions

- [start_game()](#start_game)

- [randomize_arena_list()](#randomize_arena_list)

- [load_next_level()](#load_next_level)

- [remove_levels_from_tree()](#remove-levels-from-tree)



## start_game()

test1

## randomize_arena_list()

test2

## load_next_level

test3
























