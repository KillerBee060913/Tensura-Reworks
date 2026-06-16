# Tensura Reworks - Setup & Usage Guide

## Quick Start

### Installation Steps
1. Download the repository as a ZIP file
2. Extract the files
3. Open Minecraft Pocket Edition
4. Go to **Settings → Packs**
5. Select **Add Packs** → **Add External Packs**
6. Navigate to and select:
   - `behavior_pack` folder
   - `resource_pack` folder
7. Create a **New World** and activate both packs

## System Overview

### 1. Magicule System
**Purpose**: Core energy resource for spellcasting and abilities

- **Starting Value**: 100 Magicule
- **Maximum**: 500 Magicule
- **Regeneration Rate**: 2 per tick
- **Usage**: Required for most skills

### 2. Aura System
**Purpose**: Defensive power and special ability modifier

- **Starting Value**: 50 Aura
- **Maximum**: 200 Aura
- **Regeneration Rate**: 2 per tick
- **Usage**: Regeneration skill, defensive capabilities

### 3. EP (Energy Points) System
**Purpose**: Quick-cast cooldown resource

- **Starting Value**: 200 EP
- **Maximum**: 500 EP
- **Regeneration Rate**: 3 per tick
- **Usage**: All skills require EP

## Skills Reference

### Skill 1: Slime Strike
- **Type**: Offensive
- **Cost**: 30 EP + 20 Magicule
- **Effect**: 
  - Grants Strength II for 5 seconds
  - Grants Speed I for 3 seconds
  - Damages nearby hostile mobs (8 block radius, 12 damage)
  - Creates slime particle effect

### Skill 2: Predation
- **Type**: Utility/Offensive
- **Cost**: 50 EP + 40 Magicule
- **Effect**:
  - Consumes nearby mobs (10 block radius)
  - Grants 80 Magicule
  - Grants 30 Aura
  - Creates portal particle effect

### Skill 3: Regeneration
- **Type**: Defensive
- **Cost**: 40 EP + 30 Aura
- **Effect**:
  - Grants Regeneration III for 8 seconds
  - Grants Resistance I for 5 seconds
  - Heals 8 health points
  - Creates heart particle effect

### Skill 4: Mimicry
- **Type**: Defensive
- **Cost**: 35 EP + 25 Magicule
- **Effect**:
  - Grants Absorption II for 10 seconds
  - Grants Resistance for 10 seconds
  - Equips full Diamond Armor
  - Creates water splash particle effect

### Skill 5: Thought Acceleration
- **Type**: Utility
- **Cost**: 45 EP + 35 Magicule
- **Effect**:
  - Grants Speed IV for 12 seconds
  - Grants Haste II for 12 seconds
  - Grants Jump Boost II for 12 seconds
  - Creates water wake particle effect

## How to Activate Skills

**Command Format** (in-game command):
```
/function tensura-reworks:skills/skill_X_name
```

**Examples**:
- Slime Strike: `/function tensura-reworks:skills/skill_1_slime_strike`
- Predation: `/function tensura-reworks:skills/skill_2_predation`
- Regeneration: `/function tensura-reworks:skills/skill_3_regeneration`
- Mimicry: `/function tensura-reworks:skills/skill_4_mimicry`
- Thought Acceleration: `/function tensura-reworks:skills/skill_5_thought_acceleration`

## Check Your Status

To check your current resource levels:
```
/scoreboard objectives list
```

To view your specific values:
```
/scoreboard players list @s
```

## Troubleshooting

### Resources not regenerating?
- Make sure the main loop is running: `/function tensura-reworks:loop/main_loop`
- Verify scoreboards are created: `/scoreboard objectives list`

### Skills not working?
- Check that you have sufficient resources
- Verify the function path is correct
- Ensure the behavior pack is enabled

### Can't see particle effects?
- Check graphics settings (particles should be enabled)
- Verify you're close enough to the effect (within 32 blocks)

## Customization

### Adjust Resource Values
Edit `/behavior_pack/functions/*/init.mcfunction` files to change:
- Starting amounts
- Maximum values
- Regeneration rates

### Modify Skill Costs
Edit individual skill files in `/behavior_pack/functions/skills/` to adjust:
- EP costs
- Resource costs
- Durations
- Effect intensities

### Change Visual Effects
Modify particle types in skill cast functions:
- Replace `minecraft:slime_particle` with other particle types
- Adjust particle spawn locations and counts

## Commands for Testing

```
# Initialize systems
/function tensura-reworks:init

# Add resources to player
/scoreboard players set @s magicule 500
/scoreboard players set @s aura 200
/scoreboard players set @s ep 500

# Reset resources
/scoreboard players set @s magicule 0
/scoreboard players set @s aura 0
/scoreboard players set @s ep 0
```

## Version Information
- **Addon Version**: 1.26.30
- **Minecraft Version**: Pocket Edition
- **Format Version**: 2

## Support
For issues or suggestions, please open an issue on the GitHub repository.
