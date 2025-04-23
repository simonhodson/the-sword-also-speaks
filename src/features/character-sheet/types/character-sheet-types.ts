import { AbilityScores } from './ability-score-types';
import { ActionStats } from './action-stats-types';
import { ArmourStats } from './armour-types';
import { CharacterDetails } from './character-details.types';
import { Currency } from './currency';
import { Defenses } from './defenses-types';
import { Health } from './health-types';
import { MinorSkill } from './minor-skill-types';
import { Skills } from './skills-types';
import { Weapon } from './weapon-types';

type DropDownValue<T extends string> = {
  label: string;
  value: T;
};

export type Suit = 'Spades' | 'Hearts' | 'Clubs' | 'Diamonds';

export type Species =
  | 'Dragonborn'
  | 'Dwarf'
  | 'Elf'
  | 'Gnome'
  | 'Human'
  | 'Poxxa';

export type Archetype = 'Control' | 'Defender' | 'Martial' | 'Spellcaster';

export const archetypeDropdownValues: DropDownValue<Archetype>[] = [
  { label: 'Martial', value: 'Martial' },
  { label: 'Control', value: 'Control' },
  { label: 'Defender', value: 'Defender' },
  { label: 'Spellcaster', value: 'Spellcaster' },
];

export const speciesDropdownValues: DropDownValue<Species>[] = [
  { label: 'Dragonborn', value: 'Dragonborn' },
  { label: 'Dwarf', value: 'Dwarf' },
  { label: 'Elf', value: 'Elf' },
  { label: 'Gnome', value: 'Gnome' },
  { label: 'Human', value: 'Human' },
  { label: 'Poxxa', value: 'Poxxa' },
];

export type SpecialBonuses = Record<string, string>;

export type Character = {
  abilityScores: AbilityScores;
  actionStats: ActionStats;
  armourStats: ArmourStats;
  currency: Currency;
  dateCreated: string;
  defenses: Defenses;
  details: CharacterDetails;
  equipment: string[];
  health: Health;
  id: string;
  minorSkills: MinorSkill[];
  skills: Skills;
  specialBonuses: SpecialBonuses | Object;
  weapons: Weapon[];
};
