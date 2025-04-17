import React from 'react';
import { View, Dimensions, Text } from 'react-native';

import { SkillsView } from './skills-view';
import { useCharacterStore } from '../../../../store/useCharcterStore';

type SkillDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function SkillsData({ characterId  }: SkillDataProps) {

    const { width: screenWidth } = Dimensions.get('window');
    const character = useCharacterStore(state => state.getCharacterById(characterId))

  return (
    character ? (<View style={{ width: screenWidth }}>
      <SkillsView skills={character.skills} />
    </View>) : (
      <View><Text>Loading...</Text></View>
    )
    
  )
}