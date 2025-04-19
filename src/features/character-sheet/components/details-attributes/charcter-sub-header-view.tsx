import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCharacterStore } from '../../../../store/useCharacterStore';
import FatigueInputModal from '../../../../common/components/modals/fatigue-input-modal';
import HealthInputModal from '../../../../common/components/modals/health-input-modal';

export const MAX_FATIGUE = 6;

type CharacterHeaderViewProps = {
  screenHeight: number;
  maxHealth: number | undefined;
  currentHealth: number | undefined;
  currentFatigue: number | undefined;
  characterId: string;
}

type FatigueNodeTrack = { element: React.ReactNode, index: number };

function CharacterSubHeaderView({
  screenHeight,
  currentHealth,
  currentFatigue,
  characterId,
  maxHealth
}: CharacterHeaderViewProps) {

  const updateHealth = useCharacterStore(state => state.updateCharacterHealth);

  const [fatigueVisible, setFatigueVisible] = useState(false);
  const [healthVisible, setHealthVisible] = useState(false);


  function onEditFatigue(value?: number) {
    setFatigueVisible(false);
    if (value !== undefined) {
      updateHealth(characterId, { currentFatigue: value })
    }
  }

  function onEditHealth(value?: number) {
    setHealthVisible(false);
    if (value !== undefined) {
      updateHealth(characterId, { currentHealth: value })
    }
  }

  function renderFatigue() {
    const maxIcons = [];
    for (let i = 0; i <= MAX_FATIGUE - 1; i++) {
      maxIcons.push(
        <Icon
          key={i}
          size={18}
          name={currentFatigue && currentFatigue > i ? 'square-rounded' : 'square-rounded-outline'}
          color={'#fff'}
          style={{ paddingRight: 5 }}
        />
      )
    }
    return maxIcons;
  }


  return (
    <>
      <View style={[styles.main, { height: screenHeight * 0.10 }]}>
        <View style={styles.fatigue}>
          <Pressable style={{ flexDirection: 'row' }} onPress={() => setFatigueVisible(true)}>
            <Text style={styles.text}>Fatigue: </Text>
            {renderFatigue().map(e => e)}
          </Pressable>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View style={styles.row}>
            <Icon
              size={18}
              name='cards-heart'
              color={'#fff'}
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.text}>{maxHealth}</Text>
            <Pressable style={styles.row} onPress={() => setHealthVisible(true)}>
              <Icon
                size={18}
                name='heart-broken'
                color={'#fff'}
                style={{ paddingLeft: 5, paddingRight: 5 }}
              />
              <Text style={styles.text}>{currentHealth}</Text>
            </Pressable>
          </View>
          {/* ADD MORE SIMPLE ROW ITEM HERE */}
        </View>
      </View>
      {fatigueVisible && currentFatigue !== undefined ? (
        <FatigueInputModal
          currentFatigue={currentFatigue}
          modalVisible={fatigueVisible}
          onSetValue={onEditFatigue}
        />
      ) : false }
      {healthVisible && currentHealth && maxHealth ? (
        <HealthInputModal
          currentHeath={currentHealth}
          maximumHealth={maxHealth}
          onSetValue={onEditHealth}
          modalVisible={healthVisible}
        />
      ) : false }
    </>
  )
}

export { CharacterSubHeaderView };


const styles = StyleSheet.create({
  main: {
    display: 'flex',
    backgroundColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fatigue: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  text: {
    fontFamily: "Gaegu-Regular",
    fontWeight: 500,
    fontSize: 22,
    paddingBottom: 2,
    color: '#fff'
  },
  heavyText: {
    fontFamily: "Gaegu-Bold",
    fontSize: 22,
    paddingBottom: 2,
    color: '#fff'
  },
})