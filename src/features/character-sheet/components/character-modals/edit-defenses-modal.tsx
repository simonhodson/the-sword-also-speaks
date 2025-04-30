import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Button } from '../../../../common';
import { TornPaperBox } from '../../../../common/components/torn-paper-box-view';
import {
  EditDefensesNavigationProp,
  EditDefensesRouteProp,
} from '../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import {
  Defenses,
  defensesDisplayText,
  DefensesKey,
} from '../../types/defenses-types';

function EditDefensesModal() {
  const navigation = useNavigation<EditDefensesNavigationProp>();
  const { characterId } = useRoute<EditDefensesRouteProp>().params;

  const currentCharacter = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  const updateCharacterDefenses = useCharacterStore(
    (state) => state.updateCharacterDefenses,
  );

  const [currentDefensesScores, setCurrentDefensesScores] = useState<
    Defenses | undefined
  >(currentCharacter?.defenses);

  function onSave() {
    if (currentDefensesScores) {
      updateCharacterDefenses(characterId, currentDefensesScores);
    }

    navigation.goBack();
  }

  function increaseDecrease(key: DefensesKey, increase: boolean) {
    if (!currentDefensesScores) {
      return;
    }

    const attributeToChange = currentDefensesScores[key];

    if (currentDefensesScores) {
      setCurrentDefensesScores({
        ...currentDefensesScores,
        [key]: attributeToChange + (increase ? 1 : -1),
      });
    }
  }

  function renderDetails() {
    if (currentDefensesScores) {
      return Object.entries(currentDefensesScores).map(([k, value]) => {
        const key = k as DefensesKey;
        const lowerLimit = currentDefensesScores[key] === 1;
        return (
          <View style={styles.statRow} key={key}>
            <Text style={styles.text}>{`${
              defensesDisplayText[key as DefensesKey]
            }:`}</Text>
            <View style={styles.adjustRow}>
              <Pressable
                onPress={() => increaseDecrease(key, false)}
                disabled={lowerLimit}
              >
                <Icon
                  name='minus-circle'
                  size={20}
                  color={lowerLimit ? '#a9a9a9' : '#000'}
                />
              </Pressable>
              <Text style={[styles.text, { marginLeft: 10, marginRight: 10 }]}>
                {value}
              </Text>
              <Pressable onPress={() => increaseDecrease(key, true)}>
                <Icon name='plus-circle' size={20} />
              </Pressable>
            </View>
          </View>
        );
      });
    }
  }

  renderDetails();

  return currentDefensesScores ? (
    <TornPaperBox>
      {renderDetails()}
      <View style={{ marginBottom: 25 }} />
      <Button onPress={onSave} title='Save' />
      <View style={{ marginBottom: 25 }} />
    </TornPaperBox>
  ) : (
    false
  );
}

export { EditDefensesModal };

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
  buttonText: {
    fontFamily: 'Gaegu-Regular',
    fontWeight: 500,
    fontSize: 24,
    paddingBottom: 2,
    color: '#fff',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  adjustRow: {
    flexDirection: 'row',
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
