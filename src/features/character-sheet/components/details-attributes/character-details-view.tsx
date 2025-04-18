import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { CharacterDetails, characterDetailsDisplayText, CharacterDetailsKey } from '../../types/character-details.types';
import { AttributesContainerView } from '../../../../common/components/attributes-container-view';
import { TornPaperBox } from '../../../../common/components/torn-paper-box-view';

type CharacterDetailsView = PropsWithChildren<{
  characterDetails: CharacterDetails;
  onPressEdit: () => void;
}>;

function CharacterDetailsView({ characterDetails, onPressEdit }: CharacterDetailsView) {

  function renderDetails() {
    const entries = Object.entries(characterDetails) as [CharacterDetailsKey, any][];

    return entries.map(([key, value]) => {
      return (
        <View key={key} style={styles.main}>
          <Text style={styles.heavyText}>
            {`${characterDetailsDisplayText[key]}: `}
          </Text>
          <Text style={styles.text}>{value}</Text>
        </View>
      )
    })
  }

  return (
    <TornPaperBox>
      <Pressable
        onPress={onPressEdit}
        style={{ alignSelf: 'flex-end' }}
      >
        <Icon name='edit' size={26} />
      </Pressable>
      {renderDetails()}
    </TornPaperBox>
  )
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 26,
    paddingBottom: 2
  },
  heavyText: {
    fontFamily: "Gaegu-Bold",
    fontSize: 26,
    paddingBottom: 2
  },
});

export { CharacterDetailsView };