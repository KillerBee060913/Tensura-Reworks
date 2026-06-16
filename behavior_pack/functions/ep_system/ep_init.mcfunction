# Initialize EP (Energy Points) System
# This function sets up the energy points tracking for players

# Scoreboard objectives for EP tracking
scoreboard objectives add ep dummy "Energy Points"
scoreboard objectives add max_ep dummy "Max Energy Points"
scoreboard objectives add ep_regen dummy "EP Regen Rate"

# Initialize default values for players
tag @a add ep_player
execute as @a[tag=ep_player] run scoreboard players set @s ep 200
execute as @a[tag=ep_player] run scoreboard players set @s max_ep 500
execute as @a[tag=ep_player] run scoreboard players set @s ep_regen 3

tellraw @a {"rawtext": [{"text": "§l§c[Tensura]§r EP System Initialized!"}]}
