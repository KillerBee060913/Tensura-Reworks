# Thought Acceleration Cast Function
# Increase speed and reflexes

# Deduct resources
scoreboard players remove @s ep 45
scoreboard players remove @s magicule 35

# Apply speed and haste effects
effect @s speed 12 4
effect @s haste 12 2
effect @s jump_boost 12 2

# Particles and feedback
particle minecraft:water_wake_particle ~ ~1 ~

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Thought Acceleration activated! Time accelerated!"}]}
