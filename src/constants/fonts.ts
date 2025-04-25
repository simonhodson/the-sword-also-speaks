import { isIOS } from '../utilities/platform-utils';

export const fontFamilies = {
  Gaegu: {
    regular: isIOS() ? 'Gaegu-Regular' : 'GaeguRegular',
    light: isIOS() ? 'Gaegu-Light' : 'GaeguLight',
    bold: isIOS() ? 'Gaegu-Bold' : 'GaeguBold',
  },
};
