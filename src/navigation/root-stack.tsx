import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {  RouteProp } from "@react-navigation/native";
import CharactersView from '../features/character-sheet/characters-view';
import { EditDetailsModal } from '../features/character-sheet/components/edit-details-model';
import { CharacterDetails } from '../features/character-sheet/types/character-details.types';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  CharacterSheet: undefined;
  EditDetails: {
        currentDetails: CharacterDetails
        setDetails: (details: CharacterDetails) => void;
  }
}

export type EditDetailsRouteProp = RouteProp<RootStackParamList, 'EditDetails'>;
export type EditDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EditDetails'>;


export function RootStack() {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffffff'
    }}>
      <Stack.Group>
        <Stack.Screen
          name='CharacterSheet'
          component={CharactersView}
          options={{ headerTitle: 'Character Sheet'}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="EditDetails" component={EditDetailsModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}