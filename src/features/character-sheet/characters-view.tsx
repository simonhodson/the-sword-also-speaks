import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import { CharactersStack } from '../../navigation/characters-stack';
import CharacterSheetData from './character-sheet-data';
import { AbilityScoresView } from './components/ability-scores-view';
import SkillsData from '../skills/skills-data';


// Characters Data Sheet for now
// this will be the Characters screen listing all characters saved
export default function CharactersView() {

  const { width: screenWidth } = Dimensions.get('window');

  const subScreens = [
    { key: 'character-abilities', content: <CharacterSheetData /> },
    { key: 'skills', content: <SkillsData /> },
  ];

  return (
    <View style={{ flex: 1 }}>
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
