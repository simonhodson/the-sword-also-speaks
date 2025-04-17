import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { CharacterDetails } from './types/character-details.types';
import { CharacterDetailsView } from './components/character-details-view';
import { AbilityScoresView } from './components/ability-scores-view';
import { AbilityScores } from './types/ability-score-types';
import { Skills } from './types/skills-types';
import { SkillsView } from './components/skills-view';

type CharacterSheetView = PropsWithChildren<{
  characterDetails: CharacterDetails;
  abilityScores: AbilityScores;
  skills: Skills;
}>;

function CharacterSheetView({
  characterDetails,
  abilityScores,
  skills,
}: CharacterSheetView): React.JSX.Element {

  return (
    <ScrollView style={styles.main}>
        <CharacterDetailsView characterDetails={characterDetails}/>
        <View style={{ margin: 5 }}/>
        <AbilityScoresView abilityScores={abilityScores}/>
        <View style={{ margin: 5 }}/>
        <SkillsView skills={skills} />
    </ScrollView>
  )
}

export { CharacterSheetView }

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})