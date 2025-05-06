import type { PropsWithChildren } from 'react';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TornPaperBox } from '../../../../../common';
import {
  ArmourAttributes,
  ArmourEquipped,
  armourStatsDisplayText,
  ArmourStatsKey,
} from '../../../types/armour-types';

type ArmourView = PropsWithChildren<{
  armour: ArmourEquipped;
  onPressEdit: (direction: 'defenses' | 'abilities') => void;
}>;

function ArmourView({ armour, onPressEdit }: ArmourView) {
  function renderDetails() {
    const entries = Object.entries(armour) as [
      ArmourStatsKey,
      ArmourAttributes,
    ][];

    return entries.map(([key, value]) => {
      return (
        <>
          <View style={{ flexDirection: 'row' }} key={key}>
            <Text
              style={styles.heavyText}
            >{`${armourStatsDisplayText[key]}`}</Text>
          </View>
          <View style={styles.statRow}>
            <View style={styles.leftCol}>
              <Text style={styles.text}>{value.type}</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.text}>{`+${value.bonus}`}</Text>
            </View>
          </View>
        </>
      );
    });
  }

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
      <View style={{ paddingBottom: 15 }}>
        <Text style={styles.heavyText}>Armour</Text>
      </View>
      {renderDetails()}
      <View style={{ marginBottom: 20 }} />
    </TornPaperBox>
  );
}

const styles = StyleSheet.create({
  topRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftCol: {
    flexDirection: 'column',
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    justifyContent: 'flex-end',
  },
  rightCol: {
    flexDirection: 'column',
    borderWidth: 2,
    borderBottomColor: '#000',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
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
