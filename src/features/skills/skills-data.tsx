import React from 'react';
import { View, Dimensions } from 'react-native';

import { Skills } from './types/skills-types';
import { SkillsView } from './skills-view';


/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function SkillsData() {
    const { width: screenWidth } = Dimensions.get('window');
    const skills: Skills = {
        acrobatics: { suit: 'Spades', rank: 0 },
        arcana: { suit: 'Diamonds', rank: 0 },
        athletics: { suit: 'Clubs', rank: 0 },
        bluff: { suit: 'Hearts', rank: 0 },
        charm: { suit: 'Hearts', rank: 0 },
        hide: { suit: 'Spades', rank: 0 },
        history: { suit: 'Diamonds', rank: 0 },
        insight: { suit: 'Hearts', rank: 0 },
        intimidate: { suit: 'Hearts', rank: 0 },
        investigation: { suit: 'Diamonds', rank: 0 },
        legerdemain: { suit: 'Spades', rank: 0 },
        mechanism: { suit: 'Diamonds', rank: 0 },
        medicine: { suit: 'Diamonds', rank: 0 },
        nature: { suit: 'Diamonds', rank: 0 },
        perception: { suit: 'Hearts', rank: 0 },
        perform: { suit: 'Hearts', rank: 0 },
        religion: { suit: 'Diamonds', rank: 0 },
        research: { suit: 'Diamonds', rank: 0 },
        scuttlebutt: { suit: 'Hearts', rank: 0 },
        spellcasting: { suit: 'Diamonds', rank: 0 },
        survival: { suit: 'Spades', rank: 0 },
      }

  return (
    <View style={{ width: screenWidth }}>
      <SkillsView skills={skills} />
    </View>
    
  )
}