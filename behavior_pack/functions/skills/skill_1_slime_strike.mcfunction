# Skill 1: Slime Strike
# Basic melee attack with magicule boost
# Cost: 30 EP, 20 Magicule

# Check if player has enough resources
execute as @a[scores={ep=30..}] at @s if score @s magicule matches 20.. run function tensura-reworks:skills/slime_strike_cast

# Insufficient resources message
execute as @a[scores={ep=0..29}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient EP for Slime Strike!"}]}
execute as @a[scores={magicule=0..19}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient Magicule for Slime Strike!"}]}
