import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../../store/useCharacterStore';

type EquipmentDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function EquipmentData({ characterId }: EquipmentDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <View style={{ width: screenWidth }}>
      <Text>Equipment and Gold</Text>
    </View>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
