# Regeneration Cast Function
# Restore health using aura

# Deduct resources
scoreboard players remove @s ep 40
scoreboard players remove @s aura 30

# Apply regeneration effect
effect @s regeneration 8 3
effect @s resistance 5 1

# Heal the player
heal @s 8

# ===== ENHANCED PARTICLE EFFECTS =====
# Multiple heart particles bursting out
particle minecraft:heart ~ ~1.2 ~ 1.5 1.5 1.5 0.3 25

# Healing spiral effect
particle minecraft:villager_happy ~ ~0.8 ~ 1.8 2 1.8 0.5 20

# Glowing cyan/light blue particles
particle minecraft:soul_particle ~ ~1 ~ 1.2 1.2 1.2 0.4 15

# Aqua/water healing aura
particle minecraft:water_splash ~ ~1 ~ 1 1 1 0.2 12

# Positive green sparkles
particle minecraft:enchanting_table_particle ~ ~0.5 ~ 0.8 1 0.8 0.6 18

# Healing glow effect upward
execute positioned ~ ~0.2 ~ run particle minecraft:glint ~ ~1 ~ 0.7 1.5 0.7 0.3 10

# Sound effect (healing/magical sound)
playsound random.levelup @a

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Regeneration activated! Healing aura engaged!"}]}
