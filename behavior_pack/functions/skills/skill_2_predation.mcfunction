# Skill 2: Predation
# Consume nearby entities to gain resources
# Cost: 50 EP, 40 Magicule

# Check if player has enough resources
execute as @a[scores={ep=50..}] at @s if score @s magicule matches 40.. run function tensura-reworks:skills/predation_cast

# Insufficient resources message
execute as @a[scores={ep=0..49}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient EP for Predation!"}]}
execute as @a[scores={magicule=0..39}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient Magicule for Predation!"}]}
