import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/profworld-survey.png'; // Replace with your image
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Adjust the path as necessary

const SurveysSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
        id="surveys-p"
      >
        {/* Text and Image Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
        >
          <Grid container spacing={{ xs: 0, xl: 2 }} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12} sx={{ margin: '0 auto' }}>
            {/* Text Section */}
            <Grid 
              item 
              xxs={12} 
              xl={5} 
              xxl={5}
              sx={{
                order: { xxs: 1, xl: 1 }, // Text comes first on all screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xxs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xxs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { lg: 'left' }, // Center text on small screens, left-align on large screens
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }} variant="h3">
                  Surveys
                </Typography>
                <FormattedText 
                  text="The «Surveys» section is designed to collect feedback from employees and allow you to assess employee satisfaction and engagement."
                  sx={{ pb: '8px', fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}
                />
                <FormattedText 
                  text="This section allows you to administer surveys at different stages of the employee lifecycle and assess employee engagement levels."
                  sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', pb: { md: '24px', xxs: '16px' }}}
                />
              </Box>
            </Grid>

            {/* Image Section - Takes 7 cols on lg and xxl */}
            <Grid 
              item 
              xxs={12} 
              xl={7} 
              xxl={7}
              xxxl={7}
              sx={{
                order: { xxs: 2, xl: 2 }, // Image comes second on all screens
                display: 'flex',
                justifyContent: { xxs: 'center', xxxl: 'flex-end' },
                width: {
                  xxxl: '673px'
                }
              }}
            >
              <Box
                component="img"
                src={img}
                alt="Surveys Section"
                sx={{
                  width: '100%',
                  borderRadius: '8px', // Optional: add some styling to the image
                  maxWidth: { xxxl: '673px' },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(SurveysSection);
