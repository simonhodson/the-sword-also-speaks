import { createDisplayText } from '../../../utilities/display-text';
import { Suit } from './character-sheet-types';

export type SkillsLevel = { suit: Suit; rank: number };

const skillsTemplate = {
  acrobatics: undefined,
  arcana: undefined,
  athletics: undefined,
  bluff: undefined,
  charm: undefined,
  hide: undefined,
  history: undefined,
  insight: undefined,
  intimidate: undefined,
  investigation: undefined,
  legerdemain: undefined,
  mechanism: undefined,
  medicine: undefined,
  nature: undefined,
  perception: undefined,
  perform: undefined,
  religion: undefined,
  research: undefined,
  scuttlebutt: undefined,
  spellcasting: undefined,
  survival: undefined,
};

export type SkillsKey = keyof typeof skillsTemplate;
export type Skills = Record<SkillsKey, SkillsLevel>;

export const skillsKeys = Object.keys(skillsTemplate) as SkillsKey[];

export const skillDisplayText = createDisplayText(skillsKeys);
