import type { PropsWithChildren } from 'react';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TornPaperBox } from '../../../../../common';
import {
  Damage,
  Weapon,
  weaponDisplayText,
  WeaponsKey,
  WeaponsValues,
} from '../../../types/weapon-types';

type WeaponsView = PropsWithChildren<{
  weapon: Weapon;
  onPressEdit: (direction: 'defenses' | 'abilities') => void;
}>;

function WeaponsView({ weapon, onPressEdit }: WeaponsView) {
  function renderGridLine() {
    const entries = Object.entries(weapon) as [WeaponsKey, WeaponsValues][];

    const displayVal = (key: WeaponsKey, value: WeaponsValues) => {
      switch (key) {
        case 'name':
          return value && typeof value === 'string'
            ? (value as string)
            : undefined;
        case 'combatSkill':
          return value && typeof value === 'string'
            ? (value as string)
            : undefined;
        case 'draw':
          return value && typeof value === 'number'
            ? (value as number)
            : undefined;
        case 'damageLimit':
          let damage =
            typeof value === 'object' &&
            Object.hasOwn(value, 'type') &&
            Object.hasOwn(value, 'total')
              ? (value as Damage)
              : undefined;

          return damage ? `${damage.total}(${damage.type})` : damage;
        default:
          break;
      }
    };

    return entries.map(([key, value]) => {
      return (
        <View style={styles.itemRow} key={key}>
          <View style={styles.keyBox}>
            <Text style={[styles.heavyText, { marginBottom: 10 }]}>
              {weaponDisplayText[key]}
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={[styles.heavyText, { marginBottom: 10 }]}>
              {displayVal(key, value)}
            </Text>
          </View>
        </View>
      );
    });
  }

  return (
    <ScrollView>
      <TornPaperBox>
        <View style={styles.topRow}>
          <Pressable
            onPress={() => onPressEdit('defenses')}
            style={{ alignItems: 'flex-end' }}
          >
            <Icon name='edit' size={26} />
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.titleBox}>
            <Text style={styles.heavyText}>Weapon</Text>
          </View>
        </View>
        {renderGridLine()}
        <View style={{ marginBottom: 20 }} />
      </TornPaperBox>
    </ScrollView>
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
  keyBox: {
    width: '30%',
  },
  titleBox: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBox: {
    flexDirection: 'column',
    width: '60%',
    borderWidth: 2,
    borderBottomColor: '#000',
    justifyContent: 'flex-end',
    margin: 2,
  },
  heavyText: {
    fontFamily: 'Gaegu-Bold',
    fontSize: 26,
    paddingBottom: 2,
  },
  heavySmallText: {
    fontFamily: 'Gaegu-Bold',
    fontSize: 16,
    paddingBottom: 2,
  },
  text: {
    fontFamily: 'Gaegu-Regular',
    fontSize: 26,
    marginBottom: 5,
  },
});

export { WeaponsView };
