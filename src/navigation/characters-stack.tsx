import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SkillsData from '../features/skills/skills-data';
import CharacterSheetData from '../features/character-sheet/character-sheet-data';


const Stack = createNativeStackNavigator();

export function CharactersStack() {

  return (
    <Stack.Navigator
      initialRouteName='Details_Attributes'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Details_Attributes' component={CharacterSheetData} />
      <Stack.Screen name='Skills' component={SkillsData} />
    </Stack.Navigator>
  );
}