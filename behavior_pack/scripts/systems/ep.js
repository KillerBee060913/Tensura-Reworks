/**
 * EP (Existence Points) System
 * Numerical measurement of a being's total capacity and power level
 * EP combines internal magicules, physical density, and equipped spiritrons/items
 */

const BASE_HUMAN_EP = 50;
const SPECIAL_A_GRADE_EP = 100000;
const UNAWAKENED_DEMON_LORD_EP = 200000;
const AWAKENED_TRUE_DEMON_LORD_EP = 400000;

class EPSystem {
  constructor() {
    this.playerEP = new Map();
    this.epLevels = new Map();
  }

  /**
   * Initialize EP for an entity
   */
  initializeEP(entity, baseEP = BASE_HUMAN_EP) {
    const entityId = entity.id || entity.nameTag;
    this.playerEP.set(entityId, {
      magiculeComponent: 0,
      physicalComponent: 0,
      spiritronComponent: 0,
      total: baseEP,
      level: this.classifyEPLevel(baseEP)
    });
  }

  /**
   * Calculate total EP from components
   * EP = (Magicules × 0.5) + (Physical Strength × 2) + (Spiritron Equipment × 1.5)
   */
  calculateTotalEP(magicules, physicalStrength, spiritronValue) {
    const magiculeComponent = magicules * 0.5;
    const physicalComponent = physicalStrength * 2;
    const spiritronComponent = spiritronValue * 1.5;
    
    const totalEP = magiculeComponent + physicalComponent + spiritronComponent;
    
    return {
      magiculeComponent,
      physicalComponent,
      spiritronComponent,
      total: totalEP
    };
  }

  /**
   * Update EP for an entity based on current stats
   */
  updateEP(entity, magiculeSystem, auraSystem) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerEP.has(entityId)) {
      this.initializeEP(entity);
    }
    
    // Get current magicules and aura
    const magicules = magiculeSystem?.getMagicules(entity) || 0;
    const aura = auraSystem?.getAuraLevel(entity) || 0;
    
    // Calculate physical strength from health and effects
    const maxHealth = entity.getComponent('minecraft:health').maxValue;
    const currentHealth = entity.getComponent('minecraft:health').currentValue;
    const healthRatio = currentHealth / maxHealth;
    const physicalStrength = maxHealth * healthRatio * 10;
    
    // Calculate spiritron value from equipment (simplified)
    const spiritronValue = this.calculateSpiritronValue(entity);
    
    // Calculate new EP
    const epData = this.calculateTotalEP(magicules + aura, physicalStrength, spiritronValue);
    const playerData = this.playerEP.get(entityId);
    
    playerData.magiculeComponent = epData.magiculeComponent;
    playerData.physicalComponent = epData.physicalComponent;
    playerData.spiritronComponent = epData.spiritronComponent;
    playerData.total = epData.total;
    playerData.level = this.classifyEPLevel(epData.total);
  }

  /**
   * Calculate spiritron value from equipment
   */
  calculateSpiritronValue(entity) {
    let spiritronValue = 0;
    
    // Check for equipment in main hand and armor
    const inventory = entity.getComponent('minecraft:inventory');
    if (inventory) {
      const container = inventory.container;
      // Each item adds to spiritron value
      for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (item) {
          spiritronValue += 100; // Base value per item
          // Enchanted items are worth more
          if (item.getComponents().some(c => c.typeId === 'minecraft:enchantments')) {
            spiritronValue += 200;
          }
        }
      }
    }
    
    return spiritronValue;
  }

  /**
   * Classify EP level based on numerical value
   */
  classifyEPLevel(ep) {
    if (ep < 100) return 'Normal Human';
    if (ep < 1000) return 'Enhanced Human';
    if (ep < 10000) return 'A-Grade Calamity';
    if (ep < 100000) return 'Special A-Grade';
    if (ep < 200000) return 'High Ranked';
    if (ep < 400000) return 'Unawakened Demon Lord';
    if (ep < 1000000) return 'Awakened Demon Lord';
    return 'True Demon Lord';
  }

  /**
   * Get total EP for an entity
   */
  getTotalEP(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerEP.has(entityId)) {
      this.initializeEP(entity);
    }
    return this.playerEP.get(entityId).total;
  }

  /**
   * Get EP breakdown for an entity
   */
  getEPBreakdown(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerEP.has(entityId)) {
      this.initializeEP(entity);
    }
    return this.playerEP.get(entityId);
  }

  /**
   * Get EP level classification for an entity
   */
  getEPLevel(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerEP.has(entityId)) {
      this.initializeEP(entity);
    }
    return this.playerEP.get(entityId).level;
  }

  /**
   * Important note: EP can be deceptive in combat
   * Lower EP with better skills/ultimate abilities > Higher EP with basic combat
   */
  isDeceptiveMatchup(entity1EP, entity2EP, entity1SkillLevel, entity2SkillLevel) {
    // If EP difference is small but skill difference is large, it's deceptive
    const epRatio = entity1EP / entity2EP;
    const skillRatio = entity1SkillLevel / entity2SkillLevel;
    
    // If skills are 2x better but EP is only 0.8x, the lower EP entity can win
    return Math.abs(epRatio - 1) < 0.3 && Math.abs(skillRatio - 1) > 1.5;
  }
}

export { EPSystem };
