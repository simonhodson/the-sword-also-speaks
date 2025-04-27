import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// import IconF from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  FatigueInputModal,
  HealthInputModal,
} from '../../../common/components/modals';
import { useCharacterStore } from '../../../store/useCharacterStore';
import { Initiative } from '../types/action-stats-types';
import { BodyPart, Health, healthDisplayText } from '../types/health-types';

export const MAX_FATIGUE = 6;

const ICON_TEXT_SIZE = 24;

type CharacterHeaderViewProps = {
  screenHeight: number;
  healthStats: Health;
  characterId: string;
  speed: number | undefined;
  initiative: Initiative | undefined;
  aces: number | undefined;
};

// type FatigueNodeTrack = { element: React.ReactNode; index: number };

function CharacterSubHeaderView({
  aces,
  characterId,
  healthStats,
  initiative,
  screenHeight,
  speed,
}: CharacterHeaderViewProps) {
  const updateHealth = useCharacterStore(
    (state) => state.updateCharacterHealth,
  );

  const {
    arms,
    crotch,
    currentHealth,
    currentFatigue,
    head,
    legs,
    torso,
    totalHealth,
  } = healthStats;

  const [fatigueVisible, setFatigueVisible] = useState(false);

  type HealthIncreaseModal = {
    visible: boolean;
    bodyPart?: BodyPart;
    maxAvailable?: number;
    currentValue?: number;
  };
  const [healthVisible, setHealthVisible] = useState<HealthIncreaseModal>({
    visible: false,
  });

  function onEditFatigue(value?: number) {
    setFatigueVisible(false);
    if (value !== undefined) {
      updateHealth(characterId, { currentFatigue: value });
    }
  }

  function onEditHealth(bodyPart?: BodyPart, value?: number) {
    console.log('HEALTH <<< ', value, ' ', bodyPart);
    setHealthVisible({
      visible: false,
    });
    // if (value !== undefined) {
    //   updateHealth(characterId, { currentHealth: value });
    // }
  }

  function updatePart(bodyPart: BodyPart) {
    let maxAvailable, currentValue;

    switch (bodyPart) {
      case 'head':
        maxAvailable = head?.max;
        currentValue = head?.current;
        break;
      case 'torso':
        maxAvailable = torso?.max;
        currentValue = torso?.current;
        break;
      case 'arms':
        maxAvailable = arms?.max;
        currentValue = arms?.current;
        break;
      case 'crotch':
        maxAvailable = crotch?.max;
        currentValue = crotch?.current;
        break;
      case 'legs':
        maxAvailable = legs?.max;
        currentValue = legs?.current;
        break;
      default:
        break;
    }

    if (currentValue && maxAvailable) {
      setHealthVisible({
        visible: true,
        bodyPart,
        maxAvailable,
        currentValue,
      });
    }
  }

  function renderFatigue() {
    const maxIcons = [];
    for (let i = 0; i <= MAX_FATIGUE - 1; i++) {
      maxIcons.push(
        <Icon
          key={i}
          size={ICON_TEXT_SIZE}
          name={
            currentFatigue && currentFatigue > i
              ? 'square-rounded'
              : 'square-rounded-outline'
          }
          color={'#fff'}
          style={{ paddingRight: 5 }}
        />,
      );
    }
    return maxIcons;
  }

  return (
    <>
      <View style={[styles.main, { minHeight: screenHeight * 0.1 }]}>
        {/* Row 1 */}
        <View style={[styles.rowEvenly, { marginBottom: 10, marginRight: 5 }]}>
          <View style={styles.row}>
            <Icon
              size={ICON_TEXT_SIZE}
              name={'foot-print'}
              color={'#fff'}
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.text}>{speed}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              size={ICON_TEXT_SIZE}
              name={'cards-playing-heart-outline'}
              color={'#fff'}
              style={{ paddingRight: 5 }}
            />
            <View style={styles.circle}>
              <Text style={styles.text}>{initiative?.rank}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon
              size={ICON_TEXT_SIZE}
              name={'cards-playing-outline'}
              color={'#fff'}
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.text}>{aces}</Text>
          </View>
        </View>
        {/* Row 2 */}
        <View style={styles.rowTwo}>
          <View style={styles.row}>
            <Icon
              size={ICON_TEXT_SIZE}
              name='cards-heart'
              color={'#fff'}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>{totalHealth}</Text>
            <View style={styles.row}>
              <Icon
                size={ICON_TEXT_SIZE}
                name='heart-broken'
                color={'#fff'}
                style={{ marginLeft: 5, marginRight: 5 }}
              />
              <Text style={styles.text}>{currentHealth}</Text>
            </View>
          </View>
          <Pressable
            style={{ flexDirection: 'row' }}
            onPress={() => setFatigueVisible(true)}
          >
            {/* <Text style={styles.text}>Current Fatigue: </Text> */}
            {renderFatigue().map((e) => e)}
          </Pressable>
        </View>
        {/* Row 3 Health by Parts*/}
        <View style={styles.lastRow}>
          <Pressable
            onPress={() => updatePart('head')}
            style={styles.bodyParts}
          >
            <Text style={styles.text}>Head</Text>
            <Text style={styles.text}>{head?.current}</Text>
          </Pressable>
          <Pressable
            onPress={() => updatePart('torso')}
            style={styles.bodyParts}
          >
            <Text style={styles.text}>Torso</Text>
            <Text style={styles.text}>{torso?.current}</Text>
          </Pressable>
          <Pressable
            onPress={() => updatePart('arms')}
            style={styles.bodyParts}
          >
            <Text style={styles.text}>Arms</Text>
            <Text style={styles.text}>{arms?.current}</Text>
          </Pressable>
          <Pressable
            onPress={() => updatePart('crotch')}
            style={styles.bodyParts}
          >
            <Text style={styles.text}>Crotch</Text>
            <Text style={styles.text}>{crotch?.current}</Text>
          </Pressable>
          <Pressable
            onPress={() => updatePart('legs')}
            style={styles.bodyParts}
          >
            <Text style={styles.text}>Legs</Text>
            <Text style={styles.text}>{legs?.current}</Text>
          </Pressable>
        </View>
      </View>
      {fatigueVisible && currentFatigue !== undefined ? (
        <FatigueInputModal
          currentFatigue={currentFatigue}
          modalVisible={fatigueVisible}
          onSetValue={onEditFatigue}
        />
      ) : (
        false
      )}
      {healthVisible.visible &&
      healthVisible.bodyPart &&
      healthVisible.currentValue &&
      healthVisible.maxAvailable ? (
        <HealthInputModal
          currentPartName={healthDisplayText[healthVisible.bodyPart]}
          currentPartHealth={healthVisible.currentValue}
          maximumPartHealth={healthVisible.maxAvailable}
          onSetValue={onEditHealth}
          modalVisible={healthVisible.visible}
        />
      ) : (
        false
      )}
    </>
  );
}

export { CharacterSubHeaderView };

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    backgroundColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastRow: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  bodyParts: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Gaegu-Regular',
    fontWeight: 500,
    fontSize: ICON_TEXT_SIZE,
    paddingBottom: 2,
    color: '#fff',
  },
  heavyText: {
    fontFamily: 'Gaegu-Bold',
    fontSize: ICON_TEXT_SIZE,
    paddingBottom: 2,
    color: '#fff',
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
