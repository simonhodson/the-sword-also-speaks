import type { PropsWithChildren } from 'react';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TornPaperBox } from '../../../../../common';
import { AbilityKey } from '../../../types/ability-score-types';
import {
  CharacterDetails,
  characterDetailsDisplayText,
} from '../../../types/character-details.types';

type CharacterDetailsView = PropsWithChildren<{
  characterDetails: CharacterDetails;
  onPressEdit: (
    direction: 'details' | 'abilities',
    abilityKey?: AbilityKey,
  ) => void;
}>;

function CharacterDetailsView({
  characterDetails,
  onPressEdit,
}: CharacterDetailsView) {
  function renderDetails() {
    const entries = Object.entries(characterDetails);

    return entries.map(([key, value]) => {
      return (
        <View key={key} style={styles.main}>
          <Text style={styles.heavyText}>
            {`${characterDetailsDisplayText[key as keyof CharacterDetails]}: `}
          </Text>
          <Text style={styles.text}>{value}</Text>
        </View>
      );
    });
  }

  return (
    <TornPaperBox>
      <Pressable
        onPress={() => onPressEdit('details')}
        style={{ alignSelf: 'flex-end' }}
      >
        <Icon name='edit' size={26} />
      </Pressable>
      {renderDetails()}
    </TornPaperBox>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'Gaegu-Regular',
    fontSize: 26,
    paddingBottom: 2,
  },
  heavyText: {
    fontFamily: 'Gaegu-Bold',
    fontSize: 26,
    paddingBottom: 2,
  },
});

export { CharacterDetailsView };
