import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { MAX_FATIGUE } from '../../../features/character-sheet/components/details-attributes/charcter-sub-header-view';

type FatigueInputProps = {
  modalVisible: boolean;
  currentFatigue: number;
  onSetValue: (value?: number) => void;
}

export default function FatigueInputModal({
  modalVisible,
  onSetValue,
  currentFatigue
}: FatigueInputProps) {

  const [value, setValue] = useState(currentFatigue.toString());

  function onValueEnter() {
    const v = parseInt(value);
    onSetValue(v > MAX_FATIGUE ? MAX_FATIGUE : v)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onSetValue()}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <Text>Enter something:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new value..."
            value={value.toString()}
            onChangeText={setValue}
            keyboardType='number-pad'
          />
          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={() => onSetValue()} />
            <Button title="OK" onPress={onValueEnter} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 5
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}); 