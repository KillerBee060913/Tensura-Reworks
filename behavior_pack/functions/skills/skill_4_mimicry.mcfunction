# Skill 4: Mimicry
# Copy properties of absorbed materials
# Cost: 35 EP, 25 Magicule

# Check if player has enough resources
execute as @a[scores={ep=35..}] at @s if score @s magicule matches 25.. run function tensura-reworks:skills/mimicry_cast

# Insufficient resources message
execute as @a[scores={ep=0..34}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient EP for Mimicry!"}]}
execute as @a[scores={magicule=0..24}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient Magicule for Mimicry!"}]}
