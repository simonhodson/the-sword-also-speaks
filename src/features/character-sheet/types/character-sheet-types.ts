import { AbilityScores } from "./ability-score-types";
import { ActionStats } from "./action-stats-types";
import { ArmourStats } from "./armour-types";
import { CharacterDetails } from "./character-details.types";
import { Currency } from "./currency";
import { Defenses } from "./defenses-types";
import { Health } from "./health-types";
import { MinorSkill } from "./minor-skill-types";
import { Skills } from './skills-types';
import { Weapon } from "./weapon-types";

export type Suit = "Spades" | "Hearts" | "Clubs" | "Diamonds";

export type Species = "Dragonborn" | "Dwarf" | "Elf" | "Gnome" |"Human" | "Poxxa";
export type Archetype = "Control" | "Defender" | "Martial" | "Spellcaster" ;

export type SpecialBonuses = Record<string, string>;

export type Character = {
  abilityScores: AbilityScores;
  actionStats: ActionStats;
  armourStats: ArmourStats,
  currency: Currency;
  dateCreated: string;
  defenses: Defenses;
  details: CharacterDetails;
  equipment: string[];
  health: Health;
  id: string;
  minorSkills: MinorSkill[];
  skills: Skills;
  specialBonuses: SpecialBonuses | {};
  weapons: Weapon[];
};