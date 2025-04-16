import React from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { AttributesContainerView } from './components/attributes-container-view';
import { CharacterDetails, AbilityScores } from './types/character-sheet-types';

type CharacterSheetView = PropsWithChildren<{
    characterDetails: CharacterDetails;
}>;

function CharacterSheetView({
    characterDetails,
}: CharacterSheetView): React.JSX.Element {

    return (
        <View style={styles.main}>
            <AttributesContainerView>
                <Text>Name</Text>
                <Text>Age</Text>
                <Text>Sex</Text>
            </AttributesContainerView>
        </View>
    )
}

export { CharacterSheetView }

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})