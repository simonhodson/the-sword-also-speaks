import { create } from 'zustand';
import { CharacterDetails } from "../features/character-sheet/types/character-details.types";
import { Character } from '../features/character-sheet/types/character-sheet-types';

type CharacterStore = {
  characters: Character[];
  addNewCharacter: (character: Character) => void;
  getCharacterById: (id: string) => Character | undefined;
  updateCharacterDetails: (id: string, newDetails: Partial<CharacterDetails>) => void;
};

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [],
  addNewCharacter: (character: Character) => {
    set((state) => ({
      characters: [...state.characters, character]
    }))
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
  },
}));
