import { AbilityScores } from "./ability-score-types";
import { CharacterDetails } from "./character-details.types";
import { Skills } from "./skills-types";

export type Suit = "Spades" | "Hearts" | "Clubs" | "Diamonds";

export type Species = "Dragonborn" | "Dwarf" | "Elf" | "Gnome" |"Human" | "Poxxa";
export type Archetype = "Control" | "Defender" | "Martial" | "Spellcaster" ;


export type SpecialBonuses = Record<string, string>;

export type Character = {
  details: CharacterDetails;
  abilityScores: AbilityScores
  skils: Skills;
  specialBonuses?: SpecialBonuses;
};