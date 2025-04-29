import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  viewStyles?: ViewStyle;
  textStyles?: TextStyle;
  disabled?: boolean;
  disabledTextStyles?: TextStyle;
  disabledViewStyles?: ViewStyle;
};

function Button({
  disabled,
  disabledTextStyles,
  disabledViewStyles,
  onPress,
  title,
  viewStyles,
  textStyles,
}: ButtonProps) {
  return (
    <Pressable
      style={[styles.buttonMain, viewStyles, disabledViewStyles]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyles, disabledTextStyles]}>
        {title}
      </Text>
    </Pressable>
  );
}

export { Button };

const styles = StyleSheet.create({
  buttonMain: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: 'Gaegu-Regular',
    fontSize: 24,
    paddingBottom: 2,
    color: '#fff',
  },
});
