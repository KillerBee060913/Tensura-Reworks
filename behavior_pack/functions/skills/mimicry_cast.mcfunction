# Mimicry Cast Function
# Copy properties and gain armor

# Deduct resources
scoreboard players remove @s ep 35
scoreboard players remove @s magicule 25

# Apply armor and protection
effect @s absorption 10 2
effect @s resistance 10 0

# Add armor to player
replaceitem entity @s armor.head diamond_helmet 1 0
replaceitem entity @s armor.chest diamond_chestplate 1 0
replaceitem entity @s armor.legs diamond_leggings 1 0
replaceitem entity @s armor.feet diamond_boots 1 0

# Particles and feedback
particle minecraft:water_splash ~ ~1 ~

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Mimicry activated! Form adapted!"}]}
