# Main Loop Function
# Runs every tick to manage all systems

# Regenerate magicule
scoreboard players operation @a magicule += @a magicule_regen

# Cap magicule at max
execute as @a run scoreboard players operation @s magicule < @s max_magicule

# Regenerate aura
scoreboard players operation @a aura += @s magicule_regen

# Cap aura at max
execute as @a run scoreboard players operation @s aura < @s max_aura

# Regenerate EP
scoreboard players operation @a ep += @a ep_regen

# Cap EP at max
execute as @a run scoreboard players operation @s ep < @s max_ep

# Update player displays (if using action bar)
scoreboard players display name magicule "§6Magicule"
scoreboard players display name aura "§bAura"
scoreboard players display name ep "§cEP"
