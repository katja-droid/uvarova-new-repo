import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import largeImage from '../assets/nutritionist-calendar.png'; // Default image for md and above
import smallImage from '../assets/nutritionist-calendar-md.png'; // Image for below md
import gif from '../assets/4 Calendar.gif'; // New GIF
import withScrollEffect from '../withScrollEffect.js';

const CalendarSection = () => {
  // Detect screen size below md
  const isBelowMd = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div id="calendar-v">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#fff',
            py: { xl: '80px', sm: '60px', xxs: '48px' },
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{
                justifyContent: {
                  xxs: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'center',
                  xl: 'space-between',
                  xxl: 'space-between',
                },
              }}
              direction={{ xs: 'column', md: 'row' }} // Stack on xxs-sm, side-by-side on md and above
            >
              <Grid
                item
                lg={1} // Size for large screens and above
                justifyContent="center"
                alignItems="center"
                order={1}
                sx={{
                  display: {
                    xxs: 'none',  // Hide on xxs
                    sm: 'block',  // Show on sm
                    md: 'none',   // Hide on md
                    lg: 'block',  // Show on lg and above
                  },
                }}
              ></Grid>
              {/* Image Column (order it before the text on small screens) */}
              <Grid item xs={12} lg={5} md={6} order={{ xxs: 2, md: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xxs: 'center', md: 'flex-start' },
                  }}
                >
                  <Box sx={{ width: { xxs: '100%', md: '100%' } }}>
                    {/* Conditionally render the image based on screen size */}
                    <img
                      src={isBelowMd ? smallImage : largeImage}
                      alt="Calendar"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    {/* GIF Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
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
                          width: 'auto', // Maintain GIF aspect ratio
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                lg={1} // Size for large screens and above
                justifyContent="center"
                alignItems="center"
                order={3}
                sx={{
                  display: {
                    xxs: 'none',  // Hide on xxs
                    sm: 'block',  // Show on sm
                    md: 'none',   // Hide on md
                    lg: 'block',  // Show on lg and above
                  },
                }}
              ></Grid>
              {/* Text Column (order it after the image on small screens) */}
              <Grid item xs={12} lg={4} md={6} order={{xxs: 1, md: 2  }}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: 'left',
                      fontSize: { md: '30px', xxs: '25px' },
                      fontFamily: 'Playfair Display Bold',
                      pb: '16px',
                    }}
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
                    The calendar feature allows users to conveniently track their workout plans and receive reminders about upcoming sessions.
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
                    This feature promotes organization, helps maintain motivation, and greatly increases the likelihood of success in achieving fitness goals.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default withScrollEffect(CalendarSection);
