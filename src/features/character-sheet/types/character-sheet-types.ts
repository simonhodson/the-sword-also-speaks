import { AbilityScores } from "./ability-score-types";
import { CharacterDetails } from "./character-details.types";
import { Skills } from './skills-types';

export type Suit = "Spades" | "Hearts" | "Clubs" | "Diamonds";

export type Species = "Dragonborn" | "Dwarf" | "Elf" | "Gnome" |"Human" | "Poxxa";
export type Archetype = "Control" | "Defender" | "Martial" | "Spellcaster" ;


export type SpecialBonuses = Record<string, string>;

export type Character = {
  id: string;
  dateCreated: string;
  details: CharacterDetails;
  abilityScores: AbilityScores
  skills: Skills;
  specialBonuses?: SpecialBonuses;
};