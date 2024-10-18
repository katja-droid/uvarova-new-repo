import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import backgroundImage from '../assets/begin-background.png'; // Import the background image
import gif from '../assets/pw1.gif'; // Import the GIF
import withScrollEffect from '../withScrollEffect.js';
import RatioGif from './RatioGif.js';
import FormattedText from '../FormattedText'; // Import your FormattedText component

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
              <Box sx={{ width: '100%' }}>
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
                <Box sx={{  }}>
                  <FormattedText
                    text={`First of all, you need to <span style="font-family: Calibre Medium">sign in</span> or to <span style="font-family: Calibre Medium">create a new account.</span>`}
                  />
                </Box>
                <FormattedText
                  text={`There is also an opportunity to<span style="font-family: Calibre Medium"> choose the desired language</span> (Ukrainian, English, or Russian).`}
                />
                <Box sx={{ pb: { md: '24px', xxs: '16px' } }} />
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
        <img src={gif} width="100%" />
      </Box>
    </Box>
  );
};

export default withScrollEffect(BeginSection);
