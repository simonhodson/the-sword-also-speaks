import { createDisplayText } from "../../../utilities/display-text";

const defensesTemplate = {
    dodge: undefined,
    fortitude: undefined,
    will: undefined,
    instinct: undefined
}

export type DefensesKey = keyof typeof defensesTemplate;

export type Defenses = Record<DefensesKey, number>;

export const defensesKeys = Object.keys(defensesTemplate) as DefensesKey[];
export const defensesDisplayText = createDisplayText(defensesKeys);