import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Pressable
} from 'react-native';

type CharacterHeaderViewProps = {
    screenHeight: number;
    goBack: () => void;
}

 function CharacterSubHeaderView({ screenHeight, goBack }: CharacterHeaderViewProps) {
;

    return (
      <View style={[styles.main, { height: screenHeight * 0.10}]}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
        </View>

      </View>
    )
}

export { CharacterSubHeaderView };


const styles = StyleSheet.create({
  main: {
    display: 'flex',
    backgroundColor: 'black',
    padding: 15
  },
  text: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 26,
    paddingBottom: 2,
    color: '#fff'
  },
  heavyText: {
    fontFamily: "Gaegu-Bold",
    fontSize: 26,
    paddingBottom: 2,
    color: '#fff'
  },
})