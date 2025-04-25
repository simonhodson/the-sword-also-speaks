import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { TornPaperBox } from '../../../../common/components/torn-paper-box-view';
import {
  EditDetailsNavigationProp,
  EditDetailsRouteProp,
} from '../../../../navigation/root-stack';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import { CharacterDetails } from '../../types/character-details.types';

function EditAttributeModal() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { characterId } = useRoute<EditDetailsRouteProp>().params;

  const currentCharacter = useCharacterStore((state) =>
    state.getCharacterById(characterId),
  );
  const updateCharacter = useCharacterStore(
    (state) => state.updateCharacterDetails,
  );

  const [newDetails, setNew] = useState<CharacterDetails | undefined>(
    currentCharacter?.details,
  );

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
    </TornPaperBox>
  ) : (
    false
  );
}

export { EditAttributeModal };

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width: '100%',
  },
  buttonMain: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: 'Gaegu-Regular',
    fontWeight: 500,
    fontSize: 24,
    paddingBottom: 2,
    color: '#fff',
  },
});
