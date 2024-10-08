import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,  // Custom breakpoint for extra-extra-small devices below 360px
      xs: 360,
      sm: 480,
      md: 600,
      lg: 905,
      xl: 1240,
      xxl: 1440,
      xxxl: 1600,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginLeft: 'auto',
          paddingRight: 'auto',
          '@media (max-width: 359px)': {  // For xxs screens (below 360px)
            paddingLeft: '12px',
            paddingRight: '0',
          },
          '@media (max-width: 479px)': {  // xs screens
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@media (min-width: 600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@media (min-width: 905px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@media (min-width: 1240px)': {
            paddingLeft: '35px',
            paddingRight: '35px',
          },
          '@media (min-width: 1440px)': {
            paddingLeft: '135px',
            paddingRight: '135px',
          },
          '@media (min-width: 1600px)': {
            paddingLeft: '160px',
            paddingRight: '160px',
          },
        },
      },
    },
  },
});

export default theme;
