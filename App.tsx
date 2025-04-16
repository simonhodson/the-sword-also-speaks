/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';

import CharacterSheetData from './src/features/character-sheet-data';

function App(): React.JSX.Element {
  
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#ffffff'}
      />
      <View style={styles.main}>
          <Text style={styles.titleText}>The Sword Also Speaks</Text>
          <CharacterSheetData />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center', 
    paddingTop: '8%'
  },
  titleText: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 26,
    marginBottom: 5,
  }

});

export default App;
