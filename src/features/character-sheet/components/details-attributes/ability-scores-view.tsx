import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  AbilityKey,
  AbilityScores,
  AbilityStat,
  abilityDisplayText
} from '../../types/ability-score-types';
import { TornPaperBox } from '../../../../common/';

type AbilityScoresView = PropsWithChildren<{
  abilityScores: AbilityScores;
  onPressEdit: (direction: 'details' | 'attributes') => void;
}>;

function AbilityScoresView({
  abilityScores,
  onPressEdit
}: AbilityScoresView) {

  function renderDetails() {
    const entries = Object.entries(abilityScores) as [AbilityKey, AbilityStat][]

    return entries.map(([key, value]) => {
      return (
        <View style={styles.statRow} key={key}>
          <Text style={styles.text}>
            {`${abilityDisplayText[key]}:(${value.suit})`}
          </Text>
          <Text style={styles.text}>{value.total}</Text>
        </View>
      )
    })
  }

  return (
    <TornPaperBox >
        <View style={styles.topRow}>
          <Pressable
            onPress={() => onPressEdit('attributes')}
            style={{ alignItems: 'flex-end'}}
          >
            <Icon name='edit' size={26} />
          </Pressable>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.heavyText}>Ability Scores</Text>
          <Text style={styles.heavyText}>Total</Text>
        </View>
        {renderDetails()}
    </TornPaperBox>
  )
}

const styles = StyleSheet.create({
  topRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-end'
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  heavyText: {
    fontFamily: "Gaegu-Bold",

    fontSize: 26,
    paddingBottom: 2
  },
  text: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 26,
    marginBottom: 5
  }
});

export { AbilityScoresView };