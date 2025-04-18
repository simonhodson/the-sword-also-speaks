import React, { useEffect } from 'react';
import { FlatList, View, useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SkillsData from './components/skills/skills-data';
import { DetailsAbiltiesCombinedData } from './components/details-attributes/details-abilities-view';
import { CharacterSubHeaderView } from './components/details-attributes/charcter-sub-header-view';
import ExitButton from '../../common/components/exit-button-view';

type CharacterSheetViewProps = { characterId: string, charName: string; goBack: () => void };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ characterId, goBack, charName }: CharacterSheetViewProps) {
  const navigation = useNavigation();
  const { width: screenWidth , height: screenHeight } = useWindowDimensions();

  useEffect(() => {
    if (charName) {
      navigation.setOptions({
        headerTitle: charName,
        headerLeft: () => (<ExitButton onExit={goBack} />),
      })
    }
  },[])

  const subScreens = [
    { key: 'character-abilities', content: <DetailsAbiltiesCombinedData characterId={characterId} /> },
    { key: 'skills', content: <SkillsData characterId={characterId} /> },
  ];

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <CharacterSubHeaderView goBack={goBack} screenHeight={screenHeight} />
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
        decelerationRate="fast"
      />
    </View>
  )
};

export { CharacterSheetView };