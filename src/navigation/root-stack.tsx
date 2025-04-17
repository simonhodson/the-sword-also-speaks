import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersView from '../features/character-sheet/characters-view';


const Stack = createNativeStackNavigator();

export function RootStack() {

  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#ffffff'
    }}>
        <Stack.Screen name='Character Sheet' component={CharactersView} />
    </Stack.Navigator>
  );
}