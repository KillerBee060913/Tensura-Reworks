/**
 * Test Command System for Magicules
 * Provides debugging and testing commands for the magicule system
 */

import { world } from '@minecraft/server';

class MagiculeTestCommands {
  constructor(magiculeSystem) {
    this.magiculeSystem = magiculeSystem;
  }

  /**
   * Add magicules to a player
   * Usage: /function tensura:test/add_magicules
   */
  addMagicules(player, amount = 5000) {
    this.magiculeSystem.addMagicules(player, amount);
    player.sendMessage(`§a✓ Added ${amount} magicules!`);
    const current = this.magiculeSystem.getMagicules(player);
    const max = this.magiculeSystem.getMaxMagicules(player);
    player.sendMessage(`§eCurrent: ${current} / ${max}`);
  }

  /**
   * Get magicule status
   * Usage: /function tensura:test/magicule_status
   */
  getMagiculeStatus(player) {
    const current = this.magiculeSystem.getMagicules(player);
    const max = this.magiculeSystem.getMaxMagicules(player);
    const percentage = ((current / max) * 100).toFixed(1);
    
    player.sendMessage(`§6=== Magicule Status ===");
    player.sendMessage(`§eCurrent: §b${current.toFixed(0)}`);
    player.sendMessage(`§eMaximum: §b${max.toFixed(0)}`);
    player.sendMessage(`§eProgress: §b${percentage}%`);
  }

  /**
   * Reset magicules to starting amount
   * Usage: /function tensura:test/reset_magicules
   */
  resetMagicules(player) {
    this.magiculeSystem.initializeMagicules(player, 0);
    player.sendMessage(`§c✓ Magicules reset!`);
  }

  /**
   * Trigger evolution manually
   * Usage: /function tensura:test/force_evolution
   */
  forceEvolution(player) {
    this.magiculeSystem.triggerEvolution(player);
    player.sendMessage(`§d✓ Evolution triggered!`);
    player.runCommand('effect @s glowing 5 0 false');
    player.runCommand('effect @s strength 10 2 false');
  }

  /**
   * Set magicules to a specific value
   * Usage: /function tensura:test/set_magicules <amount>
   */
  setMagicules(player, amount) {
    this.magiculeSystem.initializeMagicules(player, 0);
    this.magiculeSystem.addMagicules(player, amount);
    player.sendMessage(`§a✓ Set magicules to ${amount}!`);
  }
}

export { MagiculeTestCommands };
