import { createDisplayText } from '../../../utilities/display-text';

type DamageTypes = 'bludgeoning' | 'slashing' | 'piercing' | 'magic';

type Damage = { total: number; type: DamageTypes };

type Properties = Record<string, string>;

const weaponTemplate = {
  name: undefined as string | undefined,
  combatSkill: undefined as string | undefined,
  draw: undefined as number | undefined,
  damageLimit: undefined as Damage | undefined,
  properties: undefined as Properties[] | undefined,
};
export type WeaponKey = keyof typeof weaponTemplate;

export type Weapon = {
  [K in WeaponKey]: (typeof weaponTemplate)[K];
};

export const weaponKeys = Object.keys(weaponTemplate) as WeaponKey[];
export const weaponDisplayText = createDisplayText(weaponKeys);
