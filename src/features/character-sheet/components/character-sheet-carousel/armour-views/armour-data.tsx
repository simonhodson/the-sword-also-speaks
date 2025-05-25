import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../../store/useCharacterStore';
import { ArmourView } from './armour-view';

type ArmourDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function ArmourData({ characterId }: ArmourDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <ScrollView style={{ width: screenWidth }}>
      <ArmourView
        onPressEdit={() => console.log('Armour -- ')}
        armour={character.armour}
      />
    </ScrollView>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
