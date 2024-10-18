import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/corporate-events.png'; // Replace with your image
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Adjust the path as necessary

const CorporateEventsSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
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
          <Grid container spacing={{ xs: 0, xl: 2 }} justifyContent="center" alignItems="center" sx={{ margin: '0 auto' }}>
            {/* Image Section - Takes 7 cols on xl */}
            <Grid 
              item 
              xs={12} 
              xl={7} 
              xxl={7}
              sx={{
                order: { xs: 1, xl: 1 }, // Image comes first on larger screens
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={img} alt="Corporate Events" width="100%" style={{ borderRadius: '4px', maxWidth: '100%' }} />
              </Box>
            </Grid>

            {/* Text Section */}
            <Grid 
              item 
              xs={12} 
              lg={10}
              xl={5} 
              xxl={5}
              sx={{
                order: { xs: 2, xl: 2 }, // Text comes second on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { xs: 'center', lg: 'left' }, // Center text on small screens, left-align on large
                padding: { xs: '0 16px', md: '0' } // Add horizontal padding for small screens
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }} variant="h3">
                  Corporate Events
                </Typography>
                <FormattedText 
                  text="Corporate Events contains information on scheduled and past events, divided into current and archived sections."
                  sx={{ pb: '8px', fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}
                />
                <FormattedText 
                  text="Each event is displayed in card format with details such as title, date, location, theme, responsible party, participants, and budget (for managers)."
                  sx={{ pb: '8px', fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(CorporateEventsSection);
