import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    black: '#16161D',
    darkPrimaryColor: '#AFB42B',
    primaryColor: '#CDDC39',
    lightPrimaryColor: '#F0F4C3',
    textPrimaryColor: '#212121',
    accentColor: '#00a699',
    primaryTextColor: '#212121',
    secondaryTextColor: '#757575',
    dividerColor: '#BDBDBD',
  },
  fonts,
  breakpoints,
});

export default theme;
