import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-calendar.png'; // Existing image
import gif from '../assets/4 Calendar.gif'; // New GIF
import withScrollEffect from '../withScrollEffect.js';

const CalendarSection = () => {
  return (
    <div id="calendar-v">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
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
              justifyContent: 'space-between',
            }}
          >
            {/* First Column - Text Content */}
            <Grid item xxs={12} sm={12} md={5} lg={5} xl={5}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: { md: '30px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '16px',
                    width: '100%',
                  }}
                  variant='h4'
                >
                  Calendar
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                  }}
                >
                  The calendar feature allows users to conveniently track their workout plans and receive reminders about upcoming sessions.
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                  }}
                >
                  This feature promotes organization, helps maintain motivation, and greatly increases the likelihood of success in achieving fitness goals.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column - Image with GIF Overlay */} 
            <Grid item xxs={12} sm={12} md={7} lg={7} xl={7}>
              <Box
                sx={{
                  position: 'relative', // Make the box relative for GIF overlay
                  width: '100%',
                  padding: 0, // Remove all padding to avoid spacing issues
                  margin: 0, // Remove any potential margins
                }}
              >
                {/* Background Image */}
                <img 
                  width="100%" 
                  src={image} 
                  alt="Calendar" 
                  style={{ display: 'block', height: 'auto' }} // Ensure the image takes full width
                />

                {/* GIF Overlay - Left Aligned */}
                <Box
                  sx={{
                    position: 'absolute', // Position GIF overlay
                    top: 0,
                    left: 0, // Align to the left edge
                    height: '100%', // Full height of the image
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 1, // Ensure GIF is above the image
                  }}
                >
                  <img
                    src={gif}
                    alt="Calendar GIF"
                    style={{
                      height: '100%', // Ensure the GIF height matches the image height
                      width: 'auto', // Maintain GIF aspect ratio with auto width
                      objectFit: 'cover', // Ensure the GIF fills the container while maintaining aspect ratio
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

export default withScrollEffect (CalendarSection);
