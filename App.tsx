import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './src/navigation/root-stack';

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
       <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center', 
    paddingTop: '8%'
  },

});

export default App;
