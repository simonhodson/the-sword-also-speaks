import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ExitButton({ onExit }: { onExit: () => void }) {

  return (

    <Pressable onPress={onExit} style={styles.main}>
      <Icon name='arrow-back-ios' size={26} style={{ color: '#fff' }} />
    </Pressable>

  )

}

const styles = StyleSheet.create({
  main: {
    marginLeft: 20,
    marginRight: 20,
  }
})