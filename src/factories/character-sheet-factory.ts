import { nanoid } from 'nanoid/non-secure';
import { Character } from "../features/character-sheet/types/character-sheet-types";

// Add options to this funciton for the anitial setup
// details: Omit<CharacterDetails, 'id'>
export default function createNewCharacter(): Character {
  const date = new Date();
  return {
    id: nanoid(),
    dateCreated: date.toISOString(),
    details: {
      name: 'Your Name Here',
      species: 'Gnome',
      archetype: 'Martial',
      currentLevel: 1
    },
    abilityScores: {
      strength: { suit: 'Clubs', total: 0 },
      agility: { suit: 'Spades', total: 0 },
      intelligence: { suit: 'Diamonds', total: 0 },
      charisma: { suit: 'Hearts', total: 0 },
    },
    skills: {
      acrobatics: { suit: 'Spades', rank: 1},
      arcana: { suit: 'Diamonds', rank: 1},
      athletics: { suit: 'Clubs', rank: 1},
      bluff: { suit: 'Hearts', rank: 1},
      charm: { suit: 'Hearts', rank: 1},
      hide: { suit: 'Spades', rank: 1},
      history: { suit: 'Diamonds', rank: 1},
      insight: { suit: 'Hearts', rank: 1},
      intimidate: { suit: 'Hearts', rank: 1},
      investigation: { suit: 'Diamonds', rank: 1},
      legerdemain: { suit: 'Spades', rank: 1},
      mechanism: { suit: 'Diamonds', rank: 1},
      medicine: { suit: 'Diamonds', rank: 1},
      nature: { suit: 'Diamonds', rank: 1},
      perception: { suit: 'Hearts', rank: 1},
      perform: { suit: 'Hearts', rank: 1},
      religion: { suit: 'Diamonds', rank: 1},
      research: { suit: 'Diamonds', rank: 1},
      scuttlebutt: { suit: 'Hearts', rank: 1},
      spellcasting: { suit: 'Diamonds', rank: 1},
      survival: { suit: 'Spades', rank: 1},
    },
    specialBonuses: {
      test: 'testing'
    }
  }
}