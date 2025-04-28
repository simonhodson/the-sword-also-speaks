import { nanoid } from 'nanoid/non-secure';

import {
  AbilityScores,
  AbilityScoresInitialValues,
} from '../features/character-sheet/types/ability-score-types';
import { ActionStats } from '../features/character-sheet/types/action-stats-types';
import { ArmourStats } from '../features/character-sheet/types/armour-types';
import {
  Archetype,
  Character,
  Species,
} from '../features/character-sheet/types/character-sheet-types';
import { Health } from '../features/character-sheet/types/health-types';
import {
  calculateHealthByArchetype,
  healthDivisionCalculation,
} from '../utilities/character-creation-utils';

export default function createNewCharacter(
  name: string = 'Your Name',
  species: Species = 'Dwarf',
  archetype: Archetype = 'Martial',
  abilityInitials?: AbilityScoresInitialValues,
  levelOverride?: number,
  initialHealth?: Health,
): Character {
  const date = new Date();

  // THIS AREA SHOULD BE MOVED TO EXTERNAL CONFIGURATION FILE
  const abilityScores: AbilityScores = {
    strength: { suit: 'Clubs', total: abilityInitials?.strength ?? 2 },
    agility: { suit: 'Spades', total: abilityInitials?.agility ?? 2 },
    intelligence: {
      suit: 'Diamonds',
      total: abilityInitials?.intelligence ?? 2,
    },
    charisma: { suit: 'Hearts', total: abilityInitials?.charisma ?? 2 },
  };

  let totalHealth = calculateHealthByArchetype(
    archetype,
    abilityScores.strength.total,
  );

  //Disposable function
  const healthDivided = healthDivisionCalculation(totalHealth);

  const armour: ArmourStats = {
    head: 0,
    torso: 3,
    crotch: 3,
    arms: 0,
    legs: 0,
  };

  Object.entries(armour).forEach(([key, value]) => {
    if (value > 0) {
      console.log(`Armour ${key} is ${value}`);
      totalHealth += value;
    }
  });

  const getHealthMax = (total: number, armour: number) => total + armour;

  const headMax = getHealthMax(healthDivided[0], armour.head);
  const torsoMax = getHealthMax(healthDivided[1], armour.torso);
  const crotchMax = getHealthMax(healthDivided[2], armour.crotch);
  const armsMax = getHealthMax(healthDivided[3], armour.arms);
  const legsMax = getHealthMax(healthDivided[4], armour.legs);

  const autoHealth: Health = {
    totalHealth: totalHealth,
    currentHealth: totalHealth,
    currentFatigue: 0,
    head: {
      total: healthDivided[0],
      armour: armour.head,
      max: headMax,
      current: headMax,
    },
    torso: {
      total: healthDivided[1],
      armour: 3,
      max: torsoMax,
      current: torsoMax,
    },
    crotch: {
      total: healthDivided[2],
      armour: 3,
      max: crotchMax,
      current: crotchMax,
    },
    arms: {
      total: healthDivided[3],
      armour: 0,
      max: armsMax,
      current: armsMax,
    },
    legs: {
      total: healthDivided[4],
      armour: 0,
      max: legsMax,
      current: legsMax,
    },
  };

  if (autoHealth.head) {
    const v = autoHealth.head.total + autoHealth.head.armour;
    autoHealth.head.current = v;
    autoHealth.head.max = v;
  }

  if (autoHealth.torso) {
    const v = autoHealth.torso.total + autoHealth.torso.armour;
    autoHealth.torso.current = v;
    autoHealth.torso.max = v;
  }

  if (autoHealth.arms) {
    const v = autoHealth.arms.total + autoHealth.arms.armour;
    autoHealth.arms.current = v;
    autoHealth.arms.max = v;
  }

  if (autoHealth.legs) {
    const v = autoHealth.legs.total + autoHealth.legs.armour;
    autoHealth.legs.current = v;
    autoHealth.legs.max = v;
  }

  if (autoHealth.crotch) {
    const v = autoHealth.crotch.total + autoHealth.crotch.armour;
    autoHealth.crotch.current = v;
    autoHealth.crotch.max = v;
  }

  const actionStats: ActionStats = {
    // Base 25 + 5 for each agility rank
    speedScore: 25 + abilityScores.agility.total * 5,
    // Value of Charisma rank / 2 rounded down
    initiative: {
      suit: 'Hearts',
      rank: Math.floor(abilityScores.charisma.total / 2),
    },
    // Base is one for all character, there are special rules for some later
    basesAces: 1,
  };

  return {
    id: nanoid(),
    dateCreated: date.toISOString(),
    abilityScores: abilityScores,
    actionStats: actionStats,
    // Change this to the simpler form aof armour, INFO not required here
    armourStats: armour,
    currency: {
      gold: 100,
    },
    defenses: {
      dodge: 0,
      fortitude: 0,
      will: 0,
      instinct: 0,
    },
    details: {
      name,
      species: species,
      archetype: archetype,
      currentLevel: levelOverride ?? 1,
    },
    equipment: [],
    health: autoHealth, // Change to initial function argument when appropriate
    minorSkills: [],
    skills: {
      acrobatics: { suit: 'Spades', rank: 1 },
      arcana: { suit: 'Diamonds', rank: 1 },
      athletics: { suit: 'Clubs', rank: 1 },
      bluff: { suit: 'Hearts', rank: 1 },
      charm: { suit: 'Hearts', rank: 1 },
      hide: { suit: 'Spades', rank: 1 },
      history: { suit: 'Diamonds', rank: 1 },
      insight: { suit: 'Hearts', rank: 1 },
      intimidate: { suit: 'Hearts', rank: 1 },
      investigation: { suit: 'Diamonds', rank: 1 },
      legerdemain: { suit: 'Spades', rank: 1 },
      mechanism: { suit: 'Diamonds', rank: 1 },
      medicine: { suit: 'Diamonds', rank: 1 },
      nature: { suit: 'Diamonds', rank: 1 },
      perception: { suit: 'Hearts', rank: 1 },
      perform: { suit: 'Hearts', rank: 1 },
      religion: { suit: 'Diamonds', rank: 1 },
      research: { suit: 'Diamonds', rank: 1 },
      scuttlebutt: { suit: 'Hearts', rank: 1 },
      spellcasting: { suit: 'Diamonds', rank: 1 },
      survival: { suit: 'Spades', rank: 1 },
    },
    specialBonuses: {},
    weapons: [],
  };
}
