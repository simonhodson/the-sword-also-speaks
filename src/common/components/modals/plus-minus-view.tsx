import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type PlusMinusViewProps = {
  title: string;
  value: number;
  onPress: (increase: boolean) => void;
  disabled: number;
};

function PlusMinusView({
  onPress,
  title,
  value,
  disabled = 0,
}: PlusMinusViewProps) {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View style={[styles.main, { width: screenWidth * 0.8 }]}>
      <View style={styles.titleRow}>
        <Text style={styles.heavyText}>{title}</Text>
      </View>
      <View style={styles.adjustRow}>
        <Pressable
          onPress={() => onPress(false)}
          style={{ flexDirection: 'row' }}
          disabled={disabled <= -1}
        >
          <Icon
            name='minus-circle'
            size={36}
            color={disabled <= -1 ? '#a9a9a9' : '#000'}
          />
        </Pressable>
        <Text style={styles.heavyText}>{value}</Text>
        <Pressable
          onPress={() => onPress(true)}
          style={{ flexDirection: 'row' }}
          disabled={disabled >= 1}
        >
          <Icon
            name='plus-circle'
            size={36}
            color={disabled >= 1 ? '#a9a9a9' : '#000'}
          />
        </Pressable>
      </View>
    </View>
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
