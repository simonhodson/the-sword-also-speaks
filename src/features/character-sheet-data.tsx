import React from 'react';
import { CharacterSheetView } from './character-sheet.view';
import { CharacterDetails } from './types/character-details.types';
import { AbilityScores } from './types/ability-score-types';
import { Skills } from './types/skills-types';

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
    charisma: { suit: 'Hearts', total: 0 }
  }

  const skills: Skills = {
    acrobatics: { suit: 'Spades', rank: 0 },
    arcana: { suit: 'Diamonds', rank: 0 },
    athletics: { suit: 'Clubs', rank: 0 },
    bluff: { suit: 'Hearts', rank: 0 },
    charm: { suit: 'Hearts', rank: 0 },
    hide: { suit: 'Spades', rank: 0 },
    history: { suit: 'Diamonds', rank: 0 },
    insight: { suit: 'Hearts', rank: 0 },
    intimidate: { suit: 'Hearts', rank: 0 },
    investigation: { suit: 'Diamonds', rank: 0 },
    legerdemain: { suit: 'Spades', rank: 0 },
    mechanism: { suit: 'Diamonds', rank: 0 },
    medicine: { suit: 'Diamonds', rank: 0 },
    nature: { suit: 'Diamonds', rank: 0 },
    perception: { suit: 'Hearts', rank: 0 },
    perform: { suit: 'Hearts', rank: 0 },
    religion: { suit: 'Diamonds', rank: 0 },
    research: { suit: 'Diamonds', rank: 0 },
    scuttlebutt: { suit: 'Hearts', rank: 0 },
    spellcasting: { suit: 'Diamonds', rank: 0 },
    survival: { suit: 'Spades', rank: 0 },
  }

  return (
    <CharacterSheetView
      characterDetails={characterDetails}
      abilityScores={abilityScores}
      skills={skills}
    />
  )
}