import { Suit } from "./character-sheet-types";
import { createDisplayText } from "../../../utilities/display-text";

type Initiative = { suit: Suit, rank: number };

const actionStatsTemplate = {
    speedScore: undefined as number | undefined,
    initiative: undefined as Initiative | undefined,
    basesAces: undefined as number | undefined
}

export type ActionStatsKey = keyof typeof actionStatsTemplate;

export type ActionStats = {
    [K in ActionStatsKey]: typeof actionStatsTemplate[K];
};

export const actionStatsKeys = Object.keys(actionStatsTemplate) as ActionStatsKey[];
export const actionStatsDisplayText = createDisplayText(actionStatsKeys);