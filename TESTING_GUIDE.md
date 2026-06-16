# Tensura Reworks - Testing Guide

## Quick Start

All test commands are executed by typing `!command_name` in the chat.

## Magicule System Testing

### Basic Commands

```
!addmagicules [amount]        # Add magicules (default: 5000)
!magiculeStatus               # Display current magicule stats
!resetmagicules               # Reset magicules to 0
!setmagicules [amount]        # Set magicules to specific value
!forceevolution               # Trigger evolution manually
```

### Testing Scenarios

**Test 1: Basic Absorption**
```
!magiculeStatus
!addmagicules 1000
!magiculeStatus
```

**Test 2: Evolution Threshold**
```
!resetmagicules
!setmagicules 9500
!magiculeStatus
!addmagicules 600      # Should trigger evolution at 10,000
```

**Test 3: Capacity Scaling**
```
!forceevolution
!forceevolution
!magiculeStatus
```

## Aura System Testing

### Basic Commands

```
!setpassiveaura [level]       # Set passive aura level
!activateauracontrol          # Suppress passive aura
!deactivateauracontrol        # Release passive aura
!activatedemondlordhaki [lv]  # Activate Demon Lord Haki
!deactivatedemondlordhaki     # Deactivate Demon Lord Haki
!wrapaura [amount]            # Wrap aura for combat boost
!aurastatus                   # Display aura statistics
```

### Testing Scenarios

**Test 1: Passive Aura Leakage**
```
!setpassiveaura 75
!aurastatus
```
Expected: Nearby mobs should experience slowness effect

**Test 2: Aura Control (Suppression)**
```
!setpassiveaura 100
!aurastatus
!activateauracontrol
!aurastatus              # Should show aura level = 0
!deactivateauracontrol
!aurastatus              # Aura resumes
```

**Test 3: Demon Lord Haki**
```
!activatedemondlordhaki 200
```
Expected: Glowing effect, particle effects, extreme aura pressure

**Test 4: Combat Enhancement**
```
!wrapaura 300
```
Expected: Resistance and Strength effects applied

## EP System Testing

### Basic Commands

```
!epstatus                           # Show current EP and breakdown
!setep [amount]                     # Initialize EP to value
!epscale                            # Display classification tiers
!checkdeceptive [ep1] [ep2] [s1] [s2]  # Analyze matchup
```

### Testing Scenarios

**Test 1: View Classification Scale**
```
!epscale
```

**Test 2: Human Baseline**
```
!setep 50
!epstatus
```
Expected Level: Normal Human

**Test 3: Special A-Grade**
```
!setep 100000
!epstatus
```
Expected Level: Special A-Grade

**Test 4: Unawakened Demon Lord**
```
!setep 300000
!epstatus
```
Expected Level: Unawakened Demon Lord

**Test 5: Awakened Demon Lord**
```
!setep 600000
!epstatus
```
Expected Level: Awakened Demon Lord

**Test 6: Deceptive Matchup Analysis**
```
!checkdeceptive 150000 150000 10 5
```
Expected: Deceptive matchup = YES (equal EP but 2x better skills)

```
!checkdeceptive 150000 200000 5 5
```
Expected: Deceptive matchup = NO (higher EP advantage)

## Advanced Testing

### Full System Integration Test

Test the three systems working together:

```
!resetmagicules
!setmagicules 50000
!magiculeStatus
!setpassiveaura 100
!aurastatus
!epstatus                # Should recalculate EP with current magicules/aura
```

### Evolution Chain Test

```
!resetmagicules
!setmagicules 9999
!addmagicules 2         # Triggers evolution
!forceevolution         # Second evolution
!forceevolution         # Third evolution
!magiculeStatus         # Compare maximum capacities
```

### Combat Simulation

```
!setep 150000
!setpassiveaura 75
!wrapaura 250
!activatedemondlordhaki 180
!epstatus
!aurastatus
```

## Command Reference

### Magicule Commands
| Command | Effect | Default |
|---------|--------|----------|
| !addmagicules | Add amount | 5000 |
| !setmagicules | Set to value | 0 |
| !magiculeStatus | Display stats | N/A |
| !resetmagicules | Set to 0 | N/A |
| !forceevolution | Trigger evolution | N/A |

### Aura Commands
| Command | Effect | Default |
|---------|--------|----------|
| !setpassiveaura | Set aura level | 50 |
| !activateauracontrol | Suppress aura | N/A |
| !deactivateauracontrol | Resume aura | N/A |
| !activatedemondlordhaki | Haki power | 150 |
| !deactivatedemondlordhaki | Disable Haki | N/A |
| !wrapaura | Combat boost | 200 |
| !aurastatus | Display stats | N/A |

### EP Commands
| Command | Effect | Default |
|---------|--------|----------|
| !setep | Set EP value | 100 |
| !epstatus | Display stats | N/A |
| !epscale | Show tiers | N/A |
| !checkdeceptive | Analyze matchup | N/A |

## Troubleshooting

**Issue: Commands not working**
- Make sure you're in a world with the addon enabled
- Use lowercase command names
- Check format: `!command` not `/command`

**Issue: No effects visible**
- Effects may take a tick to register
- Try `!aurastatus` to verify state changes
- Look for particles around the player

**Issue: EP not updating**
- EP recalculates each tick
- Try `!epstatus` multiple times
- Check if player has equipment for Spiritron value

## Expected Behaviors

### Magicule Absorption
- Passive absorption: ~0.2 magicules/tick
- Evolution effect: Strength II, Speed I, Health Boost for 10 seconds
- Capacity increase: 50% per evolution

### Aura Radiation
- Passive aura builds naturally (~0.1/tick if uncontrolled)
- Max passive aura: 100
- Damage radius: aura_level / 10 blocks
- Slowness effect at level 50+
- Mining Fatigue at level 200+

### EP Calculation
- Formula: (Magicules × 0.5) + (Physical × 2) + (Spiritron × 1.5)
- Updates every tick
- 7-tier classification system
- Deceptive matchups identified when skill gap > EP gap

## Next Steps

After testing, consider:
- Adding custom textures for HUDs
- Implementing dungeon difficulty scaling
- Creating boss encounters with high EP
- Adding skill trees and ultimate abilities
- Implementing world events based on system power levels
