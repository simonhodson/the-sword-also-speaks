import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef } from 'react';
import { FlatList, StatusBar, useWindowDimensions, View } from 'react-native';
import { runOnJS, useSharedValue, withTiming } from 'react-native-reanimated';

import { ExitButton } from '../../common/';
import { useAppStore } from '../../store/useAppStore';
import { useCharacterStore } from '../../store/useCharacterStore';
import ArmourData from './components/character-sheet-carousel/armour-views/armour-data';
import { CarouselInitialView } from './components/character-sheet-carousel/carousel-initial-view';
import EquipmentData from './components/character-sheet-carousel/equipment/equipment-data';
import PerksData from './components/character-sheet-carousel/perks/perks-data';
import SkillsData from './components/character-sheet-carousel/skills/skills-data';
import SpellsData from './components/character-sheet-carousel/spells/spells-data';
import WeaponsData from './components/character-sheet-carousel/weapons-views/weapons-data';
import { CharacterSubHeaderView } from './components/character-sub-header-view';

type CharacterSheetViewProps = { characterId: string; goBack: () => void };

/**
 * Controls current view for character sheet
 */
function CharacterSheetView({ characterId, goBack }: CharacterSheetViewProps) {
  const navigation = useNavigation();
  const showingRef = useRef(true); // This is used to track if the header bar is showing
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();
  // const [isHidden, setIsHidden] = useState(false);

  const { showHeaderBar: showHeaderBar, showHeaderBar: toggleHeaderBar } =
    useAppStore((state) => state);

  const character = useCharacterStore((state) =>
    state.characters.find((c) => c.id === characterId),
  );

  const sharedOpacity = useSharedValue(1);

  const exitButton = useCallback(
    () => <ExitButton onExit={goBack} />,
    [goBack],
  );

  const animateOpacity = (toEndOn: number) => {
    sharedOpacity.value = withTiming(toEndOn, { duration: 400 }, () => {
      runOnJS(setIsHidden)(!isHidden);
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: character?.details.name,
      headerLeft: exitButton,
    });
  }, [character, navigation, exitButton]);

  useEffect(() => {
    // This should only be true on initial render
    if (showingRef.current === showHeaderBar) return;
    console.log(`Header bar visibility changed`);
    showingRef.current = showHeaderBar;
    if (showHeaderBar) {
      console.log('Animating to zero opacity');
      animateOpacity(0);
    } else {
      console.log('Animating to full opacity');
      animateOpacity(1);
    }
  }, [showHeaderBar]);

  const subScreens = [
    {
      key: 'character-abilities',
      content: <CarouselInitialView characterId={characterId} />,
    },
    { key: 'skills', content: <SkillsData characterId={characterId} /> },
    {
      key: 'weapons',
      content: <WeaponsData characterId={characterId} />,
    },
    {
      key: 'armour',
      content: <ArmourData characterId={characterId} />,
    },
    {
      key: 'perks',
      content: <PerksData characterId={characterId} />,
    },
    {
      key: 'spells',
      content: <SpellsData characterId={characterId} />,
    },
    {
      key: 'equipment',
      content: <EquipmentData characterId={characterId} />,
    },
  ];

  return (
    <View>
      <StatusBar barStyle='light-content' />
      {character ? (
        <CharacterSubHeaderView
          healthStats={character.health}
          screenHeight={screenHeight}
          characterId={character.id}
          speed={character.actionStats.speedScore}
          initiative={character.actionStats.initiative}
          aces={character.actionStats.basesAces}
          sharedOpacity={sharedOpacity} // Toggle header visibility
        />
      ) : (
        false
      )}
      <FlatList
        horizontal
        pagingEnabled
        snapToInterval={screenWidth}
        showsHorizontalScrollIndicator={false}
        data={subScreens}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return item.content;
        }}
        decelerationRate='normal'
        bounces={false} // helps reduce 'over pull' on iOS
        overScrollMode='never' // Android: avoid rubber-banding
        scrollEventThrottle={30}
        disableIntervalMomentum={true} // This one helps a lot
      />
    </View>
  );
}

export { CharacterSheetView };
