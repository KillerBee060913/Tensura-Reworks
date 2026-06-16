/**
 * Test Command System for EP
 * Provides debugging and testing commands for the Existence Points system
 */

import { world } from '@minecraft/server';

class EPTestCommands {
  constructor(epSystem) {
    this.epSystem = epSystem;
  }

  /**
   * Get EP status and breakdown
   * Usage: /function tensura:test/ep_status
   */
  getEPStatus(player) {
    const breakdown = this.epSystem.getEPBreakdown(player);
    const level = this.epSystem.getEPLevel(player);
    
    player.sendMessage(`§6=== Existence Points (EP) ===");
    player.sendMessage(`§eTotal EP: §b${breakdown.total.toFixed(0)}`);
    player.sendMessage(`§eLevel: §d${level}`);
    player.sendMessage(`§6--- Breakdown ---`);
    player.sendMessage(`§eMagicule: §b${breakdown.magiculeComponent.toFixed(0)}`);
    player.sendMessage(`§ePhysical: §b${breakdown.physicalComponent.toFixed(0)}`);
    player.sendMessage(`§eSpiritron: §b${breakdown.spiritronComponent.toFixed(0)}`);
  }

  /**
   * Set base EP value
   * Usage: /function tensura:test/set_ep <amount>
   */
  setBaseEP(player, epAmount) {
    this.epSystem.initializeEP(player, epAmount);
    player.sendMessage(`§a✓ EP initialized to ${epAmount}!`);
    this.getEPStatus(player);
  }

  /**
   * Display EP classification scale
   * Usage: /function tensura:test/ep_scale
   */
  displayEPScale(player) {
    player.sendMessage(`§6=== EP Classification Scale ===");
    player.sendMessage(`§eNormal Human: §b< 100`);
    player.sendMessage(`§eEnhanced Human: §b< 1,000`);
    player.sendMessage(`§eA-Grade Calamity: §b< 10,000`);
    player.sendMessage(`§eSpecial A-Grade: §b< 100,000`);
    player.sendMessage(`§eHigh Ranked: §b< 200,000`);
    player.sendMessage(`§eUnawakened Demon Lord: §b< 400,000`);
    player.sendMessage(`§eAwakened Demon Lord: §b< 1,000,000`);
    player.sendMessage(`§dTrue Demon Lord: §b1,000,000+`);
  }

  /**
   * Simulate EP update
   * Usage: /function tensura:test/update_ep_all
   */
  updateEPForAll(magiculeSystem, auraSystem) {
    for (const player of world.getAllPlayers()) {
      this.epSystem.updateEP(player, magiculeSystem, auraSystem);
    }
  }

  /**
   * Check if matchup is deceptive
   * Usage: /function tensura:test/check_deceptive_matchup
   */
  checkDeceptiveMatchup(player, ep1, ep2, skill1, skill2) {
    const isDeceptive = this.epSystem.isDeceptiveMatchup(ep1, ep2, skill1, skill2);
    
    player.sendMessage(`§6=== Matchup Analysis ===");
    player.sendMessage(`§eEntity 1 EP: §b${ep1}`);
    player.sendMessage(`§eEntity 2 EP: §b${ep2}`);
    player.sendMessage(`§eDeceptive Matchup: ${isDeceptive ? '§d✓ YES' : '§c✗ NO'}`);
    
    if (isDeceptive) {
      player.sendMessage(`§eEntity 1 could win despite lower EP!`);
    }
  }
}

export { EPTestCommands };
