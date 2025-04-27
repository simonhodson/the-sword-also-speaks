import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BodyPart } from '../../../features/character-sheet/types/health-types';
import { PlusMinusView } from './plus-minus-view';

// import { MAX_FATIGUE } from '../../../features/character-sheet/components/details-attributes/charcter-sub-header-view';

type HealthValueInputProps = {
  modalVisible: boolean;
  currentPartName: string;
  currentPartHealth: number;
  maximumPartHealth: number;
  onSetValue: (bodyPart?: BodyPart, value?: number) => void;
};

function HealthInputModal({
  currentPartHealth,
  currentPartName,
  maximumPartHealth,
  modalVisible,
  onSetValue,
}: HealthValueInputProps) {
  const [currentValue, setValue] = useState(currentPartHealth);
  const [disabled, setDisabled] = useState(0);

  function onAdjust(increase: boolean) {
    const newVal = increase ? currentValue + 1 : currentValue - 1;

    setDisabled(newVal === 0 ? -1 : newVal === maximumPartHealth ? 1 : 0);
    setValue(newVal);
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onSetValue()}
    >
      <View style={styles.modalBackground}>
        <Pressable style={styles.closeButton} onPress={() => onSetValue()}>
          <Icon name='close' size={50} color={'#fff'} />
        </Pressable>
        <View style={styles.modalView}>
          <View style={styles.modalView}>
            <PlusMinusView
              title={currentPartName}
              value={currentValue}
              onPress={onAdjust}
              disabled={disabled}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export { HealthInputModal };

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
