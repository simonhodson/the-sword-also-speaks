import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { CharacterDetails } from "../types/character-details.types";
import { EditDetailsRouteProp } from "../../../navigation/root-stack";


function EditDetailsModal() {
    const navigation = useNavigation();
    const { currentDetails, setDetails } = useRoute<EditDetailsRouteProp>().params;


    const [newDetils, setNew] = useState<CharacterDetails>(currentDetails);

    function onSave() {
      setDetails(newDetils);
      navigation.goBack();
    }
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
            style={styles.input}
            value={newDetils.name}
            onChangeText={(v) => setNew({ ...currentDetails, name: v})}
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