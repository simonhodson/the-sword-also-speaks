import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../../store/useCharacterStore';

type PerksDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function PerksData({ characterId }: PerksDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <ScrollView style={{ width: screenWidth }}>
      <View>
        <Text>PERKS WILL LIST AS A PER PERK CARD</Text>
      </View>
    </ScrollView>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
