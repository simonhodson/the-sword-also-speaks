import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
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
        <View style={styles.picture}>
          <Icon name='user' size={60} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.heavyText}>{name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>{`Level ${currentLevel} -`}</Text>
            <Text style={[styles.text, { paddingLeft: 10}]}>{species}</Text>
          </View>
          <Text style={styles.text}>{archetype}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export { CharacterSelectionCardView }

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f6f4ec', //'#f3f3f3',
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    borderWidth: 1,
  },
  picture: {
    flexDirection: 'column',
    paddingRight: 15,
    justifyContent: 'center'
  },
  text: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 18,
    paddingBottom: 2
  },
  heavyText: {
    fontFamily: "Gaegu-Bold",
    fontSize: 28,
    paddingBottom: 2
  },
});