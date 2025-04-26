import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

import { MAX_FATIGUE } from '../../../features/character-sheet/components/character-sub-header-view';

type OptionsProps = {
  modalVisible: boolean;
  onCancel: () => void;
  onSetValue: (value?: number) => void;
};

function OptionsModal({ modalVisible, onCancel, onSetValue }: OptionsProps) {
  const [value, setValue] = useState('');

  function onValueEnter() {
    const v = parseInt(value, 10);
    onSetValue(v > MAX_FATIGUE ? MAX_FATIGUE : v);
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <Text>Enter something:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter new value...'
            value={value.toString()}
            onChangeText={setValue}
            keyboardType='number-pad'
          />
          <View style={styles.buttonRow}>
            <Button title='Cancel' onPress={() => onCancel} />
            <Button title='OK' onPress={onValueEnter} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export { OptionsModal };

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
