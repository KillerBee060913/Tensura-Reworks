# Initialize Magicule System
# This function sets up the magicule tracking for players

# Scoreboard objectives for magicule tracking
scoreboard objectives add magicule dummy "Magicule"
scoreboard objectives add max_magicule dummy "Max Magicule"
scoreboard objectives add magicule_regen dummy "Magicule Regen Rate"

# Initialize default values for players
tag @a add magicule_player
execute as @a[tag=magicule_player] run scoreboard players set @s magicule 100
execute as @a[tag=magicule_player] run scoreboard players set @s max_magicule 500
execute as @a[tag=magicule_player] run scoreboard players set @s magicule_regen 2

tellraw @a {"rawtext": [{"text": "§l§6[Tensura]§r Magicule System Initialized!"}]}
