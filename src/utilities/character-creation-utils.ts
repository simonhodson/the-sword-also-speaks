import { Archetype } from "../features/character-sheet/types/character-sheet-types";
import { ARCHETYPES } from "../rules-constants/archetypes";

// Default 3 is 8 start / the four abilities + initial 1 of all abilities
function calculateHealthByArchetype(type: Archetype, str: number = 3): number {
    switch (type) {
        case 'Martial':
            return ARCHETYPES[type].baseHealth + str;
        case 'Control':
            return ARCHETYPES[type].baseHealth + str;
        case 'Defender':
            return ARCHETYPES[type].baseHealth + str;
        case 'Spellcaster':
            return ARCHETYPES[type].baseHealth + str;
    }
}

export { calculateHealthByArchetype }