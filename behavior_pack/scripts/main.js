import { world, system } from '@minecraft/server';
import { MagiculeSystem } from './systems/magicule';
import { AuraSystem } from './systems/aura';
import { EPSystem } from './systems/ep';
import { HUDManager } from './ui/hud_manager';
import { CommandHandler } from './commands/command_handler';

// Initialize all systems
const magiculeSystem = new MagiculeSystem();
const auraSystem = new AuraSystem();
const epSystem = new EPSystem();
const hudManager = new HUDManager();
const commandHandler = new CommandHandler(magiculeSystem, auraSystem, epSystem);

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
console.warn('Version: 0.0.1 - Use !help command in chat for testing commands');
