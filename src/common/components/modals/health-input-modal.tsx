import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { BodyPart } from '../../../features/character-sheet/types/health-types';
import { PlusMinusView } from './plus-minus-view';

// import { MAX_FATIGUE } from '../../../features/character-sheet/components/details-attributes/charcter-sub-header-view';

type HealthValueInputProps = {
  modalVisible: boolean;
  currentPartName: BodyPart;
  currentPartHealth: number;
  maximumPartHealth: number;
  maximumHealth: number;
  onSetValue: (bodyPart?: BodyPart, value?: number) => void;
};

function HealthInputModal({
  currentPartHealth,
  currentPartName,
  maximumPartHealth,
  maximumHealth,
  modalVisible,
  onSetValue,
}: HealthValueInputProps) {
  const [value, setValue] = useState(currentPartHealth);

  // function onValueEnter() {
  //   const v = parseInt(value, 10);
  //   onSetValue(v > maximumHealth ? maximumHealth : v);
  // }

  // switch (bodyPart) {
  //   case 'head':
  //     console.log(bodyPart, ' ... ', value);
  //     break;
  //   case 'torso':
  //     console.log(bodyPart, ' ... ', value);
  //     break;
  //   case 'arms':
  //     console.log(bodyPart, ' ... ', value);
  //     break;
  //   case 'crotch':
  //     console.log(bodyPart, ' ... ', value);
  //     break;
  //   case 'legs':
  //     console.log(bodyPart, ' ... ', value);
  //     break;
  //   default:
  //     break;
  // }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onSetValue()}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <View style={styles.modalView}>
            <PlusMinusView
              title={currentPartName}
              value={currentPartHealth}
              onPress={(increase) => console.log('PRESSED ... ', increase)}
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
