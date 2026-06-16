# Regeneration Cast Function
# Restore health using aura

# Deduct resources
scoreboard players remove @s ep 40
scoreboard players remove @s aura 30

# Apply regeneration effect
effect @s regeneration 8 3
effect @s resistance 5 1

# Heal the player
heal @s 8

# Particles and feedback
particle minecraft:heart ~ ~1 ~

tellraw @s {"rawtext": [{"text": "§b[Skill]§r Regeneration activated! Healing aura engaged!"}]}
