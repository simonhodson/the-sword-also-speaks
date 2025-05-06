import type { PropsWithChildren } from 'react';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TornPaperBox } from '../../../../../common';
import { Weapon } from '../../../types/weapon-types';

type WeaponsView = PropsWithChildren<{
  weapons: Weapon[];
  onPressEdit: (direction: 'defenses' | 'abilities') => void;
}>;

function WeaponsView({ weapons, onPressEdit }: WeaponsView) {
  // function renderDetails() {
  //   const entries = Object.entries(weapons) as [DefensesKey, number][];

  //   return entries.map(([key, value]) => {
  //     return (
  //       <View style={styles.statRow} key={key}>
  //         <Text style={styles.text}>{`${defensesDisplayText[key]}`}</Text>
  //         <Text style={styles.text}>{value}</Text>
  //       </View>
  //     );
  //   });
  // }

  return (
    <TornPaperBox>
      <View style={styles.topRow}>
        <Pressable
          onPress={() => onPressEdit('defenses')}
          style={{ alignItems: 'flex-end' }}
        >
          <Icon name='edit' size={26} />
        </Pressable>
      </View>
      <View style={styles.statRow}>
        <Text style={styles.heavyText}>Weapons Equipped</Text>
      </View>
    </TornPaperBox>
  );
}

const styles = StyleSheet.create({
  topRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  heavyText: {
    fontFamily: 'Gaegu-Bold',

    fontSize: 26,
    paddingBottom: 2,
  },
  text: {
    fontFamily: 'Gaegu-Regular',
    fontSize: 26,
    marginBottom: 5,
  },
});

export { WeaponsView };
