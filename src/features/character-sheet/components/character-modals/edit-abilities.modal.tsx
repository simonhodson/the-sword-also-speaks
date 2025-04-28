import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Button } from '../../../../common';
import { TornPaperBox } from '../../../../common/components/torn-paper-box-view';
import {
  EditDetailsNavigationProp,
  EditDetailsRouteProp,
} from '../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import {
  abilityDisplayText,
  AbilityKey,
  AbilityScores,
} from '../../types/ability-score-types';

function EditAbilitiesModal() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { characterId } = useRoute<EditDetailsRouteProp>().params;

  const currentCharacter = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );

  const updateCharacter = useCharacterStore(
    (state) => state.updateCharacterAbilityScores,
  );

  const [currentAbilityScores, setCurrentAbilityScores] = useState<
    AbilityScores | undefined
  >(currentCharacter?.abilityScores);

  function onSave() {
    if (currentAbilityScores) {
      updateCharacter(characterId, currentAbilityScores);
    }

    navigation.goBack();
  }

  function increaseDecrease(key: AbilityKey, increase: boolean) {
    if (!currentAbilityScores) {
      return;
    }

    const abilityToChange = currentAbilityScores[key];

    abilityToChange.total += increase ? 1 : -1;

    if (currentAbilityScores) {
      setCurrentAbilityScores({
        ...currentAbilityScores,
        [key]: abilityToChange,
      });
    }
  }

  function renderDetails() {
    if (currentAbilityScores) {
      return Object.entries(currentAbilityScores).map(([k, value]) => {
        const key = k as AbilityKey;
        const lowerLimit = currentAbilityScores[key].total === 1;
        return (
          <View style={styles.statRow} key={key}>
            <Text style={styles.text}>{`${
              abilityDisplayText[key as AbilityKey]
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
                {value.total}
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

  return currentAbilityScores ? (
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

export { EditAbilitiesModal };

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
