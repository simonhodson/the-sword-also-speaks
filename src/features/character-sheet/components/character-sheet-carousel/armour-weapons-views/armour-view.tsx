import type { PropsWithChildren } from 'react';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TornPaperBox } from '../../../../../common';
import { ArmourEquipped } from '../../../types/armour-types';

type ArmourView = PropsWithChildren<{
  armour: ArmourEquipped;
  onPressEdit: (direction: 'defenses' | 'abilities') => void;
}>;

function ArmourView({ armour, onPressEdit }: ArmourView) {
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
        <Text style={styles.heavyText}>Armour Equipped</Text>
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

export { ArmourView };
