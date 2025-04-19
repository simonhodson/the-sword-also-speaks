import React, { useEffect } from 'react';
import { FlatList, View, useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SkillsData from './components/skills/skills-data';
import { DetailsAbilitiesCombinedData } from './components/details-attributes/details-abilities-view';
import { CharacterSubHeaderView } from './components/details-attributes/charcter-sub-header-view';
import ExitButton from '../../common/components/exit-button-view';
import { useCharacterStore } from '../../store/useCharacterStore';

type CharacterSheetViewProps = { characterId: string, goBack: () => void };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ characterId, goBack }: CharacterSheetViewProps) {
  const navigation = useNavigation();
  const { width: screenWidth , height: screenHeight } = useWindowDimensions();
  const character = useCharacterStore(state => state.characters.find(c => c.id === characterId));

  useEffect(() => {
      navigation.setOptions({
        headerTitle: character?.details.name,
        headerLeft: () => (<ExitButton onExit={goBack} />),
      })
  },[character]);

  const subScreens = [
    { key: 'character-abilities', content: <DetailsAbilitiesCombinedData characterId={characterId} /> },
    { key: 'skills', content: <SkillsData characterId={characterId} /> },
  ];

  return (
    <View>
      <StatusBar barStyle="light-content" />
      {character ? (<CharacterSubHeaderView
        currentHealth={character.health.currentHealth}
        currentFatigue={character.health.currentFatigue}
        screenHeight={screenHeight}
        characterId={character.id}
        maxHealth={character.health.totalHealth}
        speed={character.actionStats.speedScore}
        initiative={character.actionStats.initiative}
        aces={character.actionStats.basesAces}
      />) : false }
      <FlatList
        horizontal
        pagingEnabled
        snapToInterval={screenWidth}
        showsHorizontalScrollIndicator={false}
        data={subScreens}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (item.content)
        }}
        decelerationRate='normal'
        bounces={false} // helps reduce 'over pull' on iOS
        overScrollMode="never" // Android: avoid rubber-banding
        scrollEventThrottle={30}
        disableIntervalMomentum={true} // This one helps a lot
      />
    </View>
  )
};

export { CharacterSheetView };