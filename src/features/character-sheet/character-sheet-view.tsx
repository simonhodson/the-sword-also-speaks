import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { FlatList, StatusBar, useWindowDimensions, View } from 'react-native';

import { ExitButton } from '../../common/';
import { useCharacterStore } from '../../store/useCharacterStore';
import { DetailsAbilitiesCombinedData } from './components/character-sheet-carousel/details-views/details-abilities-view';
import SkillsData from './components/character-sheet-carousel/skills/skills-data';
import { CharacterSubHeaderView } from './components/character-sub-header-view';

type CharacterSheetViewProps = { characterId: string; goBack: () => void };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ characterId, goBack }: CharacterSheetViewProps) {
  const navigation = useNavigation();
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();
  const character = useCharacterStore((state) =>
    state.characters.find((c) => c.id === characterId),
  );

  const exitButton = useCallback(
    () => <ExitButton onExit={goBack} />,
    [goBack],
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: character?.details.name,
      headerLeft: exitButton,
    });
  }, [character, navigation, exitButton]);

  const subScreens = [
    {
      key: 'character-abilities',
      content: <DetailsAbilitiesCombinedData characterId={characterId} />,
    },
    { key: 'skills', content: <SkillsData characterId={characterId} /> },
  ];

  return (
    <View>
      <StatusBar barStyle='light-content' />
      {character ? (
        <CharacterSubHeaderView
          currentHealth={character.health.currentHealth}
          currentFatigue={character.health.currentFatigue}
          screenHeight={screenHeight}
          characterId={character.id}
          maxHealth={character.health.totalHealth}
          speed={character.actionStats.speedScore}
          initiative={character.actionStats.initiative}
          aces={character.actionStats.basesAces}
        />
      ) : (
        false
      )}
      <FlatList
        horizontal
        pagingEnabled
        snapToInterval={screenWidth}
        showsHorizontalScrollIndicator={false}
        data={subScreens}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return item.content;
        }}
        decelerationRate='normal'
        bounces={false} // helps reduce 'over pull' on iOS
        overScrollMode='never' // Android: avoid rubber-banding
        scrollEventThrottle={30}
        disableIntervalMomentum={true} // This one helps a lot
      />
    </View>
  );
}

export { CharacterSheetView };
