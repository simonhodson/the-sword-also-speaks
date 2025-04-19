import { createDisplayText } from "../../../utilities/display-text";

type bodyPartStat = {
    total: number;
    armour: string;
    max: number;
    current: number;
}

const healthTemplate = {
    totalHealth: undefined as number | undefined,
    currentHealth: undefined as number | undefined,
    currentFatigue: undefined as number | undefined,
    head: undefined as bodyPartStat | undefined,
    torso: undefined as bodyPartStat | undefined,
    arms: undefined as bodyPartStat | undefined,
    crotch: undefined as bodyPartStat | undefined,
    legs:  undefined as bodyPartStat | undefined
}

export type HealthKey = keyof typeof healthTemplate;

export type Health = {
    [K in HealthKey] : typeof healthTemplate[K]
}

export type BodyPart = 'head' | 'torso' | 'arms' | 'crotch' | 'legs'; 

export const healthKeys = Object.keys(healthTemplate) as HealthKey[];
export const healthDisplayText = createDisplayText(healthKeys);