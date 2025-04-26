import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import {
  EditAbilitiesNavigationProp,
  EditDetailsNavigationProp,
} from '../../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../../store/useCharacterStore';
import { AbilityScoresView } from './ability-scores-view';
import { CharacterDetailsView } from './character-details-view';

type DetailsAbilitiesCombinedDataProps = { characterId: string };
/**
 * Data is responsible for creating, storing, fetching data for views
 */
function DetailsAbilitiesCombinedData({
  characterId,
}: DetailsAbilitiesCombinedDataProps) {
  const navigation = useNavigation<
    EditDetailsNavigationProp | EditAbilitiesNavigationProp
  >();
  const { width: screenWidth } = Dimensions.get('window');

  const character = useCharacterStore((state) =>
    state.characters.find((c) => c.id === characterId),
  );

  function onPressEdit(direction: 'details' | 'abilities') {
    if (characterId) {
      direction === 'details'
        ? navigation.navigate('EditDetails', { characterId })
        : navigation.navigate('EditAbilities', { characterId });
    }
    // What happens if not?
  }

  return character ? (
    <View style={{ width: screenWidth }}>
      <CharacterDetailsView
        characterDetails={character.details}
        onPressEdit={onPressEdit}
      />
      <View style={{ margin: 5 }} />
      <AbilityScoresView
        abilityScores={character.abilityScores}
        onPressEdit={onPressEdit}
      />
    </View>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}

export { DetailsAbilitiesCombinedData };
