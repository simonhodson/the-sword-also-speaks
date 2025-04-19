import { createDisplayText } from "../../../utilities/display-text";

type ArmouredPart = {
    total: number;
    armour: string;
    max: number;
    current: number
}

const armourStatsTemplate = {
   head: undefined as ArmouredPart | undefined,
   torso: undefined as ArmouredPart | undefined,
   crotch: undefined as ArmouredPart | undefined,
   arms: undefined as ArmouredPart | undefined,
   legs: undefined as ArmouredPart | undefined,
};

export type ArmourStatsKey = keyof typeof armourStatsTemplate;

export type ArmourStats = {
    [K in ArmourStatsKey]: typeof armourStatsTemplate[K]
}


export const armourStatsKeys = Object.keys(armourStatsTemplate) as ArmourStatsKey[];
export const armourStatsDisplayText = createDisplayText(armourStatsKeys);