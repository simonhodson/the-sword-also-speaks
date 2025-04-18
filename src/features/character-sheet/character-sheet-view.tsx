import React from 'react';
import { FlatList, View, useWindowDimensions, StatusBar, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SkillsData from './components/skills/skills-data';
import { DetailsAbiltiesCombinedData } from './components/details-attributes/details-abilities-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CharacterSubHeaderView } from './components/details-attributes/charcter-sub-header-view';
import { HeaderBackButton } from '@react-navigation/elements';
import { useIsFocused } from '@react-navigation/native'
import ExitButton from '../../common/components/exit-button-view';

const button = () => {
  return (
    <View>
      <Text style={{ color: '#ffff' }}>OI PO</Text>
    </View>
  )
}

type CharacterSheetViewProps = { characterId: string, goBack: () => void };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ characterId, goBack }: CharacterSheetViewProps) {

  const { width: screenWidth , height: screenHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();

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