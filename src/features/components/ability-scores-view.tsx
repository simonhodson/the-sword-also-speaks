import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AbilityKey, AbilityScores, AbilityStat, abilityDisplayText } from '../types/ability-score-types';
import { AttributesContainerView } from './attributes-container-view';

type AbilityScoresView = PropsWithChildren<{
  abilityScores: AbilityScores
}>;

function AbilityScoresView({ abilityScores }: AbilityScoresView) {

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
    <AttributesContainerView >
      <View style={styles.main}>
        <View style={styles.statRow}>
          <Text style={styles.heavyText}>Ability Scores</Text>
          <Text style={styles.heavyText}>Total</Text>
        </View>
        {renderDetails()}
      </View>

    </AttributesContainerView>
  )
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
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