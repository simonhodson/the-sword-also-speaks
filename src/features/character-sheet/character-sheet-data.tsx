import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import { CharacterSheetView } from './character-sheet-view';
import createNewCharacter from '../../factories/character-sheet-factory';
import { useCharacterStore } from '../../store/useCharcterStore';
import { CharacterSelectionCardView } from './components/character-selection-card-view';
import LoadingIndicator from '../../common/components/loading-screen';
import { useNavigation } from '@react-navigation/native';

type Selected = { selected: boolean, id?: string | undefined, name?: string | undefined };
/**
 * Responsible for creating characters or retrieving stored ones
 */
export default function CharacterSheetData() {
  const addCharacter = useCharacterStore(state => state.addNewCharacter);
  const characters = useCharacterStore(state => state.characters);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Selected>({ selected: false });

  // Are there stored characters?
  useEffect(() => {
    useCharacterStore.getState().hydrate();
    return () => {
      setLoading(true);
      setSelected({ selected: false });
    }
  }, []);

  useEffect(() => {
    if (characters) {
      setLoading(false);
    }
  }, [characters])

  function onReturn() {
    setSelected({ selected: false })
    navigation.setOptions({
      headerTitle: 'Select Character', 
    });
  }

  function onPressCreate() {
    const initialCharacter = createNewCharacter();
    addCharacter(initialCharacter);
  }

  if (loading) {
    return (<LoadingIndicator />);
  }

  return (
    selected.selected && selected.id && selected.name ? (
      <CharacterSheetView
        characterId={selected.id}
        charName={selected.name}
        goBack={onReturn}
      />
    ) : (
      <FlatList
        style={{ flex: 1 }}
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CharacterSelectionCardView
            name={item.details.name}
            species={item.details.species}
            archetype={item.details.archetype}
            currentLevel={item.details.currentLevel}
            onSelect={() => setSelected({ selected: true, id: item.id, name: item.details.name })}
          />
        )}
        ListHeaderComponent={
          <View style={styles.buttonZone}>
            <Button title="Create New Character" onPress={onPressCreate} />
          </View>
        }
        ItemSeparatorComponent={() => (
          <View style={{ margin: 10 }} />
        )}
      />
    ))
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonZone: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  }
})