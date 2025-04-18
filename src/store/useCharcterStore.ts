import { create } from 'zustand';
import { CharacterDetails } from "../features/character-sheet/types/character-details.types";
import { Character } from '../features/character-sheet/types/character-sheet-types';
import { loadCharacters, saveCharacters } from '../utilities/async-storage';

type CharacterStore = {
  characters: Character[];
  currentCharacter: Character | undefined;
  addNewCharacter: (character: Character) => void;
  getCharacterById: (id: string) => Character | undefined;
  updateCharacterDetails: (id: string, newDetails: Partial<CharacterDetails>) => void;
  hydrate: () => void
};

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [],
  currentCharacter: undefined,

  addNewCharacter: (character: Character) => {
    set((state) => ({
      characters: [...state.characters, character]
    }))
    // Save to storage
    saveCharacters(get().characters);
  },
  getCharacterById: (id: string) => {
    return get().characters.find((char) => char.id === id);
  },
  updateCharacterDetails: (id, newDetails) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id ? {
          ...char,
          details: {
            ...char.details,
            ...newDetails
          }
        } : char
      ),
    }));
    // Save to storage
    saveCharacters(get().characters);
  },

  hydrate: async () => {
    const saved = await loadCharacters();
    if (saved) {
      set({ characters: saved });
    }
  },
}));
