import { createDisplayText } from '../../../utilities/display-text';
import { Suit } from './character-sheet-types';

// Template created to avoid Typescript teardown at compile
const abilityScoreTemplate = {
  strength: undefined,
  agility: undefined,
  intelligence: undefined,
  charisma: undefined,
} as const;

export type AbilityStat = { suit: Suit; total: number };

export type AbilityKey = keyof typeof abilityScoreTemplate;

export type AbilityScoresInitialValues = Record<AbilityKey, number>;

export type AbilityScores = Record<AbilityKey, AbilityStat>;

export const abilityKeys = Object.keys(abilityScoreTemplate) as AbilityKey[];

export const abilityDisplayText = createDisplayText(abilityKeys);
