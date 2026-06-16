/**
 * Test Command System for Aura
 * Provides debugging and testing commands for the aura system
 */

import { world } from '@minecraft/server';

class AuraTestCommands {
  constructor(auraSystem) {
    this.auraSystem = auraSystem;
  }

  /**
   * Set passive aura level
   * Usage: /function tensura:test/set_passive_aura <level>
   */
  setPassiveAura(player, level) {
    this.auraSystem.setPassiveAura(player, level);
    player.sendMessage(`§a✓ Passive aura set to ${level}!`);
    this.displayAuraStatus(player);
  }

  /**
   * Activate Aura Control
   * Usage: /function tensura:test/activate_aura_control
   */
  activateAuraControl(player) {
    this.auraSystem.activateAuraControl(player);
    player.sendMessage(`§a✓ Aura Control activated!`);
    player.sendMessage(`§ePAssive aura suppressed`);
    player.runCommand('effect @s resistance 10 0 false');
  }

  /**
   * Deactivate Aura Control
   * Usage: /function tensura:test/deactivate_aura_control
   */
  deactivateAuraControl(player) {
    this.auraSystem.deactivateAuraControl(player);
    player.sendMessage(`§c✓ Aura Control deactivated!`);
    player.sendMessage(`§ePassive aura released`);
  }

  /**
   * Activate Demon Lord Haki
   * Usage: /function tensura:test/activate_demon_lord_haki <level>
   */
  activateDemonLordHaki(player, hakiLevel = 150) {
    this.auraSystem.activateDemonLordHaki(player, hakiLevel);
    player.sendMessage(`§5✓ Demon Lord Haki activated!`);
    player.sendMessage(`§dLevel: ${hakiLevel}`);
    player.runCommand('particle minecraft:basic_flame_particle ~ ~1 ~');
    player.runCommand('particle minecraft:basic_flame_particle ~1 ~1 ~');
    player.runCommand('particle minecraft:basic_flame_particle ~-1 ~1 ~');
    player.runCommand('effect @s glowing 20 0 false');
  }

  /**
   * Deactivate Demon Lord Haki
   * Usage: /function tensura:test/deactivate_demon_lord_haki
   */
  deactivateDemonLordHaki(player) {
    this.auraSystem.deactivateDemonLordHaki(player);
    player.sendMessage(`§c✓ Demon Lord Haki deactivated!`);
  }

  /**
   * Wrap aura for combat
   * Usage: /function tensura:test/wrap_aura_combat <amount>
   */
  wrapAuraForCombat(player, auraAmount = 200) {
    this.auraSystem.wrapAuraForCombat(player, auraAmount);
    player.sendMessage(`§a✓ Aura wrapped for combat!`);
    player.sendMessage(`§eAmount: ${auraAmount}`);
    player.runCommand('effect @s resistance 20 1 false');
    player.runCommand('effect @s strength 20 1 false');
  }

  /**
   * Display aura status
   * Usage: /function tensura:test/aura_status
   */
  displayAuraStatus(player) {
    const auraLevel = this.auraSystem.getAuraLevel(player);
    player.sendMessage(`§6=== Aura Status ===");
    player.sendMessage(`§eAura Level: §b${auraLevel.toFixed(1)}`);
    player.sendMessage(`§eStatus: §aActive`);
  }
}

export { AuraTestCommands };
