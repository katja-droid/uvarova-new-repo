import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/corporate-events.png';

import RatioGif from './RatioGif';
import withScrollEffect from '../withScrollEffect.js';

const CorporateEventsSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xs: '48px' }, // Changed xxs to xs
        }}
      >
        {/* Text and GIF Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
        >
          <Grid container spacing={{ xs: 0, xl: 2 }}  justifyContent="center" alignItems="center" sx={{ margin: '0 auto' }}>
            {/* Text Section */}
            <Grid 
              item 
              xxs={12} 
              lg={10}
              xl={5}
              sx={{
                order: { xs: 2, lg: 1 }, // Text comes second on smaller screens, first on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { xs: 'center', lg: 'left' }, // Center text on small screens, left-align on large
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }} variant="h3">
                  Corporate Events
                </Typography>
                <Typography sx={{ pb: { md: '24px', xs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                  Corporate Events contains information on scheduled and past events, divided into current and archived sections.
                  Each event is displayed in card format with details such as title, date, location, theme, responsible party, participants, and budget (for managers).
                </Typography>
              </Box>
            </Grid>

            {/* GIF Section - Takes 7 cols on xl */}
            <Grid 
              item 
              xxs={12} 
              lg={10}
              xl={7}
              sx={{
                order: { xs: 1, lg: 2 }, // GIF comes first on smaller screens, second on larger screens
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: { xl: '673px' } }}>
                <img src={img} width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(CorporateEventsSection);
