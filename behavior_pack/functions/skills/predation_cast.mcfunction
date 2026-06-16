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

# Particles and feedback
particle minecraft:portal ~ ~1 ~

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Predation activated! Resources absorbed!"}]}
