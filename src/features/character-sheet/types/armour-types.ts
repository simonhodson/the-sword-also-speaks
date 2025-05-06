import { createDisplayText } from '../../../utilities/display-text';

const armourStatsTemplate = {
  head: undefined,
  torso: undefined,
  crotch: undefined,
  arms: undefined,
  legs: undefined,
};

export type ArmourStatsKey = keyof typeof armourStatsTemplate;

export type ArmourStats = Record<ArmourStatsKey, number>;

export type ArmourEquipped = Record<ArmourStatsKey, string>;

export const armourStatsKeys = Object.keys(
  armourStatsTemplate,
) as ArmourStatsKey[];

export const armourStatsDisplayText = createDisplayText(armourStatsKeys);
