import { createDisplayText } from '../../../utilities/display-text';

type DamageTypes = 'bludgeoning' | 'slashing' | 'piercing' | 'magic';

export type Damage = { total: number; type: DamageTypes };

// type Properties = Record<string, string>;

const weaponTemplate = {
  name: undefined as string | undefined,
  combatSkill: undefined as string | undefined,
  draw: undefined as number | undefined,
  damageLimit: undefined as Damage | undefined,
  // properties: undefined as Properties[] | undefined,
};

export type WeaponsKey = keyof typeof weaponTemplate;

export type WeaponsValues = string | number | Damage | undefined;

export type Weapon = {
  [K in WeaponsKey]: (typeof weaponTemplate)[K];
};

export const weaponKeys = Object.keys(weaponTemplate) as WeaponsKey[];
export const weaponDisplayText = createDisplayText(weaponKeys);
