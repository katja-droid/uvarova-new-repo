import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/pw4.gif'; // Replace with your image
import bg from '../assets/begin-background.png'; // Replace with your image
import RatioGif from './RatioGif';
import withScrollEffect from '../withScrollEffect.js';

const TestingSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
        }}
        id="testing-p"
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
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* Text Section */}
            <Grid 
              item 
              xs={12} 
              lg={5} 
              xl={5} 
              xxl={5}
              sx={{
                order: { xs: 1, lg: 1 }, // Text comes first on all screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { xs: 'center', lg: 'left' }, // Center text on small screens, left-align on large screens
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant="h3">
                Testing 
                </Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                In collaboration with psychologists, a «Test block» was developed that includes various psychological tests for more accurate candidate selection.    </Typography>
          
              </Box>
            </Grid>

            {/* Image Section - Takes 7 cols on lg and xxl */}
            <Grid 
              item 
              xs={12} 
              lg={7} 
              xl={7} 
              xxl={7}
              xxxl={7}
              sx={{
                order: { xs: 2, lg: 2 }, // Image comes second on all screens
                display: 'flex',
                justifyContent: 'center',
                width:{
                    xxxl: '673px'
                }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '673px',
                  borderRadius: '8px',

                }}
              >
              <RatioGif image={img} backgroundImage={bg}></RatioGif>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (TestingSection);
