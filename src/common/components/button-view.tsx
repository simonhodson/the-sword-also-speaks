import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

function Button({ onPress, title }: ButtonProps) {
  return (
    <Pressable style={styles.buttonMain} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
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
    fontWeight: 500,
    fontSize: 24,
    paddingBottom: 2,
    color: '#fff',
  },
});
