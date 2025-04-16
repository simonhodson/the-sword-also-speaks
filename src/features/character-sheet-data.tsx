import React from 'react';
import { CharacterSheetView } from './character-sheet.view';
import { CharacterDetails } from './types/character-sheet-types';

/**
 * Data is responsible for creating, storing, fetching data for views
 */
export default function CharacterSheetData() {
    const characterDetails: CharacterDetails = {
        name: 'Milly Bobby-Brown',
        species: 'dwarf',
        archetype: 'martial',
        currentLevel: 1
    }

    return (
        <CharacterSheetView characterDetails={characterDetails}/>
    )
}