import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

import {
  EditAbilitiesNavigationProp,
  EditDefensesNavigationProp,
  EditDetailsNavigationProp,
} from '../../../../navigation/root-stack';
import { useAppStore } from '../../../../store/useAppStore';
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

  const { showHeaderBar, shouldShowHeaderBar } = useAppStore((state) => state);

  const [yPos, setYPos] = useState(0);

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
      default:
        break;
    }
  }

  const nativeScroll = Gesture.Native()
    // Start is greater than end they are scrolling up

    .onStart((state) => {
      runOnJS(setYPos)(state.y);
    })
    .onEnd((state) => {
      if (yPos > state.y) {
        console.log('Scrolling up');
        runOnJS(shouldShowHeaderBar)(false);
      } else {
        console.log('Scrolling down');
        runOnJS(shouldShowHeaderBar)(true);
      }
    });

  return character ? (
    <GestureDetector gesture={nativeScroll}>
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
    </GestureDetector>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}

export { CarouselInitialView };
