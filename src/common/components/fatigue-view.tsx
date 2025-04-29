import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MAX_FATIGUE = 6;
const ICON_TEXT_SIZE = 24;

type FatigueAdjustmentViewProps = {
  currentFatigue?: number;
  onPress: (idxStartingZero: number, maximumLength: number) => void;
};

function FatigueAdjustmentView({
  onPress,
  currentFatigue,
}: FatigueAdjustmentViewProps) {
  function renderFatigue() {
    const maxIcons = [];
    for (let i = 0; i <= MAX_FATIGUE - 1; i++) {
      maxIcons.push(
        <Pressable onPress={() => onPress(i, MAX_FATIGUE)} key={i}>
          <Icon
            key={i}
            size={ICON_TEXT_SIZE}
            name={
              currentFatigue && currentFatigue > i
                ? 'square-rounded'
                : 'square-rounded-outline'
            }
            color={'#fff'}
            style={{ paddingRight: 5 }}
          />
        </Pressable>,
      );
    }
    return maxIcons;
  }

  return <View style={styles.main}>{renderFatigue()}</View>;
}

export { FatigueAdjustmentView };

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
});
