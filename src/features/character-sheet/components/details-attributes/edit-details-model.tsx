import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { CharacterDetails } from "../../types/character-details.types";
import { EditDetailsNavigationProp, EditDetailsRouteProp } from "../../../../navigation/root-stack";
import { useCharacterStore } from "../../../../store/useCharcterStore";


function EditDetailsModal() {
    const navigation = useNavigation<EditDetailsNavigationProp>();
    const { characterId } = useRoute<EditDetailsRouteProp>().params;

    const currentCharacter = useCharacterStore(state => state.getCharacterById(characterId));
    const updateCharacter = useCharacterStore(state => state.updateCharacterDetails)
    const [newDetils, setNew] = useState<CharacterDetails | undefined>(currentCharacter?.details);

    function onSave() {
      if (newDetils) {
        console.log('attempting save..')
        updateCharacter(characterId, newDetils);
      } else {
        console.warn('OH OH IN EDIT')
        // Alert something went wrong
      }
      navigation.goBack();
    }
  
    return (
      newDetils && <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
            style={styles.input}
            value={newDetils.name}
            onChangeText={(v) => setNew({ ...newDetils, name: v})}
        />
        <Button onPress={onSave} title="Save" />
      </View>
    );
  }

  export { EditDetailsModal };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  })