import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import gif from '../assets/pw3.gif'; // Replace with your GIF
import bg from '../assets/begin-background.png'; // Replace with your background
import RatioGif from './RatioGif';
import withScrollEffect from '../withScrollEffect.js';

const CompanyRegistrationAfterSection = () => {
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
          <Grid container spacing={{ xs: 0, xl: 2 }} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12}  sx={{margin: '0 auto'}}>
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
                justifyContent: { xxs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xxs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { lg: 'left' } // Center text on small screens, left-align on large
              }}
            >
              <Box>
              <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold'}} variant="h3">
                Company Registration
                </Typography>
                <Typography sx={{ fontSize: { md: '24px',  xxs: '18px' }, fontFamily: 'Playfair Display Bold', pb: '16px'}} variant="h3">
                (after verification)
                </Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                Once successfully authenticated, you will need to complete the company information, including legal address, physical address, contact information, and additional links.
   </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', pb: { md: '24px', xxs: '16px' }, }}>
                It is also important to specify key aspects of your company policies, mission, vision, and values, and to upload a document explaining your company’s standards.
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', pb: {xxs: '24px', xl: 0} }}>
                Once all steps have been completed, you will receive notification of your new company’s incorporation.
                </Typography>    </Box>
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
                
                  
                  maxWidth: {xxxl: '673px'},
                
                 }}>
                {/* Use RatioGif here with a GIF */}
                <RatioGif image={gif} backgroundImage={bg} aspectRatio="66.95%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (CompanyRegistrationAfterSection);
