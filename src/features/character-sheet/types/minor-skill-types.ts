import { createDisplayText } from "../../../utilities/display-text";

const minorSkillTemplate = {
    skillName: undefined as string | undefined,
    rank: undefined as number | undefined
}

export type MinorSkillKey = keyof typeof minorSkillTemplate;

export type MinorSkill = {
    [K in MinorSkillKey]: typeof minorSkillTemplate[K];
}

export const minorSkillKeys = Object.keys(minorSkillTemplate) as MinorSkillKey[];
export const minorSkillDisplayText = createDisplayText(minorSkillKeys);