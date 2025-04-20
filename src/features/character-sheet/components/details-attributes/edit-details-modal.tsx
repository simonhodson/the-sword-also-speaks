import React, { useState } from "react";
import { View, StyleSheet, TextInput  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, useRoute } from "@react-navigation/native";
import { CharacterDetails } from "../../types/character-details.types";
import { EditDetailsNavigationProp, EditDetailsRouteProp } from "../../../../navigation/root-stack";
import { useCharacterStore } from "../../../../store/useCharacterStore";
import { TornPaperBox } from "../../../../common/components/torn-paper-box-view";
import { Button } from "../../../../common/components/button-view";
import { archetypeDropdownValues, speciesDropdownValues } from "../../types/character-sheet-types";

function EditDetailsModal() {
  const navigation = useNavigation<EditDetailsNavigationProp>();
  const { characterId } = useRoute<EditDetailsRouteProp>().params;

  const currentCharacter = useCharacterStore(state => state.getCharacterById(characterId));
  const updateCharacter = useCharacterStore(state => state.updateCharacterDetails);

  const [newDetails, setNew] = useState<CharacterDetails | undefined>(currentCharacter?.details);
  const [speciesOpen, setSpeciesOpen] = useState(false);
  const [species, setSpecies] = useState(null);
  const [speciesValues, setSpeciesValues] = useState(speciesDropdownValues);
  const [archetypeOpen, setArchetypeOpen] = useState(false);
  const [archetype, setArchetype] = useState(null);
  const [archetypeValues, setArchetypeValues] = useState(archetypeDropdownValues);

  function onSave() {
   if (newDetails) {
    let updateDetails = { ...newDetails };
    if (species) { updateDetails = { ...updateDetails, species }};
    if (archetype) { updateDetails = { ...updateDetails, archetype }};

    updateCharacter(characterId, updateDetails);
   };

    navigation.goBack();
  }

  return (
    newDetails ? (<TornPaperBox>
      <View style={{ alignItems: 'center' }}>

        <TextInput
          style={styles.input}
          value={newDetails.name}
          onChangeText={(v) => setNew({ ...newDetails, name: v })}
        />
        <View style={{ marginBottom: 25 }} />
        <DropDownPicker
          open={speciesOpen}
          value={species}
          items={speciesValues}
          setOpen={setSpeciesOpen}
          setValue={setSpecies}
          setItems={setSpeciesValues}
          placeholder={'Species'}
          style={{ zIndex: 10 }}
        />
        <View style={{ marginBottom: 25 }} />
        <DropDownPicker
          open={archetypeOpen}
          value={archetype}
          items={archetypeValues}
          setOpen={setArchetypeOpen}
          setValue={setArchetype}
          setItems={setArchetypeValues}
          placeholder={'Archetype'}
          style={{ zIndex: 5 }}
        />
        <View style={{ marginBottom: 25 }} />
        <TextInput
          style={styles.input}
          keyboardType='decimal-pad'
          value={newDetails.currentLevel?.toString()}
          onChangeText={(v) => {
            const parsed = v === '' ? undefined : parseInt(v);
            setNew({ ...newDetails, currentLevel: parsed });
          }}
        />

        <View style={{ marginBottom: 25 }} />
      </View>
      <Button
        onPress={onSave}
        title="Save"
      />
      <View style={{ marginBottom: 25 }} />
    </TornPaperBox>) : false
  );
}

export { EditDetailsModal };

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
    borderRadius: 7
  },
  buttonText: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 24,
    paddingBottom: 2,
    color: '#fff'
  },
})