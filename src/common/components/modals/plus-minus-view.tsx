import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TornPaperBox } from '../torn-paper-box-view';

type PlusMinusViewProps = {
  title: string;
  value: number;
  onPress: (increase: boolean) => void;
};

function PlusMinusView({ onPress, title, value }: PlusMinusViewProps) {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <TornPaperBox>
      <View style={[styles.main, { width: screenWidth * 0.8 }]}>
        <View style={styles.titleRow}>
          <Text style={styles.heavyText}>{title}</Text>
        </View>
        <View style={styles.adjustRow}>
          <Pressable style={{ flexDirection: 'row' }}>
            <Icon name='minus-circle' size={36} />
          </Pressable>
          <Text style={styles.heavyText}>{value}</Text>
          <Pressable style={{ flexDirection: 'row' }}>
            <Icon name='plus-circle' size={36} />
          </Pressable>
        </View>
      </View>
    </TornPaperBox>
  );
}

export { PlusMinusView };

const styles = StyleSheet.create({
  main: {
    height: 100,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleRow: {
    marginBottom: 15,
  },
  adjustRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heavyText: {
    fontFamily: 'Gaegu-Bold',
    fontSize: 32,
    paddingBottom: 2,
    color: '#000',
  },
});
