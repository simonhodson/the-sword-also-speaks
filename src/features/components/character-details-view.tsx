import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, View, Text} from 'react-native';

type CharacterDetailsView = PropsWithChildren;

function CharacterDetailsView({ children }: CharacterDetailsView) {
    return (
        <View style={styles.main}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        width: '80%',
        padding: 10,
        backgroundColor: 'grey'
    }
});

export { CharacterDetailsView };