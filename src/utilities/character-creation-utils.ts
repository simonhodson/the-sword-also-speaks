import { Archetype } from '../features/character-sheet/types/character-sheet-types';
import { ARCHETYPES } from '../rules-constants/archetypes';

// Default 3 is 8 start / the four abilities + initial 1 of all abilities
function calculateHealthByArchetype(type: Archetype, str: number = 3): number {
  switch (type) {
    case 'Martial':
      return ARCHETYPES[type].baseHealth + str;
    case 'Control':
      return ARCHETYPES[type].baseHealth + str;
    case 'Defender':
      return ARCHETYPES[type].baseHealth + str;
    case 'Spellcaster':
      return ARCHETYPES[type].baseHealth + str;
  }
}

function healthDivisionCalculation(total: number): number[] {
  const base = Math.floor(total / 5);
  const remainder = total % 5;

  // Start with 5 parts with the base number
  const parts: number[] = new Array(5).fill(base);

  // Distribute the remainder to the first few piles
  for (let i = 0; i < remainder; i++) {
    parts[i]++;
  }

  return parts;
}

export { calculateHealthByArchetype, healthDivisionCalculation };
