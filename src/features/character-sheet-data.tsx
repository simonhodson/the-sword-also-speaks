import React from 'react';
import { CharacterSheetView } from './character-sheet.view';
import { CharacterDetails } from './types/character-details.types';
import { AbilityScores } from './types/ability-score-types';

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function CharacterSheetData() {
  const characterDetails: CharacterDetails = {
    name: 'Milly Bobby-Brown',
    species: 'Dwarf',
    archetype: 'Martial',
    currentLevel: 0
  }

  const abilityScores: AbilityScores = {
    strength: { suit: 'Clubs', total: 0 },
    agility: { suit: 'Spades', total: 0 },
    intelligence: { suit: 'Diamonds', total: 0 },
    charisma: { suit: 'Hearts', total: 0}
  }

  return (
    <CharacterSheetView
      characterDetails={characterDetails}
      abilityScores={abilityScores}
    />
  )
}