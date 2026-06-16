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

# ===== ENHANCED PARTICLE EFFECTS =====
# Large water splash burst
particle minecraft:water_splash ~ ~1 ~ 2.5 2.5 2.5 0.8 30

# Diamond sparkle effect
particle minecraft:dripping_water ~ ~0.8 ~ 1.5 1.5 1.5 0.4 20

# Protection shield aura - rotating particles
particle minecraft:endrod ~ ~1 ~ 2 2 2 0.6 25

# Cyan/light blue transformation particles
particle minecraft:enchanting_table_particle ~ ~0.5 ~ 1.8 1 1.8 0.5 22

# Water waves upward effect
execute positioned ~ ~0.3 ~ run particle minecraft:water_wake_particle ~ ~1 ~ 1.2 2 1.2 0.3 18

# Armor materialization effect
particle minecraft:crit_emitter ~ ~1.2 ~ 1.5 1.5 1.5 0.4 16

# Glint effect for shiny armor
execute positioned ~ ~0.6 ~ run particle minecraft:glint ~ ~0.5 ~ 1 1 1 0.7 12

# Sound effect (armor equipping sound)
playsound armor.equip_diamond @a

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Mimicry activated! Form adapted!"}]}
