import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/evaluation.png'
import withScrollEffect from '../withScrollEffect.js';

const EvaliuationSection = () => {
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
        {/* Text and GIF Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
          
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12}  sx={{margin: '0 auto'}}>
            {/* Text Section */}
            <Grid 
              item 
              xxs={12} 
              xl={5} 
              xxl={5}
              sx={{
                order: { xxs: 1, xl: 2 }, // Text comes first on smaller screens, second on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: 'left'  // Center text on small screens, left-align on large
              }}
            >
              <Box>
              <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant="h3">
              Evaluation for Accurate Employee Selection
                </Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                The process is designed to assess a candidate’s potential, strengths and weaknesses, motivation, and other important factors.
                There are a variety of tests that can be used for different purposes. For example, there are tests for personality traits, abilities, and knowledge.   </Typography>
                  </Box>
            </Grid>

            {/* GIF Section - Takes 7 cols on lg and xxl */}
            <Grid 
              item 
              xxs={12} 
              xl={7} 
              xxl={7}
              xxxl={7}
              sx={{
                order: { xxs: 2, xl: 1 }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', // GIF comes second on smaller screens, first on larger screens
                 maxWidth: {xxxl: '673px'}, }}>
                {/* Use RatioGif here with a GIF */}
               <img src={img} width="100%"/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (EvaliuationSection);
