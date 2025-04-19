import { nanoid } from 'nanoid/non-secure';
import { Archetype, Character, Species } from "../features/character-sheet/types/character-sheet-types";
import { calculateHealthByArchetype } from '../utilities/character-creation-utils';
import { AbilityScores, AbilityScoresInitialValues } from '../features/character-sheet/types/ability-score-types';
import { ActionStats } from '../features/character-sheet/types/action-stats-types';


export default function createNewCharacter(
  name: string = 'Your Name',
  species: Species = 'Dwarf',
  archetype: Archetype = 'Martial',
  abilityInitials?: AbilityScoresInitialValues,
  levelOverride?: number
): Character {
  const date = new Date();

  const abilityScores: AbilityScores = {
    strength: { suit: 'Clubs', total: abilityInitials?.strength ?? 2 },
    agility: { suit: 'Spades', total: abilityInitials?.agility ?? 2 },
    intelligence: { suit: 'Diamonds', total: abilityInitials?.intelligence ?? 2 },
    charisma: { suit: 'Hearts', total: abilityInitials?.charisma ?? 2 },
  }

  const totalHealth = calculateHealthByArchetype(archetype, abilityScores.strength.total);

  const actionStats: ActionStats = {
    // Base 25 + 5 for each agility rank
    speedScore: 25 + (abilityScores.agility.total * 5),
    // Value of Charisma rank / 2 rounded down
    initiative: { suit: 'Hearts', rank: Math.floor(abilityScores.charisma.total / 2)},
    // Base is one for all character, there are special rules for some later
    basesAces: 1
  }

 return  {
    id: nanoid(),
    dateCreated: date.toISOString(),
    abilityScores: abilityScores,
    actionStats: {
      speedScore: 0,
      initiative: {
        suit: 'Hearts',
        rank: 1
      },
      basesAces: 1
    },
    armourStats: {
      head: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      torso: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      crotch: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      arms: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      legs: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
    },
    currency: {
      gold: 100
    },
    defenses: {
      dodge: 0,
      fortitude: 0,
      will: 0,
      instinct: 0
    },
    details: {
      name,
      species: species,
      archetype: archetype,
      currentLevel: levelOverride ?? 1
    },
    equipment: [],
    health: {
      totalHealth: totalHealth,
      currentHealth: totalHealth,
      currentFatigue: 0,
      head: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      torso: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      crotch: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      arms: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
      legs: {
        total: 0,
        armour: '',
        max: 0,
        current: 0
      },
    },
    minorSkills: [],
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
    specialBonuses: {},
    weapons: []
  };
}