/**
 * Aura System
 * Manages the visible radiation of internal energy and aura effects
 * Aura is the tangible pressure exerted when a being releases internal energy
 */

const AURA_CONTROL_SKILL = 'tensura:aura_control';
const BASE_PASSIVE_AURA = 1.0;
const AURA_DAMAGE_THRESHOLD = 50; // Damage radius threshold

class AuraSystem {
  constructor() {
    this.playerAuras = new Map();
    this.activeAuraEffects = new Map();
  }

  /**
   * Initialize aura for an entity
   */
  initializeAura(entity, baseAuraLevel = 0) {
    const entityId = entity.id || entity.nameTag;
    this.playerAuras.set(entityId, {
      level: baseAuraLevel,
      passive: baseAuraLevel * BASE_PASSIVE_AURA,
      active: 0,
      isControlled: false,
      demonLordHaki: false
    });
  }

  /**
   * Set passive aura (constantly leaking energy)
   */
  setPassiveAura(entity, level) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerAuras.has(entityId)) {
      this.initializeAura(entity);
    }
    
    const auraData = this.playerAuras.get(entityId);
    auraData.passive = level;
    
    // Apply aura effects to nearby entities if passive aura is strong
    if (level >= AURA_DAMAGE_THRESHOLD) {
      this.applyAuraEffects(entity, level);
    }
  }

  /**
   * Activate Aura Control skill to suppress passive aura
   */
  activateAuraControl(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerAuras.has(entityId)) {
      this.initializeAura(entity);
    }
    
    const auraData = this.playerAuras.get(entityId);
    auraData.isControlled = true;
    auraData.passive = 0; // Suppress passive aura
  }

  /**
   * Deactivate Aura Control
   */
  deactivateAuraControl(entity) {
    const entityId = entity.id || entity.nameTag;
    if (this.playerAuras.has(entityId)) {
      const auraData = this.playerAuras.get(entityId);
      auraData.isControlled = false;
    }
  }

  /**
   * Activate Demon Lord Haki (weaponized aura form)
   */
  activateDemonLordHaki(entity, hakiLevel) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerAuras.has(entityId)) {
      this.initializeAura(entity);
    }
    
    const auraData = this.playerAuras.get(entityId);
    auraData.demonLordHaki = true;
    auraData.active = hakiLevel;
    
    // Apply visual effects
    entity.runCommand('effect @s glowing 1 0 false');
    entity.runCommand('particle minecraft:basic_flame_particle ~ ~1 ~');
  }

  /**
   * Deactivate Demon Lord Haki
   */
  deactivateDemonLordHaki(entity) {
    const entityId = entity.id || entity.nameTag;
    if (this.playerAuras.has(entityId)) {
      const auraData = this.playerAuras.get(entityId);
      auraData.demonLordHaki = false;
      auraData.active = 0;
    }
  }

  /**
   * Apply aura effects to nearby entities
   */
  applyAuraEffects(entity, auraLevel) {
    const radius = auraLevel / 10; // Radius scales with aura level
    
    // Apply crush/terrify effect
    if (auraLevel >= AURA_DAMAGE_THRESHOLD) {
      entity.runCommand(`execute as @e[r=${radius},rm=0.1] run effect @s slowness 2 1 false`);
    }
    
    // Apply paralysis for very high aura (Demon Lord level)
    if (auraLevel >= 200) {
      entity.runCommand(`execute as @e[r=${radius},rm=0.1] run effect @s mining_fatigue 1 1 false`);
    }
  }

  /**
   * Wrap aura around body/weapon for combat enhancement
   */
  wrapAuraForCombat(entity, auraAmount) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerAuras.has(entityId)) {
      this.initializeAura(entity);
    }
    
    const auraData = this.playerAuras.get(entityId);
    auraData.active = auraAmount;
    
    // Apply combat effects
    const defenseBoost = Math.floor(auraAmount / 100);
    const damageBoost = Math.floor(auraAmount / 150);
    
    entity.runCommand(`effect @s resistance ${20} ${defenseBoost} false`);
    entity.runCommand(`effect @s strength ${20} ${damageBoost} false`);
  }

  /**
   * Get current aura level
   */
  getAuraLevel(entity) {
    const entityId = entity.id || entity.nameTag;
    if (!this.playerAuras.has(entityId)) {
      return 0;
    }
    const auraData = this.playerAuras.get(entityId);
    return auraData.isControlled ? 0 : auraData.passive + auraData.active;
  }

  /**
   * Update aura system
   */
  update() {
    // Update all active auras
    for (const [entityId, auraData] of this.playerAuras.entries()) {
      // Passive aura naturally builds if not controlled
      if (!auraData.isControlled && auraData.passive < 100) {
        auraData.passive += 0.1;
      }
    }
  }
}

export { AuraSystem };
