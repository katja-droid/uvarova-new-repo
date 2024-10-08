import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import gif from '../assets/2 Personal Info.gif'; // Import the GIF

const PersonalInformationSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14', // Added color consistency
          py: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxl: '97px',
          },
        }}
      >
        <Container disableGutters maxWidth={false}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            direction={{ xxs: 'column', md: 'row' }} // Stack on small screens, side-by-side on medium and above
          >
            {/* Text Column */}
            <Grid item xxs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: { md: '30px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold', // Consistent heading font
                    pb: '16px',
                    width: '100%',
                  }}
                  variant="h4"
                >
                  Personal information
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    pb: { lg: '24px', xxs: '16px' },
                    fontFamily: 'Calibre Regular', // Same paragraph font
                  }}
                >
                  With a quick and easy registration, simply enter your personal information, select your occupation, and receive the latest analysis and recommendations.
                </Typography>
              </Box>
            </Grid>

            {/* GIF Column */}
            <Grid item xxs={12} md={6} order={{ xxs: 2, md: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  paddingRight: { md: '8.33%' }, // Consistent padding
                }}
              >
                <img
                  src={gif}
                  alt="Personal Information GIF"
                  style={{ width: '304px', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PersonalInformationSection;
