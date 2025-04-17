import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { CharacterDetails } from './types/character-details.types';
import { CharacterDetailsView } from './components/character-details-view';
import { AbilityScoresView } from './components/ability-scores-view';
import { AbilityScores } from './types/ability-score-types';

type CharacterSheetView = PropsWithChildren<{
  characterDetails: CharacterDetails;
  abilityScores: AbilityScores;
}>;

function CharacterSheetView({
  characterDetails,
  abilityScores,
}: CharacterSheetView): React.JSX.Element {

  return (
    <View >
        <CharacterDetailsView characterDetails={characterDetails} />
        <View style={{ margin: 5 }}/>
        <AbilityScoresView abilityScores={abilityScores} />
    </View>
  )
}

export { CharacterSheetView }

const styles = StyleSheet.create({
  main: {
  
  }
})