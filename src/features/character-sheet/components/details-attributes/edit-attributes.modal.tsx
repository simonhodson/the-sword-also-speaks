import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../../../common/';
import { TornPaperBox } from '../../../../common/components/torn-paper-box-view';
import {
  EditDetailsNavigationProp,
  EditDetailsRouteProp,
} from '../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import { AbilityKey, AbilityScores } from '../../types/ability-score-types';
import { CharacterDetails } from '../../types/character-details.types';

function EditAttributeModal() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { characterId } = useRoute<EditDetailsRouteProp>().params;

  const currentCharacter = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );
  const abilityScores = currentCharacter?.abilityScores;
  const updateCharacter = useCharacterStore(
    (state) => state.updateCharacterDetails,
  );

  const [newDetails, setNew] = useState<CharacterDetails | undefined>(
    currentCharacter?.details,
  );

  type cv = { [key in AbilityKey]: number };
  const currentValues: cv[] = [];

  if (abilityScores) {
    for (const prop in abilityScores) {
      const p = prop as keyof AbilityScores;
      currentValues.push({ [prop]: abilityScores[p].total } as cv);
    }
  }

  console.log(currentValues);
  if (currentValues[0].agility === 3) {
    setNew(newDetails);
  }

  function onSave() {
    if (newDetails) {
      const updateDetails = { ...newDetails };
      updateCharacter(characterId, updateDetails);
    }

    navigation.goBack();
  }

  return newDetails ? (
    <TornPaperBox>
      <Text>WOOTIE WOOT WOOT</Text>
      <View style={{ marginBottom: 25 }} />
      <Button onPress={onSave} title='Save' />
      <View style={{ marginBottom: 25 }} />
    </TornPaperBox>
  ) : (
    false
  );
}

export { EditAttributeModal };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 7,
//     width: '100%',
//   },
//   buttonMain: {
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 7,
//   },
//   buttonText: {
//     fontFamily: 'Gaegu-Regular',
//     fontWeight: 500,
//     fontSize: 24,
//     paddingBottom: 2,
//     color: '#fff',
//   },
// });
