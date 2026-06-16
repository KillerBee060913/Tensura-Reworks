/**
 * Magicule System
 * Manages the absorption, storage, and evolution of magicules
 * Magicules are the fundamental particles of magical energy that permeate the atmosphere
 */

const MAGICULE_STORAGE_KEY = 'tensura:magicule_storage';
const MAGICULE_ABSORPTION_RATE = 2; // Magicules absorbed per tick
const MAGICULE_EVOLUTION_THRESHOLD = 10000; // Amount needed to trigger evolution

class MagiculeSystem {
  constructor() {
    this.playerMagicules = new Map();
  }

  /**
   * Initialize magicule storage for a new entity
   */
  initializeMagicules(entity, initialAmount = 0) {
    const entityId = entity.id || entity.nameTag;
    this.playerMagicules.set(entityId, {
      current: initialAmount,
      maximum: initialAmount * 2,
      absorptionRate: MAGICULE_ABSORPTION_RATE,
      lastUpdateTick: 0
    });
  }

  /**
   * Add magicules to an entity
   */
  addMagicules(entity, amount) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerMagicules.has(entityId)) {
      this.initializeMagicules(entity);
    }
    
    const magiculeData = this.playerMagicules.get(entityId);
    magiculeData.current = Math.min(
      magiculeData.current + amount,
      magiculeData.maximum
    );
    
    // Check if evolution threshold is reached
    if (magiculeData.current >= MAGICULE_EVOLUTION_THRESHOLD) {
      this.triggerEvolution(entity);
    }
  }

  /**
   * Absorb magicules from atmosphere
   */
  absorbMagicules(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerMagicules.has(entityId)) {
      this.initializeMagicules(entity);
    }
    
    const magiculeData = this.playerMagicules.get(entityId);
    this.addMagicules(entity, MAGICULE_ABSORPTION_RATE);
  }

  /**
   * Trigger evolution when magicule threshold is reached
   */
  triggerEvolution(entity) {
    const entityId = entity.id || entity.nameTag;
    const magiculeData = this.playerMagicules.get(entityId);
    
    // Apply evolution effects
    entity.runCommand('effect @s strength 10 1 false');
    entity.runCommand('effect @s speed 10 0 false');
    entity.runCommand('effect @s health_boost 10 0 false');
    
    // Reset magicule count and increase maximum
    magiculeData.maximum *= 1.5;
    magiculeData.current = 0;
  }

  /**
   * Get current magicule amount for an entity
   */
  getMagicules(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerMagicules.has(entityId)) {
      return 0;
    }
    return this.playerMagicules.get(entityId).current;
  }

  /**
   * Get maximum magicule capacity for an entity
   */
  getMaxMagicules(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerMagicules.has(entityId)) {
      return 0;
    }
    return this.playerMagicules.get(entityId).maximum;
  }

  /**
   * Update magicule system
   */
  update() {
    // Passive absorption for all tracked entities
    for (const [entityId, magiculeData] of this.playerMagicules.entries()) {
      // Gradually increase magicules
      magiculeData.current += MAGICULE_ABSORPTION_RATE * 0.1;
      if (magiculeData.current > magiculeData.maximum) {
        magiculeData.current = magiculeData.maximum;
      }
    }
  }
}

export { MagiculeSystem };
