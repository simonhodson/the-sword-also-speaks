import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  FatigueInputModal,
  HealthInputModal,
} from '../../../common/components/modals';
import { useCharacterStore } from '../../../store/useCharacterStore';
import { Initiative } from '../types/action-stats-types';

export const MAX_FATIGUE = 6;

const ICON_TEXT_SIZE = 24;

type CharacterHeaderViewProps = {
  screenHeight: number;
  maxHealth: number | undefined;
  currentHealth: number | undefined;
  currentFatigue: number | undefined;
  characterId: string;
  speed: number | undefined;
  initiative: Initiative | undefined;
  aces: number | undefined;
};

// type FatigueNodeTrack = { element: React.ReactNode; index: number };

function CharacterSubHeaderView({
  aces,
  characterId,
  currentFatigue,
  currentHealth,
  initiative,
  maxHealth,
  screenHeight,
  speed,
}: CharacterHeaderViewProps) {
  const updateHealth = useCharacterStore(
    (state) => state.updateCharacterHealth,
  );

  const [fatigueVisible, setFatigueVisible] = useState(false);
  const [healthVisible, setHealthVisible] = useState(false);

  function onEditFatigue(value?: number) {
    setFatigueVisible(false);
    if (value !== undefined) {
      updateHealth(characterId, { currentFatigue: value });
    }
  }

  function onEditHealth(value?: number) {
    setHealthVisible(false);
    if (value !== undefined) {
      updateHealth(characterId, { currentHealth: value });
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
      <View style={[styles.main, { height: screenHeight * 0.1 }]}>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.row}>
            <Icon
              size={ICON_TEXT_SIZE}
              name='cards-heart'
              color={'#fff'}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>{maxHealth}</Text>
            <Pressable
              style={styles.row}
              onPress={() => setHealthVisible(true)}
            >
              <Icon
                size={ICON_TEXT_SIZE}
                name='heart-broken'
                color={'#fff'}
                style={{ marginLeft: 5, marginRight: 5 }}
              />
              <Text style={styles.text}>{currentHealth}</Text>
            </Pressable>
          </View>
          <Pressable
            style={{ flexDirection: 'row' }}
            onPress={() => setFatigueVisible(true)}
          >
            {/* <Text style={styles.text}>Current Fatigue: </Text> */}
            {renderFatigue().map((e) => e)}
          </Pressable>
        </View>
        {/* Row 3 */}
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
      {healthVisible && currentHealth && maxHealth ? (
        <HealthInputModal
          currentHeath={currentHealth}
          maximumHealth={maxHealth}
          onSetValue={onEditHealth}
          modalVisible={healthVisible}
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
  rowEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
