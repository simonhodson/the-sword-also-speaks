import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CharacterSheetView } from './character-sheet.view';
import { CharacterDetails } from './types/character-details.types';
import { AbilityScores } from './types/ability-score-types';
import { EditDetailsNavigationProp } from '../../navigation/root-stack';

const characterDetails: CharacterDetails = {
  name: 'Milly Bobby-Brown',
  species: 'Dwarf',
  archetype: 'Martial',
  currentLevel: 0
}

const abilityScores: AbilityScores = {
  strength: { suit: 'Clubs', total: 0 },
  agility: { suit: 'Spades', total: 0 },
  intelligence: { suit: 'Diamonds', total: 0 },
  charisma: { suit: 'Hearts', total: 0 }
}

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function CharacterSheetData() {
  const navigation = useNavigation<EditDetailsNavigationProp>();

  const [details, setDetails] = useState<CharacterDetails>(characterDetails);

  const { width: screenWidth } = Dimensions.get('window');



function editDetails() {
  navigation.navigate('EditDetails', {
    currentDetails: characterDetails,
    setDetails
  });
}


  return (
    <View style={{ width: screenWidth }}>
      <CharacterSheetView
        characterDetails={details}
        abilityScores={abilityScores}
        editDetails={editDetails}
      />
    </View>
  )
}