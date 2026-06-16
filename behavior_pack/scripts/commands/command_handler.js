/**
 * Main Command Handler
 * Routes test commands to appropriate system handlers
 */

import { world, system } from '@minecraft/server';
import { MagiculeTestCommands } from './test_magicules';
import { AuraTestCommands } from './test_aura';
import { EPTestCommands } from './test_ep';

class CommandHandler {
  constructor(magiculeSystem, auraSystem, epSystem) {
    this.magiculeCommands = new MagiculeTestCommands(magiculeSystem);
    this.auraCommands = new AuraTestCommands(auraSystem);
    this.epCommands = new EPTestCommands(epSystem);
    this.setupCommandListeners();
  }

  setupCommandListeners() {
    // Listen for player messages starting with !
    world.beforeEvents.chatSend.subscribe((event) => {
      const message = event.message;
      const player = event.sender;

      if (message.startsWith('!')) {
        event.cancel = true;
        this.handleCommand(player, message.substring(1));
      }
    });
  }

  handleCommand(player, command) {
    const args = command.split(' ');
    const cmd = args[0].toLowerCase();

    try {
      switch (cmd) {
        // Magicule commands
        case 'addmagicules':
          const amount = parseInt(args[1]) || 5000;
          this.magiculeCommands.addMagicules(player, amount);
          break;

        case 'magiculeStatus':
          this.magiculeCommands.getMagiculeStatus(player);
          break;

        case 'resetmagicules':
          this.magiculeCommands.resetMagicules(player);
          break;

        case 'forceevolution':
          this.magiculeCommands.forceEvolution(player);
          break;

        case 'setmagicules':
          const setAmount = parseInt(args[1]) || 0;
          this.magiculeCommands.setMagicules(player, setAmount);
          break;

        // Aura commands
        case 'setpassiveaura':
          const auraLevel = parseInt(args[1]) || 50;
          this.auraCommands.setPassiveAura(player, auraLevel);
          break;

        case 'activateauracontrol':
          this.auraCommands.activateAuraControl(player);
          break;

        case 'deactivateauracontrol':
          this.auraCommands.deactivateAuraControl(player);
          break;

        case 'activatedemondlordhaki':
          const hakiLevel = parseInt(args[1]) || 150;
          this.auraCommands.activateDemonLordHaki(player, hakiLevel);
          break;

        case 'deactivatedemondlordhaki':
          this.auraCommands.deactivateDemonLordHaki(player);
          break;

        case 'wrapaura':
          const wrapAmount = parseInt(args[1]) || 200;
          this.auraCommands.wrapAuraForCombat(player, wrapAmount);
          break;

        case 'aurastatus':
          this.auraCommands.displayAuraStatus(player);
          break;

        // EP commands
        case 'epstatus':
          this.epCommands.getEPStatus(player);
          break;

        case 'setep':
          const epAmount = parseInt(args[1]) || 100;
          this.epCommands.setBaseEP(player, epAmount);
          break;

        case 'epscale':
          this.epCommands.displayEPScale(player);
          break;

        case 'checkdeceptive':
          const ep1 = parseInt(args[1]) || 100000;
          const ep2 = parseInt(args[2]) || 150000;
          const skill1 = parseInt(args[3]) || 5;
          const skill2 = parseInt(args[4]) || 2;
          this.epCommands.checkDeceptiveMatchup(player, ep1, ep2, skill1, skill2);
          break;

        // Help command
        case 'help':
          this.displayHelp(player);
          break;

        default:
          player.sendMessage(`§cUnknown command: ${cmd}`);
          player.sendMessage(`§eType §a!help §efor available commands`);
      }
    } catch (error) {
      player.sendMessage(`§cError executing command: ${error.message}`);
      console.error(`Command error for ${player.name}: ${error}`);
    }
  }

  displayHelp(player) {
    player.sendMessage(`§6=== Tensura Reworks Test Commands ===");
    player.sendMessage(`\n§e--- Magicule Commands ---`);
    player.sendMessage(`§a!addmagicules <amount>§e - Add magicules`);
    player.sendMessage(`§a!magiculeStatus§e - Show magicule status`);
    player.sendMessage(`§a!resetmagicules§e - Reset magicules`);
    player.sendMessage(`§a!forceevolution§e - Trigger evolution`);
    player.sendMessage(`§a!setmagicules <amount>§e - Set magicule value`);
    player.sendMessage(`\n§e--- Aura Commands ---`);
    player.sendMessage(`§a!setpassiveaura <level>§e - Set passive aura`);
    player.sendMessage(`§a!activateauracontrol§e - Activate aura control`);
    player.sendMessage(`§a!deactivateauracontrol§e - Deactivate aura control`);
    player.sendMessage(`§a!activatedemondlordhaki <level>§e - Activate Haki`);
    player.sendMessage(`§a!deactivatedemondlordhaki§e - Deactivate Haki`);
    player.sendMessage(`§a!wrapaura <amount>§e - Wrap aura for combat`);
    player.sendMessage(`§a!aurastatus§e - Show aura status`);
    player.sendMessage(`\n§e--- EP Commands ---`);
    player.sendMessage(`§a!epstatus§e - Show EP status`);
    player.sendMessage(`§a!setep <amount>§e - Set EP value`);
    player.sendMessage(`§a!epscale§e - Show EP classification scale`);
    player.sendMessage(`§a!checkdeceptive <ep1> <ep2> <skill1> <skill2>§e - Check matchup`);
    player.sendMessage(`\n§e--- Other ---`);
    player.sendMessage(`§a!help§e - Show this help message`);
  }
}

export { CommandHandler };
