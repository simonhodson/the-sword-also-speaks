import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import { useCharacterStore } from '../../../../../store/useCharacterStore';
import { WeaponsView } from './weapons-view';

type WeaponsDataProps = { characterId: string };

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function WeaponsData({ characterId }: WeaponsDataProps) {
  const { width: screenWidth } = Dimensions.get('window');
  const character = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  return character ? (
    <View style={{ width: screenWidth }}>
      {character.weapons.map((weapon, i) => (
        <WeaponsView
          onPressEdit={() => console.log('Weapon -- ', i)}
          weapon={weapon}
        />
      ))}
    </View>
  ) : (
    <View style={{ width: screenWidth }}>
      <Text>Loading...</Text>
    </View>
  );
}
