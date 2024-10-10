import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import backgroundImage from '../assets/begin-background.png'; // Import the background image
import gif from '../assets/pw1.gif'; // Import the GIF
import withScrollEffect from '../withScrollEffect.js';

const BeginSection = () => {
  return (
        <Box>
      {/* Text Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }
          
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* First Column - Text Content */}
            <Grid item xxs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '24px',
                  }}
                  variant="h3"
                >
                  Where to begin?
                </Typography>
                <Typography
                  sx={{
                    textAlign: { md: 'center', xxs: 'left' },
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                  }}
                >
                  First of all, you need to sign in or to create a new account.<br />
                  There is also an opportunity to choose the desired language (Ukrainian, English, or Russian).
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* GIF Section with Background Image Below */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '66.95%', // Aspect ratio for 935px width and 626px height
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          margin: '0 auto', // Center the entire block on the page
        }}
      >
        {/* Background Image Container */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* GIF Overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0, // Position the GIF at the bottom
            left: '50%',
            transform: 'translateX(-50%)', // Center the GIF horizontally
            width: '100%',
            height: '92%', // Adjust based on aspect ratio
            zIndex: 2, // Ensure the GIF is above the background
          }}
        >
          <img
            src={gif}
            alt="Begin Section GIF"
            style={{
              width: '100%', // Set the GIF width to fill the coverer
              height: '100%', // Set the GIF height to fill the coverer
              objectFit: 'cover', // Ensure the GIF fits within the dimensions
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          pb: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxl: '97px',
          },
        }}
      ></Box>
      </Box>
  );
};

export default withScrollEffect(BeginSection);
