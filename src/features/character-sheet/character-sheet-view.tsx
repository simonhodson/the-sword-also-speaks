import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import SkillsData from './components/skills/skills-data';
import { DetailsAbiltiesCombinedData } from './components/details-attributes/details-abilities-view';

type CharacterSheetViewProps = { id: string };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ id }: CharacterSheetViewProps) {

  const { width: screenWidth } = Dimensions.get('window');

  const subScreens = [
    { key: 'character-abilities', content: <DetailsAbiltiesCombinedData id={id} /> },
    { key: 'skills', content: <SkillsData id={id} /> },
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
          return(item.content)
        }}
         decelerationRate="fast"
      />
    </View>
  );
};

export { CharacterSheetView };