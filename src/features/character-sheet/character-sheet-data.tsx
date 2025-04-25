import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../common';
import LoadingIndicator from '../../common/components/loading-screen';
import createNewCharacter from '../../factories/character-sheet-factory';
import { useCharacterStore } from '../../store/useCharacterStore';
import { CharacterSheetView } from './character-sheet-view';
import { CharacterSelectionCardView } from './components/character-selection-card-view';

type Selected = { selected: boolean; id?: string | undefined };
/**
 * Responsible for creating characters or retrieving stored ones
 */
export default function CharacterSheetData() {
  const addCharacter = useCharacterStore((state) => state.addNewCharacter);
  const deleteCharacter = useCharacterStore((state) => state.deleteCharacter);

  const characters = useCharacterStore((state) => state.characters);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Selected>({ selected: false });

  // Are there stored characters?
  useEffect(() => {
    useCharacterStore.getState().hydrate();
    return () => {
      setLoading(true);
      setSelected({ selected: false });
    };
  }, []);

  useEffect(() => {
    if (characters) {
      setLoading(false);
    }
  }, [characters]);

  function onReturn() {
    setSelected({ selected: false });
    navigation.setOptions({
      headerTitle: 'Select Character',
    });
  }

  function onPressCreate() {
    const initialCharacter = createNewCharacter();
    addCharacter(initialCharacter);
  }

  function onDeleteCharacter(id: string) {
    deleteCharacter(id);
  }

  function renderMargin() {
    return <View style={{ margin: 5 }} />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return selected.selected && selected.id ? (
    <CharacterSheetView characterId={selected.id} goBack={onReturn} />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CharacterSelectionCardView
            characterId={item.id}
            name={item.details.name}
            species={item.details.species}
            archetype={item.details.archetype}
            currentLevel={item.details.currentLevel}
            onSelect={() => setSelected({ selected: true, id: item.id })}
            onRemoveCharacter={onDeleteCharacter}
          />
        )}
        ItemSeparatorComponent={renderMargin}
      />
      <View style={styles.buttonZone}>
        <Button title='Create New Character' onPress={onPressCreate} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonZone: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
});
