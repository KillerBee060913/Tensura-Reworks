import { world, system } from '@minecraft/server';
import { MagiculeSystem } from './systems/magicule';
import { AuraSystem } from './systems/aura';
import { EPSystem } from './systems/ep';
import { HUDManager } from './ui/hud_manager';

// Initialize all systems
const magiculeSystem = new MagiculeSystem();
const auraSystem = new AuraSystem();
const epSystem = new EPSystem();
const hudManager = new HUDManager();

// Main game loop
system.runInterval(() => {
  // Update all systems every tick
  magiculeSystem.update();
  auraSystem.update();
  epSystem.update();
  
  // Update HUDs for all players
  for (const player of world.getAllPlayers()) {
    hudManager.updatePlayerHUD(player);
  }
}, 20); // Run every tick (20 ticks/second)

console.warn('Tensura Reworks addon loaded successfully!');
