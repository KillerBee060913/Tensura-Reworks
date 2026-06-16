# Skill 5: Thought Acceleration
# Temporarily increase speed and reflexes
# Cost: 45 EP, 35 Magicule

# Check if player has enough resources
execute as @a[scores={ep=45..}] at @s if score @s magicule matches 35.. run function tensura-reworks:skills/thought_acceleration_cast

# Insufficient resources message
execute as @a[scores={ep=0..44}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient EP for Thought Acceleration!"}]}
execute as @a[scores={magicule=0..34}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient Magicule for Thought Acceleration!"}]}
