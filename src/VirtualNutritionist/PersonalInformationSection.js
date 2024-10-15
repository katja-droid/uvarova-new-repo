import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import gif from '../assets/2 Personal Info.gif'; // Import the GIF
import withScrollEffect from '../withScrollEffect.js';

const PersonalInformationSection = () => {
  return (
    <div id="personal-v">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#fff',
            color: '#0A0A14', // Added color consistency
            py: { xl: '80px', sm: '60px', xxs: '48px' },
          }}
        >
          <Container disableGutters maxWidth={false}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{  justifyContent: {
                xxs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'space-between',
                xxl: 'space-between',
              },}}
              direction={{ xxs: 'column', md: 'row' }} // Stack on small screens, side-by-side on medium and above
            >
              {/* First Column - Text */}
              <Grid
                item
                xxs={12}
                sm={9}
                md={6}
                lg={5}
                order={{ xxs: 1, md: 3 }}
              >
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: { md: '30px', xxs: '25px' },
                      fontFamily: 'Playfair Display Bold', // Consistent heading font
                      pb: '16px',
                      width: '100%',
                    }}
                    variant="h4"
                  >
                    Personal information
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      pb: { lg: '24px', xxs: '16px' },
                      fontFamily: 'Calibre Regular', // Same paragraph font
                      width: {xxs: '100%', sm: '75%', md: '100%'}
                    }}
                  >
                    With a quick and easy registration, simply enter your personal information, select your occupation, and receive the latest analysis and recommendations.
                  </Typography>
                </Box>
              </Grid>

              <Grid
              item
              xxs={0}
              xs={0}
              sm={3}
              md={0}
              lg={1}
              justifyContent="center"
              alignItems="center"
              sx={{ display: {
                xxs: 'none',  // Hide on xxs
                sm: 'block',  // Show on sm
                md: 'none',   // Hide on md
                lg: 'block',  // Show on lg and above
              },}}
              order={2}
            ></Grid>

              {/* Second Column - GIF */}
              <Grid
                item
                xxs={6} 
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                order={{ xxs: 3, md: 1 }} // Adjust order at breakpoints
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: {
                      xxs: 'center',  // Center on extra small screens
                      md: 'flex-start',  // Align to flex-start on medium screens
                      lg: 'flex-end',  // Align to flex-end on large screens
                    },
                    alignItems: 'center', // Vertically align the image in the center
                    maxWidth: '100%', // Limit the width to the container's width
                    width: {md: '100%', xxs: '51%' },
                     margin: '0 auto'
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xxs: '100%',
                        sm: '100%',
                        lg: '304px',
                        xl: '304px',
                        xxl: '304px',
                      },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      
                    }}
                  >
                    <img
                      src={gif}
                      alt="Personal Information GIF"
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        margin: '0 auto'
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default withScrollEffect(PersonalInformationSection);
