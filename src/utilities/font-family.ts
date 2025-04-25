import { fontFamilies } from '../constants/fonts';

export const getFontFamily = (font: keyof typeof fontFamilies) => {
  const { regular, light, bold } = fontFamilies[font];
  return {
    regular,
    light,
    bold,
  };
};
