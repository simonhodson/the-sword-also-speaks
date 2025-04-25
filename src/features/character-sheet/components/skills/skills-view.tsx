import type { PropsWithChildren } from 'react';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { TornPaperBox } from '../../../../common/components/torn-paper-box-view';
import {
  skillDisplayText,
  Skills,
  SkillsKey,
  SkillsLevel,
} from '../../types/skills-types';

type SkillsView = PropsWithChildren<{
  skills: Skills;
}>;

function SkillsView({ skills }: SkillsView) {
  function renderDetails() {
    const entries = Object.entries(skills) as [SkillsKey, SkillsLevel][];

    return entries.map(([key, value]) => {
      return (
        <View style={styles.statRow} key={key}>
          <Text style={styles.text}>
            {`${skillDisplayText[key]}:(${value.suit})`}
          </Text>
          <Text style={styles.text}>{value.rank}</Text>
        </View>
      );
    });
  }

  return (
    <ScrollView>
      <TornPaperBox>
        <View style={styles.main}>
          <View style={styles.statRow}>
            <Text style={styles.heavyText}>Skills</Text>
            <Text style={styles.heavyText}>Rank</Text>
          </View>
          {renderDetails()}
        </View>
      </TornPaperBox>
      <View style={{ marginBottom: 150 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 30,
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
    fontWeight: 500,
    fontSize: 26,
    marginBottom: 5,
  },
});

export { SkillsView };
