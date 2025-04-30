import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import {
  EditAbilitiesNavigationProp,
  EditDefensesNavigationProp,
  EditDetailsNavigationProp,
} from '../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import { AbilityScoresView } from './details-views/ability-scores-view';
import { CharacterDetailsView } from './details-views/character-details-view';
import { DefensesView } from './details-views/defenses-view';

type CarouselInitialViewProps = { characterId: string };

function CarouselInitialView({ characterId }: CarouselInitialViewProps) {
  const navigation = useNavigation<
    | EditDefensesNavigationProp
    | EditAbilitiesNavigationProp
    | EditDetailsNavigationProp
  >();
  const { width: screenWidth } = Dimensions.get('window');

  const character = useCharacterStore((state) =>
    state.characters.find((c) => c.id === characterId),
  );

  function onPressEdit(direction: 'details' | 'abilities' | 'defenses') {
    if (!characterId) return;

    switch (direction) {
      case 'details':
        navigation.navigate('EditDetails', { characterId });
        break;
      case 'abilities':
        navigation.navigate('EditAbilities', { characterId });
        break;
      case 'defenses':
        navigation.navigate('EditDefenses', { characterId });
        break;
      // Add more cases as needed
      default:
        break;
    }
  }

  return character ? (
    <ScrollView style={{ width: screenWidth }}>
      <DefensesView defenses={character.defenses} onPressEdit={onPressEdit} />
      <AbilityScoresView
        abilityScores={character.abilityScores}
        onPressEdit={onPressEdit}
      />
      <CharacterDetailsView
        characterDetails={character.details}
        onPressEdit={onPressEdit}
      />
    </ScrollView>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}

export { CarouselInitialView };
