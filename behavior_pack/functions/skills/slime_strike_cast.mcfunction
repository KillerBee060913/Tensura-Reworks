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

# Particles and sound
particle minecraft:slime_particle ~ ~1 ~

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Slime Strike activated!"}]}
