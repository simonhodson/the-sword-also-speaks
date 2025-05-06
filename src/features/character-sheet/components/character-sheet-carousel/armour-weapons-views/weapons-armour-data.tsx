import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../../store/useCharacterStore';
import { ArmourView } from './armour-view';
import { WeaponsView } from './weapons-view';

type WeaponsArmourDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function WeaponsArmourData({
  characterId,
}: WeaponsArmourDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <ScrollView style={{ width: screenWidth }}>
      <WeaponsView
        onPressEdit={() => console.log('Armour')}
        weapons={character.weapons}
      />
      <ArmourView
        onPressEdit={() => console.log('Armour')}
        armour={character.armour}
      />
    </ScrollView>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
