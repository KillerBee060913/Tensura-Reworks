# Skill 3: Regeneration
# Restore health using aura
# Cost: 40 EP, 30 Aura

# Check if player has enough resources
execute as @a[scores={ep=40..}] at @s if score @s aura matches 30.. run function tensura-reworks:skills/regeneration_cast

# Insufficient resources message
execute as @a[scores={ep=0..39}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient EP for Regeneration!"}]}
execute as @a[scores={aura=0..29}] at @s run tellraw @s {"rawtext": [{"text": "§cInsufficient Aura for Regeneration!"}]}
