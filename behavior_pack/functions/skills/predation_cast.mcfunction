# Predation Cast Function
# Consume nearby entities and gain resources

# Deduct resources
scoreboard players remove @s ep 50
scoreboard players remove @s magicule 40

# Kill nearby mobs and gain rewards
execute as @s at @s run kill @e[type=!player,distance=0..10,type=!item,type=!armor_stand]

# Gain magicule and aura
scoreboard players add @s magicule 80
scoreboard players add @s aura 30

# Cap at maximum values
execute as @s run scoreboard players operation @s magicule < @s max_magicule
execute as @s run scoreboard players operation @s aura < @s max_aura

# ===== ENHANCED PARTICLE EFFECTS =====
# Main portal vortex at player center
particle minecraft:portal ~ ~1 ~ 3 3 3 1 30

# Purple/dark purple particles spinning around
particle minecraft:endrod ~ ~1.5 ~ 2.5 2.5 2.5 0.8 25

# Absorption-like particles
particle minecraft:dripping_obsidian_tear ~ ~1 ~ 2 2 2 0.5 20

# Large spiral effect upward
execute positioned ~ ~0.5 ~ run particle minecraft:portal ~ ~1 ~ 1.5 3 1.5 0.6 15

# Magicule glow effect (enchanting particles)
particle minecraft:enchanting_table_particle ~ ~0.5 ~ 2 2 2 0.7 18

# Sound effect (eerie/consumption sound)
playsound mob.wither.death @a

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Predation activated! Resources absorbed!"}]}
