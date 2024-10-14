import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/pw6.gif'
import bg from '../assets/begin-background.png'
import RatioGif from './RatioGif';
import withScrollEffect from '../withScrollEffect.js';

const CandidateCardSection = () => {
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
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* Text Section */}
            <Grid 
              item 
              xs={12} 
              lg={5} 
              xl={5} 
              xxl={5}
              sx={{
                order: { xs: 1, lg: 2 }, // Text comes first on smaller screens, second on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xxs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xxs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { lg: 'left' } // Center text on small screens, left-align on large
              }}
            >
              <Box>
              <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant="h3">
              Candidate's personal card     </Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                The candidate profile consists of two blocks: a basic block and an extended block.
The basic block displays the candidate’s basic information, while the expanded block displays test and interview results.
This allows for a clearer assessment of the candidate, and user-friendly features allow for quick access and management of the information needed.
</Typography>     </Box>
            </Grid>

            {/* GIF Section - Takes 7 cols on lg and xxl */}
            <Grid 
              item 
              xs={12} 
              lg={7} 
              xl={7} 
              xxl={7}
              xxxl={7}
              sx={{
                order: { xs: 2, lg: 1 }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', // GIF comes second on smaller screens, first on larger screens
                width:{
                    xxxl: '673px'
                },
                 }}>
                {/* Use RatioGif here with a GIF */}
              <RatioGif image={img} backgroundImage={bg}/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(CandidateCardSection);
