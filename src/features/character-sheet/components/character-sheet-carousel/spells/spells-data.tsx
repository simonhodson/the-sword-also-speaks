import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../../store/useCharacterStore';

type SpellsDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function SpellsData({ characterId }: SpellsDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <ScrollView style={{ width: screenWidth }}>
      <View>
        <Text>Spells screen with header and spell cards</Text>
      </View>
    </ScrollView>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
