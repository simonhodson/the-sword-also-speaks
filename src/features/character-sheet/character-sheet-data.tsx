import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EditDetailsNavigationProp } from '../../navigation/root-stack';
import { CharacterSheetView } from './character-sheet-view';
import { Character } from './types/character-sheet-types';
import createNewCharacter from '../../factories/character-sheet-factory';


/**
 * Responsible for creating characters or retrieving stored ones
 */
export default function CharacterSheetData() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { width: screenWidth } = Dimensions.get('window');

  const [character, setCharacter] = useState<Character | undefined>(undefined);

  useEffect(() => {
    const initialCharacter = createNewCharacter();
    setCharacter(initialCharacter);
    console.log('Starting.... ', initialCharacter)
  }, []);

  return (
    <View style={{ width: screenWidth }}>
        <CharacterSheetView characterId={character?.id}/>
    </View>
  )
}