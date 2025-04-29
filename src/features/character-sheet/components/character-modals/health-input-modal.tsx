import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, TornPaperBox } from '../../../../common';
import { PlusMinusView } from '../../../../common/components/modals/plus-minus-view';
import { BodyPart } from '../../types/health-types';

// import { MAX_FATIGUE } from '../../../features/character-sheet/components/details-attributes/charcter-sub-header-view';

type HealthValueInputProps = {
  modalVisible: boolean;
  currentPartDisplayName: string;
  currentPart: BodyPart;
  currentPartHealth: number;
  maximumPartHealth: number;
  onSetValue: (bodyPart?: BodyPart, value?: number) => void;
};

function HealthInputModal({
  currentPartHealth,
  currentPartDisplayName,
  currentPart,
  maximumPartHealth,
  modalVisible,
  onSetValue,
}: HealthValueInputProps) {
  const [currentValue, setValue] = useState(currentPartHealth);

  function onAdjust(increase: boolean) {
    const newVal = increase ? currentValue + 1 : currentValue - 1;
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
        <TornPaperBox>
          <View style={styles.modalView}>
            <PlusMinusView
              title={currentPartDisplayName}
              value={currentValue}
              onPress={onAdjust}
              disabled={
                currentValue === 0
                  ? -1
                  : currentValue === maximumPartHealth
                  ? 1
                  : 0
              }
            />
            <View style={{ height: 25 }} />
            <View style={{ width: '100%' }}>
              <Button
                title='Done'
                onPress={() => {
                  onSetValue(currentPart, currentValue);
                }}
              />
            </View>
            <View style={{ height: 25 }} />
          </View>
        </TornPaperBox>
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
    width: '90%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
