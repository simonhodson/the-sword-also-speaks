import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import {
  EditAbilitiesNavigationProp,
  EditDefensesNavigationProp,
} from '../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import { AbilityScoresView } from './details-views/ability-scores-view';
import { DefensesView } from './details-views/defenses-view';

type CarouselInitialViewProps = { characterId: string };

function CarouselInitialView({ characterId }: CarouselInitialViewProps) {
  const navigation = useNavigation<
    EditDefensesNavigationProp | EditAbilitiesNavigationProp
  >();
  const { width: screenWidth } = Dimensions.get('window');

  const character = useCharacterStore((state) =>
    state.characters.find((c) => c.id === characterId),
  );

  function onPressEdit(direction: 'defenses' | 'abilities') {
    if (characterId) {
      direction === 'defenses'
        ? navigation.navigate('EditDefenses', { characterId })
        : navigation.navigate('EditAbilities', { characterId });
    }
    // What happens if not?
  }

  return character ? (
    <View style={{ width: screenWidth }}>
      <DefensesView defenses={character.defenses} onPressEdit={onPressEdit} />
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

export { CarouselInitialView };
