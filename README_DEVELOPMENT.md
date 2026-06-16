# Tensura Reworks - Development Guide

## Project Structure

```
tensura-reworks/
├── behavior_pack/
│   ├── manifest.json
│   └── scripts/
│       ├── main.js
│       ├── systems/
│       │   ├── magicule.js     # Magicule absorption & evolution system
│       │   ├── aura.js         # Aura radiation & control system
│       │   └── ep.js           # Existence Points calculation system
│       └── ui/
│           └── hud_manager.js  # HUD display manager
├── resource_pack/
│   ├── manifest.json
│   └── ui/
│       ├── hud/
│       │   ├── magicule_hud.json  # Magicule HUD display
│       │   ├── aura_hud.json      # Aura HUD display
│       │   ├── ep_hud.json        # EP HUD display
│       │   └── loading_screen.json # Custom loading screen
│       └── [textures & animations]
└── README_DEVELOPMENT.md
```

## System Specifications

### 1. Magicule System
- **Environmental Fuel**: Magicules permeate the atmosphere as invisible magical particles
- **Monster Nutrition**: Monsters absorb magicules instead of eating food
- **Evolution Trigger**: When a monster absorbs 10,000 magicules, it undergoes forced evolution
- **Absorption Rate**: 2 magicules per tick (adjustable in `magicule.js`)

**Key Features:**
- Passive absorption from atmosphere
- Storage capacity increases with evolution
- Triggered evolution grants temporary stat boosts

### 2. Aura System
- **Passive Aura**: Constantly leaks energy unless suppressed with Aura Control
- **Active Aura**: Weaponized energy used in combat
- **Demon Lord Haki**: High-tier aura form (200+ level)
- **Combat Enhancement**: Wrapped aura increases defense and damage

**Key Features:**
- Aura Control skill suppresses passive leakage
- Passive aura damages/terrifies nearby entities based on level
- Demon Lord Haki warps space and paralyzes enemies
- Combat wrapping applies temporary effect boosts

### 3. EP (Existence Points) System
- **Baseline Scale**:
  - Normal Human: < 100 EP
  - Special A-Grade: ~100,000 EP
  - Unawakened Demon Lord: ~200,000 EP
  - Awakened True Demon Lord: 400,000+ EP

**EP Calculation:**
```
EP = (Magicules × 0.5) + (Physical Strength × 2) + (Spiritron Equipment × 1.5)
```

**Key Features:**
- Combines magicules, physical stats, and equipment
- EP is misleading - high EP ≠ guaranteed victory
- Lower EP with better skills/abilities can defeat higher EP opponents

## Custom HUDs

### Magicule HUD
- Progress bar showing current/max magicules
- Evolution countdown if approaching threshold
- Absorption rate indicator

### Aura HUD
- Passive aura level
- Active aura amount
- Aura Control status
- Demon Lord Haki indicator

### EP HUD
- Total EP value
- Classification level
- Component breakdown (Magicule, Physical, Spiritron)
- Combat power rating

### Loading Screen
- Custom Tensura-themed background
- Loading progress bar
- System initialization text
- Version display

## Development Notes

- **Min Engine Version**: 1.26.30
- **Addon Version**: 0.0.1
- **Script Type**: JavaScript (Minecraft Scripting API)
- All systems are interconnected and update each tick

## Next Steps

- [ ] Add custom textures for loading screen
- [ ] Implement particle effects for aura
- [ ] Add sound effects for evolutions
- [ ] Create command system for testing
- [ ] Add player progression tracking
- [ ] Implement mob classification system
- [ ] Add skill trees for Aura Control and other abilities
- [ ] Create difficulty scaling based on EP levels
