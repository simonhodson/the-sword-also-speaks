export type Suit = "spades" | "hearts" | "clubs" | "diamonds";

export type Species = "dragonborn" | "dwarf" | "elf" | "gnome" |"human" | "poxxa";
export type Archetype = "control" | "defender" | "martial" | "spellcaster" ;

export type CharacterDetails = {
  name: string;
  species: Species | undefined;
  archetype: Archetype | undefined;
  currentLevel: number | undefined;
};

export type AbilityStat = { suit: Suit, total: number };

export type AbilityScores = {
  strength: AbilityStat;
  agility: AbilityStat;
  intelligence: AbilityStat;
  charisma: AbilityStat;
};

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
  abilityScores: AbilityScores;
  skils: Skills;
  specialBonuses?: SpecialBonuses;
};