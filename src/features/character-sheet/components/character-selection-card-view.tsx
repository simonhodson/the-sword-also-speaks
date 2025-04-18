import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { CharacterDetails } from '../types/character-details.types';

type CharacterSelectionCardViewProps = CharacterDetails & {
  onSelect: () => void;
}

function CharacterSelectionCardView({
  name,
  species,
  archetype,
  currentLevel,
  onSelect
}: CharacterSelectionCardViewProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Pressable style={styles.main} onPress={onSelect}>
        <Text style={styles.heavyText}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heavyText}>{`Level ${currentLevel}`}</Text>
          <Text style={[styles.heavyText, { paddingLeft: 20 }]}>{species}</Text>
        </View>
        <Text style={styles.heavyText}>{archetype}</Text>
      </Pressable>
    </View>
  )
}

export { CharacterSelectionCardView }

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'column',
    padding: 15,
    borderWidth: 1,
    width: '90%',
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