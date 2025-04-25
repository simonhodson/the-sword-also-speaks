import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ExitButton({ onExit }: { onExit: () => void }) {
  return (
    <Pressable onPress={onExit} style={styles.main}>
      <Icon name='arrow-back-ios' size={18} style={{ color: '#fff' }} />
    </Pressable>
  );
}

export { ExitButton };

const styles = StyleSheet.create({
  main: {
    marginLeft: 5,
    marginRight: 5,
  },
});
