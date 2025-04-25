export type PerksCategory =
  | 'Martial'
  | 'Defender'
  | 'Control'
  | 'Regular'
  | 'Spellcaster';
export type ArmourWeaponTypes = 'basic' | 'light' | 'medium' | 'heavy';

export type ArchetypeConst = {
  baseHealth: number;
  weaponRestrictions: ArmourWeaponTypes[];
  weaponsRestrictionOverride: boolean;
  armourTypes: ArmourWeaponTypes[];
  majorityAvailable: boolean;
  perks: Perk[];
  spells: Spells;
};

export type Perk = {
  type: PerksCategory;
  initialAmount: number;
  onInit: boolean;
  onLevel: boolean;
  maximumRank: number | undefined;
};

export type Tag = 'arcane' | 'dark' | 'faen' | 'radiant' | 'wild';
export type SpellOrigin =
  | 'fervent-student'
  | 'innate-ability'
  | 'powerful-boon'
  | 'whims-of-fate';
export type Spells = {
  ranksAvailableOnInit: number | undefined;
  origin: boolean;
  available: Tag[];
  maximumRank: number | undefined;
};
