import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../store/useCharacterStore';
import { SkillsView } from './skills-view';

type SkillDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function SkillsData({ characterId }: SkillDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <View style={{ width: screenWidth }}>
      <SkillsView skills={character.skills} />
    </View>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
