# Thought Acceleration Cast Function
# Increase speed and reflexes

# Deduct resources
scoreboard players remove @s ep 45
scoreboard players remove @s magicule 35

# Apply speed and haste effects
effect @s speed 12 4
effect @s haste 12 2
effect @s jump_boost 12 2

# ===== ENHANCED PARTICLE EFFECTS =====
# Intense water wake particles
particle minecraft:water_wake_particle ~ ~1 ~ 2.5 2.5 2.5 1 40

# Speed-line effect (endrod particles)
particle minecraft:endrod ~ ~0.8 ~ 1.8 1.8 1.8 0.8 28

# Fast-moving sparkles (enchanting table particles)
particle minecraft:enchanting_table_particle ~ ~1.2 ~ 2 2 2 0.9 32

# Electric/lightning effect (crit emitter)
particle minecraft:crit_emitter ~ ~1 ~ 1.5 1.5 1.5 0.7 20

# Orange/yellow acceleration glow
particle minecraft:dripping_lava ~ ~0.5 ~ 1.2 1.5 1.2 0.5 18

# Velocity trail effect - multiple spirals
execute positioned ~1 ~0 ~0 run particle minecraft:endrod ~ ~1 ~ 0.5 1 0.5 0.6 10
execute positioned ~-1 ~0 ~0 run particle minecraft:endrod ~ ~1 ~ 0.5 1 0.5 0.6 10
execute positioned ~0 ~0 ~1 run particle minecraft:endrod ~ ~1 ~ 0.5 1 0.5 0.6 10
execute positioned ~0 ~0 ~-1 run particle minecraft:endrod ~ ~1 ~ 0.5 1 0.5 0.6 10

# Fast upward energy burst
execute positioned ~ ~0.5 ~ run particle minecraft:glint ~ ~1 ~ 1 2 1 0.8 15

# Sound effect (speed/teleport sound)
playsound mob.endermen.teleport @a

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Thought Acceleration activated! Time accelerated!"}]}
