import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EditDetailsNavigationProp } from '../../../../navigation/root-stack';
import { CharacterDetailsView } from '../../components/details-attributes/character-details-view';
import { AbilityScoresView } from '../../components/details-attributes/ability-scores-view';
import { useCharacterStore } from '../../../../store/useCharacterStore';

type DetailsAbilitiesCombinedDataProps = { characterId: string };
/**
 * Data is responsible for creating, storing, fetching data for views
 */
function DetailsAbilitiesCombinedData({ characterId }: DetailsAbilitiesCombinedDataProps) {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { width: screenWidth } = Dimensions.get('window');

  const character = useCharacterStore(
    state => state.characters.find((c) => c.id === characterId)
  );

  function onPressEdit() {
    if (characterId) {
      navigation.navigate('EditDetails', { characterId })
    }
    // What happens if not?
  }

  return (
    character ? (<View style={{ width: screenWidth }}>
      <CharacterDetailsView
        characterDetails={character.details}
        onPressEdit={onPressEdit}
      />
      <View style={{ margin: 5 }} />
      <AbilityScoresView abilityScores={character.abilityScores} />
    </View>) : (
        <View style={{ width: screenWidth }}>
          <Text>Loading...</Text>
        </View>
    )
  )
};

export { DetailsAbilitiesCombinedData };