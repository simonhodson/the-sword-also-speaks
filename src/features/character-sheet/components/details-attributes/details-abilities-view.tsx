import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EditDetailsNavigationProp } from '../../../../navigation/root-stack';
import { CharacterDetailsView } from '../../components/details-attributes/character-details-view';
import { AbilityScoresView } from '../../components/details-attributes/ability-scores-view';
import { useCharacterStore } from '../../../../store/useCharcterStore';

type DetailsAbiltiesCombinedDataProps = { characterId: string };
/**
 * Data is responsible for creating, storing, fetching data for views
 */
function DetailsAbiltiesCombinedData({ characterId }: DetailsAbiltiesCombinedDataProps) {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore(state => state.getCharacterById(characterId))

  function onPressEdit() {
    navigation.navigate('EditDetails', { characterId })
  }

  return (
    character ? (<View style={{ width: screenWidth }}>
      <CharacterDetailsView
        characterDetails={character.details}
      />
      <View style={{ margin: 5 }} />
      <AbilityScoresView abilityScores={character.abilityScores} />
    </View>) : (
      <View><Text>Loading...</Text></View>
    )
  )
};

export { DetailsAbiltiesCombinedData };