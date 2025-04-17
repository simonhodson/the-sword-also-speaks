import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CharacterDetails } from '../../types/character-details.types';
import { AbilityScores } from '../../types/ability-score-types';
import { EditDetailsNavigationProp } from '../../../../navigation/root-stack';
import { CharacterDetailsView } from '../../components/details-attributes/character-details-view';
import { AbilityScoresView } from '../../components/details-attributes/ability-scores-view';

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


type DetailsAbiltiesCombinedDataProps = { id: string };
/**
 * Data is responsible for creating, storing, fetching data for views
 */
function DetailsAbiltiesCombinedData({ id }: DetailsAbiltiesCombinedDataProps) {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { width: screenWidth } = Dimensions.get('window');

  function onPressEdit() {
    navigation.navigate('EditDetails', { id })
  }

  return (
    <View style={{ width: screenWidth }}>
        <CharacterDetailsView
          characterDetails={characterDetails}
        />
        <View style={{ margin: 5 }}/>
        <AbilityScoresView abilityScores={abilityScores} />
    </View>
  )
}

export { DetailsAbiltiesCombinedData };