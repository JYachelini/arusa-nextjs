'use client';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { themeBreakpoints, themePallete } from './theme.enum';

interface ThemeProp {
  children: JSX.Element;
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  interface TypographyVariantsOptions {
    large?: React.CSSProperties;
    regular?: React.CSSProperties;
    small?: React.CSSProperties;
  }
  interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
    stormy: Palette['primary'];
    smoke: Palette['primary'];
    ash: Palette['primary'];
    linen: Palette['primary'];
    oyster: Palette['primary'];
    cloudy: Palette['primary'];
    opal: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    stormy: PaletteOptions['primary'];
    smoke: PaletteOptions['primary'];
    ash: PaletteOptions['primary'];
    linen: PaletteOptions['primary'];
    oyster: PaletteOptions['primary'];
    cloudy: PaletteOptions['primary'];
    opal: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    black: true;
    stormy: true;
    smoke: true;
    ash: true;
    linen: true;
    oyster: true;
    cloudy: true;
    opal: true;
  }
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    teritary: true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    white: true;
    black: true;
    stormy: true;
    smoke: true;
    ash: true;
    linen: true;
    oyster: true;
    cloudy: true;
    opal: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    large: true;
    regular: true;
    small: true;
  }
}

const theme = createTheme({
  palette: {
    white: {
      main: themePallete.white
    },
    black: {
      main: themePallete.black
    },
    stormy: {
      main: themePallete.stormy
    },
    smoke: {
      main: themePallete.smoke
    },
    ash: {
      main: themePallete.ash
    },
    linen: {
      main: themePallete.linen
    },
    oyster: {
      main: themePallete.oyster
    },
    cloudy: {
      main: themePallete.cloudy
    },
    opal: {
      main: themePallete.opal
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {},
          style: {
            borderRadius: '6px',
            textTransform: 'uppercase',
            '&:disabled': {
              opacity: '0.3'
            }
          }
        },
        {
          props: { variant: 'primary' },
          style: ({ theme: t }) => ({
            color: t.palette.stormy.main,
            backgroundColor: t.palette.linen.main,
            '&:hover': {
              color: t.palette.white.main,
              backgroundColor: t.palette.opal.main
            },
            '&:disabled': {
              color: t.palette.stormy.main
            }
          })
        },
        {
          props: { variant: 'secondary' },
          style: ({ theme: t }) => ({
            color: t.palette.white.main,
            backgroundColor: t.palette.opal.main,
            '&:hover': {
              color: t.palette.stormy.main,
              backgroundColor: t.palette.oyster.main
            },
            '&:disabled': {
              color: t.palette.white.main
            }
          })
        },
        {
          props: { variant: 'outlined' },
          style: ({ theme: t }) => ({
            color: t.palette.stormy.main,
            borderColor: t.palette.oyster.main,
            '&:hover': {
              color: t.palette.white.main,
              backgroundColor: t.palette.opal.main,
              borderColor: 'transparent'
            },
            '&:disabled': {
              color: t.palette.stormy.main
            }
          })
        },
        {
          props: { variant: 'teritary' },
          style: ({ theme: t }) => ({
            color: t.palette.stormy.main,
            borderRadius: '0',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:after': {
              display: 'block',
              content: '""',
              borderBottom: '1px solid',
              borderColor: t.palette.stormy.main,
              position: 'absolute',
              bottom: '0',
              width: '100%',
              transform: 'scaleX(0)',
              transition: 'transform 300ms ease-in-out'
            },
            '&:hover:after': {
              transform: 'scaleX(1)'
            },
            '&:disabled': {
              color: t.palette.stormy.main
            }
          })
        }
      ]
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '1rem'
        }
      }
    },
    MuiBadge: {
      variants: [
        {
          props: { color: 'opal' },
          style: ({ theme: t }) => ({
            color: t.palette.stormy.main,
            borderRadius: '0',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:after': {
              display: 'block',
              content: '""',
              borderBottom: '1px solid',
              borderColor: t.palette.stormy.main,
              position: 'absolute',
              bottom: '0',
              width: '100%',
              transform: 'scaleX(0)',
              transition: 'transform 300ms ease-in-out'
            },
            '&:hover:after': {
              transform: 'scaleX(1)'
            },
            '&:disabled': {
              color: t.palette.stormy.main
            }
          })
        }
      ]
    }
  },
  breakpoints: {
    values: {
      mobile: themeBreakpoints.mobile,
      tablet: themeBreakpoints.tablet,
      laptop: themeBreakpoints.laptop,
      desktop: themeBreakpoints.desktop
    }
  },

  typography: {
    fontFamily: 'Reckless Neue, Neue Montreal',
    allVariants: {
      textTransform: 'none'
    },
    h1: {
      fontFamily: 'Reckless Neue',
      fontSize: '96px',
      lineHeight: '90%',
      letterSpacing: '-0.05em'
    },
    h2: {
      fontFamily: 'Reckless Neue',
      fontSize: '72px',
      lineHeight: '100%',
      letterSpacing: '-0.05em'
    },
    h3: {
      fontFamily: 'Reckless Neue',
      fontSize: '56px',
      lineHeight: '64px',
      letterSpacing: '-0.04em'
    },
    h4: {
      fontFamily: 'Reckless Neue',
      fontSize: '32px',
      lineHeight: '42px',
      letterSpacing: '-0.02em'
    },
    h5: {
      fontFamily: 'Reckless Neue',
      fontSize: '24px',
      lineHeight: '28px',
      letterSpacing: '-0.02em'
    },
    large: {
      fontFamily: 'Neue Montreal',
      fontSize: '19px',
      lineHeight: '24px',
      letterSpacing: '0.1em'
    },
    regular: {
      fontFamily: 'Neue Montreal',
      fontSize: '15px',
      lineHeight: '19px',
      letterSpacing: '0'
    },
    small: {
      fontFamily: 'Neue Montreal',
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '0.1em'
    },
    caption: {
      fontFamily: 'Neue Montreal',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0'
    }
  }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
