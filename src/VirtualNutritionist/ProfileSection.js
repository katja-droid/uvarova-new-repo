import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-profile.png'; // Import the background image
import gif from '../assets/3 Profile.gif'; // Import the GIF
import withScrollEffect from '../withScrollEffect.js';

const ProfileSection = () => {
  return (
    <div id="profile-v">
    <ThemeProvider theme={theme}>
      <Box sx={{py: { xl: '80px', sm: '60px', xxs: '48px' }}}
 >
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
                    fontFamily: 'Playfair Display Bold', // Consistent heading font
                    pb: '24px',
                  }}
                  variant="h3"
                >
                  Profile
                </Typography>
                <Typography
                  sx={{
                    textAlign: { md: 'center', xxs: 'left' },
                    pb: { lg: '24px', xxs: '16px' },
                    fontFamily: 'Calibre Regular', // Same paragraph font as previous sections
                  }}
                >
                  The «Profile» section consolidates all the information you need to better understand your health status and achieve your goals. You can view your recommended calorie intake, optimal nutrient ratios, physical statistics and analysis, and more, receive personalized advice, and track your progress.
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
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image Container */}
        <Box
          sx={{
            width: '100%',
            backgroundImage: `url(${image})`, // Background image determines the height
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: 'auto', // Allow the image's height to determine the height
            position: 'relative',
            paddingTop: '56.25%', // Aspect ratio for the background image (16:9 for example)
          }}
        />

        {/* GIF Overlay */}
        <Box
          sx={{
            position: 'absolute', // Position GIF on top of the background
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2, // Ensure GIF is above the background
          }}
        >
          <img
            src={gif}
            alt="Profile GIF"
            style={{
              maxHeight: '100%',
              width: 'auto', // Maintain aspect ratio
            }}
          />
        </Box>
      </Box>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default withScrollEffect (ProfileSection);
