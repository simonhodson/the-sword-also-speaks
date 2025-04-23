import { Archetype } from "../features/character-sheet/types/character-sheet-types";
import { ArchetypeConst } from "./archetype-const-types";

export const ARCHETYPES: { [K in Archetype]: ArchetypeConst } = {
  Martial: {
    baseHealth: 18,
    weaponRestrictions: [],
    weaponsRestrictionOverride: false,
    armourTypes: [],
    majorityAvailable: true,
    perks: [
      {
        type: 'Martial',
        initialAmount: 3,
        onInit: true,
        onLevel: true,
        maximumRank: undefined
      },
      {
        type: 'Control',
        initialAmount: 0,
        onInit: false,
        onLevel: true,
        maximumRank: 5
      }
    ],
    spells: {
      origin: false,
      available: ['arcane'],
      maximumRank: 5,
      ranksAvailableOnInit: undefined
    }
  },
  Spellcaster: {
    baseHealth: 12,
    weaponRestrictions: ['basic', 'light'],
    weaponsRestrictionOverride: false,
    armourTypes: ['basic', 'light'],
    majorityAvailable: false,
    perks: [
      {
        type: 'Spellcaster',
        initialAmount: 0,
        onInit: true,
        onLevel: true,
        maximumRank: undefined
      },
      {
        type: 'Martial',
        initialAmount: 1,
        onInit: true,
        onLevel: true,
        maximumRank: 5
      },
      {
        type: 'Control',
        initialAmount: 2,
        onInit: true,
        onLevel: true,
        maximumRank: undefined,
      }
    ],
    spells: {
      origin: true,
      available: ['arcane', 'dark', 'faen', 'radiant', 'wild'],
      maximumRank: undefined,
      ranksAvailableOnInit: 4
    },
  },
  Control: {
    baseHealth: 15,
    weaponRestrictions: ['basic'],
    weaponsRestrictionOverride: true,
    armourTypes: ['basic', 'light', 'medium'],
    majorityAvailable: true,
    perks: [
      {
        type: 'Defender',
        initialAmount: 1,
        onInit: true,
        onLevel: false,
        maximumRank: undefined
      },
      {
        type: 'Control',
        initialAmount: 2,
        onInit: true,
        onLevel: true,
        maximumRank: undefined,
      }
    ],
    spells: {
      origin: false,
      available: ['arcane'],
      maximumRank: 5,
      ranksAvailableOnInit: undefined
    }
  },
  Defender: {
    baseHealth: 16,
    weaponRestrictions: ['basic'],
    weaponsRestrictionOverride: true,
    armourTypes: ['basic', 'light', 'medium', 'heavy'],
    majorityAvailable: true,
    perks: [
      {
        type: 'Martial',
        initialAmount: 1,
        onInit: true,
        onLevel: true,
        maximumRank: 5
      },
      {
        type: 'Control',
        initialAmount: 2,
        onInit: true,
        onLevel: true,
        maximumRank: undefined,
      }
    ],
    spells: {
      origin: false,
      available: ['arcane'],
      maximumRank: 5,
      ranksAvailableOnInit: undefined
    }
  }
}