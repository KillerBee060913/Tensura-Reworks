# Slime Strike Cast Function
# Deduct resources and apply effect

# Deduct resources
scoreboard players remove @s ep 30
scoreboard players remove @s magicule 20

# Apply effects
effect @s strength 5 2
effect @s speed 3 1

# Damage nearby hostile mobs
execute as @s at @s run damage @e[type=!player,distance=0..8,type=!item,type=!armor_stand] 12 entity_attack

# ===== ENHANCED PARTICLE EFFECTS =====
# Main slime particle burst at player
particle minecraft:slime_particle ~ ~1 ~ 2 2 2 1 20

# Additional green sparkle particles
particle minecraft:enchanting_table_particle ~ ~1 ~ 2 2 2 0.5 15

# Hit effect on damaged mobs
execute as @s at @s run particle minecraft:crit_emitter @e[type=!player,distance=0..8,type=!item,type=!armor_stand]

# Ground impact particles
particle minecraft:harvest_particle ~ ~ ~ 1.5 0.5 1.5 0 10

# Sound effect (knockback sound)
playsound hit.player @a

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Slime Strike activated!"}]}
