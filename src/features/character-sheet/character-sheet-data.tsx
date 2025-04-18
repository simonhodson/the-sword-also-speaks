import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EditDetailsNavigationProp } from '../../navigation/root-stack';
import { CharacterSheetView } from './character-sheet-view';
import { Character } from './types/character-sheet-types';
import createNewCharacter from '../../factories/character-sheet-factory';
import { useCharacterStore } from '../../store/useCharcterStore';


/**
 * Responsible for creating characters or retrieving stored ones
 */
export default function CharacterSheetData() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { width: screenWidth } = Dimensions.get('window');

  const addCharacter = useCharacterStore(state => state.addNewCharacter);

  console.log('Initial start...')

  const initialCharacter = createNewCharacter();
  addCharacter(initialCharacter);

  return (
      initialCharacter && initialCharacter.id ? (<View style={{ width: screenWidth }}>
        <CharacterSheetView characterId={initialCharacter.id}/>
    </View>) : (
      <View>
          <Text>Loading View...</Text>
      </View>
    )
  )
}