import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EditDetailsNavigationProp } from '../../navigation/root-stack';
import { CharacterSheetView } from './character-sheet-view';


/**
 * Responsible for creating characters or retrieving stored ones
 */
export default function CharacterSheetData() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { width: screenWidth } = Dimensions.get('window');


  return (
    <View style={{ width: screenWidth }}>
        <CharacterSheetView id={'test-123'}/>
    </View>
  )
}