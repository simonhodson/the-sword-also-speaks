import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import CharacterSheetData from '../features/character-sheet/character-sheet-data';
import {
  EditAbilitiesModal,
  EditDefensesModal,
  EditDetailsModal,
} from '../features/character-sheet/components/character-modals';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  CharacterSheet: undefined;
  EditDetails: { characterId: string };
  EditAbilities: { characterId: string };
  EditDefenses: { characterId: string };
};

export type EditDetailsRouteProp = RouteProp<RootStackParamList, 'EditDetails'>;
export type EditDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditDetails'
>;

export type EditAbilitiesRouteProp = RouteProp<
  RootStackParamList,
  'EditAbilities'
>;
export type EditAbilitiesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditAbilities'
>;

export type EditDefensesRouteProp = RouteProp<
  RootStackParamList,
  'EditDefenses'
>;
export type EditDefensesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditDefenses'
>;

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          fontFamily: 'Gaegu-Regular',
          fontSize: 28,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name='CharacterSheet'
          component={CharacterSheetData}
          options={{ headerTitle: 'Character Sheet' }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='EditDetails' component={EditDetailsModal} />
        <Stack.Screen name='EditAbilities' component={EditAbilitiesModal} />
        <Stack.Screen name='EditDefenses' component={EditDefensesModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
