import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, View, Text} from 'react-native';

type AttributesContainerView = PropsWithChildren;

function AttributesContainerView({ children }: AttributesContainerView) {
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

export { AttributesContainerView };