import { create } from 'zustand';

import { AbilityScores } from '../features/character-sheet/types/ability-score-types';
import { CharacterDetails } from '../features/character-sheet/types/character-details.types';
import { Character } from '../features/character-sheet/types/character-sheet-types';
import { Health } from '../features/character-sheet/types/health-types';
import { loadCharacters, saveCharacters } from '../utilities/async-storage';

type CharacterStore = {
  characters: Character[];
  addNewCharacter: (character: Character) => void;
  getCharacterById: (id: string) => Character | undefined;
  updateCharacterDetails: (
    id: string,
    newDetails: Partial<CharacterDetails>,
  ) => void;
  updateCharacterHealth: (id: string, newHealth: Partial<Health>) => void;
  updateCharacterAbilityScores: (
    id: string,
    newDetails: Partial<AbilityScores>,
  ) => void;
  deleteCharacter: (id: string) => void;
  hydrate: () => void;
};

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [],

  addNewCharacter: (character: Character) => {
    set((state) => ({
      characters: [...state.characters, character],
    }));
    // Save to storage
    saveCharacters(get().characters);
  },
  getCharacterById: (id: string) => {
    return get().characters.find((char) => char.id === id);
  },
  updateCharacterDetails: (id, newDetails) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id
          ? {
              ...char,
              details: {
                ...char.details,
                ...newDetails,
              },
            }
          : char,
      ),
    }));
    // Save to storage
    saveCharacters(get().characters);
  },
  updateCharacterAbilityScores: (id, newDetails) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id
          ? {
              ...char,
              abilityScores: {
                ...char.abilityScores,
                ...newDetails,
              },
            }
          : char,
      ),
    }));
    saveCharacters(get().characters);
  },
  updateCharacterHealth: (id, newHealth) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id
          ? {
              ...char,
              health: {
                ...char.health,
                ...newHealth,
              },
            }
          : char,
      ),
    }));
    //save to storage
    saveCharacters(get().characters);
  },
  deleteCharacter: (id: string) => {
    set((state) => {
      const updatedCharacters = state.characters.filter((c) => c.id !== id);
      // Save immediately after updating
      saveCharacters(updatedCharacters);
      return { characters: updatedCharacters };
    });
  },
  hydrate: async () => {
    const saved = await loadCharacters();
    if (saved) {
      set({ characters: saved });
    }
  },
}));
