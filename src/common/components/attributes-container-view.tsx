import type { PropsWithChildren } from 'react';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type AttributesContainerView = PropsWithChildren;

function AttributesContainerView({ children }: AttributesContainerView) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    minWidth: '90%',
    padding: 10,
    backgroundColor: '#f3f3f3',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export { AttributesContainerView };
