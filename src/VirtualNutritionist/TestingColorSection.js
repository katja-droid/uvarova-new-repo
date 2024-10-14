import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-calendar.png';
import ResponsiveGrid from './ResponsiveGrid';
import withScrollEffect from '../withScrollEffect.js';

const TestingColorSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#fff',
            color: '#0A0A14',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: { xl: '80px', sm: '60px', xxs: '48px' },

          }}
        >
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'left', // Ensure the text is always left-aligned
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: {
                  xs: 'flex-start',
                  sm: 'flex-start',
                  md: 'flex-start',
                  lg: 'flex-start',
                  xl: 'flex-start',
                  xxl: 'flex-start',
                },
              }}
            >
              {/* First Column */}
              <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box
                  sx={{
                    display: 'flex',
                    width: {
                      xxs: '100%', // Full width for small screens
                      sm: '100%',
                      md: '563px', // 563px for medium screens
                      lg: '573px', // 573px for large screens and above
                      xl: '573px',
                      xxl: '573px',
                    },
                    justifyContent: 'flex-start', // Left-align content inside the box
                    alignItems: 'center',
                    height: '100%',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'left', // Always left-aligned
                      fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                      fontFamily: 'Playfair Display Bold',
                      pb: '24px',
                      width: '100%', // Text block takes the full width of its container
                    }}
                    variant="h3"
                  >
                    Testing Color Contrast Accessibility
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'left', // Left-align text
                      fontSize: '18px',
                      lineHeight: '26px',
                      fontFamily: 'Calibre Regular',
                      pb: { lg: '24px', xxs: '16px' },
                      width: '100%', // Ensure it takes full width
                    }}
                  >
                    During my work on the Virtual Nutritionist app, I conducted a color contrast accessibility test on the interface buttons.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <ResponsiveGrid />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (TestingColorSection);
