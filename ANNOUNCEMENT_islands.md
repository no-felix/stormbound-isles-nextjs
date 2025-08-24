# Stormbound Isles — Islands overview (code-backed)

This document summarizes how islands are represented and behave in the codebase. All statements below are taken directly from the project's source and runtime data files (file paths are given for reference).

## Key facts

- Data model: islands are objects with id, type, optional zone, optional teamName, and optional spawn coordinates (spawnY == -1 means "undefined"). (See `src/main/java/de/nofelix/stormboundisles/data/Island.java`)
- Persistence: islands are stored in `world/stormboundisles/islands.json` (loaded/saved by `DataManager`). (See `src/main/java/de/nofelix/stormboundisles/data/DataManager.java`)

## Island types and in‑island buffs

The project defines four island types (`IslandType`):

- PYROTHAR
- FROSTREIGN
- SAHRAKIR
- AURALIS

Buff auras (applied periodically while a player stands inside their team's island zone):

- SAHRAKIR → Speed (`StatusEffects.SPEED`)
- PYROTHAR → Fire Resistance (`StatusEffects.FIRE_RESISTANCE`)
- FROSTREIGN → Resistance (`StatusEffects.RESISTANCE`)
- AURALIS → Regeneration (`StatusEffects.REGENERATION`)

Buffs are applied by `BuffAuraHandler` and use configurable intervals and durations from `ConfigManager`. (See `src/main/java/de/nofelix/stormboundisles/handler/BuffAuraHandler.java`)

## Disasters (type → possible disasters)

Disasters are selected based on island type. Mapping in code:

- PYROTHAR → METEOR, FIRE_SHOWER
- FROSTREIGN → BLIZZARD, ICE_SPIKES
- SAHRAKIR → SANDSTORM, MIRAGE
- AURALIS → SPORE, CRYSTAL_STORM

Disasters are triggered via `DisasterManager`; they broadcast alerts and apply effects to players inside the affected island zone. The manager prevents duplicate active disasters on the same island and tracks expiration. (See `src/main/java/de/nofelix/stormboundisles/disaster/DisasterManager.java`)

## Spawns, teleports and safe‑teleport logic

- Islands may define a custom spawn point (spawnX, spawnY, spawnZ). spawnY < 0 (-1 sentinel) means no custom spawn is defined. (`Island.hasSpawnPoint()`) (See `data/Island.java`)
- On game start, players are teleported to their team's island spawn (GameManager). If a custom spawn exists, `getRandomSpawnPosition` tries up to 10 random clear positions near the spawn and falls back to the exact spawn. If no spawn is defined, teleportation is skipped and logged. (See `src/main/java/de/nofelix/stormboundisles/game/GameManager.java`)
- Safe-teleport checks ensure the destination block is air, the block above is air, and the block below is solid and not liquid. (See `PlayerEventHandler.isSafeTeleport` and `GameManager.isAreaClear`.)

## Build-phase boundary enforcement, deaths and scoring

- While the game phase is BUILD, `PlayerEventHandler` enforces island boundaries: players who leave their island zone receive a warning and are pushed/teleported back toward the island spawn using configurable push parameters. Warnings are rate-limited per player. (See `src/main/java/de/nofelix/stormboundisles/handler/PlayerEventHandler.java`)
- On death (BUILD or PVP phase) the victim's team loses configured points and the killer's team may gain a kill reward if from a different island/team. If in BUILD and the island has a defined spawn, victims are revived and teleported back to their island spawn. (See `PlayerEventHandler.handlePlayerDeath`.)

## Example island definitions (runtime)

The run directory contains a sample `islands.json` with four islands (all have spawnY = -1 in the shipped run data): `sahrakir`, `auralis`, `frostreign`, `pyrothar`. Each entry includes id, type, teamName and spawn coords. (See `runClient/stormboundisles/islands.json`)

## Files to reference in documentation

- `src/main/java/de/nofelix/stormboundisles/data/Island.java` — model and spawn semantics
- `src/main/java/de/nofelix/stormboundisles/data/IslandType.java` — type enum
- `src/main/java/de/nofelix/stormboundisles/data/DataManager.java` — persistence (islands.json)
- `src/main/java/de/nofelix/stormboundisles/handler/BuffAuraHandler.java` — buff application & mapping
- `src/main/java/de/nofelix/stormboundisles/disaster/DisasterManager.java` — disaster mappings & effects
- `src/main/java/de/nofelix/stormboundisles/handler/PlayerEventHandler.java` — boundary enforcement, death handling
- `src/main/java/de/nofelix/stormboundisles/game/GameManager.java` — teleport/spawn search logic
- `runClient/stormboundisles/islands.json` — example island data shipped with run directory

## Quick copy suggestions for a website

- Short island type blurbs (example):
  - "Pyrothar — a volcanic isle. Players on their island gain Fire Resistance; meteors and fiery showers may strike during disasters." (source: `BuffAuraHandler.java`, `DisasterManager.java`)
  - "Frostreign — an icy isle. Players on their island receive Resistance; blizzards and ice spikes are the island's dangers." (source: code files above)

Use the file references above if you want exact wording or to display the in-game status effect names.

---

_All information in this document is taken directly from the project source and runtime files listed above._
