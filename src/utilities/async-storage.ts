import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '../features/character-sheet/types/character-sheet-types';

const CHARACTERS_KEY = 'CHARACTERS_STORE';

export const saveCharacters = async (characters: Character[]) => {
  try {
    const json = JSON.stringify(characters);
    await AsyncStorage.setItem(CHARACTERS_KEY, json);
  } catch (error) {
    console.error('Error saving characters', error);
  }
};

export const loadCharacters = async (): Promise<Character[] | null> => {
  try {
    const json = await AsyncStorage.getItem(CHARACTERS_KEY);
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.error('Error loading characters', error);
    return null;
  }
};

