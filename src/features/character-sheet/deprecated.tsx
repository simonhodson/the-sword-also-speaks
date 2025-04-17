// import React from 'react';
// import type { PropsWithChildren } from 'react';
// import { StyleSheet, View } from 'react-native';

// import { CharacterDetails } from './types/character-details.types';
// import { CharacterDetailsView } from './components/details-attributes/character-details-view';
// import { AbilityScoresView } from './components/details-attributes/ability-scores-view';
// import { AbilityScores } from './types/ability-score-types';

// type CharacterSheetView = PropsWithChildren<{
//   characterDetails: CharacterDetails;
//   abilityScores: AbilityScores;
//   editDetails: () => void;
// }>;

// function CharacterSheetView({
//   characterDetails,
//   abilityScores,
//   editDetails
// }: CharacterSheetView): React.JSX.Element {

//   return (
//     <View >
//         <CharacterDetailsView
//           characterDetails={characterDetails}
//           editDetails={editDetails}
//         />
//         <View style={{ margin: 5 }}/>
//         <AbilityScoresView abilityScores={abilityScores} />
//     </View>
//   )
// }

// export { CharacterSheetView }

// const styles = StyleSheet.create({
//   main: {
  
//   }
// })