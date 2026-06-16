# Initialize Aura System
# This function sets up the aura tracking for players

# Scoreboard objectives for aura tracking
scoreboard objectives add aura dummy "Aura Level"
scoreboard objectives add max_aura dummy "Max Aura"
scoreboard objectives add aura_strength dummy "Aura Strength"

# Initialize default values for players
tag @a add aura_player
execute as @a[tag=aura_player] run scoreboard players set @s aura 50
execute as @a[tag=aura_player] run scoreboard players set @s max_aura 200
execute as @a[tag=aura_player] run scoreboard players set @s aura_strength 1

tellraw @a {"rawtext": [{"text": "§l§b[Tensura]§r Aura System Initialized!"}]}
