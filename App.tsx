import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStack } from './src/navigation/root-stack';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '8%',
  },
});

export default App;
