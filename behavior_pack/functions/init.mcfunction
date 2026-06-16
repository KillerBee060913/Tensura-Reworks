# Initialize Tensura Reworks Addon
# Run this once when the world loads

tellraw @a {"rawtext": [{"text": "§l§5[Tensura Reworks]§r Loading addon systems..."}]}

# Initialize all systems
function tensura-reworks:magicule_system/magicule_init
function tensura-reworks:aura_system/aura_init
function tensura-reworks:ep_system/ep_init

# Setup main loop
schedule function tensura-reworks:loop/main_loop 1t replace

tellraw @a {"rawtext": [{"text": "§l§5[Tensura Reworks]§r All systems ready! Welcome to the world of Tensura!"}]}
