import { createDisplayText } from '../../../utilities/display-text';
import { Archetype, Species } from './character-sheet-types';

const characterDetailsTemplate = {
  name: undefined as string | undefined,
  species: undefined as Species | undefined,
  archetype: undefined as Archetype | undefined,
  currentLevel: undefined as number | undefined,
} as const;

export type CharacterDetailsKey = keyof typeof characterDetailsTemplate;

export type CharacterDetails = {
  [K in CharacterDetailsKey]: (typeof characterDetailsTemplate)[K];
};

export const characterDetailsKeys = Object.keys(
  characterDetailsTemplate,
) as CharacterDetailsKey[];
export const characterDetailsDisplayText =
  createDisplayText(characterDetailsKeys);
