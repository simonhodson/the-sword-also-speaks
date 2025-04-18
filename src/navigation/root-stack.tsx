import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {  RouteProp } from "@react-navigation/native";
import { EditDetailsModal } from '../features/character-sheet/components/details-attributes/edit-details-model';
import CharacterSheetData from '../features/character-sheet/character-sheet-data';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  CharacterSheet: undefined
  EditDetails:  { characterId: string };
}

export type EditDetailsRouteProp = RouteProp<RootStackParamList, 'EditDetails'>;
export type EditDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EditDetails'>;


export function RootStack() {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTitleStyle: {
        fontFamily: "Gaegu-Regular",
        fontSize: 32
      },
      headerTintColor: '#fff'
    }}>
      <Stack.Group>
        <Stack.Screen
          name='CharacterSheet'
          component={CharacterSheetData}
          options={{ headerTitle: 'Character Sheet'}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="EditDetails" component={EditDetailsModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}