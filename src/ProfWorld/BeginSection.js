import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import backgroundImage from '../assets/begin-background.png'; // Import the background image
import gif from '../assets/pw1.gif'; // Import the GIF
import withScrollEffect from '../withScrollEffect.js';
import RatioGif from './RatioGif.js';

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
          pt: { xl: '80px', sm: '60px', xxs: '48px' },
          
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
         
          
        }}
      >
        {/* Background Image Container */}
        <RatioGif image={gif} backgroundImage={backgroundImage}/>
       </Box>
   
      </Box>
  );
};

export default withScrollEffect(BeginSection);
