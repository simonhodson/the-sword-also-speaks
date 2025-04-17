import { create } from 'zustand';
import { CharacterDetails } from "../features/character-sheet/types/character-details.types";
import { Character } from '../features/character-sheet/types/character-sheet-types';

type CharacterStore = {
  characters: Character[];
  getCharacterById: (id: string) => Character | undefined;
  updateCharacterDetails: (id: string, newDetails: Partial<CharacterDetails>) => void;
};

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [];

  getCharacterById: (id) => {
    return get().characters.find((char) => char.id === id);
  },

  updateCharacter: (id, newDetails) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id ? { ...char, ...newDetails } : char
      ),
    }));
  },
}));