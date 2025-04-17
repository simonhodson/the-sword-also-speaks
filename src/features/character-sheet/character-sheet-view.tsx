import React from 'react';
import { FlatList, View, Dimensions, Text } from 'react-native';
import SkillsData from './components/skills/skills-data';
import { DetailsAbiltiesCombinedData } from './components/details-attributes/details-abilities-view';

type CharacterSheetViewProps = { characterId?: string };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ characterId }: CharacterSheetViewProps) {

  const { width: screenWidth } = Dimensions.get('window');


  if (characterId) {
    const subScreens = [
      { key: 'character-abilities', content: <DetailsAbiltiesCombinedData characterId={characterId} /> },
      { key: 'skills', content: <SkillsData characterId={characterId} /> },
    ];

    return (
      <View>
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
  }

  return <View><Text>Loading...</Text></View>
};

export { CharacterSheetView };