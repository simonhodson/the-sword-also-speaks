import { AbilityScores } from "./ability-score-types";
import { CharacterDetails } from "./character-details.types";

export type Suit = "Spades" | "Hearts" | "Clubs" | "Diamonds";

export type Species = "Dragonborn" | "Dwarf" | "Elf" | "Gnome" |"Human" | "Poxxa";
export type Archetype = "Control" | "Defender" | "Martial" | "Spellcaster" ;

export type SkillsLevel = { suit: Suit, rank: number };
export type Skills = {
  acrobatics: SkillsLevel;
  arcana: SkillsLevel;
  athletics: SkillsLevel;
  bluff: SkillsLevel;
  charm: SkillsLevel;
  hide: SkillsLevel;
  history: SkillsLevel;
  insight: SkillsLevel;
  intimidate: SkillsLevel;
  investigation: SkillsLevel;
  legerdemain: SkillsLevel;
  mechanism: SkillsLevel;
  medicine: SkillsLevel;
  nature: SkillsLevel;
  perception: SkillsLevel;
  perform: SkillsLevel;
  religion: SkillsLevel;
  research: SkillsLevel;
  scuttlebutt: SkillsLevel;
  spellcasting: SkillsLevel;
  survival: SkillsLevel;
};

export type SpecialBonuses = Record<string, string>;

export type Character = {
  details: CharacterDetails;
  abilityScores: AbilityScores
  skils: Skills;
  specialBonuses?: SpecialBonuses;
};