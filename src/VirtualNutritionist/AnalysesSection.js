import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-analyses.png';
import withScrollEffect from '../withScrollEffect.js';

const AnalysesSection = () => {
  return (
    <div id="analyses-v">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#F7F7F6', // Matches the background color of similar sections
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },

        }}
      >
        {/* Text Section - Full Width */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from text container
          }}
        >
          <Grid container justifyContent="flex-end">
            <Grid item xs={12} xl={6} lg={7} md={8} sm={8}>
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px', textAlign: 'left' }} variant="h3">
                  Analyses
                </Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', textAlign: 'left' }}>
                  In the «Analysis» section, you have the option to enter your test results, and the program will adapt your nutrition plan according to the recommendations and help you achieve your goals.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Image Section - Full Width */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from image container
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} md={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img width="100%" src={image} alt="Analysis" />
              </Box>
            </Grid>
          </Grid>
        </Container>
        
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default withScrollEffect (AnalysesSection);
